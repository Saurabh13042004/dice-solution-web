import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Search, 
  Palette, 
  Code2, 
  Rocket,
  RotateCcw,
  Bot,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
  Calendar,
  Download,
  Eye,
  Users,
  Target,
  Clock
} from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discover",
      subtitle: "Understanding Your Vision",
      description: "We dive deep into your business goals, target audience, and technical requirements to create a comprehensive project roadmap.",
      features: [
        "Stakeholder interviews",
        "Market research",
        "Technical feasibility assessment",
        "Project scope definition"
      ],
      duration: "Week 1",
      icon: Search,
      gradient: "from-blue-500 to-indigo-600",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=face",
      badge: "Discovery Phase"
    },
    {
      number: "02",
      title: "Design",
      subtitle: "Crafting the Blueprint",
      description: "Our design team creates user-centric interfaces and system architecture that balances functionality with beautiful aesthetics.",
      features: [
        "User experience design",
        "System architecture planning",
        "Database design",
        "API specification"
      ],
      duration: "Week 2",
      icon: Palette,
      gradient: "from-purple-500 to-pink-600",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&crop=face",
      badge: "Design Phase"
    },
    {
      number: "03",
      title: "Build",
      subtitle: "Development & Iteration",
      description: "Using agile methodologies, we build your product with weekly demos and continuous feedback integration.",
      features: [
        "Agile development sprints",
        "Weekly progress demos",
        "Continuous integration",
        "Quality assurance testing"
      ],
      duration: "Weeks 3-6",
      icon: Code2,
      gradient: "from-green-500 to-emerald-600",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&crop=face",
      badge: "Development Phase"
    },
    {
      number: "04",
      title: "Launch",
      subtitle: "Deployment & Support",
      description: "We handle deployment, monitoring, and provide ongoing support to ensure your product scales successfully.",
      features: [
        "Production deployment",
        "Performance monitoring",
        "User training",
        "Ongoing maintenance"
      ],
      duration: "Week 7+",
      icon: Rocket,
      gradient: "from-orange-500 to-red-600",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop&crop=face",
      badge: "Launch Phase"
    }
  ];

  const methodologies = [
    {
      title: "Agile Development",
      description: "Rapid iteration with continuous feedback",
      icon: RotateCcw,
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "AI-Powered Coding",
      description: "Leveraging AI to accelerate development",
      icon: Bot,
      gradient: "from-purple-500 to-violet-600"
    },
    {
      title: "Quality First",
      description: "Automated testing and code reviews",
      icon: CheckCircle2,
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Transparent Communication",
      description: "Daily updates and weekly demos",
      icon: MessageSquare,
      gradient: "from-orange-500 to-amber-600"
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
                  Our Process
                </h1>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-2xl font-light text-primary tracking-wide"
              >
                A proven, minimal process
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto"
              >
                Simple, transparent, and focused on delivering results. We've refined our approach 
                over 80+ successful projects to ensure maximum efficiency and quality.
              </motion.p>
            </div>
            
            {/* Process Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
            >
              {[
                { icon: Target, label: "80+ Projects", value: "Success Rate" },
                { icon: Clock, label: "4 Weeks", value: "Average MVP" },
                { icon: Users, label: "24/7", value: "Support" },
                { icon: CheckCircle2, label: "100%", value: "Quality" }
              ].map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl mx-auto">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-lg font-light text-foreground">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.value}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Process Steps with Images */}
      <section className="relative section-padding">
        <div className="container-width">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Content Side */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-4">
                    <Badge variant="secondary" className="inline-flex items-center gap-2 text-sm font-light">
                      <Clock className="w-3 h-3" />
                      {step.duration}
                    </Badge>
                    
                    <div className="flex items-center gap-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                        <step.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-extralight tracking-tight">{step.title}</h3>
                        <p className="text-lg text-primary font-light">{step.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {step.description}
                    </p>
                    
                    <div className="space-y-4">
                      {step.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.1) }}
                          viewport={{ once: true }}
                          className="flex items-center gap-4"
                        >
                          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="font-light">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Visual Side */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border hover:bg-card/80 transition-all duration-300 group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="relative">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={step.image} 
                          alt={`${step.title} process`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      </div>
                      
                      <CardContent className="relative p-8">
                        <div className="flex items-center justify-between mb-4">
                          <Badge className={`bg-gradient-to-r ${step.gradient} text-white border-0`}>
                            {step.badge}
                          </Badge>
                          <div className="text-4xl font-extralight text-muted-foreground/30">
                            {step.number}
                          </div>
                        </div>
                        
                        <div className="text-center space-y-2">
                          <h4 className="text-xl font-extralight tracking-tight">{step.title} Phase</h4>
                          <p className="text-muted-foreground">Duration: {step.duration}</p>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Methodologies */}
      <section className="relative section-padding overflow-hidden bg-gradient-to-br from-secondary/20 via-background to-primary/5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent" />
        <div className="container-width relative">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-12 mb-20"
          >
            <div className="space-y-6">
              <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-extralight tracking-tight bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent"
              >
                Our Methodologies
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl text-muted-foreground max-w-2xl mx-auto"
              >
                Proven practices that ensure success
              </motion.p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologies.map((methodology, index) => (
              <motion.div
                key={methodology.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <Card className="relative h-full overflow-hidden bg-card/50 backdrop-blur-sm border border-border hover:bg-card/80 transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${methodology.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <CardHeader className="relative text-center pb-4">
                    <div className="flex items-center justify-center mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${methodology.gradient} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                        <methodology.icon className="w-8 h-8" />
                      </div>
                    </div>
                    
                    <CardTitle className="text-lg font-extralight tracking-tight">
                      {methodology.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative text-center">
                    <p className="text-muted-foreground leading-relaxed">
                      {methodology.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative section-padding">
        <div className="container-width">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-16 max-w-5xl mx-auto"
          >
            {/* Enhanced Header */}
            <div className="space-y-8">
              <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-extralight tracking-tight bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent"
              >
                Ready to Start Your Journey?
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
              >
                Let's discuss your project and see how our proven process can bring your vision to life.
              </motion.p>
            </div>
            
            {/* Enhanced CTA Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border hover:bg-card/80 transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  
                  <CardContent className="relative p-8 text-center space-y-6">
                    <div className="flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white">
                        <Calendar className="w-8 h-8" />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-2xl font-extralight tracking-tight">Schedule Discovery Call</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Book a free consultation to discuss your project requirements
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      {[
                        { icon: Eye, text: "Free consultation" },
                        { icon: Users, text: "Meet the team" },
                        { icon: Target, text: "Project roadmap" }
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <benefit.icon className="w-4 h-4 text-accent" />
                          <span>{benefit.text}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="hero" size="lg" className="w-full">
                      Schedule Call
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border hover:bg-card/80 transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  
                  <CardContent className="relative p-8 text-center space-y-6">
                    <div className="flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent/20 rounded-2xl flex items-center justify-center text-primary">
                        <Download className="w-8 h-8" />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-2xl font-extralight tracking-tight">Download Process Guide</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Get our detailed process guide with project templates
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      {[
                        { icon: CheckCircle2, text: "Step-by-step guide" },
                        { icon: Clock, text: "Timeline templates" },
                        { icon: Target, text: "Best practices" }
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <benefit.icon className="w-4 h-4 text-accent" />
                          <span>{benefit.text}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="minimal" size="lg" className="w-full" asChild>
                      <a href="https://www.dicesolutions.studio/DICE.pdf" target="_blank" rel="noopener noreferrer">
                        Download Guide
                        <Download className="w-5 h-5 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Process;