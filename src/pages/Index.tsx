import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProductShowcase from "@/components/ProductShowcase";
import TechStack from "@/components/TechStack";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { StatCard } from "@/components/ui/animated-counter";
import { Bot, Rocket, Star, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustSection />
      
      {/* Services Overview - Enhanced */}
      <section className="relative section-padding-large overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-secondary/10" />
        
        <div className="container-width relative">
          <ServicesSection />
        </div>
      </section>

      {/* Why Dice Teaser - Enhanced */}
      <section className="relative section-padding-large overflow-hidden">
        {/* Animated background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-primary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(120,119,198,0.1),transparent_50%)]" />
        
        <div className="container-width relative">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center space-y-12 max-w-6xl mx-auto"
          >
            {/* Enhanced Header Section */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block"
              >
                <h2 className="text-5xl md:text-6xl font-extralight tracking-tight bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                  Startup Focused – Enterprise Driven
                </h2>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-2xl font-light text-primary tracking-wide"
              >
                Innovating Scalable Tech – We Bring Ideas to Life!
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto"
              >
                For over 10 years, we've been working with startups and we love it.
                We have a track record of building high-quality software with proven results.
              </motion.p>
            </div>
            
            {/* Enhanced Stats Grid with Animations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              <StatCard
                title="AI-empowered"
                description="development core"
                icon={<Bot className="w-8 h-8" />}
                delay={0.2}
              />
              <StatCard
                value={80}
                suffix="+"
                description="products built"
                icon={<Rocket className="w-8 h-8" />}
                delay={0.4}
              />
              <StatCard
                value={10}
                suffix=" years"
                description="MVP mastery"
                icon={<Star className="w-8 h-8" />}
                delay={0.6}
              />
              <StatCard
                title="World-class"
                description="startup engineers"
                icon={<Users className="w-8 h-8" />}
                delay={0.8}
              />
            </div>
            
            {/* Enhanced CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <Link to="/why-dice">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Button 
                    variant="hero" 
                    size="lg"
                    className="relative overflow-hidden group text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <span className="relative z-10">Learn More About Us</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <TechStack />
      <ProcessSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
