                                               // Contact us page test case 2.
                                                // Fill out the entire form so that it submits successfully with file attachment.


                                                
const path = require('path');

module.exports = {
    'My first test case using Page Object': function (browser) {
        const filePath = path.resolve('D:\\MyProjects\\Wahid-Kassem.pdf');
        const contactPage = browser.page.contactPage3();

        contactPage
            .navigate()
            .waitForElementVisible('@contactLink', 1000)
            .click('@contactLink');

        browser.execute(() => window.scrollBy(0, 220));  // Scroll to make elements visible

        contactPage
            // .waitForElementVisible('@contactDropdown', 10000)
            .click('@contactDropdown')
            .click('@webmasterOption')  // Ensure @webmasterOption is defined in the page object

            .waitForElementVisible('@emailInput', 1000)
            .setValue('@emailInput', 'WahidKaseem11@gmail.com')
            .waitForElementVisible('@orderIdInput', 1000)
            .setValue('@orderIdInput', '19755')
            .waitForElementVisible('@messageTextarea', 1000)
            .setValue('@messageTextarea', 'This is a test message.')
            .setValue('@fileUploadInput', filePath)
            .pause(6000)


            .waitForElementVisible('@submitButton', 1000)
            .click('@submitButton')
            .pause(6000);

        browser.end();
    }
};
