const vegTypes = ["ALL", "VEG", "NON-VEG"];

function VegFilter({ vegFilter, setVegFilter }) {
  return (
    <div className="flex gap-2 sm:gap-3 my-2 flex-wrap">
  {vegTypes.map((type) => (
    <button
      key={type}
      onClick={() => setVegFilter(type)}
      className={`px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm md:text-base ${
        vegFilter === type
          ? "bg-green-600 text-white"
          : "bg-gray-200 text-gray-800"
      }`}
    >
      {type}
    </button>
  ))}
</div>

  );
}

export default VegFilter;
