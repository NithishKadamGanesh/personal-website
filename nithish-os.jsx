import { useState, useEffect, useRef } from "react";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";

// ═══ THEME ════════════════════════════════════════════════════════════════
const C = {
  bg: "#060a10",
  sidebar: "#090d16",
  card: "rgba(255,255,255,0.04)",
  border: "rgba(255,255,255,0.07)",
  teal: "#00e5c0",
  purple: "#8b7cf8",
  amber: "#f5c06a",
  orange: "#f7956a",
  text: "#c0ccd8",
  muted: "#4a5568",
  heading: "#eef0f4",
};

// ═══ AI PROFILE ══════════════════════════════════════════════════════════
const PROFILE = `You are the Career Digital Twin of Nithish Kadam Kadam Ganesh. Answer in first person as Nithish. Be specific, warm, and confident. Use these facts only — never hallucinate.

IDENTITY: Nithish Kadam Kadam Ganesh | (617) 415-6651 | nithishkadam@outlook.com | Boston, MA

EDUCATION: MS Computer Science, Northeastern University (Sep 2024–Aug 2026), Khoury College, GPA 3.93.
Completed: Programming Design Paradigm (A), Algorithms (A), Foundations of AI (A), Database Management Systems (A), Computer Systems (A).
In Progress: Natural Language Processing (CS 6120), Scalable Distributed Systems (CS 6650).

CERTIFICATION: AWS Certified Solutions Architect – Associate (SAA-C03). Passed May 21, 2025, score 794/1000 (passing: 720). All 4 domains: Meets Competencies. Domains: Design Secure Architectures (30%), Design Resilient Architectures (26%), Design High-Performing Architectures (24%), Design Cost-Optimized Architectures (20%).

EXPERIENCE:
1. Wintergreen, US — Full-Stack Developer Intern (Jun–Dec 2025). PHP/Laravel, Node.js/Express/TypeScript, React Native, MySQL, AWS, JasperReports. Built end-to-end HCRIS PDF reporting pipeline. Designed RESTful APIs for legacy healthcare systems. Supported rural health analytics.
2. Manhattan Associates, Bangalore — Software Engineer (Sep 2021–Nov 2023). Java, Spring Boot, C++, RabbitMQ, Redis, OracleSQL, Docker, Kibana, Grafana. Built real-time messaging framework → 30% latency reduction. Scaled microservices + multi-tenant platforms. 150+ issues resolved across 20+ global clients. Won "Above & Beyond" and "Star of the Quarter" awards.
3. Manhattan Associates, Bangalore — Technical Analyst Intern (Aug–Sep 2021). Automation scripts for servers. 2 RF screens improving data processing by 40%.

SKILLS: Java, C++, Go, JavaScript, TypeScript, PHP, SQL, Swift, R | Spring Boot, Hibernate, Node.js, Express, React, React Native, JasperReports | MongoDB, MySQL, PostgreSQL, Redis, OracleSQL | AWS (S3, EC2, IAM), Docker, Terraform, Kubernetes, RabbitMQ, Kafka, Grafana, Kibana, Jenkins, GCP Pub/Sub

PROJECTS:
- CityDiaries: Full-stack travel diary. Node.js, Express, MongoDB, EJS, Cloudinary. Log places, reviews, hotspots.
- Fudget: iOS recipe app. Swift, CreateML, CoreML, Spoonacular API. Trained ML vision model to identify kitchen ingredients from camera.

REFERENCES: 3 senior Manhattan Associates managers praise critical thinking, quick learning, communication, teamwork, delivery quality. Awarded twice for exemplary performance.

Speak in first person. Be specific and grounded. Do not invent details.`;

// ═══ DATA ════════════════════════════════════════════════════════════════
const RADAR_DATA = [
  { skill: "Backend", value: 92 },
  { skill: "Cloud/DevOps", value: 85 },
  { skill: "Full Stack", value: 82 },
  { skill: "Sys Design", value: 88 },
  { skill: "Problem Solving", value: 95 },
  { skill: "Communication", value: 90 },
];

const RPG_STATS = [
  { stat: "INT", value: 95, desc: "Algorithms & Architecture" },
  { stat: "DEX", value: 88, desc: "Code Velocity & Debug Speed" },
  { stat: "STR", value: 85, desc: "Production Load Handling" },
  { stat: "WIS", value: 90, desc: "System Design Decisions" },
  { stat: "CHA", value: 88, desc: "Client Communication" },
  { stat: "LRN", value: 96, desc: "Picks Up Tech Instantly" },
];

const ACHIEVEMENTS = [
  { icon: "🏆", title: "Above & Beyond", desc: "Manhattan Associates · 2022", color: C.amber },
  { icon: "⭐", title: "Star of the Quarter", desc: "Manhattan Associates · 2022", color: C.amber },
  { icon: "☁️", title: "AWS Certified", desc: "SAA-C03 · Score 794/1000", color: C.teal },
  { icon: "🎓", title: "4.0 → 3.93 GPA", desc: "Northeastern · Khoury College", color: C.purple },
  { icon: "🔧", title: "Issue Crusher", desc: "150+ issues · 20+ global clients", color: C.orange },
  { icon: "⚡", title: "Latency Slayer", desc: "30% WMS communication speedup", color: C.teal },
  { icon: "🌍", title: "Global Deployer", desc: "Production across 20+ clients", color: C.purple },
  { icon: "🤖", title: "ML Engineer", desc: "Trained CreateML vision model", color: C.orange },
];

const TIMELINE = [
  { period: "Aug 2021", role: "Technical Analyst Intern", org: "Manhattan Associates · Bangalore", detail: "First industry role. Built automation scripts for internal servers. Designed 2 RF screens improving data processing by 40%.", color: C.purple, icon: "🚀" },
  { period: "Sep 2021 – Nov 2023", role: "Software Engineer", org: "Manhattan Associates · Bangalore", detail: "Built real-time WMS messaging frameworks. 30% latency reduction. Scaled microservices for global clients. Resolved 150+ production issues across 20+ deployments. Won 2 company-wide awards.", color: C.teal, icon: "⚡" },
  { period: "2023 – 2024", role: "Reflection & Growth", org: "Independent", detail: "Deepened cloud architecture knowledge, earned AWS Solutions Architect certification, and prepared for the next chapter: graduate school.", color: C.amber, icon: "🌱" },
  { period: "Sep 2024", role: "MS Computer Science", org: "Northeastern University · Boston", detail: "Khoury College of Computer Sciences. GPA 3.93. Completed Programming Design Paradigm, Algorithms, AI, DB Systems, and Computer Systems — all A grades.", color: C.teal, icon: "🎓" },
  { period: "May 2025", role: "AWS Certified SAA-C03", org: "Amazon Web Services", detail: "Passed with 794/1000 (passing score: 720). Demonstrated competency across all 4 domains: Secure, Resilient, High-Performing, and Cost-Optimized Architectures.", color: C.amber, icon: "☁️" },
  { period: "Jun – Dec 2025", role: "Full-Stack Developer Intern", org: "Wintergreen · US", detail: "Built production HCRIS PDF pipeline (SQL shaping → Node.js/Express → JasperReports → React Native UI). PHP/Laravel APIs for healthcare legacy systems. Improved reporting for rural health organizations.", color: C.purple, icon: "🏥" },
  { period: "Spring 2026 → Now", role: "Distributed Systems + NLP", org: "Northeastern University · Boston", detail: "Currently taking CS 6650 Scalable Distributed Systems and CS 6120 Natural Language Processing. Expected graduation August 2026.", color: C.teal, icon: "🔭" },
];

