import Blockly from 'blockly';
import definition from './definition.json';

Blockly.Blocks.step_cookie_object = {
    init: function () {
        this.jsonInit(definition);
    },
};

Blockly.JavaScript.step_cookie_object = (block) => {
    const text_name = Blockly.JavaScript.valueToCode(
        block,
        'name',
        Blockly.JavaScript.ORDER_NONE
    );
    const text_value = Blockly.JavaScript.valueToCode(
        block,
        'value',
        Blockly.JavaScript.ORDER_NONE
    );
    const checkbox_secure = block.getFieldValue('secure') === 'TRUE';
    const code = `{ name: ${text_name}, value: ${text_value}, secure: ${checkbox_secure}, path: '/' },`;
    return code;
};
