// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

const questions = [
inquirer
    .prompt([
        {
            type:'input',
            name: 'title',
            message: 'What is the title of the project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'How would you descript your project?',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log ('Please provide your project description.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How to you install your project?',
            validation: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log ('Please provide your installation instructions.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this project?',
            validation: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log ('Please provide your usage information.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'How to contribute to this project?',
            validation: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log ('Please provide your contribution guidelines.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'testing',
            message: 'How do you test this project?',
            validation: testingInput => {
                if (testingInput) {
                    return true;
                } else {
                    console.log ('Please describe your test instructions.');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'licensing',
            message: 'Please choose a license for your project.',
            choice: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public'],
            validation: licensingInput => {
                if (licensingInput) {
                    return true;
                } else {
                    console.log ('Please pick a license for this project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub Username',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email.',
        }
    ])
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log (err) : console.log('Success!')      
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.promt(questions)
    .then(function (userInput) {
        console.log(userInput)
    })
}

// Function call to initialize app
init();
