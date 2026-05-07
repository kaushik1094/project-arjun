import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:nagarjuna.charupally@example.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <header className="section__head" data-reveal>
          <span className="section__num">05</span>
          <h2 className="section__title">Get in Touch</h2>
          <p className="section__subtitle">
            Have a project, role, or idea? Let's talk infrastructure.
          </p>
        </header>

        <div className="contact__grid">
          <aside className="contact__info" data-reveal>
            <h3>Let's build something reliable.</h3>
            <p>
              I'm always open to discussing new opportunities — whether it's a
              full-time role, contract work, or just nerding out about
              virtualization. The fastest way to reach me is the form on the
              right or any of the channels below.
            </p>

            <ul className="contact__list">
              <li>
                <span className="ico" aria-hidden>✉️</span>
                <div>
                  <small>Email</small>
                  <a href="mailto:nagarjuna.charupally@example.com">
                    nagarjuna.charupally@example.com
                  </a>
                </div>
              </li>
              <li>
                <span className="ico" aria-hidden>💼</span>
                <div>
                  <small>LinkedIn</small>
                  <a href="https://www.linkedin.com/in/" target="_blank" rel="noreferrer">
                    /in/nagarjuna-charupally
                  </a>
                </div>
              </li>
              <li>
                <span className="ico" aria-hidden>📍</span>
                <div>
                  <small>Based in</small>
                  <span>Hyderabad, India</span>
                </div>
              </li>
              <li>
                <span className="ico" aria-hidden>🟢</span>
                <div>
                  <small>Status</small>
                  <span>Open to opportunities</span>
                </div>
              </li>
            </ul>
          </aside>

          <form className="contact__form" onSubmit={onSubmit} data-reveal>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={onChange}
                required
                placeholder="Your name"
                autoComplete="name"
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                required
                placeholder="you@company.com"
                autoComplete="email"
              />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={onChange}
                required
                rows="5"
                placeholder="Tell me a bit about your project or role…"
              />
            </div>

            <button type="submit" className="btn btn--primary btn--block">
              {sent ? 'Opening Email…' : 'Send Message'}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>

            <p className="form__note">
              Submitting opens your email client. No data is stored on this site.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
