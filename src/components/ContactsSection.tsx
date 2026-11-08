import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Check, Copy } from 'lucide-react';

export const ContactsSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('г. Москва, ул. Кузнецкий Мост, 14');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contacts" className="py-24 bg-brand-surface/50 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Info Column */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-elevated border border-brand-gold/30 text-brand-gold text-xs font-semibold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>Локация & Атмосфера</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-6">
              Ждем вас в клубе
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
              Мы расположены в историческом центре Москвы. Удобный заезд с Театрального проезда и охраняемая подземная парковка для наших клиентов.
            </p>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-card border border-white/10 flex items-center justify-center text-brand-gold shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 uppercase tracking-wider">Адрес</span>
                    <button
                      onClick={handleCopyAddress}
                      className="text-xs text-brand-gold hover:underline flex items-center gap-1"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Скопировано' : 'Скопировать'}</span>
                    </button>
                  </div>
                  <p className="text-base font-semibold text-white mt-0.5">
                    г. Москва, ул. Кузнецкий Мост, 14
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    м. Кузнецкий Мост (2 минуты пешком), м. Лубянка
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-card border border-white/10 flex items-center justify-center text-brand-gold shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Режим работы</span>
                  <p className="text-base font-semibold text-white mt-0.5">
                    Ежедневно с 10:00 до 22:00
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Без выходных и перерывов на обед
                  </p>
                </div>
              </div>

              {/* Contacts */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-card border border-white/10 flex items-center justify-center text-brand-gold shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Телефон и мессенджеры</span>
                  <a
                    href="tel:+74958902144"
                    className="block text-base font-semibold text-brand-gold hover:text-brand-gold-light mt-0.5 transition-colors"
                  >
                    +7 (495) 890-21-44
                  </a>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Telegram / WhatsApp для быстрой связи с администратором
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map Card Preview */}
          <div className="relative rounded-2xl overflow-hidden border border-brand-gold/30 shadow-2xl h-[420px] bg-brand-card flex flex-col justify-end p-8 group">
            {/* Visual map representation */}
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
              alt="Blade & Timber Map Location"
              className="absolute inset-0 w-full h-full object-cover brightness-[0.35] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Pin Graphic */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-brand-gold text-black flex items-center justify-center shadow-gold-glow animate-bounce">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="mt-2 px-3 py-1 rounded-md bg-black/90 border border-brand-gold/40 text-xs font-bold text-white shadow-lg">
                Blade & Timber
              </div>
            </div>

            {/* Bottom Floating Card */}
            <div className="relative z-10 bg-brand-surface/90 backdrop-blur-md rounded-xl p-4 border border-white/10 flex items-center justify-between">
              <div>
                <p className="text-xs text-brand-gold font-semibold uppercase">Охраняемая парковка</p>
                <p className="text-xs text-gray-300">Сообщите номер авто при записи — откроем шлагбаум</p>
              </div>
              <a
                href="https://yandex.ru/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-brand-gold text-black text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 hover:bg-brand-gold-light transition-colors shrink-0 ml-3"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Маршрут</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
