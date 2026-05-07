const projects = [
  {
    title: 'Multi-Site vSphere Cluster Modernization',
    blurb:
      'Led the migration of legacy hosts to vSphere 8 across multiple sites, introducing HA/DRS, modern lifecycle management, and zero-downtime workload mobility.',
    tags: ['vSphere 8', 'HA/DRS', 'vMotion', 'Lifecycle Manager'],
    impact: ['↓ 60% patching time', '↑ 99.99% uptime', '0 data-loss events'],
    accent: 'purple'
  },
  {
    title: 'PowerCLI Automation Suite',
    blurb:
      'Built a reusable PowerCLI/PowerShell library to automate VM provisioning, snapshot hygiene, capacity reports, and host compliance checks across the fleet.',
    tags: ['PowerCLI', 'PowerShell', 'Automation', 'Reporting'],
    impact: ['↓ 70% manual effort', '⏱ Sub-minute provisioning', 'Daily auto reports'],
    accent: 'cyan'
  },
  {
    title: 'Backup & Disaster Recovery Blueprint',
    blurb:
      'Designed an end-to-end Veeam-based DR strategy with replication, immutable backups, and tested failover runbooks meeting strict RPO/RTO objectives.',
    tags: ['Veeam', 'DR', 'Replication', 'Runbooks'],
    impact: ['RPO ≤ 15m', 'RTO ≤ 1h', 'Quarterly DR drills'],
    accent: 'pink'
  },
  {
    title: 'Monitoring & Observability Upgrade',
    blurb:
      'Rolled out vRealize / Aria Operations dashboards plus custom alerting to surface capacity, performance, and security signals before users feel them.',
    tags: ['Aria Ops', 'Dashboards', 'Alerting', 'Capacity Planning'],
    impact: ['MTTR ↓ 45%', 'Proactive alerts', 'Capacity forecasting'],
    accent: 'green'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <header className="section__head" data-reveal>
          <span className="section__num">04</span>
          <h2 className="section__title">Selected Projects</h2>
          <p className="section__subtitle">
            Work I'm proud of — infrastructure that keeps businesses running.
          </p>
        </header>

        <div className="projects__grid">
          {projects.map((p) => (
            <article
              key={p.title}
              className={`project project--${p.accent}`}
              data-reveal
            >
              <div className="project__glow" aria-hidden />

              <header className="project__head">
                <span className="project__chip">Case Study</span>
                <svg className="project__arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </header>

              <h3 className="project__title">{p.title}</h3>
              <p className="project__blurb">{p.blurb}</p>

              <ul className="project__impact">
                {p.impact.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>

              <div className="project__tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
