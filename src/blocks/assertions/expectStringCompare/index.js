import Blockly from 'blockly'
import definition from './definition.json'

Blockly.Blocks.expect_string_compare = {
    init: function () {
        this.jsonInit(definition)
    },
}

Blockly.JavaScript.expect_string_compare = (block) => {
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
// Assert string comparison
expect(${lhs}).${func}(${rhs});
`
    return lhs && rhs ? code : null
}