const PROJECTS = [
  { name: "WMS Messaging Framework", tagline: "Real-time warehouse messaging at global scale", emoji: "⚡", stack: ["Java", "Spring Boot", "C++", "RabbitMQ", "Redis", "OracleSQL"], impact: "30% WMS-to-third-party latency reduction. Deployed globally across 20+ mission-critical client environments.", color: C.teal, type: "Professional" },
  { name: "HCRIS PDF Pipeline", tagline: "Healthcare reporting for rural health systems", emoji: "🏥", stack: ["Node.js", "TypeScript", "JasperReports", "React Native", "MySQL", "AWS"], impact: "End-to-end PDF reporting pipeline. SQL shaping, Express middleware, in-app PDF preview for healthcare analytics.", color: C.purple, type: "Professional" },
  { name: "CityDiaries", tagline: "A travel diary for every city you visit", emoji: "🗺️", stack: ["Node.js", "Express", "MongoDB", "EJS", "Cloudinary", "CSS"], impact: "Full-stack platform for logging places, writing reviews, and exploring city hotspots. Cloud image storage via Cloudinary.", color: C.amber, type: "Personal" },
  { name: "Fudget", tagline: "AI recipe app from ingredients you have", emoji: "🍳", stack: ["Swift", "iOS", "CreateML", "CoreML", "Spoonacular API"], impact: "Custom ML vision model trained to identify kitchen ingredients from live camera. Hooked into Spoonacular API for tailored recipes.", color: C.orange, type: "Personal" },
];

const REFS = [
  { name: "Brunda Bangalore Nagaraja", title: "Principal Customer Technical Services", co: "Manhattan Associates", quote: "Exceptionally responsive to his duties and can resolve complex issues. He is an extremely organized and self-motivated individual with excellent communication skills. He possesses design thinking abilities and can critically analyze issues to foresee upcoming problems.", initials: "BB", color: C.teal },
  { name: "Maneesh Melath", title: "Manager, Customer Technical Services", co: "Manhattan Associates", quote: "He possesses an exceptional ability to think critically and logically. His programming skills are highly advanced, demonstrating his ability to solve complex problems with innovative solutions. I strongly recommend him without any reservations.", initials: "MM", color: C.purple },
  { name: "Niranjan Bangera", title: "Sr. Manager, Customer Technical Services", co: "Manhattan Associates", quote: "Quick learner, picked up exceptionally well in a very short time and started contributing — completing complex tasks. We can always count on him to deliver the right solution on time. An exceptional team player.", initials: "NB", color: C.amber },
];

const INTERVIEW_QS = [
  { type: "Behavioral", q: "Tell me about a time you significantly improved system performance." },
  { type: "Technical", q: "How do you design a distributed messaging system for high throughput and low latency?" },
  { type: "Behavioral", q: "Describe a situation where you had to learn a new technology very quickly under pressure." },
  { type: "Technical", q: "Walk me through debugging a production issue in a microservices environment." },
  { type: "Behavioral", q: "Tell me about your most complex project and how you owned it end-to-end." },
  { type: "Technical", q: "How would you architect an auto-scaling system on AWS for unpredictable traffic loads?" },
];

const ACTIVITY = [
  { icon: "📚", text: "Studying transformer attention mechanisms for CS 6120 NLP" },
  { icon: "🔧", text: "Load testing distributed systems with Locust in CS 6650" },
  { icon: "☁️", text: "Exploring ECS Fargate auto-scaling and circuit breaker patterns" },
  { icon: "💡", text: "Implementing bulkhead isolation in Go microservices" },
  { icon: "📝", text: "Documenting MapReduce pipeline with Terraform infrastructure" },
  { icon: "⚡", text: "Benchmarking RabbitMQ vs Kafka message throughput" },
  { icon: "🧠", text: "Solving O(n log n) dynamic programming challenges" },
  { icon: "🌐", text: "Designing resilience patterns for the Galactic Pizza Service" },
  { icon: "☁️", text: "Reviewing AWS Application Load Balancer configurations" },
  { icon: "🔍", text: "Analyzing concurrency race conditions in Go benchmarks" },
];

const SKILLS_BY_CAT = [
  { cat: "Languages", color: C.teal, items: ["Java", "C++", "Go", "TypeScript", "JavaScript", "PHP", "SQL", "Swift", "R"] },
  { cat: "Frameworks", color: C.purple, items: ["Spring Boot", "Hibernate", "Node.js", "Express", "React", "React Native", "Laravel", "JasperReports"] },
  { cat: "Databases", color: C.amber, items: ["OracleSQL", "MySQL", "PostgreSQL", "MongoDB", "Redis", "SQLite"] },
  { cat: "Cloud & DevOps", color: C.orange, items: ["AWS (S3, EC2, IAM)", "Docker", "Kubernetes", "Terraform", "Kafka", "RabbitMQ", "Jenkins", "GCP Pub/Sub"] },
];

// ═══ LOCAL DIGITAL TWIN ENGINE ════════════════════════════════════════════
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const containsAny = (text, terms) => terms.some((term) => text.includes(term));

