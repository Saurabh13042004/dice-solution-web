import { Navigation } from '@/components/ui/navigation';
import { HeroSection } from '@/components/ui/hero-section';
import { ServicesSection } from '@/components/ui/services-section';
import { ProductsSection } from '@/components/ui/products-section';
import { TechStackSection } from '@/components/ui/tech-stack-section';
import { ProcessSection } from '@/components/ui/process-section';
import { PricingSection } from '@/components/ui/pricing-section';
import { Footer } from '@/components/ui/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <TechStackSection />
      <ProcessSection />
      <PricingSection />
      <Footer />
    </main>
  );
}