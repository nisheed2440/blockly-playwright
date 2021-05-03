import Blockly from 'blockly';
import definition from './definition.json';

Blockly.Blocks.context = {
    init: function () {
        this.jsonInit(definition);
    },
};

Blockly.JavaScript.context = (block) => {
    const dropdown_browser = block.getFieldValue('browser');
    const statements_settings = Blockly.JavaScript.statementToCode(
        block,
        'settings'
    );
    const statements_tabs = Blockly.JavaScript.statementToCode(block, 'tabs');
    // Launch config while creating the browser instance
    const launchConfig = {
        args: [
            '--no-sandbox',
            '--disable-gpu',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--allow-running-insecure-content',
            '--allow-running-localhost',
        ],
        headless: false,
    };
    // Context config while launching an incognito window
    const contextConfig = {
        ignoreHTTPSErrors: true,
    };
    const code = `
// increase the global jest timeout for the file
jest.setTimeout(1 * 60 * 60 * 1000);
// Start the test
describe('Blockly e2e', () => {
  const { ${dropdown_browser} } = require('playwright');
  const launchConfig = ${JSON.stringify({ ...launchConfig })};
  const contextConfig = ${JSON.stringify({ ...contextConfig })};
  let browser = null;
  let context = null;
  // Setup
  beforeAll(async () => {
    // Create browser instance
    browser = await ${dropdown_browser}.launch(launchConfig);
    // Create context instance
    context = await browser.newContext(contextConfig);
    ${statements_settings}
  });
  // Teardown
  afterAll(async () => {
    // Close context instance
    await context.close();
    // Close browser instance
    await browser.close();
  });
  // Tests
  ${statements_tabs}
});`;
    return code;
};
