import { useEffect, useState } from 'react'
import './App.css'

const stats = [
  { value: '5+', label: 'Years experience' },
  { value: '98%', label: 'On-time delivery' },
  { value: '4', label: 'Core domains' },
  { value: 'Berlin', label: 'Based in Germany' },
]

const skills = [
  // Backend & Languages
  { label: 'C#', tone: 'blue' },
  { label: '.NET 10', tone: 'green' },
  { label: '.NET 8', tone: 'green' },
  { label: '.NET Core', tone: 'indigo' },
  { label: 'ASP.NET Core', tone: 'cyan' },
  { label: 'Node.js', tone: 'green' },
  { label: 'NestJS', tone: 'pink' },
  { label: 'TypeScript', tone: 'blue' },
  { label: 'JavaScript', tone: 'amber' },
  { label: 'Python', tone: 'blue' },
  
  // Frontend
  { label: 'React', tone: 'cyan' },
  { label: 'Next.js', tone: 'slate' },
  { label: 'Angular', tone: 'pink' },
  { label: 'TypeScript', tone: 'blue' },
  { label: 'HTML/CSS', tone: 'amber' },
  { label: 'Material UI', tone: 'indigo' },
  { label: 'AG-Grid', tone: 'violet' },
  
  // APIs & Architecture
  { label: 'REST APIs', tone: 'violet' },
  { label: 'Microservices', tone: 'pink' },
  { label: 'Event-Driven Architecture', tone: 'cyan' },
  { label: 'CQRS', tone: 'indigo' },
  { label: 'gRPC', tone: 'blue' },
  { label: 'GraphQL', tone: 'pink' },
  
  // Cloud & Infrastructure
  { label: 'Azure', tone: 'blue' },
  { label: 'GCP', tone: 'green' },
  { label: 'AWS', tone: 'amber' },
  { label: 'Docker', tone: 'cyan' },
  { label: 'Kubernetes', tone: 'indigo' },
  { label: 'Terraform', tone: 'violet' },
  { label: 'Infrastructure as Code', tone: 'slate' },
  
  // Databases
  { label: 'PostgreSQL', tone: 'indigo' },
  { label: 'SQL Server', tone: 'blue' },
  { label: 'MySQL', tone: 'amber' },
  { label: 'MongoDB', tone: 'green' },
  { label: 'Redis', tone: 'pink' },
  { label: 'Entity Framework Core', tone: 'cyan' },
  { label: 'Query Optimization', tone: 'violet' },
  
  // DevOps & CI/CD
  { label: 'GitHub Actions', tone: 'slate' },
  { label: 'GitLab CI/CD', tone: 'amber' },
  { label: 'Azure DevOps', tone: 'blue' },
  { label: 'Jenkins', tone: 'cyan' },
  { label: 'Git', tone: 'slate' },
  
  // Monitoring & Observability
  { label: 'ELK Stack', tone: 'cyan' },
  { label: 'Grafana', tone: 'amber' },
  { label: 'Prometheus', tone: 'pink' },
  { label: 'Application Insights', tone: 'blue' },
  { label: 'Datadog', tone: 'violet' },
  
  // Testing
  { label: 'Unit Testing', tone: 'green' },
  { label: 'Integration Testing', tone: 'indigo' },
  { label: 'xUnit', tone: 'blue' },
  { label: 'Jest', tone: 'pink' },
  { label: 'TDD', tone: 'cyan' },
  { label: 'Playwright', tone: 'violet' },
  
  // Healthcare & Domain-Specific
  { label: 'FHIR', tone: 'pink' },
  { label: 'HL7 v2', tone: 'violet' },
  { label: 'Healthcare IT', tone: 'cyan' },
  { label: 'FinTech', tone: 'green' },
  
  // Methodologies & Practices
  { label: 'Agile/Scrum', tone: 'slate' },
  { label: 'SOLID Principles', tone: 'blue' },
  { label: 'Clean Code', tone: 'indigo' },
  { label: 'Code Reviews', tone: 'amber' },
  { label: 'Technical Leadership', tone: 'pink' },
  { label: 'Mentoring', tone: 'violet' },
  
  // Emerging & Modern Practices
  { label: 'AI-Assisted Development', tone: 'green' },
  { label: 'GitHub Copilot', tone: 'cyan' },
  { label: 'Performance Optimization', tone: 'blue' },
  { label: 'Distributed Systems', tone: 'indigo' },
]

const focusAreas = [
  {
    title: 'Backend Platforms',
    text: 'I design and build business-critical APIs, services, and integration-heavy backend workflows with a strong focus on maintainability and delivery speed.',
  },
  {
    title: 'Complex Domains',
    text: 'My work sits in regulated and process-heavy environments including healthcare, insurance, banking, and industrial software.',
  },
  {
    title: 'Product Ownership',
    text: 'I work across implementation, refactoring, SQL optimization, CI/CD, and collaboration with product and operations teams.',
  },
]

