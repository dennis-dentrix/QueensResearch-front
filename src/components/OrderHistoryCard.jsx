import { EllipsisVerticalIcon, Star } from "lucide-react";
import beefBurger from "../assets/images/burger.png";
import EllipsisIcon from "../ui/EllipsisIcon";

export default function OrderHistoryCard({ onViewDetails, onOrderAgain, order }) {
  return (
    <div className="group flex flex-col max-w-sm snap-start cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-md p-5 space-y-3 border border-gray-100">

      {/* Header: Order Info */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span className="font-medium">Order #1</span>
        <span className="text-xs">Aug 25, 2025 • 13:49</span>
      </div>

      {/* Main Content: Image + Details + Rating */}
      <div className="flex items-start justify-between gap-4">
        <img
          src={beefBurger}
          alt="Beef Burger"
          className="w-20 h-20 object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        <div className="flex flex-col justify-between h-full">
          <p className="text-base font-semibold text-gray-800 line-clamp-2">{order.name}</p>
          <p className="text-sm font-bold text-orange-500">Kes. {order.price}</p>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Star className="text-orange-400 fill-orange-400" size={14} />
            <span>4.5</span>
          </div>
        </div>
        {/* <EllipsisVerticalIcon size={20} className="text-text/60" onClick={() => onViewDetails()} /> */}
        <EllipsisIcon onViewDetails={onViewDetails} order={order} />

      </div>

      {/* Footer: Action Buttons */}
      <div className="flex justify-between items-center"  >
        <span className="bg-gray-100 text-gray-600 rounded-full px-4 py-2 text-xs font-medium">
          Completed
        </span>
        <button
          className="bg-orange-100 text-orange-700 hover:bg-orange-200 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200"
          onClick={(e) => {
            e.stopPropagation()
            onOrderAgain(order)
          }}
        >
          Order Again
        </button>
      </div>
    </div>
  )
}
