import React, {Fragment} from "react"
import mealsImage from "../../asssts/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton"


const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Order food</h1>
            <HeaderCartButton openCart={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="food ordering app" />
        </div>
    </Fragment>
}

export default Header;