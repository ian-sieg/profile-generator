const Employee = require('./employee')

class Intern extends Employee {
    constructor(role, name, email, id, school) {
        super(role, name, email, id)
        this.school = school;
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return 'Intern'
    }
}

module.exports = Intern