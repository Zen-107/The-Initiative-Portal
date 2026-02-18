import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import type { TableType } from "@/types/data";

interface BookingSectionProps {
  timeSlots?: string[];
  tableTypes?: TableType[];
  onConfirmBooking?: (booking: { date: string; time: string; tableType: string }) => void;
}

const BookingSection = ({ timeSlots = [], tableTypes = [], onConfirmBooking }: BookingSectionProps) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedTable, setSelectedTable] = useState("");

  const canBook = selectedDate && selectedTime && selectedTable;

  const handleConfirm = () => {
    if (canBook) {
      onConfirmBooking?.({ date: selectedDate, time: selectedTime, tableType: selectedTable });
    }
  };

  return (
    <section id="booking" className="py-20 px-4 bg-deep-purple/50">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl sm:text-5xl text-foreground neon-text-pink">
            📅 Book a Table
          </h2>
          <p className="mt-3 text-muted-foreground font-body text-lg">
            Reserve your spot in the magical realm
          </p>
        </motion.div>

        <motion.div
          className="parchment-card p-6 sm:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-6">
            <label className="flex items-center gap-2 text-sm font-bold text-parchment-foreground mb-2">
              <CalendarDays className="w-4 h-4" />
              Select Date
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-parchment-foreground/10 border-2 border-parchment-foreground/20 text-parchment-foreground font-body focus:outline-none focus:border-accent"
            />
          </div>

          <div className="mb-6">
            <label className="flex items-center gap-2 text-sm font-bold text-parchment-foreground mb-2">
              <Clock className="w-4 h-4" />
              Select Time
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {timeSlots.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTime(t)}
                  className={`px-3 py-2 rounded-lg text-sm font-bold transition-all ${
                    selectedTime === t
                      ? "bg-accent text-accent-foreground scale-105"
                      : "bg-parchment-foreground/10 text-parchment-foreground hover:bg-parchment-foreground/20"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="flex items-center gap-2 text-sm font-bold text-parchment-foreground mb-2">
              <MapPin className="w-4 h-4" />
              Table Type
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {tableTypes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTable(t.id)}
                  className={`p-4 rounded-lg text-left transition-all border-2 ${
                    selectedTable === t.id
                      ? "border-accent bg-accent/20"
                      : "border-parchment-foreground/20 hover:border-parchment-foreground/40"
                  }`}
                >
                  <div className="font-bold text-parchment-foreground">{t.label}</div>
                  <div className="text-xs text-parchment-foreground/60 mt-1">{t.desc}</div>
                </button>
              ))}
            </div>
          </div>

          <button
            className="w-full px-6 py-3 rounded-xl bg-accent text-accent-foreground font-bold text-lg hover:scale-[1.02] transition-transform"
            disabled={!canBook}
            onClick={handleConfirm}
          >
            ✨ Confirm Booking
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
