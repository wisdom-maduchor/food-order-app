import React from "react";

const CartContent = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (items) => {},
    removeItem: (id) => {}
})

export default CartContent;