const buildTwinReply = (question) => {
  const q = question.toLowerCase();

  if (containsAny(q, ["hello", "hi", "introduce", "who are you", "about yourself"])) {
    return `Hi, I'm Nithish. I'm currently pursuing my M.S. in Computer Science at Northeastern University in Boston, where my GPA is 3.93. Before that, I worked at Manhattan Associates as a Software Engineer building distributed warehouse systems, and later interned at Wintergreen working on healthcare reporting pipelines and APIs. I enjoy backend-heavy engineering, distributed systems, cloud architecture, and shipping practical full-stack products.`;
  }

  if (containsAny(q, ["education", "university", "college", "gpa", "course", "study", "studying"])) {
    return `I'm pursuing an M.S. in Computer Science at Northeastern University, Khoury College of Computer Sciences, from September 2024 to August 2026. My GPA is 3.93. I've completed Programming Design Paradigm, Algorithms, Foundations of AI, Database Management Systems, and Computer Systems with strong grades, and I'm currently taking Natural Language Processing and Scalable Distributed Systems.`;
  }

  if (containsAny(q, ["aws", "certification", "certificate", "cloud", "saa", "architect"])) {
    return `I earned the AWS Certified Solutions Architect - Associate certification on May 21, 2025. I passed with a score of 794 out of 1000, above the 720 passing mark. That certification reflects my interest in resilient, secure, high-performing, and cost-optimized cloud architecture, and it complements the backend and distributed systems work I've done professionally.`;
  }

  if (containsAny(q, ["manhattan", "software engineer", "warehouse", "wms", "rabbitmq", "redis"])) {
    return `At Manhattan Associates, I worked as a Software Engineer from September 2021 to November 2023 in Bangalore. I built a real-time messaging framework using Java, Spring Boot, C++, RabbitMQ, OracleSQL, and Redis, which reduced WMS-to-third-party communication latency by 30%. I also worked on microservices, multi-tenant platforms, and production support across 20+ client deployments, where I resolved 150+ issues.`;
  }

  if (containsAny(q, ["wintergreen", "internship", "healthcare", "jasper", "reporting", "react native"])) {
    return `At Wintergreen, I worked as a Full-Stack Developer Intern from June to December 2025. I built an end-to-end HCRIS PDF reporting pipeline using SQL shaping, Node.js and Express APIs, JasperReports templates, and a React Native interface for PDF preview and download. I also designed RESTful APIs and integrated services for legacy healthcare systems using PHP and Laravel.`;
  }

  if (containsAny(q, ["project", "citydiaries", "fudget", "personal project"])) {
    return `Two projects I like talking about are CityDiaries and Fudget. CityDiaries is a full-stack travel diary platform I built with Node.js, Express, MongoDB, EJS, and Cloudinary. Fudget is an iOS recipe app I built with Swift and CreateML that identifies ingredients from camera input and suggests recipes using the Spoonacular API.`;
  }

  if (containsAny(q, ["skill", "stack", "language", "technology", "tech stack"])) {
    return `My core stack includes Java, C++, Go, JavaScript, TypeScript, PHP, SQL, and Swift. On the framework side, I've worked with Spring Boot, Hibernate, Node.js, Express, React, React Native, Laravel, and JasperReports. For infrastructure and systems work, I've used AWS, Docker, Terraform, Kubernetes, RabbitMQ, Kafka, Grafana, Kibana, and Jenkins.`;
  }

  if (containsAny(q, ["award", "recognition", "achievement"])) {
    return `I received two internal awards at Manhattan Associates: Above & Beyond and Star of the Quarter. Those recognitions meant a lot to me because they reflected both delivery quality and the trust I built while working on customer-facing, production-critical systems.`;
  }

  if (containsAny(q, ["reference", "recommendation", "manager", "what do people say"])) {
    return `My recommendations consistently highlight a few themes: quick learning, strong critical thinking, dependable execution, and good communication. Managers at Manhattan Associates specifically called out my ability to ramp up quickly on complex systems, solve difficult production issues, and deliver high-impact work with ownership.`;
  }

  if (containsAny(q, ["visa", "work authorization", "opt", "cpt", "stem opt", "sponsorship"])) {
    return `I'm currently on F-1 status and eligible for CPT, OPT, and STEM OPT work authorization through July 2029. For long-term employment in the United States, I would require H-1B sponsorship in the future.`;
  }

  if (containsAny(q, ["contact", "email", "phone", "reach", "linkedin", "github"])) {
    return `You can reach me at nithishkadam@gmail.com or at (617) 415-6651. I'm also on LinkedIn and GitHub, and both are linked throughout the site.`;
  }

  return `From my background, the shortest answer is that I combine graduate-level CS training with hands-on production experience. I've worked on distributed messaging, backend performance, APIs, healthcare reporting systems, and cloud architecture. If you want, ask me something more specific like my experience at Manhattan Associates, my Northeastern coursework, my AWS certification, or the kinds of roles I'm targeting.`;
};

const buildRecruiterPitch = (jobDescription) => {
  const jd = jobDescription.toLowerCase();
  const matches = [];

  if (containsAny(jd, ["java", "spring", "microservice", "distributed", "backend"])) {
    matches.push("My background aligns strongly with backend and distributed systems work, especially from my time at Manhattan Associates where I built Java and Spring Boot messaging systems, improved latency by 30%, and supported large-scale client deployments.");
  }

  if (containsAny(jd, ["node", "typescript", "api", "full stack", "react", "php", "laravel"])) {
    matches.push("I also bring full-stack product experience from Wintergreen, where I built Node.js and Express APIs, worked with TypeScript, integrated JasperReports, and supported healthcare workflows across PHP and Laravel systems.");
  }

  if (containsAny(jd, ["aws", "cloud", "docker", "kubernetes", "terraform", "devops"])) {
    matches.push("On the infrastructure side, I’m AWS Certified Solutions Architect - Associate, and I’ve worked with Docker, cloud services, and production-oriented tooling that supports scalable and maintainable systems.");
  }

  if (containsAny(jd, ["communication", "team", "collaborat", "stakeholder", "client"])) {
    matches.push("I’m comfortable working across teams and with client-facing requirements, and that shows up both in my recommendation letters and in the production work I delivered in previous roles.");
  }

  const body = matches.length
    ? matches.join(" ")
    : "My experience brings together strong backend engineering, practical full-stack delivery, and a graduate CS foundation. I’m especially comfortable in roles that value ownership, scalable systems thinking, and the ability to learn new domains quickly.";

  return `Hi, I’m Nithish, and this role feels like a strong fit for the kind of engineering work I’ve been building toward.\n\n${body}\n\nI’m currently pursuing my M.S. in Computer Science at Northeastern University with a 3.93 GPA, and I’ve already worked across distributed systems, real-time messaging, API design, healthcare reporting, and cloud-oriented engineering. My experience includes building production systems at Manhattan Associates and Wintergreen, along with an AWS Solutions Architect certification that reinforces my cloud and architecture foundation.\n\nWhat I’d bring to this role is a mix of strong execution, systems thinking, and the ability to contribute quickly in real production environments. I’d be excited to bring that mindset to a team solving meaningful technical problems.`;
};

