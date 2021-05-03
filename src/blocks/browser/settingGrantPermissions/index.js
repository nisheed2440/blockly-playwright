import Blockly from 'blockly';
import definition from './definition.json';

Blockly.Blocks.setting_grant_permissions = {
    init: function () {
        this.jsonInit(definition);
    },
};

Blockly.JavaScript.setting_grant_permissions = (block) => {
    const statements_permissions = Blockly.JavaScript.statementToCode(
        block,
        'permissions'
    );
    const code = `
// Grant permissions
await context.grantPermissions([
  ${statements_permissions}
]);
`;
    return code;
};
