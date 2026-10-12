export default function AboutSection() {
  const techStack = [
    'Next.js 16 (App Router)',
    'React 19',
    'Server-Side Rendering (SSR)',
    'SEO & JSON-LD',
    'Flutter & Dart',
    'Android (Kotlin)',
    'Node.js & REST APIs',
    'PostgreSQL / SQLite',
    'Tailored Vanilla CSS'
  ];

  return (
    <section className="section about-section" id="about" aria-labelledby="about-heading">
      <div className="container about-grid">
        {/* Monogram Art Block */}
        <div className="about-monogram" aria-hidden="true">
          <span>JP<span className="dot">.</span></span>
          <p>
            CURIOUS BY DESIGN<br />
            PRECISE BY PRACTICE
          </p>
        </div>

        {/* Biography & Capabilities */}
        <div className="about-copy">
          <p className="section-kicker">04 / THE PERSON BEHIND THE CODE</p>
          <h2 id="about-heading">Hi, I&apos;m Jayprakash.</h2>

          <p>
            I&apos;m an independent digital product developer based in <strong>Mumbai, India</strong>, collaborating with teams globally. 
            My work spans server-rendered React applications, consumer financial tools, cross-platform Flutter experiences, and native Android engineering.
          </p>

          <p>
            I bring the same craftsmanship to client builds as I do to my open-source projects: 
            clear communication, lean architecture without over-engineering, lightning-fast SEO indexing, 
            and digital products that genuinely resolve user friction.
          </p>

          <div className="tech-chips" aria-label="Core Technical Proficiencies">
            {techStack.map((tech) => (
              <span className="tech-chip" key={tech}>{tech}</span>
            ))}
          </div>

          <div className="about-links">
            <a href="https://github.com/jaypal1046/" target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/jayprakashpal1005" target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
            <a href="mailto:jayprakash.pal@flutterjs.dev?subject=Project%20Enquiry">
              Email Jayprakash ↗
            </a>
            <a href="tel:+919082691348">
              Call +91 90826 91348 ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
