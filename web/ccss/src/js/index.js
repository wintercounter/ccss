const path = require('path')

module.exports = function() {
    return {
        name: 'client-plugin',

        getClientModules() {
            return [path.resolve(__dirname, './client')]
        }
    }
}
