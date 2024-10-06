import { ItemsProps } from "../lib/types";
import Icon from "./icon";
import Menupopover from "./menuPopover";
import Searchbar from "./searchbar";

function Header({
  selectedSubcategory,
  setSelectedSubcategory,
}: ItemsProps): JSX.Element {
  return (
    <header className="bg-gradient-to-b from-purple-500 to-purple-800 h-[225px] max-h-[225px] z-10 flex w-full justify-between sticky top-0">
      <div className="absolute inset-0 h-[225px] bg-pattern opacity-20 z-0 w-full "></div>

      <div className="flex flex-row gap-x-8 mx-auto">
        <div className="flex items-center z-40">
          <Icon />
        </div>
        <div className="w-[1000px] mt-[100px] mx-auto items-center justify-center">
          <Searchbar />
        </div>
      </div>

      <div className=" mr-8">
        <Menupopover
          selectedSubcategory={selectedSubcategory}
          setSelectedSubcategory={setSelectedSubcategory}
          setItemsDisplayed={(display) => display}
        />
      </div>
    </header>
  );
}

export default Header;
