const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('Employee creation', () => {
        it('should create a class containing role, name, id and email properties', () => {
            const role = 'Employee';
            const name = 'Bob';
            const email = 'bob@aol.com';
            const id = '2';

            const testEmp = new Employee(role, name, email, id);

            expect(testEmp.role).toBe(role);
            expect(testEmp.name).toBe(name);
            expect(testEmp.email).toBe(email);
            expect(testEmp.id).toBe(id);
        })
    });

    describe('getName', () => {
        it('should return the name provided when creating the new employee', () => {
            const testEmp = new Employee('Employee', 'Bob', '2', 'bob@aol.com')
            expect(testEmp.getName()).toBe('Bob')
        })
    });

    describe('getRole', () => {
        it('should return the role chosen when creating the new employee', () => {
            const testEmp = new Employee('Bob', '2', 'bob@aol.com')
            expect(testEmp.getRole()).toBe('Employee')
        })
    });

});