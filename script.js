const siteData = {
  profile: {
    name: "Nithish Kadam Ganesh",
    displayName: "Nithish",
    role: "Graduate engineer shipping practical products and backend systems",
    tagline:
      "MS in Computer Science at Northeastern, ex-Manhattan Associates engineer, AWS Certified, and builder of project pages that feel as polished as the products behind them.",
    logo: "/Logo.png",
    photo: "/photo.png",
    location: "Boston, MA",
    email: "nithishkadam@gmail.com",
    phone: "(617) 415-6651",
    linkedin: "https://www.linkedin.com/in/nithishkadam/",
    github: "https://github.com/NithishKadamGanesh/",
    x: "https://x.com/nithishkadam98",
    availability:
      "Open to software engineering roles across backend, product, cloud, and platform teams.",
  },
  metrics: [
    { value: "🥉", label: "State amateur boxing bronze medal", isText: true },
    { value: 140, label: "Arcanum registrations and 90+ concurrent users", decimals: 0, suffix: "+" },
    { value: 2, label: "Work awards", decimals: 0 },
    { value: 794, label: "AWS score", decimals: 0 },
  ],
  arcanumSpotlight: {
    eyebrow: "Arcanum Highlight",
    title: "140+ registrations, 90+ active concurrent users, and 12K+ submissions in a 10-hour live puzzle event.",
    summary:
      "Built Arcanum as a hosted Northeastern-wide puzzle platform with immersive frontend gameplay, FastAPI backend services, vector-based answer feedback, and a $250 first-place prize pool.",
  },
  ticker: [
    "Java",
    "Spring Boot",
    "Go",
    "C++",
    "TypeScript",
    "Node.js",
    "React",
    "Swift",
    "FastAPI",
    "AWS",
    "Docker",
    "Kubernetes",
    "Terraform",
    "RabbitMQ",
    "Kafka",
    "Redis",
    "PostgreSQL",
    "MongoDB",
    "Sentence Transformers",
    "RapidFuzz",
    "Microservices",
    "Distributed Systems",
  ],
  projects: [
    {
      title: "Arcanum",
      type: "Full-Stack Platform",
      summary:
        "A university-wide puzzle platform with 140+ registrations, 90+ active concurrent players, and 12K+ answer submissions across a 10-hour event with a $250 first-place prize.",
      stack: "React - Vite - Tailwind CSS - FastAPI - SQLAlchemy - PostgreSQL",
      tools: ["FastAPI", "SQLAlchemy", "PostgreSQL", "Sentence Transformers"],
      theme: "theme-amber",
      layout: "media",
      image: "/arcanum-logo.png",
      link: "https://github.com/Arcanum-CTF",
    },
    {
      title: "CityDiaries",
      type: "Website App",
      summary:
        "Travel diary app for sharing city hotspots, photos, reviews, comments, and memorable places people want to revisit.",
      stack: "MongoDB - EJS - Express.js - Node.js",
      tools: ["MongoDB", "EJS", "Express.js", "Node.js"],
      theme: "theme-blue",
      layout: "media",
      image: "/citydiaries.png",
      link: "https://github.com/NithishKadamGanesh/CityDiaries",
    },
    {
      title: "Fudget",
      type: "Mobile App",
      summary:
        "Recipe recommendation app that recognizes ingredients through ML and turns what you already have into practical cooking suggestions.",
      stack: "Swift - CreateML - REST APIs",
      tools: ["Swift", "CreateML", "REST APIs"],
      theme: "theme-green",
      layout: "media",
      image: "/fudget.png",
      link: "https://github.com/NithishKadamGanesh/Fudget",
    },
  ],
  skillCategories: [
    {
      label: "Languages",
      color: "var(--cyan)",
      items: ["Java", "C++", "Go", "TypeScript", "JavaScript", "PHP", "SQL", "Swift"],
    },
    {
      label: "Frameworks",
      color: "var(--pink)",
      items: ["Spring Boot", "Hibernate", "Node.js", "Express", "React", "React Native", "Laravel"],
    },
    {
      label: "Databases",
      color: "var(--lime)",
      items: ["PostgreSQL", "OracleSQL", "MySQL", "MongoDB", "Redis"],
    },
    {
      label: "Cloud",
      color: "var(--amber)",
      items: ["AWS", "Docker", "Kubernetes", "Terraform", "RabbitMQ", "Kafka", "Jenkins", "Grafana"],
    },
  ],
  awards: [
    { title: "Above & Beyond", date: "Apr 2022", image: "/above&Beyond.jpg" },
    { title: "Star of the Quarter", date: "Jan 2023", image: "/starOfTheQuarter.jpg" },
  ],
  experience: [
    {
      role: "Full-Stack Developer Intern",
      company: "Wintergreen",
      date: "Jun-Dec 2025",
      note:
        "Reporting infra, APIs, healthcare workflows using Node.js, Express, JasperReports, React Native, PHP, and Laravel.",
    },
    {
      role: "Software Engineer",
      company: "Manhattan Associates",
      date: "Sep 2021-Nov 2023",
      note:
        "Distributed transaction flows, messaging pipelines, and WMS enhancements for global clients.",
    },
    {
      role: "Technical Analyst Intern",
      company: "Manhattan Associates",
      date: "Aug-Sep 2021",
      note:
        "Internal automation and RF workflows that improved inbound processing speed by 40%.",
    },
  ],
  docs: [
    { label: "Resume", href: "/docs/Resume.pdf" },
    { label: "AWS Cert", href: "/docs/AWS%20Certified%20Solutions%20Architect%20-%20Associate.pdf" },
    { label: "Transcript", href: "/docs/Unofficial_Academic_Transcript%20(1).pdf" },
    { label: "Cover Letter", href: "/docs/CoverLetter.pdf" },
    { label: "Brunda LOR", href: "/docs/Brunda_LOR.pdf" },
    { label: "Maneesh LOR", href: "/docs/Maneesh-LOR.pdf" },
    { label: "Niranjan LOR", href: "/docs/Niranjan_LOR.pdf" },
  ],
  endorsements: [
    {
      author: "Brunda B.N.",
      role: "Principal CTS, Manhattan",
      quote:
        "Quick learner, organized, self-motivated, resolves complex issues with strong design thinking and dependable execution.",
    },
    {
      author: "Maneesh Melath",
      role: "Manager CTS, Manhattan",
      quote:
        "Advanced programming skills, critical thinking, strong communication, and the ability to deliver highly scaled projects to production.",
    },
    {
      author: "Niranjan Bangera",
      role: "Sr. Manager CTS, Manhattan",
      quote:
        "Bright, dependable team player who picked up complex systems quickly and consistently delivered on time.",
    },
  ],
  education: {
    school: "Northeastern University",
    degree: "M.S. Computer Science",
    period: "Sep 2024-Aug 2026",
    text:
      "GPA 3.93. Coursework includes Algorithms, AI, Database Systems, Computer Systems, NLP, and Scalable Distributed Systems.",
  },
  funFacts: [
    { emoji: "\u26BD", text: "Chelsea FC die-hard" },
    { emoji: "\uD83C\uDFCE\uFE0F", text: "F1 fan (Verstappen)" },
    { emoji: "\uD83C\uDFCF", text: "RCB through it all" },
    { emoji: "\uD83E\uDD4A", text: "State boxing bronze" },
    { emoji: "\uD83D\uDCDA", text: "Manga & manhwa reader" },
  ],
  twinPrompts: [
    "Summarize your GitHub profile",
    "What are your top projects?",
    "Tell me about Arcanum",
    "What did you do at Manhattan Associates?",
    "Tell me a fun fact about yourself",
  ],
  workAuth:
    "F-1 visa - CPT/OPT/STEM OPT eligible through July 2029 - Will need H-1B sponsorship.",
};

