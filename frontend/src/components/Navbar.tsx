import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Games", href: "#games" },
  { label: "Midnight Chronicles", href: "#chronicles" },
  { label: "Membership", href: "#membership" },
  { label: "Book a Table", href: "#booking" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#" className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-neon-lime" />
          <span className="font-display text-2xl text-foreground tracking-wide">
            The Initiative Portal
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-body font-semibold text-muted-foreground hover:text-neon-lime transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#membership"
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-bold text-sm neon-glow-lime hover:scale-105 transition-transform"
          >
            Join Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-midnight/95 border-b border-border overflow-hidden"
          >
            <div className="flex flex-col gap-3 p-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-foreground font-semibold hover:text-neon-lime transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#membership"
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-bold text-center neon-glow-lime"
              >
                Join Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
