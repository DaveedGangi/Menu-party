const mealTypes = ["ALL", "STARTER", "MAIN COURSE", "DESSERT", "SIDES"];

function Filters({ mealFilter, setMealFilter, counts }) {
  return (
   <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-3 my-4 overflow-x-auto">
  {mealTypes.map((type) => (
    <button
      key={type}
      onClick={() => setMealFilter(type)}
      className={`px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm md:text-base ${
        mealFilter === type
          ? "bg-black text-white"
          : "bg-gray-200 text-gray-800"
      }`}
    >
      {type}
      {type !== "ALL" && (
        <span className="ml-1 text-yellow-400">
          ({counts[type] || 0})
        </span>
      )}
    </button>
  ))}
</div>

  );
}

export default Filters;
