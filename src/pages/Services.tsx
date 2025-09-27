import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Rocket, 
  Code2, 
  Bot, 
  Smartphone, 
  Settings, 
  Search,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  Globe
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Technical MVP Development",
      description: "From concept to launch with lean, well-tested foundations using cutting-edge AI.",
      features: ["60-day delivery timeline", "AI-powered development workflow", "Startup-focused approach"],
      icon: Rocket,
      gradient: "from-blue-500 to-purple-600",
      badge: "Most Popular"
    },
    {
      title: "Full-Stack Development",
      description: "Comprehensive solutions from front-end design to back-end architecture.",
      features: ["Modern tech stack (React, Node.js, PostgreSQL)", "Scalable, efficient applications", "Enterprise-grade security"],
      icon: Code2,
      gradient: "from-green-500 to-teal-600",
      badge: "Enterprise Ready"
    },
    {
      title: "Artificial Intelligence & ML",
      description: "Advanced algorithms and data analytics for intelligent, adaptive systems.",
      features: ["Custom AI model training", "Natural language processing", "Workflow automation"],
      icon: Bot,
      gradient: "from-orange-500 to-red-600",
      badge: "Cutting Edge"
    },
    {
      title: "Mobile Development",
      description: "Intuitive and robust apps tailored to your needs across all platforms.",
      features: ["Cross-platform development", "High performance & scalability", "Seamless user experiences"],
      icon: Smartphone,
      gradient: "from-pink-500 to-rose-600",
      badge: "Cross Platform"
    },
    {
      title: "Platform Engineering",
      description: "Tooling, CI/CD, and observability for teams at scale.",
      features: ["DevOps automation", "Infrastructure as code", "Monitoring & analytics"],
      icon: Settings,
      gradient: "from-cyan-500 to-blue-600",
      badge: "Scale Ready"
    },
    {
      title: "Code Quality Audits",
      description: "Actionable reviews that improve maintainability and velocity.",
      features: ["Security assessments", "Performance optimization", "Best practices implementation"],
      icon: Search,
      gradient: "from-violet-500 to-purple-600",
      badge: "Quality Focused"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="relative section-padding-large overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <div className="container-width relative">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-12 max-w-5xl mx-auto"
          >
            {/* Enhanced Header Section */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block"
              >
                <h1 className="text-5xl md:text-7xl font-extralight tracking-tight bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                  Services
                </h1>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-2xl font-light text-primary tracking-wide"
              >
                We grow with your success
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto"
              >
                Some of our key areas of expertise, which we continually refine to align perfectly with your use cases. 
                From MVP development to enterprise solutions, we deliver cutting-edge technology with startup agility.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section className="relative section-padding-large">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <Card className="relative h-full overflow-hidden bg-card/50 backdrop-blur-sm border border-border hover:bg-card/80 transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <CardHeader className="relative pb-4">
                    {service.badge && (
                      <div className="absolute -top-2 -right-2">
                        <Badge variant="secondary" className="text-xs font-light">
                          {service.badge}
                        </Badge>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-center mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-8 h-8" />
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl font-extralight tracking-tight text-center mb-3">
                      {service.title}
                    </CardTitle>
                    
                    <p className="text-muted-foreground text-center leading-relaxed">
                      {service.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="relative space-y-6">
                    <div className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.1) }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <Button variant="minimal" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Empowered Development Core */}
      <section className="relative section-padding overflow-hidden bg-gradient-to-br from-secondary/20 via-background to-primary/5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent" />
        <div className="container-width relative">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-12 max-w-6xl mx-auto"
          >
            {/* Enhanced Header */}
            <div className="space-y-6">
              <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-extralight tracking-tight bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent"
              >
                We work on cutting edge – AI empowered development core
              </motion.h2>
            </div>
            
            {/* Enhanced Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4 group">
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg font-light group-hover:text-primary transition-colors duration-300">
                    Supported businesses with intelligence
                  </span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-full">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg font-light group-hover:text-primary transition-colors duration-300">
                    Private funds guidance with govt. help
                  </span>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4 group">
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg font-light group-hover:text-primary transition-colors duration-300">
                    Increase efficiency and achieve better sales
                  </span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg font-light group-hover:text-primary transition-colors duration-300">
                    Passionate – Dedicated – Professional
                  </span>
                </div>
              </motion.div>
            </div>
            
            {/* Enhanced CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="inline-block bg-card/50 backdrop-blur-sm border border-border hover:bg-card/80 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="space-y-4">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                        <ArrowRight className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-extralight tracking-tight">Ready to Start Your Project?</h3>
                    <p className="text-muted-foreground">
                      Let's discuss your unique requirements and build something amazing together.
                    </p>
                    <Button variant="hero" size="lg" className="mt-4">
                      Contact for Custom Solutions
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;