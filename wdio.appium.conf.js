exports.config = {
    specs: [
        './test/*.js'
    ],
    debug: true,
    // ============
    // Capabilities
    // ============
    capabilities: [{
        maxInstances: 1,
        browserName: 'safari',
        deviceName: 'iPhone 7',
        platformVersion: '10.3',
        platformName: 'iOS'
    }],
    // ===================
    // Test Configurations
    // ===================
    sync: true,
    logLevel: 'verbose',
    coloredLogs: true,
    deprecationWarnings: true,
    bail: 0,
    screenshotPath: './errorShots/',
    baseUrl: 'https://olx.ua/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['selenium-standalone','appium'],
    appium: {
        args: {
            address: '127.0.0.1',
            commandTimeout: '7200',
            sessionOverride: true,
            debugLogSpacing: true
        }
    },
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 999999,
        includeStack:true
    },
     before: function (capabilities, specs) {
        let chai = require('chai');
        global.assert = chai.assert
    },
    afterTest: function (test) {
        // if test passed, ignore, else take and save screenshot.
        if (test.passed) {
            return;
        }
        // get current test title and clean it, to use it as file name
        var filename = encodeURIComponent(test.title.replace(/\s+/g, '-'));
        // build file path
        var filePath = this.screenshotPath + filename + '.png';
        // save screenshot
        browser.saveScreenshot(filePath);
        console.log('\n\tScreenshot location:', filePath, '\n');
    },
};
