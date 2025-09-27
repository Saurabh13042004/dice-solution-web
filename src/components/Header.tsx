import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  ArrowRight, 
  Zap,
  ChevronDown
} from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navItems = [
    { path: "/services", label: "Services", description: "Our expertise" },
    { path: "/why-dice", label: "Why Dice", description: "What makes us different" },
    { path: "/process", label: "Process", description: "How we work" },
    { path: "/pricing", label: "Pricing", description: "View our plans" },
    { path: "/contact", label: "Contact", description: "Get in touch" }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/5' 
            : 'bg-background/80 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <div className="container-width">
          <div className="flex items-center justify-between h-16">
            {/* Enhanced Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <span className="relative z-10">DS</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary to-accent rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
                </div>
                <div className="hidden sm:block">
                  <div className="text-lg font-extralight tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                    Dice Solutions
                  </div>
                  <div className="text-xs text-muted-foreground font-light">
                    AI-Powered Development
                  </div>
                </div>
              </Link>
            </motion.div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative group"
                >
                  <Link
                    to={item.path}
                    className={`relative px-4 py-2 rounded-xl text-sm font-light transition-all duration-300 flex items-center gap-2 ${
                      location.pathname === item.path 
                        ? 'text-primary bg-primary/10 shadow-sm' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                    }`}
                  >
                    {item.label}
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                  
                  {/* Hover Tooltip */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-card/95 backdrop-blur-sm border border-border rounded-lg px-3 py-2 shadow-lg">
                      <p className="text-xs text-muted-foreground whitespace-nowrap">{item.description}</p>
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-card border-l border-t border-border rotate-45" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </nav>
            
            {/* CTA and Mobile Menu */}
            <div className="flex items-center gap-3">
              <Link to="/contact" className="hidden sm:block">
                <Button variant="hero" size="sm" className="group">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              
              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-secondary/50 backdrop-blur-sm border border-border hover:bg-secondary transition-all duration-300"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-16 right-0 bottom-0 w-80 bg-background/95 backdrop-blur-xl border-l border-border z-50 lg:hidden overflow-hidden"
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="p-6 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold text-sm">
                      DS
                    </div>
                    <div>
                      <div className="text-sm font-light text-foreground">Navigation</div>
                      <div className="text-xs text-muted-foreground">Choose your destination</div>
                    </div>
                  </div>
                </div>
                
                {/* Navigation Items */}
                <nav className="flex-1 p-6 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block p-4 rounded-xl transition-all duration-300 group ${
                          location.pathname === item.path
                            ? 'bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-primary'
                            : 'hover:bg-secondary/50 text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-light">{item.label}</div>
                            <div className="text-xs text-muted-foreground mt-1">{item.description}</div>
                          </div>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                        
                        {location.pathname === item.path && (
                          <motion.div
                            layoutId="activeMobileNav"
                            className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                
                {/* Mobile CTA */}
                <div className="p-6 border-t border-border">
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="hero" size="lg" className="w-full group">
                      <Zap className="w-5 h-5 mr-2" />
                      Get Started
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                  
                  <p className="text-xs text-muted-foreground text-center mt-3">
                    Ready to transform your ideas into reality?
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;