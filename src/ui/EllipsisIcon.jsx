import { EllipsisVerticalIcon } from 'lucide-react'
import React, { useState } from 'react'

export default function EllipsisIcon({ onViewDetails, order }) {
  const [showDropdown, setShowDropdown] = useState(null)
  return (
    <div className="relative">
      <EllipsisVerticalIcon
        size={20}
        className="cursor-pointer text-gray-500"
        onClick={() => setShowDropdown((prev) => !prev)}
      />

      {/* Dropdown Menu */}
      {showDropdown && (
        <div className="absolute right-0 z-10 mt-2 w-36 rounded-md border border-gray-200 bg-white shadow-lg">
          <button
            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
            onClick={() => {
              setShowDropdown(false)
              // handle view details
            }}
          >
            Delete item
          </button>
          <button
            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
            onClick={() => {
              setShowDropdown(false)
              onViewDetails(order)
            }}
          >
            View Order{' '}
          </button>
        </div>
      )}
    </div>
  )
}
