const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer')
const fs = require('fs');
const path = require('path');

const htmlTemplate = require('./utils/generateHTML');

// Array to push all new team members
const teamMembers = [];

function ManagerQuestions() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?"
        }
    ])
    .then(res => {
        const manager = new Manager(res.name, res.id, res.email, res.officeNumber);
        
        teamMembers.push(manager);
        cycleQuestion();
        // console.log(teamMembers);
    })
}

function cycleQuestion() {
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do next?",
            choices: ['Create Engineer', 'Create Intern', 'I am done']
        }
    ])
    .then(res => {
        switch(res.choice) {
            case 'Create Engineer':
                createEngineer();
                break;
            case 'Create Intern':
                createIntern();
                break;
            default:
                generateHtml();
        }
    })
}