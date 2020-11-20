/**
 * @jest-environment node
 */

// @ts-nocheck

import pluginTester from 'babel-plugin-tester/pure'
import plugin from '.'

pluginTester({
    pluginName: 'babel-plugin-ccss',
    plugin,
    pluginOptions: {
        components: {
            Ui: true,
            DP: {
                defaultProps: {
                    'data-ui': true
                }
            }
        },
        constants: {
            Ui: {
                FontSize: {
                    Small: 10,
                    Extras: {
                        Foo: 'Bar'
                    }
                },
                Button: {
                    Size: {
                        XSmall: 'x-small'
                    }
                },
                Theme: {
                    Foo: {
                        Bar: {
                            Baz: {
                                Array: [0, 0, 0, '#000'],
                                Object: { foo: 1 }
                            }
                        }
                    }
                }
            },
            Single: 'single',
            Duo: {
                Foo: 'Bar'
            },
            Colors: {
                Dark: '#000'
            },
            Calc: ['calc(', 4, ')']
        },
        classNameStrategy: 'testing'
    },
    babelOptions: {
        presets: [require.resolve('@babel/preset-react')],
        plugins: [require.resolve('@babel/plugin-syntax-jsx/lib/index.js')]
    },
    /*fixtures: path.join(__dirname, '__fixtures__'),*/
    filename: __filename,
    tests: [
        {
            title: 'can identify ccss component',
            code: '<Ui />;',
            output: `/*#__PURE__*/
React.createElement(Ui, null);`
        },
        {
            title: 'can shortify',
            code: '<Ui padding={1} />;',
            output: `/*#__PURE__*/
React.createElement(Ui, {
  p: 1
});`
        },
        {
            title: 'can shortify mapped values',
            code: '<Ui padding={1} display="flex" />;',
            output: `/*#__PURE__*/
React.createElement(Ui, {
  p: 1,
  d: "f"
});`
        },
        {
            title: 'can resolve constants',
            code: '<Ui fontSize={Ui.FontSize.Small} />;',
            output: `/*#__PURE__*/
React.createElement(Ui, {
  fts: 10
});`
        }
    ]
})
