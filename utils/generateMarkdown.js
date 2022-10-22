// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  
  [![license](https://img.shields.io/badge/license-${data.licensing}-blue)](https://shields.io)

  ## Table of Contents
  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contribution](#contribution)
  -[Tests](#testing)
  -[Additional Info](#addition-info)
  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Test
  ${data.testing}

  ## License:
  This project is licensed under ${data.licensing}

  ## Additional Info
  If you have any question, please feel free to reach me here:
  -Github: [${data.github}] (https://github.com/${data.github})
  -Email: ${data.email}`;
}

module.exports = generateMarkdown;
