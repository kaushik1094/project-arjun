const groups = [
  {
    title: 'Virtualization',
    icon: '🖥️',
    items: [
      { name: 'VMware vSphere', level: 95 },
      { name: 'VMware ESXi', level: 95 },
      { name: 'vCenter Server', level: 92 },
      { name: 'vSAN / vMotion', level: 85 }
    ]
  },
  {
    title: 'Automation & Scripting',
    icon: '⚙️',
    items: [
      { name: 'PowerShell / PowerCLI', level: 90 },
      { name: 'Bash', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'Ansible', level: 70 }
    ]
  },
  {
    title: 'Systems & Cloud',
    icon: '☁️',
    items: [
      { name: 'Windows Server', level: 90 },
      { name: 'Linux (RHEL/Ubuntu)', level: 85 },
      { name: 'Active Directory', level: 80 },
      { name: 'AWS / Azure (basics)', level: 70 }
    ]
  },
  {
    title: 'Storage, Network & Backup',
    icon: '🔐',
    items: [
      { name: 'SAN / NAS Storage', level: 85 },
      { name: 'Networking (VLAN/VPN)', level: 80 },
      { name: 'Veeam Backup', level: 85 },
      { name: 'Disaster Recovery', level: 80 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <header className="section__head" data-reveal>
          <span className="section__num">03</span>
          <h2 className="section__title">Skills &amp; Toolkit</h2>
          <p className="section__subtitle">
            The stack I use to keep infrastructure humming.
          </p>
        </header>

        <div className="skills__grid">
          {groups.map((g) => (
            <article className="skills__card" key={g.title} data-reveal>
              <header className="skills__card-head">
                <span className="skills__icon" aria-hidden>{g.icon}</span>
                <h3>{g.title}</h3>
              </header>
              <ul>
                {g.items.map((it) => (
                  <li key={it.name}>
                    <div className="skill__row">
                      <span>{it.name}</span>
                      <span className="skill__pct">{it.level}%</span>
                    </div>
                    <div className="skill__bar" aria-hidden>
                      <span style={{ '--w': `${it.level}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="badges" data-reveal>
          <h4>Also experienced with</h4>
          <ul>
            {[
              'Hyper-V', 'Docker', 'Git', 'Jira', 'Confluence',
              'ServiceNow', 'SCCM', 'NSX', 'Terraform', 'Grafana',
              'Nagios', 'SQL', 'REST APIs', 'CI/CD'
            ].map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
