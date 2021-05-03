import Blockly from 'blockly';
import definition from './definition.json';

Blockly.Blocks.step_get_page_title = {
    init: function () {
        this.jsonInit(definition);
    },
};

Blockly.JavaScript.step_get_page_title = (block) => {
    const code = 'await page.title()';
    return [code, Blockly.JavaScript.ORDER_NONE];
};
