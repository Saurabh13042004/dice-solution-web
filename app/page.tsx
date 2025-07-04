import { Navigation } from '@/components/ui/navigation';
import { HeroSection } from '@/components/ui/hero-section';
import { ServicesSection } from '@/components/ui/services-section';
import { ProjectsSection } from '@/components/ui/projects-section';
import { TechStackSection } from '@/components/ui/tech-stack-section';
import { TestimonialsSection } from '@/components/ui/testimonials-section';
import { SkillsSection } from '@/components/ui/skills-section';
import { CTASection } from '@/components/ui/cta-section';
import { Footer } from '@/components/ui/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TechStackSection />
      <TestimonialsSection />
      <SkillsSection />
      <CTASection />
      <Footer />
    </main>
  );
}