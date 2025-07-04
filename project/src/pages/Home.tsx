import React, { useState } from 'react';
import { Train, Compass, Shield, Clock } from 'lucide-react';
import BookingForm from '../components/BookingForm';
import TrainCard from '../components/TrainCard';
import HolidayCard from '../components/HolidayCard';
import { Train as TrainType, HolidayPackage } from '../types';
import { mockTrains, mockHolidayPackages } from '../utils/mockData';

export default function Home() {
  const [searchResults, setSearchResults] = useState<TrainType[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleTrainsFound = (trains: TrainType[]) => {
    setSearchResults(trains);
    setShowResults(true);
  };

  const handleBookTrain = (train: TrainType) => {
    alert(`Booking ${train.name} - This would redirect to booking details page`);
  };

  const handleBookHoliday = (pkg: HolidayPackage) => {
    alert(`Booking ${pkg.title} - This would redirect to booking details page`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Journey Starts Here
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Book your train tickets seamlessly and explore amazing destinations with our holiday packages
            </p>
          </div>

          {/* Booking Form */}
          <div className="max-w-5xl mx-auto">
            <BookingForm onTrainsFound={handleTrainsFound} />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose RailBooking?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the best in train travel with our comprehensive booking platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Train className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Booking</h3>
              <p className="text-gray-600">
                Book your train tickets in just a few clicks with our user-friendly interface
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Payments</h3>
              <p className="text-gray-600">
                Your transactions are protected with bank-grade security and encryption
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-green-50 to-green-100">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock customer support to help you with any travel queries
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search Results */}
      {showResults && (
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Trains</h2>
              <p className="text-xl text-gray-600">
                {searchResults.length} trains found for your journey
              </p>
            </div>

            <div className="space-y-6">
              {searchResults.map((train) => (
                <TrainCard key={train.id} train={train} onBook={handleBookTrain} />
              ))}
            </div>

            {searchResults.length === 0 && (
              <div className="text-center py-12">
                <Train className="h-24 w-24 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">No trains found</h3>
                <p className="text-gray-600">
                  Try adjusting your search criteria or check for different dates
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Holiday Packages Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Compass className="h-8 w-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">Holiday Packages</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover incredible destinations with our curated holiday packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockHolidayPackages.map((pkg) => (
              <HolidayCard key={pkg.id} package={pkg} onBook={handleBookHoliday} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}