import { ItemsProps } from "../lib/types";
import Icon from "./icon";
import Menupopover from "./menuPopover";
import Searchbar from "./searchbar";

function Header({
  selectedCategory,
  setSelectedCategory,
}: ItemsProps): JSX.Element {
  return (
    <header className="bg-gradient-to-b from-purple-500 to-purple-800 h-[225px] max-h-[225px] z-10 flex w-full justify-between sticky top-0">
      <div className="absolute inset-0 h-[225px] bg-pattern opacity-20 z-0 w-full "></div>

      <div className="flex items-center z-40">
        <Icon />
      </div>
      <div className="flex-grow mt-[100px] mx-[110px] items-center justify-center">
        <Searchbar />
      </div>

      <div className=" mr-8">
        <Menupopover
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
    </header>
  );
}

export default Header;
