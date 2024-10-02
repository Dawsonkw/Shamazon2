import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Account from "./components/account";
import Cart from "./components/cart";
import Checkout from "./components/checkout";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Item from "./components/item";
import Items from "./components/items";
import Login from "./components/login";

function App() {
  return (
    <Router>
      <div className="scrollbar-hide h-screen overflow-y-auto">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Items />
              </>
            }
          />
          <Route path="/items" element={<Items />} />
          <Route path="/item/:id" element={<Item />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
