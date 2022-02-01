var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');


var reporter = new HtmlScreenshotReporter({
  dest: 'reports/lastrun',
  filename: 'report.html',
  reportTitle: 'Protractor Test Report',
  cleanDestination: true,
  showSummary: false,
  showConfiguration: false

});

exports.config = {
    baseUrl:"https://www.alza.cz/EN/",
    framework: 'jasmine2',
	jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 90000,

	},
	allScriptsTimeout: 90000,
	getPageTimeout: 90000,
	suites: {
    main: 'functionalModules/mainPageTests.js',
    search: 'functionalModules/searchTests.js',
    util: 'functionalModules/utilTests.js',
    cart: 'functionalModules/cartTests.js',
    },
    capabilities: {
        'browserName': 'chrome',
        chromeOptions: {
          prefs: {
            profile: {
              default_content_settings: {
                cookies: 0
              }
            }
          },
            args: [ "incognito", "no-sandbox", "--disable-gpu", "--window-size=800x600", '--disable-javascript' ],
        },
        'chromeOnly': 'true',
        'loggingPrefs': {
            'driver': 'ALL',
            'server': 'ALL',
            'browser': 'ALL'
        }
    },

    onPrepare: function() {

		jasmine.getEnv().addReporter(reporter);
    	jasmine.DEFAULT_TIMEOUT_INTERVAL = 900000;
    },

  beforeLaunch: function() {
    return new Promise(function(resolve){
      reporter.beforeLaunch(resolve);
    });
  },
	afterLaunch: function(exitCode) {
    return new Promise(function(resolve){

    });
  }

};
