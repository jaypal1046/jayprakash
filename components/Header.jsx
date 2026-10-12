'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  const [theme, setTheme] = useState('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('jp-theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('jp-theme', nextTheme);
  };

  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <Link href="#top" className="brand" aria-label="Jayprakash Pal, back to top">
          <Logo size={42} />
          <span className="brand-name">
            Jayprakash Pal
            <small>Digital Product Development</small>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-desktop" aria-label="Main navigation">
          <Link href="#services" className="nav-link">Services</Link>
          <Link href="#work" className="nav-link">Work</Link>
          <Link href="#estimator" className="nav-link">Scope Planner</Link>
          <Link href="#about" className="nav-link">About</Link>
        </nav>

        {/* Header Controls */}
        <div className="header-controls">
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          <a
            href="mailto:jayprakash.pal@flutterjs.dev?subject=Project%20Enquiry%20via%20Portfolio"
            className="header-contact-btn"
          >
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="mobile-menu-toggle"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span style={{ transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
            <span style={{ opacity: mobileMenuOpen ? 0 : 1 }}></span>
            <span style={{ transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          <Link href="#services" onClick={() => setMobileMenuOpen(false)}>01 / Services</Link>
          <Link href="#work" onClick={() => setMobileMenuOpen(false)}>02 / Selected Work</Link>
          <Link href="#estimator" onClick={() => setMobileMenuOpen(false)}>03 / Project Scope Planner</Link>
          <Link href="#about" onClick={() => setMobileMenuOpen(false)}>04 / About Jayprakash</Link>
          <Link href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ color: '#8da435' }}>
            Start a Conversation ↗
          </Link>
        </div>
      )}
    </header>
  );
}
