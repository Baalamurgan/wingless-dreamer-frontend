import Image from "next/image";

const CreativeHub = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex-1">
        <Image
          src={"/assets/images/the_misty_cauldron.webp"}
          height={763}
          width={316}
          alt="the_misty_cauldron"
          className="w-full"
        />
      </div>
      <div className=" bg-wd-green text-white flex flex-col items-center justify-center py-20 px-10 w-full max-w-[500px]">
        <p className="text-[47px]">Creative Hub</p>
        <div className="mt-10">
          <p className="text-[22px] text-center">
            In the poet&apos;s heart, a story is caressingly told,
          </p>
          <p className="text-[22px] text-center">
            Through eloquent words, they effortlessly unfold.
          </p>
        </div>
        <p className="text-lg text-center mt-10">
          Step into our world of boundless creativity and endless inspiration,
          where you&apos;ll find a treasure trove of writing tips, insightful
          YouTube videos, and exciting updates on upcoming contests and events.
          Visit our page now and unleash your writing potential.
        </p>
        <div className="mt-16">
          <button className="px-6 py-3 border-2">
            <p className="text-white">Enter here</p>
          </button>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src={"/assets/images/the_black_haven.webp"}
          height={763}
          width={316}
          alt="the_misty_cauldron"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default CreativeHub;
