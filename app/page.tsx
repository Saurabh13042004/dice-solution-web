import { Navigation } from '@/components/ui/navigation';
import { HeroSection } from '@/components/ui/hero-section';
import { ServicesSection } from '@/components/ui/services-section';
import { ProcessSection } from '@/components/ui/process-section';
import { ProjectsSection } from '@/components/ui/projects-section';
import { TechStackSection } from '@/components/ui/tech-stack-section';
import { TestimonialsSection } from '@/components/ui/testimonials-section';
import { NewsSection } from '@/components/ui/news-section';
import { CTASection } from '@/components/ui/cta-section';
import { Footer } from '@/components/ui/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <TechStackSection />
      <TestimonialsSection />
      <NewsSection />
      <CTASection />
      <Footer />
    </main>
  );
}