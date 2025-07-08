import CartContext from "./Cart-context";

const CartProvider = props => {
    const addItemHandler = (item) => {}

    const removeItemHandler = (id) => {}

    const CartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return (
        <CartContext.Provider value={CartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;