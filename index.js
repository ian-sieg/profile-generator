const inquirer = require('inquirer')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const fs = require('fs')

const staff = []

function anotherStaff() {
inquirer
    .prompt([
        {
            type: 'list',
            name: 'role',
            message: "What is the team member's role?",
            choices: ['Intern', 'Engineer', 'Manager'],
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
        } else if (role === 'Engineer') {
            special = 'GitHub username'
        } else {
            special = 'office number'
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
                    newStaff = new Intern(name, email, id, special)
                } else if (role === 'Engineer') {
                    newStaff = new Engineer(name, email, id, special)
                } else {
                    newStaff = new Manager(name, email, id, special)
                };

                staff.push(newStaff)
                console.log(staff)
                more === 'Yes' ? anotherStaff() : printPage();
            })
    })
}

anotherStaff()

//TODO
// add printPage function to create the actual HTML with input from staff array