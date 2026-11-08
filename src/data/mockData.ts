import { Service, Master, Testimonial, GroomingProduct } from '../types';

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Фирменная стрижка Blade & Timber',
    description: 'Мытье головы с массажем, индивидуальный подбор формы с учетом геометрии лица, стрижка ножницами и машинкой, укладка премиальной косметикой.',
    duration: 50,
    price: 3200,
    category: 'hair',
    popular: true,
  },
  {
    id: 's2',
    title: 'Моделирование бороды и усов',
    description: 'Распаривание горячим полотенцем с эфирными маслами, контуринг шаветкой, выравнивание длины, уход с аргановым маслом.',
    duration: 40,
    price: 2400,
    category: 'beard',
    popular: true,
  },
  {
    id: 's3',
    title: 'Комплекс «Gentleman Full Service»',
    description: 'Фирменная стрижка + моделирование бороды + пилинг кожи головы и омолаживающая черная маска для лица.',
    duration: 80,
    price: 4900,
    category: 'combo',
    popular: true,
  },
  {
    id: 's4',
    title: 'Королевское бритье опасной бритвой',
    description: 'Двукратное распаривание, взбитая барсучьим помазком теплая пена, бритье лезвием Feather, холодный компресс и бальзам с сандалом.',
    duration: 45,
    price: 2800,
    category: 'beard',
  },
  {
    id: 's5',
    title: 'Камуфляж седины (волосы или борода)',
    description: 'Естественное тонирование специальным безаммиачным красителем. Возвращает натуральный оттенок за 15 минут без эффекта парика.',
    duration: 30,
    price: 1900,
    category: 'hair',
  },
  {
    id: 's6',
    title: 'Отец + Сын (Семейный визит)',
    description: 'Одновременная стрижка для двоих у топ-барберов. Напитки, PlayStation в зоне ожидания и отличное время вместе.',
    duration: 60,
    price: 5400,
    category: 'combo',
  },
  {
    id: 's7',
    title: 'Detox & SPA уход для кожи головы',
    description: 'Скрабирование с морской солью и эвкалиптом, глубокое очищение пор, тонизирующий лосьон и дарсонвализация волосяных фолликулов.',
    duration: 35,
    price: 2200,
    category: 'spa',
  },
];

export const MASTERS: Master[] = [
  {
    id: 'm1',
    name: 'Александр Громов',
    role: 'Art Director & Шеф-барбер',
    experienceYears: 11,
    rating: 4.98,
    reviewsCount: 342,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    specialties: ['Классический тейпер', 'Королевское бритье', 'Сложная геометрия'],
  },
  {
    id: 'm2',
    name: 'Дмитрий «Рок» Северов',
    role: 'Top Barber',
    experienceYears: 7,
    rating: 4.95,
    reviewsCount: 218,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    specialties: ['Fade любой сложности', 'Моделирование длинных бород', 'Текстурные укладки'],
  },
  {
    id: 'm3',
    name: 'Марк Вагнер',
    role: 'Senior Barber',
    experienceYears: 5,
    rating: 4.91,
    reviewsCount: 164,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    specialties: ['Удлиненные ножницами стрижки', 'Камуфляж седины', 'Mullet & Crop'],
  },
  {
    id: 'm4',
    name: 'Любой свободный мастер',
    role: 'Ближайшее доступное окно',
    experienceYears: 6,
    rating: 4.94,
    reviewsCount: 724,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    specialties: ['Все услуги салона', 'Минимальное время ожидания'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Константин Васильев',
    rating: 5,
    comment: 'Хожу к Александру уже второй год. Лучший фейд в городе, плюс очень приятная атмосфера: хороший кофе, виски, правильный плейлист. Сервис на высоте.',
    date: '3 дня назад',
    service: 'Комплекс «Gentleman Full Service»',
    masterName: 'Александр Громов',
  },
  {
    id: 't2',
    author: 'Илья Мельников',
    rating: 5,
    comment: 'Впервые решился на опасное бритье. Ощущения невероятные, как будто заново родился. Никакого раздражения, кожа гладкая как шелк.',
    date: 'Неделю назад',
    service: 'Королевское бритье опасной бритвой',
    masterName: 'Дмитрий Северов',
  },
  {
    id: 't3',
    author: 'Артем Савельев',
    rating: 5,
    comment: 'Записывался с сыном перед 1 сентября. Мастер нашел контакт с ребенком с первых секунд, подстригли обоих быстро и очень стильно. Респект!',
    date: '2 недели назад',
    service: 'Отец + Сын',
    masterName: 'Марк Вагнер',
  },
];

export const PRODUCTS: GroomingProduct[] = [
  {
    id: 'p1',
    name: 'Масло для бороды «Smoked Sandalwood»',
    brand: 'Blade & Timber Lab',
    category: 'Борода',
    price: 1850,
    volume: '50 мл',
    image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
  },
  {
    id: 'p2',
    name: 'Матовая глина сильной фиксации «Matte Clay»',
    brand: 'Blade & Timber Lab',
    category: 'Волосы',
    price: 2100,
    volume: '100 мл',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
    rating: 5.0,
  },
  {
    id: 'p3',
    name: 'Твердый шампунь с активированным углем',
    brand: 'Apothecary Mens',
    category: 'Уход',
    price: 1400,
    volume: '120 г',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
  },
];

export const TIME_SLOTS = [
  '10:00', '11:00', '12:00', '13:00', '14:30', '15:30', '16:30', '17:30', '19:00', '20:00', '21:00'
];
