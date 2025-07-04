import React from 'react';
import { Clock, MapPin, Users, Star } from 'lucide-react';
import { Train } from '../types';

interface TrainCardProps {
  train: Train;
  onBook: (train: Train) => void;
}

export default function TrainCard({ train, onBook }: TrainCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        {/* Train Info */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900">{train.name}</h3>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              train.class === 'AC' ? 'bg-blue-100 text-blue-800' :
              train.class === 'Non-AC' ? 'bg-green-100 text-green-800' :
              'bg-orange-100 text-orange-800'
            }`}>
              {train.class}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Route */}
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">From</p>
                <p className="font-medium">{train.from}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">To</p>
                <p className="font-medium">{train.to}</p>
              </div>
            </div>

            {/* Timing */}
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Duration</p>
                <p className="font-medium">{train.duration}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div>
                <p className="text-sm text-gray-600">Departure</p>
                <p className="font-bold text-lg">{train.departure}</p>
              </div>
              <div className="w-12 h-px bg-gray-300 relative">
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
              <div>
                <p className="text-sm text-gray-600">Arrival</p>
                <p className="font-bold text-lg">{train.arrival}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-600">{train.availableSeats} seats available</span>
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <div className="lg:ml-8 mt-6 lg:mt-0 flex flex-col items-center lg:items-end">
          <div className="text-center lg:text-right mb-4">
            <p className="text-sm text-gray-600">Starting from</p>
            <p className="text-3xl font-bold text-blue-600">₹{train.price}</p>
            <p className="text-sm text-gray-500">per person</p>
          </div>

          <button
            onClick={() => onBook(train)}
            className="w-full lg:w-auto bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-md hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-200 font-medium"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}