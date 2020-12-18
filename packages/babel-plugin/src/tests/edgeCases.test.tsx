/**
 * @jest-environment node
 */

// @ts-nocheck

import pluginTester from 'babel-plugin-tester/pure'
import plugin from '@'

pluginTester({
    pluginName: 'babel-plugin-ccss',
    plugin,
    pluginOptions: {},
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
    "className": " g2tnwn",
    "style": {
      "--v-p-c": _ref
    }
  }));
};`
        },
        {
            title: 'cuk',
            code: `React.createElement(Ui, {
  height: foo,
  style: {
    wow: 1
  },
  "className": " c17m4bmy c1s0kfvh c1enkoy"
});
`,
            output: 'poc'
        }
    ]
})
