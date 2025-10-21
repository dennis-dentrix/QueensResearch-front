import { Star } from "lucide-react";
import burgerImg from "../assets/images/burger.png";
import CartCounter from "../ui/CartCounter";

export default function PromoCard() {
  return (
    <div className="w-full max-w-xs bg-white rounded-xl shadow-md p-4 space-y-3 relative transition-all duration-200 ">
      <p className="bg-accent/85 absolute top-1 -left-0 text-white w-fit text-xs px-2 py-1 rounded-r-lg" >10% off</p>
      {/* Top Section */}
      <div className="flex items-center justify-between">
        <div className="space-y-1 text-sm text-gray-700">
          <h3 className="font-semibold">Beef Burger</h3>
          <div className="flex items-center gap-2">
            <span className="text-accent/75 font-medium">Kes. 199</span>
            <span className="text-gray-400 text-xs line-through">Kes. 299</span>
          </div>
        </div>
        <img src={burgerImg} alt="Beef Burger" className="w-20 h-20 object-cover rounded-md" />
      </div>

      {/* Rating and Cart */}
      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <Star className="text-accent fill-accent" size={16} />
          <span>4.5</span>
          <span>|</span>
          <span>300+</span>
        </div>
        <CartCounter />
      </div>
    </div>
  );
}
