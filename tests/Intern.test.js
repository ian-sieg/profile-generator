const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('Intern creation', () => {
        it('should create an object that is a subclass of the Employee class with a school name', () => {
            const role = 'Intern';
            const name = 'Bob';
            const email = 'bob@aol.com';
            const id = '2';
            const special = 'Northwestern';

            const testInt = new Intern(role, name, email, id, special);

            expect(testInt.role).toBe(role);
            expect(testInt.name).toBe(name);
            expect(testInt.email).toBe(email);
            expect(testInt.id).toBe(id);
            expect(testInt.special).toBe(special);
        });
    });

        describe('getSchool', () => {
            it('should return the name provided when creating the new employee', () => {
                const testInt = new Intern('Intern', 'Bob', '2', 'bob@aol.com', 'Northwestern')
                expect(testInt.getSchool()).toBe('Northwestern')
            })
        });
    
        describe('getRole', () => {
            it('should return the role chosen when creating the new employee', () => {
                const testInt = new Intern('Intern', 'Bob', '2', 'bob@aol.com', 'Northwestern')
                expect(testInt.getRole()).toBe('Intern')
            })
        });
})