import Blockly from 'blockly';
import definition from './definition.json';

Blockly.Blocks.setting_add_cookies = {
    init: function () {
        this.jsonInit(definition);
    },
};

Blockly.JavaScript.setting_add_cookies = (block) => {
    const statements_cookies = Blockly.JavaScript.statementToCode(
        block,
        'cookies'
    );
    const code = `
// Add context cookies
await context.addCookies([
  ${statements_cookies}
]);
`;
    return code;
};
