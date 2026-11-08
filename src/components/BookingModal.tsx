import React, { useState, useEffect } from 'react';
import { X, Clock, User, Phone, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import { SERVICES, MASTERS, TIME_SLOTS } from '../data/mockData';
import { Service, Master, BookingState } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: Service | null;
  preselectedMaster?: Master | null;
}

interface DateSlot {
  dateStr: string;
  dayName: string;
  dayNum: string;
  monthName: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  preselectedMaster,
}) => {
  const [booking, setBooking] = useState<BookingState>({
    step: 1,
    selectedServiceId: null,
    selectedMasterId: null,
    selectedDate: null,
    selectedTime: null,
    customerName: '',
    customerPhone: '',
    customerNotes: '',
  });

  const [datesList, setDatesList] = useState<DateSlot[]>([]);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);

  // Generate next 7 days for the interactive calendar
  useEffect(() => {
    const dates: DateSlot[] = [];
    const today = new Date();
    const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];

    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(today.getDate() + i);
      const dayName = i === 0 ? 'Сегодня' : i === 1 ? 'Завтра' : days[d.getDay()];
      const dayNum = d.getDate().toString();
      const monthName = months[d.getMonth()];
      const dateStr = `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;
      dates.push({ dateStr, dayName, dayNum, monthName });
    }
    setDatesList(dates);
    if (!booking.selectedDate && dates[0]) {
      setBooking((prev) => ({ ...prev, selectedDate: dates[0].dateStr }));
    }
  }, []);

  // Sync preselected options
  useEffect(() => {
    if (preselectedService) {
      setBooking((prev) => ({
        ...prev,
        selectedServiceId: preselectedService.id,
        step: prev.selectedMasterId ? 3 : 2,
      }));
    }
    if (preselectedMaster) {
      setBooking((prev) => ({
        ...prev,
        selectedMasterId: preselectedMaster.id,
        step: prev.selectedServiceId ? 3 : 1,
      }));
    }
  }, [preselectedService, preselectedMaster]);

  // Handle ESC key to close
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

  const currentService = SERVICES.find((s) => s.id === booking.selectedServiceId);
  const currentMaster = MASTERS.find((m) => m.id === booking.selectedMasterId);

  const validateStep4 = () => {
    let valid = true;
    if (!booking.customerName.trim()) {
      setNameError('Укажите ваше имя');
      valid = false;
    } else {
      setNameError(null);
    }

    if (!booking.customerPhone.trim() || booking.customerPhone.length < 10) {
      setPhoneError('Введите корректный номер телефона');
      valid = false;
    } else {
      setPhoneError(null);
    }

    return valid;
  };

  const handleNextStep = () => {
    if (booking.step === 1 && !booking.selectedServiceId) return;
    if (booking.step === 2 && !booking.selectedMasterId) return;
    if (booking.step === 3 && (!booking.selectedDate || !booking.selectedTime)) return;
    if (booking.step === 4) {
      if (!validateStep4()) return;
      setBooking((prev) => ({ ...prev, step: 5 }));
      return;
    }
    setBooking((prev) => ({ ...prev, step: prev.step + 1 }));
  };

  const handlePrevStep = () => {
    if (booking.step > 1 && booking.step < 5) {
      setBooking((prev) => ({ ...prev, step: prev.step - 1 }));
    }
  };

  const resetForm = () => {
    setBooking({
      step: 1,
      selectedServiceId: null,
      selectedMasterId: null,
      selectedDate: datesList[0]?.dateStr || null,
      selectedTime: null,
      customerName: '',
      customerPhone: '',
      customerNotes: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-brand-surface border border-brand-gold/40 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-brand-border flex items-center justify-between bg-brand-card">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-gold" />
              <span className="text-xs uppercase tracking-wider text-brand-gold font-bold">
                {booking.step === 5 ? 'Успешно' : `Шаг ${booking.step} из 4`}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white font-display uppercase tracking-tight mt-0.5">
              {booking.step === 1 && 'Выберите услугу'}
              {booking.step === 2 && 'Выберите барбера'}
              {booking.step === 3 && 'Дата и время визита'}
              {booking.step === 4 && 'Контактные данные'}
              {booking.step === 5 && 'Запись подтверждена'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-brand-elevated text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Line */}
        {booking.step < 5 && (
          <div className="h-1 bg-brand-elevated w-full">
            <div
              className="h-full bg-gradient-to-r from-brand-gold to-brand-gold-light transition-all duration-300"
              style={{ width: `${(booking.step / 4) * 100}%` }}
            />
          </div>
        )}

        {/* Body content */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {/* STEP 1: Select Service */}
          {booking.step === 1 && (
            <div className="space-y-3">
              {SERVICES.map((s) => {
                const isSelected = booking.selectedServiceId === s.id;
                return (
                  <div
                    key={s.id}
                    onClick={() => setBooking((prev) => ({ ...prev, selectedServiceId: s.id }))}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'border-brand-gold bg-brand-elevated/90 ring-1 ring-brand-gold shadow-gold-sm'
                        : 'border-white/5 bg-brand-card hover:border-white/20'
                    }`}
                  >
                    <div className="pr-4">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-white font-display">{s.title}</h4>
                        {s.popular && (
                          <span className="text-[10px] uppercase font-bold text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded">
                            Хит
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-1">{s.description}</p>
                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                        <Clock className="w-3.5 h-3.5 text-brand-gold" />
                        <span>{s.duration} мин</span>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-base font-bold text-brand-gold font-mono">
                        {s.price.toLocaleString('ru-RU')} ₽
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center mt-2 ml-auto ${
                          isSelected
                            ? 'border-brand-gold bg-brand-gold text-black'
                            : 'border-white/20'
                        }`}
                      >
                        {isSelected && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* STEP 2: Select Master */}
          {booking.step === 2 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MASTERS.map((m) => {
                const isSelected = booking.selectedMasterId === m.id;
                return (
                  <div
                    key={m.id}
                    onClick={() => setBooking((prev) => ({ ...prev, selectedMasterId: m.id }))}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-4 ${
                      isSelected
                        ? 'border-brand-gold bg-brand-elevated/90 ring-1 ring-brand-gold shadow-gold-sm'
                        : 'border-white/5 bg-brand-card hover:border-white/20'
                    }`}
                  >
                    <img
                      src={m.avatar}
                      alt={m.name}
                      className="w-14 h-14 rounded-full object-cover shrink-0 border border-white/10"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-white truncate font-display">{m.name}</h4>
                      <p className="text-xs text-brand-gold font-semibold truncate">{m.role}</p>
                      <p className="text-[11px] text-gray-400 mt-0.5">Рейтинг: ⭐ {m.rating}</p>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'border-brand-gold bg-brand-gold text-black'
                          : 'border-white/20'
                      }`}
                    >
                      {isSelected && <CheckCircle2 className="w-4 h-4" />}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* STEP 3: Select Date & Time */}
          {booking.step === 3 && (
            <div className="space-y-6">
              {/* Dates Horizontal Selector */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">
                  Выберите день:
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                  {datesList.map((item) => {
                    const isSelected = booking.selectedDate === item.dateStr;
                    return (
                      <button
                        key={item.dateStr}
                        onClick={() => setBooking((prev) => ({ ...prev, selectedDate: item.dateStr }))}
                        className={`p-3 rounded-xl border flex flex-col items-center justify-center transition-all ${
                          isSelected
                            ? 'border-brand-gold bg-brand-gold text-black shadow-gold-sm font-bold'
                            : 'border-white/5 bg-brand-card text-gray-300 hover:border-white/20'
                        }`}
                      >
                        <span className={`text-[11px] uppercase ${isSelected ? 'text-black' : 'text-gray-400'}`}>
                          {item.dayName}
                        </span>
                        <span className="text-lg font-bold my-0.5">{item.dayNum}</span>
                        <span className={`text-[10px] ${isSelected ? 'text-black/80' : 'text-gray-500'}`}>
                          {item.monthName}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">
                  Доступное время:
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5">
                  {TIME_SLOTS.map((slot) => {
                    const isSelected = booking.selectedTime === slot;
                    return (
                      <button
                        key={slot}
                        onClick={() => setBooking((prev) => ({ ...prev, selectedTime: slot }))}
                        className={`py-2.5 rounded-lg border text-xs font-semibold transition-all ${
                          isSelected
                            ? 'border-brand-gold bg-brand-gold text-black shadow-gold-sm font-bold'
                            : 'border-white/5 bg-brand-card text-gray-300 hover:border-white/20'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Customer Details & Summary */}
          {booking.step === 4 && (
            <div className="space-y-6">
              {/* Order summary card */}
              <div className="p-4 rounded-xl bg-brand-card border border-brand-gold/30 space-y-2 text-xs">
                <div className="flex items-center justify-between text-gray-300">
                  <span className="text-gray-400">Услуга:</span>
                  <span className="font-bold text-white">{currentService?.title}</span>
                </div>
                <div className="flex items-center justify-between text-gray-300">
                  <span className="text-gray-400">Барбер:</span>
                  <span className="font-bold text-white">{currentMaster?.name}</span>
                </div>
                <div className="flex items-center justify-between text-gray-300">
                  <span className="text-gray-400">Дата и время:</span>
                  <span className="font-bold text-brand-gold">
                    {booking.selectedDate} в {booking.selectedTime}
                  </span>
                </div>
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-sm">
                  <span className="font-bold text-white">К оплате в салоне:</span>
                  <span className="font-bold text-brand-gold font-mono text-base">
                    {currentService?.price.toLocaleString('ru-RU')} ₽
                  </span>
                </div>
              </div>

              {/* Form inputs */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-1.5">
                    Ваше имя *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Алексей"
                      value={booking.customerName}
                      onChange={(e) => setBooking((prev) => ({ ...prev, customerName: e.target.value }))}
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-brand-card border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold text-sm transition-colors"
                    />
                  </div>
                  {nameError && <p className="text-red-400 text-xs mt-1">{nameError}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-1.5">
                    Номер телефона *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      placeholder="+7 (999) 000-00-00"
                      value={booking.customerPhone}
                      onChange={(e) => setBooking((prev) => ({ ...prev, customerPhone: e.target.value }))}
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-brand-card border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold text-sm transition-colors"
                    />
                  </div>
                  {phoneError && <p className="text-red-400 text-xs mt-1">{phoneError}</p>}
                  <p className="text-[11px] text-gray-500 mt-1">
                    Отправим SMS с подтверждением записи и ссылкой на отмену при необходимости.
                  </p>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-1.5">
                    Пожелания к стрижке или напитку (необязательно)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Например: кофе без сахара, нужен пропуск на авто"
                    value={booking.customerNotes}
                    onChange={(e) => setBooking((prev) => ({ ...prev, customerNotes: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-lg bg-brand-card border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold text-sm transition-colors"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: Success Confirmation */}
          {booking.step === 5 && (
            <div className="py-6 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-brand-gold/20 border border-brand-gold text-brand-gold flex items-center justify-center mb-6 shadow-gold-glow animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h4 className="text-2xl font-bold text-white font-display uppercase mb-2">
                Вы успешно записаны!
              </h4>
              <p className="text-gray-400 text-sm max-w-md mb-6">
                Номер бронирования: <strong className="text-brand-gold">#BT-{Math.floor(1000 + Math.random() * 9000)}</strong>.
                Мы отправили напоминание на номер <span className="text-white font-semibold">{booking.customerPhone}</span>.
              </p>

              <div className="w-full max-w-md p-4 rounded-xl bg-brand-card border border-white/10 text-left text-xs space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-400">Гость:</span>
                  <span className="text-white font-medium">{booking.customerName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Услуга:</span>
                  <span className="text-white font-medium">{currentService?.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Мастер:</span>
                  <span className="text-white font-medium">{currentMaster?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Время:</span>
                  <span className="text-brand-gold font-bold">
                    {booking.selectedDate} в {booking.selectedTime}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Адрес:</span>
                  <span className="text-white font-medium">ул. Кузнецкий Мост, 14</span>
                </div>
              </div>

              <button
                onClick={resetForm}
                className="px-8 py-3 rounded-lg bg-brand-gold text-black text-xs font-bold uppercase tracking-wider hover:bg-brand-gold-light transition-colors"
              >
                Отлично, закрыть
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        {booking.step < 5 && (
          <div className="p-4 sm:p-5 border-t border-brand-border bg-brand-card flex items-center justify-between">
            {booking.step > 1 ? (
              <button
                onClick={handlePrevStep}
                className="px-4 py-2.5 rounded-lg bg-brand-elevated text-gray-300 hover:text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Назад</span>
              </button>
            ) : (
              <div />
            )}

            <button
              onClick={handleNextStep}
              disabled={
                (booking.step === 1 && !booking.selectedServiceId) ||
                (booking.step === 2 && !booking.selectedMasterId) ||
                (booking.step === 3 && (!booking.selectedDate || !booking.selectedTime))
              }
              className="px-6 py-2.5 rounded-lg bg-brand-gold disabled:opacity-40 disabled:cursor-not-allowed text-black text-xs font-bold uppercase tracking-wider hover:bg-brand-gold-light transition-all shadow-gold-sm flex items-center gap-2"
            >
              <span>{booking.step === 4 ? 'Подтвердить запись' : 'Продолжить'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
