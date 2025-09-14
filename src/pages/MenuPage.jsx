import { useState } from "react";
import dishes from "../data/dishes.json";
import DishCard from "../components/DishCard";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import VegFilter from "../components/VegFilter";

function MenuPage() {
  const [selected, setSelected] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [mealFilter, setMealFilter] = useState("ALL"); // Starter/Main/Dessert/Sides
  const [vegFilter, setVegFilter] = useState("ALL");   // Veg/NonVeg

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  };

  // Count selected dishes per meal type
  const counts = {};
  selected.forEach((id) => {
    const dish = dishes.find((d) => d.id === id);
    if (dish) {
      counts[dish.mealType.toUpperCase()] =
        (counts[dish.mealType.toUpperCase()] || 0) + 1;
    }
  });

  // Apply filters
  const filteredDishes = dishes.filter((dish) => {
    const matchSearch = dish.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchMeal =
      mealFilter === "ALL"
        ? true
        : dish.mealType.toUpperCase() === mealFilter;
    const matchVeg =
      vegFilter === "ALL"
        ? true
        : dish.type.toUpperCase() === vegFilter;
    return matchSearch && matchMeal && matchVeg;
  });

  return (
    <div className="flex flex-col h-screen">
  {/* Top */}
  <div className="p-4 w-full flex flex-col gap-3">
    <h1 className="text-xl md:text-2xl font-bold">Party Menu</h1>
    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    <Filters mealFilter={mealFilter} setMealFilter={setMealFilter} counts={counts} />
    <VegFilter vegFilter={vegFilter} setVegFilter={setVegFilter} />
  </div>

  {/* Middle */}
  <div className="flex-1 overflow-y-auto px-2 sm:px-4 lg:px-8">
    {filteredDishes.map((dish) => (
      <DishCard
        key={dish.id}
        dish={dish}
        selected={selected.includes(dish.id)}
        onToggle={() => toggleSelect(dish.id)}
      />
    ))}
    {filteredDishes.length === 0 && (
      <p className="text-fuchsia-400 flex justify-center mt-3 text-sm md:text-base">
        No dishes found..
      </p>
    )}
  </div>

  {/* Bottom */}
  <div className="p-4 bg-white shadow flex flex-col sm:flex-row justify-between items-center gap-3">
    <p className="font-medium text-red-500 text-sm md:text-base">
      Total Dish Selected ({selected.length})
    </p>
    <button
      disabled={selected.length === 0}
      className={`w-full sm:w-auto px-6 py-2 rounded-lg text-sm md:text-base ${
        selected.length === 0
          ? "bg-gray-300 text-gray-600 cursor-not-allowed"
          : "bg-black text-white"
      }`}
    >
      Continue
    </button>
  </div>
    </div>

  );
}

export default MenuPage;
