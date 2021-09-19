const fs = require('fs');
const inquirer = require('inquirer');



const questions = [
    inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
      validate: userInput => {
        if (userInput) {
            return true;
        } else {
            console.log('Please enter your user name.');
            return false; 
        }
    } 
    },
    {
      type: '',
      message: '',
      name: '',
    },
    {
      type: '',
      message: '',
      name: '',
    },
    {
      type: '',
      message: '',
      name: '',
    },
    {
      type: '',
      message: '',
      name: '', 
    },
  ])
];


function writeToFile(fileName, data) {}


function init() {}


init();
