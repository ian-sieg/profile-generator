const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, email, id, github) {
        super (name, email, id)
        this.github = github;
    }

    getGithub() {

    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;