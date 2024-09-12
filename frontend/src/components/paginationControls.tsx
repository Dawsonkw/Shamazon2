import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { PageDirection } from "../lib/types";

// Pagination controls
export default function PaginationControls() {
  return <section></section>;

  type PaginationButtonProps = {
    direction: PageDirection;
    currentPage: number;
    onClick: () => void;
  };

  // Pagination buttons

  function PaginationButton() {
    return (
      <button>
        <>
          <ArrowLeftIcon />
          Page {currentPage - 1}
        </>
      </button>
    );
  }
}
