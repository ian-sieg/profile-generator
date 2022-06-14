const Employee = require('./employee')

class Engineer extends Employee {
    constructor(role, name, email, id, github) {
        super (role, name, email, id)
        this.github = github;
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;