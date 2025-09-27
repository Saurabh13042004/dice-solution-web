import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const AnimatedCounter = ({ 
  end, 
  duration = 2, 
  suffix = "", 
  prefix = "", 
  className = "" 
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOutCubic * end);
      
      setCount(current);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ 
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      className={className}
    >
      {prefix}{count}{suffix}
    </motion.div>
  );
};

interface StatCardProps {
  title?: string;
  description: string;
  value?: number;
  suffix?: string;
  prefix?: string;
  icon?: React.ReactNode;
  delay?: number;
}

export const StatCard = ({ 
  title, 
  description, 
  value, 
  suffix = "", 
  prefix = "", 
  icon,
  delay = 0 
}: StatCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.6,
        delay: delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className="group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 p-6 hover:bg-card/80 transition-all duration-300"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative space-y-3 text-center">
        {icon && (
          <motion.div 
            className="flex justify-center items-center mb-2 text-primary"
            animate={{ 
              rotateY: isInView ? [0, 360] : 0,
            }}
            transition={{ 
              duration: 1,
              delay: delay + 0.5,
              type: "spring"
            }}
          >
            {icon}
          </motion.div>
        )}
        
        {value !== undefined ? (
          <AnimatedCounter
            end={value}
            suffix={suffix}
            prefix={prefix}
            className="text-3xl md:text-4xl font-extralight text-primary tracking-tight"
            duration={2.5}
          />
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: delay + 0.3, duration: 0.5 }}
            className="text-3xl md:text-4xl font-extralight text-primary tracking-tight"
          >
            {title}
          </motion.div>
        )}
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.6, duration: 0.5 }}
          className="text-sm text-muted-foreground font-light leading-relaxed"
        >
          {description}
        </motion.div>
      </div>
    </motion.div>
  );
};