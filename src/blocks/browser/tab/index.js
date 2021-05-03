import Blockly from 'blockly';
import definition from './definition.json';

Blockly.Blocks.tab = {
    init: function () {
        this.jsonInit(definition);
    },
};

Blockly.JavaScript.tab = (block) => {
    const value_scenario = Blockly.JavaScript.quote_(
        block.getFieldValue('scenario')
    );
    const statements_pages = Blockly.JavaScript.statementToCode(block, 'pages');
    const code = `
test(${value_scenario}, async () => {
  // Create a new page instance
  const page = await context.newPage();
  ${statements_pages}
  // Close page instance
  await page.close();
});`;
    return code;
};
