import Blockly from 'blockly';
import definition from './definition.json';

Blockly.Blocks.setting_init_script_path = {
    init: function () {
        this.jsonInit(definition);
    },
};

Blockly.JavaScript.setting_init_script_path = (block) => {
    const text_path = Blockly.JavaScript.quote_(block.getFieldValue('path'));
    const code = `
// Add init script path
await context.addInitScript({
  path: ${text_path},
});
`;
    return code;
};
