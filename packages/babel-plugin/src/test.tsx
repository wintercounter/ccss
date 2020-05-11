/**
 * @jest-environment node
 */

import pluginTester from 'babel-plugin-tester/pure'
import plugin from '.'

pluginTester({
    pluginName: 'babel-plugin-ccss',
    plugin,
    pluginOptions: {
        identifiers: ['Ui']
    },
    babelOptions: {
        plugins: [require.resolve('mhy_modules/@babel/plugin-syntax-jsx/lib/index.js')]
    },
    filename: __filename,
    tests: [
        {
            title: 'first test',
            // todo with already having classname
            code: 'const x = <Ui display="block" fontSize={1} child={{}} gap={gap} />;',
            output: 'const x = <Ui className="d-b fs-1" child={{}} gap={gap} />;'
        },

        {
            title: 'first test2',
            // todo with already having classname
            code: 'const x = <Ui display="block" fontSize={1} child={{}} gap={gap} />;',
            output: 'const x = <Ui className="d-b fs-1" child={{}} gap={gap} />;'
        }
    ]
})
