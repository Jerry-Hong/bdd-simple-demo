exports.config = {

	// Dependance framework
	framework: 'cucumber',

	// Spec patterns are relative to this directory.
	specs: [
		'./*.feature'
	],

	// The cucumber options about file type and scenario tag
	cucumberOpts: {
		require: './*.js',
		tags: '@rex',
		format: 'pretty'
	},

	// 	The address of a running selenium server.
	seleniumAddress: (process.env.SELENIUM_URL || 'http://127.0.0.1:4444/wd/hub'),

	// Capabilities to be passed to the webdriver instance.
	capabilities: {
		'browserName': (process.env.TEST_BROWSER_NAME || 'chrome'),
		// 'version': (process.env.TEST_BROWSER_VERSION || 'ANY')
	},

	// A base URL for your application under test.
	baseUrl: (process.env.HTTP_HOST || 'http://www.104.com.tw'),

	// Before start test
	onPrepare: function () {
		browser.ignoreSynchronization = true;
	}
};
