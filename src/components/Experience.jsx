const jobs = [
  {
    role: 'VMware Administrator',
    company: 'Aptly Technology Corporation',
    period: 'Present',
    type: 'Full-time',
    summary:
      'Architecting and operating large-scale VMware environments — from ESXi hosts to vCenter clusters — ensuring high availability, performance, and security for business-critical workloads.',
    bullets: [
      'Manage 200+ virtual machines across multi-host vSphere clusters with HA & DRS.',
      'Automate provisioning, patching, and reporting using PowerCLI and PowerShell.',
      'Design backup, replication, and disaster-recovery strategies to meet strict RPO/RTO targets.',
      'Collaborate with networking and storage teams to optimize SAN/NAS performance and capacity.',
      'Monitor health and performance via vRealize / Aria Operations and proactively tune hosts.'
    ],
    tags: ['vSphere 8', 'vCenter', 'ESXi', 'PowerCLI', 'Veeam', 'SAN/NAS']
  },
  {
    role: 'Software Engineer',
    company: 'Tech Mahindra',
    period: 'Earlier',
    type: 'Full-time',
    summary:
      'Built and maintained enterprise software solutions — sharpening the engineering fundamentals that now power my approach to infrastructure-as-code and automation.',
    bullets: [
      'Developed and maintained backend modules for enterprise client platforms.',
      'Wrote unit & integration tests, contributing to a healthy CI/CD pipeline.',
      'Collaborated in Agile teams across geographies, owning features end-to-end.',
      'Investigated production issues, root-caused bugs, and shipped robust fixes.',
      'Mentored junior developers on coding standards and review etiquette.'
    ],
    tags: ['Java', 'SQL', 'REST APIs', 'Agile', 'CI/CD', 'Linux']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <header className="section__head" data-reveal>
          <span className="section__num">02</span>
          <h2 className="section__title">Experience</h2>
          <p className="section__subtitle">
            A timeline from code to infrastructure.
          </p>
        </header>

        <ol className="timeline">
          {jobs.map((job, i) => (
            <li className="timeline__item" key={job.company} data-reveal>
              <div className="timeline__marker">
                <span className="timeline__dot" />
              </div>
              <article className="timeline__card">
                <div className="timeline__top">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="timeline__company">
                      <span>{job.company}</span>
                      <span className="sep">•</span>
                      <span>{job.type}</span>
                    </p>
                  </div>
                  <span className="timeline__period">{job.period}</span>
                </div>

                <p className="timeline__summary">{job.summary}</p>

                <ul className="timeline__bullets">
                  {job.bullets.map((b) => (
                    <li key={b}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="check">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="timeline__tags">
                  {job.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
