import React, { useState } from 'react';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { FoodItem } from '../types';

interface FoodCardProps {
  item: FoodItem;
  onAddToCart: (item: FoodItem, quantity: number) => void;
}

export default function FoodCard({ item, onAddToCart }: FoodCardProps) {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    if (quantity > 0) {
      onAddToCart(item, quantity);
      setQuantity(0);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="relative">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2 flex items-center space-x-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            item.isVeg ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {item.isVeg ? '🟢 VEG' : '🔴 NON-VEG'}
          </span>
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
            {item.category}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{item.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-blue-600">₹{item.price}</span>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setQuantity(Math.max(0, quantity - 1))}
              className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-8 text-center font-medium">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={quantity === 0}
          className={`w-full py-2 px-4 rounded-md font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
            quantity > 0
              ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}