import Account from "./components/account";
import Cart from "./components/cart";
import Checkout from "./components/checkout";
import Footer from "./components/footer";
import Header from "./components/header";
import Item from "./components/item";
import Items from "./components/items";
import Login from "./components/login";
import PaginationControls from "./components/paginationControls";

function App() {
  return (
    <>
      <Header />

      {/* A list of items on a page view */}
      <Items />

      {/* A single item on a page view */}
      <Item />

      {/* Cart and Checkout components */}
      <Cart />
      <Checkout />

      {/* Login portal, apparently Django has a baked in auth feature so we're gonna learn that */}
      <Account />
      <Login />

      <PaginationControls />

      <Footer />
    </>
  );
}

export default App;
