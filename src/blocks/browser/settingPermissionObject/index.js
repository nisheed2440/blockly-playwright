import Blockly from 'blockly';
import definition from './definition.json';

Blockly.Blocks.setting_permission_object = {
    init: function () {
        this.jsonInit(definition);
    },
};

Blockly.JavaScript.setting_permission_object = (block) => {
    const dropdown_permission = Blockly.JavaScript.quote_(
        block.getFieldValue('permission')
    );
    const code = `${dropdown_permission},`;
    return code;
};
