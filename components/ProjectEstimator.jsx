'use client';

import { useState } from 'react';

export default function ProjectEstimator() {
  const [platform, setPlatform] = useState('ssr-web');
  const [timeline, setTimeline] = useState('standard');
  const [selectedFeatures, setSelectedFeatures] = useState([
    'seo-audit',
    'responsive'
  ]);

  const platformOptions = [
    { id: 'ssr-web', label: 'Next.js SSR Website' },
    { id: 'mobile', label: 'Mobile App (Flutter/Android)' },
    { id: 'full-stack', label: 'Both Web & Mobile' },
    { id: 'portal', label: 'Fintech / Customer Portal' }
  ];

  const featureOptions = [
    { id: 'seo-audit', label: 'Advanced SEO & Schema Markup' },
    { id: 'responsive', label: 'Responsive Multi-Device UI' },
    { id: 'auth-db', label: 'Authentication & Database' },
    { id: 'calc-tools', label: 'Custom Dashboards & Analytics' },
    { id: 'offline-sync', label: 'Offline-First Caching' },
    { id: 'payment-api', label: 'Payment & Third-party APIs' }
  ];

  const timelineOptions = [
    { id: 'sprint', label: 'Rapid Sprint (2-3 Weeks)' },
    { id: 'standard', label: 'Standard Release (4-6 Weeks)' },
    { id: 'scale', label: 'Comprehensive / Ongoing Retainer' }
  ];

  const toggleFeature = (id) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  // Generate subject & pre-filled body for client inquiry email
  const platformLabel = platformOptions.find((p) => p.id === platform)?.label || 'Web/Mobile';
  const timelineLabel = timelineOptions.find((t) => t.id === timeline)?.label || 'Standard';
  const featuresList = selectedFeatures
    .map((id) => featureOptions.find((f) => f.id === id)?.label)
    .filter(Boolean)
    .join(', ');

  const mailSubject = encodeURIComponent(`Project Scoping Enquiry: ${platformLabel}`);
  const mailBody = encodeURIComponent(
    `Hi Jayprakash,\n\nI used the Scope Planner on your website and would like to discuss a project:\n\n` +
    `• Project Type: ${platformLabel}\n` +
    `• Target Timeline: ${timelineLabel}\n` +
    `• Key Features Needed: ${featuresList || 'Core release'}\n\n` +
    `Let me know your availability for an initial discussion.`
  );

  return (
    <section className="section estimator-section" id="estimator" aria-labelledby="estimator-heading">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="section-kicker">INTERACTIVE SCOPE PLANNER</p>
            <h2 id="estimator-heading">
              Plan your build.<br />
              <em>Tailored roadmap.</em>
            </h2>
          </div>
          <p>
            Select your target platform and requirements to map out the development scope. 
            Send a pre-filled enquiry with your exact technical needs in one click.
          </p>
        </div>

        <div className="estimator-box">
          <div className="estimator-grid">
            {/* Options Selection */}
            <div>
              {/* Step 1: Platform */}
              <div className="estimator-options-group">
                <h4>01 / Choose Platform</h4>
                <div className="estimator-pill-options">
                  {platformOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      className={`pill-option-btn ${platform === opt.id ? 'selected' : ''}`}
                      onClick={() => setPlatform(opt.id)}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Features */}
              <div className="estimator-options-group">
                <h4>02 / Select Key Capabilities ({selectedFeatures.length} selected)</h4>
                <div className="estimator-pill-options">
                  {featureOptions.map((feat) => {
                    const isSelected = selectedFeatures.includes(feat.id);
                    return (
                      <button
                        key={feat.id}
                        type="button"
                        className={`pill-option-btn ${isSelected ? 'selected' : ''}`}
                        onClick={() => toggleFeature(feat.id)}
                        aria-pressed={isSelected}
                      >
                        {isSelected ? '✓ ' : '+ '}{feat.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Timeline */}
              <div className="estimator-options-group">
                <h4>03 / Preferred Speed &amp; Milestones</h4>
                <div className="estimator-pill-options">
                  {timelineOptions.map((time) => (
                    <button
                      key={time.id}
                      type="button"
                      className={`pill-option-btn ${timeline === time.id ? 'selected' : ''}`}
                      onClick={() => setTimeline(time.id)}
                    >
                      {time.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Scope Summary Card */}
            <div className="estimator-summary-card">
              <div>
                <span className="eyebrow" style={{ marginBottom: '16px' }}>
                  <span className="status-dot"></span> Roadmap Summary
                </span>

                <div className="est-stat-block">
                  <small>Target Platform</small>
                  <strong>{platformLabel}</strong>
                </div>

                <div className="est-stat-block">
                  <small>Estimated Pace</small>
                  <strong style={{ color: '#7b9c2a' }}>{timelineLabel}</strong>
                </div>

                <div className="est-stat-block">
                  <small>Selected Capabilities</small>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '6px', lineHeight: '1.6' }}>
                    {featuresList || 'Standard foundational architecture.'}
                  </p>
                </div>
              </div>

              <div style={{ marginTop: '24px' }}>
                <a
                  href={`mailto:jayprakashpal@flutterjs.dev?subject=${mailSubject}&body=${mailBody}`}
                  className="button button-lime"
                  style={{ width: '100%' }}
                >
                  Send Enquiry With This Scope <span aria-hidden="true">↗</span>
                </a>
                <p style={{ fontSize: '11px', color: 'var(--muted)', textAlign: 'center', marginTop: '10px' }}>
                  Opens your email client with all selected parameters pre-filled.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
