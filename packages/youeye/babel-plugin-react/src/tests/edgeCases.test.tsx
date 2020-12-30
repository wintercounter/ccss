/**
 * @jest-environment node
 */

// @ts-nocheck

import pluginTester from 'babel-plugin-tester/pure'
import { MurmurHash2 } from '@/classNameStrategies'
import plugin from '@'

pluginTester({
    pluginName: 'babel-plugin-ccss',
    plugin,
    pluginOptions: {
        constants: {
            Ui: {
                Hurkanoid: 1
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
            title: 'can handle edge case children scope',
            code: `const DropDownLogout = closeDropDown => (
    <Ui>
        <Ui.span p={bar} />
    </Ui>
)`,
            output: `const DropDownLogout = function (closeDropDown) {
  var _ref = __ccss.toValue("p", bar);

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    "className": " ${MurmurHash2('padding: var(--v-p-c);')}",
    "style": {
      "--v-p-c": _ref
    }
  }));
};`
        }
    ]
})
