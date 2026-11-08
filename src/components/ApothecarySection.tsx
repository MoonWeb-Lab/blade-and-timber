import React, { useState } from 'react';
import { ShoppingBag, Star, Check, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import { GroomingProduct } from '../types';

export const ApothecarySection: React.FC = () => {
  const [reservedIds, setReservedIds] = useState<string[]>([]);

  const handleToggleReserve = (product: GroomingProduct) => {
    if (reservedIds.includes(product.id)) {
      setReservedIds(reservedIds.filter((id) => id !== product.id));
    } else {
      setReservedIds([...reservedIds, product.id]);
    }
  };

  return (
    <section id="shop" className="py-24 bg-brand-surface/40 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-elevated border border-brand-gold/30 text-brand-gold text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Премиальная Линейка</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-4">
            Apothecary & Уход
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Косметика, разработанная на натуральных маслах и растительных экстрактах. Забронируйте продукт онлайн — мастер подготовит его к вашему приходу.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => {
            const isReserved = reservedIds.includes(product.id);
            return (
              <div
                key={product.id}
                className="group rounded-2xl bg-brand-card border border-white/5 hover:border-brand-gold/40 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 w-full overflow-hidden bg-brand-elevated">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-gray-300">
                      {product.category} • {product.volume}
                    </div>
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/80 backdrop-blur-md border border-brand-gold/30 flex items-center gap-1 text-xs text-white font-bold">
                      <Star className="w-3 h-3 fill-brand-gold text-brand-gold" />
                      <span>{product.rating}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-xs uppercase tracking-wider text-brand-gold font-semibold">
                      {product.brand}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1 mb-3 font-display">
                      {product.name}
                    </h3>
                    <div className="text-2xl font-bold text-brand-gold font-mono">
                      {product.price.toLocaleString('ru-RU')} ₽
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => handleToggleReserve(product)}
                    className={`w-full py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 ${
                      isReserved
                        ? 'bg-emerald-600 text-white'
                        : 'bg-brand-elevated hover:bg-brand-gold text-gray-200 hover:text-black group-hover:bg-brand-gold group-hover:text-black'
                    }`}
                  >
                    {isReserved ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Забронировано к визиту</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Отложить к стрижке</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
