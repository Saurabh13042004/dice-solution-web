import { motion } from "framer-motion";

const WhyChooseSection = () => {
  const reasons = [
    {
      title: "AI-First Innovation",
      description: "Every solution leverages cutting-edge AI to automate, optimize, and scale."
    },
    {
      title: "Transparent Partnership",
      description: "Daily updates, open communication, and collaborative development process."
    },
    {
      title: "Zero Templates",
      description: "Custom-built solutions tailored specifically for your business needs."
    },
    {
      title: "Continuous Growth",
      description: "We maintain and evolve your product long after the initial launch."
    }
  ];

  return (
    <section className="section-padding-large bg-secondary/30">
      <div className="container-width">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl font-bold">Built Different for Modern Founders</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-card rounded-lg border border-border card-hover"
            >
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;