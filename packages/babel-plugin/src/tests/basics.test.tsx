/**
 * @jest-environment node
 */

// @ts-nocheck

import pluginTester from 'babel-plugin-tester/pure'
import plugin from '@'

pluginTester({
    pluginName: 'babel-plugin-ccss',
    plugin,
    pluginOptions: {
        extract: false
    },
    babelOptions: {
        presets: [require.resolve('@babel/preset-react')],
        plugins: [require.resolve('@babel/plugin-syntax-jsx/lib/index.js')]
    },
    filename: __filename,
    tests: [
        {
            title: 'can identify ccss component',
            code: '<Ui />;',
            output: `/*#__PURE__*/
React.createElement(Ui, null);`
        },
        {
            title: 'can shortify',
            code: '<Ui padding={1} />;',
            output: `/*#__PURE__*/
React.createElement(Ui, {
  p: 1
});`
        },
        {
            title: 'can shortify mapped values',
            code: '<Ui padding={1} display="flex" />;',
            output: `/*#__PURE__*/
React.createElement(Ui, {
  p: 1,
  d: "f"
});`
        }
    ]
})
