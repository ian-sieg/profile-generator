const inquirer = require('inquirer')
const htmlGen = require('./src/htmlGen')

const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const { exit } = require('process')

const staff = []

function anotherStaff() {
inquirer
    .prompt([
        {
            type: 'list',
            name: 'role',
            message: "What is the team member's role?",
            choices: ['Intern', 'Engineer'],
        },
        {
            name: 'name',
            message: 'What is their name?',
            validate: (ans) => {
                if(ans !== '') {
                    return true;
                } else {
                    console.error('Their name cannot be blank');
                    return false;
                };
            },
        },
        {
            name: 'email',
            message: 'What is their email address?',
            validate: (ans) => {
                if(ans !== '') {
                    return true;
                } else {
                    console.error('Their email cannot be blank');
                    return false;
                };
            },
        },
        {
            name: 'id',
            message: 'What is their ID number?',
            validate: (ans) => {
                if(ans !== '') {
                    return true;
                } else {
                    console.error('Their ID cannot be blank');
                    return false;
                };
            },
        }
    ])
    .then(({role, name, email, id}) => {
        let special = '';
        if (role === 'Intern') {
            special = 'school name'
        } else {
            special = 'GitHub username'
        };

        inquirer
            .prompt([
                {
                    name: 'special',
                    message: `What is their ${special}?`
                },
                {
                    type: 'list',
                    name: 'more',
                    message: 'Would you like to add another employee?',
                    choices: ['Yes', 'No']
                }
            ])
            .then (({special, more}) => {
                let newStaff;
                if (role === 'Intern') {
                    newStaff = new Intern(role, name, email, id, special)
                } else {
                    newStaff = new Engineer(role, name, email, id, special)
                };

                staff.push(newStaff)
                more === 'Yes' ? anotherStaff() : htmlGen.emplCard(staff);
            })
    })
}

function teamBuild() {
    inquirer
        .prompt([
            {
                name: 'name',
                message: "What is the team manager's name?",
                validate: (ans) => {
                    if(ans !== '') {
                        return true;
                    } else {
                        console.error('Their name cannot be blank');
                        return false;
                    };
                },
            },
            {
                name: 'email',
                message: 'What is their email address?',
                validate: (ans) => {
                    if(ans !== '') {
                        return true;
                    } else {
                        console.error('Their email cannot be blank');
                        return false;
                    };
                },
            },
            {
                name: 'id',
                message: 'What is their ID number?',
                validate: (ans) => {
                    if(ans !== '') {
                        return true;
                    } else {
                        console.error('Their ID cannot be blank');
                        return false;
                    };
                },
            },
            {
                name: 'office',
                message: 'What is their office number?',
                validate: (ans) => {
                    if(ans !== '') {
                        return true;
                    } else {
                        console.error('Their office number cannot be blank');
                        return false;
                    };
                },
            },
            {
                type: 'list',
                name: 'newMem',
                message: "Would you like to add more team members or finish building the team?",
                choices: ['Add more team members', 'Finished'],
            }
        ])
        .then(({name, email, id, office, newMem}) => {
            role = 'Manager'
            let newMngr = new Manager(role, name, email, id, office)
            staff.push(newMngr)

            newMem === 'Finished' ? htmlGen.emplCard(staff) : anotherStaff();
        })
}

teamBuild();