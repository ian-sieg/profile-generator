const Manager = require('../lib/manager');

describe('Intern', () => {
    describe('Manager creation', () => {
        it('should create an object that is a subclass of the Employee class with a school name', () => {
            const role = 'Manager';
            const name = 'Bob';
            const email = 'bob@aol.com';
            const id = '2';
            const special = '521';

            const testMng = new Manager(role, name, email, id, special);

            expect(testMng.role).toBe(role);
            expect(testMng.name).toBe(name);
            expect(testMng.email).toBe(email);
            expect(testMng.id).toBe(id);
            expect(testMng.special).toBe(special);
        });
    });

        describe('getOfficeNumber', () => {
            it('should return the name provided when creating the new employee', () => {
                const testMng = new Manager('Manager', 'Bob', '2', 'bob@aol.com', '521')
                expect(testMng.getOfficeNumber()).toBe('521')
            })
        });
    
        describe('getRole', () => {
            it('should return the role chosen when creating the new employee', () => {
                const testMng = new Manager('Manager', 'Bob', '2', 'bob@aol.com', '521')
                expect(testMng.getRole()).toBe('Manager')
            })
        });
})