class Employee {
    constructor(role, name, id, email) {
        this.role = role;
        this.name = name;
        this.id = id;
        this.email = email;
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