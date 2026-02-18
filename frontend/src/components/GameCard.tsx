import { motion } from "framer-motion";
import { Eye } from "lucide-react";

interface GameCardProps {
  title: string;
  players: string;
  duration: string;
  image: string;
  category: string;
}

const GameCard = ({ title, players, duration, image, category }: GameCardProps) => {
  return (
    <motion.div
      className="parchment-card overflow-hidden group cursor-pointer"
      whileHover={{ y: -6, rotate: -1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 px-2 py-1 rounded-md bg-accent text-accent-foreground text-xs font-bold">
          {category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-display text-xl text-parchment-foreground">{title}</h3>
        <div className="mt-2 flex items-center gap-3 text-sm text-parchment-foreground/70 font-body">
          <span>👥 {players}</span>
          <span>⏱ {duration}</span>
        </div>
        <button className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground font-bold text-sm hover:bg-accent/80 transition-colors">
          <Eye className="w-4 h-4" />
          View Details
        </button>
      </div>
    </motion.div>
  );
};

export default GameCard;
