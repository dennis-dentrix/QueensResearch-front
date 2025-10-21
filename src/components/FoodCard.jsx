import burger from '../assets/images/burger.png'
import Rating from './Rating'
import CartCounter from '../ui/CartCounter'
import FavouriteBtn from '../ui/FavouriteBtn'

export default function FoodCard({
  image = burger,
  title = 'Fish Burger',
  rating = 4.5,
  price = '5.59',
}) {
  return (
    <div className="group flex min-w-[15rem] cursor-pointer snap-start flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
      {/* Image Area with Relative Wrapper */}
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full transform object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />

        {/* Heart Button Positioned Top-Right */}
        <FavouriteBtn />
      </div>

      {/* Content Area */}
      <div className="flex flex-grow flex-col justify-between p-4">
        <div className="mb-2">
          <Rating rating={rating} iconSize={14} />
        </div>

        <p className="mb-4 line-clamp-2 text-lg font-semibold text-gray-800">{title}</p>

        <div className="mt-auto flex items-center justify-between">
          {/* Price */}
          <p className="flex items-center text-xl font-bold text-gray-700">
            <span className="text-accent/85 mr-1">Kes.</span>
            {price}
          </p>

          {/* Conditional Cart Button Display */}
          <CartCounter />
        </div>
      </div>
    </div>
  )
}
