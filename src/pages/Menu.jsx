import React from 'react'
import CategoryCard from '../components/CategoryCard'
import { NavLink } from 'react-router'
import { ChevronRight, CookingPot, Flame } from 'lucide-react'
import FoodCard from '../components/FoodCard'
import PopularCard from '../components/PopularCard'
import PromoCard from '../components/PromoCard'

export default function Menu() {
  return (
    <div>
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold tracking-wide">Category</h3>
          <NavLink className="text-primary/50 hover:text-primary flex items-center gap-1 text-lg transition-all duration-300 group">
            See all{' '}
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              <ChevronRight size={18} />
            </span>{' '}
          </NavLink>
        </div>
        <div className="my-4 grid gap-3 grid-cols-3 md:grid-cols-5 xl:grid-cols-8 ">

          <CategoryCard /><CategoryCard /><CategoryCard /><CategoryCard />
          <CategoryCard /><CategoryCard /><CategoryCard /><CategoryCard />
        </div>

      </div>

      {/* HOT/POPULAR */}
      <div>
        <div className="flex items-center justify-between">
          <h3 className=" text-xl font-semibold tracking-wide flex items-center ">
            Hot now

            <span>
              <Flame className='text-accent' />
            </span>
          </h3>
          <NavLink className="text-primary/50 hover:text-primary flex items-center gap-1 text-lg transition-all duration-300 group">
            See all{' '}
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              <ChevronRight size={18} />
            </span>{' '}
          </NavLink>
        </div>
        {/* <div className="my-4 grid grid-cols-2 gap-6 p-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4"> */}
        <div className="my-4 grid  gap-3 p-4 grid-cols-1 md:grid-cols-2  xl:grid-cols-4">

          <PopularCard />
          <PopularCard />
          <PopularCard />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <h3 className=" text-xl font-semibold tracking-wide flex items-center gap-2">
            Promos
            <span>
              <CookingPot className='text-accent' />
            </span>
          </h3>
          <NavLink className="text-primary/50 hover:text-primary flex items-center gap-1 text-lg transition-all duration-300 group">
            See all{' '}
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              <ChevronRight size={18} />
            </span>{' '}
          </NavLink>
        </div>

        <div className="my-4 grid  gap-3 p-4 grid-cols-1 md:grid-cols-2  xl:grid-cols-4">
          <PromoCard />
          <PromoCard />
          <PromoCard />
          <PromoCard />

        </div>
      </div>
    </div>
  )
}
