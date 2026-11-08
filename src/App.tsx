import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { MastersSection } from './components/MastersSection';
import { PerksBento } from './components/PerksBento';
import { ApothecarySection } from './components/ApothecarySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactsSection } from './components/ContactsSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { Service, Master } from './types';
import { Calendar } from 'lucide-react';

export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedMaster, setSelectedMaster] = useState<Master | null>(null);
  const [showFloatingCta, setShowFloatingCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCta(window.scrollY > 450);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBooking = () => {
    setSelectedService(null);
    setSelectedMaster(null);
    setIsBookingOpen(true);
  };

  const handleSelectService = (service: Service) => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  const handleSelectMaster = (master: Master) => {
    setSelectedMaster(master);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService(null);
    setSelectedMaster(null);
  };

  return (
    <div className="min-h-screen bg-brand-bg text-gray-100 flex flex-col font-sans selection:bg-brand-gold selection:text-black">
      {/* Navigation Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenBooking={handleOpenBooking} />
        <ServicesSection onSelectService={handleSelectService} />
        <BeforeAfterSlider />
        <MastersSection onSelectMaster={handleSelectMaster} />
        <PerksBento />
        <ApothecarySection />
        <ReviewsSection />
        <ContactsSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Booking Wizard Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedService={selectedService}
        preselectedMaster={selectedMaster}
      />

      {/* Mobile Floating Action Button (Sticky CTA) */}
      <div
        className={`fixed bottom-6 right-6 z-30 sm:hidden transition-all duration-300 ${
          showFloatingCta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
        }`}
      >
        <button
          onClick={handleOpenBooking}
          className="px-5 py-3 rounded-full bg-brand-gold text-black font-bold uppercase tracking-wider text-xs shadow-gold-glow flex items-center gap-2 border border-black/20 active:scale-95 transition-transform"
        >
          <Calendar className="w-4 h-4 text-black" />
          <span>Записаться</span>
        </button>
      </div>
    </div>
  );
};

export default App;
