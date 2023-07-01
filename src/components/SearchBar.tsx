import { BiSearch } from "react-icons/bi";
import SearchInput from "./SearchInput";

const SearchBar = () => {
  return (
    <div className="w-[303px] border border-wd-blue">
      <div className="flex items-stretch h-[35px]">
        <div className="flex-1">
          <SearchInput inputClassName="text-wd-green" />
        </div>
        <div className="flex justify-center w-full bg-wd-green hover:bg-wd-blue max-w-[74px]">
          <button className="h-full">
            <BiSearch className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
