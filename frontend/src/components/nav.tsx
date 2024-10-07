import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { subcategories } from "../lib/constants";
import { ItemsProps } from "../lib/types";

function Nav({
  selectedSubcategory,
  setSelectedSubcategory,
}: ItemsProps): JSX.Element {
  return (
    <nav className="bg-white shadow-lg rounded-md overflow-hidden z-30">
      <ul className="p-4">
        <li className="relative">
          <Link
            to="/"
            onClick={() => setSelectedSubcategory("")}
            className="block w-full text-left px-2 py-2 text-gray-700 hover:bg-gray-100 transition-colors tracking-wide leading-8"
          >
            Home
          </Link>
          {selectedSubcategory === "" && (
            <motion.div
              layoutId="highlight"
              className="absolute inset-0 pointer-events-none"
              initial={false}
              transition={{
                duration: 1.2,
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
            >
              <motion.div className="absolute left-0 top-0 bottom-0 w-0.5 bg-purple-400" />
              <motion.div className="absolute left-0 bottom-0 right-0 h-0.5 bg-purple-400" />
            </motion.div>
          )}
        </li>
        {subcategories.map((subcategory) => (
          <li key={subcategory} className="relative">
            <button
              onClick={() => setSelectedSubcategory(subcategory)}
              className="w-full text-left px-2 py-2 text-gray-700 hover:bg-gray-100 transition-colors tracking-wide leading-8"
            >
              {subcategory}
            </button>
            {selectedSubcategory === subcategory && (
              <motion.div
                layoutId="highlight"
                className="absolute inset-0 pointer-events-none"
                initial={false}
                transition={{
                  duration: 1.2,
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              >
                <motion.div className="absolute left-0 top-0 bottom-0 w-0.5 bg-purple-400" />
                <motion.div className="absolute left-0 bottom-0 right-0 h-0.5 bg-purple-400" />
              </motion.div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
