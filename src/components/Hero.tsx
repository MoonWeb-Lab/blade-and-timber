import React from 'react';
import { Calendar, ChevronRight, Star, ShieldCheck, Sparkles, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background imagery with subtle dark overlay & warm grain */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=2000&q=80"
          alt="Blade & Timber Interior"
          className="w-full h-full object-cover object-center brightness-[0.28] scale-105 transform motion-safe:animate-pulse motion-safe:duration-[10000ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg/90 via-transparent to-brand-bg/90" />
        {/* Ambient gold glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Live status badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-surface/90 border border-brand-gold/30 backdrop-blur-md mb-8 animate-fade-in shadow-gold-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs uppercase tracking-wider text-gray-300 font-medium">
            Центр Москвы • Есть свободные слоты на сегодня
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-white mb-6 uppercase leading-[1.08]">
          Искусство формы. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-bronze">
            Характер деталей.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-300 font-light mb-10 leading-relaxed">
          Премиальный барбершоп и закрытый мужской клуб. Авторские стрижки, королевское бритье опасной бритвой и сервис, возведенный в абсолют.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-brand-gold text-black font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:bg-brand-gold-light hover:shadow-gold-glow active:scale-95 flex items-center justify-center gap-3 group"
          >
            <Calendar className="w-5 h-5 text-black group-hover:rotate-6 transition-transform" />
            <span>Записаться онлайн за 60 сек</span>
            <ChevronRight className="w-4 h-4 text-black/70 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-brand-surface/80 hover:bg-brand-elevated text-gray-200 border border-white/10 hover:border-brand-gold/40 font-semibold uppercase tracking-wider text-sm transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Прайс-лист и услуги</span>
          </a>
        </div>

        {/* Quick Social Proof & Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 w-full border-t border-white/10 pt-8">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-1 text-brand-gold mb-1">
              <Star className="w-4 h-4 fill-brand-gold text-brand-gold" />
              <span className="font-bold text-white text-lg">4.98</span>
              <span className="text-xs text-gray-400">/ 5.0</span>
            </div>
            <span className="text-xs text-gray-400">540+ отзывов на картах</span>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-1.5 text-white mb-1">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              <span className="font-bold text-lg">100%</span>
            </div>
            <span className="text-xs text-gray-400">Стерилизация по СанПиН</span>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-1.5 text-white mb-1">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <span className="font-bold text-lg">Top 1%</span>
            </div>
            <span className="text-xs text-gray-400">Мастера со стажем от 5 лет</span>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-1.5 text-white mb-1">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="font-bold text-lg">Центр</span>
            </div>
            <span className="text-xs text-gray-400">Кузнецкий Мост + парковка</span>
          </div>
        </div>
      </div>
    </section>
  );
};
