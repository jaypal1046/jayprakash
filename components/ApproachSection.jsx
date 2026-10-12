export default function ApproachSection() {
  const steps = [
    {
      num: '01',
      title: 'Understand & Scope',
      desc: 'We map your target users, specific friction points, and constraints. Rather than bloated requirements, we identify the highest-leverage release that delivers immediate value.'
    },
    {
      num: '02',
      title: 'Build & Iterate with SSR Speed',
      desc: 'I turn the scope into high-performance code with Next.js Server-Side Rendering, clean state architecture, and automated device tests. You review regular staging builds with full transparency.'
    },
    {
      num: '03',
      title: 'Launch, Index & Optimize',
      desc: 'We publish with complete Google structured data, automated sitemaps, fast CDN caching, and Core Web Vitals checks, then refine based on real customer interaction metrics.'
    }
  ];

  return (
    <section className="section approach-section" id="approach" aria-labelledby="approach-heading">
      <div className="container approach-grid">
        <div>
          <p className="section-kicker">03 / HOW WE WORK</p>
          <h2 id="approach-heading">
            Simple process.<br />
            <em>Clear progress.</em>
          </h2>
          <p className="approach-lead">
            Good projects start with the actual problem. We agree on what matters, 
            build the smallest useful release, and improve it together without guesswork.
          </p>
        </div>

        <ol className="steps-list" aria-label="Development process stages">
          {steps.map((step) => (
            <li className="step-item" key={step.num}>
              <span className="step-number" aria-hidden="true">{step.num}</span>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
