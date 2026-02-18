import { motion } from "framer-motion";
import { Dice5, CalendarDays } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="The Initiative Portal - A magical board game shop"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/40 via-midnight/60 to-background" />
      </div>

      {/* Floating stars */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-neon-lime"
          style={{
            top: `${15 + Math.random() * 50}%`,
            left: `${10 + Math.random() * 80}%`,
          }}
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto mt-16">
        <motion.h1
          className="font-display text-5xl sm:text-7xl lg:text-8xl text-foreground neon-text-lime leading-tight"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          The Initiative Portal
        </motion.h1>

        <motion.p
          className="mt-4 text-lg sm:text-xl text-foreground/80 font-body max-w-xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your gateway to board games, D&D adventures, and midnight magic.
          Roll initiative and join the party!
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#games"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-lg neon-glow-lime hover:scale-105 transition-transform"
          >
            <Dice5 className="w-5 h-5" />
            Explore Games
          </a>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-secondary text-secondary-foreground font-bold text-lg neon-glow-pink hover:scale-105 transition-transform"
          >
            <CalendarDays className="w-5 h-5" />
            Book a Table
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
