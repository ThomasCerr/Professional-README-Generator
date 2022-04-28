// TODO: Include packages needed for this application
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input

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
    choices: ['Apache 2.0', 'BSD 3-Clause', 'GNU GPL V3', 'MIT', 'None']
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
    fs.writeFileSync('./src/README.md', generateMarkdown(answers))
  });



