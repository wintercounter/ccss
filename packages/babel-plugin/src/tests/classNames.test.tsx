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
            title: 'can extract single number prop',
            code: '<Ui fontSize={1} />;',
            output: `/*#__PURE__*/
React.createElement("div", {
  "className": "${MurmurHash2(`font-size: 1rem;`)}"
});`
        },
        {
            title: 'can extract prop with existing className',
            code: '<Ui fontSize={1} className="foo" />;',
            output: `/*#__PURE__*/
React.createElement("div", {
  className: "foo ${MurmurHash2(`font-size: 1rem;`)}"
});`
        },
        {
            title: 'can extract prop with existing computed className',
            code: '<Ui fontSize={1} className={foo} />;',
            output: `/*#__PURE__*/
React.createElement("div", {
  className: "${MurmurHash2(`font-size: 1rem;`)} " + foo
});`
        }
    ]
})
