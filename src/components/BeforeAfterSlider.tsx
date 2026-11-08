import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const width = rect.width;
      const percentage = Math.min(Math.max((x / width) * 100, 0), 100);
      setSliderPosition(percentage);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="transformation" className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-elevated border border-brand-gold/30 text-brand-gold text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Преображение & Геометрия</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-4">
            Трансформация образа
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Потяните ползунок, чтобы оценить точность линий, плавность перехода (fade) и моделирование бороды.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[380px] sm:h-[500px] md:h-[560px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-brand-gold/30 shadow-2xl bg-brand-surface"
          >
            {/* After Image (Full width background) */}
            <img
              src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1400&q=80"
              alt="После визита в Blade & Timber"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            />
            <div className="absolute top-5 right-5 z-20 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-brand-gold/40 text-brand-gold text-xs font-bold uppercase tracking-wider">
              После стрижки
            </div>

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1400&q=80"
                alt="До визита"
                className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%',
                }}
              />
              <div className="absolute top-5 left-5 z-20 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-gray-300 text-xs font-bold uppercase tracking-wider">
                До визита
              </div>
            </div>

            {/* Vertical Divider Line with Grab Handle */}
            <div
              className="absolute top-0 bottom-0 z-30 w-0.5 bg-brand-gold pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-brand-gold border-2 border-black flex items-center justify-center text-black shadow-gold-glow pointer-events-auto cursor-ew-resize hover:scale-110 active:scale-95 transition-transform">
                <MoveHorizontal className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Helper Text */}
          <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-500 font-medium">
            <MoveHorizontal className="w-4 h-4 text-brand-gold" />
            <span>Двигайте ползунок влево и вправо для сравнения</span>
          </div>
        </div>
      </div>
    </section>
  );
};
