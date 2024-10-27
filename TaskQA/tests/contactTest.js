                                                    // contact us page test case 1.
                                                    // fill all the form exept the drop box , so the form do not subbmit.




const path = require('path'); 

module.exports = {
    'My first test case using Page Object': function (browser) {
        const filePath = path.resolve('D:\\MyProjects\\Wahid-Kassem.pdf');
        const contactPage = browser.page.contactPage();

        contactPage.navigate();
        contactPage
            .waitForElementVisible('@contactLink', 1000)
            .click('@contactLink');
        browser.execute(function () {
            window.scrollBy(0, 220);
        });

        contactPage
            .waitForElementVisible('@emailInput', 1000)
            .setValue('@emailInput', 'WahidKaseem11@gmail.com')
            .waitForElementVisible('@orderIdInput', 1000)
            .setValue('@orderIdInput', '19755')
            .waitForElementVisible('@messageTextarea', 1000)
            .setValue('@messageTextarea', 'This is a test message.')
            .setValue('@fileUploadInput', filePath)

            .pause(6000);
        contactPage
            .waitForElementVisible('@submitButton', 1000)
            .click('@submitButton')
            .pause(6000);
    browser.end();
}
};
