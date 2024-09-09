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

      {/* Login portal, Will it use Django or firebase like last time. Only time will tell */}
      <Account />
      <Login />

      <Footer />
    </>
  );
}

export default App;
