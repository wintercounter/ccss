const path = require('path')

module.exports = function() {
    return {
        name: 'scope-plugin',

        getClientModules() {
            return [path.resolve(__dirname, './scope')]
        },

        configureWebpack(config, isServer) {
            if (isServer) {
                const plugin = config.plugins.find(
                    ({ constructor: { name } }) => name === 'StaticSiteGeneratorWebpackPlugin'
                )
                plugin.globals = {
                    window: {}
                }
            }
        }
    }
}
