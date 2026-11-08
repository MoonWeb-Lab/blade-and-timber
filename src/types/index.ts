export interface Service {
  id: string;
  title: string;
  description: string;
  duration: number; // in minutes
  price: number;
  category: 'hair' | 'beard' | 'combo' | 'spa';
  popular?: boolean;
}

export interface Master {
  id: string;
  name: string;
  role: string;
  experienceYears: number;
  rating: number;
  reviewsCount: number;
  avatar: string;
  specialties: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  service: string;
  masterName: string;
}

export interface GroomingProduct {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  volume: string;
  image: string;
  rating: number;
}

export interface BookingState {
  step: number; // 1: service, 2: master, 3: date & time, 4: customer info, 5: confirmed
  selectedServiceId: string | null;
  selectedMasterId: string | null;
  selectedDate: string | null;
  selectedTime: string | null;
  customerName: string;
  customerPhone: string;
  customerNotes: string;
}
