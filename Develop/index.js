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
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use?',
        choices: ['MIT', 'PDDL (Public Domain Dedication and License)', 'Apache License 2', 'Mozilla Public License 2.0', "None"]
    },

];


const prompt = inquirer.createPromptModule();




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, secondary.generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Success! Your README has been successfully created!')
    )
};

// TODO: Create a function to initialize app
function init() {
    prompt(questions).then((data) => {
        console.log(data.title);
        const filename = 'README.md';
        writeToFile(filename, data);
    });

}

// Function call to initialize app
init();
