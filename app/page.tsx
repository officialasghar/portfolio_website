export default function Home() {
  const skills = [
    ["AI & Agents", "Generative AI", "LangChain", "LangGraph", "RAG", "Prompt Engineering"],
    ["Backend", "Python", "FastAPI", "Flask", "REST APIs", "PostgreSQL"],
    ["AI Models", "OpenAI", "Gemini", "Claude", "Hugging Face", "Ollama"],
    ["DevOps", "Docker", "GitHub Actions", "Linux", "OCI", "Nginx"],
    ["Frontend", "React", "Next.js", "JavaScript", "HTML & CSS", "Tailwind CSS"],
    ["Data", "NumPy", "Pandas", "FAISS", "Qdrant", "ChromaDB"],
  ];

  const projects = [
    {
      number: "01",
      category: "GENERATIVE AI",
      title: "AI Question Generation",
      description: "Generate assessment-ready questions from PDFs, documents, and text using Google Gemini.",
      stack: ["Python", "Flask", "Gemini"],
    },
    {
      number: "02",
      category: "CAREER AUTOMATION",
      title: "AI Resume Analyzer",
      description: "Compare resumes with job descriptions and surface relevant skills, gaps, and insights.",
      stack: ["Gemini", "OCR", "BeautifulSoup"],
    },
    {
      number: "03",
      category: "DATABASE AI",
      title: "Text-to-SQL System",
      description: "Turn natural-language questions into SQL using PostgreSQL, RAG, and open-source models.",
      stack: ["PostgreSQL", "Qwen2.5", "RAG"],
    },
    {
      number: "04",
      category: "AGENTIC AI",
      title: "Task Management Agent",
      description: "An authenticated AI-agent workflow with persistent tasks, APIs, and a modern frontend.",
      stack: ["FastAPI", "LangGraph", "Docker"],
    },
    {
      number: "05",
      category: "KNOWLEDGE RETRIEVAL",
      title: "RAG Document QA",
      description: "Grounded document question answering powered by vector search and semantic retrieval.",
      stack: ["LangChain", "ChromaDB", "Groq"],
    },
    {
      number: "06",
      category: "VOICE AI",
      title: "Real-Time Voice Assistant",
      description: "A conversational voice pipeline combining speech recognition, LLMs, and text-to-speech.",
      stack: ["LiveKit", "LLMs", "TTS"],
    },
  ];

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#home" aria-label="Asghar Asad home">
          AS<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>
        <a className="nav-contact" href="#contact">Let&apos;s talk</a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span /> AI Developer & Agentic AI Engineer</div>
          <h1>Building intelligent<br />systems that <em>solve</em><br />real problems.</h1>
          <p>
            I develop Generative AI applications, autonomous agents, and intelligent
            automation systems using modern AI technologies.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore projects <b>↗</b></a>
            <a className="button button-secondary" href="#contact">Contact me</a>
          </div>
          <div className="availability"><span /> Open to AI engineering opportunities</div>
        </div>

        <div className="hero-art" aria-label="Abstract AI profile illustration">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="portrait">
            <div className="portrait-glow" />
            <div className="monogram">AA</div>
          </div>
          <div className="floating-card card-agent">
            <span className="status-dot" />
            <div><small>AGENT STATUS</small><strong>Running</strong></div>
          </div>
          <div className="floating-card card-stack">
            <small>CORE STACK</small>
            <strong>AI + PYTHON</strong>
          </div>
          <span className="spark spark-one">+</span>
          <span className="spark spark-two">+</span>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>LANGCHAIN <span>✦</span> LANGGRAPH <span>✦</span> GENERATIVE AI <span>✦</span> RAG <span>✦</span> FASTAPI <span>✦</span> PYTHON <span>✦</span> AI AGENTS</div>
      </div>

      <section className="section about" id="about">
        <div>
          <div className="section-label">01 / ABOUT</div>
          <h2>Turning language models into <em>working systems.</em></h2>
        </div>
        <div className="about-copy">
          <p className="lead">
            I&apos;m a Software Engineering graduate passionate about building
            practical software with Generative and Agentic AI.
          </p>
          <p>
            My work focuses on connecting language models with real-world tools,
            APIs, databases, and application workflows. I build AI systems that
            retrieve information, execute tools, interact with structured data,
            and help users complete multi-step tasks.
          </p>
          <div className="about-stats">
            <div><strong>3.8</strong><span>CGPA / 4.0</span></div>
            <div><strong>8+</strong><span>AI projects</span></div>
            <div><strong>BS</strong><span>Software Engineering</span></div>
          </div>
        </div>
      </section>

      <section className="section experience" id="experience">
        <div className="section-label">02 / EXPERIENCE</div>
        <div className="experience-card">
          <div className="experience-date">DEC 2025 — MAR 2026</div>
          <div>
            <p className="company">Wise Teck — Part of Wise College</p>
            <h2>AI Intern / Generative AI Engineer Intern</h2>
            <p>
              Developed practical AI applications and backend integrations,
              including an e-commerce chatbot, recommendation functionality,
              FastAPI endpoints, and LangChain-powered workflows.
            </p>
            <div className="tags">
              <span>Python</span><span>FastAPI</span><span>LangChain</span>
              <span>OpenAI</span><span>Gemini</span><span>Hugging Face</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section skills" id="skills">
        <div className="skills-heading">
          <div>
            <div className="section-label">03 / CAPABILITIES</div>
            <h2>Tools behind the <em>work.</em></h2>
          </div>
          <p>From language models and data pipelines to APIs, containers, and cloud deployment.</p>
        </div>
        <div className="skill-grid">
          {skills.map(([title, ...items]) => (
            <article className="skill-card" key={title}>
              <div className="skill-icon">↗</div>
              <h3>{title}</h3>
              <div>{items.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="projects-heading">
          <div>
            <div className="section-label">04 / SELECTED WORK</div>
            <h2>Ideas built into <em>products.</em></h2>
          </div>
          <p>Selected AI systems and experiments spanning agents, retrieval, automation, and voice.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <span>{project.number}</span>
                <b>↗</b>
              </div>
              <div className="project-category">{project.category}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-stack">
                {project.stack.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="section-label">05 / CONTACT</div>
        <h2>Let&apos;s build something <em>intelligent.</em></h2>
        <p>Have an AI product idea, automation challenge, or opportunity to collaborate?</p>
        <a className="button button-primary" href="mailto:hello@asghar.online">Get in touch <b>↗</b></a>
      </section>

      <footer>
        <a className="brand" href="#home">AS<span>.</span></a>
        <p>© 2026 Asghar Asad. Built with passion for AI and intelligent systems.</p>
        <div><a href="https://asghar.online">Website</a><a href="https://github.com">GitHub</a><a href="https://linkedin.com">LinkedIn</a></div>
      </footer>
    </main>
  );
}
