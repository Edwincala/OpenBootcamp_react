import PropTypes from "prop-types";
import { useRef } from "react";
import { Contact } from "../models/contact.class";

const ContactForm = ({ add }) => {
    const nameRef = useRef("");
    const lastNameRef = useRef("");
    const emailRef = useRef("");

    function addContact(e) {
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            lastNameRef.current.value,
            emailRef.current.value,
            false
        );

        add(newContact);

        nameRef.current.value = "";
        lastNameRef.current.value = "";
        emailRef.current.value = "";
    }
    return (
        <form
            className="d-flex justify-content-center align-items-center p-5 mt-4 bg-white border rounded"
            onSubmit={addContact}
        >
            <div className="flex-fill">
                <div className="mb-3">
                    <label htmlFor="inputName" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        ref={nameRef}
                        name="inputName"
                        className="form-control form-control-lg"
                        required
                        autoFocus
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputLastName" className="form-label">
                        Last Name
                    </label>
                    <input
                        type="text"
                        ref={lastNameRef}
                        name="inputLastName"
                        className="form-control form-control-lg"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        ref={emailRef}
                        name="inputEmail"
                        className="form-control form-control-lg"
                        required
                    />
                </div>
                <button className="btn btn-primary" type="submit">
                    Add new contact
                </button>
            </div>
        </form>
    );
};

ContactForm.propTypes = {
    add: PropTypes.func.isRequired
};

export default ContactForm;
