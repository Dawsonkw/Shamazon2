import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Item from "./components/item";
import Items from "./components/items";
import { useState } from "react";
import GenericAlert from "./components/genericAlert";
import Container from "./components/container";

function App() {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");

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
              <Container>
                <Hero />
                <Items
                  selectedSubcategory={selectedSubcategory}
                  setSelectedSubcategory={setSelectedSubcategory}
                />
              </Container>
            }
          />

          <Route path="/item/:id" element={<Item />} />

          <Route path="*" element={<GenericAlert />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
