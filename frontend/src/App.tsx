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

      <Items />
      <Item />

      {/* Cart and Checkout components */}
      <Cart />
      <Checkout />

      {/* Login portal, apparently Django has a baked in auth feature so we're gonna learn that */}
      <Account />
      <Login />

      <Footer />
    </>
  );
}

export default App;
