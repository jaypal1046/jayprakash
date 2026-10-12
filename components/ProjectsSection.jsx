'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Fintech & Web' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'opensource', label: 'Open Source' }
  ];

  return (
    <section className="section work-section" id="work" aria-labelledby="work-heading">
      <div className="container">
        <div className="work-head">
          <div>
            <p className="section-kicker">02 / SELECTED WORK</p>
            <h2 id="work-heading">
              Proof is in<br />
              <em>the projects.</em>
            </h2>
          </div>
          <p>
            From a production consumer finance platform serving thousands of visitors to on-device Android tools and cross-platform apps.
          </p>
        </div>

        {/* Interactive Filter Bar */}
        <div className="work-filter-bar" role="tablist" aria-label="Filter projects by category">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeFilter === tab.id}
              className={`filter-btn ${activeFilter === tab.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Featured Project 1: PaisaChoice */}
        {(activeFilter === 'all' || activeFilter === 'web') && (
          <article className="project-card project-feature" aria-label="PaisaChoice project showcase">
            <div className="project-visual paisa-visual">
              <span className="device-badge web-badge">DESKTOP EXPERIENCE</span>
              <Image
                src="/assets/paisachoice.png"
                alt="PaisaChoice consumer finance desktop website screenshot"
                width={600}
                height={350}
                className="paisa-desktop-img"
              />
              <span className="device-badge mobile-badge">MOBILE VIEW</span>
              <Image
                src="/assets/paisachoice-mobile.png"
                alt="PaisaChoice consumer finance mobile responsive website screenshot"
                width={135}
                height={300}
                className="paisa-mobile-img"
              />
            </div>

            <div className="project-content">
              <span className="project-index">01 / LIVE FINANCE PLATFORM</span>
              <h3>PaisaChoice</h3>
              <p>
                A high-speed consumer finance web application developed for desktop and mobile.
                Allows visitors to explore multi-bank loan products, compare interest rates, review financial eligibility, and submit enquiries securely.
              </p>
              <div className="tags">
                <span>Production Website</span>
                <span>Fintech</span>
                <span>Responsive SSR</span>
                <span>Financial Comparison</span>
                <span>Core Web Vitals</span>
              </div>
              <div className="project-actions">
                <a
                  className="project-link"
                  href="https://paisachoice.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit PaisaChoice live website (opens in a new tab)"
                >
                  Visit Live Platform <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href="#estimator">
                  Plan a similar build ↓
                </a>
              </div>
            </div>
          </article>
        )}

        {/* Featured Project 2: Orbital */}
        {(activeFilter === 'all' || activeFilter === 'mobile' || activeFilter === 'opensource') && (
          <article className="project-card project-feature" aria-label="Orbital Android project showcase">
            <div className="project-visual orbital-visual">
              <div className="orbital-glow" aria-hidden="true"></div>
              <Image
                src="/assets/orbital.png"
                alt="Orbital Android Companion live app UI screenshot"
                width={210}
                height={410}
                className="orbital-img"
              />
            </div>

            <div className="project-content">
              <span className="project-index">02 / ANDROID PRODUCT &amp; AUTOMATION</span>
              <h3>Orbital</h3>
              <p>
                A privacy-first Android AI companion and automated testing controller.
                Engineered with on-device UI inspection, coordinate gestures, wireless MCP bridge integration, and offline hardware controls in Kotlin.
              </p>
              <div className="tags">
                <span>Native Android</span>
                <span>Kotlin</span>
                <span>Device Bridge</span>
                <span>AI Automation</span>
                <span>Open Source</span>
              </div>
              <div className="project-actions">
                <a
                  className="project-link"
                  href="https://github.com/jaypal1046/Orbital"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Orbital source code on GitHub (opens in a new tab)"
                >
                  View Code on GitHub <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>
        )}

        {/* Secondary Projects Grid */}
        {(activeFilter === 'all' || activeFilter === 'mobile' || activeFilter === 'opensource') && (
          <div className="projects-grid-two">
            {/* Project 3: Task Management App */}
            <article className="project-small">
              <div className="project-small-visual" aria-hidden="true">
                <div className="task-window-mock">
                  <div className="task-win-header">
                    <span>Task Manager</span>
                    <span style={{ color: '#8da435' }}>● ● ●</span>
                  </div>
                  <div className="task-bars">
                    <div className="task-bar-item">
                      <b></b>
                      <span></span>
                    </div>
                    <div className="task-bar-item">
                      <b></b>
                      <span style={{ width: '60%' }}></span>
                    </div>
                    <div className="task-bar-item">
                      <b></b>
                      <span style={{ width: '45%' }}></span>
                    </div>
                  </div>
                  <div className="task-progress-line"></div>
                </div>
              </div>

              <div className="project-small-content">
                <span className="project-index">03 / CROSS-PLATFORM MOBILE</span>
                <h3>Task Management App</h3>
                <p>
                  A Flutter mobile productivity app built with an offline-first architecture, local SQLite/Hive caching, categorised workflows, and smooth gesture transitions.
                </p>
                <div className="tags" style={{ marginBottom: '16px' }}>
                  <span>Flutter</span>
                  <span>Dart</span>
                  <span>Offline-First</span>
                  <span>Local DB</span>
                </div>
                <a
                  className="project-link"
                  href="https://github.com/jaypal1046/Task-Management-App"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Task Management App on GitHub"
                >
                  View Repository <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>

            {/* Project 4: Full-Stack SSR Web & APIs */}
            <article className="project-small">
              <div className="project-small-visual" style={{ background: '#d5e3da' }} aria-hidden="true">
                <div className="task-window-mock" style={{ transform: 'rotate(4deg)' }}>
                  <div className="task-win-header">
                    <span>SSR &amp; API Layer</span>
                    <span style={{ color: '#173b31' }}>Next.js 16</span>
                  </div>
                  <div className="task-bars">
                    <div className="task-bar-item" style={{ background: '#e5ece7' }}>
                      <span style={{ height: '8px', background: '#8da435', width: '92%' }}></span>
                    </div>
                    <div className="task-bar-item" style={{ background: '#e5ece7' }}>
                      <span style={{ height: '8px', background: '#173b31', width: '85%' }}></span>
                    </div>
                  </div>
                  <div style={{ fontSize: '10px', fontWeight: 800, color: '#173b31' }}>
                    100% Server Hydrated · 0 Layout Shift
                  </div>
                </div>
              </div>

              <div className="project-small-content">
                <span className="project-index">04 / FULL-STACK ARCHITECTURE</span>
                <h3>High-SEO Next.js Starter</h3>
                <p>
                  Engineered React 19 architecture featuring server components, structured schema markup, dynamic XML sitemaps, robots protocol, and zero-JS critical content delivery.
                </p>
                <div className="tags" style={{ marginBottom: '16px' }}>
                  <span>Next.js App Router</span>
                  <span>React 19</span>
                  <span>JSON-LD Schema</span>
                  <span>Vanilla CSS</span>
                </div>
                <a className="project-link" href="#estimator">
                  Plan your build with this stack <span aria-hidden="true">↓</span>
                </a>
              </div>
            </article>
          </div>
        )}
      </div>
    </section>
  );
}
