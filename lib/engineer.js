const Employee = require('./employee')

class Engineer extends Employee {
    constructor(role, name, email, id, special) {
        super (role, name, email, id)
        this.special = special;
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;