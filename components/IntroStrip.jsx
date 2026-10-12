export default function IntroStrip() {
  const items = [
    { text: 'From Concept to Launch', highlight: true },
    { text: 'React & Next.js SSR', highlight: false },
    { text: 'Fintech & Customer Portals', highlight: true },
    { text: 'Mobile Apps (Flutter & Android)', highlight: false },
    { text: 'High-Performance SEO', highlight: true },
    { text: 'Zero Layout Shift', highlight: false },
  ];

  return (
    <section className="intro-strip" aria-label="Core Capabilities">
      <div className="strip-track">
        <div className="strip-group">
          {items.map((item, idx) => (
            <span key={idx} className={item.highlight ? 'highlight' : ''}>
              {item.text}
            </span>
          ))}
        </div>
        <div className="strip-group" aria-hidden="true">
          {items.map((item, idx) => (
            <span key={`dup-${idx}`} className={item.highlight ? 'highlight' : ''}>
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

