import Image from "next/image";

const Empowering = () => {
  return (
    <div className="relative px-5">
      <Image
        src="/assets/images/books.jpeg"
        width={1440}
        height={524}
        className="object-cover max-h-[524px]"
        alt="Wingless Books"
      />
      <div className="absolute top-0 bottom-0 w-10/12 my-20 flex items-center bookmark">
        <div className="w-full bg-white h-[345px] absolute opacity-[0.68]" />
        <p className="absolute left-0 text-[76px] text-wd-green font-bold">
          EMPOWERING WRITERS ACROSS THE GLOBE
        </p>
      </div>
    </div>
  );
};

export default Empowering;
