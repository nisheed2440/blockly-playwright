import Blockly from 'blockly';
import { createCheckParentExtension } from '../utils/common';

Blockly.Extensions.register(
    'check_settings_parent',
    createCheckParentExtension(
        ['context'],
        'Can only be attached to a browser settings block',
        Blockly
    )
);

Blockly.Extensions.register(
    'check_tab_parent',
    createCheckParentExtension(
        ['context'],
        'Can only be used within a browser tabs block',
        Blockly
    )
);

Blockly.Extensions.register(
    'check_setting_parent',
    createCheckParentExtension(
        ['context'],
        'Can only be used within a settings block',
        Blockly
    )
);

Blockly.Extensions.register(
    'check_page_parent',
    createCheckParentExtension(
        ['tab'],
        'Can only be used within a new tab block',
        Blockly
    )
);

Blockly.Extensions.register(
    'check_header_parent',
    createCheckParentExtension(
        ['setting_add_headers'],
        'Can only be used within an add headers block',
        Blockly
    )
);
Blockly.Extensions.register(
    'check_cookie_parent',
    createCheckParentExtension(
        ['setting_add_cookies'],
        'Can only be used within an add cookies block',
        Blockly
    )
);
