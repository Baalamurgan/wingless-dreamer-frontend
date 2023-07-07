import DecorCard from "@/components/Decor/DecorCard";

const Decor = () => {
  const decors = [
    {
      id: 1,
      name: "Wellness Journal",
      type: "Teal",
      price: 25,
      imageSrc: "/assets/images/decor1.webp",
      slug: "wellness-journal-teal",
    },
    {
      id: 2,
      name: "Wellness Journal",
      type: "Night Owl",
      price: 25,
      imageSrc: "/assets/images/decor2.webp",
      slug: "wellness-journal-night-owl",
    },
    {
      id: 3,
      name: "Wellness Journal",
      type: "Flora",
      price: 25,
      imageSrc: "/assets/images/decor3.webp",
      slug: "wellness-journal-night-owl",
    },
    {
      id: 4,
      name: "Wellness Journal",
      type: "Flora",
      price: 25,
      imageSrc: "/assets/images/decor3.webp",
      slug: "wellness-journal-night-owl",
    },
    {
      id: 5,
      name: "Wellness Journal",
      type: "Flora",
      price: 25,
      imageSrc: "/assets/images/decor3.webp",
      slug: "wellness-journal-night-owl",
    },
    {
      id: 6,
      name: "Wellness Journal",
      type: "Flora",
      price: 25,
      imageSrc: "/assets/images/decor3.webp",
      slug: "wellness-journal-night-owl",
    },
  ];
  return (
    <div className="flex flex-col items-center bg-white">
      <div className="my-10 px-20">
        <div className="flex flex-col items-center bg-wd-green px-20 py-5">
          <p className="text-xl text-[#DBDBDB] tracking-wider">Our</p>
          <p className="text-[47px] text-white mt-3 playfair font-bold">
            AESTHETIC
          </p>
          <p className="text-[47px] text-white mt-3 playfair font-bold">
            DECOR
          </p>
        </div>
      </div>
      <div className="my-5 bg-[#045184] w-full flex items-center justify-center py-10">
        <div className="w-3/5">
          <p className="text-2xl text-white helvetica">
            Embark on a transformative odyssey with Wingless Dreamer&apos;s
            collection of wellness journals, guiding you towards the pinnacle of
            well-being. Unleash the profound reflections within, and witness
            your wellness journey unfurl, revealing newfound depths of self-care
            and self-discovery.
          </p>
        </div>
      </div>
      <div>
        <p className="text-[#E21C21] text-[40px] playfair">COMING SOON</p>
      </div>
      <div className="bg-white px-8 py-4 my-8 inset-[0px 0px 15px]">
        <p className="libre-baskerville text-[#369A9E] text-[40px]">
          Introducing Wellness Journal
        </p>
      </div>
      <div className="mb-3 mt-10 w-[90%] flex justify-center">
        <div className="flex flex-wrap gap-x-5 gap-y-10">
          {decors.map((decor) => (
            <DecorCard decor={decor} key={decor.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Decor;
