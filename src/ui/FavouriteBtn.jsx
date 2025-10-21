import { Heart } from 'lucide-react';
import React, { useState } from 'react'

export default function FavouriteBtn() {
  const [isFavourite, setIsFavourite] = useState(false)
  // State to track the quantity in the cart

  const checkFavourite = (e) => {
    // Stop event propagation to prevent triggering the card's cursor-pointer effect
    e.stopPropagation();
    setIsFavourite(prev => !prev);
  }

  return (
    <>
      <button
        className="
      absolute top-2 right-2 z-10
      p-2 bg-white/80 rounded-full backdrop-blur-sm
      transition-all duration-200
    "
        onClick={checkFavourite}
        aria-label={isFavourite ? 'Remove from favorites' : 'Add to favorites'}
      >
        <Heart
          className={`
        transition-colors duration-200 
        cursor-pointer
        ${isFavourite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}
      `}
          size={22}
          fill={isFavourite ? 'currentColor' : 'none'}
        />
      </button></>)
}
