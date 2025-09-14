import { Link } from "react-router-dom";
function DishCard({ dish, selected, onToggle }) {
  return (
 <div className="flex flex-row sm:flex-row w-full mb-4 border-b pb-3">
  {/* Left */}
  <div className="flex flex-col w-full sm:w-2/3 pr-0 sm:pr-3 mb-3 sm:mb-0">
    <h2 className="font-semibold text-base md:text-lg">{dish.name}</h2>
    <p className="text-sm md:text-base text-gray-600 line-clamp-2">
      {dish.description}
    </p>
    <Link
      to={`/ingredient/${dish.id}`}
      className="text-orange-500 text-xs md:text-sm"
    >
      Ingredient
    </Link>
  </div>

  {/* Right */}
  <div className="flex flex-col items-center w-full sm:w-1/3">
    <img
      src={dish.image}
      alt={dish.name}
      className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-lg mb-2"
    />
    <button
      onClick={onToggle}
      className="px-3 py-1 text-xs md:text-sm bg-green-100 text-green-700 rounded border"
    >
      {selected ? "Remove" : "Add +"}
    </button>
  </div>
</div>

  );
}


export default DishCard;