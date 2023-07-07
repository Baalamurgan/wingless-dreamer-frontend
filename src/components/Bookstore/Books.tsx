import Image from "next/image";
import Button from "../Button";

const Books = ({
  image,
  link,
  title,
}: {
  title: string;
  image: string;
  link: string;
}) => {
  return (
    <div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer group"
      >
        <div className="flex flex-col items-center bg-white">
          <div className="h-full flex items-center justify-center overflow-hidden">
            <Image
              src={image}
              alt={title}
              width={209}
              height={334}
              className="group-hover:scale-110 transition-all duration-1000 ease-out"
            />
          </div>

          <div className="my-4">
            <p className="text-[#414141] text-[15px]">{title}</p>
          </div>
          <div>
            <Button className="!bg-[#313131] hover:!bg-[#414141] !rounded-[30px] !px-10 !py-3">
              <p className="text-xs leading-4 text-white">Buy at Amazon</p>
            </Button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Books;
