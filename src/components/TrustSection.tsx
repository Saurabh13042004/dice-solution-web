import { motion } from "framer-motion";
import { Logos3 } from "@/components/ui/logos3";

const TrustSection = () => {
  const testimonial = {
    quote: "Dice not only built our MVP, but their AI-powered insights helped us pivot successfully.",
    author: "Founder, PodReel",
  };

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-width">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          {/* Logo carousel section */}
          <Logos3 heading="Trusted by Leading Startups" />
          
          {/* Testimonial section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mt-16"
          >
            <blockquote className="text-xl italic text-muted-foreground mb-4">
              "{testimonial.quote}"
            </blockquote>
            <cite className="text-sm font-light text-foreground">
              — {testimonial.author}
            </cite>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;