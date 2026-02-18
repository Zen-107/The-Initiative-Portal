import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t border-border bg-midnight">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Sparkles className="w-5 h-5 text-neon-lime" />
          <span className="font-display text-xl text-foreground">The Initiative Portal</span>
        </div>
        <p className="text-muted-foreground text-sm font-body">
          © 2026 The Initiative Portal. All rights reserved. Roll for initiative! 🎲
        </p>
      </div>
    </footer>
  );
};

export default Footer;
