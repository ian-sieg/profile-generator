const Employee = require('./employee')

class Manager extends Employee {
    constructor(role, name, email, id, office) {
        super (role, name, email, id)
        this.role = role;
        this.office = office;
    }

    getOfficeNumber() {
        return this.office
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager