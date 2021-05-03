import Blockly from 'blockly';
import definition from './definition.json';

Blockly.Blocks.page = {
    init: function () {
        this.jsonInit(definition);
    },
};

Blockly.JavaScript.page = (block) => {
    const url = Blockly.JavaScript.valueToCode(
        block,
        'url',
        Blockly.JavaScript.ORDER_NONE
    );
    const steps = Blockly.JavaScript.statementToCode(block, 'steps');
    const code = `
// Go to URL ${url}
await page.goto(${url});
${steps}
`;
    return code;
};
