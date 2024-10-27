                                                // Contact us page test case 2.
                                                // Fill out the entire form so that it submits successfully with file attachment.



                                                

module.exports = {
    url: 'http://automationpractice.multiformis.com/index.php',

    elements: {
        contactLink: '#contact-link',
        contactDropdown: 'select[class="form-control"]',
        webmasterOption: 'option[value="1"]',
        emailInput: '.form-control.grey.validate',
        orderIdInput: '#id_order',
        messageTextarea: 'textarea[name=message]',
        submitButton: '#submitMessage',
        fileUploadInput: "input[name='fileUpload']"
    },

    commands: [{
       
        fillContactForm: function (email, orderId, message, filePath) {
            return this
                //.waitForElementVisible('@contactLink', 1000)
                .click('@contactLink')
                .waitForElementVisible('@contactDropdown', 10000)
                .click('@contactDropdown')     
                .click('@webmasterOption')     
                .waitForElementVisible('@emailInput', 1000)
                .setValue('@emailInput', email)
                .waitForElementVisible('@orderIdInput', 1000)
                .setValue('@orderIdInput', orderId)
                .waitForElementVisible('@messageTextarea', 1000)
                .setValue('@messageTextarea', message)
                .setValue('@fileUploadInput', filePath)
                .click('@submitButton');
        }
    }]
};
