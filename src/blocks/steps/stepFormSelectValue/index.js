import Blockly from 'blockly';
import definition from './definition.json';

Blockly.Blocks.step_form_select_value = {
    init: function () {
        this.jsonInit(definition);
    },
};

Blockly.JavaScript.step_form_select_value = (block) => {
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
    const functionName = Blockly.JavaScript.provideFunction_(
        'formSelectValue',
        [
            `
const ${Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_} = async (page, selector, value) => {
    try {
        await page.waitForSelector(selector, { state: 'attached'});
        const elementHandle = await page.$(selector);
        const parsedValue = Array.isArray(value) ? value.map((v) => String(v)) : String(value);
        await elementHandle.selectOption(parsedValue);
    } catch (e) {
        throw e;
    }
};`,
        ]
    );
    const code = `
// Select field option
await ${functionName}(page, ${selector}, ${value});
`;
    return code;
};
