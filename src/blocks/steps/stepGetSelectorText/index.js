import Blockly from 'blockly';
import definition from './definition.json';

Blockly.Blocks.step_get_selector_text = {
    init: function () {
        this.jsonInit(definition);
    },
};

Blockly.JavaScript.step_get_selector_text = (block) => {
    const selector = Blockly.JavaScript.valueToCode(
        block,
        'selector',
        Blockly.JavaScript.ORDER_ATOMIC
    );
    const functionName = Blockly.JavaScript.provideFunction_(
        'getSelectorText',
        [
            `
const ${Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_} = async (page, selector) => {
    try {
        await page.waitForSelector(selector, { state: 'attached'});
        const elementHandle = await page.$(selector);
        const text = await elementHandle.textContent();
        return text;
    } catch (e) {
        return '';
    }
};`,
        ]
    );
    const code = `await ${functionName}(page, ${selector})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
