
const generateMarkdown = (answers) => {
    return `


#${answers.projectTitle}

## Description
${answers.projectDescription}

## Table of Contents:


[Installation] (#Installation)
[Usage] (#Usage)
[License] (#License)
[Contribution] (#Contribution)
[Tests] (#Tests)
[Questions] (#Questions)

## Installation

${answers.installationInstructions}


## Usage

${answers.usageInformation}


## License

>${answers.license}


## Contribution

${answers.contributionGuidelines}


## Tests

${answers.testInstructions}

## Questions

If you have further questions or information, please reach out to me at ${answers.email} :

You can see more of my work at ${answers.githubUsername}

    `
  };



  
  
  module.exports = generateMarkdown;
  