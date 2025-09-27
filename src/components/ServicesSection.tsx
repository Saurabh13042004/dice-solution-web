import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/ui/grid-feature-cards";
import { 
  Rocket, 
  Code2, 
  Bot, 
  Smartphone, 
  Settings, 
  Search 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Technical MVP Development",
      icon: Rocket,
      description: "From concept to launch with lean, well-tested foundations using cutting-edge AI. 60-day delivery timeline with AI-powered development workflow and startup-focused approach.",
    },
    {
      title: "Full-Stack Development",
      icon: Code2,
      description: "Comprehensive solutions from front-end design to back-end architecture. Modern tech stack (React, Node.js, PostgreSQL) with scalable, efficient applications and enterprise-grade security.",
    },
    {
      title: "Artificial Intelligence & ML",
      icon: Bot,
      description: "Advanced algorithms and data analytics for intelligent, adaptive systems. Custom AI model training, natural language processing, and workflow automation.",
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      description: "Intuitive and robust apps tailored to your needs across all platforms. Cross-platform development with high performance & scalability and seamless user experiences.",
    },
    {
      title: "Platform Engineering",
      icon: Settings,
      description: "Tooling, CI/CD, and observability for teams at scale. DevOps automation, infrastructure as code, and comprehensive monitoring & analytics.",
    },
    {
      title: "Code Quality Audits",
      icon: Search,
      description: "Actionable reviews that improve maintainability and velocity. Security assessments, performance optimization, and best practices implementation.",
    },
  ];

  return (
    <section id="services" className="section-padding-large pt-32 md:pt-40 lg:pt-48">
      <div className="container-width">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center space-y-12 mb-20 max-w-5xl mx-auto"
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
                Services
              </h2>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-2xl font-light text-primary tracking-wide"
            >
              We grow with your success
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto"
            >
              Some of our key areas of expertise, which we continually refine to align perfectly with your use cases.
            </motion.p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
          whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed sm:grid-cols-2 md:grid-cols-3"
        >
          {services.map((service, i) => (
            <FeatureCard key={i} feature={service} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Learn More About Our Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;