import { useState } from "react";
import ContactComponent from "./Contact";
import { Contact } from "../models/contact.class";
import ContactForm from "./ContactForm";

const ContactList = () => {
    const contact1 = new Contact(
        "Contact1",
        "Contact1 lastName",
        "contact1@email.com",
        false
    );

    const contact2 = new Contact(
        "Contact2",
        "Contact2 lastName",
        "contact2@email.com",
        true
    );

    const [contacts, setContacts] = useState([contact1, contact2]);

    function addContact(contact) {
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }

    function changeConnected(contact) {
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].isSignedIn = !tempContacts[index].isSignedIn;
        setContacts(tempContacts);
    }

    function removeContact(contact) {
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index, 1);
        setContacts(tempContacts);
    }

    return (
        <div className="d-flex flex-nowrap flex-row align-items-start justify-content-around mb-3 gap-5 flex-lg-wrap">
            <div className="col">
                <h1>Your contacts list</h1>
                <ul className="list-group">
                    {contacts.map((contact, index) => {
                        return (
                            <li key={index} className="list-group-item">
                                <ContactComponent
                                    contact={contact}
                                    connected={changeConnected}
                                    remove={removeContact}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="col">
                <ContactForm add={addContact} />
            </div>
        </div>
    );
};

export default ContactList;
