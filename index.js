const fs = require('fs');
const inquirer = require('inquirer');



const questions = [
    inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
      validate: Input => {
        if (Input) {
            return true;
        } else {
            console.log('Please enter your user name.');
            return false; 
        }
    } 
    },

    {
      type: 'input',
      message: 'What is your E-mail?',
      name: 'email',
      validate: Input => {
        if (Input) {
            return true;
        } else {
            console.log('Please enter your E-mail.');
            return false; 
        }
    } 
    },

    {
      type: 'input',
      message: 'What is your Project Name?',
      name: 'project',
      validate: Input => {
        if (Input) {
            return true;
        } else {
            console.log('Please enter a project name');
            return false; 
        }
    } 
    },

    {
      type: 'input',
      message: 'description',
      name: 'Tell me more about your project.',
      validate: Input => {
        if (Input) {
            return true;
        } else {
            console.log('Please enter a description');
            return false; 
        }
    } 
    },
    {
      type: 'list',
      message: 'What license is your project under?',
      name: 'license', 
      choices: ['MIT', 'GNU']
    },
  ])
];


function writeToFile(fileName, data) {}


function init() {}


init();
