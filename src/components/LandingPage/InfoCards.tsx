"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";

const InfoCards = () => {
  const router = useRouter();
  const infoLinks = [
    {
      title: "New Contests",
      description:
        "Unleash your creativity and showcase your talent by participating in our exciting writing contests!",
      link: "/contests",
      imgSrc: "/assets/images/new_contests.webp",
    },
    {
      title: "Editorial Services",
      description:
        "Elevate the quality of your writing and make it shine with our expert editing services.",
      link: "/editorial-services",
      imgSrc: "/assets/images/editorial_services.jpeg",
    },
    {
      title: "Who are we?",
      description:
        "Discover the story behind our passion for writing and creation of Wingless Dreamer Publisher",
      link: "/about",
      imgSrc: "/assets/images/who_we_are.jpeg",
    },
  ];
  return (
    <div className="bg-wd-green p-20 flex flex-col md:flex-row items-center md:items-start justify-center space-y-5 space-x-0 md:space-x-5 md:space-y-0">
      {infoLinks.map((info) => (
        <div className="relative rounded-t-full" key={info.link}>
          <div className="">
            <Image
              src={info.imgSrc}
              alt={info.title}
              width={302}
              height={360}
              className="rounded-t-full object-cover h-[360px]"
            />
          </div>
          <div className="p-3 bg-white relative h-[170px] max-w-[302px] mb-5">
            <p className="text-wd-green text-2xl">{info.title}</p>
            <p className="text-[#282626] mt-3">{info.description}</p>
            <div className="absolute right-1.5 bottom-1 p-2">
              <FiArrowRight
                className="h-7 w-7 bg-black text-white cursor-pointer rounded-full p-0.5"
                onClick={() => router.push(info.link)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
