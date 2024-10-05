import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Item from "./components/item";
import Items from "./components/items";
import { useState } from "react";

function App() {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all");

  return (
    <Router>
      <div className="scrollbar-hide h-screen overflow-y-auto">
        <Header
          selectedSubcategory={selectedSubcategory}
          setSelectedSubcategory={setSelectedSubcategory}
        />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Items
                  selectedSubcategory={selectedSubcategory}
                  setSelectedSubcategory={setSelectedSubcategory}
                />
              </>
            }
          />
          <Route
            path="/items"
            element={
              <Items
                selectedSubcategory={selectedSubcategory}
                setSelectedSubcategory={setSelectedSubcategory}
              />
            }
          />
          <Route path="/item/:id" element={<Item />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
