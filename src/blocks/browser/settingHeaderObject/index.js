import Blockly from 'blockly';
import definition from './definition.json';

Blockly.Blocks.setting_header_object = {
    init: function () {
        this.jsonInit(definition);
    },
};

Blockly.JavaScript.setting_header_object = (block) => {
    const text_name = Blockly.JavaScript.quote_(block.getFieldValue('name'));
    const text_value = Blockly.JavaScript.quote_(block.getFieldValue('value'));
    const code = `${text_name}: ${text_value},`;
    return code;
};
