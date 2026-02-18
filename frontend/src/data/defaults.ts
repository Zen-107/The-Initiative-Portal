import type { Game, DndSession, TableType, MembershipData } from "@/types/data";

export const defaultGames: Game[] = [
  { title: "Catan", players: "3-4", duration: "60-120 min", image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=400&q=80", category: "Strategy" },
  { title: "Ticket to Ride", players: "2-5", duration: "30-60 min", image: "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=400&q=80", category: "Family" },
  { title: "Pandemic", players: "2-4", duration: "45-60 min", image: "https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?w=400&q=80", category: "Co-op" },
  { title: "Azul", players: "2-4", duration: "30-45 min", image: "https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=400&q=80", category: "Abstract" },
  { title: "Wingspan", players: "1-5", duration: "40-70 min", image: "https://images.unsplash.com/photo-1585504198199-20277593b394?w=400&q=80", category: "Engine" },
  { title: "Codenames", players: "4-8", duration: "15-30 min", image: "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=400&q=80", category: "Party" },
];

export const defaultSessions: DndSession[] = [
  { campaign: "Curse of Strahd", dm: "Dungeon Master Kai", seatsTotal: 5, seatsTaken: 3, time: "🌤 Afternoon Round — 13:00" },
  { campaign: "Lost Mine of Phandelver", dm: "Lady Astra", seatsTotal: 5, seatsTaken: 1, time: "🌤 Afternoon Round — 14:30" },
  { campaign: "Tomb of Annihilation", dm: "The Archmage", seatsTotal: 4, seatsTaken: 4, time: "🌙 Evening Round — 18:00" },
  { campaign: "Dragon Heist", dm: "Shadow DM", seatsTotal: 5, seatsTaken: 2, time: "🌙 Evening Round — 19:30" },
];

export const defaultTimeSlots: string[] = ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"];

export const defaultTableTypes: TableType[] = [
  { id: "general", label: "🎲 General Table", desc: "Open table for board games" },
  { id: "dungeon", label: "🏰 Private D&D Dungeon", desc: "Your own adventure room" },
];

export const defaultMembership: MembershipData = {
  price: 450,
  currency: "THB",
  period: "month",
  description: "Play all you want for 30 days. Pure magic.",
  perks: [
    "Play all board games for 30 days",
    "Priority D&D session booking",
    "10% off snacks & drinks",
    "Access to member-only events",
    "Free private dungeon booking (1x/month)",
  ],
};
