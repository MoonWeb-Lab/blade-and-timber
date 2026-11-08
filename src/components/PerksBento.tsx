import React from 'react';
import { Coffee, ShieldCheck, Sparkles, Tv, Wind, HeartHandshake } from 'lucide-react';

export const PerksBento: React.FC = () => {
  return (
    <section className="py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-elevated border border-brand-gold/30 text-brand-gold text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Стандарты Гостеприимства</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-4">
            Больше, чем просто стрижка
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Мы создали пространство, куда приятно прийти за полчаса до записи: выпить хороший эспрессо или односолодовый виски, перезагрузиться и обсудить дела.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Item 1: Large Feature */}
          <div className="md:col-span-2 rounded-2xl bg-gradient-to-br from-brand-card to-brand-surface border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden group hover:border-brand-gold/40 transition-all">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-brand-elevated border border-brand-gold/30 flex items-center justify-center text-brand-gold mb-6 shadow-gold-sm">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display uppercase mb-3">
                Премиальный бар & сигарный лаунж
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                Для каждого гостя всегда бесплатно: свежесваренный спешелти кофе от лучших обжарщиков, крафтовый чай или шот выдержанного односолодового скотча. Никаких доплат — это наш стандарт сервиса.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-brand-gold">
              <span>Espresso • Flat White • Single Malt • Tonic</span>
            </div>
          </div>

          {/* Bento Item 2: Sanitization */}
          <div className="rounded-2xl bg-brand-card border border-white/10 p-8 flex flex-col justify-between group hover:border-brand-gold/40 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-elevated border border-brand-gold/30 flex items-center justify-center text-brand-gold mb-6 shadow-gold-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-display uppercase mb-3">
                Медицинская стерилизация
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                4 этапа обработки инструмента: дезинфицирующий раствор, ультразвуковая ванна, сушка и медицинский автоклав в крафт-пакете, который вскрывается прямо при вас.
              </p>
            </div>
            <div className="mt-6 text-xs text-gray-500 uppercase tracking-wider">
              100% безопасность по СанПиН
            </div>
          </div>

          {/* Bento Item 3: Media & Gaming */}
          <div className="rounded-2xl bg-brand-card border border-white/10 p-8 flex flex-col justify-between group hover:border-brand-gold/40 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-elevated border border-brand-gold/30 flex items-center justify-center text-brand-gold mb-6 shadow-gold-sm">
                <Tv className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-display uppercase mb-3">
                Зона отдыха & PS5
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Кожаные диваны Chesterfield, 75-дюймовый 4K экран с новейшими играми (FIFA, UFC) и спортивными трансляциями.
              </p>
            </div>
            <div className="mt-6 text-xs text-gray-500 uppercase tracking-wider">
              Зона ожидания клубного уровня
            </div>
          </div>

          {/* Bento Item 4: Ventilation & Comfort */}
          <div className="rounded-2xl bg-brand-card border border-white/10 p-8 flex flex-col justify-between group hover:border-brand-gold/40 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-elevated border border-brand-gold/30 flex items-center justify-center text-brand-gold mb-6 shadow-gold-sm">
                <Wind className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-display uppercase mb-3">
                Климат & Аромадизайн
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Приточно-вытяжная вентиляция с HEPA-фильтрами и ненавязчивый древесно-табачный аромат от селективного парфюмерного дома.
              </p>
            </div>
            <div className="mt-6 text-xs text-gray-500 uppercase tracking-wider">
              Свежий воздух без запаха лаков
            </div>
          </div>

          {/* Bento Item 5: Loyalty Club */}
          <div className="rounded-2xl bg-brand-card border border-white/10 p-8 flex flex-col justify-between group hover:border-brand-gold/40 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-elevated border border-brand-gold/30 flex items-center justify-center text-brand-gold mb-6 shadow-gold-sm">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-display uppercase mb-3">
                Закрытый клуб резидентов
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Кешбэк 10% на все услуги с первого визита, закрытые дегустации виски и персональный консьерж-сервис для бронирования.
              </p>
            </div>
            <div className="mt-6 text-xs text-gray-500 uppercase tracking-wider">
              Привилегии постоянных гостей
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
