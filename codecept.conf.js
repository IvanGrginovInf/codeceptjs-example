exports.config = {
  tests: './codeceptjs/**/*_test.js',
  output: './codeceptjs/output',
  helpers: {
    Puppeteer: {
      url: 'http://example.com',
      show: true,
      windowSize: '1920x1080',
      waitForAction: 2000,
      pressKeyDelay: 0,
    },
  },
  include: {
    I: './codeceptjs/steps/steps_file.js',
  },
  bootstrap: null,
  mocha: {
    "reporterOptions": {
      "reportDir": "output"
    },
  },
  name: 'codeceptjs-example',
  plugins: {
    customLocator: {
      enabled: true,
      attribute: 'data-test',
    },
  },
};
