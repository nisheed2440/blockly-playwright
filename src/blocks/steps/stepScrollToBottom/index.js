import Blockly from 'blockly';
import definition from './definition.json';

Blockly.Blocks.step_scroll_to_bottom = {
    init: function () {
        this.jsonInit(definition);
    },
};

Blockly.JavaScript.step_scroll_to_bottom = (block) => {
    const functionName = Blockly.JavaScript.provideFunction_('scrollToBottom', [
        `
// Scroll to bottom support function
const ${Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_} = () => {
    return new Promise(resolve => {
        let totalHeight = 0;
        const distance = 100;
        const timer = setInterval(() => {
            const scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;
            if (totalHeight >= scrollHeight) {
                clearInterval(timer);
                resolve();
            }
        }, 100);
    });
};`,
    ]);
    const code = `
  // Scroll to bottom
  await page.waitForSelector('body');
  await page.evaluate(${functionName});
`;

    return code;
};
