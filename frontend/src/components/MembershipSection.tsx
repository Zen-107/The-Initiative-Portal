import { motion } from "framer-motion";
import { Crown, Star, Zap, Check } from "lucide-react";
import type { MembershipData } from "@/types/data";

const fallbackMembership: MembershipData = {
  price: 0, currency: "", period: "", description: "", perks: [],
};

interface MembershipSectionProps {
  membership?: MembershipData;
  onSignUp?: () => void;
  onLearnMore?: () => void;
}

const MembershipSection = ({ membership = fallbackMembership, onSignUp, onLearnMore }: MembershipSectionProps) => {
  return (
    <section id="membership" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl sm:text-5xl text-foreground neon-text-lime">
            👑 Membership
          </h2>
          <p className="mt-3 text-muted-foreground font-body text-lg">
            Unlock the full magic for just {membership.price} {membership.currency} / {membership.period}
          </p>
        </motion.div>

        <motion.div
          className="relative cartoon-border bg-card p-8 sm:p-10 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center neon-glow-lime"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Crown className="w-6 h-6 text-primary-foreground" />
          </motion.div>

          <div className="mt-4">
            <div className="flex items-baseline justify-center gap-1">
              <span className="font-display text-6xl text-neon-lime neon-text-lime">{membership.price}</span>
              <span className="text-xl text-muted-foreground font-body">{membership.currency} / {membership.period}</span>
            </div>

            <p className="mt-2 text-foreground/70 font-body">
              {membership.description}
            </p>
          </div>

          <div className="mt-8 space-y-3 text-left max-w-sm mx-auto">
            {membership.perks.map((perk) => (
              <div key={perk} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-neon-lime" />
                </div>
                <span className="text-foreground font-body">{perk}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={onSignUp}
              className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-lg neon-glow-lime hover:scale-105 transition-transform inline-flex items-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Sign Up & Subscribe
            </button>
            <button
              onClick={onLearnMore}
              className="px-8 py-3 rounded-xl bg-muted text-foreground font-bold text-lg hover:bg-muted/80 transition-colors inline-flex items-center gap-2"
            >
              <Star className="w-5 h-5" />
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MembershipSection;
