import Blockly from 'blockly';
import definition from './definition.json';

Blockly.Blocks.step_click_selector = {
    init: function () {
        this.jsonInit(definition);
    },
};

Blockly.JavaScript.step_click_selector = (block) => {
    const selector = Blockly.JavaScript.valueToCode(
        block,
        'selector',
        Blockly.JavaScript.ORDER_ATOMIC
    );
    const button = block.getFieldValue('button');
    const functionName = Blockly.JavaScript.provideFunction_('clickSelector', [
        `
const ${Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_} = async (page, selector, button) => {
    try {
        await page.waitForSelector(selector, { state: 'attached'});
        const elementHandle = await page.$(selector);
        await elementHandle.click({ button });
    } catch (e) {
        throw e;
    }
};
        `,
    ]);
    const code = `await ${functionName}(page, ${selector}, '${button}');`;
    return code;
};
