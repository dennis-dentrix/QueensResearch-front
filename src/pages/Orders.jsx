import { useState } from 'react'
import FoodDetail from '../components/FoodDetail'
import OrderDetails from '../components/OrderDetails'
import OrderHistoryCard from '../components/OrderHistoryCard'

export default function Orders() {
  const [activeView, setActiveView] = useState(null)
  const [selectedOrder, setSelectedOrder] = useState(null)

  const handleViewOrderDetails = (order) => {
    setSelectedOrder(order)
    setActiveView('order')
  }

  const handleOrderAgain = (order) => {
    setSelectedOrder(order)
    setActiveView('food')
  }

  return (
    <div className={`${activeView === null ? '' : 'grid grid-cols-[1fr_20rem]'} gap-6 transition-all duration-200 ease-in-out `}>
      <div className={`grid gap-6 ${activeView === null ? "lg:grid-cols-3 2xl:grid-cols-4" : "lg:grid-cols-2 2xl:grid-cols-4"}`}>
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <OrderHistoryCard
            key={id}
            onViewDetails={handleViewOrderDetails}
            onOrderAgain={handleOrderAgain}
            order={{ id, name: 'Beef Burger', price: 399 }}
          />
        ))}

      </div>

      {activeView === 'order' && <OrderDetails order={selectedOrder} />}
      {activeView === 'food' && <FoodDetail order={selectedOrder} />}
    </div>
  )
}
