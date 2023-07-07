"use client";
import Books from "@/components/Bookstore/Books";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Bookstore = () => {
  const books = [
    {
      id: 1,
      title: "Passionate Penholders",
      image: "/assets/images/bookstore1.webp",
      link: "https://www.amazon.com/dp/1073342778",
    },
    {
      id: 2,
      title: "Passionate Penholders ||",
      image: "/assets/images/bookstore2.webp",
      link: "https://www.amazon.com/dp/1650936222",
    },
    {
      id: 2,
      title: "Passionate Penholders ||",
      image: "/assets/images/bookstore2.webp",
      link: "https://www.amazon.com/dp/1650936222",
    },
    {
      id: 2,
      title: "Passionate Penholders ||",
      image: "/assets/images/bookstore2.webp",
      link: "https://www.amazon.com/dp/1650936222",
    },
    {
      id: 2,
      title: "Passionate Penholders ||",
      image: "/assets/images/bookstore2.webp",
      link: "https://www.amazon.com/dp/1650936222",
    },
    {
      id: 2,
      title: "Passionate Penholders ||",
      image: "/assets/images/bookstore2.webp",
      link: "https://www.amazon.com/dp/1650936222",
    },
    {
      id: 2,
      title: "Passionate Penholders ||",
      image: "/assets/images/bookstore2.webp",
      link: "https://www.amazon.com/dp/1650936222",
    },
    {
      id: 2,
      title: "Passionate Penholders ||",
      image: "/assets/images/bookstore2.webp",
      link: "https://www.amazon.com/dp/1650936222",
    },
    {
      id: 2,
      title: "Passionate Penholders ||",
      image: "/assets/images/bookstore2.webp",
      link: "https://www.amazon.com/dp/1650936222",
    },
  ];
  const { push } = useRouter();
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="flex flex-col items-center bg-white">
      <div className="my-10 px-20">
        <div className="flex flex-col items-center bg-wd-green px-20 py-5">
          <p className="text-xl text-[#DBDBDB] tracking-wider">Our</p>
          <p className="text-[47px] text-white mt-3 playfair font-bold">
            BOOKSTORE
          </p>
        </div>
      </div>
      <div className="flex justify-end w-full pr-2 mt-5">
        <SearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          placeholder="Type here to search"
          inputClassName="placeholder-wd-green"
          onSearch={(searchValue) =>
            searchValue && push(`/search?q=${searchValue}`)
          }
        />
      </div>
      {/* {searchQuery && <p>Search results for “{searchValue}“</p>} */}
      <div className="flex flex-wrap items-center justify-center gap-y-10 gap-x-28 my-8">
        {books
          //   .filter(
          //     (b) =>
          //       !searchQuery ||
          //       b.title.toLowerCase() === searchQuery.toLowerCase()
          //   )
          .map((book) => (
            <Books
              key={book.id}
              title={book.title}
              image={book.image}
              link={book.link}
            />
          ))}
      </div>
    </div>
  );
};

export default Bookstore;
