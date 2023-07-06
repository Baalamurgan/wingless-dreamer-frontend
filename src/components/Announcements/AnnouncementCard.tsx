import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import Button from "../Button";

export interface Announcement {
  title: string;
  date: number;
  image: string;
  description: JSX.Element;
}

const AnnouncementCard = ({
  title,
  date,
  description,
  image,
}: Announcement) => {
  const goToAnnouncement = () => {
    console.log("go to announcement");
  };
  return (
    <div className="border px-3 border-[#F2F2F2] py-4 max-w-[420px]">
      <p
        className="text-[19px] underline cursor-pointer"
        onClick={goToAnnouncement}
      >
        {title}
      </p>
      <div className="flex items-center my-3">
        <p className="whitespace-nowrap">
          {formatDate(date, {
            formatBy: ({ date, month, year }) => (
              <span>
                {month} {date}, {year}
              </span>
            ),
          })}
        </p>
        <div className="mx-2">|</div>
        <p className="whitespace-nowrap">Wingless Dreamer</p>
        <div className="mx-2">|</div>
        <p className="whitespace-nowrap">Announcements</p>
      </div>
      <div className="mt-4 mb-2">
        <Image
          src={image}
          width={300}
          height={300}
          alt="announcement"
          className="cursor-pointer"
          onClick={goToAnnouncement}
        />
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div className="mt-3">
        <Button
          className="!bg-[#42BABE] hover:!bg-[#A2C2CC] !text-white border-0 transition-all cursor-pointer"
          onClick={goToAnnouncement}
        >
          Read More
        </Button>
      </div>
    </div>
  );
};

export default AnnouncementCard;
