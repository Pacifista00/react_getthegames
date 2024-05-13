const SearchBar = () => {
  return (
    <div className="container py-10 px-4 md:px-5 lg:px-16 mx-auto flex gap-3 w-full">
      <input
        id="keyword"
        type="text"
        className="bg-slate-200 rounded-full px-5 flex-1"
        placeholder="Search product"
      />
      <button className="rounded-full bg-green-500 py-2 px-6 text-gray-200 hover:bg-green-600">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
