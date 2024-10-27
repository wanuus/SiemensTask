module.exports = {
    src_folders: ['tests'],
    test_settings: {
        default: {
            webdriver: {
                start_process: true,
                server_path: require('geckodriver').path,
                port: 9515,
            },
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    args: ['--headless', '--no-sandbox', '--disable-dev-shm-usage'],
                },
            },
        },
    },
};
