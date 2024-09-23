import DealOfTheDay from "./dealOfTheDay";
import InfoSection from "./infoSection";
import SplashLogo from "./splashLogo";
import TopPicks from "./topPicks";

//  A hero component section for the home page, modeling after bestbuy landing page, hero section will contain a Large Image to the left, to the right will be Top Picks, on top of a deal of the day and another info section
function Hero() {
  return (
    <div>
      <SplashLogo />
      <TopPicks />
      <DealOfTheDay />
      <InfoSection />
    </div>
  );
}

export default Hero;
