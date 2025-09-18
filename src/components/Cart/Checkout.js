import {useRef, useState} from 'react';
import classes from './Checkout.module.css'

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;

const Checkout = (props) => {
    const [validInputForm, setValidInputForm] = useState({
        name: true,
        street: true,
        postalCode: true,
        city: true
    })

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();
    
    const ConfirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredValidName = !isEmpty(enteredName);
        const enteredValidStreet = !isEmpty(enteredStreet);
        const enteredValidPostalCode = isFiveChars(enteredPostalCode);
        const enteredValidCity = !isEmpty(enteredCity);

        setValidInputForm({
            name: enteredValidName,
            street: enteredValidStreet,
            postalCode: enteredValidPostalCode,
            city: enteredValidCity
        });

        const formIsValid = enteredValidName && enteredValidStreet && enteredValidPostalCode && enteredValidCity;

        if(!formIsValid) {
            return;
        }

        // submit cart data
        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            postalCode: enteredPostalCode,
            city: enteredCity
        })
    };

    const styleControlName = (
        `${classes.control} ${validInputForm.name ? '' : classes.invalid}`
    )

    return (
        <form className={classes.form} onSubmit={ConfirmHandler}>
            <div className={styleControlName}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" ref={nameInputRef} />
                {!validInputForm.name && <p>please enter a valid name</p>}
            </div>
            <div className={`${classes.control} ${validInputForm.street ? '' : classes.invalid}`}>
                <label htmlFor="street">Street</label>
                <input type="text" id="street" ref={streetInputRef} />
                {!validInputForm.street && <p>please enter a valid street</p> }
            </div>
            <div className={`${classes.control} ${validInputForm.postalCode ? '' : classes.invalid}`}>
                <label htmlFor="postal">Postal Code</label>
                <input type="text" id="postal" ref={postalCodeInputRef} />
                {!validInputForm.postalCode && <p>please enter a valid Postal code</p>}
            </div>
            <div className={`${classes.control} ${validInputForm.city ? '' : classes.invalid}`}>
                <label htmlFor="city">City</label>
                <input type="text" id="city" ref={cityInputRef} />
                {!validInputForm.city && <p>please enter a valid city</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>cancel</button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    )
}

export default Checkout;