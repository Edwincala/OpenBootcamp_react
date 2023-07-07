import PropTypes from "prop-types";
import { Contact } from "../models/contact.class";

const ContactComponent = ({ contact, connected, remove }) => {
    return (
        <div className="ms-2 me-auto pt-2">
            <i
                className="bi-x-circle-fill text-danger"
                style={{
                    fontSize: "17px",
                    position: "absolute",
                    right: "3px",
                    top: "-1px"
                }}
                onClick={() => remove(contact)}
            ></i>
            <h6>
                {contact.name} {contact.lastName}
            </h6>
            <p>{contact.email}</p>
            {contact.isSignedIn ? (
                <i
                    className="bi-toggle2-on text-primary connected"
                    onClick={() => connected(contact)}
                ></i>
            ) : (
                <i
                    className="bi-toggle2-off text-danger connected"
                    onClick={() => connected(contact)}
                ></i>
            )}
        </div>
    );
};

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
    connected: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};

export default ContactComponent;
