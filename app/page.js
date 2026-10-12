import Hero from '../components/Hero';
import IntroStrip from '../components/IntroStrip';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import ProjectEstimator from '../components/ProjectEstimator';
import ApproachSection from '../components/ApproachSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <IntroStrip />
      <ServicesSection />
      <ProjectsSection />
      <ProjectEstimator />
      <ApproachSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
