import Account from "./components/account";
import Cart from "./components/cart";
import Checkout from "./components/checkout";
import Footer from "./components/footer";
import Header from "./components/header";
import Item from "./components/item";
import Items from "./components/items";
import Login from "./components/login";

function App() {
  return (
    <>
      <Header />

      {/* A single item on a page view */}
      <Item />

      {/* A list of items on a page view */}
      <Items />

      {/* Cart and Checkout components */}
      <Cart />
      <Checkout />

      {/* Login portal */}
      <Account />
      <Login />

      <Footer />
    </>
  );
}

export default App;
