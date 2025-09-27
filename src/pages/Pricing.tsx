import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Check, 
  ArrowRight, 
  Zap, 
  Star, 
  Shield,
  Rocket,
  Users,
  Phone,
  Calendar,
  Target,
  Clock,
  CheckCircle2
} from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "MVP Sprint",
      price: "₹99K",
      originalPrice: null,
      duration: "4 weeks",
      description: "Perfect for validating your idea quickly",
      features: [
        { name: "Full-stack development", description: "React, Node.js, PostgreSQL stack" },
        { name: "AI integration", description: "Smart features with OpenAI" },
        { name: "User authentication", description: "Secure login system" },
        { name: "Mobile responsive", description: "Works on all devices" },
        { name: "1 month support", description: "Post-launch assistance" }
      ],
      popular: false,
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-blue-500 to-purple-600",
      badge: "Quick Start"
    },
    {
      name: "Scale Ready", 
      price: "₹1.5L",
      originalPrice: "₹2L",
      duration: "8 weeks",
      description: "For startups ready to scale and grow",
      features: [
        { name: "Everything in MVP Sprint", description: "All MVP features included" },
        { name: "Advanced AI features", description: "Custom ML models & workflows" },
        { name: "Payment integration", description: "Stripe, Razorpay setup" },
        { name: "Analytics dashboard", description: "User insights & metrics" },
        { name: "3 months support", description: "Extended post-launch care" }
      ],
      popular: true,
      icon: <Star className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-600",
      badge: "Most Popular"
    },
    {
      name: "Enterprise",
      price: "Custom",
      originalPrice: null,
      duration: "12+ weeks",
      description: "For established companies with complex needs",
      features: [
        { name: "Everything in Scale Ready", description: "All premium features" },
        { name: "Custom integrations", description: "Third-party API connections" },
        { name: "Dedicated team", description: "Senior developers assigned" },
        { name: "Priority support", description: "24/7 technical assistance" },
        { name: "Ongoing maintenance", description: "Long-term partnership" }
      ],
      popular: false,
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-green-500 to-teal-600",
      badge: "Enterprise Grade"
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
                  Pricing
                </h1>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto"
              >
                No hidden fees, no surprises. Choose the perfect plan for your startup journey. 
                All plans include our AI-powered development workflow and startup-focused approach.
              </motion.p>
            </div>
            
            {/* Pricing Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
            >
              {[
                { icon: Rocket, label: "60-Day", value: "Delivery" },
                { icon: Users, label: "80+", value: "Projects" },
                { icon: Target, label: "5x", value: "Cheaper" },
                { icon: Clock, label: "24/7", value: "Support" }
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

      {/* Enhanced Pricing Plans */}
      <section className="relative section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: plan.popular ? 1.02 : 1.01,
                  transition: { duration: 0.2 }
                }}
                className={`group relative ${plan.popular ? 'md:-mt-8 md:mb-8' : ''}`}
              >
                <Card className={`relative h-full overflow-hidden bg-card/50 backdrop-blur-sm border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-primary shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30' 
                    : 'border-border hover:bg-card/80'
                }`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0 px-4 py-1">
                        {plan.badge}
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="relative text-center pb-6">
                    <div className="flex items-center justify-center mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                        {plan.icon}
                      </div>
                    </div>
                    
                    <CardTitle className="text-2xl font-extralight tracking-tight mb-2">
                      {plan.name}
                    </CardTitle>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {plan.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2">
                        {plan.originalPrice && (
                          <span className="text-lg text-muted-foreground line-through">
                            {plan.originalPrice}
                          </span>
                        )}
                        <span className="text-4xl font-extralight tracking-tight">
                          {plan.price}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {plan.duration}
                      </p>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative space-y-6">
                    <div className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.1) }}
                          viewport={{ once: true }}
                          className="space-y-1"
                        >
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-light">{feature.name}</span>
                              <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <Button 
                      variant={plan.popular ? "hero" : "minimal"} 
                      size="lg" 
                      className="w-full group-hover:scale-105 transition-transform duration-300"
                    >
                      {plan.price === "Custom" ? (
                        <>
                          Contact Sales
                          <Phone className="w-5 h-5 ml-2" />
                        </>
                      ) : (
                        <>
                          Get Started
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative section-padding bg-gradient-to-br from-secondary/20 via-background to-primary/5">
        <div className="container-width">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-12 max-w-4xl mx-auto"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-extralight tracking-tight bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about our pricing and services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {[
                {
                  question: "What's included in the MVP Sprint?",
                  answer: "Full-stack development with React/Node.js, AI integration, user authentication, mobile-responsive design, and 1 month of post-launch support."
                },
                {
                  question: "Can I upgrade my plan later?",
                  answer: "Yes! You can upgrade to any higher plan at any time. We'll adjust the pricing based on the remaining duration of your project."
                },
                {
                  question: "Do you offer refunds?",
                  answer: "We offer a satisfaction guarantee. If you're not happy with our work in the first 2 weeks, we'll provide a full refund."
                },
                {
                  question: "What technologies do you use?",
                  answer: "We use modern tech stacks including React, Node.js, PostgreSQL, AI/ML frameworks, and cloud platforms like AWS and Vercel."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <h3 className="text-lg font-light text-foreground">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding">
        <div className="container-width">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-extralight tracking-tight bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Ready to Transform Your Idea?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join 80+ successful startups who chose Dice for their MVP development. 
              Let's build your AI-powered product together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Discovery Call
              </Button>
              <Button variant="minimal" size="lg">
                View Our Process
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;