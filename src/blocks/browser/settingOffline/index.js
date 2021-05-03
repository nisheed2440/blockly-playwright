import Blockly from 'blockly';
import definition from './definition.json';

Blockly.Blocks.setting_offline = {
    init: function () {
        this.jsonInit(definition);
    },
};

Blockly.JavaScript.setting_offline = (block) => {
    const checkbox_offline = block.getFieldValue('offline') === 'TRUE';
    const code = `
// Ser browser offline
await context.setOffline(${checkbox_offline});
`;
    return code;
};