const app = document.querySelector("#app");
const d = siteData;
const linkAttrs = (href) => (href.startsWith("http") ? 'target="_blank" rel="noreferrer"' : "");
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const containsAny = (text, terms) => terms.some((term) => text.includes(term));
const tickerHTML = [...d.ticker, ...d.ticker].map((item) => `<span>${item}</span>`).join("");
const funHTML = [...d.funFacts, ...d.funFacts, ...d.funFacts]
  .map((fact) => `<span class="fun-chip"><span class="fun-emoji">${fact.emoji}</span>${fact.text}</span>`)
  .join("");
const icons = {
  email: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 2 8 5 8-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  linkedin: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56A1.96 1.96 0 1 0 3.24 5a1.96 1.96 0 0 0 3.92-.06ZM20.44 13.02c0-3.46-1.85-5.07-4.32-5.07-1.99 0-2.88 1.1-3.38 1.87V8.5H9.37c.04.88 0 11.5 0 11.5h3.37v-6.42c0-.34.02-.68.12-.92.27-.68.87-1.38 1.88-1.38 1.32 0 1.85 1 1.85 2.47V20h3.37v-6.98Z" fill="currentColor"/>
    </svg>
  `,
  github: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.6 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.2-3.37-1.2-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.12 0-1.13.39-2.06 1.03-2.79-.11-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.84c.85 0 1.7.12 2.5.35 1.9-1.34 2.74-1.06 2.74-1.06.55 1.41.21 2.46.1 2.72.64.73 1.03 1.66 1.03 2.79 0 3.98-2.34 4.85-4.57 5.11.36.32.68.94.68 1.89 0 1.36-.01 2.45-.01 2.79 0 .27.18.6.69.49A10.27 10.27 0 0 0 22 12.26C22 6.6 17.52 2 12 2Z" fill="currentColor"/>
    </svg>
  `,
};

