import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WhyDice = () => {
  const differentiators = [
    {
      title: "Impactful Relations",
      description: "We value core principles more than money supremacy. Try us even if you don't have funds.",
      icon: "🤝"
    },
    {
      title: "Top Rated Services",
      description: "Your feedback is our vision. We are rated 4.5 stars based on client feedback.",
      icon: "⭐"
    },
    {
      title: "Trusted Advisors",
      description: "We worked with more than 80+ products from scratch with proven results.",
      icon: "🎯"
    },
    {
      title: "AI-First Approach",
      description: "We delivered AI-powered startups, helped build MVPs and secure funding in 60 days.",
      icon: "🤖"
    },
    {
      title: "Startup Veterans",
      description: "Super talented engineers with startup experience who understand your challenges.",
      icon: "🚀"
    },
    {
      title: "Community Driven",
      description: "Making ideas come to life with cutting-edge technology and knowledge sharing.",
      icon: "👥"
    }
  ];

  const values = [
    "Lightning Fast Software Development",
    "Explorers who love to discover solutions and challenges",
    "Making ideas come to life with cutting-edge technology",
    "Community-driven approach with knowledge sharing"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient pt-24 pb-16">
        <div className="container-width">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-extralight tracking-tight">Why Choose Dice Solutions?</h1>
            <p className="text-xl text-muted-foreground">
              Not just any other development company
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're team of tech explorers driven by startup success and powered by AI innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-extralight tracking-tight">Driven from Our Core</h2>
              <p className="text-xl text-accent">We drive success to your everyday business</p>
              <p className="text-muted-foreground leading-relaxed">
                We understand that every business is unique. That's why we offer tailored solutions 
                designed to meet your specific needs. From startups to established enterprises, 
                our services are adaptable to businesses of all sizes and industries.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-8 border border-border"
            >
              <h3 className="text-2xl font-bold mb-4">10 Years Of Experience</h3>
              <p className="text-muted-foreground">
                We mastered our art of getting MVP done. Load your burden on us.
              </p>
              <div className="mt-6 flex items-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">80+</div>
                  <div className="text-sm text-muted-foreground">Products Built</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">4.5</div>
                  <div className="text-sm text-muted-foreground">Star Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">60</div>
                  <div className="text-sm text-muted-foreground">Days MVP</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="section-padding bg-secondary/30">
        <div className="container-width">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-extralight tracking-tight">What Makes Us Different</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full card-hover border-border text-center">
                  <CardHeader>
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container-width">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-12 max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-extralight tracking-tight">Passionate – Dedicated – Professional</h2>
            
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 text-left"
                >
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-lg">{value}</span>
                </motion.div>
              ))}
            </div>
            
            <Button variant="hero" size="lg">
              Join Our Team
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyDice;