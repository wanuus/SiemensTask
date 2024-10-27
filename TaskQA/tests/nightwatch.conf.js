const chromedriver = require('chromedriver');

module.exports = {
    src_folders: ['tests'], // Specify the folder where your test files are located
    test_settings: {
        default: {
            // Configuration for the webdriver
            webdriver: {
                start_process: true, // Set to true to start the ChromeDriver process automatically
                server_path: chromedriver.path, // Path to the ChromeDriver binary
                port: 9515, // The port ChromeDriver listens on
            },
            desiredCapabilities: {
                browserName: 'chrome', // Specify the browser to use
                chromeOptions: {
                    args: [
                        '--headless', // Run in headless mode
                        '--no-sandbox', // Disable the sandbox for CI environments
                        '--disable-dev-shm-usage', // Overcome limited resource problems
                    ],
                },
            },
        },
    },
};
