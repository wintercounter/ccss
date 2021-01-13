/**
 * @jest-environment node
 */

// @ts-nocheck

import pluginTester from 'babel-plugin-tester/pure'
import plugin from '../index'

pluginTester({
    pluginName: 'babel-plugin-ccss',
    plugin,
    pluginOptions: {
        extract: false,
        constants: {
            Ui: {
                Font: {
                    Size: {
                        XL: 2
                    }
                },
                Dim: {
                    HeaderHeight: 50
                },
                FontSize: {
                    Small: 10,
                    Extras: {
                        Foo: 'Bar'
                    }
                },
                Theme: {
                    Foo: {
                        Bar: {
                            Baz: {
                                Array: [0, 0, 0, '#000'],
                                Object: { foo: 1 },
                                Calc: ['calc(', 4, ')']
                            }
                        }
                    }
                }
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
            title: 'can resolve constants :: simple',
            code: '<Ui fontSize={Ui.FontSize.Small} />;',
            output: `/*#__PURE__*/
React.createElement(Ui, {
  fts: 10
});`
        },
        {
            title: 'can resolve constants :: array',
            code: '<Ui width={Ui.Theme.Foo.Bar.Baz.Array} />;',
            output: `/*#__PURE__*/
React.createElement(Ui, {
  w: [0, 0, 0, "#000"]
});`
        },
        {
            title: 'can resolve constants :: object',
            code: '<Ui width={Ui.Theme.Foo.Bar.Baz.Object} />;',
            output: `/*#__PURE__*/
React.createElement(Ui, {
  w: {
    "foo": 1
  }
});`
        },
        {
            title: 'can skip Ui non-ccss Ui calls',
            code: 'var { Ui } = foo; var [ Ui ] = foo',
            output: `var {
  Ui
} = foo;
var [Ui] = foo;`
        },
        {
            title: 'can skip handling assignments',
            code: 'Ui.Theme = foo',
            output: `Ui.Theme = foo;`
        },
        {
            title: 'can skip computed constants',
            code: `const x = Ui.Theme[theme].Signs`,
            output: `const x = Ui.Theme[theme].Signs;`
        },
        {
            title: 'can skip import specifiers',
            code: `import { Ui } from 'mooo'`,
            output: `import { Ui } from 'mooo';`
        },
        {
            title: 'can skip fn arguments',
            code: `const applyTheme = Ui => {}`,
            output: `const applyTheme = Ui => {};`
        }
    ]
})
