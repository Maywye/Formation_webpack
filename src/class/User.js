// class User est un module

export default class User {
    // # = attribu privé

    #firstname;
    #lastname;

    constructor(firstname, lastname) {
        this.#firstname = firstname;
        this.#lastname = lastname;
    }

    getFullname() {
        return `${this.#firstname} ${this.#lastname}`;
    }
}