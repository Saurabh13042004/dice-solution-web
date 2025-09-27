import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import monitorlyImage from "@/assets/monitorly-dashboard.jpg";

const ProductShowcase = () => {
  return (
    <section className="section-padding">
      <div className="container-width">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl font-bold">We Build SaaS Products — For You and For Ourselves</h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl border border-border p-8 card-hover"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                <span className="text-accent text-sm font-medium">Live & Operational</span>
              </div>
              
              <h3 className="text-3xl font-bold">Monitorly</h3>
              <p className="text-lg text-muted-foreground">
                A powerful uptime monitoring tool trusted by 200+ companies
              </p>
              
              <div className="flex flex-wrap gap-8 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">99.9%</div>
                  <div className="text-muted-foreground">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">45ms</div>
                  <div className="text-muted-foreground">Response</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">Real-time</div>
                  <div className="text-muted-foreground">Alerts</div>
                </div>
              </div>
              
              <Button variant="accent">Request Access</Button>
            </div>
            
            <div className="relative">
              <img 
                src={monitorlyImage} 
                alt="Monitorly dashboard showing uptime monitoring statistics and real-time alerts"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent rounded-lg"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;