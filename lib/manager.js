const Employee = require('./employee')

class Manager extends Employee {
    constructor(role, name, email, id, special) {
        super (role, name, email, id)
        this.role = role;
        this.special = special;
    }

    getOfficeNumber() {
        return this.special
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager