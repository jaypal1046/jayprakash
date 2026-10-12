export default function ServicesSection() {
  const services = [
    {
      icon: '↗',
      number: '01',
      title: 'Websites & SSR Web Apps',
      desc: 'Blazing-fast, SEO-optimized web applications built with React and Next.js Server-Side Rendering. Structured for instant indexing, smooth client transitions, and high conversion.',
      tags: ['Next.js SSR', 'React 19', 'SEO & Schema Markup', 'Customer Portals', 'Performance Audits']
    },
    {
      icon: '▣',
      number: '02',
      title: 'Mobile Applications',
      desc: 'Reliable cross-platform and native experiences built for Android and iOS. Focused on intuitive touch interactions, responsive layouts, device hardware bridge integration, and offline-first data.',
      tags: ['Flutter Cross-Platform', 'Native Android / Kotlin', 'Offline-First Storage', 'API Integrations', 'Device Automation']
    },
    {
      icon: '✳',
      number: '03',
      title: 'Product Architecture & Scale',
      desc: 'End-to-end guidance from wireframe scoping to reliable production release. Codebase deslopping, UI polish, API contract design, and ongoing performance refinement.',
      tags: ['MVP Scoping & Prototyping', 'Fintech & Business Logic', 'Clean Architecture', 'Refactoring & Deslop']
    }
  ];

  return (
    <section className="section services-section" id="services" aria-labelledby="services-heading">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="section-kicker">01 / WHAT I DO</p>
            <h2 id="services-heading">
              Good ideas deserve<br />
              <em>good execution.</em>
            </h2>
          </div>
          <p>
            Practical engineering for the moments that matter: your initial launch, 
            a faster server-rendered web experience, or an intuitive mobile app that users rely on daily.
          </p>
        </div>

        <div className="services-grid">
          {services.map((item) => (
            <article className="service-card" key={item.number}>
              <div className="service-icon" aria-hidden="true">{item.icon}</div>
              <span className="service-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <ul aria-label={`${item.title} capabilities`}>
                {item.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
