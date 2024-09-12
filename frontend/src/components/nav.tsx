import { useState } from "react";
import { motion } from "framer-motion";
import { categories } from "../lib/constants";

function Nav() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <nav className="bg-white shadow-lg rounded-md overflow-hidden z-30">
      <ul className="p-2">
        {categories.map((category) => (
          <li key={category} className="relative">
            <button
              onClick={() => setActiveCategory(category)}
              className="w-full text-left px-2 py-2  text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {category}
            </button>
            {activeCategory === category && (
              <motion.div
                layoutId="highlight"
                className="absolute inset-0 pointer-events-none"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              >
                <motion.div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent" />
                <motion.div className="absolute left-0 bottom-0 right-0 h-0.5 bg-accent" />
              </motion.div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
