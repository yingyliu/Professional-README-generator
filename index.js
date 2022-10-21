// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const fs = require('fs');
const questions = [];

inquirer
    .prompt([
        {
            type:'input',
            name: 'title',
            message: 'What is the title of the project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'How would you descript your project?',
        }
        {
            type: 'input',
            name: 'content',
            message: 'What is your table of contents',
        }
        {
            type: 'input',
            name: 'installation',
            message: 'How to you install your project?',
        }
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this project?'
        }
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
