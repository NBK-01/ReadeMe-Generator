switch (license) {
  case "GNU":
    return "[![License: GNU](https://img.shields.io/badge/License-GNU-orange)]";
  case "MIT":
    return "[![License: GPL v3](https://img.shields.io/badge/License-MIT-orange)](https://www.gnu.org/licenses/gpl-3.0)";
  case "APACHE":
    return "[![License: MIT](https://img.shields.io/badge/License-APACHE-yellow.svg";
  case "ISC":
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]";
  default:
    return ""; 
};


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




module.exports = generateMarkdown;
