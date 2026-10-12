import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="status-dot"></span> Available for freelance &amp; contract projects
          </p>

          <h1>
            Building digital<br />
            products that <em>work.</em>
          </h1>

          <p className="hero-lead">
            Websites, mobile apps, and practical software for businesses ready to move forward.
            Engineered with modern React/Next.js SSR architecture, robust SEO, and Flutter/Android cross-platform speed.
          </p>

          <div className="hero-actions">
            <a
              className="button button-dark"
              href="mailto:jayprakash.pal@flutterjs.dev?subject=Project%20Enquiry%20via%20Portfolio"
            >
              Discuss a project <span aria-hidden="true">↗</span>
            </a>
            <Link className="text-link" href="#work">
              Explore my work <span aria-hidden="true">↓</span>
            </Link>
            <Link className="button button-outline" href="#estimator">
              ⚡ Scope Planner
            </Link>
          </div>

          <div className="hero-meta-badges">
            <span className="hero-badge-pill">📍 Mumbai, India</span>
            <span className="hero-badge-pill">⚡ Server-Side Rendered</span>
            <span className="hero-badge-pill">📱 Android &amp; Flutter</span>
            <span className="hero-badge-pill">🌐 Global Delivery</span>
          </div>
        </div>

        {/* Hero Visual Art Showcase */}
        <div className="hero-art" aria-label="Visual preview of web and mobile engineering work" role="img">
          <div className="orbit-ring orbit-one" aria-hidden="true"></div>
          <div className="orbit-ring orbit-two" aria-hidden="true"></div>

          <div className="art-label label-top">
            IDEA <span aria-hidden="true">→</span> PRODUCTION
          </div>

          {/* Interactive Floating Project Overview Card */}
          <div className="dashboard-card" aria-hidden="true">
            <div className="dash-top">
              <span className="dash-logo">● ● ●</span>
              <span>SSR Performance Score</span>
              <span>99 / 100 ↗</span>
            </div>
            <div className="dash-main">
              <div>
                <small>ENGINEERED FOR RESULTS</small>
                <strong>
                  Make complex<br />
                  feel effortless.
                </strong>
              </div>
              <div className="dash-chart" aria-label="Performance metrics bar chart">
                <i style={{ height: '35%' }} title="SEO"></i>
                <i style={{ height: '52%' }} title="Accessibility"></i>
                <i style={{ height: '48%' }} title="Best Practices"></i>
                <i style={{ height: '78%' }} title="SSR Hydration"></i>
                <i style={{ height: '65%' }} title="Core Web Vitals"></i>
                <i style={{ height: '94%' }} title="Lighthouse Speed"></i>
              </div>
            </div>
            <div className="dash-bottom">
              <span>01 / Understand</span>
              <span>02 / Build</span>
              <span>03 / Scale</span>
            </div>
          </div>

          {/* Rotated Orbital Phone Preview Card */}
          <div className="phone-card">
            <Image
              src="/assets/orbital.png"
              alt="Orbital Android app companion screen preview"
              width={201}
              height={440}
              priority
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div className="art-label label-bottom">
            <span className="spark">✦</span> WEB · MOBILE · SSR ARCHITECTURE
          </div>
        </div>
      </div>
    </section>
  );
}
