const licensLinks = [
  {
    'license' : 'GNU',
    'url' : 'https://opensource.org/license/GNU'
  },
  {
    'license' : 'MIT',
    'url' : 'https://opensource.org/license/MIT'
  },
  {
    'license' : 'APACHE 2.0',
    'url' : 'https://opensource.org/license/Apache-2.0'
  },
  {
    'license' : 'ISC',
    'url' : 'https://opensource.org/license/ISC'
  },
];



function renderLicenseBadge(license) {
  if (license != "No License") {
    if(license.indexOf(' ') >= 0){
    let fixedLicense = license.split(' ');
    const [a,b] = fixedLicense;
    let accURL = `${a}%20${b}`
    return `![GitHub license](https://img.shields.io/badge/license-${accURL}-red.svg)`;
  }else{
    return `![GitHub license](https://img.shields.io/badge/license-${license}-red.svg)`;
  }}
  return ``;
}


function renderLicenseLink(license) {
  if (license != "None"){
    return `\n  * [License](#license)\n`
  }
  return ``;
}

function renderLicenseURL(license){
  if(license != 'No License'){
    for(i=0; i< licenseURLS.length; i++){
      if(licenseURLS[i].license == license){
        return `[${license} License](${licenseURLS[i].url})`
      }
    }
    return '';
}
}



function renderLicenseSection(license) {
  return (license ? `  
  ## License 
  This project is license under the ${renderLicenseURL(license)}` : ``);
}


function generateMarkdown(data) {
  const {license, description, username, projectTitle:project, email, install, usage, contributors, test} = data;
  return `# **${project}**
  ${renderLicenseBadge(data.license)}       
  ## Description
  ${description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  Run this command to install the necessary dependencies:
  ~~~
  ${install}
  ~~~
  ## Usage
  ~~~
  ${usage}
  ~~~
  ## Contributing
  ${contributors}
  ${renderLicenseSection(license)}
  ## Tests
  This is the command to run for testing:   
  ~~~
  ${test}
  ~~~
  ## Questions
  For questions or comments about the project, feel free to open an issue in the repository or contact me directly at ${email}. To see my other projects, check out my GitHub: [${username}](https://github.com/${username}).
`;
}

module.exports = generateMarkdown;
