import DealOfTheDay from "./dealOfTheDay";
import InfoSection from "./infoSection";
import SplashLogo from "./splashLogo";
import TopPicks from "./topPicks";

//  A hero component section for the home page, modeling after bestbuy landing page, hero section will contain a Large Image to the left, to the right will be Top Picks, on top of a deal of the day and another info section
function Hero() {
  return (
    <main className="mx-auto scrollbar-hide">
      <div className="flex flex-row items-center border border-black my-8 mx-8 h-[900px] ">
        <SplashLogo />
        <div className="flex flex-col justify-center">
          <div className=" border border-black max-h-[350px] my-8 mx-auto">
            <TopPicks />
          </div>
          <div className="flex-row border border-black mt-4  h-[419px] my-8">
            <InfoSection />
            <DealOfTheDay />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
