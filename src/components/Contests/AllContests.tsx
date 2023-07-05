import Image from "next/image";

const AllContests = () => {
  const contests = [
    {
      title: "LGBTQ Writing Contest",
      image: "/assets/images/lgbtq.png",
      link: "",
    },
    {
      title: "LGBTQ Writing Contest",
      image: "/assets/images/lgbtq.png",
      link: "",
    },
    {
      title: "LGBTQ Writing Contest",
      image: "/assets/images/lgbtq.png",
      link: "",
    },
    {
      title: "LGBTQ Writing Contest",
      image: "/assets/images/lgbtq.png",
      link: "",
    },
    {
      title: "LGBTQ Writing Contest",
      image: "/assets/images/lgbtq.png",
      link: "",
    },
    {
      title: "LGBTQ Writing Contest",
      image: "/assets/images/lgbtq.png",
      link: "",
    },
    {
      title: "LGBTQ Writing Contest",
      image: "/assets/images/lgbtq.png",
      link: "",
    },
    {
      title: "LGBTQ Writing Contest",
      image: "/assets/images/lgbtq.png",
      link: "",
    },
    {
      title: "LGBTQ Writing Contest",
      image: "/assets/images/lgbtq.png",
      link: "",
    },
  ];
  return (
    <div className="flex flex-col w-full mt-3 mb-20">
      <div className="mt-8 border-t-4 border-dashed border-t-wd-green w-full flex flex-col items-center">
        <p className="text-[22px] text-wd-green my-5">ONGOING CONTESTS</p>
        <div className="flex items-center justify-center flex-wrap gap-10">
          {contests.map((contest, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={contest.image}
                width={205}
                height={205}
                alt="contest"
              />
              <p className="text-sm text-[#414141] mt-3">{contest.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 border-t-4 border-dashed border-t-wd-green w-full flex flex-col items-center">
        <p className="text-[22px] text-wd-green my-5">PAST CONTESTS</p>
        <div className="flex items-center justify-center flex-wrap gap-10">
          {contests.map((contest, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={contest.image}
                width={205}
                height={205}
                alt="contest"
              />
              <p className="text-sm text-[#414141] mt-3">{contest.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllContests;
