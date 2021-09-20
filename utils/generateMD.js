
function renderLicenseBadge(license) {
  switch (license) {
    case "GNU":
      return "[![License: GNU](https://img.shields.io/badge/License-GNU-orange)]";
    case "MIT":
      return "[![License: GPL v3](https://img.shields.io/badge/License-MIT-orange)](https://www.gnu.org/licenses/gpl-3.0)";
    case "APACHE 2.0":
      return "[![License: MIT](https://img.shields.io/badge/License-APACHE-yellow.svg";
    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]";
    default:
      return ""; 
  };
}


function renderLicenseLink(license) {
  switch (license) {
    case "GNU":
      return "https://opensource.org/licenses/gpl-license";
    case "APACHE 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "ISC":
      return "https://opensource.org/licenses/ISC";
    default:
      return "";
  };
}

function renderLicenseSection(license){
  switch (license) {
    case "GNU":
      return "You may copy and distribute verbatim copies of the Program's source code as you receive it, in any medium, provided that you conspicuously and appropriately publish on each copy an appropriate copyright notice and disclaimer of warranty; keep intact all the notices that refer to this License and to the absence of any warranty; and give any other recipients of the Program a copy of this License along with the Program.";

    case "APACHE 2.0":
      return "";

    case "MIT":
      return "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";

    case "ISC":
      return `Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`;
    default:
      return "";
  };
}

function generateMarkdown(data) {
  return `# ${data.project}
${renderLicenseBadge(data.license)}
# Table of Contents
1. [Description](#description)
2. [Installation Guide](#install)
3. [Usage Guide](#usage)
4. [Testing Guide](#test)
5. [Contributions](#contribution)
6. [License](#license)
7. [Questions](#questions)
## Description <a name="description"></a>
${data.description}
## Installation Guide <a name="install"></a>
${data.install}
## Usage Guide <a name="usage"></a>
${data.usage}
## Testing Guide <a name="test"></a>
${data.test}
## Contributions <a name="contribution"></a>
${data.contributors}
## License <a name="license"></a>
${data.license} ${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}
## Questions <a name="questions"></a>
GitHub name: ${data.username}
(https://github.com/${data.username})
Contact at: ${data.email}`;
}


module.exports = generateMarkdown;
