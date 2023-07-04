import PropTypes from "prop-types";
import { Contact } from "../models/contact.class";
import SignedIn from "./SignedIn";

const ContactComponent = ({ contact }) => {
    return (
        <div>
            <h1>
                Nombre de contacto: {contact.name} {contact.lastName}
            </h1>
            <h2>Correo electrónico: {contact.email}</h2>
            <SignedIn signedIn={contact.isSignedIn} />
        </div>
    );
};

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};

export default ContactComponent;
