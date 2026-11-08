import React, { useState, useEffect } from 'react';
import { Scissors, Menu, X, Phone, Calendar, Clock } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Услуги и цены', href: '#services' },
    { name: 'До / После', href: '#transformation' },
    { name: 'Мастера', href: '#masters' },
    { name: 'Косметика', href: '#shop' },
    { name: 'Отзывы', href: '#reviews' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-bg/95 backdrop-blur-md border-b border-brand-border py-3 shadow-lg shadow-black/40'
          : 'bg-gradient-to-b from-black/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-brand-surface border border-brand-gold/40 flex items-center justify-center text-brand-gold group-hover:border-brand-gold transition-colors shadow-gold-sm">
            <Scissors className="w-5 h-5 -rotate-45" />
          </div>
          <div className="flex flex-col">
            <span className="font-display tracking-widest text-lg font-bold text-white uppercase group-hover:text-brand-gold transition-colors">
              Blade & Timber
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-brand-gold/80 -mt-1 font-medium">
              Grooming Club
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-brand-gold transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-gold hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action button & Phone */}
        <div className="hidden sm:flex items-center gap-5">
          <a
            href="tel:+74958902144"
            className="flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-white transition-colors"
          >
            <div className="w-7 h-7 rounded-full bg-brand-surface border border-white/10 flex items-center justify-center text-brand-gold">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span>+7 (495) 890-21-44</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="relative group overflow-hidden rounded-md bg-brand-gold px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-brand-gold-light hover:shadow-gold-glow active:scale-95 flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Записаться</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={onOpenBooking}
            className="sm:hidden px-3 py-1.5 rounded bg-brand-gold text-black text-xs font-bold uppercase tracking-wider"
          >
            Запись
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-surface/98 backdrop-blur-xl border-b border-brand-border px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-gray-200 hover:text-brand-gold py-2 border-b border-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 space-y-3">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Clock className="w-4 h-4 text-brand-gold" />
              <span>Ежедневно с 10:00 до 22:00</span>
            </div>
            <a
              href="tel:+74958902144"
              className="flex items-center gap-2 text-sm font-semibold text-white"
            >
              <Phone className="w-4 h-4 text-brand-gold" />
              <span>+7 (495) 890-21-44</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded bg-brand-gold text-black font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Онлайн-запись к мастеру</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
