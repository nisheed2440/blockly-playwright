import Blockly from 'blockly';
import definition from './definition.json';

Blockly.Blocks.setting_geolocation = {
    init: function () {
        this.jsonInit(definition);
    },
};

Blockly.JavaScript.setting_geolocation = (block) => {
    const number_latitude = block.getFieldValue('latitude');
    const number_longitude = block.getFieldValue('longitude');
    const code = `
// Grant geolocation permission
await context.grantPermissions(['geolocation']);
// Set geolocation
await context.setGeolocation({latitude: ${number_latitude}, longitude: ${number_longitude}});
`;
    return code;
};
