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
    <div className="scrollbar-hide h-screen overflow-y-auto">
      <Header />

      {/* A hero component section for the home page, modeling after bestbuy landing page */}
      {/* <Hero /> */}

      {/* A single item on a page view */}
      {/* <Item /> */}

      {/* A list of items on a page view */}
      <Items />

      {/* Cart and Checkout components */}
      <Cart />
      <Checkout />

      {/* Login portal */}
      <Account />
      {/* <Login /> */}

      <Footer />
    </div>
  );
}

export default App;