const buildInterviewFeedback = (answer) => {
  const text = answer.trim();
  const lower = text.toLowerCase();
  let score = 6;

  if (text.length > 220) score += 1;
  if (containsAny(lower, ["situation", "task", "action", "result"])) score += 1;
  if (containsAny(lower, ["latency", "30%", "150", "20+", "aws", "spring boot", "rabbitmq", "wintergreen", "manhattan"])) score += 1;
  if (containsAny(lower, ["trade-off", "scalability", "monitoring", "debug", "root cause", "throughput"])) score += 1;
  score = Math.min(score, 10);

  const emoji = score >= 9 ? "🔥" : score >= 8 ? "✅" : score >= 7 ? "🙂" : "⚠️";
  const strengths = [
    "You grounded your answer in real engineering experience rather than staying generic.",
    "You showed that you can connect technical decisions to business or system impact.",
  ];
  const improvements = [
    "Make the structure tighter so the listener can follow the story or design more easily.",
    "Use one or two concrete numbers or named technologies to make the answer more credible.",
  ];

  return `1) Score /10: ${score}/10 ${emoji}\n\n2) Strengths\n- ${strengths[0]}\n- ${strengths[1]}\n\n3) Could improve\n- ${improvements[0]}\n- ${improvements[1]}\n\n4) Stronger version\nI’d anchor this answer more clearly in my real background. For example, I’d mention how I built a real-time messaging framework at Manhattan Associates using Java, Spring Boot, RabbitMQ, Redis, and OracleSQL, and how that work reduced communication latency by 30%. If the question is behavioral, I’d structure it more clearly with the situation, the action I took, and the measurable result.`;
};

const callClaude = async (messages, system) => {
  const latest = [...messages].reverse().find((message) => message.role === "user");
  const prompt = latest?.content || "";
  const sys = (system || PROFILE).toLowerCase();

  await wait(550);

  if (sys.includes("tailored recruiter pitch")) {
    return buildRecruiterPitch(prompt);
  }

  if (sys.includes("expert technical interviewer")) {
    return buildInterviewFeedback(prompt);
  }

  return buildTwinReply(prompt);
};

// ═══ SHARED COMPONENTS ════════════════════════════════════════════════════
const cardStyle = (extra = {}) => ({
  background: C.card,
  border: `1px solid ${C.border}`,
  borderRadius: 14,
  padding: "20px 22px",
  ...extra,
});

function Label({ children, color }) {
  return (
    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: color || C.teal, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 10 }}>
      {children}
    </div>
  );
}

function Tag({ children, color }) {
  return (
    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, padding: "3px 8px", borderRadius: 4, background: `${color || C.teal}15`, border: `1px solid ${color || C.teal}30`, color: color || C.teal, whiteSpace: "nowrap" }}>
      {children}
    </span>
  );
}

