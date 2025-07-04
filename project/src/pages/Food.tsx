import React, { useState } from 'react';
import { ShoppingCart, Filter, Search, Utensils } from 'lucide-react';
import FoodCard from '../components/FoodCard';
import { FoodItem } from '../types';
import { mockFoodItems } from '../utils/mockData';

export default function Food() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDiet, setSelectedDiet] = useState('All');
  const [cart, setCart] = useState<Array<{item: FoodItem, quantity: number}>>([]);

  const categories = ['All', 'Meals', 'Snacks', 'Beverages'];
  const dietTypes = ['All', 'Veg', 'Non-Veg'];

  const filteredItems = mockFoodItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesDiet = selectedDiet === 'All' || 
                       (selectedDiet === 'Veg' && item.isVeg) ||
                       (selectedDiet === 'Non-Veg' && !item.isVeg);
    
    return matchesSearch && matchesCategory && matchesDiet;
  });

  const handleAddToCart = (item: FoodItem, quantity: number) => {
    setCart(prev => {
      const existingItem = prev.find(cartItem => cartItem.item.id === item.id);
      if (existingItem) {
        return prev.map(cartItem => 
          cartItem.item.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      }
      return [...prev, { item, quantity }];
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, cartItem) => total + (cartItem.item.price * cartItem.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Utensils className="h-12 w-12" />
              <h1 className="text-4xl md:text-5xl font-bold">Order Food</h1>
            </div>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Delicious meals delivered fresh to your seat during your journey
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Filters */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Search */}
                <div className="relative col-span-1 md:col-span-2">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search food items..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                {/* Category Filter */}
                <div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Diet Filter */}
                <div>
                  <select
                    value={selectedDiet}
                    onChange={(e) => setSelectedDiet(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    {dietTypes.map(diet => (
                      <option key={diet} value={diet}>{diet}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Food Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <FoodCard key={item.id} item={item} onAddToCart={handleAddToCart} />
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <Utensils className="h-24 w-24 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">No food items found</h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>

          {/* Cart Sidebar */}
          <div className="lg:w-80">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <div className="flex items-center space-x-2 mb-6">
                <ShoppingCart className="h-6 w-6 text-orange-600" />
                <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>
                {getTotalItems() > 0 && (
                  <span className="bg-orange-100 text-orange-800 text-sm px-2 py-1 rounded-full">
                    {getTotalItems()}
                  </span>
                )}
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((cartItem) => (
                    <div key={cartItem.item.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <img
                        src={cartItem.item.image}
                        alt={cartItem.item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{cartItem.item.name}</h4>
                        <p className="text-sm text-gray-600">
                          ₹{cartItem.item.price} × {cartItem.quantity}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">
                          ₹{cartItem.item.price * cartItem.quantity}
                        </p>
                      </div>
                    </div>
                  ))}

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-bold text-gray-900">Total:</span>
                      <span className="text-2xl font-bold text-orange-600">₹{getTotalPrice()}</span>
                    </div>
                    <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-md hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-200 font-medium">
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}