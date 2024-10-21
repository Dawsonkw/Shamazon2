function Cart() {
  return (
    <main className="container mx-auto px-4 py-8 border border-black mt-[120px] relative">
      <h1>Cart</h1>
      <p>This is the cart page</p>
      <ul className="flex flex-col gap-4">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <button>Checkout</button>
      <button>Delete Item</button>
    </main>
  );
}

export default Cart;
