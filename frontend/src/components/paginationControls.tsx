import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { PaginationControlsProps } from "../lib/types";

// Pagination controls
export default function PaginationControls() {
  const currentPage = 1;
  const totalNumberOfPages = 1;

  return (
    <section className="pagination">
      <ArrowLeftIcon direction="previous" onClick={() => onClick("previous")} />
      <ArrowRightIcon direction="next" onClick={() => {}} />
    </section>
  );
}
