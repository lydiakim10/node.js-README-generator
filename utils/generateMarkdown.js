// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache 2.0") {
    return `![License: Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-orange)`
  };
  if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/license-MIT-yellow)`
  };
  if (license === "GPL") {
    return `![License: GPL](https://img.shields.io/badge/license-GPL-brightgreen)`
  } else {
    return "";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache 2.0") {
    return `https://www.apache.org/licenses/LICENSE-2.0`
  }
  if (license === "MIT") {
    return `https://opensource.org/licenses/MIT`
  }
  if (license === "GPL") {
    return `https://www.gnu.org/licenses/gpl-3.0.en.html`
  } else {
    return "";
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else {
    return 
    `The license that is used for this project is: ${license}.`
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Test](#test)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contribution
  ${data.contribution}

  ## Test
  ${data.test}

  ## Questions
  If you have any questions, please feel free to reach out to me at:
  * [Github: ${data.github}(https://github.com/${data.github})]
  * [Email: ${data.email}]
`;
};

module.exports = generateMarkdown;
