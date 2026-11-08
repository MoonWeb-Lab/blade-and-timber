import React from 'react';
import { Star, MessageSquareQuote, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-brand-bg relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-elevated border border-brand-gold/30 text-brand-gold text-xs font-semibold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
            <span>Репутация & Доверие</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-4">
            Отзывы наших гостей
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Средняя оценка 4.98 на основе более 540 подтвержденных визитов на Яндекс.Картах и 2ГИС.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-brand-card border border-white/5 p-7 flex flex-col justify-between relative hover:border-brand-gold/30 transition-all shadow-lg"
            >
              <div>
                {/* Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-brand-gold/40" />
                </div>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-light italic">
                  «{item.comment}»
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{item.author}</span>
                    <span title="Подтвержденный визит">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    </span>
                  </h4>
                  <p className="text-xs text-brand-gold mt-0.5">
                    {item.service}
                  </p>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    Мастер: {item.masterName}
                  </p>
                </div>
                <span className="text-xs text-gray-500 whitespace-nowrap">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
