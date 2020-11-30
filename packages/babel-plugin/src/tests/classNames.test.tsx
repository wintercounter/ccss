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
            output: `const _ref = __ccss.toValue("d", \`blo\${ck}\`);

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
            output: `const _ref = __ccss.toValue("m", [1, foo, 3, 4]);

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
            output: `const _ref = __ccss.toValue("fts", foo);

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
            output: `const _ref = __ccss.toValue("fts", foo);

const _ref2 = __ccss.toValue("m", bar);

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
            output: `const _ref = __ccss.toValue("fts", foo);

const _ref2 = __ccss.toValue("w", bar);

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
        }
    ]
})
