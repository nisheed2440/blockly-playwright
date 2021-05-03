import Blockly from 'blockly';
import definition from './definition.json';

Blockly.Blocks.setting_init_script_content = {
    init: function () {
        this.jsonInit(definition);
    },
};

Blockly.JavaScript.setting_init_script_content = (block) => {
    const text_content = Blockly.JavaScript.quote_(
        block.getFieldValue('content')
    );
    const code = `
// Add init script content
await context.addInitScript({
  content: ${text_content},
});
`;
    return code;
};
