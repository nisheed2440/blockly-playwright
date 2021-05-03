import Blockly from 'blockly';
import definition from './definition.json';

Blockly.Blocks.step_key_down_keyboard = {
    init: function () {
        this.jsonInit(definition);
    },
};

Blockly.JavaScript.step_key_down_keyboard = (block) => {
    const button = Blockly.JavaScript.valueToCode(
        block,
        'button',
        Blockly.JavaScript.ORDER_ATOMIC
    );
    const code = `await page.keyboard.down(${button});`;
    return code;
};