const projects = [
  {
    name: 'Entlass-Manager',
    company: 'Verbund-Pflegehilfe',
    link: 'https://entlassmanager.pflegehilfe.org/',
    impact: 'Delivered the AHB feature and supported digital discharge-management workflows.',
    description:
      'Built healthcare workflows for social services and clinic coordination, with a focus on reliable backend behavior, practical UI flows, and domain-heavy integrations.',
    tech: [],
  },
  {
    name: 'Orca Insurance Platform',
    company: 'Imaginera',
    link: 'https://www.imaginera.co.uk/product',
    impact: 'Worked on insurance workflows with strong emphasis on backend reliability and maintainability.',
    description:
      'Contributed to insurance product workflows and internal platform modules, with emphasis on backend reliability, SQL performance, and maintainable business logic.',
    tech: [],
  },
  {
    name: 'Konnect by HBL',
    company: 'HBL',
    link: 'https://www.hbl.com/personal/konnect/agent',
    impact: 'Supported digital banking and wallet flows for transfers, payments, and customer-facing transaction journeys.',
    description:
      'Worked in fintech on branchless banking capabilities and transaction-driven experiences where correctness, performance, and integration quality matter.',
    tech: [],
  },
  {
    name: 'TimePay & Payroll',
    company: 'Starsys Solutions',
    link: 'https://starsyssolutions.com/',
    impact: 'Built software around attendance, payroll, GPS tracking, and hardware-adjacent business automation.',
    description:
      'Developed product modules in an industrial IT setting that combined business workflows, operational reporting, and SDK-style integration work.',
    tech: [],
  },
]

const experience = [
  {
    company: 'Verbund-Pflegehilfe',
    period: 'Nov 2025 – Present',
    highlighted: true,
    meta: 'Healthcare',
    role: 'Senior Software Engineer',
    summary: 'Built digital discharge-management workflows with strong backend ownership and integration-heavy product delivery.',
    bullets: [
      'Delivered the AHB feature and supported domain-heavy clinic workflows.',
      'Worked across backend services, APIs, database changes, and practical UI flows.',
      'Handled healthcare integrations shaped by FHIR R4, HL7 v2, and KIS-related requirements.',
    ],
    tech: [],
  },
  {
    company: 'Imaginera',
    period: 'Sep 2023 – Oct 2025',
    highlighted: true,
    meta: 'Insurance',
    role: 'Senior Software Engineer',
    summary: 'Worked on insurance software where clean backend structure, SQL performance, and delivery consistency mattered.',
    bullets: [
      'Contributed to insurance workflows with emphasis on backend reliability and maintainable business logic.',
      'Improved SQL-facing application behavior and supported stable feature delivery.',
      'Worked in a product context where architecture and operational quality both mattered.',
    ],
    tech: [],
  },
  {
    company: 'HBL',
    period: 'Mar 2022 – Aug 2023',
    highlighted: false,
    meta: 'Banking',
    role: 'Product Development Engineer',
    summary: 'Contributed to transaction-oriented banking systems supporting customer-facing financial flows.',
    bullets: [
      'Worked on banking and wallet-related product workflows.',
      'Built software around correctness, integration quality, and operational reliability.',
      'Supported payments and transaction-heavy systems in a fintech environment.',
    ],
    tech: [],
  },
  {
    company: 'Starsys Solutions',
    period: 'Jul 2020 – Feb 2022',
    highlighted: false,
    meta: 'Industrial IT',
    role: 'Full Stack Engineer',
    summary: 'Built workforce-management and operational software with payroll, GPS tracking, and integration-heavy modules.',
    bullets: [
      'Developed product modules for attendance, payroll, and workforce automation.',
      'Worked close to business processes and reporting-oriented product requirements.',
      'Built software in an environment that included hardware-adjacent integration work.',
    ],
    tech: [],
  },
]

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const contactItems = [
  {
    icon: 'email',
    label: 'Email',
    value: 'wajahat.career@gmail.com',
    href: 'mailto:wajahat.career@gmail.com',
  },
  {
    icon: 'phone',
    label: 'Phone',
    value: '+49 155 633 98 329',
    href: 'tel:+4915563398329',
  },
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/dev-wajahat',
    href: 'https://www.linkedin.com/in/dev-wajahat/',
  },
  {
    icon: 'location',
    label: 'Location',
    value: 'Berlin, Germany',
    href: 'https://www.google.com/maps/place/Rudolf-Reusch-Stra%C3%9Fe+32,+10367+Bezirk+Lichtenberg/@52.5172865,13.4801962,17z/data=!3m1!4b1!4m6!3m5!1s0x47a84e9206eab99b:0xa636a02e2e63f5e8!8m2!3d52.5172833!4d13.4827711!16s%2Fg%2F11c217rdnf?entry=ttu&g_ep=EgoyMDI2MDYyOC4wIKXMDSoASAFQAw%3D%3D',
  },
]

