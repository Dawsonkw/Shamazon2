import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useEffect, useRef, useState } from "react";
import Nav from "./nav";
import { ItemsProps } from "../lib/types";

function Menupopover({
  selectedSubcategory,
  setSelectedSubcategory,
}: ItemsProps): JSX.Element {
  const [navOpen, setNavOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setNavOpen(false);
      }
    };
    if (navOpen) {
      {
        document.addEventListener("mousedown", handleClickOutside);
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [navOpen]);

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [navOpen]);

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
        <div ref={menuRef} className="absolute top-full right-0  mr-3">
          <Nav
            selectedSubcategory={selectedSubcategory}
            setSelectedSubcategory={setSelectedSubcategory}
          />
        </div>
      )}
    </div>
  );
}

export default Menupopover;
