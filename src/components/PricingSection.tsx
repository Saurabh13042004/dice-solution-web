import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Zap, Star, Shield } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "MVP Sprint",
      price: "₹99K",
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
      icon: <Zap className="w-6 h-6" />
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
      icon: <Star className="w-6 h-6" />
    },
    {
      name: "Enterprise",
      price: "Custom",
      duration: "12+ weeks",
      description: "Tailored solutions for complex needs",
      features: [
        { name: "Everything in Scale Ready", description: "All premium features" },
        { name: "Custom integrations", description: "Third-party API connections" },
        { name: "Advanced security", description: "Enterprise-grade protection" },
        { name: "Team training", description: "Technical handover sessions" },
        { name: "6 months support", description: "Long-term partnership" }
      ],
      popular: false,
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <section id="pricing" className="relative section-padding-large overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-primary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
      
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
                Founder-Friendly Pricing
              </h2>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            >
              Choose the perfect plan to bring your startup vision to life with our AI-powered development approach.
            </motion.p>
          </div>
        </motion.div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="relative"
            >
              <Card className={`relative h-full transition-all duration-300 ${
                plan.popular 
                  ? 'shadow-2xl border-primary bg-card/80 backdrop-blur-sm' 
                  : 'border-border bg-card/50 backdrop-blur-sm hover:bg-card/80'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className={`w-12 h-12 rounded-xl ${
                      plan.popular 
                        ? 'bg-gradient-to-br from-primary/20 to-accent/20' 
                        : 'bg-secondary/20'
                    } flex items-center justify-center text-primary`}>
                      {plan.icon}
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl font-extralight tracking-tight">{plan.name}</CardTitle>
                  <CardDescription className="mt-2 mb-4">{plan.description}</CardDescription>
                  
                  <div className="flex items-baseline justify-center gap-2">
                    {plan.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through font-light">
                        {plan.originalPrice}
                      </span>
                    )}
                    <span className="text-4xl font-extralight">{plan.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{plan.duration}</p>
                </CardHeader>
                
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-light text-foreground">{feature.name}</p>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant={plan.popular ? "default" : "outline"} 
                    className="w-full gap-2"
                    size="lg"
                  >
                    {plan.price === "Custom" ? "Book a meeting" : "Get Started"}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Simple CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to transform your idea into reality?
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;