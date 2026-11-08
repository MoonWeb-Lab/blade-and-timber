import React, { useState } from 'react';
import { Clock, Check, Sparkles, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/mockData';
import { Service } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: Service) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'hair' | 'beard' | 'combo' | 'spa'>('all');

  const categories = [
    { id: 'all', label: 'Все услуги' },
    { id: 'hair', label: 'Стрижки' },
    { id: 'beard', label: 'Борода и бритье' },
    { id: 'combo', label: 'Комплексы' },
    { id: 'spa', label: 'SPA & Уход' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-brand-surface/60 border-t border-b border-brand-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-elevated border border-brand-gold/30 text-brand-gold text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Мастерство & Ритуалы</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-4">
            Услуги и стоимость
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            В каждый сервис включены: консультация, индивидуальный подбор формы, премиальная косметика, напитки из бара и безупречный результат.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-brand-gold text-black shadow-gold-sm font-bold'
                  : 'bg-brand-card text-gray-400 hover:text-white border border-white/5 hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`group relative rounded-xl bg-brand-card p-6 border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
                service.popular
                  ? 'border-brand-gold/40 shadow-dark-card ring-1 ring-brand-gold/20'
                  : 'border-white/5 hover:border-brand-gold/30'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>Популярный выбор</span>
                </div>
              )}

              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-gold transition-colors font-display">
                    {service.title}
                  </h3>
                  <div className="text-right shrink-0">
                    <span className="text-xl font-bold text-brand-gold font-mono">
                      {service.price.toLocaleString('ru-RU')} ₽
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
                  <Clock className="w-3.5 h-3.5 text-brand-gold" />
                  <span>{service.duration} минут</span>
                </div>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-brand-gold" /> Фиксированная цена
                </span>
                <button
                  onClick={() => onSelectService(service)}
                  className="px-4 py-2 rounded-lg bg-brand-elevated hover:bg-brand-gold text-gray-200 hover:text-black text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 group-hover:bg-brand-gold group-hover:text-black"
                >
                  <span>Выбрать</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
