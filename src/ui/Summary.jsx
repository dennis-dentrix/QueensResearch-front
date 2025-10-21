import { Trash2 } from "lucide-react"
import burgerImg from "../assets/images/burger.png"
import OrderMenuCard from "../components/OrderMenuCard"

export default function Summary() {
  return (
    <section className="bg-white p-4 md:sticky md:top-0 md:h-full hidden lg:block ">
      <div className="" >
        <h2 className='text-lg font-bold mb-4'>Order Menu</h2>

        <div className="h-[20rem] overflow-y-scroll overscroll-y-contain" >
          <OrderMenuCard name="Beef Burger"
            quantity="1"
            price="Kes. 300"
            imageSrc={burgerImg} />

          <OrderMenuCard name="Beef Burger"
            quantity="1"
            price="Kes. 300"
            imageSrc={burgerImg} />

          <OrderMenuCard name="Beef Burger"
            quantity="1"
            price="Kes. 300"
            imageSrc={burgerImg} />
          <OrderMenuCard name="Beef Burger"
            quantity="1"
            price="Kes. 300"
            imageSrc={burgerImg} />
          <OrderMenuCard name="Beef Burger"
            quantity="1"
            price="Kes. 300"
            imageSrc={burgerImg} />
        </div>



        <div className=" w-full py-4 flex items-center justify-between" >
          <p className="text-base font-medium text-gray-800" >Total:</p>
          <p className="text-base font-semibold text-primary/70" >
            Kes. <span>
              600
            </span>.00
          </p>
        </div>

        <button className="w-full bg-accent text-background hover:bg-accent/80 mb-2 rounded-full px-6 py-3 font-semibold shadow-md transition-colors duration-300">
          Checkout
        </button>
      </div>
      <div>
        <h2 className='text-lg font-bold mb-4'>Your balance</h2>
        <div className='rounded-lg bg-gray-100 p-6 shadow-sm'>Balance card</div>
      </div>
    </section>
  )
}
