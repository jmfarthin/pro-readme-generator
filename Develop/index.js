// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const secondary = require('./secondary');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please type a description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter your instructions for installation?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the instructions to use your project?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can someone contribute to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the tests for this application?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your preferred email?',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Which license would you like to use?',
        choices: ['MIT ', 'PD (Public Domain Mark)', 'Apache License 2', 'Mozilla Public License 2.0']
    },

];


const prompt = inquirer.createPromptModule();




// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    console.log(secondary.renderLicenseBadge('testing'), secondary.pie);
    prompt(questions).then((answers) => {
        console.log(answers.title);
        const filename = `${answers.title.toLowerCase().split(' ').join('')}.md`;

    });
    
}

// Function call to initialize app
init();
