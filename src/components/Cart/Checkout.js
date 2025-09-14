
import classes from './Checkout.module.css'

const Checkout = (props) => {
    const ConfirmHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={ConfirmHandler}>
            <div>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" />
            </div>
            <div>
                <label htmlFor="street">Street</label>
                <input type="text" id="street" />
            </div>
            <div>
                <label htmlFor="postal">Postal Code</label>
                <input type="text" id="postal" />
            </div>
            <div>
                <label htmlFor="city">City</label>
                <input type="text" id="city" />
            </div>
            <button type='button' onClick={props.onCancel}>cancel</button>
            <button>Submit</button>
        </form>
    )
}

export default Checkout;