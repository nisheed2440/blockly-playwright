import Blockly from 'blockly';
import definition from './definition.json';

Blockly.Blocks.step_get_selector_count = {
    init: function () {
        this.jsonInit(definition);
    },
};

Blockly.JavaScript.step_get_selector_count = (block) => {
    const selector = Blockly.JavaScript.valueToCode(
        block,
        'selector',
        Blockly.JavaScript.ORDER_ATOMIC
    );
    const functionName = Blockly.JavaScript.provideFunction_(
        'getSelectorCount',
        [
            `
const ${Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_} = async (page, selector) => {
    try {
        await page.waitForSelector(selector, { state: 'attached'});
        const count = await page.$$eval(selector, el => el.length);
        return count;
    } catch (e) {
        return 0;
    }
};`,
        ]
    );
    const code = `await ${functionName}(page, ${selector})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
