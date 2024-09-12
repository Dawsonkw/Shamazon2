import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import Nav from "./nav";

function Menupopover() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setNavOpen(!navOpen)}
        className="flex items-center mt-[170px] mr-[10px] "
      >
        <HamburgerMenuIcon
          className="text-white/70"
          width={24}
          height={24}
          onClick={() => {
            console.log("Open menu");
          }}
        />
      </button>

      {navOpen && (
        <div className="absolute top-full right-0  mr-3">
          <Nav />
        </div>
      )}
    </div>
  );
}

export default Menupopover;
