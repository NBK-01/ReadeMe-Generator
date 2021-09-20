const fs = require('fs');
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMD');

const questions = [
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
      choices: ['MIT', 'GNU', 'APACHE 2.0', 'ISC'],
    },

    {
      type: 'input',
      message: 'What are the installation requirements?',
      name: 'install', 
      validate: Input => {
        if (Input) {
            return true;
        } else {
            console.log('Please enter an installation guide.');
            return false; 
        }
    } 
    },

    {
      type: 'input',
      message: 'How do users use this application?',
      name: 'usage', 
      validate: Input => {
        if (Input) {
            return true;
        } else {
            console.log('Please enter a usage guide.');
            return false; 
        }
    } 
    },

    {
      type: 'input',
      message: 'How can users test this application?',
      name: 'test', 
    },

    {
      type: 'input',
      message: 'Please enter contribution info.',
      name: 'contributors', 
    },


  ]


  function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log("Succesfully generated!")
    );
  }


function init() {
  inquirer.prompt(questions)
  .then((answer) => {
      writeToFile("README", answer);
  });
}





init();
