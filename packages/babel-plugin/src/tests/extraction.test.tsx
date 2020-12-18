/**
 * @jest-environment node
 */

// @ts-nocheck

import pluginTester from 'babel-plugin-tester/pure'
import plugin from '@'
import { MurmurHash2 } from '@/classNameStrategies'
import ccss, { toCSSRule } from '@cryptic-css/core'
import propMq from '../../../prop-mq'

// Set a non-ccss context prop
ccss.setProps([[['non'], null, [toCSSRule], { ccssContext: false }]]).use(propMq)

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
        presets: [
            [
                require.resolve('@babel/preset-react'),
                {
                    //runtime: 'automatic'
                }
            ]
        ],
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
  "className": " ${MurmurHash2(`font-size: 1rem;`)}"
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
            title: 'can extract prop with existing, computed className',
            code: '<Ui fontSize={1} className={foo} />;',
            output: `/*#__PURE__*/
React.createElement("div", {
  className: "${MurmurHash2(`font-size: 1rem;`)} " + foo
});`
        },
        {
            title: 'can extract prop with existing, computed, logical expression className',
            code: '<Ui fontSize={1} className={foo || bar} />;',
            output: `/*#__PURE__*/
React.createElement("div", {
  className: "${MurmurHash2(`font-size: 1rem;`)} " + (foo || bar)
});`
        },
        {
            title: 'can extract prop with existing, computed, logical expression className',
            code: '<Ui fontSize={1} className={`hur${ka}`} />;',
            output: `/*#__PURE__*/
React.createElement("div", {
  className: "${MurmurHash2(`font-size: 1rem;`)} " + \`hur\${ka}\`
});`
        },
        {
            title: 'can extract multiple props',
            code: '<Ui fontSize={1} width={100} className={foo} />;',
            output: `/*#__PURE__*/
React.createElement("div", {
  className: "${MurmurHash2(`font-size: 1rem;`)} ${MurmurHash2(`width: 100rem;`)} " + foo
});`
        },
        {
            title: 'can extract string only literal',
            code: '<Ui display={`block`} />;',
            output: `/*#__PURE__*/
React.createElement("div", {
  "className": " ${MurmurHash2(`display: block;`)}"
});`
        },
        {
            title: 'can extract computed literal',
            code: '<Ui display={`blo${ck}`} />;',
            output: `var _ref = __ccss.toValue("d", \`blo\${ck}\`);

/*#__PURE__*/
React.createElement("div", {
  "className": " ${MurmurHash2(`display: var(--v-d);`)}",
  "style": {
    "--v-d": _ref
  }
});`
        },
        {
            title: 'can extract non-computed arrays',
            code: '<Ui margin={[1,2,3,4]} />;',
            output: `/*#__PURE__*/
React.createElement("div", {
  "className": " ${MurmurHash2(`margin: 1rem 2rem 3rem 4rem ;`)}"
});`
        },
        {
            title: 'can extract non-computed objects',
            code: '<Ui child={{ div: { fontSize: 1 } }} />;',
            output: `/*#__PURE__*/
React.createElement("div", {
  "className": " ${MurmurHash2(`
    div {
        font-size: 1rem;
    }`)}"
});`
        },
        {
            title: 'can extract computed arrays',
            code: '<Ui margin={[1,foo,3,4]} />;',
            output: `var _ref = __ccss.toValue("m", [1, foo, 3, 4]);

/*#__PURE__*/
React.createElement("div", {
  "className": " ${MurmurHash2(`margin: var(--v-m);`)}",
  "style": {
    "--v-m": _ref
  }
});`
        },
        {
            title: 'can extract computed objects',
            code: '<Ui child={{ div: { fontSize: foo } }} />;',
            output: `var _ref = __ccss.toValue("fts", foo);

/*#__PURE__*/
React.createElement("div", {
  "className": " ${MurmurHash2(`
    div {
        font-size: var(--v-fts);
    }`)}",
  "style": {
    "--v-fts": _ref
  }
});`
        },
        {
            title: 'can extract computed objects 2',
            code: "<Ui child={{ div: { fontSize: foo }, '> a': { margin: bar } }} />;",
            output: `var _ref = __ccss.toValue("fts", foo);

var _ref2 = __ccss.toValue("m", bar);

/*#__PURE__*/
React.createElement("div", {
  "className": " ${MurmurHash2(`
    div {
        font-size: var(--v-fts);
    }
    > a {
        margin: var(--v-m);
    }`)}",
  "style": {
    "--v-fts": _ref,
    "--v-m": _ref2
  }
});`
        },
        {
            title: 'can extract computed deep objects',
            code: '<Ui child={{ div: { fontSize: foo, child: { a: { width: bar } } } }} />;',
            output: `var _ref = __ccss.toValue("fts", foo);

var _ref2 = __ccss.toValue("w", bar);

/*#__PURE__*/
React.createElement("div", {
  "className": " ${MurmurHash2(`
    div {
        font-size: var(--v-fts);
    a {
        width: var(--v-w);
    }
    }`)}",
  "style": {
    "--v-fts": _ref,
    "--v-w": _ref2
  }
});`
        },
        {
            title: 'can extract computed deep arrays',
            code: `<Ui mq={[['mobile', { fontSize: foo }], ['small', { margin: bar, child: { div: { width: baz } } }]]} />;`,
            output: `var _ref = __ccss.toValue("fts", foo);

var _ref2 = __ccss.toValue("m", bar);

var _ref3 = __ccss.toValue("w", baz);

/*#__PURE__*/
React.createElement("div", {
  "className": " ${MurmurHash2(`@media screen and (min-width: 376px) and (max-width: 639px) { font-size: var(--v-fts); }@media screen and (min-width: 1024px) and (max-width: 1439px) { margin: var(--v-m);
    div {
        width: var(--v-w);
    } }`)}",
  "style": {
    "--v-fts": _ref,
    "--v-m": _ref2,
    "--v-w": _ref3
  }
});`
        },
        {
            title: 'can extract computed deep arrays with non-ccss context static',
            code: `<Ui mq={[['mobile', { fontSize: foo }], ['small', { margin: bar, child: { div: { non: 12 } } }]]} />;`,
            output: `var _ref = __ccss.toValue("fts", foo);

var _ref2 = __ccss.toValue("m", bar);

/*#__PURE__*/
React.createElement("div", {
  "className": " ${MurmurHash2(`@media screen and (min-width: 376px) and (max-width: 639px) { font-size: var(--v-fts); }@media screen and (min-width: 1024px) and (max-width: 1439px) { margin: var(--v-m);
    div {
        non: 12;
    } }`)}",
  "style": {
    "--v-fts": _ref,
    "--v-m": _ref2
  }
});`
        },
        {
            title: 'can extract computed deep arrays with non-ccss context dynamic',
            code: `<Ui mq={[['mobile', { fontSize: foo }], ['small', { margin: bar, child: { div: { non: baz } } }]]} />;`,
            output: `/*#__PURE__*/
React.createElement(Ui, {
  mq: [['mobile', {
    fts: foo
  }], ['small', {
    m: bar,
    child: {
      div: {
        non: baz
      }
    }
  }]]
});`
        },
        {
            title: 'can extract boolean props',
            code: `<Ui display={false} />;`,
            output: `/*#__PURE__*/
React.createElement("div", {
  "className": " ${MurmurHash2(`display: none;`)}"
});`
        },
        {
            title: 'can extract negative values',
            code: `<Ui width={-1} />;`,
            output: `/*#__PURE__*/
React.createElement("div", {
  "className": " ${MurmurHash2(`width: -1rem;`)}"
});`
        },
        {
            title: 'can handle spread',
            code: `<Ui {...props} />;`,
            output: `/*#__PURE__*/
React.createElement(Ui, props);`
        },
        {
            title: 'can handle spread with existing prop',
            code: `<Ui width={1} {...props} />;`,
            output: `function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*#__PURE__*/
React.createElement("div", _extends({
  "className": " ${MurmurHash2(`width: 1rem;`)}"
}, props));`
        },
        {
            title: 'can handle spread with existing prop and existing className',
            code: `<Ui width={1} {...props} className="csurma" />;`,
            output: `function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*#__PURE__*/
React.createElement("div", _extends({}, props, {
  className: "csurma ${MurmurHash2(`width: 1rem;`)}"
}));`
        },
        {
            title: 'can add styles to existing style object',
            code: `<Ui width={foo} style={{ top: 1 }} />;`,
            output: `var _ref = __ccss.toValue("w", foo);

/*#__PURE__*/
React.createElement("div", {
  style: {
    top: 1,
    "--v-w": _ref
  },
  "className": " ${MurmurHash2(`width: var(--v-w);`)}"
});`
        },
        {
            title: 'can add styles to existing variable style object',
            code: `<Ui width={foo} style={purminator} />;`,
            output: `var _ref = __ccss.toValue("w", foo);

/*#__PURE__*/
React.createElement("div", {
  style: Object.assign({
    "--v-w": _ref
  }, purminator),
  "className": " ${MurmurHash2(`width: var(--v-w);`)}"
});`
        },
        {
            title: 'can add styles to existing extended style object',
            code: `<Ui width={foo} style={_extend(purminator, { top: 1 })} />;`,
            output: `var _ref = __ccss.toValue("w", foo);

/*#__PURE__*/
React.createElement("div", {
  style: _extend({
    "--v-w": _ref
  }, purminator, {
    top: 1
  }),
  "className": " ${MurmurHash2(`width: var(--v-w);`)}"
});`
        },
        {
            title: 'can handle scopes v2',
            code: `const x = () => {
    return React.createElement(
        Ui,
        null,
        React.createElement(
            Ui,
            null,
            posts.map((_ref, i) => React.createElement(Ui, { gridArea: areaMap[i] }))
        )
    )
}`,
            output: ` const x = () => {
  return React.createElement("div", null, React.createElement("div", null, posts.map(function (_ref, i) {
    var _ref2 = __ccss.toValue("ga", areaMap[i]);

    return React.createElement("div", {
      "className": " 1f9ii0v",
      "style": {
        "--v-ga": _ref2
      }
    });
  })));
};`
        },
        {
            title: 'can handle existing expression based style prop',
            code: `<Ui width={foo} style={loading ? { color: 'transparent' } : undefined} />`,
            output: `var _ref = __ccss.toValue("w", foo);

/*#__PURE__*/
React.createElement("div", {
  style: Object.assign({
    "--v-w": _ref
  }, loading ? {
    color: 'transparent'
  } : undefined),
  "className": " 9sb9sl"
});`
        }
    ]
})
