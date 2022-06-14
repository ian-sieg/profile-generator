const inquirer = require('inquirer')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const fs = require('fs')

const staff = []

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
                if (role === 'Intern') {
                    let newStaff = new Intern(name, email, id, special)
                    console.log(newStaff)
                }
            })
    })