export interface Train {
  id: string;
  name: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  duration: string;
  price: number;
  class: 'AC' | 'Non-AC' | 'Sleeper';
  availableSeats: number;
}

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Meals' | 'Snacks' | 'Beverages';
  image: string;
  isVeg: boolean;
}

export interface HolidayPackage {
  id: string;
  destination: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  image: string;
  rating: number;
  includes: string[];
}

export interface Booking {
  id: string;
  trainId: string;
  trainName: string;
  from: string;
  to: string;
  date: string;
  passengers: number;
  totalPrice: number;
  status: 'Confirmed' | 'Cancelled' | 'Pending';
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}