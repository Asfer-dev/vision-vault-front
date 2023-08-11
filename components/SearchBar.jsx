export default function SearchBar({ searchVisible, setSearchVisible }) {
  return (
    <div
      className={
        searchVisible
          ? "z-10 h-16 transition duration-300 fixed top-10 right-0 left-0 shadow-lg translate-y-10 opacity-100"
          : "z-10 h-16 transition duration-300 fixed top-10 right-0 left-0 opacity-0"
      }
    >
      <input
        className="search-input w-full h-full px-4 md:px-8 text-2xl bg-neutral-100"
        type="text"
        placeholder="Search all products..."
        onBlur={() => setSearchVisible(false)}
      />
    </div>
  );
}
