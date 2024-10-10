import DealOfTheDay from "./dealOfTheDay";
import InfoSection from "./infoSection";

import TopPicks from "./topPicks";

//  A hero component section for the home page, modeling after bestbuy landing page, hero section will contain a Large Image to the left, to the right will be Top Picks, on top of a deal of the day and another info section
function Hero() {
  return (
    <main className="mx-auto scrollbar-hide flex justify-center">
      <div className="flex flex-row items-center mx-8 h-[850px] ">
        <div className="flex flex-col justify-center">
          <div className="  max-h-[350px] my-8 mx-auto">
            <TopPicks />
          </div>
          <div className="flex-row border border-black mt-4  h-[419px] my-8  bg-gradient-to-b from-purple-500 to-purple-800">
            <DealOfTheDay />
            <InfoSection />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
