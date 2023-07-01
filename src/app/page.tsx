import Empowering from "@/components/LandingPage/Empowering";
import Bestsellers from "@/components/LandingPage/Bestsellers";

export default function Home() {
  return (
    <main>
      <div className="py-20 px-10 xl:px-14 flex flex-col">
        <Empowering />
        <div className="mt-40">
          <Bestsellers />
        </div>
      </div>
    </main>
  );
}
