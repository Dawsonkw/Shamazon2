import { useEffect } from "react";
import fetchProduct from "../lib/hooks";

// List view for all items
function Items() {
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <main>
      <h1>Items</h1>
    </main>
  );
}

export default Items;
