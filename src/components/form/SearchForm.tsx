import { useState, useRef, useEffect } from "react";

interface SearchResult {
  id: number;
  title: string;
  description: string;
}

const SearchForm = () => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="mw-full ax-w-md mx-4 my-2">
      <div className="relative w-full" ref={searchRef}>
        <div className=" w-full flex bg-[#fafafa] py-3 px-5 items-center justify-center rounded-[25px] border-gray-200 border-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 text-gray-400 transition-all duration-300`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>

          <input
            type="text"
            className={`ring-0 flex-1 placeholder-transparent placeholder-lg text-gray-600 bg-[#fafafa] lg:placeholder-gray-500 lg:w-[250px] lg:px-5 py-2 border-none rounded-ful dark:border-gray-600 dark:lg:placeholder-gray-400 dark:text-white dark:bg-gray-700
            "w-[45px]"
           transition-width duration-300 focus:ring-0 focus-visible:none `}
            placeholder="Search"
            id="searchInput"
            onChange={handleSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
