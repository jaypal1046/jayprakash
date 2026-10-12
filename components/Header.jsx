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

  // Body scroll lock and Escape key listener when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('jp-theme', nextTheme);
  };

  return (
    <>
      <header className="site-header" role="banner">
        <div className="container header-inner">
          <Link href="#top" className="brand" aria-label="Jayprakash Pal, back to top">
            <Logo size={40} />
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
              href="mailto:jayprakashpal@flutterjs.dev?subject=Project%20Enquiry%20via%20Portfolio"
              className="header-contact-btn"
            >
              Let&apos;s talk <span aria-hidden="true">↗</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className={`mobile-menu-toggle ${mobileMenuOpen ? 'is-active' : ''}`}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="bar top-bar"></span>
              <span className="bar mid-bar"></span>
              <span className="bar bot-bar"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="mobile-nav-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'drawer-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-drawer-content">
          <nav className="mobile-drawer-links" aria-label="Mobile links">
            <Link href="#services" onClick={() => setMobileMenuOpen(false)}>
              <span className="nav-num">01</span>
              <span className="nav-text">Services</span>
              <span className="nav-arrow" aria-hidden="true">→</span>
            </Link>
            <Link href="#work" onClick={() => setMobileMenuOpen(false)}>
              <span className="nav-num">02</span>
              <span className="nav-text">Selected Work</span>
              <span className="nav-arrow" aria-hidden="true">→</span>
            </Link>
            <Link href="#estimator" onClick={() => setMobileMenuOpen(false)}>
              <span className="nav-num">03</span>
              <span className="nav-text">Project Scope Planner</span>
              <span className="nav-arrow" aria-hidden="true">→</span>
            </Link>
            <Link href="#about" onClick={() => setMobileMenuOpen(false)}>
              <span className="nav-num">04</span>
              <span className="nav-text">About Jayprakash</span>
              <span className="nav-arrow" aria-hidden="true">→</span>
            </Link>
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
              <span className="nav-num">05</span>
              <span className="nav-text">Contact &amp; Enquiry</span>
              <span className="nav-arrow" aria-hidden="true">→</span>
            </Link>
          </nav>

          <div className="mobile-drawer-footer">
            <a
              href="mailto:jayprakashpal@flutterjs.dev?subject=Project%20Enquiry%20via%20Portfolio"
              className="button button-lime mobile-drawer-cta"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start a Conversation <span aria-hidden="true">↗</span>
            </a>
            <div className="mobile-drawer-contacts">
              <a href="tel:+919082691348">📞 +91 90826 91348</a>
              <span>📍 Mumbai, India</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
