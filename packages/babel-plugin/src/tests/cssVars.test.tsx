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
            title: 'can create vare',
            code: '<Ui width={widthVar} />;',
            output: `const _ref = widthVar;

/*#__PURE__*/
React.createElement("div", {
  "className": " rj9roo",
  "style": {
    "--v-c": _ref
  }
});`
        }
    ]
})