function StatBar({ label, value, color, delay = 0 }) {
  const [w, setW] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setW(value), delay + 300);
    return () => clearTimeout(t);
  }, [value, delay]);
  return (
    <div style={{ marginBottom: 13 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontFamily: "'DM Mono', monospace", fontSize: 11, color: C.text }}>
        <span>{label}</span><span style={{ color }}>{value}</span>
      </div>
      <div style={{ height: 5, background: "rgba(255,255,255,0.06)", borderRadius: 3, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${w}%`, background: color, borderRadius: 3, transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)", boxShadow: `0 0 6px ${color}60` }} />
      </div>
    </div>
  );
}

function TypingDots() {
  return (
    <div style={{ display: "flex", gap: 5, padding: "8px 0" }}>
      {[0, 1, 2].map(i => (
        <div key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: C.teal, animation: "bounce 1.2s ease-in-out infinite", animationDelay: `${i * 0.2}s` }} />
      ))}
    </div>
  );
}

function AiBtn({ onClick, disabled, loading, children }) {
  return (
    <button onClick={onClick} disabled={disabled} style={{ padding: "10px 20px", background: !disabled ? C.teal : `${C.teal}25`, border: "none", borderRadius: 8, fontFamily: "'DM Mono', monospace", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: !disabled ? "#060a10" : C.muted, cursor: disabled ? "default" : "pointer", transition: "all 0.2s" }}>
      {loading ? "THINKING..." : children}
    </button>
  );
}

// ═══ HOME TAB ═════════════════════════════════════════════════════════════
function HomeTab() {
  const [feed, setFeed] = useState([ACTIVITY[0], ACTIVITY[1], ACTIVITY[2]]);
  const [idx, setIdx] = useState(3);
  useEffect(() => {
    const iv = setInterval(() => {
      setIdx(i => {
        const next = i % ACTIVITY.length;
        setFeed(f => [ACTIVITY[next], ...f].slice(0, 4));
        return next + 1;
      });
    }, 2800);
    return () => clearInterval(iv);
  }, []);
  return (
    <div style={{ padding: "28px 24px", overflowY: "auto", height: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      {/* Identity card */}
      <div style={{ ...cardStyle({ gridColumn: "1/-1", background: "linear-gradient(135deg, rgba(0,229,192,0.05), rgba(139,124,248,0.05))", border: `1px solid rgba(0,229,192,0.18)` }), display: "flex", alignItems: "center", gap: 18 }}>
        <div style={{ width: 60, height: 60, borderRadius: 14, background: `linear-gradient(135deg, ${C.teal}25, ${C.purple}25)`, border: `2px solid ${C.teal}`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Mono', monospace", color: C.teal, fontSize: 18, fontWeight: 600, flexShrink: 0, boxShadow: `0 0 20px ${C.teal}20` }}>NK</div>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 22, color: C.heading, fontWeight: 800, marginBottom: 3 }}>Nithish</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12.5, color: C.muted, lineHeight: 1.5 }}>MS Computer Science · Northeastern · GPA 3.93 · AWS Certified SAA-C03</p>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: C.teal, marginBottom: 4 }}>● ONLINE</div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: C.muted }}>Boston, MA</div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: C.muted, marginTop: 2 }}>Exp. Grad Aug 2026</div>
        </div>
      </div>

      {/* Stats */}
      <div style={cardStyle()}>
        <Label>Performance Stats</Label>
        <StatBar label="Problem Solving" value={95} color={C.teal} delay={0} />
        <StatBar label="Backend Engineering" value={92} color={C.teal} delay={80} />
        <StatBar label="Communication" value={90} color={C.purple} delay={160} />
        <StatBar label="Systems Design" value={88} color={C.purple} delay={240} />
        <StatBar label="Cloud & DevOps" value={85} color={C.amber} delay={320} />
        <StatBar label="Full Stack" value={82} color={C.amber} delay={400} />
      </div>

      {/* Live Activity */}
      <div style={cardStyle()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <Label>Live Activity</Label>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: C.teal, boxShadow: `0 0 8px ${C.teal}`, display: "inline-block", animation: "pulse 2s ease-in-out infinite" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {feed.map((a, i) => (
            <div key={`${a.text}-${i}`} style={{ display: "flex", gap: 10, alignItems: "flex-start", opacity: Math.max(0.25, 1 - i * 0.22), transition: "all 0.5s" }}>
              <span style={{ fontSize: 15, flexShrink: 0, lineHeight: 1.4 }}>{a.icon}</span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12.5, color: C.text, lineHeight: 1.5 }}>{a.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div style={{ ...cardStyle(), gridColumn: "1/-1" }}>
        <Label>Achievements & Unlocks</Label>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
          {ACHIEVEMENTS.map((a, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.025)", border: `1px solid rgba(255,255,255,0.06)`, borderRadius: 10, padding: "14px 12px", textAlign: "center", borderTop: `2px solid ${a.color}40` }}>
              <div style={{ fontSize: 22, marginBottom: 7 }}>{a.icon}</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: a.color, marginBottom: 4, fontWeight: 600 }}>{a.title}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: C.muted, lineHeight: 1.4 }}>{a.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Skill tags */}
      <div style={{ ...cardStyle(), gridColumn: "1/-1" }}>
        <Label>Tech Arsenal</Label>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {SKILLS_BY_CAT.map(cat => (
            <div key={cat.cat} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: cat.color, width: 90, flexShrink: 0, paddingTop: 3 }}>{cat.cat}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {cat.items.map(t => <Tag key={t} color={cat.color}>{t}</Tag>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══ PROFILE / RPG TAB ════════════════════════════════════════════════════
function ProfileTab() {
  return (
    <div style={{ padding: "28px 24px", overflowY: "auto", height: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      {/* RPG Card */}
      <div style={{ ...cardStyle({ background: "linear-gradient(160deg, rgba(0,229,192,0.06), rgba(139,124,248,0.08))", border: `1px solid ${C.teal}25` }) }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
          <div>
            <Label>Character Sheet</Label>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, color: C.heading, fontWeight: 800 }}>Nithish</h3>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.muted, marginTop: 3 }}>Level 5 · Distributed Systems Mage</div>
          </div>
          <div style={{ width: 46, height: 46, borderRadius: 12, background: `linear-gradient(135deg, ${C.teal}, ${C.purple})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>⚔️</div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
          {["Backend Mage", "Cloud Architect", "Systems Warrior", "ML Dabbler", "Team Captain"].map(c => (
            <Tag key={c}>{c}</Tag>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 18 }}>
          {RPG_STATS.map(s => (
            <div key={s.stat} style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "12px 8px", textAlign: "center" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 22, fontWeight: 700, color: C.teal, lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 13, color: C.heading, fontWeight: 700, margin: "4px 0" }}>{s.stat}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: C.muted, lineHeight: 1.3 }}>{s.desc}</div>
            </div>
          ))}
        </div>
        <div style={{ background: "rgba(0,0,0,0.2)", borderRadius: 10, padding: "12px 14px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'DM Mono', monospace", fontSize: 9, color: C.muted, marginBottom: 7 }}>
            <span>XP — CAREER LEVEL</span><span>8,400 / 10,000 → Senior Engineer</span>
          </div>
          <div style={{ height: 8, background: "rgba(255,255,255,0.06)", borderRadius: 4, overflow: "hidden" }}>
            <div style={{ height: "100%", width: "84%", background: `linear-gradient(90deg, ${C.teal}, ${C.purple})`, borderRadius: 4, boxShadow: `0 0 10px ${C.teal}50` }} />
          </div>
        </div>
      </div>

      {/* Radar Chart */}
      <div style={cardStyle()}>
        <Label>Skill Radar</Label>
        <div style={{ height: 240 }}>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={RADAR_DATA} margin={{ top: 10, right: 20, bottom: 10, left: 20 }}>
              <PolarGrid stroke="rgba(255,255,255,0.07)" />
              <PolarAngleAxis dataKey="skill" tick={{ fill: C.muted, fontSize: 10, fontFamily: "'DM Mono', monospace" }} />
              <Radar dataKey="value" fill={`${C.teal}22`} stroke={C.teal} strokeWidth={2} dot={{ fill: C.teal, r: 3, strokeWidth: 0 }} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7, marginTop: 8 }}>
          {RADAR_DATA.map(s => (
            <div key={s.skill} style={{ display: "flex", justifyContent: "space-between", fontFamily: "'DM Mono', monospace", fontSize: 10, padding: "5px 9px", background: "rgba(255,255,255,0.03)", borderRadius: 5 }}>
              <span style={{ color: C.muted }}>{s.skill}</span>
              <span style={{ color: C.teal, fontWeight: 600 }}>{s.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* AWS Cert highlight */}
      <div style={{ ...cardStyle({ background: "rgba(245,192,106,0.05)", border: `1px solid ${C.amber}25` }), gridColumn: "1/-1" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ fontSize: 36 }}>☁️</div>
          <div style={{ flex: 1 }}>
            <Label color={C.amber}>Certification</Label>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, color: C.heading, fontWeight: 700 }}>AWS Certified Solutions Architect – Associate (SAA-C03)</h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12.5, color: C.muted, marginTop: 4 }}>Passed May 21, 2025 · Score: <span style={{ color: C.amber, fontWeight: 600 }}>794/1000</span> (passing: 720) · All 4 domains: Meets Competencies</p>
          </div>
          <div style={{ textAlign: "right" }}>
            {["Secure Arch 30%", "Resilient Arch 26%", "High-Perf 24%", "Cost-Opt 20%"].map(d => (
              <div key={d} style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: C.amber, marginBottom: 3 }}>✓ {d}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══ TIMELINE TAB ════════════════════════════════════════════════════════
function TimelineTab() {
  return (
    <div style={{ padding: "28px 24px", overflowY: "auto", height: "100%" }}>
      <Label>Career Journey</Label>
      <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 26, color: C.heading, fontWeight: 800, marginBottom: 28 }}>The Story So Far</h2>
      <div style={{ position: "relative", paddingLeft: 36 }}>
        <div style={{ position: "absolute", left: 13, top: 0, bottom: 40, width: 2, background: `linear-gradient(to bottom, transparent, ${C.teal}40, transparent)` }} />
        {TIMELINE.map((t, i) => (
          <div key={i} style={{ position: "relative", marginBottom: 22, animation: `fadeUp 0.5s ease ${i * 0.08}s both` }}>
            <div style={{ position: "absolute", left: -30, top: 6, width: 14, height: 14, borderRadius: "50%", background: t.color, boxShadow: `0 0 10px ${t.color}80`, border: `2px solid ${C.bg}` }} />
            <div style={{ ...cardStyle({ borderLeft: `3px solid ${t.color}` }) }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6, gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 17 }}>{t.icon}</span>
                  <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 15, fontWeight: 700, color: C.heading }}>{t.role}</span>
                </div>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: t.color, padding: "3px 8px", background: `${t.color}12`, borderRadius: 4, whiteSpace: "nowrap", flexShrink: 0 }}>{t.period}</span>
              </div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: C.muted, marginBottom: 8 }}>{t.org}</div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.text, lineHeight: 1.65 }}>{t.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ═══ PROJECTS TAB (Flip Cards) ════════════════════════════════════════════
function FlipCard({ p }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div onClick={() => setFlipped(f => !f)} style={{ perspective: 1000, height: 210, cursor: "pointer" }}>
      <div style={{ position: "relative", width: "100%", height: "100%", transformStyle: "preserve-3d", transition: "transform 0.65s cubic-bezier(0.4,0,0.2,1)", transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}>
        {/* Front */}
        <div style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", ...cardStyle({ borderTop: `3px solid ${p.color}`, display: "flex", flexDirection: "column", justifyContent: "space-between" }) }}>
          <div>
            <div style={{ fontSize: 30, marginBottom: 10 }}>{p.emoji}</div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 16, fontWeight: 800, color: C.heading, marginBottom: 5 }}>{p.name}</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12.5, color: C.muted, lineHeight: 1.5 }}>{p.tagline}</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Tag color={p.color}>{p.type}</Tag>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: C.muted }}>tap to flip →</span>
          </div>
        </div>
        {/* Back */}
        <div style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", transform: "rotateY(180deg)", ...cardStyle({ background: `${p.color}07`, border: `1px solid ${p.color}30`, display: "flex", flexDirection: "column", justifyContent: "space-between" }) }}>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: p.color, letterSpacing: "0.15em", marginBottom: 8 }}>TECH STACK</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 14 }}>
              {p.stack.map(s => <Tag key={s} color={p.color}>{s}</Tag>)}
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: p.color, letterSpacing: "0.15em", marginBottom: 7 }}>IMPACT</div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12.5, color: C.text, lineHeight: 1.6 }}>{p.impact}</p>
          </div>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: C.muted }}>← tap to flip back</span>
        </div>
      </div>
    </div>
  );
}