const twinReply = (question) => {
  const q = question.toLowerCase();

  if (containsAny(q, ["hello", "hi", "introduce", "who are you", "about"])) {
    return "Hi, I'm Nithish. I'm an MS CS student at Northeastern, an ex-Manhattan Associates engineer, AWS Certified, and someone who enjoys building backend systems, full-stack products, and projects you can actually explore on GitHub.";
  }
  if (containsAny(q, ["background", "summary", "career", "github"])) {
    return "My background combines graduate CS work at Northeastern with production engineering at Manhattan Associates and a full-stack internship at Wintergreen. Projects like CityDiaries, Fudget, and Arcanum show my web, mobile, backend, and interactive product range.";
  }
  if (containsAny(q, ["northeastern", "education", "gpa", "course", "study"])) {
    return "I'm pursuing an M.S. in Computer Science at Northeastern University with a 3.93 GPA. My coursework includes Algorithms, AI, Database Systems, Computer Systems, NLP, and Scalable Distributed Systems.";
  }
  if (containsAny(q, ["manhattan", "warehouse", "wms", "software engineer"])) {
    return "At Manhattan Associates, I worked as a Software Engineer from September 2021 to November 2023. I built distributed messaging and WMS enhancements for global clients, and I was recognized with two company awards.";
  }
  if (containsAny(q, ["wintergreen", "internship", "healthcare", "jasper"])) {
    return "At Wintergreen, I worked as a Full-Stack Developer Intern from June to December 2025 on a healthcare reporting pipeline using Node.js, Express, JasperReports, React Native, PHP, and Laravel.";
  }
  if (containsAny(q, ["aws", "certification", "cloud", "architect"])) {
    return "I'm AWS Certified Solutions Architect - Associate, and I scored 794 on the exam. It reflects my interest in secure, resilient, high-performing, and cost-optimized cloud design.";
  }
  if (containsAny(q, ["project", "citydiaries", "fudget", "arcanum", "pinned", "top projects"])) {
    return "The three projects I want to feature most are CityDiaries, Fudget, and Arcanum. CityDiaries shows full-stack web development, Fudget highlights iOS and ML experimentation, and Arcanum is a richer full-stack platform with an immersive frontend plus backend support for authentication, submissions, and leaderboard flows.";
  }
  if (containsAny(q, ["arcanum", "sentence transformer", "vector", "distance", "puzzle platform", "ctf"])) {
    return "Arcanum is a hosted Northeastern puzzle platform I worked on across both frontend and backend. It handled 140+ registrations, 90+ active concurrent users, and 12K+ submissions in about 10 hours. The frontend used React, Vite, Tailwind CSS, React Router, Axios, and Three.js-style immersive scenes for ten trials, while the backend used FastAPI, SQLAlchemy, Alembic, PostgreSQL, JWT auth, OTP verification, rate limiting, leaderboards, hint systems, and special interaction endpoints. One of the most interesting backend pieces was the answer-feedback layer, which used sentence-transformer embeddings, a vector distance calculator, and RapidFuzz to tell players whether they were very close, warm, or cold when they submitted incorrect answers.";
  }
  if (containsAny(q, ["award", "recognition"])) {
    return "I received Above & Beyond and Star of the Quarter at Manhattan Associates. Those recognitions reflect production impact and engineering trust.";
  }
  if (containsAny(q, ["skill", "stack", "tech"])) {
    return "My stack includes Java, C++, Go, TypeScript, JavaScript, PHP, SQL, and Swift, plus Spring Boot, Node.js, Express, React Native, Laravel, AWS, Docker, Kubernetes, Terraform, RabbitMQ, Kafka, and Redis.";
  }
  if (containsAny(q, ["role", "looking for", "job", "opportunity"])) {
    return "I'm targeting backend, platform, cloud, and product-minded full-stack roles, especially teams working on scalable systems and API-driven products.";
  }
  if (containsAny(q, ["fun", "chelsea", "f1", "rcb", "boxing", "manga"])) {
    return "Outside work, I'm a Chelsea fan, a big F1 follower, an RCB supporter, a state boxing bronze medalist, and a regular manga/manhwa reader.";
  }
  if (containsAny(q, ["visa", "authorization", "opt", "sponsorship"])) {
    return "I'm on F-1 status with CPT, OPT, and STEM OPT eligibility through July 2029. For long-term US employment, I would need H-1B sponsorship.";
  }
  if (containsAny(q, ["contact", "email", "phone", "linkedin"])) {
    return "You can reach me at nithishkadam@gmail.com or (617) 415-6651. My LinkedIn, GitHub, and X are all linked on this site.";
  }

  return "I combine grad CS training with production engineering experience across backend, mobile, and full-stack work. Ask me about Manhattan Associates, Northeastern, AWS, projects, or the roles I'm looking for.";
};

