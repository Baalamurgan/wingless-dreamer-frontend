"use client";
import Button from "@/components/Button";
import AllContests from "@/components/Contests/AllContests";

const Contests = () => {
  return (
    <div className="flex flex-col items-center bg-white">
      <div className="flex items-center space-x-10 my-10 px-20">
        <Button
          onClick={() => console.log("clicked")}
          style={{
            backgroundColor: "white",
            color: "#0C4426",
            border: "1px solid #0C4426",
          }}
        >
          Ongoing Contests
        </Button>
        <div className="flex flex-col items-center bg-wd-green px-20 py-5">
          <p className="text-xl text-[#DBDBDB]">Our</p>
          <p className="text-[47px] text-white mt-3">Contests</p>
        </div>
        <Button
          onClick={() => console.log("clicked")}
          style={{
            backgroundColor: "white",
            color: "#0C4426",
            border: "1px solid #0C4426",
          }}
        >
          Past Contests
        </Button>
      </div>
      <div className="px-20">
        <p className="text-xl text-center">
          Welcome to the zone of Wingless Dreamer Contests
        </p>
        <p className="mt-8 text-center">
          By participating in our contests you have the opportunity to win great
          prizes, get recognition for your literary work, and most importantly,
          have fun! Wingless Dreamer Publisher brings you a range of contests
          every month that will not only give you a chance to publish your work
          but also you will be supported, guided, encouraged, and advised.
        </p>
        <p className="mt-8 text-center">
          The review is available for sale worldwide at major online retailers
          in both print and digital editions. The selection process is
          competitive based on the quality of the writing. Give yourself a
          chance today!
        </p>
      </div>
      <AllContests />
    </div>
  );
};

export default Contests;
