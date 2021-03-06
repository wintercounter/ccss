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
            output: `var _ref = __ccss.toValue("w", foo);

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
            output: `var _ref = __ccss.toValue("w", foo);

/*#__PURE__*/
React.createElement("div", {
  style: {
    height: 100,
    "--v-w": _ref
  },
  "className": " ${MurmurHash2('width: var(--v-w);')}"
});`
        },
        {
            title: 'can handle children',
            code: `<Ui height={foo}><Ui width={bar} /></Ui>`,
            output: `var _ref = __ccss.toValue("w", bar);

var _ref2 = __ccss.toValue("h", foo);

/*#__PURE__*/
React.createElement("div", {
  "className": " ${MurmurHash2('height: var(--v-h);')}",
  "style": {
    "--v-h": _ref2
  }
}, /*#__PURE__*/React.createElement("div", {
  "className": " ${MurmurHash2('width: var(--v-w);')}",
  "style": {
    "--v-w": _ref
  }
}));`
        },
        {
            title: 'can handle scopes',
            code: `<Ui width={foo} style={{ height: 100 }}>
    {elements.map(() => <Ui.a height={bar} width={foo}>Click me</Ui.a>)}
</Ui>;`,
            output: `var _ref3 = __ccss.toValue("w", foo);

/*#__PURE__*/
React.createElement("div", {
  style: {
    height: 100,
    "--v-w": _ref3
  },
  "className": " ${MurmurHash2('width: var(--v-w);')}"
}, elements.map(function () {
  var _ref = __ccss.toValue("h", bar);

  var _ref2 = __ccss.toValue("w", foo);

  return /*#__PURE__*/React.createElement("a", {
    "className": " ${MurmurHash2('height: var(--v-h);')} ${MurmurHash2('width: var(--v-w);')}",
    "style": {
      "--v-h": _ref,
      "--v-w": _ref2
    }
  }, "Click me");
}));`
        }
    ]
})
