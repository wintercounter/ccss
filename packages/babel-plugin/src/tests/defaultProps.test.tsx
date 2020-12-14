/**
 * @jest-environment node
 */

// @ts-nocheck

import pluginTester from 'babel-plugin-tester/pure'
import plugin from '@'
import { MurmurHash2 } from '@/classNameStrategies'

pluginTester({
    pluginName: 'babel-plugin-ccss',
    plugin,
    pluginOptions: {
        components: {
            DP: {
                defaultProps: {
                    'data-ui': true,
                    display: 'flex'
                }
            }
        }
    },
    babelOptions: {
        presets: [require.resolve('@babel/preset-react')],
        plugins: [require.resolve('@babel/plugin-syntax-jsx/lib/index.js')]
    },
    filename: __filename,
    tests: [
        {
            title: 'can add default prop',
            code: '<DP />;',
            output: `/*#__PURE__*/
React.createElement("div", {
  "data-ui": true,
  "className": " ${MurmurHash2(`display: flex;`)}"
});`
        }
    ]
})
