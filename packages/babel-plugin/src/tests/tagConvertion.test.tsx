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
            Ui: true
        }
    },
    babelOptions: {
        presets: [require.resolve('@babel/preset-react')],
        plugins: [require.resolve('@babel/plugin-syntax-jsx/lib/index.js')]
    },
    filename: __filename,
    tests: [
        {
            title: 'can convert to tag name',
            code: '<Ui />;',
            output: `/*#__PURE__*/
React.createElement("div", null);`
        },
        {
            title: 'can convert to tag name :: defined',
            code: '<Ui.aside />;',
            output: `/*#__PURE__*/
React.createElement("aside", null);`
        },
        {
            title: 'can convert to tag name :: closing tag',
            code: '<Ui.aside>X</Ui.aside>;',
            output: `/*#__PURE__*/
React.createElement("aside", null, "X");`
        }
    ]
})
