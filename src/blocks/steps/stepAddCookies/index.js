import Blockly from 'blockly';
import definition from './definition.json';

Blockly.Blocks.step_add_cookies = {
    init: function () {
        this.jsonInit(definition);
    },
};

Blockly.JavaScript.step_add_cookies = (block) => {
    const statements_cookies = Blockly.JavaScript.statementToCode(
        block,
        'cookies'
    );
    const commonFnName = Blockly.JavaScript.provideFunction_('addPageCookies', [
        `
    const ${Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_} = async (cookiesInput = [], page, ctx) => {
        const domain = await page.evaluate(() => document.location.host);
        const cookies = cookiesInput.map((cookie) => {
            return { ...cookie, domain };
        });
        await ctx.addCookies(cookies);
    };`,
    ]);
    const code = `
// Add page cookies
await ${commonFnName}([
  ${statements_cookies}
], page, context);
`;
    return code;
};
