import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { PaginationControlsProps } from "../lib/types";

// Pagination controls

export default function PaginationControls({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationControlsProps) {
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="flex justify-between items-center mt-4">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="flex items-center px-4 py-2 border rounded-md disabled:opacity-50"
      >
        <ArrowLeftIcon className="mr-2" />
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="flex items-center px-4 py-2 border rounded-md disabled:opacity-50"
      >
        Next
        <ArrowRightIcon className="ml-2" />
      </button>
    </div>
  );
}
