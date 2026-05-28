import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-strong shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <Link to="/" className="flex items-center group">
          {/* Adjusted image size and margin to seamlessly act as the 'Z' for 'ently IT Solution' */}
          <img src="public\aeyveruo.jpeg" alt="Zently Logo" className="h-[3.2em] w-full object-contain logo-glow group-hover:scale-110 transition-all duration-500 -mb-2 mr-[-0.80em]" />
          <h3 className="font-display text-xl font-bold tracking-tight "><span className="text-primary">Aeyvan</span> Technologies</h3> 
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${location.pathname === link.href
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-bold hover:opacity-90 transition-all glow-sm active:scale-95"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-border shadow-2xl"
          >
            <nav className="container mx-auto py-8 px-4 flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-lg font-semibold tracking-wide ${location.pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground transition-colors"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-4 px-5 py-4 rounded-xl bg-primary text-primary-foreground text-center font-bold shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform"
              >
                Get Started
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
