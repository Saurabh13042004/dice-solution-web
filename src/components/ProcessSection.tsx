import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Code, Rocket, ArrowRight } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discover & Define",
      description: "We analyze your vision, market, and technical requirements to create a strategic roadmap.",
      icon: <Search className="w-8 h-8" />,
      features: ["Vision analysis", "Market research", "Technical roadmap", "Strategy planning"],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      number: "02", 
      title: "Build & Iterate",
      description: "Rapid development with weekly demos and continuous feedback integration.",
      icon: <Code className="w-8 h-8" />,
      features: ["Weekly demos", "Continuous feedback", "Agile development", "Quality assurance"],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      number: "03",
      title: "Launch & Scale",
      description: "Deployment, monitoring, and ongoing optimization for growth and success.",
      icon: <Rocket className="w-8 h-8" />,
      features: ["Production deployment", "Performance monitoring", "Growth optimization", "Ongoing support"],
      color: "from-green-500/20 to-emerald-500/20"
    }
  ];

  return (
    <section id="process" className="relative section-padding-large overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      <div className="container-width relative">
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
                Our Process
              </h2>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-2xl font-light text-primary tracking-wide"
            >
              Simple, transparent, and focused on delivering results.
            </motion.p>
          </div>
        </motion.div>
        
        {/* Enhanced Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="h-full"
              >
                <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-all duration-500 h-full">
                  {/* Dynamic gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <CardContent className="relative p-8 space-y-6">
                    {/* Step Number and Icon */}
                    <div className="flex items-center justify-between">
                      <motion.div 
                        className="relative"
                        animate={{ 
                          rotateY: [0, 360],
                        }}
                        transition={{ 
                          duration: 2,
                          delay: index * 0.5,
                          repeat: Infinity,
                          repeatDelay: 8
                        }}
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-2xl font-extralight text-primary-foreground shadow-lg">
                          {step.number}
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="text-primary/70 group-hover:text-primary transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {step.icon}
                      </motion.div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-extralight tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Feature List */}
                    <div className="space-y-3 pt-4 border-t border-border/50">
                      {step.features.map((feature, featureIndex) => (
                        <motion.div 
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (index * 0.2) + (featureIndex * 0.1) }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground font-light">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Connection Arrow (Desktop only) */}
              {index < steps.length - 1 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: (index + 1) * 0.3 }}
                  viewport={{ once: true }}
                  className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10"
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Call-to-Action Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to bring your idea to life with our proven process?
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-light text-lg hover:shadow-2xl transition-all duration-300">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;