'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        <div className="footer-col-left" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <Logo size={36} />
          <div>
            <strong>Jayprakash Pal</strong>
            <span>Web, Mobile &amp; Digital Product Development · Mumbai, India</span>
          </div>
        </div>

        <nav className="footer-col-nav" aria-label="Footer navigation">
          <a href="https://github.com/jaypal1046/" target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <a href="https://www.linkedin.com/in/jayprakashpal1005" target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          <a href="tel:+919082691348">
            Call +91 90826 91348
          </a>
          <a href="mailto:jayprakash.pal@flutterjs.dev">
            jayprakash.pal@flutterjs.dev
          </a>
          <Link href="#top" aria-label="Scroll back to top of page">
            Back to Top ↑
          </Link>
        </nav>

        <p className="footer-copy">
          © {year} Jayprakash Pal. Powered by Next.js SSR &amp; React 19.
        </p>
      </div>
    </footer>
  );
}
