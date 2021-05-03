import Blockly from 'blockly';
import definition from './definition.json';

Blockly.Blocks.setting_add_headers = {
    init: function () {
        this.jsonInit(definition);
    },
};

Blockly.JavaScript.setting_add_headers = (block) => {
    const statements_headers = Blockly.JavaScript.statementToCode(
        block,
        'headers'
    );
    const code = `
// Set additional headers
await context.setExtraHTTPHeaders({
  ${statements_headers}
});
`;
    return code;
};