function ProjectsTab() {
  return (
    <div style={{ padding: "28px 24px", overflowY: "auto", height: "100%" }}>
      <Label>Portfolio</Label>
      <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 26, color: C.heading, fontWeight: 800, marginBottom: 8 }}>Projects</h2>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.muted, marginBottom: 22 }}>Tap any card to reveal the tech stack & impact ↓</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {PROJECTS.map((p, i) => <FlipCard key={i} p={p} />)}
      </div>
    </div>
  );
}

// ═══ REFERENCES TAB ═══════════════════════════════════════════════════════
function ReferencesTab() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => setActive(a => (a + 1) % REFS.length), 5000);
    return () => clearInterval(iv);
  }, []);
  const r = REFS[active];
  return (
    <div style={{ padding: "28px 24px", overflowY: "auto", height: "100%" }}>
      <Label>Reference Wall</Label>
      <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 26, color: C.heading, fontWeight: 800, marginBottom: 22 }}>What They Say</h2>

      {/* Featured */}
      <div style={{ ...cardStyle({ border: `1px solid ${r.color}25`, background: `${r.color}04`, marginBottom: 14 }), minHeight: 190 }}>
        <div style={{ fontSize: 36, color: r.color, fontFamily: "Georgia, serif", lineHeight: 1, marginBottom: 14, opacity: 0.8 }}>"</div>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: C.text, lineHeight: 1.8, fontStyle: "italic", marginBottom: 20 }}>{r.quote}</p>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 42, height: 42, borderRadius: "50%", background: `${r.color}20`, border: `1.5px solid ${r.color}`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Mono', monospace", fontSize: 12, color: r.color, flexShrink: 0 }}>{r.initials}</div>
          <div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 700, color: C.heading }}>{r.name}</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: C.muted }}>{r.title} · {r.co}</div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 18 }}>
        {REFS.map((_, i) => (
          <button key={i} onClick={() => setActive(i)} style={{ height: 7, width: i === active ? 28 : 7, borderRadius: 4, background: i === active ? REFS[i].color : "rgba(255,255,255,0.12)", border: "none", cursor: "pointer", transition: "all 0.35s" }} />
        ))}
      </div>

      {/* Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
        {REFS.map((ref, i) => (
          <div key={i} onClick={() => setActive(i)} style={{ ...cardStyle({ cursor: "pointer", border: i === active ? `1px solid ${ref.color}45` : `1px solid ${C.border}`, transition: "all 0.25s" }) }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${ref.color}18`, border: `1.5px solid ${ref.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Mono', monospace", fontSize: 11, color: ref.color, marginBottom: 9 }}>{ref.initials}</div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 13, fontWeight: 700, color: C.heading, marginBottom: 3 }}>{ref.name.split(" ")[0]}</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: C.muted }}>{ref.title.split(",")[0]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ═══ CHAT TAB ════════════════════════════════════════════════════════════
function ChatTab() {
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, loading]);

  const send = async (text) => {
    const t = text || input.trim();
    if (!t || loading) return;
    setInput("");
    const next = [...msgs, { role: "user", content: t }];
    setMsgs(next);
    setLoading(true);
    const reply = await callClaude(next);
    setMsgs([...next, { role: "assistant", content: reply }]);
    setLoading(false);
  };

  const CHIPS = ["Tell me about yourself", "What's your strongest skill?", "Why should we hire you?", "Walk me through Manhattan Associates", "What was your AWS score?", "What are you studying now?"];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "24px 24px 16px" }}>
      <Label>AI Twin</Label>
      <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 22, color: C.heading, fontWeight: 800, marginBottom: 14 }}>Chat with Nithish</h2>
      {msgs.length === 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 16 }}>
          {CHIPS.map(c => (
            <button key={c} onClick={() => send(c)} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, padding: "7px 13px", borderRadius: 7, background: "rgba(255,255,255,0.04)", border: `1px solid ${C.border}`, color: C.muted, cursor: "pointer", transition: "all 0.2s" }}>{c}</button>
          ))}
        </div>
      )}
      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 14, paddingRight: 4 }}>
        {msgs.map((m, i) => (
          <div key={i} style={{ display: "flex", flexDirection: m.role === "user" ? "row-reverse" : "row", gap: 10, alignItems: "flex-start", animation: "fadeUp 0.3s ease both" }}>
            {m.role === "assistant" && (
              <div style={{ width: 28, height: 28, borderRadius: "50%", flexShrink: 0, background: `${C.teal}18`, border: `1px solid ${C.teal}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: C.teal, fontFamily: "'DM Mono', monospace", marginTop: 2 }}>NK</div>
            )}
            <div style={{ maxWidth: "80%", padding: "12px 16px", borderRadius: m.role === "user" ? "14px 4px 14px 14px" : "4px 14px 14px 14px", background: m.role === "user" ? `${C.teal}10` : "rgba(255,255,255,0.04)", border: m.role === "user" ? `1px solid ${C.teal}22` : `1px solid ${C.border}`, fontFamily: "'DM Sans', sans-serif", fontSize: 13.5, lineHeight: 1.75, color: m.role === "user" ? "#b8f0e5" : C.text, whiteSpace: "pre-wrap" }}>{m.content}</div>
          </div>
        ))}
        {loading && (
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", flexShrink: 0, background: `${C.teal}18`, border: `1px solid ${C.teal}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: C.teal, fontFamily: "'DM Mono', monospace" }}>NK</div>
            <div style={{ padding: "10px 16px", background: "rgba(255,255,255,0.04)", border: `1px solid ${C.border}`, borderRadius: "4px 14px 14px 14px" }}><TypingDots /></div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>
      <div style={{ marginTop: 14, display: "flex", gap: 10, alignItems: "flex-end", background: "rgba(255,255,255,0.04)", border: `1px solid ${C.border}`, borderRadius: 12, padding: "10px 12px" }}>
        <textarea value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }} placeholder="Ask Nithish anything..." rows={1} style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontFamily: "'DM Sans', sans-serif", fontSize: 13.5, color: C.text, resize: "none", lineHeight: 1.6, minHeight: 22 }} />
        <button onClick={() => send()} disabled={!input.trim() || loading} style={{ width: 32, height: 32, borderRadius: 8, background: input.trim() && !loading ? C.teal : `${C.teal}25`, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#060a10", transition: "all 0.2s" }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
        </button>
      </div>
    </div>
  );
}

// ═══ RECRUITER TAB ════════════════════════════════════════════════════════
function RecruiterTab() {
  const [jd, setJd] = useState("");
  const [pitch, setPitch] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generate = async () => {
    if (!jd.trim() || loading) return;
    setLoading(true); setPitch("");
    const sys = `You are generating a tailored recruiter pitch FOR Nithish Kadam Kadam Ganesh, written in first person AS Nithish, based on a job description. Map his real experience directly to the job's specific requirements. Be compelling, specific, authentic — never generic. 3–4 crisp paragraphs. Mention exact technologies and achievements from his background where they align.

His background: MS CS Northeastern (GPA 3.93), AWS Certified SAA-C03 (794/1000), Software Engineer at Manhattan Associates 2021–2023 (Java, Spring Boot, C++, RabbitMQ, Redis, microservices — 30% latency reduction, 150+ issues, 2 awards), Full-Stack Intern at Wintergreen 2025 (Node.js, PHP/Laravel, JasperReports, React Native, healthcare systems). Skills: Java, Go, TS, C++, Spring Boot, Node.js, React, AWS, Docker, Kubernetes, Terraform, Kafka, RabbitMQ, MongoDB, PostgreSQL.`;
    const reply = await callClaude([{ role: "user", content: `Job Description:\n\n${jd}\n\nWrite me a tailored pitch.` }], sys);
    setPitch(reply);
    setLoading(false);
  };

  const copy = () => {
    navigator.clipboard?.writeText(pitch);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ padding: "28px 24px", overflowY: "auto", height: "100%", display: "flex", flexDirection: "column", gap: 18 }}>
      <div>
        <Label>Recruiter Mode</Label>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 26, color: C.heading, fontWeight: 800, marginBottom: 6 }}>Tailored Pitch Generator</h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.muted }}>Paste any job description and get a pitch from Nithish, mapped precisely to the role's requirements.</p>
      </div>
      <div style={cardStyle()}>
        <Label>Job Description</Label>
        <textarea value={jd} onChange={e => setJd(e.target.value)} placeholder="Paste the full job description here — title, responsibilities, requirements..." style={{ width: "100%", minHeight: 160, background: "rgba(255,255,255,0.03)", border: `1px solid ${C.border}`, borderRadius: 9, padding: "12px", fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.text, lineHeight: 1.65, resize: "vertical", outline: "none", boxSizing: "border-box" }} />
        <div style={{ marginTop: 12 }}>
          <AiBtn onClick={generate} disabled={!jd.trim() || loading} loading={loading}>GENERATE PITCH →</AiBtn>
        </div>
      </div>
      {pitch && (
        <div style={{ ...cardStyle({ background: `${C.teal}04`, border: `1px solid ${C.teal}22` }) }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <Label>Tailored Pitch</Label>
            <button onClick={copy} style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, padding: "5px 12px", borderRadius: 6, background: copied ? `${C.teal}20` : "rgba(255,255,255,0.06)", border: `1px solid ${copied ? C.teal : C.border}`, color: copied ? C.teal : C.muted, cursor: "pointer", transition: "all 0.2s" }}>{copied ? "✓ COPIED" : "COPY"}</button>
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.text, lineHeight: 1.8, whiteSpace: "pre-wrap" }}>{pitch}</p>
        </div>
      )}
    </div>
  );
}

// ═══ INTERVIEW TAB ════════════════════════════════════════════════════════
function InterviewTab() {
  const [qIdx, setQIdx] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const q = INTERVIEW_QS[qIdx];

  const evaluate = async () => {
    if (!answer.trim() || loading) return;
    setLoading(true);
    const sys = `You are an expert technical interviewer evaluating an answer from Nithish Kadam (MS CS Northeastern, AWS Certified SAA-C03, ex-Manhattan Associates Software Engineer with 2+ years). Evaluate the answer honestly and constructively. Format your response with: 1) Score /10 with a single emoji, 2) 💪 Strengths (2-3 specific points), 3) 💡 Could improve (1-2 points), 4) ✨ Stronger version — rewrite the key point more powerfully using Nithish's actual background. Be direct, specific, and actionable. Keep it tight.`;
    const reply = await callClaude([{ role: "user", content: `Interview Question: "${q.q}"\n\nNithish's Answer: "${answer}"` }], sys);
    setFeedback(reply);
    setLoading(false);
  };

  const next = () => {
    if (qIdx < INTERVIEW_QS.length - 1) { setQIdx(i => i + 1); setAnswer(""); setFeedback(""); }
  };

  const reset = () => { setQIdx(0); setAnswer(""); setFeedback(""); };

  return (
    <div style={{ padding: "28px 24px", overflowY: "auto", height: "100%", display: "flex", flexDirection: "column", gap: 18 }}>
      <div>
        <Label>Interview Simulator</Label>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 26, color: C.heading, fontWeight: 800, marginBottom: 10 }}>Practice Mode</h2>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          {INTERVIEW_QS.map((_, i) => (
            <div key={i} style={{ height: 4, flex: 1, borderRadius: 2, background: i < qIdx ? `${C.teal}60` : i === qIdx ? C.teal : "rgba(255,255,255,0.1)", transition: "all 0.3s" }} />
          ))}
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: C.muted, marginLeft: 8, whiteSpace: "nowrap" }}>{qIdx + 1} / {INTERVIEW_QS.length}</span>
        </div>
      </div>

      <div style={cardStyle()}>
        <Tag color={q.type === "Behavioral" ? C.purple : C.teal}>{q.type}</Tag>
        <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 16, fontWeight: 700, color: C.heading, lineHeight: 1.5, margin: "14px 0 16px" }}>{q.q}</p>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: C.muted, marginBottom: 8 }}>
          {q.type === "Behavioral" ? "💡 Tip: Use STAR method — Situation, Task, Action, Result" : "💡 Tip: Think out loud. Cover trade-offs, scalability, and real examples."}
        </div>
        <textarea value={answer} onChange={e => setAnswer(e.target.value)} placeholder="Type your answer here..." style={{ width: "100%", minHeight: 120, background: "rgba(255,255,255,0.03)", border: `1px solid ${C.border}`, borderRadius: 9, padding: "12px", fontFamily: "'DM Sans', sans-serif", fontSize: 13.5, color: C.text, lineHeight: 1.65, resize: "vertical", outline: "none", boxSizing: "border-box" }} />
        <div style={{ display: "flex", gap: 10, marginTop: 12, flexWrap: "wrap" }}>
          <AiBtn onClick={evaluate} disabled={!answer.trim() || loading} loading={loading}>EVALUATE ANSWER</AiBtn>
          {feedback && qIdx < INTERVIEW_QS.length - 1 && (
            <button onClick={next} style={{ padding: "10px 18px", background: "rgba(255,255,255,0.05)", border: `1px solid ${C.border}`, borderRadius: 8, fontFamily: "'DM Mono', monospace", fontSize: 11, color: C.muted, cursor: "pointer" }}>NEXT Q →</button>
          )}
          {qIdx > 0 && (
            <button onClick={reset} style={{ padding: "10px 18px", background: "rgba(255,255,255,0.04)", border: `1px solid ${C.border}`, borderRadius: 8, fontFamily: "'DM Mono', monospace", fontSize: 11, color: C.muted, cursor: "pointer" }}>↺ RESTART</button>
          )}
        </div>
      </div>

      {feedback && (
        <div style={{ ...cardStyle({ background: `${C.purple}06`, border: `1px solid ${C.purple}25` }) }}>
          <Label color={C.purple}>AI Feedback</Label>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13.5, color: C.text, lineHeight: 1.8, whiteSpace: "pre-wrap" }}>{feedback}</p>
        </div>
      )}
    </div>
  );
}

// ═══ NAVIGATION ═══════════════════════════════════════════════════════════
const TABS = [
  { id: "home", icon: "⌂", label: "Home" },
  { id: "profile", icon: "◈", label: "Profile" },
  { id: "timeline", icon: "◎", label: "Journey" },
  { id: "projects", icon: "◧", label: "Projects" },
  { id: "references", icon: "❝", label: "Refs" },
  { id: "chat", icon: "◌", label: "AI Twin" },
  { id: "recruiter", icon: "◆", label: "Recruiter" },
  { id: "interview", icon: "◉", label: "Interview" },
];

const VIEWS = { home: HomeTab, profile: ProfileTab, timeline: TimelineTab, projects: ProjectsTab, references: ReferencesTab, chat: ChatTab, recruiter: RecruiterTab, interview: InterviewTab };

// ═══ MAIN APP ════════════════════════════════════════════════════════════
export default function NithishOS() {
  const [tab, setTab] = useState("home");
  const View = VIEWS[tab];

  return (
    <div style={{ height: "100vh", background: C.bg, display: "flex", flexDirection: "column", overflow: "hidden", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500;600&family=DM+Sans:wght@300;400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        @keyframes bounce{0%,100%{transform:translateY(0);opacity:.4}50%{transform:translateY(-4px);opacity:1}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse{0%,100%{opacity:.5;transform:scale(1)}50%{opacity:1;transform:scale(1.15)}}
        ::-webkit-scrollbar{width:3px}::-webkit-scrollbar-thumb{background:rgba(0,229,192,0.2);border-radius:2px}
        textarea::placeholder{color:#2d3748}
        button:active{transform:scale(0.97)}
      `}</style>

      {/* Title Bar */}
      <div style={{ height: 38, background: "#080c15", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", padding: "0 16px", flexShrink: 0, gap: 12 }}>
        <div style={{ display: "flex", gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
        </div>
        <div style={{ flex: 1, textAlign: "center", fontFamily: "'DM Mono', monospace", fontSize: 10, color: C.muted, letterSpacing: "0.08em" }}>
          NITHISH.OS · v2.0 · Career Digital Twin
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.teal, display: "inline-block", animation: "pulse 2.5s ease-in-out infinite" }} />
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: C.teal }}>LIVE</span>
        </div>
      </div>

      {/* Body */}
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        {/* Sidebar */}
        <div style={{ width: 66, background: "#080c15", borderRight: `1px solid ${C.border}`, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 14, gap: 3, flexShrink: 0 }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} title={t.label} style={{ width: 48, height: 48, borderRadius: 11, background: tab === t.id ? `${C.teal}14` : "transparent", border: tab === t.id ? `1px solid ${C.teal}35` : "1px solid transparent", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3, transition: "all 0.15s", position: "relative" }}>
              {tab === t.id && <div style={{ position: "absolute", left: 0, top: "25%", bottom: "25%", width: 2, borderRadius: "0 2px 2px 0", background: C.teal }} />}
              <span style={{ fontSize: 15, lineHeight: 1, filter: tab === t.id ? "none" : "grayscale(1) opacity(0.4)" }}>{t.icon}</span>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 7, color: tab === t.id ? C.teal : C.muted, lineHeight: 1, letterSpacing: "0.05em" }}>{t.label.slice(0, 4).toUpperCase()}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
          <View key={tab} />
        </div>
      </div>
    </div>
  );
}
