import React from 'react';
import { Star, Clock, MapPin, Check } from 'lucide-react';
import { HolidayPackage } from '../types';

interface HolidayCardProps {
  package: HolidayPackage;
  onBook: (pkg: HolidayPackage) => void;
}

export default function HolidayCard({ package: pkg, onBook }: HolidayCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="relative">
        <img 
          src={pkg.image} 
          alt={pkg.destination}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 flex items-center space-x-1">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium">{pkg.rating}</span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-900">{pkg.title}</h3>
          <div className="flex items-center space-x-1 text-gray-500">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{pkg.destination}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-3">{pkg.description}</p>
        
        <div className="flex items-center space-x-1 mb-3">
          <Clock className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-600">{pkg.duration}</span>
        </div>

        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2">Package Includes:</p>
          <div className="space-y-1">
            {pkg.includes.slice(0, 3).map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Check className="h-3 w-3 text-green-500" />
                <span className="text-xs text-gray-600">{item}</span>
              </div>
            ))}
            {pkg.includes.length > 3 && (
              <span className="text-xs text-blue-600">+{pkg.includes.length - 3} more</span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Starting from</p>
            <p className="text-xl font-bold text-blue-600">₹{pkg.price.toLocaleString()}</p>
          </div>
          <button
            onClick={() => onBook(pkg)}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-md hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-200 font-medium"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}