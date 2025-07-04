import { Train, FoodItem, HolidayPackage, Booking } from '../types';

export const mockTrains: Train[] = [
  {
    id: '1',
    name: 'Rajdhani Express',
    from: 'New Delhi',
    to: 'Mumbai',
    departure: '16:55',
    arrival: '08:35',
    duration: '15h 40m',
    price: 3500,
    class: 'AC',
    availableSeats: 24
  },
  {
    id: '2',
    name: 'Shatabdi Express',
    from: 'New Delhi',
    to: 'Chandigarh',
    departure: '07:20',
    arrival: '10:45',
    duration: '3h 25m',
    price: 1200,
    class: 'AC',
    availableSeats: 18
  },
  {
    id: '3',
    name: 'Duronto Express',
    from: 'Kolkata',
    to: 'New Delhi',
    departure: '22:15',
    arrival: '05:50',
    duration: '7h 35m',
    price: 2800,
    class: 'AC',
    availableSeats: 32
  },
  {
    id: '4',
    name: 'Garib Rath',
    from: 'Chennai',
    to: 'Bangalore',
    departure: '14:30',
    arrival: '19:15',
    duration: '4h 45m',
    price: 800,
    class: 'Non-AC',
    availableSeats: 45
  }
];

export const mockFoodItems: FoodItem[] = [
  {
    id: '1',
    name: 'Chicken Biryani',
    description: 'Aromatic basmati rice with tender chicken and traditional spices',
    price: 250,
    category: 'Meals',
    image: 'https://images.pexels.com/photos/1105325/pexels-photo-1105325.jpeg?auto=compress&cs=tinysrgb&w=300',
    isVeg: false
  },
  {
    id: '2',
    name: 'Paneer Butter Masala',
    description: 'Creamy cottage cheese curry with naan and rice',
    price: 200,
    category: 'Meals',
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=300',
    isVeg: true
  },
  {
    id: '3',
    name: 'Samosa (2 pcs)',
    description: 'Crispy pastry filled with spiced potatoes',
    price: 40,
    category: 'Snacks',
    image: 'https://images.pexels.com/photos/14737/pexels-photo-14737.jpeg?auto=compress&cs=tinysrgb&w=300',
    isVeg: true
  },
  {
    id: '4',
    name: 'Masala Chai',
    description: 'Traditional Indian spiced tea',
    price: 20,
    category: 'Beverages',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=300',
    isVeg: true
  },
  {
    id: '5',
    name: 'Veg Thali',
    description: 'Complete vegetarian meal with dal, sabzi, roti, and rice',
    price: 180,
    category: 'Meals',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300',
    isVeg: true
  },
  {
    id: '6',
    name: 'Cold Coffee',
    description: 'Refreshing iced coffee with milk and sugar',
    price: 60,
    category: 'Beverages',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=300',
    isVeg: true
  }
];

export const mockHolidayPackages: HolidayPackage[] = [
  {
    id: '1',
    destination: 'Goa',
    title: 'Goa Beach Paradise',
    description: 'Experience the golden beaches and vibrant nightlife of Goa',
    duration: '4 Days 3 Nights',
    price: 12500,
    image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.5,
    includes: ['Hotel Stay', 'Breakfast', 'Sightseeing', 'Airport Transfer']
  },
  {
    id: '2',
    destination: 'Kerala',
    title: 'Kerala Backwaters',
    description: 'Explore the serene backwaters and lush landscapes of Kerala',
    duration: '5 Days 4 Nights',
    price: 18000,
    image: 'https://images.pexels.com/photos/3061217/pexels-photo-3061217.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    includes: ['Houseboat Stay', 'All Meals', 'Ayurvedic Spa', 'Local Guide']
  },
  {
    id: '3',
    destination: 'Rajasthan',
    title: 'Royal Rajasthan',
    description: 'Discover the royal heritage and majestic palaces of Rajasthan',
    duration: '6 Days 5 Nights',
    price: 22000,
    image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    includes: ['Palace Hotels', 'Cultural Shows', 'Desert Safari', 'All Meals']
  },
  {
    id: '4',
    destination: 'Himachal Pradesh',
    title: 'Himalayan Adventure',
    description: 'Adventure and scenic beauty in the mighty Himalayas',
    duration: '7 Days 6 Nights',
    price: 25000,
    image: 'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    includes: ['Mountain Resort', 'Trekking Guide', 'Adventure Sports', 'All Meals']
  }
];

export const mockBookings: Booking[] = [
  {
    id: 'BK001',
    trainId: '1',
    trainName: 'Rajdhani Express',
    from: 'New Delhi',
    to: 'Mumbai',
    date: '2024-01-15',
    passengers: 2,
    totalPrice: 7000,
    status: 'Confirmed'
  },
  {
    id: 'BK002',
    trainId: '2',
    trainName: 'Shatabdi Express',
    from: 'New Delhi',
    to: 'Chandigarh',
    date: '2024-01-20',
    passengers: 1,
    totalPrice: 1200,
    status: 'Confirmed'
  },
  {
    id: 'BK003',
    trainId: '3',
    trainName: 'Duronto Express',
    from: 'Kolkata',
    to: 'New Delhi',
    date: '2024-01-25',
    passengers: 3,
    totalPrice: 8400,
    status: 'Pending'
  }
];