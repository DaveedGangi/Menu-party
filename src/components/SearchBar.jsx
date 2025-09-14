function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="mb-4 w-full sm:max-w-lg mx-auto">
  <input
    type="text"
    placeholder="Search dishes..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full p-2 sm:p-3 border rounded text-sm md:text-base"
  />
</div>

  );
}

export default SearchBar;
