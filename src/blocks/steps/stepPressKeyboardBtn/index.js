import Blockly from 'blockly';
import definition from './definition.json';

Blockly.Blocks.step_press_keyboard_btn = {
    init: function () {
        this.jsonInit(definition);
    },
};

Blockly.JavaScript.step_press_keyboard_btn = (block) => {
    const button = Blockly.JavaScript.valueToCode(
        block,
        'button',
        Blockly.JavaScript.ORDER_ATOMIC
    );
    const code = `await page.keyboard.press(${button});`;
    return code;
};
