import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Calendar, 
  Mail, 
  MessageCircle,
  Phone,
  Clock,
  CheckCircle2,
  ArrowRight,
  Send,
  Zap,
  Users,
  Target,
  Gift,
  MessageSquare
} from "lucide-react";

const Contact = () => {
  const contactOptions = [
    {
      title: "Schedule a Discovery Call",
      description: "Book a 30-minute strategy session to discuss your project",
      action: "Book 30-min Call",
      icon: Calendar,
      gradient: "from-blue-500 to-indigo-600",
      badge: "Most Popular"
    },
    {
      title: "Email Us Directly",
      description: "team@dicesolutions.studio",
      contact: "+91 7710145519",
      action: "Send Email",
      icon: Mail,
      gradient: "from-green-500 to-emerald-600",
      badge: "Quick Response"
    },
    {
      title: "Join Our Community",
      description: "Connect with fellow developers and stay updated",
      action: "Join Discord Community",
      icon: MessageCircle,
      gradient: "from-purple-500 to-violet-600",
      badge: "Community"
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
                  Let's Build Something Amazing Together
                </h1>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto"
              >
                Try us - we love to get on calls and see what we can do for you. 
                We're passionate about turning innovative ideas into successful digital products.
              </motion.p>
            </div>
            
            {/* Contact Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
            >
              {[
                { icon: Clock, label: "24h", value: "Response Time" },
                { icon: Users, label: "500+", value: "Happy Clients" },
                { icon: Target, label: "95%", value: "Success Rate" },
                { icon: Gift, label: "Free", value: "Consultation" }
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

      {/* Enhanced Contact Options */}
      <section className="relative section-padding-large">
        <div className="container-width">
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
                Get in Touch
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl text-muted-foreground max-w-2xl mx-auto"
              >
                Choose the best way to connect with our team
              </motion.p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.title}
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
                  <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <CardHeader className="relative text-center pb-4">
                    {option.badge && (
                      <div className="absolute -top-2 -right-2">
                        <Badge variant="secondary" className="text-xs font-light">
                          {option.badge}
                        </Badge>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-center mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${option.gradient} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                        <option.icon className="w-8 h-8" />
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl font-extralight tracking-tight mb-3">
                      {option.title}
                    </CardTitle>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {option.description}
                    </p>
                    
                    {option.contact && (
                      <p className="text-sm text-primary font-light mt-2">
                        {option.contact}
                      </p>
                    )}
                  </CardHeader>
                  
                  <CardContent className="relative">
                    <Button variant="minimal" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      {option.action}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form */}
      <section className="relative section-padding overflow-hidden bg-gradient-to-br from-secondary/20 via-background to-primary/5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent" />
        <div className="container-width relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-extralight tracking-tight bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                  Start Your Project
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Tell us about your vision and we'll help bring it to life. 
                  Our team is ready to transform your ideas into reality.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  { icon: Gift, text: "Free project consultation" },
                  { icon: Target, text: "Technical roadmap included" },
                  { icon: Clock, text: "Response within 24 hours" },
                  { icon: CheckCircle2, text: "No commitment required" }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full">
                      <benefit.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-light group-hover:text-primary transition-colors duration-300">
                      {benefit.text}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              {/* Additional Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-light text-foreground">Prefer to talk directly?</h3>
                        <p className="text-sm text-muted-foreground">Book a quick 15-min call</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Schedule Quick Call
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border hover:bg-card/80 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                
                <CardContent className="relative p-8 space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-extralight tracking-tight mb-2">Project Brief</h3>
                    <p className="text-muted-foreground">Share your project details with us</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-light flex items-center gap-2">
                        <Users className="w-4 h-4 text-accent" />
                        Name
                      </label>
                      <Input placeholder="Your name" className="border-border/50 focus:border-primary transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-light flex items-center gap-2">
                        <Mail className="w-4 h-4 text-accent" />
                        Email
                      </label>
                      <Input placeholder="your@email.com" type="email" className="border-border/50 focus:border-primary transition-colors" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-light flex items-center gap-2">
                      <Target className="w-4 h-4 text-accent" />
                      Project Type
                    </label>
                    <Select>
                      <SelectTrigger className="border-border/50 focus:border-primary transition-colors">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mvp">MVP Development</SelectItem>
                        <SelectItem value="fullstack">Full-Stack App</SelectItem>
                        <SelectItem value="ai">AI Integration</SelectItem>
                        <SelectItem value="mobile">Mobile App</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-light">Budget Range</label>
                      <Select>
                        <SelectTrigger className="border-border/50 focus:border-primary transition-colors">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">₹5L - ₹10L</SelectItem>
                          <SelectItem value="mid">₹10L - ₹20L</SelectItem>
                          <SelectItem value="high">₹20L+</SelectItem>
                          <SelectItem value="guidance">Need Guidance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-light flex items-center gap-2">
                        <Clock className="w-4 h-4 text-accent" />
                        Timeline
                      </label>
                      <Select>
                        <SelectTrigger className="border-border/50 focus:border-primary transition-colors">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fast">1-2 months</SelectItem>
                          <SelectItem value="normal">2-4 months</SelectItem>
                          <SelectItem value="extended">4+ months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-light flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-accent" />
                      Project Description
                    </label>
                    <Textarea 
                      placeholder="Tell us about your project idea, goals, and any specific requirements..." 
                      className="min-h-[120px] border-border/50 focus:border-primary transition-colors" 
                    />
                  </div>
                  
                  <Button variant="hero" size="lg" className="w-full group">
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    Submit Project Brief
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    We'll review your brief and get back to you within 24 hours
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;