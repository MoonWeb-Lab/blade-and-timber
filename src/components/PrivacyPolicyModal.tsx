import React, { useEffect } from 'react';
import { X, ShieldCheck, Lock, Eye, FileText, Check } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-brand-surface border border-brand-gold/40 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-brand-border flex items-center justify-between bg-brand-card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-brand-elevated border border-brand-gold/30 flex items-center justify-center text-brand-gold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">
                152-ФЗ & Стандарты Безопасности
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white font-display uppercase tracking-tight">
                Политика конфиденциальности
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-brand-elevated text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
          {/* Section 1 */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4 text-brand-gold" />
              1. Общие положения
            </h4>
            <p>
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональной информации пользователей веб-сайта барбершопа <strong>Blade & Timber</strong> (ООО «Блейд энд Тимбер», ИНН 7702849102, адрес: г. Москва, ул. Кузнецкий Мост, д. 14).
            </p>
            <p className="mt-2">
              Мы строго соблюдаем требования Федерального закона Российской Федерации № 152-ФЗ «О персональных данных» и обеспечиваем полную конфиденциальность переданных сведений.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
              <Eye className="w-4 h-4 text-brand-gold" />
              2. Состав собираемых данных
            </h4>
            <p>При использовании сервиса онлайн-записи и формы бронирования мы обрабатываем:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
              <li>Имя пользователя (для обращения и персонализации обслуживания);</li>
              <li>Контактный номер телефона (для отправки SMS-кодов и напоминаний о записи);</li>
              <li>Выбранные услуги, дату и время визита, имя предпочитаемого мастера;</li>
              <li>Индивидуальные пожелания (напитки в баре, пропуск на парковку);</li>
              <li>Технические метаданные (файлы cookie, IP-адрес, тип браузера и устройства).</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
              <Lock className="w-4 h-4 text-brand-gold" />
              3. Цели сбора и безопасность
            </h4>
            <p>
              Данные собираются исключительно в целях формирования бронирования, сервисных уведомлений, предотвращения спам-записей и предоставления скидок клуба резидентов.
            </p>
            <p className="mt-2">
              Мы не продаем, не передаем и не раскрываем ваши данные третьим лицам или рекламным сетям. Все данные передаются по защищенному шифрованному протоколу TLS/SSL.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              4. Политика использования файлов Cookie
            </h4>
            <p>
              Наш сайт применяет файлы cookie для запоминания выбранных настроек бронирования, сохранения сессии и анонимного анализа посещаемости. Вы можете отключить cookie в настройках своего браузера в любое время.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
              <Check className="w-4 h-4 text-brand-gold" />
              5. Права пользователя и отзыв согласия
            </h4>
            <p>
              Вы имеете право в любой момент запросить информацию о хранящихся персональных данных, потребовать их уточнения, блокирования или полного удаления из базы сервиса.
            </p>
            <p className="mt-2">
              Для отзыва согласия свяжитесь с администратором клуба: <strong className="text-brand-gold">+7 (495) 890-21-44</strong> или по адресу: <strong className="text-white">privacy@blade-timber.demo</strong>.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-brand-border bg-brand-card flex items-center justify-between">
          <span className="text-[11px] text-gray-500">
            Редакция от 8 ноября 2026 года
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg bg-brand-gold text-black text-xs font-bold uppercase tracking-wider hover:bg-brand-gold-light transition-colors"
          >
            Понятно
          </button>
        </div>
      </div>
    </div>
  );
};
