import {useRef, useState} from 'react';
import classes from './Checkout.module.css'

const isEmpthy = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;

const Checkout = (props) => {
    const [detectValidInput, setDetectValidInput] = useState({
        name: true,
        street: true,
        postalCode: true,
        city: true
    });

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

        const enteredNameValid = !isEmpthy(enteredName);
        const enteredStreetValid = !isEmpthy(enteredStreet);
        const enteredPostalCodeValid = isFiveChars(enteredPostalCode);
        const enteredCityValid = !isEmpthy(enteredCity);

        setDetectValidInput({
            name: enteredNameValid,
            street: enteredStreetValid,
            postalCode: enteredPostalCodeValid,
            city: enteredCityValid
        });
    };

    const nameStyle = (
        `${classes.control} ${!detectValidInput.name ? classes.invalid : ''}`
    );

    return (
        <form className={classes.form} onSubmit={ConfirmHandler}>
            <div className={nameStyle}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" ref={nameInputRef} />
                {!detectValidInput.name && <p>Name is not Valid!</p>}
            </div>
            <div className={`${classes.control} ${!detectValidInput.street ? classes.invalid : ''}`}>
                <label htmlFor="street">Street</label>
                <input type="text" id="street" ref={streetInputRef} />
                {!detectValidInput.street && <p>Street is not valid!</p>}
            </div>
            <div className={`${classes.control} ${!detectValidInput.postalCode ? classes.invalid : ''}`}>
                <label htmlFor="postal">Postal Code</label>
                <input type="text" id="postal" ref={postalCodeInputRef} />
                {!detectValidInput.postalCode && <p>Postal Code is not valid!</p>}
            </div>
            <div className={`${classes.control} ${!detectValidInput.city ? classes.invalid : ''}`}>
                <label htmlFor="city">City</label>
                <input type="text" id="city" ref={cityInputRef} />
                {!detectValidInput.city && <p>City is not valid!</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>cancel</button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    )
}

export default Checkout;