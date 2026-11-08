import React from 'react';
import { Star, Award, Scissors, Calendar } from 'lucide-react';
import { MASTERS } from '../data/mockData';
import { Master } from '../types';

interface MastersSectionProps {
  onSelectMaster: (master: Master) => void;
}

export const MastersSection: React.FC<MastersSectionProps> = ({ onSelectMaster }) => {
  return (
    <section id="masters" className="py-24 bg-brand-surface/40 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-elevated border border-brand-gold/30 text-brand-gold text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Команда Профессионалов</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-4">
            Топ-барберы клуба
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Каждый мастер проходит строгий внутренний экзамен по геометрии стрижек и протоколам сервиса перед допуском к креслу.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MASTERS.map((master) => (
            <div
              key={master.id}
              className="group rounded-xl bg-brand-card border border-white/5 hover:border-brand-gold/40 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1 shadow-lg"
            >
              <div>
                {/* Photo container */}
                <div className="relative h-72 w-full overflow-hidden bg-brand-elevated">
                  <img
                    src={master.avatar}
                    alt={master.name}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent opacity-90" />
                  
                  {/* Rating badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-brand-gold/30 flex items-center gap-1.5 text-xs font-bold text-white">
                    <Star className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                    <span>{master.rating}</span>
                    <span className="text-[10px] text-gray-400">({master.reviewsCount})</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-gold transition-colors font-display">
                    {master.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold mt-0.5 mb-2">
                    {master.role}
                  </p>

                  <div className="text-xs text-gray-400 flex items-center gap-1 mb-4">
                    <Scissors className="w-3 h-3 text-brand-gold" />
                    <span>Опыт работы: <strong className="text-white">{master.experienceYears} лет</strong></span>
                  </div>

                  {/* Specialties tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {master.specialties.map((spec, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded bg-brand-elevated text-gray-300 border border-white/5"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onSelectMaster(master)}
                  className="w-full py-2.5 rounded-lg bg-brand-elevated hover:bg-brand-gold text-gray-200 hover:text-black text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 group-hover:bg-brand-gold group-hover:text-black"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Выбрать мастера</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
