import { motion } from "framer-motion";
import { categories } from "../lib/constants";
import { ItemsProps } from "../lib/types";

function Nav({
  selectedCategory,
  setSelectedCategory,
}: ItemsProps): JSX.Element {
  return (
    <nav className="bg-white shadow-lg rounded-md overflow-hidden z-30">
      <ul className="p-4">
        {categories.map((category) => (
          <li key={category} className="relative">
            <button
              onClick={() => setSelectedCategory(category)}
              className="w-full text-left px-2 py-2  text-gray-700 hover:bg-gray-100 transition-colors tracking-wide leading-8 "
            >
              {category}
            </button>
            {selectedCategory === category && (
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
