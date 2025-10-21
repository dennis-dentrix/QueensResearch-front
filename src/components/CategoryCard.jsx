import burger from "../assets/images/burger.png";

export default function CategoryCard() {
  return (
    <div className="flex flex-col flex-shrink-0 items-center bg-white rounded-xl shadow-md hover:shadow-lg  p-4 cursor-pointer w-32 hover:translate-1 transition-all duration-300 ">
      <img
        src={burger}
        alt="Burger"
        className="w-full object-cover rounded-lg mb-3"
      />
      <p className="text-text/40 font-semibold text-lg text-center">Burger</p>
    </div>
  );
}
