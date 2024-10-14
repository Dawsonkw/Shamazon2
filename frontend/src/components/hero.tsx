import DealOfTheDay from "./dealOfTheDay";

import TopPicks from "./topPicks";

//  A hero component section for the home page, modeling after bestbuy landing page, hero section will contain a Large Image to the left, to the right will be Top Picks, on top of a deal of the day and another info section
function Hero() {
  return (
    <main className="mx-auto scrollbar-hide flex justify-center ">
      <div className="flex flex-row items-center mx-8 ">
        <div className="flex flex-col justify-center">
          <div className="  max-h-[350px] mx-auto">
            <TopPicks />
          </div>
          <div>
            <DealOfTheDay />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
