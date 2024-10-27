module.exports = {
    src_folders: ['tests'],
    webdriver: {
      start_process: true,
      server_path: require('geckodriver').path, // Make sure this points to chromedriver
      port: 9515, // This should match the port Nightwatch expects
    },
    test_settings: {
      default: {
        desiredCapabilities: {
          browserName: 'chrome',
          chromeOptions: {
            args: ['--headless', '--no-sandbox', '--disable-dev-shm-usage'],
          },
        },
      },
    },
  };