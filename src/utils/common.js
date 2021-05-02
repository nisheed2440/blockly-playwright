/**
 * Function to check the parent type and provide error message.
 * @param {Object} types The config to check parent.
 * @param {Blockly.Block} block The block to be checked.
 * @return {Boolean} If parent exists.
 */
export function checkParent(types = [], block) {
    const parent = block.getSurroundParent()
    if (parent) {
        if (types.indexOf(parent.type) > -1) {
            return true
        }
        return checkParent(types, parent)
    }
    return false
}

/**
 * Function set the block enabled.
 * @param {Object} e The event object.
 * @param {Object} block The blockly block.
 * @param {Boolean} enabled If block is enabled.
 * @param {String} warnMsg The warning message.
 * @return {undefined}
 */
export function setBlockEnabled(
    e,
    block,
    enabled = true,
    warnMsg = '',
    Blockly
) {
    if (!block.isInFlyout) {
        const group = Blockly.Events.getGroup()
        // Makes it so the move and the disable event get undone together.
        Blockly.Events.setGroup(e.group)
        block.setEnabled(enabled)
        block.setWarningText(!enabled ? warnMsg : null)
        Blockly.Events.setGroup(group)
    }
}

/**
 * Function to create the checkParent extension.
 * @param {Array} parentTypes The parent block types.
 * @param {String} warningMsg The warning message to show.
 * @return {undefined}
 */
export function createCheckParentExtension(
    parentTypes = [],
    warningMsg = '',
    Blockly
) {
    return function () {
        this.setOnChange(function (e) {
            const parentValid = checkParent(parentTypes, this)
            setBlockEnabled(e, this, parentValid, warningMsg, Blockly)
        })
    }
}
