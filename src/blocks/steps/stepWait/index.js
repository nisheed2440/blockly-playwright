import Blockly from 'blockly';
import definition from './definition.json';

Blockly.Blocks.step_wait = {
    init: function () {
        this.jsonInit(definition);
    },
};

Blockly.JavaScript.step_wait = (block) => {
    const seconds = block.getFieldValue('seconds');
    const code = `
// Add a delay of ${seconds} seconds
await page.waitForTimeout(${seconds * 1000});
`;

    return code;
};
