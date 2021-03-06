import Blockly from 'blockly';
import { createCheckParentExtension } from '../utils/common';

Blockly.Extensions.register(
    'check_step_parent',
    createCheckParentExtension(
        ['page'],
        'Can only be attached to a page steps block',
        Blockly
    )
);

Blockly.Extensions.register(
    'check_step_cookie_parent',
    createCheckParentExtension(
        ['step_add_cookies'],
        'Can only be used within an add cookies block',
        Blockly
    )
);
