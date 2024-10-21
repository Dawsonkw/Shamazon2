import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Item from "./components/item";
import Items from "./components/items";
import { useState } from "react";
import GenericAlert from "./components/genericAlert";
import Container from "./components/container";
import Cart from "./components/cart";

function App() {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");
  const [itemsDisplayed, setItemsDisplayed] = useState<boolean>(false);

  return (
    <Router>
      <div className="scrollbar-hide h-screen overflow-y-auto bg-gray-100 ">
        <Header
          selectedSubcategory={selectedSubcategory}
          setSelectedSubcategory={setSelectedSubcategory}
          setItemsDisplayed={setItemsDisplayed}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Container>
                {!itemsDisplayed && <Hero />}
                <Items
                  selectedSubcategory={selectedSubcategory}
                  setSelectedSubcategory={setSelectedSubcategory}
                  setItemsDisplayed={setItemsDisplayed}
                />
              </Container>
            }
          />

          <Route path="/item/:id" element={<Item />} />

          <Route path="*" element={<GenericAlert />} />
        </Routes>

        <Cart />
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