app.innerHTML = `
  <div class="cursor-glow"></div>
  <div class="grid-plane"></div>

  <section class="hero-shell" id="about" data-reveal>
    <div class="hero-copy">
      <div class="hero-brandline">
        <img class="hero-logo" src="${d.profile.logo}" alt="Logo" />
        <div class="eyebrow">Nithish Kadam Ganesh</div>
      </div>
      <h1><span id="typedTarget"></span><span class="typed-cursor"></span></h1>
      <p class="hero-tagline">${d.profile.tagline}</p>
      <div class="hero-cta">
        <a class="cta cta-primary magnetic" href="mailto:${d.profile.email}">Email Me</a>
        <a class="cta cta-secondary magnetic" href="/docs/Resume.pdf">Resume</a>
      </div>
      <div class="hero-meta">
        <span>${d.profile.location}</span>
        <span>${d.profile.availability}</span>
      </div>
      <div class="profile-links">
        <a class="profile-link icon-link" href="mailto:${d.profile.email}" aria-label="Email" title="Email">${icons.email}</a>
        <a class="profile-link icon-link" href="${d.profile.linkedin}" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">${icons.linkedin}</a>
        <a class="profile-link icon-link" href="${d.profile.github}" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">${icons.github}</a>
      </div>
    </div>

    <div class="hero-stage">
      <div class="orb orb-one"></div>
      <div class="orb orb-two"></div>
      <article class="portrait-panel tilt-card">
        <div class="portrait-glow"></div>
        <img src="${d.profile.photo}" alt="Nithish" />
      </article>
      <div class="float-card top-card tilt-card"><span>Graduate GPA</span><strong>3.93</strong></div>
      <div class="float-card mid-card tilt-card"><span>AWS Certified</span><strong>Solutions Architect</strong></div>
      <div class="float-card low-card tilt-card"><span>Recognition</span><strong>2 Manhattan awards</strong></div>
    </div>
  </section>

  <section class="metrics-band" data-reveal>
    ${d.metrics
      .map(
        (metric) => `
          <div class="metric-pill">
            <strong>${
              metric.isText
                ? `<span class="metric-text">${metric.value}</span>`
                : `<span class="counter" data-target="${metric.value}" data-decimals="${metric.decimals}" data-prefix="${metric.prefix || ""}" data-suffix="${metric.suffix || ""}">0</span>`
            }</strong>
            <span>${metric.label}</span>
          </div>
        `
      )
      .join("")}
  </section>

  <section class="ticker-shell" data-reveal><div class="ticker-track">${tickerHTML}</div></section>

  <section class="showcase-shell" id="featured" data-reveal>
    <div class="section-headline">
      <div>
        <div class="eyebrow">Featured</div>
        <h2>What I've built.</h2>
      </div>
      <p>Three projects that best represent my range: full-stack web, iOS + ML, and a campus-scale puzzle platform.</p>
    </div>
    <article class="project-spotlight">
      <div class="project-spotlight-eyebrow">${d.arcanumSpotlight.eyebrow}</div>
      <h3>${d.arcanumSpotlight.title}</h3>
      <p>${d.arcanumSpotlight.summary}</p>
    </article>
    <div class="showcase-grid">
      ${d.projects
        .map(
          (project) => `
            <a class="showcase-card tilt-card ${project.theme}" href="${project.link}" ${linkAttrs(project.link)}>
              <div class="showcase-noise"></div>
              ${
                project.layout === "media"
                  ? `
                    <div class="showcase-type">${project.type}</div>
                    <h3>${project.title}</h3>
                    <p>${project.summary}</p>
                    <div class="showcase-media-frame">
                      ${
                        project.title === "CityDiaries"
                          ? `
                            <div class="device-shell monitor-shell">
                              <img class="showcase-preview showcase-preview-inline monitor-screen" src="${project.image}" alt="${project.title} preview" />
                              <div class="monitor-stand"></div>
                            </div>
                          `
                          : project.title === "Fudget"
                            ? `
                              <div class="device-shell phone-shell">
                                <img class="showcase-preview showcase-preview-inline phone-screen" src="${project.image}" alt="${project.title} preview" />
                              </div>
                            `
                            : `<img class="showcase-preview showcase-preview-inline" src="${project.image}" alt="${project.title} preview" />`
                      }
                    </div>
                    <div class="showcase-tool-row">
                      ${(project.tools || []).map((tool) => `<span class="showcase-tool">${tool}</span>`).join("")}
                    </div>
                  `
                  : `
                    <div class="showcase-type">${project.type}</div>
                    <h3>${project.title}</h3>
                    <p>${project.summary}</p>
                    <div class="showcase-stack">${project.stack}</div>
                  `
              }
            </a>
          `
        )
        .join("")}
    </div>
  </section>

  <section class="flow-section" id="mosaic" data-reveal>
    <div class="section-headline">
      <div>
        <div class="eyebrow">The Full Picture</div>
        <h2>Experience, skills, and proof points.</h2>
      </div>
      <p>Switch between the important layers instead of trying to read everything at once.</p>
    </div>

    <div class="full-tabs">
      <div class="full-tab-buttons" role="tablist" aria-label="Full picture tabs">
        <button class="full-tab-button active" data-full-tab="experience" role="tab" aria-selected="true">Experience</button>
        <button class="full-tab-button" data-full-tab="skills" role="tab" aria-selected="false">Skills</button>
        <button class="full-tab-button" data-full-tab="awards" role="tab" aria-selected="false">Awards</button>
        <button class="full-tab-button" data-full-tab="docs" role="tab" aria-selected="false">Docs</button>
        <button class="full-tab-button" data-full-tab="references" role="tab" aria-selected="false">References</button>
      </div>

      <div class="full-tab-panels">
        <section class="full-tab-panel active" data-full-panel="experience">
          <div class="full-grid">
            <article class="full-card timeline-card-large">
              <div class="bento-label cyan">Experience</div>
              <div class="timeline-list">
                ${d.experience
                  .map(
                    (item) => `
                      <div class="timeline-item">
                        <div class="timeline-item-top">
                          <span class="timeline-date">${item.date}</span>
                          <strong>${item.company}</strong>
                        </div>
                        <h3>${item.role}</h3>
                        <p>${item.note}</p>
                      </div>
                    `
                  )
                  .join("")}
              </div>
            </article>

            <article class="full-card compact-card">
              <div class="bento-label pink">Education</div>
              <h3>${d.education.school}</h3>
              <strong>${d.education.degree} - ${d.education.period}</strong>
              <p>${d.education.text}</p>
              <p class="work-auth compact-auth">${d.workAuth}</p>
            </article>

            <article class="full-card compact-card">
              <div class="bento-label lime">Beyond Code</div>
              <div class="fun-grid">${d.funFacts
                .map(
                  (fact) => `
                    <span class="fun-chip"><span class="fun-emoji">${fact.emoji}</span>${fact.text}</span>
                  `
                )
                .join("")}</div>
            </article>
          </div>
        </section>

        <section class="full-tab-panel" data-full-panel="skills">
          <article class="full-card span-2">
            <div class="bento-label lime">Skills</div>
            <div class="skill-groups">
              ${d.skillCategories
                .map(
                  (category) => `
                    <div class="skill-group">
                      <div class="skill-group-label" style="color:${category.color}">${category.label}</div>
                      <div class="bento-skills">
                        ${category.items
                          .map((item) => `<span class="bento-skill" style="--accent:${category.color}">${item}</span>`)
                          .join("")}
                      </div>
                    </div>
                  `
                )
                .join("")}
            </div>
          </article>
        </section>

        <section class="full-tab-panel" data-full-panel="awards">
          <article class="full-card compact-card">
            <div class="bento-label amber">Awards</div>
            <div class="mini-awards side-by-side-awards">
              ${d.awards
                .map(
                  (award, index) => `
                    <button
                      class="mini-award"
                      type="button"
                      data-certificate-index="${index}"
                      aria-label="View ${award.title} certificate"
                    >
                      <img class="mini-award-image" src="${award.image}" alt="${award.title}" />
                      <div>
                        <strong>${award.title}</strong>
                        <p>${award.date}</p>
                        <span class="mini-award-hint">View certificate</span>
                      </div>
                    </button>
                  `
                )
                .join("")}
            </div>
          </article>
        </section>

        <section class="full-tab-panel" data-full-panel="docs">
          <div class="docs-preview-layout">
            <article class="full-card">
              <div class="bento-label cyan">Documents</div>
              <div class="docs-list">
                ${d.docs
                  .map(
                    (doc, index) => `
                      <button
                        class="doc-preview-chip${index === 0 ? " active" : ""}"
                        type="button"
                        data-doc-label="${doc.label}"
                        data-doc-href="${doc.href}"
                      >
                        ${doc.label}
                      </button>
                    `
                  )
                  .join("")}
              </div>
            </article>

            <article class="full-card doc-preview-card">
              <div class="doc-preview-head">
                <div>
                  <div class="bento-label pink">Preview</div>
                  <strong id="docPreviewTitle">${d.docs[0].label}</strong>
                </div>
                <a class="doc-open-link" id="docPreviewOpen" href="${d.docs[0].href}" ${linkAttrs(d.docs[0].href)}>Open</a>
              </div>
              <div class="doc-preview-frame-wrap">
                <iframe
                  id="docPreviewFrame"
                  class="doc-preview-frame"
                  src="${d.docs[0].href}"
                  title="${d.docs[0].label} preview"
                ></iframe>
              </div>
            </article>
          </div>
        </section>

        <section class="full-tab-panel" data-full-panel="references">
          <article class="full-card">
            <div class="bento-label pink">Recommendations</div>
            <div class="references-grid">
              ${d.endorsements
                .map(
                  (endorsement) => `
                    <article class="reference-card">
                      <p class="endorsement-quote">"${endorsement.quote}"</p>
                      <div class="endorsement-author">${endorsement.author} - ${endorsement.role}</div>
                    </article>
                  `
                )
                .join("")}
            </div>
          </article>
        </section>
      </div>
    </div>
  </section>

  <section class="flow-section" id="twin" data-reveal>
    <div class="section-headline">
      <div>
        <div class="eyebrow">AI Twin</div>
        <h2>Ask me anything.</h2>
      </div>
      <p>Local digital twin trained on my resume, credentials, and career background.</p>
    </div>
    <div class="chat-shell">
      <div class="chat-sidebar">
        <div class="chat-badge">
          <img class="chat-badge-logo" src="${d.profile.logo}" alt="Logo" />
          <div>
            <span>Digital Twin</span>
            <strong>Talk with Nithish</strong>
          </div>
        </div>
        <div class="prompt-chips">
          ${d.twinPrompts.map((prompt) => `<button class="prompt-chip" data-prompt="${prompt}">${prompt}</button>`).join("")}
        </div>
      </div>
      <div class="chat-panel">
        <div class="chat-messages" id="chatMessages">
          <div class="chat-row assistant">
            <div class="chat-avatar">N</div>
            <div class="chat-bubble assistant">
              Hi - I'm Nithish's digital twin. Ask me anything about my career, education, projects, stack, or interests.
            </div>
          </div>
        </div>
        <form class="chat-input-row" id="chatForm">
          <textarea id="chatInput" rows="1" placeholder="Ask me anything..." aria-label="Ask the AI twin"></textarea>
          <button class="chat-send" type="submit">Send</button>
        </form>
      </div>
    </div>
  </section>

  <section class="flow-section" id="contact" data-reveal>
    <div class="section-headline">
      <div>
        <div class="eyebrow">Connect</div>
        <h2>Let's talk.</h2>
      </div>
    </div>
    <div class="contact-logo-row">
      <a class="contact-logo" href="mailto:${d.profile.email}" aria-label="Email" title="${d.profile.email}">
        ${icons.email}
      </a>
      <a class="contact-logo" href="${d.profile.linkedin}" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
        ${icons.linkedin}
      </a>
      <a class="contact-logo" href="${d.profile.github}" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
        ${icons.github}
      </a>
    </div>
  </section>

  <div class="certificate-lightbox" id="certificateLightbox" role="dialog" aria-modal="true" aria-labelledby="certificateLightboxTitle" hidden>
    <button class="certificate-backdrop" type="button" data-certificate-close aria-label="Close certificate preview"></button>
    <article class="certificate-modal">
      <div class="certificate-modal-head">
        <div>
          <div class="bento-label amber">Certificate Preview</div>
          <h3 id="certificateLightboxTitle">Certificate</h3>
          <p id="certificateLightboxDate"></p>
        </div>
        <div class="certificate-actions">
          <a class="certificate-open-link" id="certificateLightboxOpen" href="/" target="_blank" rel="noreferrer">Open original</a>
          <button class="certificate-close" type="button" data-certificate-close>Close</button>
        </div>
      </div>
      <div class="certificate-image-frame">
        <img id="certificateLightboxImage" src="" alt="" />
      </div>
    </article>
  </div>

  <footer class="site-footer">
    <div class="footer-inner">
      <span class="footer-brand">Nithish</span>
      <span class="footer-copy">© ${new Date().getFullYear()}</span>
    </div>
  </footer>
`;

