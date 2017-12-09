module.exports = {
  // server configuration
  // selenium grid/selenium standalone/appium are accepted
  host: '192.168.3.7',
  port: '4444',

  // capabilities to be tested against
  capabilities: [
    {
      browserName: 'vt',
      'appium-version': '1.7',
      platformName: 'iOS',
      platformVersion: '11.1',
      deviceName: 'iPhone X',
      automationName: 'XCUITest',
      wdaLocalPort: 8101,
      vtxTestName: 'iOS UIWebView',
      vtEnv: 'UIWebView'
    },
    {
      browserName: 'safari',
      'appium-version': '1.7',
      platformName: 'iOS',
      platformVersion: '11.1',
      deviceName: 'iPhone X',
      automationName: 'XCUITest',
      vtxTestName: 'iOS Safari',
      wdaLocalPort: 8102
    },
    {
      browserName: 'vt',
      'appium-version': '1.7',
      platformName: 'Android',
      platformVersion: '7.1.1',
      deviceName: 'Android Emulator',
      avd: 'P_25',
      vtxTestName: 'Android WebView',
      vtEnv: 'WebView'
    },
    {
      browserName: 'chrome',
      'appium-version': '1.7',
      platformName: 'Android',
      platformVersion: '7.1.1',
      deviceName: 'Android Emulator',
      vtxTestName: 'Android Chrome',
      avd: 'P2_25'
    },
    {
      browserName: 'safari',
      version: '',
      platform: 'MAC',
      vtxTestName: 'Mac Safari'
    },
    {
      browserName: 'firefox',
      version: '',
      platform: 'MAC',
      vtxTestName: 'Mac Firefox'
    },
    {
      browserName: 'chrome',
      version: '',
      platform: 'MAC',
      vtxTestName: 'Mac Chrome'
    },
    {
      browserName: 'internet explorer',
      version: '',
      platform: 'WIN10',
      vtxTestName: 'Win10 IE'
    },
    {
      browserName: 'MicrosoftEdge',
      version: '',
      platform: 'WIN10',
      vtxTestName: 'Win10 Edge'
    }
  ]
};
