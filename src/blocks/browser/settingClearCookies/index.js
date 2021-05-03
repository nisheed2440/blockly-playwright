import Blockly from 'blockly';
import definition from './definition.json';

Blockly.Blocks.setting_clear_cookies = {
    init: function () {
        this.jsonInit(definition);
    },
};

Blockly.JavaScript.setting_clear_cookies = (block) => {
    const code = `
    // Clear context cookies
    await context.clearCookies();
  `;
    return code;
};
