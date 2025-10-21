import DiscountWoman from '../assets/images/woman.png'
import FoodCard from '../components/FoodCard'
import CategoryCard from '../components/CategoryCard'
import { NavLink } from 'react-router'
import { ChevronRight } from 'lucide-react'
import Summary from '../ui/Summary'
import HorizontalScroller from '../components/HorizontalScroller'

export default function Dashboard() {
  return (
    <div className="grid h-full grid-cols-1 lg:grid-cols-[1fr_20rem] 2xl:grid-cols-[1fr_30rem]">
      {/* LEFT COLUMN: Main Content */}
      <section className="p-4">
        {/* Discount Banner (Already mostly responsive) */}
        {/* <div className="bg-primary/50 relative mb-8 grid min-h-[250px] grid-cols-1 items-center overflow-hidden rounded-2xl p-8 text-white shadow-lg xl:grid-cols-[1fr_280px]"> */}
        <div className="bg-primary/50 relative mb-8 grid min-h-[250px] grid-cols-1 items-center overflow-hidden rounded-2xl p-8 text-white shadow-lg xl:grid-cols-[1fr_26rem]">
          <div className="z-10 space-y-4 text-center md:text-left">
            <h2 className="text-4xl font-extrabold leading-tight">
              Get Discount Voucher <br /> Up To <span className="text-accent">20%</span>
            </h2>
            <p className="mx-auto max-w-sm text-white/90 md:mx-0 md:max-w-none">
              Don't miss out! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <button className="bg-accent text-background hover:bg-secondary/90 mt-4 rounded-full px-6 py-3 font-semibold shadow-md transition-colors duration-300">
              Claim Your Discount
            </button>
          </div>

          <div className="absolute inset-0 z-0 flex items-center justify-center xl:relative xl:mt-0">
            <img
              src={DiscountWoman}
              alt="Lady eating a burger"
              // Image classes for better mobile text overlay clarity
              className="h-full w-full max-w-full rounded-full object-cover opacity-40 mix-blend-multiply xl:h-auto xl:w-auto xl:max-w-[18rem] xl:object-contain xl:opacity-100 xl:mix-blend-normal"
            />
          </div>
        </div>

        {/* Category Section*/}
        <div className="mb-8 w-full min-w-[10rem] max-w-[50rem] py-4 2xl:max-w-full">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold tracking-wide">Category</h3>
            <NavLink className="text-primary/50 hover:text-primary group flex items-center gap-1 text-lg transition-all duration-300">
              See all{' '}
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                <ChevronRight size={18} />
              </span>
            </NavLink>
          </div>

          {/* <div className="my-4 grid gap-3 grid-cols-3 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-5 2xl:grid-cols-8 "></div> */}
          {/* Horizontal Scroll */}

          <HorizontalScroller>
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </HorizontalScroller>
        </div>

        {/* Popular Section (Grid is already responsive) */}
        <div className="mb-8 w-full min-w-[10rem] max-w-[50rem] py-4 2xl:max-w-full">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold tracking-wide">Popular</h3>
            <NavLink className="text-primary/50 hover:text-primary group flex items-center gap-1 text-lg transition-all duration-300">
              See all{' '}
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                <ChevronRight size={18} />
              </span>{' '}
            </NavLink>
          </div>
          {/* <div className="my-4 grid  gap-6 p-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 "> */}
          <div className="mx-auto max-w-screen-xl">
            <HorizontalScroller>
              <FoodCard />
              <FoodCard />
              <FoodCard />
              <FoodCard />
              <FoodCard />
              <FoodCard />
            </HorizontalScroller>
          </div>
        </div>
      </section>

      {/* RIGHT COLUMN: Sidebar (Stacks on mobile, sticky on desktop) */}
      <Summary />
    </div>
  )
}
