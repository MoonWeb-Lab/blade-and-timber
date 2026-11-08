import React, { useState, useEffect } from 'react';
import { Cookie, X, Check, Shield } from 'lucide-react';

interface CookieBannerProps {
  onOpenPrivacy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPrivacy }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('blade_timber_cookie_consent');
    if (!consent) {
      // Small delay for smooth entry after page loads
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('blade_timber_cookie_consent', 'all');
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem('blade_timber_cookie_consent', 'essential');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-40 animate-in slide-in-from-bottom duration-300">
      <div className="rounded-2xl bg-brand-surface/95 backdrop-blur-xl border border-brand-gold/30 p-5 shadow-2xl shadow-black/80 flex flex-col gap-4 text-xs">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-elevated border border-brand-gold/30 flex items-center justify-center text-brand-gold shrink-0">
              <Cookie className="w-4 h-4" />
            </div>
            <h4 className="text-white font-bold text-sm font-display uppercase tracking-wider">
              Файлы Cookie & Приватность
            </h4>
          </div>
          <button
            onClick={handleAcceptEssential}
            className="text-gray-400 hover:text-white p-1 rounded transition-colors"
            title="Закрыть"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-gray-300 leading-relaxed font-light">
          Мы используем cookie-файлы и технические метаданные для корректной работы онлайн-записи и персонализации обслуживания. Подробнее — в нашей{' '}
          <button
            onClick={onOpenPrivacy}
            className="text-brand-gold hover:underline font-medium inline-flex items-center gap-1"
          >
            <span>Политике конфиденциальности</span>
          </button>
          .
        </p>

        <div className="flex items-center gap-2 pt-1">
          <button
            onClick={handleAcceptAll}
            className="flex-1 py-2.5 px-4 rounded-lg bg-brand-gold hover:bg-brand-gold-light text-black font-bold uppercase tracking-wider text-[11px] transition-colors flex items-center justify-center gap-1.5 shadow-gold-sm"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Принять все</span>
          </button>
          <button
            onClick={handleAcceptEssential}
            className="py-2.5 px-3 rounded-lg bg-brand-elevated hover:bg-white/10 text-gray-300 hover:text-white font-semibold uppercase tracking-wider text-[11px] transition-colors flex items-center justify-center gap-1 border border-white/5"
          >
            <Shield className="w-3 h-3 text-gray-400" />
            <span>Необходимые</span>
          </button>
        </div>
      </div>
    </div>
  );
};
