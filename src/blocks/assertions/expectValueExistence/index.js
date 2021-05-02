import Blockly from 'blockly'
import definition from './definition.json'

Blockly.Blocks.expect_value_existence = {
    init: function () {
        this.jsonInit(definition)
    },
}

Blockly.JavaScript.expect_value_existence = (block) => {
    const lhs = Blockly.JavaScript.valueToCode(
        block,
        'lhs',
        Blockly.JavaScript.ORDER_ATOMIC
    )
    const func = block.getFieldValue('func')
    const code = `
// Assert existence
expect(${lhs}).${func}();
`
    return lhs ? code : null
}
