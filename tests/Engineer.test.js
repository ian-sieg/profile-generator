const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('Engineer creation', () => {
        it('should create an object that is a subclass of the Employee class with a github username', () => {
            const role = 'Engineer';
            const name = 'Bob';
            const email = 'bob@aol.com';
            const id = '2';
            const special = 'ianms-moss';

            const testEng = new Engineer(role, name, email, id, special);

            expect(testEng.role).toBe(role);
            expect(testEng.name).toBe(name);
            expect(testEng.email).toBe(email);
            expect(testEng.id).toBe(id);
            expect(testEng.special).toBe(special);
        });
    });

        describe('getGithub', () => {
            it('should return the name provided when creating the new employee', () => {
                const testEng = new Engineer('Engineer', 'Bob', '2', 'bob@aol.com', 'ianms-moss')
                expect(testEng.getGithub()).toBe('ianms-moss')
            })
        });
    
        describe('getRole', () => {
            it('should return the role chosen when creating the new employee', () => {
                const testEng = new Engineer('Engineer', 'Bob', '2', 'bob@aol.com', 'ianms-moss')
                expect(testEng.getRole()).toBe('Engineer')
            })
        });
})