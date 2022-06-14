const Employee = require('./employee')

class Manager extends Employee {
    constructor(role, name, email, id, officeNumber) {
        super (role, name, email, id)
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager