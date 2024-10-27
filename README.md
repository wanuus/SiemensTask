## Siemens Task

[![CircleCI](https://circleci.com/gh/wanuus/SiemensTask.svg?style=svg)](https://circleci.com/gh/wanuus/SiemensTask)

### Overview
This project focuses on automating testing tasks for the "My Store" website. It encompasses two primary areas:

- *UI Testing:* Validates critical user interactions on the website, ensuring a smooth user experience.
- *API Testing:* Verifies backend services are correctly functioning, enhancing system reliability.

By implementing UI testing with NightwatchJS and API testing with Mocha, this project ensures both frontend and backend components meet the required quality standards.

### Prerequisites
- Node.js: Ensure Node.js is installed (use the latest version). Download it from the official website.
- JavaScript: Make sure JavaScript is enabled and properly configured.
### Installation Steps
1. Download Node.js: Install Node.js if not already installed.

2. Run the following command to confirm the installation:
`bash
node -v
`
3. Install Project Dependencies: Navigate to the project directory and run:
`bash
npm install
`
1. ### UI Testing with Nightwatch
- *POM Setup:* Organized selectors in Page Objects (e.g., Contact Us form, Search).
- *Key Tests*
    - *Contact Us:* Required fields validation, dropdown visibility fixed.
    - *Search:* Tested with "dress," resolved Enter button issue.

*Run UI Tests:* 
bash
npx nightwatch

HTML Report: Located in the reports folder (or configured output_folder).

2. ### Manual Testing
- *Objective:* Cover additional edge cases not included in automation.
- *Test Scenarios:* Created approximately 15 scenarios for critical user flows and edge cases.
- *Execution:* Compared outcomes with expected behavior to verify UI consistency and functionality.

3. ### API Testing with Mocha
- *Authentication Routes:* Validated success/failure cases.
- *Additional Routes:* Added PATCH route testing.

*Run API Tests:*
bash
mocha tests/api


*Generating an XML Report*

*Install mocha-junit-reporter:*

`bash
npm install mocha-junit-reporter --save-dev
`
*Run API tests with XML reporting*

bash
npx mocha tests/api --reporter mocha-junit-reporter --reporter-options mochaFile=./reports/api-test-results.xml

4. ### Continuous Integration (CI) with CircleCI
The CircleCI pipeline includes two steps:
- *UI Testing:* Runs the NightwatchJS tests.

- *API Testing:* Runs the Mocha tests with XML reporting
