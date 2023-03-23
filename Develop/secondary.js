// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// 'PD (Public Domain Mark)', 'Apache License 2', 'Mozilla Public License 2.0'
const createBadge = (license) => {
  if (!license) {
    return '';
  } else if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else {
    return 'You picked something other than MIT'
  }

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const createLicenseSection = (license) => {
  if (!license) {
    return ''
  } else {
    return `This project is covered under the ${license} license.`
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.license)
  const license = `${data.license}`
  const badge = createBadge(license)
  const licenseSection = createLicenseSection(license)
  return `${badge}

  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests

  ${data.tests}

  ## Questions

  ${data.github}
  ${data.email}

  ## License
  ${licenseSection}
`;
}


module.exports = {
  generateMarkdown
}
