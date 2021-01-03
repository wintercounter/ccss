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
    pluginOptions: {},
    babelOptions: {
        presets: [[require.resolve('@babel/preset-react'), { runtime: 'automatic' }]],
        plugins: [require.resolve('@babel/plugin-syntax-jsx/lib/index.js')]
    },
    filename: __filename,
    tests: [
        {
            title: 'can handle jsx pragma',
            code: '<Ui dp="f" />;',
            output: `import { jsx as _jsx } from "react/jsx-runtime";

/*#__PURE__*/
_jsx("div", {
  "className": " ${MurmurHash2(`display: flex;`)}"
});`
        }
    ]
})
