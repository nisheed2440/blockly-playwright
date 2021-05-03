import Blockly from 'blockly';
import definition from './definition.json';

Blockly.Blocks.step_focus_selector = {
    init: function () {
        this.jsonInit(definition);
    },
};

Blockly.JavaScript.step_focus_selector = (block) => {
    const selector = Blockly.JavaScript.valueToCode(
        block,
        'selector',
        Blockly.JavaScript.ORDER_ATOMIC
    );
    const functionName = Blockly.JavaScript.provideFunction_('focusSelector', [
        `
const ${Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_} = async (page, selector) => {
    try {
        await page.waitForSelector(selector, { state: 'attached'});
        const elementHandle = await page.$(selector);
        await elementHandle.isVisible();
        await elementHandle.isEnabled();
        await elementHandle.focus();
    } catch (e) {
        throw e;
    }
};`,
    ]);
    const code = `await ${functionName}(page, ${selector});`;
    return code;
};
