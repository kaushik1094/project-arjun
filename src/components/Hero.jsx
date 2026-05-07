import { useEffect, useState } from 'react';

const ROLES = [
  'VMware Administrator',
  'Virtualization Engineer',
  'Infrastructure Specialist',
  'Ex-Software Engineer'
];

export default function Hero() {
  const [text, setText] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    const speed = deleting ? 45 : 90;
    const t = setTimeout(() => {
      const next = deleting
        ? current.substring(0, text.length - 1)
        : current.substring(0, text.length + 1);
      setText(next);

      if (!deleting && next === current) {
        setTimeout(() => setDeleting(true), 1600);
      } else if (deleting && next === '') {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % ROLES.length);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, roleIdx]);

  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden>
        <div className="orb orb--purple" />
        <div className="orb orb--cyan" />
        <div className="orb orb--pink" />
        <div className="grid-overlay" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content" data-reveal>
          <span className="eyebrow">
            <span className="dot" /> Available for new opportunities
          </span>

          <h1 className="hero__title">
            Hi, I'm <span className="grad-text">Nagarjuna</span>
            <br />
            <span className="hero__role">
              {text}
              <span className="cursor-bar" />
            </span>
          </h1>

          <p className="hero__subtitle">
            VMware Administrator at <strong>Aptly Technology Corporation</strong>,
            crafting reliable virtualized infrastructure. Previously a Software
            Engineer at <strong>Tech Mahindra</strong> — I bridge the gap between
            code and cloud.
          </p>

          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">
              Explore My Work
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn btn--ghost">Get in Touch</a>
          </div>

          <ul className="hero__stats">
            <li>
              <strong>5+</strong>
              <span>Years in Tech</span>
            </li>
            <li>
              <strong>200+</strong>
              <span>VMs Managed</span>
            </li>
            <li>
              <strong>99.9%</strong>
              <span>Uptime Delivered</span>
            </li>
          </ul>
        </div>

        <div className="hero__visual" data-reveal>
          <div className="terminal">
            <div className="terminal__bar">
              <span className="dot dot--red" />
              <span className="dot dot--yellow" />
              <span className="dot dot--green" />
              <span className="terminal__title">~/nagarjuna — vmware-admin</span>
            </div>
            <div className="terminal__body">
              <p><span className="prompt">$</span> whoami</p>
              <p className="out">nagarjuna_charupally</p>
              <p><span className="prompt">$</span> esxcli system version get</p>
              <p className="out">Product: VMware ESXi</p>
              <p className="out">Version: 8.0.2 · Build 22380479</p>
              <p><span className="prompt">$</span> get-vm | measure</p>
              <p className="out">Count: 200+ &nbsp;Status: <span className="ok">healthy</span></p>
              <p><span className="prompt">$</span> ./deploy-cluster.sh --prod</p>
              <p className="out blink"><span className="ok">✓</span> Cluster online · uptime 99.99%</p>
              <p><span className="prompt">$</span> <span className="caret">_</span></p>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll to about">
        <span /><span /><span />
        <small>Scroll</small>
      </a>
    </section>
  );
}
