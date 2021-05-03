import Blockly from 'blockly';
import definition from './definition.json';

Blockly.Blocks.setting_clear_permissions = {
    init: function () {
        this.jsonInit(definition);
    },
};

Blockly.JavaScript.setting_clear_permissions = (block) => {
    const code = `
    // Clear context permissions
    await context.clearPermissions();
  `;
    return code;
};
