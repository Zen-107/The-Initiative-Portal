import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Swords, Shield } from "lucide-react";
import type { DndSession } from "@/types/data";

interface SessionCardProps extends DndSession {
  onJoin?: (campaign: string) => void;
}

const SessionCard = ({ campaign, dm, seatsTotal, seatsTaken, time, onJoin }: SessionCardProps) => {
  const [taken, setTaken] = useState(seatsTaken);
  const available = seatsTotal - taken;
  const full = available <= 0;

  const handleJoin = () => {
    if (!full) {
      setTaken((prev) => prev + 1);
      onJoin?.(campaign);
    }
  };

  return (
    <div className="parchment-card p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="text-xs font-bold text-accent uppercase tracking-wider">
            {time}
          </span>
          <h3 className="font-display text-xl mt-1 text-parchment-foreground">{campaign}</h3>
          <p className="text-sm text-parchment-foreground/70 font-body flex items-center gap-1 mt-1">
            <Shield className="w-4 h-4" /> DM: {dm}
          </p>
        </div>
        <Swords className="w-8 h-8 text-accent flex-shrink-0" />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-parchment-foreground/80 font-body">
          <Users className="w-4 h-4" />
          <span>
            {taken}/{seatsTotal} Seats
          </span>
          {full && (
            <span className="ml-1 px-2 py-0.5 rounded bg-destructive text-destructive-foreground text-xs font-bold">
              FULL
            </span>
          )}
        </div>

        <button
          onClick={handleJoin}
          disabled={full}
          className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${
            full
              ? "bg-muted text-muted-foreground cursor-not-allowed"
              : "bg-secondary text-secondary-foreground neon-glow-pink hover:scale-105"
          }`}
        >
          {full ? "Full" : "⚔️ Join Party"}
        </button>
      </div>
    </div>
  );
};

interface MidnightChroniclesProps {
  sessions?: DndSession[];
  onJoinSession?: (campaign: string) => void;
}

const MidnightChronicles = ({ sessions = [], onJoinSession }: MidnightChroniclesProps) => {
  return (
    <section id="chronicles" className="py-20 px-4 bg-deep-purple/50">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl sm:text-5xl text-foreground neon-text-pink">
            ⚔️ Midnight Chronicles
          </h2>
          <p className="mt-3 text-muted-foreground font-body text-lg">
            D&D sessions open for brave adventurers. Claim your seat!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {sessions.map((s, i) => (
            <motion.div
              key={s.campaign}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <SessionCard {...s} onJoin={onJoinSession} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MidnightChronicles;
