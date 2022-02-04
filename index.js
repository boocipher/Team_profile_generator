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

function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email?"
        },
        {
            type: "input",
            name: "gitHub",
            message: "What is the engineer's GitHub username"
        }
    ])
    .then(res => {
        const engineer = new Engineer(res.name, res.id, res.email, res.gitHub);
        
        teamMembers.push(engineer);
        cycleQuestion();
        // console.log(teamMembers);
    })
}

function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What is the intern's school?"
        }
    ])
    .then(res => {
        const intern = new Intern(res.name, res.id, res.email, res.school);
        
        teamMembers.push(intern);
        cycleQuestion();
        // console.log(teamMembers);
    })
}

function generateHtml() {
    const DIST_DIR = path.resolve(__dirname, 'dist')
    const distPath = path.join(DIST_DIR, 'team.html');

    if(!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR);
    }

    fs.writeFileSync(distPath, htmlTemplate(teamMembers), 'utf-8')
}

ManagerQuestions();