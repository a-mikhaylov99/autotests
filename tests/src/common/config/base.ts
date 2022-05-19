export const defaultBrowserProd = {
    browserName: 'chrome',
    acceptInsecureCerts: true,
    'selenoid:options': {
        enableVNC: true,
        enableVideo: true,
        screenResolution: '1366x768x24',
    },
}

export const defaultConfigProd = {
    maxInstances: 10,
    specs: ['./src/**/*.ts'],
    capabilities: [defaultBrowserProd],
    logLevel: 'trace',
    waitforTimeout: 20000,
    framework: 'mocha',
    mochaOpts: {
        timeout: 60000,
    },
    reporters: [
        ['allure', {
            outputDir: './allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }],
    ],
    hostname: '10.10.31.133',
    path: '/wd/hub',
    connectionRetryCount: 3,
    connectionRetryTimeout: 60000,
    autoCompileOpts: {
        autoCompileOpts: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json',
        },
        tsConfigPathsOpts: {
            baseUrl: './',
        },
    },
}

export const defaultConfigDebug = {
    ...defaultConfigProd,
    runner: 'local',
    maxInstances: 1,
    services: ['chromedriver'],
    reporters: ['spec'],
    logLevel: 'trace',
    capabilities: [{
        browserName: 'chrome',
    }],
}
