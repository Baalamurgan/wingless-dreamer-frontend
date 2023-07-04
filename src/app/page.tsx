import Bestsellers from "@/components/LandingPage/Bestsellers";
import ComingEvent from "@/components/LandingPage/ComingEvent";
import Empowering from "@/components/LandingPage/Empowering";
import InfoCards from "@/components/LandingPage/InfoCards";

export default function Home() {
  return (
    <main>
      <div className="py-20 flex flex-col">
        <div className="px-10 xl:px-14">
          <Empowering />
        </div>
        <div className="mt-40 px-10 xl:px-14">
          <Bestsellers />
        </div>
        <div className="mt-40 px-10 xl:px-14">
          <InfoCards />
        </div>
        <div className="mt-40">
          <ComingEvent />
        </div>
      </div>
    </main>
  );
}