const typedEl = document.getElementById("typedTarget");
if (typedEl) {
  const phrases = [
    "Graduate software engineer.",
    "Backend systems at scale.",
    "AWS Certified Architect.",
    "Northeastern CS - 3.93 GPA",
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const typeLoop = () => {
    const phrase = phrases[phraseIndex];
    if (!deleting) {
      typedEl.textContent = phrase.slice(0, ++charIndex);
      if (charIndex === phrase.length) {
        deleting = true;
        setTimeout(typeLoop, 2200);
      } else {
        setTimeout(typeLoop, 60);
      }
    } else {
      typedEl.textContent = phrase.slice(0, --charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeLoop, 400);
      } else {
        setTimeout(typeLoop, 30);
      }
    }
  };

  setTimeout(typeLoop, 600);
}

const canvas = document.getElementById("particles");
if (canvas) {
  const ctx = canvas.getContext("2d");
  let width;
  let height;
  const particles = [];

  const resize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };

  resize();
  window.addEventListener("resize", resize);

  for (let i = 0; i < 60; i += 1) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      o: Math.random() * 0.5 + 0.2,
    });
  }

  const drawParticles = () => {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((particle) => {
      particle.x += particle.dx;
      particle.y += particle.dy;
      if (particle.x < 0) particle.x = width;
      if (particle.x > width) particle.x = 0;
      if (particle.y < 0) particle.y = height;
      if (particle.y > height) particle.y = 0;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(130,243,255,${particle.o})`;
      ctx.fill();
    });
    requestAnimationFrame(drawParticles);
  };

  drawParticles();
}

const animateCounter = (element) => {
  const target = parseFloat(element.dataset.target);
  const decimals = parseInt(element.dataset.decimals, 10) || 0;
  const prefix = element.dataset.prefix || "";
  const suffix = element.dataset.suffix || "";
  const duration = 1600;
  const start = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const value = progress * (2 - progress) * target;
    element.textContent = `${prefix}${value.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
};

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);
document.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);
document.querySelectorAll(".counter").forEach((element) => counterObserver.observe(element));

const navLinks = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll("section[id]");
const fullTabButtons = document.querySelectorAll(".full-tab-button");
const fullTabPanels = document.querySelectorAll(".full-tab-panel");
const docPreviewButtons = document.querySelectorAll(".doc-preview-chip");
const docPreviewFrame = document.querySelector("#docPreviewFrame");
const docPreviewTitle = document.querySelector("#docPreviewTitle");
const docPreviewOpen = document.querySelector("#docPreviewOpen");
const certificateButtons = document.querySelectorAll("[data-certificate-index]");
const certificateLightbox = document.querySelector("#certificateLightbox");
const certificateImage = document.querySelector("#certificateLightboxImage");
const certificateTitle = document.querySelector("#certificateLightboxTitle");
const certificateDate = document.querySelector("#certificateLightboxDate");
const certificateOpen = document.querySelector("#certificateLightboxOpen");
const certificateCloseButtons = document.querySelectorAll("[data-certificate-close]");

fullTabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.fullTab;
    fullTabButtons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    fullTabPanels.forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.fullPanel === target);
    });
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
  });
});

