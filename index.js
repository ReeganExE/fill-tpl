const fillTemplate = require('es6-dynamic-template');

/**
 * Ex: fill('something went ${GOOD}').with({ GOOD: 'wrong' });
 */
module.exports = (template) => ({ with: object => fillTemplate(template, object) });
