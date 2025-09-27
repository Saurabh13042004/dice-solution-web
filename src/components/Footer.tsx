import { motion } from "framer-motion";
import { Footerdemo } from "@/components/ui/footer-section";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Footerdemo />
    </motion.div>
  );
};

export default Footer;