import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GameGallery from "@/components/GameGallery";
import MidnightChronicles from "@/components/MidnightChronicles";
import MembershipSection from "@/components/MembershipSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import {
  defaultGames,
  defaultSessions,
  defaultMembership,
  defaultTimeSlots,
  defaultTableTypes,
} from "@/data/defaults";

const Index = () => {
  // Replace these with your own API data-fetching logic
  const games = defaultGames;
  const sessions = defaultSessions;
  const membership = defaultMembership;
  const timeSlots = defaultTimeSlots;
  const tableTypes = defaultTableTypes;

  const handleJoinSession = (campaign: string) => {
    console.log("Joined session:", campaign);
    // TODO: Call your backend API
  };

  const handleSignUp = () => {
    console.log("Sign up clicked");
    // TODO: Call your backend API
  };

  const handleConfirmBooking = (booking: { date: string; time: string; tableType: string }) => {
    console.log("Booking confirmed:", booking);
    // TODO: Call your backend API
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <GameGallery games={games} />
        <MidnightChronicles sessions={sessions} onJoinSession={handleJoinSession} />
        <MembershipSection membership={membership} onSignUp={handleSignUp} />
        <BookingSection
          timeSlots={timeSlots}
          tableTypes={tableTypes}
          onConfirmBooking={handleConfirmBooking}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
