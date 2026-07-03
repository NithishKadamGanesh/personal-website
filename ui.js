import { profile } from "./data.js";

/* ─────────────────────────── Theme toggle ─────────────────────────── */
// The initial theme is set by a tiny inline script in <head> (avoids a flash).
// Here we just wire the button and keep it in sync.
const root = document.documentElement;
const themeBtn = document.getElementById("themeToggle");

const currentTheme = () => (root.dataset.theme === "light" ? "light" : "dark");

function paintToggle() {
  if (!themeBtn) return;
  const dark = currentTheme() === "dark";
  themeBtn.textContent = dark ? "☀" : "☾";
  themeBtn.title = dark ? "Switch to light" : "Switch to dark";
  themeBtn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
}

function setTheme(t) {
  root.dataset.theme = t;
  try { localStorage.setItem("theme", t); } catch (e) {}
  paintToggle();
  window.dispatchEvent(new Event("themechange"));
}

paintToggle();
themeBtn?.addEventListener("click", () => setTheme(currentTheme() === "dark" ? "light" : "dark"));

// Follow the OS setting only while the visitor hasn't made an explicit choice.
window.matchMedia("(prefers-color-scheme: light)").addEventListener?.("change", (e) => {
  let saved;
  try { saved = localStorage.getItem("theme"); } catch (_) {}
  if (saved !== "light" && saved !== "dark") setTheme(e.matches ? "light" : "dark");
});

/* ─────────────────────────── Command palette (⌘K) ─────────────────── */
const isMac = /mac/i.test(navigator.platform || navigator.userAgent || "");
const paletteBtn = document.getElementById("paletteBtn");
if (paletteBtn) paletteBtn.textContent = isMac ? "⌘K" : "Ctrl K";

const scrollToEl = (el) => el.scrollIntoView({ behavior: "smooth", block: "start" });
const escapeHtml = (s) => s.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));

// Built fresh each open so nav links / theme state are always current.
function buildCommands() {
  const cmds = [];
  document.querySelectorAll(".topbar .nav a").forEach((a) => {
    const id = (a.getAttribute("href") || "").replace(/^#/, "");
    const target = id && document.getElementById(id);
    if (target) cmds.push({ kind: "Go to", label: a.textContent.trim(), run: () => scrollToEl(target) });
  });
  cmds.push({ kind: "Action", label: "Toggle light / dark theme", run: () => setTheme(currentTheme() === "dark" ? "light" : "dark") });
  if (profile.email) cmds.push({ kind: "Action", label: "Email Nithish", run: () => { window.location.href = `mailto:${profile.email}`; } });
  cmds.push({ kind: "Open", label: "Résumé (PDF)", run: () => window.open("/docs/Resume.pdf", "_blank", "noopener") });
  if (profile.github) cmds.push({ kind: "Open", label: "GitHub", run: () => window.open(profile.github, "_blank", "noopener") });
  if (profile.linkedin) cmds.push({ kind: "Open", label: "LinkedIn", run: () => window.open(profile.linkedin, "_blank", "noopener") });
  return cmds;
}

const overlay = document.createElement("div");
overlay.className = "cmdk-overlay";
overlay.hidden = true;
overlay.setAttribute("role", "dialog");
overlay.setAttribute("aria-modal", "true");
overlay.setAttribute("aria-label", "Command menu");
overlay.innerHTML = `
  <div class="cmdk-backdrop" data-cmdk-close></div>
  <div class="cmdk-panel">
    <input class="cmdk-input" type="text" placeholder="Search or jump to…" aria-label="Search commands" autocomplete="off" spellcheck="false" />
    <ul class="cmdk-list" role="listbox"></ul>
    <div class="cmdk-foot"><span><kbd>↑</kbd><kbd>↓</kbd> navigate</span><span><kbd>↵</kbd> select</span><span><kbd>esc</kbd> close</span></div>
  </div>`;
document.body.appendChild(overlay);

const input = overlay.querySelector(".cmdk-input");
const list = overlay.querySelector(".cmdk-list");
let commands = [];
let filtered = [];
let active = 0;
let lastFocus = null;

function render() {
  const q = input.value.trim().toLowerCase();
  filtered = q ? commands.filter((c) => (c.label + " " + c.kind).toLowerCase().includes(q)) : commands.slice();
  if (active >= filtered.length) active = Math.max(0, filtered.length - 1);
  if (!filtered.length) {
    list.innerHTML = `<div class="cmdk-empty">No matches</div>`;
    return;
  }
  list.innerHTML = filtered
    .map(
      (c, i) =>
        `<li class="cmdk-item${i === active ? " active" : ""}" role="option" data-i="${i}" aria-selected="${i === active}"><span class="cmdk-kind">${c.kind}</span><span class="cmdk-label">${escapeHtml(c.label)}</span><span class="cmdk-enter">↵</span></li>`
    )
    .join("");
}

function openPalette() {
  commands = buildCommands();
  lastFocus = document.activeElement;
  input.value = "";
  active = 0;
  render();
  overlay.hidden = false;
  document.body.classList.add("lightbox-open");
  requestAnimationFrame(() => input.focus());
}

function closePalette() {
  overlay.hidden = true;
  document.body.classList.remove("lightbox-open");
  if (lastFocus && lastFocus.focus) lastFocus.focus();
}

function runActive() {
  const c = filtered[active];
  if (!c) return;
  closePalette();
  c.run();
}

function move(d) {
  if (!filtered.length) return;
  active = (active + d + filtered.length) % filtered.length;
  render();
  list.querySelector(".cmdk-item.active")?.scrollIntoView({ block: "nearest" });
}

input.addEventListener("input", () => { active = 0; render(); });
list.addEventListener("mousemove", (e) => {
  const li = e.target.closest(".cmdk-item");
  if (li && +li.dataset.i !== active) { active = +li.dataset.i; render(); }
});
list.addEventListener("click", (e) => {
  const li = e.target.closest(".cmdk-item");
  if (li) { active = +li.dataset.i; runActive(); }
});
overlay.addEventListener("click", (e) => { if (e.target.hasAttribute("data-cmdk-close")) closePalette(); });
overlay.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") { e.preventDefault(); move(1); }
  else if (e.key === "ArrowUp") { e.preventDefault(); move(-1); }
  else if (e.key === "Enter") { e.preventDefault(); runActive(); }
  else if (e.key === "Escape") { e.preventDefault(); closePalette(); }
});

paletteBtn?.addEventListener("click", openPalette);
window.addEventListener("keydown", (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    overlay.hidden ? openPalette() : closePalette();
  }
});
