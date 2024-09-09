import logo from "../assets/shamazonLogoEdit2.png";
import { categories } from "../lib/constants";

// I might redesign this into just an electronics store. That way I can focus on

function Header() {
  return (
    <header className="bg-gradient-to-b from-purple-500 to-purple-800 h-[200px] max-h-[200px] z-0 flex w-screen justify-between">
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
        <nav className="flex text-white/70 text-lg font-medium">
          <ul className="flex flex-row">
            {categories.map((category) => (
              <li key={category} className="mr-6">
                <a href="#">{category}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
