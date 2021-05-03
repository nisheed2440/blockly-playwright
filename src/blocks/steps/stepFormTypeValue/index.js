import Blockly from 'blockly';
import definition from './definition.json';

Blockly.Blocks.step_form_type_value = {
    init: function () {
        this.jsonInit(definition);
    },
};

Blockly.JavaScript.step_form_type_value = (block) => {
    const selector = Blockly.JavaScript.valueToCode(
        block,
        'selector',
        Blockly.JavaScript.ORDER_ATOMIC
    );
    const value = Blockly.JavaScript.valueToCode(
        block,
        'value',
        Blockly.JavaScript.ORDER_ATOMIC
    );
    const functionName = Blockly.JavaScript.provideFunction_('formTypeValue', [
        `
const ${Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_} = async (page, selector, value) => {
    try {
        await page.waitForSelector(selector, { state: 'attached'});
        const elementHandle = await page.$(selector);
        await elementHandle.type(value, {delay: 100});
    } catch (e) {
        throw e;
    }
};`,
    ]);
    const code = `
// Simulate keyboard input to enter field value
await ${functionName}(page, ${selector}, ${value});
`;
    return code;
};
