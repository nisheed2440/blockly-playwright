import Blockly from 'blockly';
import definition from './definition.json';

Blockly.Blocks.step_get_selector_value = {
    init: function () {
        this.jsonInit(definition);
    },
};

Blockly.JavaScript.step_get_selector_value = (block) => {
    const selector = Blockly.JavaScript.valueToCode(
        block,
        'selector',
        Blockly.JavaScript.ORDER_ATOMIC
    );
    const functionName = Blockly.JavaScript.provideFunction_(
        'getSelectorValue',
        [
            `
const ${Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_} = async (page, selector) => {
    try {
        await page.waitForSelector(selector, { state: 'attached'});
        const elementHandle = await page.$(selector);
        const value = await elementHandle.evaluate((el) => el.value);
        return value;
    } catch (e) {
        return '';
    }
};`,
        ]
    );
    const code = `await ${functionName}(page, ${selector})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
