class Employee {
    constructor(role, name, email, id) {
        this.role = role;
        this.name = name;
        this.email = email;
        this.id = id;
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getRole() {
        return 'Employee'
    }
}

module.exports = Employee;