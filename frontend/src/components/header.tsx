import Icon from "./icon";
import Menupopover from "./menuPopover";

function Header() {
  return (
    <header className="bg-gradient-to-b from-purple-500 to-purple-800 h-[225px] max-h-[225px] z-0 flex w-screen justify-between">
      <div className="flex items-center">
        <Icon />
      </div>

      <div className="">
        <Menupopover />
      </div>
    </header>
  );
}

export default Header;