function ContactIcon({ type }: { type: string }) {
  if (type === 'email') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4 6.75h16a1.25 1.25 0 0 1 1.25 1.25v8A2.75 2.75 0 0 1 18.5 18.75h-13A2.75 2.75 0 0 1 2.75 16V8A1.25 1.25 0 0 1 4 6.75Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m4 8 8 6 8-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (type === 'phone') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M7.5 4.75h2.1c.5 0 .95.3 1.14.77l1.03 2.58c.16.4.08.85-.22 1.16l-1.1 1.13a13.3 13.3 0 0 0 5.16 5.16l1.13-1.1c.31-.3.76-.38 1.16-.22l2.58 1.03c.47.19.77.64.77 1.14v2.1A1.5 1.5 0 0 1 19.75 20C11.88 20 5 13.12 5 5.25a1.5 1.5 0 0 1 1.5-1.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (type === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M6.9 8.5a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z"
          fill="currentColor"
        />
        <path
          d="M5.8 10.2h2.2v7.9H5.8zM10.2 10.2h2.1v1.08h.03c.3-.56 1.03-1.25 2.12-1.25 2.26 0 2.68 1.49 2.68 3.42v4.63h-2.2V14c0-.99-.02-2.27-1.39-2.27s-1.6 1.08-1.6 2.2v4.17h-2.2z"
          fill="currentColor"
        />
        <rect
          x="3.75"
          y="3.75"
          width="16.5"
          height="16.5"
          rx="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 20s6-4.9 6-10a6 6 0 1 0-12 0c0 5.1 6 10 6 10Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.3" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0.2, 0.4, 0.6],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">
          <div>
            <h1>Wajahat Haider</h1>
          </div>
        </div>

        <nav className="nav">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'is-active' : ''}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero animate-rise">
          <div className="hero-copy animate-rise delay-1">
            <p className="availability-pill">Available for opportunities in Germany</p>
            <h2>Wajahat Haider</h2>
            <p className="hero-text">
              I build integration-heavy products with C#, .NET, SQL, TypeScript,
              Angular, and React. My work spans healthcare, insurance, banking,
              and industrial software, with a strong focus on maintainable
              systems, delivery ownership, and domain-driven problem solving.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#contact">
                Contact Me
              </a>
              <a
                className="button ghost"
                href="#projects"
              >
                View projects
              </a>
            </div>
          </div>
        </section>

        <section className="stats-section animate-rise delay-2">
          {stats.map((stat) => (
            <article key={stat.label} className="stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </section>

        <section id="about" className="content-section animate-rise">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h3>Engineering with a product and operations mindset.</h3>
          </div>

          <div className="focus-grid">
            {focusAreas.map((item) => (
              <article key={item.title} className="info-card">
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="content-section animate-rise">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
          </div>

          <div className="skills-cloud">
            {skills.map((skill) => (
              <span key={skill.label} className={`chip skill-chip tone-${skill.tone}`}>
                {skill.label}
              </span>
            ))}
          </div>
        </section>


        <section id="experience" className="content-section animate-rise">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
          </div>

          <div className="experience-list">
            {experience.map((item) => (
              <article
                key={item.company}
                className={`experience-item ${item.highlighted ? 'is-highlighted' : 'is-muted'}`}
              >
                <div className="experience-marker" />
                <div className="experience-content">
                  <div className="experience-head">
                    <div>
                      <p className="experience-company">{item.company}</p>
                      <h4>{item.role}</h4>
                    </div>
                    <p className="experience-meta">{item.period}</p>
                  </div>
                  <p className="experience-summary">{item.summary}</p>
                  <ul className="experience-bullets">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="experience-tags">
                    {item.tech.map((tag) => (
                      <span key={tag} className="chip experience-chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="content-section animate-rise">
          <div className="section-heading">
            <p className="eyebrow">Featured Work</p>
            <h3>Projects across healthcare, insurance, banking, and payroll.</h3>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.name} className="project-card">
                <div className="project-head">
                  <div>
                    <p className="project-company">{project.company}</p>
                    <h4>{project.name}</h4>
                  </div>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    Visit
                  </a>
                </div>

                <p className="project-impact">{project.impact}</p>
                <p>{project.description}</p>

                <div className="chip-grid">
                  {project.tech.map((item) => (
                    <span key={item} className="chip subtle">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="content-section contact-section animate-rise">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
          </div>

          <p className="availability-pill contact-pill">Available for opportunities in Germany</p>

          <div className="contact-grid">
            {contactItems.map((item) => (
              <a
                key={item.label}
                className="contact-card contact-info-card"
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <span className="contact-icon">
                  <ContactIcon type={item.icon} />
                </span>
                <span className="contact-label">{item.label}</span>
                <strong className="contact-value">{item.value}</strong>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Wajahat Haider. All rights reserved.</p>
        <p>Built with React · Vite · Custom CSS</p>
      </footer>
    </div>
  )
}

export default App