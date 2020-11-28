/**
 * @jest-environment node
 */

// @ts-nocheck

import pluginTester from 'babel-plugin-tester/pure'
import plugin from '@'
import { MurmurHash2 } from '@/classNameStrategies'

process.env.TEST = 1

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
            title: 'can do variable declaration',
            code: '<Ui width={foo} />;',
            output: `const _ref = globalThis.__ccss.toValue("w", foo);

/*#__PURE__*/
React.createElement("div", {
  "className": " ${MurmurHash2('width: var(--v-w);')}",
  "style": {
    "--v-w": _ref
  }
});`
        },
        {
            title: 'can do variable declaration with existing style object',
            code: '<Ui width={foo} style={{ height: 100 }} />;',
            output: `const _ref = globalThis.__ccss.toValue("w", foo);

/*#__PURE__*/
React.createElement("div", {
  style: {
    height: 100,
    "--v-w": _ref
  },
  "className": " ${MurmurHash2('width: var(--v-w);')}"
});`
        }
    ]
})
