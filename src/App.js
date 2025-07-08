import React, {Fragment, useState} from "react";
import Header from "../src/components/Layout/Header"
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isVisible, setIsVisible] = useState(false)

  const ShowHandler = () => {
    setIsVisible(true);
  }

  const HideHandler = () => {
    setIsVisible(false);
  }

  return (
    <CartProvider>
      {isVisible && <Cart onHideCart={HideHandler} />}
      <Header onShowCart={ShowHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
