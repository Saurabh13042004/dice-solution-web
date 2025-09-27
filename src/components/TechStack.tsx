import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, Code2, Database, Brain, Cloud, GitBranch } from "lucide-react";

const TechStack = () => {
  const techCategories = [
    {
      category: "Frontend & UI",
      icon: <Code2 className="w-6 h-6" />,
      description: "High-performance, SEO-friendly apps",
      technologies: [
        { name: "React & Next.js", highlight: true },
        { name: "Tailwind CSS & Shadcn UI", highlight: false },
        { name: "TypeScript", highlight: false }
      ]
    },
    {
      category: "Backend & APIs", 
      icon: <Database className="w-6 h-6" />,
      description: "Scalable, secure data handling",
      technologies: [
        { name: "PostgreSQL & Supabase", highlight: true },
        { name: "Node.js, Python, Django", highlight: false },
        { name: "REST & GraphQL APIs", highlight: false }
      ]
    },
    {
      category: "AI & Intelligence",
      icon: <Brain className="w-6 h-6" />,
      description: "Intelligent AI features",
      technologies: [
        { name: "OpenAI, Langchain, Gemini", highlight: true },
        { name: "Custom AI Models", highlight: false },
        { name: "Machine Learning", highlight: false }
      ]
    },
    {
      category: "DevOps & Cloud",
      icon: <Cloud className="w-6 h-6" />,
      description: "Production-grade deployment",
      technologies: [
        { name: "Docker, AWS, Vercel", highlight: true },
        { name: "GitHub Actions, Railway", highlight: false },
        { name: "CI/CD & Staging Pipelines", highlight: false }
      ]
    }
  ];

  return (
    <section className="relative section-padding-large overflow-hidden">
      {/* Enhanced background with multiple gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-primary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
      
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
                Our Modern, Flexible Tech Stack
              </h2>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-2xl font-light text-primary tracking-wide"
            >
              We use industry-proven technologies and our internal library of templates to build MVPs, dashboards, and SaaS platforms — fast, scalable, and beautifully.
            </motion.p>
          </div>
        </motion.div>
        
        {/* Enhanced Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {techCategories.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-all duration-300 h-full">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="relative p-8 space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary"
                      animate={{ 
                        rotateY: [0, 360],
                      }}
                      transition={{ 
                        duration: 2,
                        delay: index * 0.3,
                        repeat: Infinity,
                        repeatDelay: 5
                      }}
                    >
                      {tech.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-extralight tracking-tight">{tech.category}</h3>
                      <p className="text-sm text-muted-foreground">{tech.description}</p>
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="space-y-3">
                    {tech.technologies.map((technology, techIndex) => (
                      <motion.div 
                        key={techIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (techIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                        <span className={`${technology.highlight ? 'font-light text-foreground' : 'font-light text-muted-foreground'} text-sm`}>
                          {technology.name}
                        </span>
                        {technology.highlight && (
                          <Badge variant="secondary" className="text-xs">
                            Core
                          </Badge>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Adaptable Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center space-y-8 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <RefreshCw className="w-5 h-5 text-accent" />
            <span className="text-lg font-light text-accent">Adaptable & Project-Specific</span>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every project is different. We choose the best tools based on your goals — whether it's Jamstack, monolith, microservices, or serverless.
          </p>
          
          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50"
          >
            <div className="flex items-center gap-2 mb-4">
              <GitBranch className="w-5 h-5 text-primary" />
              <span className="text-sm font-light text-primary">Developer Perspective</span>
            </div>
            <blockquote className="text-lg font-light text-foreground leading-relaxed italic">
              "Our developers are comfortable across multiple stacks — from Python to TypeScript, from Firebase to Supabase. We build what's best for your product, not just what's trending."
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;