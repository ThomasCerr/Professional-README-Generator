// TODO: Include packages needed for this application
const fs = require('fs');
var inquirer = require('inquirer');
const generatePage = require('./src/readme-template.js');

// TODO: Create an array of questions for user input
// const questions = [];

inquirer
  .prompt([
{
    type: 'input',
    name: 'projectTitle',
    message: 'What is the name of your project?'
  },
  {
    type: 'input',
    name: 'projectDescription',
    message: 'What is the description of your project?'
},
{
    type: 'input',
    name: 'installationInstructions',
    message: 'What are the installation instructions?'
},
{
    type: 'input',
    name: 'usageInformation',
    message: 'Please enter the usage information?'
},
{
    type: 'input',
    name: 'contributionGuidelines',
    message: 'What are the contribution guidelines?'
},
{
    type: 'input',
    name: 'testInstructions',
    message: 'What are the test instructions?'
},
{
    type: 'checkbox',
    name: 'license',
    message: 'Select your license:',
    choices: ['a', 'b', 'c']
},
{
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your Github Username:'
},
{
    type: 'input',
    name: 'email',
    message: 'Enter your email address:' 
},
])
  .then((answers) => {
      console.log(answers)
      // TODO: Create a function to write README file
    fs.writeFileSync('readme.md', generatePage(answers))
  });



