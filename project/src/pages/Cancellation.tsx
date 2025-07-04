import React, { useState } from 'react';
import { Search, AlertCircle, CheckCircle, XCircle, Clock, Phone, Mail } from 'lucide-react';
import { mockBookings } from '../utils/mockData';
import { Booking } from '../types';

export default function Cancellation() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [showCancellationModal, setShowCancellationModal] = useState(false);

  const filteredBookings = mockBookings.filter(booking => 
    booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.trainName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCancelBooking = (booking: Booking) => {
    setSelectedBooking(booking);
    setShowCancellationModal(true);
  };

  const confirmCancellation = () => {
    if (selectedBooking) {
      alert(`Booking ${selectedBooking.id} cancelled successfully!`);
      setShowCancellationModal(false);
      setSelectedBooking(null);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'Cancelled':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'Pending':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-green-100 text-green-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <XCircle className="h-12 w-12" />
              <h1 className="text-4xl md:text-5xl font-bold">Cancel Booking</h1>
            </div>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Manage your bookings and process cancellations with ease
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Search and Bookings */}
          <div className="lg:col-span-2">
            {/* Search */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by booking ID or train name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Bookings List */}
            <div className="space-y-4">
              {filteredBookings.map((booking) => (
                <div key={booking.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(booking.status)}
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                            {booking.status}
                          </span>
                        </div>
                        <span className="text-sm text-gray-600">ID: {booking.id}</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2">{booking.trainName}</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Route</p>
                          <p className="font-medium">{booking.from} → {booking.to}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Travel Date</p>
                          <p className="font-medium">{new Date(booking.date).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Passengers</p>
                          <p className="font-medium">{booking.passengers}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Total Amount</p>
                          <p className="font-medium text-blue-600">₹{booking.totalPrice}</p>
                        </div>
                      </div>
                    </div>

                    <div className="lg:ml-8 mt-4 lg:mt-0">
                      {booking.status === 'Confirmed' && (
                        <button
                          onClick={() => handleCancelBooking(booking)}
                          className="w-full lg:w-auto bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 font-medium"
                        >
                          Cancel Booking
                        </button>
                      )}
                      {booking.status === 'Cancelled' && (
                        <div className="text-center text-red-600 font-medium">
                          Already Cancelled
                        </div>
                      )}
                      {booking.status === 'Pending' && (
                        <div className="text-center text-yellow-600 font-medium">
                          Awaiting Confirmation
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredBookings.length === 0 && (
              <div className="text-center py-12">
                <Search className="h-24 w-24 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">No bookings found</h3>
                <p className="text-gray-600">
                  Try searching with a different booking ID or train name
                </p>
              </div>
            )}
          </div>

          {/* Cancellation Policy */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Cancellation Policy</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Refund Rules</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Cancel up to 4 hours before departure: Full refund</li>
                    <li>• Cancel 2-4 hours before: 50% refund</li>
                    <li>• Cancel less than 2 hours: No refund</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Processing Time</h4>
                  <p className="text-sm text-gray-600">
                    Refunds are processed within 3-5 business days
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Need Help?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Call Us</p>
                    <p className="text-sm text-gray-600">1800-123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Email Support</p>
                    <p className="text-sm text-gray-600">support@railbooking.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cancellation Modal */}
      {showCancellationModal && selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center space-x-3 mb-4">
              <AlertCircle className="h-8 w-8 text-red-500" />
              <h3 className="text-xl font-bold text-gray-900">Confirm Cancellation</h3>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-600 mb-4">
                Are you sure you want to cancel this booking?
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium text-gray-900">{selectedBooking.trainName}</p>
                <p className="text-sm text-gray-600">
                  {selectedBooking.from} → {selectedBooking.to}
                </p>
                <p className="text-sm text-gray-600">
                  Booking ID: {selectedBooking.id}
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => setShowCancellationModal(false)}
                className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
              >
                Keep Booking
              </button>
              <button
                onClick={confirmCancellation}
                className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
              >
                Cancel Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}