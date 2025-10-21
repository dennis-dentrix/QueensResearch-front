import { Minus, Plus } from 'lucide-react';
import React, { useState } from 'react'

export default function CartCounter() {
  const [inCart, setCart] = useState(0)

  // Handlers using functional state updates for reliability
  const handleAddToCart = (e) => {
    e.stopPropagation();
    // Increase quantity
    setCart(prev => prev + 1);
  }

  const handleRemoveFromCart = (e) => {
    e.stopPropagation();
    // Decrease quantity, but stop at 0
    setCart(prev => (prev > 0 ? prev - 1 : 0));
  }

  // Determine which button display to render
  const isItemInCart = inCart > 0;

  return (
    <div>
      {isItemInCart ? (
        // Display Quantity Controls
        <div className="flex items-center space-x-2 bg-gray-100 rounded-full p-1 shadow-inner">

          {/* Minus Button */}
          <button
            className="bg-accent hover:bg-accent/70 p-1 rounded-full transition-colors duration-200"
            onClick={handleRemoveFromCart}
            aria-label="Remove one item from cart"
          >
            <Minus className="text-white" size={16} />
          </button>

          {/* Quantity Display */}
          <span className="text-gray-800 font-semibold text-sm w-5 text-center">
            {inCart}
          </span>

          {/* Plus Button */}
          <button
            className="bg-accent hover:bg-accent/70 p-1 rounded-full transition-colors duration-200"
            onClick={handleAddToCart}
            aria-label="Add one more item to cart"
          >
            <Plus className="text-white" size={16} />
          </button>
        </div>
      ) : (
        // Display Initial Add Button
        <button
          className="bg-accent hover:bg-accent/70 p-2 rounded-full font-bold transition-colors duration-200 shadow-md"
          onClick={handleAddToCart}
          aria-label="Add to cart"
        >
          <Plus className="text-white" size={18} />
        </button>
      )}
    </div>
  )
}
