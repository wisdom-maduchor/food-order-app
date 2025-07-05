import React, {Fragment, useState} from "react";
import Header from "../src/components/Layout/Header"
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [isVisible, setIsVisible] = useState(false)

  const ShowHandler = () => {
    setIsVisible(true);
  }

  const HideHandler = () => {
    setIsVisible(false);
  }

  return (
    <Fragment>
      {isVisible && <Cart onHideCart={HideHandler} />}
      <Header onShowCart={ShowHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
