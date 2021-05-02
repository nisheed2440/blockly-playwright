import Blockly from 'blockly'
import definition from './definition.json'

Blockly.Blocks.expect_value_compare = {
    init: function () {
        this.jsonInit(definition)
    },
}

Blockly.JavaScript.expect_value_compare = (block) => {
    const lhs = Blockly.JavaScript.valueToCode(
        block,
        'lhs',
        Blockly.JavaScript.ORDER_ATOMIC
    )
    const rhs = Blockly.JavaScript.valueToCode(
        block,
        'rhs',
        Blockly.JavaScript.ORDER_ATOMIC
    )
    const func = block.getFieldValue('func')
    const code = `
// Assert value comparison
expect(${lhs}).${func}(${rhs});
`
    return lhs && rhs ? code : null
}
