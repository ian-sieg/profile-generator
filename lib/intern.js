const Employee = require('./employee')

class Intern extends Employee {
    constructor(role, name, email, id, special) {
        super(role, name, email, id)
        this.special = special;
    }

    getSchool() {
        return this.special
    }

    getRole() {
        return 'Intern'
    }
}

module.exports = Intern