// This function returns a license badge link based on which license is passed in
// If there is no license it returns an empty string

const createBadge = (license) => {
  switch (license) {
    case "MIT":
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    case "PDDL (Public Domain Dedication and License)":
      return '[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)'
    case "Apache License 2":
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    case "Mozilla Public License 2.0":
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    default:
      return ""
  }
}

// This function returns a statement about what license was chosen, if one was chosen.
const createLicenseSection = (license) => {
  if (!license) {
    return 'This project is not covered under any license.'
  } else {
    return `This project is covered under the ${license} license.`
  };
}

// Function to generate markdown for README
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

GitHub Profile: [${data.github}](https://github.com/${data.github})

Email: ${data.email}

## License

${licenseSection}
`;
}

// exports generateMarkdown function to be used by init function in index.js
module.exports = {
  generateMarkdown
}
