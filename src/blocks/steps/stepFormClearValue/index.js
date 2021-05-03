import Blockly from 'blockly';
import definition from './definition.json';

Blockly.Blocks.step_form_clear_value = {
    init: function () {
        this.jsonInit(definition);
    },
};

Blockly.JavaScript.step_form_clear_value = (block) => {
    const selector = Blockly.JavaScript.valueToCode(
        block,
        'selector',
        Blockly.JavaScript.ORDER_ATOMIC
    );
    const functionName = Blockly.JavaScript.provideFunction_('formClearValue', [
        `
const ${Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_} = async (page, selector) => {
    try {
        await page.waitForSelector(selector, { state: 'attached'});
        const elementHandle = await page.$(selector);
        await elementHandle.focus();
        const value = await elementHandle.evaluate((el) => el.value);
        await page.keyboard.press('End');
        if (value) {
            for (let i = 0; i < value.length; i++) {
                await page.keyboard.press('Backspace');
            }
        }    
    } catch (e) {
        throw e;
    }
};`,
    ]);
    const code = `
// Clear form field by simulating pressing backspace 
await ${functionName}(page, ${selector});
`;
    return code;
};
