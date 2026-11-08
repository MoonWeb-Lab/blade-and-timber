import React from 'react';
import { Scissors, Phone, MapPin, Clock, ArrowUp, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-bg border-t border-brand-border text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-brand-surface border border-brand-gold/40 flex items-center justify-center text-brand-gold shadow-gold-sm">
                <Scissors className="w-4 h-4 -rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="font-display tracking-widest text-base font-bold text-white uppercase">
                  Blade & Timber
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-brand-gold/80 -mt-0.5">
                  Grooming Club
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              Премиальный барбершоп с авторским подходом к мужскому стилю. Стрижки, бритье, уход и закрытое мужское сообщество.
            </p>
            <div className="text-xs text-brand-gold font-mono">
              ИНН: 7702849102 • Лицензия № 4819
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-bold mb-4">
              Навигация
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-brand-gold transition-colors">Услуги и цены</a>
              </li>
              <li>
                <a href="#transformation" className="hover:text-brand-gold transition-colors">До / После</a>
              </li>
              <li>
                <a href="#masters" className="hover:text-brand-gold transition-colors">Наши барберы</a>
              </li>
              <li>
                <a href="#shop" className="hover:text-brand-gold transition-colors">Косметика и уход</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-brand-gold transition-colors">Отзывы клиентов</a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-bold mb-4">
              Время работы
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Пн — Вс: 10:00 — 22:00</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
                <span>г. Москва, ул. Кузнецкий Мост, 14</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a href="tel:+74958902144" className="hover:text-brand-gold transition-colors">
                  +7 (495) 890-21-44
                </a>
              </div>
            </div>
          </div>

          {/* MoonWeb Lab Badge & Attribution */}
          <div className="bg-brand-surface/60 rounded-xl p-5 border border-white/5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-brand-elevated text-brand-gold text-[10px] font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3" />
                <span>MoonWeb Lab Showcase</span>
              </div>
              <p className="text-xs text-gray-300 font-medium">
                Концепт цифрового сервиса с высокой конверсией для премиального ритейла и сферы услуг.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
              <span className="text-[11px] text-gray-400">© 2026 MoonWeb Lab</span>
              <button
                onClick={scrollToTop}
                className="w-8 h-8 rounded-lg bg-brand-elevated hover:bg-brand-gold text-gray-400 hover:text-black flex items-center justify-center transition-colors"
                title="Наверх"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2026 Blade & Timber Grooming Club. Все права защищены.</p>
          <div className="flex items-center gap-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Договор оферты</a>
            <a href="#" className="hover:text-white transition-colors">Правила посещения</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
