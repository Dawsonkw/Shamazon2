import logo from "../assets/shamazonLogoEdit2.png";
import Nav from "./nav";

function Header() {
  return (
    <header className="bg-gradient-to-b from-purple-500 to-purple-800 h-[225px] max-h-[225px] z-0 flex w-screen justify-between">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="object-fit max-h-[200px]" />
        <div>
          <h1 className="text-white/70 text-4xl font-semibold ml-4">
            Shamazon
          </h1>
          <p className="text-white/70 text-lg ml-4">
            Electronics for the Masses
          </p>
        </div>
      </div>
      <div className="flex mt-[170px] mx-auto">
        <Nav />
      </div>
    </header>
  );
}

export default Header;
