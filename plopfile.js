module.exports = function (plop) {
    // create your generators here
    plop.setGenerator('blocks', {
        description: 'Generator for blockly blocks in playwright',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Block name:',
            },
            {
                type: 'list',
                name: 'type',
                message: 'Type:',
                choices: ['assertions', 'browser', 'steps'],
                default: 0,
            },
        ], // array of inquirer prompts
        actions: [
            {
                type: 'add',
                path: 'src/blocks/{{type}}/{{camelCase name}}/definition.json',
                template: '{}',
            },
            {
                type: 'add',
                path: 'src/blocks/{{type}}/{{camelCase name}}/index.js',
                templateFile: 'templates/block.hbs',
            },
            {
                type: 'append',
                path: 'src/blocks/{{type}}/index.js',
                template: "import './{{camelCase name}}';",
            },
        ], // array of actions
    });
};
