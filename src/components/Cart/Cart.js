import React, { useContext, useState} from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/Cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheck, setIsCheck] = useState(false);
  const [isSubmittingOrder, setIsSubmittingOrder] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;

  const onAddItemHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  };

  const onRemoveItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const onCheckoutHandler = () => {
    setIsCheck(true);
  };

  const submitOrdersHandler = async(orderData) => {
    setIsSubmittingOrder(true);
    await fetch('https://foodapp-583ea-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: orderData,
        orderItems: cartCtx.items
      })
    });
    setIsSubmittingOrder(false);
    setIsSubmitted(true);
    cartCtx.clearCart();
  };

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={onAddItemHandler.bind(null, item)}
          onRemove={onRemoveItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const modalAction = (
      <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onHideCart}>
            Close
          </button>
          {hasItem && <button className={classes.button} onClick={onCheckoutHandler}>Order</button>}
      </div>
      )

  const modalcontent = <React.Fragment>
    {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
     {isCheck && <Checkout onConfirm={submitOrdersHandler} onCancel={props.onHideCart} />}
     {!isCheck && modalAction}
  </React.Fragment>

  const OrderSubmitting = <p>Submitting order...</p>

  const SubmittedOreder = (
    <React.Fragment>
      <p>your order has been placed!</p>
      <div className={classes.actions}>
            <button className={classes.button} onClick={props.onHideCart}>
              Close
            </button>
        </div>
    </React.Fragment>
  )

  return (
    <Modal onCloseModalBackdrop={props.onHideCart}>
      {!isSubmittingOrder && !isSubmitted && modalcontent}
      {isSubmittingOrder && OrderSubmitting}
      {isSubmitted && !isSubmittingOrder && SubmittedOreder}
    </Modal>
  );
};

export default Cart;
