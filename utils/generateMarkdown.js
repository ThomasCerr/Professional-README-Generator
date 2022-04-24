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



  ## Table of Contents:
  
  * [Description] (#Description)
  * [Installation] (#Installation)
  * [Usage] (#Usage)
  * [License] (#License)
  * [Contribution] (#Contribution)
  * [Tests] (#Tests)
  * [Questions] (#Questions)
  
  ## Description
  
  ${answers.Description}
  
  ## 2.Installation
  
  ${answers.installationInstructions}
  
  
  ## 3.Usage
  
  ${answers.usageInformation}
  
  
  ## 4.License
  
  ${answers.license}
  
  
  ## 5.Contribution
  
  ${answers.contributionGuidelines}
  
  
  ## 6.Tests
  
  ${answers.testInstructions}
  
  ## 7.Questions
  
  If you have further questions or information, please reach out through my Github or Email:
  
  ${answers.githubUsername}
  ${answers.email}
  
      `
    };
  
  
  
    
    
  
`;
}

`;

module.exports = generateMarkdown;
