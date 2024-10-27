                                                            // contact us page test case 1.
                                                            // fill all the form exept the drop box , so the form do not subbmit.
module.exports = {
    url: 'http://automationpractice.multiformis.com/index.php',


    elements: {
        contactLink: '#contact-link',
        emailInput: '.form-control.grey.validate',
        orderIdInput: '#id_order',
        messageTextarea: 'textarea[name=message]',
        submitButton: '#submitMessage',
        fileUploadInput: "input[name='fileUpload']"
    },

    commands: [{
        // Command to fill the contact form
        fillContactForm: function (email, orderId, message, filePath) {
            return this
                .waitForElementVisible('@contactLink', 1000)
                .click('@contactLink')
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

