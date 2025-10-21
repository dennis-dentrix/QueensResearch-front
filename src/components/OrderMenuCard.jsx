import { Trash2 } from 'lucide-react';
import React from 'react'

export default function OrderMenuCard({ name, quantity, price, imageSrc }) {
  return (
    // Outer container: Reduced padding, removed shadow/border for a flat, list-item look
    <div className='w-full py-3 flex items-center justify-between gap-4 border-b border-gray-100 last:border-b-0'>

      {/* 1. Image (Simplified size) */}
      <img
        src={imageSrc}
        alt={name}
        className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
      />

      {/* 2. Item Details & Price */}
      <div className="flex justify-between w-full items-center">

        {/* Item Name and Quantity */}
        <div className="flex flex-col items-start">
          <p className="text-base font-medium text-gray-800">{name}</p>
          {/* Quantity is subtle */}
          <p className="text-sm text-gray-500 mt-0.5">Qty: {quantity}</p>
        </div>

        <div className="flex items-center gap-4">
          {/* Price is clear but not overly emphasized */}
          <p className="text-base font-semibold text-primary/70">{price}</p>

          {/* Trash Icon (Smaller, less prominent color) */}
          <button
            aria-label="Remove item"
            className="text-gray-400 hover:text-accent transition-colors p-1 -m-1"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
