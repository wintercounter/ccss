const path = require('path')

module.exports = function() {
    return {
        name: 'scope-plugin',

        getClientModules() {
            return [path.resolve(__dirname, './scope')]
        }
    }
}
