
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"

const HeaderCartButton = props => {
    return <div>
        <button className={classes.button} onClick={props.openCart} >
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge} >3</span>
        </button>
    </div>
        
}

export default HeaderCartButton;