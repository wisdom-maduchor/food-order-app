import classes from './Cart.module.css'
import Modal from '../UI/Modal';

const Cart = props => {
    const CartItem = <ul className={classes['cart-items']}>{[{id: 'cart', name: 'sushi', amount: 2, price: 12.99}].map(item => 
    <li>{item.name}</li>)}</ul>;

    return (
        <Modal onCloseModalBackdrop={props.onHideCart}>
            {CartItem}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>35.92</span>
            </div>

            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
};

export default Cart;