const closeCertificateLightbox = () => {
  if (!certificateLightbox) return;
  certificateLightbox.hidden = true;
  document.body.classList.remove("lightbox-open");
};

const openCertificateLightbox = (award) => {
  if (!award || !certificateLightbox) return;
  if (certificateImage) {
    certificateImage.src = award.image;
    certificateImage.alt = `${award.title} certificate`;
  }
  if (certificateTitle) certificateTitle.textContent = award.title;
  if (certificateDate) certificateDate.textContent = award.date;
  if (certificateOpen) certificateOpen.href = award.image;
  certificateLightbox.hidden = false;
  document.body.classList.add("lightbox-open");
  certificateLightbox.querySelector(".certificate-close")?.focus();
};

certificateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openCertificateLightbox(d.awards[Number(button.dataset.certificateIndex)]);
  });
});

certificateCloseButtons.forEach((button) => {
  button.addEventListener("click", closeCertificateLightbox);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && certificateLightbox && !certificateLightbox.hidden) {
    closeCertificateLightbox();
  }
});

docPreviewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const href = button.dataset.docHref || "";
    const label = button.dataset.docLabel || "Document";
    docPreviewButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    if (docPreviewTitle) docPreviewTitle.textContent = label;
    if (docPreviewOpen) docPreviewOpen.href = href;
    if (docPreviewFrame) docPreviewFrame.src = href;
  });
});

