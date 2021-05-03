import Blockly from 'blockly';
import definition from './definition.json';

Blockly.Blocks.step_get_cookie = {
    init: function () {
        this.jsonInit(definition);
    },
};

Blockly.JavaScript.step_get_cookie = (block) => {
    const text_name = Blockly.JavaScript.valueToCode(
        block,
        'name',
        Blockly.JavaScript.ORDER_ATOMIC
    );
    const commonFnName = Blockly.JavaScript.provideFunction_('getPageCookie', [
        `
  const ${Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_} = async (context, name) => {
    try {
        const cookies = await context.cookies();
        const cookie = cookies.find(c => c.name === name);
        return cookie ? cookie.value : '';
    } catch (e) {
        return '';
    }
};`,
    ]);
    const code = `await ${commonFnName}(context, ${text_name})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
