const generatePage = (answers) => {
    return `

#${answers.projectTitle}


## Table of Contents:

1.[Description] (#Description)
2.[Installation] (#Installation)
3.[Usage] (#Usage)
4.[License] (#License)
5.[Contribution] (#Contribution)
6.[Tests] (#Tests)
7.[Questions] (#Questions)

<a name="Description></a>
## 1.Description

${answers.projectDescription}

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



  
  module.exports = generatePage;