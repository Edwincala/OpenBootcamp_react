import ContactComponent from "./components/Contact";
import { Contact } from "./models/contact.class";

function App() {
    const exampleContact = new Contact(
        "Edwin",
        "Cala",
        "myemail@email.com",
        true
    );
    return (
        <>
            <ContactComponent contact={exampleContact} />
        </>
    );
}

export default App;
