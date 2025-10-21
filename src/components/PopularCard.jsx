import { Plus } from "lucide-react";
import burgerImg from "../assets/images/burger.png";
import CartCounter from "../ui/CartCounter";
import FavouriteBtn from "../ui/FavouriteBtn";

export default function PopularCard() {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative overflow-hidden " >
        <img
          src={burgerImg}
          alt="Beef Burger"
          className="w-full h-32 sm:h-36 md:h-40 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out  "
        />
        <FavouriteBtn />
      </div>

      <div className="p-4 space-y-2">
        <div className="flex justify-between items-center" >
          <div className="flex flex-col  text-sm text-gray-600">
            <span className="font-semibold" >Beef Burger</span>
            <span className="text-accent/75 font-medium">Kes. 299</span>
          </div>
          <CartCounter />
        </div>

        <p className="text-xs text-gray-400 line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, laborum.
        </p>
      </div>
    </div>
  );
}
