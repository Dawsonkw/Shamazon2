import { useState } from "react";
import { motion } from "framer-motion";
import { categories } from "../lib/constants";

function Nav() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <nav className="flex text-white/65  text-lg">
      <ul className="flex flex-row relative">
        {categories.map((category) => (
          <li key={category} className="mr-6 relative">
            {/* This is not going to be an anchor likely since it's gonna have a popover but I doont want to code up the ppopover right now so for now it is what it is  */}
            <a
              href="#"
              className="block py-2 mt-4"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </a>

            {location.pathname === `/${category.toLowerCase()}` && (
              <motion.div
                layoutId="underline"
                className="bg-accent h-0.5 absolute bottom-1 left-0 right-0"
              />
            )}

            {activeCategory === category && (
              <motion.div
                layoutId="underline"
                className="bg-accent h-0.5 absolute bottom-1 left-0 right-0"
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
