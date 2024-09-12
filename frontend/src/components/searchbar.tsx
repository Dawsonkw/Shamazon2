import { useState } from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

function Searchbar() {
  const [searchText, setSearchText] = useState("");

  return (
    <form action="#" className="relative" onSubmit={(e) => e.preventDefault()}>
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
        required
        placeholder="Search for a product..."
        className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      />
      <button
        type="submit"
        className="absolute inset-y-0 left-0 pl-3 flex items-center"
      >
        <MagnifyingGlassIcon className="w-6 h-6" />
      </button>
    </form>
  );
}

export default Searchbar;
