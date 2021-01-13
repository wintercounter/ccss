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
        },
        {
            title: 'can avoid conversion of un-extractable',
            code: '<Ui.aside fontSize={1} {...props}>X</Ui.aside>;',
            output: `function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*#__PURE__*/
React.createElement(Ui.aside, _extends({
  "className": " ${MurmurHash2(`font-size: 1px;`)}"
}, props), "X");`
        }
    ]
})
