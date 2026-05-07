export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <header className="section__head" data-reveal>
          <span className="section__num">01</span>
          <h2 className="section__title">About Me</h2>
          <p className="section__subtitle">
            Where infrastructure meets engineering precision.
          </p>
        </header>

        <div className="about__grid">
          <div className="about__text" data-reveal>
            <p>
              I'm <strong>Nagarjuna Charupally</strong> — a VMware Administrator
              passionate about building rock-solid virtualized environments
              that just <em>work</em>. Today, I architect and operate
              virtualization infrastructure at <strong>Aptly Technology
              Corporation</strong>, keeping mission-critical systems online
              around the clock.
            </p>
            <p>
              My journey began as a Software Engineer at <strong>Tech
              Mahindra</strong>, where I learned to build software with
              discipline, ship under pressure, and treat reliability as a
              feature. That engineering mindset is what I bring to
              infrastructure today — automating the boring, observing the
              important, and designing systems that scale gracefully.
            </p>
            <p>
              When I'm not provisioning VMs or tuning hypervisors, you'll find
              me exploring new tech, scripting in PowerShell, or fine-tuning
              home-lab clusters for fun.
            </p>

            <ul className="about__highlights">
              <li>
                <span className="ico" aria-hidden>⚡</span>
                <div>
                  <strong>Reliability First</strong>
                  <small>Designing for 99.9%+ uptime across production workloads.</small>
                </div>
              </li>
              <li>
                <span className="ico" aria-hidden>🔁</span>
                <div>
                  <strong>Automation Obsessed</strong>
                  <small>Scripting repetitive ops away with PowerCLI &amp; PowerShell.</small>
                </div>
              </li>
              <li>
                <span className="ico" aria-hidden>🧠</span>
                <div>
                  <strong>Engineer at Heart</strong>
                  <small>Writing code where shell scripts can't reach.</small>
                </div>
              </li>
            </ul>
          </div>

          <aside className="about__card" data-reveal>
            <div className="profile-card">
              <div className="profile-card__avatar">
                <span>NC</span>
                <i className="ring" />
                <i className="ring ring--2" />
              </div>
              <h3>Nagarjuna Charupally</h3>
              <p className="profile-card__role">VMware Administrator</p>

              <dl className="profile-card__meta">
                <div>
                  <dt>Company</dt>
                  <dd>Aptly Technology Corp.</dd>
                </div>
                <div>
                  <dt>Focus</dt>
                  <dd>Virtualization · Infrastructure</dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>Hyderabad, India</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd className="ok">● Available</dd>
                </div>
              </dl>

              <div className="profile-card__tags">
                <span>vSphere</span>
                <span>ESXi</span>
                <span>vCenter</span>
                <span>PowerCLI</span>
                <span>Linux</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