const updateNav = () => {
  const position = window.scrollY + 200;
  sections.forEach((section) => {
    const id = section.id;
    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${id}` &&
          position >= section.offsetTop &&
          position < section.offsetTop + section.offsetHeight
      );
    });
  });
};
window.addEventListener("scroll", updateNav, { passive: true });
updateNav();

document.querySelectorAll(".tilt-card").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const rotateX = (0.5 - (event.clientY - rect.top) / rect.height) * 14;
    const rotateY = (((event.clientX - rect.left) / rect.width) - 0.5) * 14;
    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });
  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});

const cursorGlow = document.querySelector(".cursor-glow");
window.addEventListener(
  "pointermove",
  (event) => {
    document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
    document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    if (cursorGlow) {
      cursorGlow.style.transform = `translate(${event.clientX - 140}px, ${event.clientY - 140}px)`;
    }
  },
  { passive: true }
);

document.querySelectorAll(".magnetic").forEach((element) => {
  element.addEventListener("pointermove", (event) => {
    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.08;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.08;
    element.style.transform = `translate(${x}px, ${y}px)`;
  });
  element.addEventListener("pointerleave", () => {
    element.style.transform = "";
  });
});

const heroStage = document.querySelector(".hero-stage");
const floatCards = document.querySelectorAll(".float-card");
if (heroStage) {
  heroStage.addEventListener("pointermove", (event) => {
    const rect = heroStage.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    floatCards.forEach((card, index) => {
      card.style.transform = `translate3d(${x * (index + 1) * 10}px, ${y * (index + 1) * 10}px, 0)`;
    });
  });
  heroStage.addEventListener("pointerleave", () => {
    floatCards.forEach((card) => {
      card.style.transform = "";
    });
  });
}

const chatForm = document.querySelector("#chatForm");
const chatInput = document.querySelector("#chatInput");
const chatMessages = document.querySelector("#chatMessages");

const addChatMessage = (role, content, loading = false) => {
  if (!chatMessages) return null;
  const row = document.createElement("div");
  row.className = `chat-row ${role}`;

  if (role === "assistant") {
    const avatar = document.createElement("div");
    avatar.className = "chat-avatar";
    avatar.textContent = "N";
    row.appendChild(avatar);
  }

  const bubble = document.createElement("div");
  bubble.className = `chat-bubble ${role}${loading ? " loading" : ""}`;
  bubble.textContent = content;
  row.appendChild(bubble);
  chatMessages.appendChild(row);
  chatMessages.scrollTo({ top: chatMessages.scrollHeight, behavior: "smooth" });
  return bubble;
};

const sendChat = async (text) => {
  const trimmed = text.trim();
  if (!trimmed) return;
  addChatMessage("user", trimmed);
  if (chatInput) {
    chatInput.value = "";
    chatInput.style.height = "auto";
  }
  const loader = addChatMessage("assistant", "Thinking...", true);
  await wait(400);
  if (loader) {
    loader.textContent = twinReply(trimmed);
    loader.classList.remove("loading");
  }
};

chatForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  sendChat(chatInput.value);
});

chatInput?.addEventListener("input", () => {
  chatInput.style.height = "auto";
  chatInput.style.height = `${Math.min(chatInput.scrollHeight, 140)}px`;
});

chatInput?.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    sendChat(chatInput.value);
  }
});

document.querySelectorAll(".prompt-chip").forEach((chip) => {
  chip.addEventListener("click", () => sendChat(chip.dataset.prompt || ""));
});
