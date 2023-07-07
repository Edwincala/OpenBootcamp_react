export class Contact {
    name = "";
    lastName = "";
    email = "";
    isSignedIn = false;

    constructor(name, lastName, email, isSignedIn) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.isSignedIn = isSignedIn;
    }
}
