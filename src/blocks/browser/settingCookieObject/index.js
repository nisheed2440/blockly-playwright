import Blockly from 'blockly';
import definition from './definition.json';

Blockly.Blocks.setting_cookie_object = {
    init: function () {
        this.jsonInit(definition);
    },
};

Blockly.JavaScript.setting_cookie_object = (block) => {
    const text_name = block.getFieldValue('name');
    const text_value = block.getFieldValue('value');
    const text_domain = block.getFieldValue('domain');
    const checkbox_secure = block.getFieldValue('secure') === 'TRUE';
    const cookieObject = JSON.stringify({
        name: text_name,
        value: text_value,
        domain: text_domain,
        secure: checkbox_secure,
        path: '/',
    });
    const code = `${cookieObject},`;
    return code;
};
