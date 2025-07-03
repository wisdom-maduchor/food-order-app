import {Fragment} from "react"
// import { Fragment } from "react/cjs/react-jsx-runtime.development";
import classes from "./Modal.module.css"
import ReactDOM from "react-dom"

const Backdrop = props => {
    return (
        <div className={classes.backdrop} />
    )
};

const ModalOverlay = props => {
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
};

const PortalElement = document.getElementById('overlays');

const Modal = props => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop/>, PortalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, PortalElement)}
        </Fragment>
    )
};

export default Modal;