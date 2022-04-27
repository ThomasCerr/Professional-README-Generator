// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.projectTitle}


# Table of Contents:
1. [Description] (#Description)
2. [Installation] (#Installation)
3. [Usage] (#Usage)
4. [License] (#License)
5. [Contribution] (#Contribution)
6. [Tests] (#Tests)
7. [Questions] (#Questions)
  
## Description
  
  ${answers.projectDescription}
  
## Installation
  
  ${answers.installationInstructions}
  
## Usage
  
  ${answers.usageInformation}
  
## License
  
  ${answers.license}
  
## Contribution
  
  ${answers.contributionGuidelines}
  
## Tests
  
  ${answers.testInstructions}
  
## Questions
  
  If you have further questions or information, please reach out through my Github or Email:
  
  ${answers.githubUsername}
  ${answers.email}
  
      `
    };
  
  
  
    
    
  
`;
}

`;

module.exports = generateMarkdown;
