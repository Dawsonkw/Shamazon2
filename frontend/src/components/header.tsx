import { useState } from "react";
import Icon from "./icon";
import Nav from "./nav";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="bg-gradient-to-b from-purple-500 to-purple-800 h-[225px] max-h-[225px] z-0 flex w-screen justify-between">
      {/* We're gonna extract out the logo to its own icon component */}
      <div className="flex items-center">
        <Icon />
      </div>
      <div>
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="flex items-center mt-[170px] mr-[10px]"
        >
          <HamburgerMenuIcon
            width={24}
            height={24}
            onClick={() => console.log("Open menu")}
          />
        </button>
      </div>

      {navOpen && (
        <div>
          <Nav />
        </div>
      )}
    </header>
  );
}

export default Header;
