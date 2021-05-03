import Blockly from 'blockly';
import definition from './definition.json';

Blockly.Blocks.step_has_selector = {
    init: function () {
        this.jsonInit(definition);
    },
};

Blockly.JavaScript.step_has_selector = (block) => {
    const selector = Blockly.JavaScript.valueToCode(
        block,
        'selector',
        Blockly.JavaScript.ORDER_ATOMIC
    );
    const state = block.getFieldValue('state');
    const functionName = Blockly.JavaScript.provideFunction_('hasSelector', [
        `
const ${Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_} = async (page, selector, options) => {
    try {
        await page.waitForSelector(selector, options);
        return true;
    } catch (e) {
        return false;
    }
};`,
    ]);
    const code = `await ${functionName}(page, ${selector}, { state: '${state}' })`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
