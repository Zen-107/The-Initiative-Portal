import { motion } from "framer-motion";
import GameCard from "./GameCard";
import type { Game } from "@/types/data";

interface GameGalleryProps {
  games?: Game[];
}

const GameGallery = ({ games = [] }: GameGalleryProps) => {
  return (
    <section id="games" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl sm:text-5xl text-foreground neon-text-lime">
            🎲 Game Gallery
          </h2>
          <p className="mt-3 text-muted-foreground font-body text-lg">
            Browse our enchanted collection of board games
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game, i) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GameCard {...game} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameGallery;
