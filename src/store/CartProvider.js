import CartContent from "./Cart-content";

const CartProvider = (props) => {
    const addItemHandler = (item) => {};

    const removeItemHandler = (id) => {};

    const CartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return (
        <CartContent.Provider value={CartContext}>
            {props.children}
        </CartContent.Provider>
    )
}

export default CartProvider;