import { useState, useRef, useEffect } from "react";

interface SearchResult {
  id: number;
  title: string;
  description: string;
}

const SearchForm = () => {
  const [expanded, setExpanded] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  const expandInput = () => {
    setExpanded(true);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    // Gọi API hoặc thực hiện tìm kiếm tại đây và cập nhật kết quả tìm kiếm
    const results: SearchResult[] = [
      {
        id: 1,
        title: "Kết quả 1",
        description: "Mô tả kết quả 1",
      },
      {
        id: 2,
        title: "Kết quả 2",
        description: "Mô tả kết quả 2",
      },
      {
        id: 3,
        title: "Kết quả 3",
        description: "Mô tả kết quả 3",
      },
    ];
    setSearchResults(results);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target as Node)
    ) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="max-w-md mx-4 my-2">
      <div className="relative" ref={searchRef}>
        <input
          type="text"
          className={`placeholder-transparent lg:placeholder-gray-400 lg:w-[250px] lg:px-10 py-2 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:lg:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:bg-gray-700 ${
            expanded
              ? "lg:pl-12 w-[280px] lg:pr-8 lg:w-[450px] px-10"
              : "w-[45px]"
          } placeholder-transparent transition-width duration-300`}
          placeholder="Tìm kiếm"
          id="searchInput"
          onClick={expandInput}
          onChange={handleSearch}
        />
        <div className="absolute top-0 right-3 flex items-center pl-[11px] lg:pl-4 h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 text-gray-400 transition-all duration-300 ${
              expanded ? "text-gray-600" : ""
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={expandInput}
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
        {expanded && (
          <div className="absolute top-12 left-0 w-full bg-white border border-gray-300 shadow-md rounded-b-md z-10">
            {searchResults.map((result) => (
              <div key={result.id} className="px-4 py-2">
                <h3 className="text-lg font-semibold">{result.title}</h3>
                <p className="text-gray-600">{result.description}</p>
              </div>
            ))}
            <div className="flex justify-end px-4 py-2">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setExpanded(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchForm;
