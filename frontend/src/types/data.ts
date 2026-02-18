export interface Game {
  title: string;
  players: string;
  duration: string;
  image: string;
  category: string;
}

export interface DndSession {
  campaign: string;
  dm: string;
  seatsTotal: number;
  seatsTaken: number;
  time: string;
}

export interface TableType {
  id: string;
  label: string;
  desc: string;
}

export interface MembershipData {
  price: number;
  currency: string;
  period: string;
  description: string;
  perks: string[];
}
