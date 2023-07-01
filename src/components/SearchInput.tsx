import { BsX } from "react-icons/bs";

const SearchInput = ({ inputClassName }: { inputClassName?: string }) => {
  return (
    <div className="relative bg-white px-4">
      <input
        type="text"
        className={`w-full h-[35px] !border-none !outline-none pr-5 ${
          inputClassName || ""
        }`}
      />
      <div className="absolute right-3 h-[35px] top-0 flex items-center">
        <div className="">
          <BsX className="text-wd-green opacity-60 hover:opacity-100" />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
