// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// 'PD (Public Domain Mark)', 'Apache License 2', 'Mozilla Public License 2.0'
const createBadge = (license) => {
  if (!license) {
    return '';
  } else if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'PDDL (Public Domain Dedication and License)') {
    return '[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)'
  } else if (license === 'Apache License 2') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const createLicenseSection = (license) => {
  if (!license) {
    return 'This project is not covered under any license.'
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
  
  Instructions for installation:

  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests

  ${data.tests}

  ## Questions

  If you have questions about this project, feel free to visit my GitHub profile or reach out directly via email:

  ${data.github}
  
  ${data.email}

  ## License

  ${licenseSection}
`;
}


module.exports = {
  generateMarkdown
}
