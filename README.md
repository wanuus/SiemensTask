# SiemensTask

Overview
This project consists of two main tasks: UI testing using the Nightwatch framework and API testing using Mocha. The UI task focuses on validating user interactions on the website, while the API task ensures the backend services are functioning correctly.

Prerequisites
Node.js: Ensure that Node.js is installed on your machine. Use the latest version.
JavaScript: Make sure that JavaScript is enabled and properly configured.

*UI Testing Steps*

Task Initialization
Download Node.js: Install Node.js from the official website.
Verify Installation: Run the following command in your terminal to ensure that Node.js is installed correctly:
Test Cases:
1. Contact Us
Test Case 1: Ensure form cannot be submitted if required fields are empty.
Action: Identify CSS selectors for form elements.
Issue: Dropdown element was not visible, resolved by making it clickable.

Implementation:
Transitioned from hardcoded selectors to a Page Object Model for better code organization and readability.
Test Completion: All required fields were validated successfully.

3. Search for Dress
Implemented directly using the Page Object Model.
Issue: Encountered a bug with the "Enter" button trigger, which was resolved.

Summary of UI Testing
Four test cases were successfully executed.
Generated an HTML report of the results.
Documented bugs and steps for future reference.

Manual Testing
Conducted manual testing by opening the website and writing scenarios with expected outcomes.
Created approximately 15 test scenarios.

*API Testing Steps*

Task Initialization
Select Test Runner: Chose Mocha for running API tests.
Resolve Configuration Issues: Handled errors related to dependencies and configuration for the testing environment.
Test Cases
1. Authentication Routes
Validated both valid and invalid scenarios to ensure robust authentication handling.

3. Other Routes
Implemented tests for each route, ensuring all functionality was covered.
Patch Route: Added a missing test case, which was successfully handled.

Summary of API Testing
Generated an XML report for all 13 passed test cases.
All tests were executed successfully.

Next Steps
Upload the project to GitHub.
Implement CircleCI for continuous integration and deployment.
