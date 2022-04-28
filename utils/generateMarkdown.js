// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
console.log(license)
if (license === 'Apache 2.0'){
return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

}else if (license === 'BSD 3-Clause'){
return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';

}else if (license === 'GNU GPL V3'){
return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';

}else if (license === 'MIT'){
return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

}else if (license === 'None'){
return ''

}}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache 2.0'){
  return "Licensed under [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)";
  
  }else if (license === 'BSD 3-Clause'){
  return 'Licensed under [BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)';
  
  }else if (license === 'GNU GPL V3'){
  return 'Licensed under [GNU GPL V3](https://www.gnu.org/licenses/gpl-3.0.en.html)';
 
  }else if (license === 'MIT'){
  return 'Licensed under [MIT](https://opensource.org/licenses/MIT)';
  
  }else if (license === 'None'){
  return ''

}}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return ``;
      } else {
        return `
- [License](#license)`;
  }
}

function renderLicenseSection2(license) {
  if (license === "None") {
    return ``;
      } else {
        return `
## License`;
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  let license = answers.license[0];
  let licenseBadge = renderLicenseBadge(license);
  console.log (licenseBadge)
  let licenseLink = renderLicenseLink(license);
  let licenseSection = renderLicenseSection(license);
  let licenseSection2 = renderLicenseSection2(license);

  return `
  
  ${licenseBadge}
  
  # ${answers.projectTitle}


# Table of Contents:
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
${licenseSection}
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)
  
## Description
  
  ${answers.projectDescription}
  
## Installation
  
  ${answers.installationInstructions}
  
## Usage 
  
  ${answers.usageInformation}
  
${licenseSection2}
${licenseLink}
  
## Contribution
  
  ${answers.contributionGuidelines}
  
## Tests
  
  ${answers.testInstructions}
  
## Questions
  
  If you have further questions or information, please reach out through my Github at ${answers.githubUsername}, or by Email:${answers.email}.
  
  
      `
    };
  
`;
}

`;

module.exports = generateMarkdown;
