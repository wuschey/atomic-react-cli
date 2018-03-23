const questions = [
    {
        type: 'list',
        name: 'atomicType',
        message: 'What type of Component do you need?',
        choices: [
            'Atom',
            'Molecule',
            'Organism',
            'Template',
            'Page',
            'Utility'
        ],

        filter: function (val) {
            return val.toLowerCase();
        }
    }, {
        type: 'input',
        name: 'componentName',
        message: 'Whats that Component name'
    }, {
        type: 'list',
        name: 'componentType',
        message: 'What type of Component do you need?',
        choices: [
            'Stateful', 'Stateless'
        ],

        filter: function (val) {
            return val.toLowerCase();
        }
    }
];

module.exports = questions;