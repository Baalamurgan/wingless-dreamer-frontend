import { Dispatch, SetStateAction } from "react";
import { BsX } from "react-icons/bs";

const SearchInput = ({
  inputClassName,
  searchValue,
  setSearchValue,
  placeholder,
  onSearch,
}: {
  inputClassName?: string;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  placeholder?: string;
  onSearch: (searchValue: string) => void;
}) => {
  return (
    <div className="relative bg-white px-4">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={`w-full h-[35px] !border-none !outline-none pr-5 ${
          inputClassName || ""
        }`}
        placeholder={placeholder}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch(searchValue);
          }
        }}
      />
      <div
        className="absolute right-3 h-[35px] top-0 flex items-center"
        onClick={() => setSearchValue("")}
      >
        <div>
          <BsX className="text-wd-green opacity-60 hover:opacity-100" />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
