export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {new Date().getFullYear()} <strong>Nagarjuna Charupally</strong> ·
          Built with React + Vite, powered by ☕ &amp; PowerCLI.
        </p>
        <a href="#home" className="footer__top" aria-label="Back to top">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
          Back to top
        </a>
      </div>
    </footer>
  );
}
