import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Download, CheckCircle, Users, Clock, Target } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="relative section-padding-large overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(120,119,198,0.15),transparent_60%)]" />
      
      <div className="container-width relative">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center space-y-16 max-w-6xl mx-auto"
        >
          {/* Enhanced Header Section */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <h2 className="text-5xl md:text-6xl font-extralight tracking-tight bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Ready to Build Your AI-Powered MVP?
              </h2>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-2xl font-light text-primary tracking-wide"
            >
              Join 50+ successful startups who chose Dice Solutions.
            </motion.p>
          </div>
          
          {/* Enhanced CTA Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm border border-primary/30 hover:bg-card/80 transition-all duration-300 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                
                <CardContent className="relative p-8 text-center space-y-6">
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-primary-foreground">
                      <Calendar className="w-8 h-8" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-extralight tracking-tight">Book Your Strategy Call</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      30-minute discovery session to discuss your vision and create a roadmap
                    </p>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground gap-2 text-lg py-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                      Book Your Strategy Call
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
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
                    <h3 className="text-2xl font-extralight tracking-tight">Download Free Guide</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Comprehensive MVP development guide with AI integration strategies
                    </p>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full gap-2 text-lg py-6 rounded-xl border-2 hover:bg-secondary/20 transition-all duration-300"
                      asChild
                    >
                      <a href="https://www.dicesolutions.studio/DICE.pdf" target="_blank" rel="noopener noreferrer">
                        Download Free Guide
                        <Download className="w-5 h-5" />
                      </a>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          {/* Enhanced Benefits Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-light text-foreground">Free consultation</p>
                  <p className="text-sm text-muted-foreground">No hidden costs or obligations</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-light text-foreground">No commitment</p>
                  <p className="text-sm text-muted-foreground">Explore options risk-free</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-light text-foreground">Expert guidance</p>
                  <p className="text-sm text-muted-foreground">10+ years of startup experience</p>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-4 pt-8"
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-5 h-5" />
                <span className="text-sm font-light">Trusted by 50+ startups worldwide</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;