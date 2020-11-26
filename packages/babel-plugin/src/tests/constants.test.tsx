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
            },
            Single: 1
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
            title: 'can resolve constants :: single variable',
            code: '<Ui width={Single} />;',
            output: `/*#__PURE__*/
React.createElement(Ui, {
  w: 1
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
            title: 'can resolve constants :: array',
            code: '<Ui width={Ui.Theme.Foo.Bar.Baz.Object} />;',
            output: `/*#__PURE__*/
React.createElement(Ui, {
  w: {
    "foo": 1
  }
});`
        }
    ]
})
