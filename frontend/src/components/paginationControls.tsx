import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { PageDirection } from "../lib/types";
import { useState } from "react";
import { itemsPerPage } from "../lib/constants";

// Pagination controls

export default function PaginationControls() {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const totalPages = Math.ceil(52 / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          <ArrowLeftIcon />
          Page {currentPage - 1}
        </button>
      </div>
      <div>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Page {currentPage + 1}
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
}
