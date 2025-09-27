import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.1),transparent)]"></div>
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pb-24 pt-36 sm:gap-8 sm:pt-44 md:px-10 lg:px-16">
        <motion.div 
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 backdrop-blur-sm"
        >
          <span className="text-[10px] font-light uppercase tracking-[0.08em] text-primary/70">New</span>
          <span className="h-1 w-1 rounded-full bg-primary/40" />
          <span className="text-xs font-light tracking-tight text-primary/80">AI-powered product engineering agency</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl text-left text-5xl font-extralight leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          <FlipWords 
            words={["Launch Faster.", "Build Smarter.", "Scale Effortlessly.", "Innovate Boldly."]} 
            duration={2500}
            className="text-primary font-extralight tracking-tight"
          />
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl text-left text-base font-light leading-relaxed tracking-tight text-muted-foreground sm:text-lg"
        >
          Built by ex-startup engineers who understand the urgency of bringing your vision to life. We leverage AI to accelerate development and deliver production-ready solutions in weeks, not months.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center gap-3 pt-2"
        >
          <Button size="lg" className="rounded-2xl">
            Book Your Free Strategy Call
          </Button>
          <Button variant="outline" size="lg" className="rounded-2xl" asChild>
            <a href="https://www.dicesolutions.studio/DICE.pdf" target="_blank" rel="noopener noreferrer">
              Download Free MVP Guide
            </a>
          </Button>
        </motion.div>

        <motion.ul 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8 flex flex-wrap gap-6 text-xs font-light tracking-tight text-muted-foreground"
        >
          {["50+ Startups", "4 Weeks MVP", "5x Cheaper"].map((detail, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-primary/40" /> {detail}
            </li>
          ))}
        </motion.ul>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/60 to-transparent" />
    </section>
  );
};

export default Hero;