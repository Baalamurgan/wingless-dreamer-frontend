import Image from "next/image";

const ComingEvent = () => {
  return (
    <div className="bg-white py-5 flex flex-col items-center px-20 w-full">
      <h1 className="text-[#799299] text-xl font-bold">Coming up</h1>
      <p className="text-[47px] font-bold text-wd-green">Queer Lit Event</p>
      <div className="flex items-center justify-center py-10">
        <div className="max-w-[400px]">
          <p className="text-[#799299] text-[45px] leading-[63px]">
            The fun has just begun. Happy Pride!
          </p>
          <button className="border-8 border-wd-green p-4 bg-wd-green mt-10">
            <p className="text-white">SUBMIT</p>
          </button>
        </div>
        <div className="bg-wd-green px-3 py-20">
          <Image
            src={"/assets/images/lgbtq.png"}
            width={500}
            height={500}
            alt="queer_lit_event"
          />
        </div>
      </div>
    </div>
  );
};

export default ComingEvent;
