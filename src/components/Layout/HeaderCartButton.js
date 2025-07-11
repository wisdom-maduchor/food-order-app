import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"
import CartContext from "../../store/Cart-context";

const HeaderCartButton = props => {
    const CartCtx = useContext(CartContext);

    const numberOfCartItems = CartCtx.items.reduce((curNumber, item)=>{
        return curNumber + item.amount;
    }, 0);

    return <div>
        <button className={classes.button} onClick={props.openCart} >
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge} >{numberOfCartItems}</span>
        </button>
    </div>
        
}

export default HeaderCartButton;