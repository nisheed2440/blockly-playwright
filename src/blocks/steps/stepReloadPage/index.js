import Blockly from 'blockly';
import definition from './definition.json';

Blockly.Blocks.step_reload_page = {
    init: function () {
        this.jsonInit(definition);
    },
};

Blockly.JavaScript.step_reload_page = (block) => {
    const code = `
// Reload page
await page.reload();
`;
    return code;
};
