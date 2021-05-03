import Blockly from 'blockly';
import definition from './definition.json';

Blockly.Blocks.step_form_check_value = {
    init: function () {
        this.jsonInit(definition);
    },
};

Blockly.JavaScript.step_form_check_value = (block) => {
    const selector = Blockly.JavaScript.valueToCode(
        block,
        'selector',
        Blockly.JavaScript.ORDER_ATOMIC
    );
    const func = block.getFieldValue('func');
    const functionName = Blockly.JavaScript.provideFunction_(
        `form${func}Value`,
        [
            `
const ${Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_} = async (page, selector) => {
    try {
        await page.waitForSelector(selector, { state: 'attached'});
        const elementHandle = await page.$(selector);
        await elementHandle.${func}();
    } catch (e) {
        throw e;
    }
};`,
        ]
    );
    const code = `
// ${String(func).toUpperCase()} field
await ${functionName}(page, ${selector});
`;
    return code;
};
