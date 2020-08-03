/**
 * @jest-environment node
 */

// @ts-nocheck

import pluginTester from 'babel-plugin-tester/pure'
import plugin from '.'

const options = require('ccss').defaultOptions

// Custom prop
options.props.button = () => ''

pluginTester({
    pluginName: 'babel-plugin-ccss',
    plugin,
    pluginOptions: {
        expressions: {
            options
        },
        identifiers: {
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
            }
        },
        classNameStrategy: 'testing'
    },
    babelOptions: {
        plugins: [require.resolve('mhy_modules/@babel/plugin-syntax-jsx/lib/index.js')]
    },
    /*fixtures: path.join(__dirname, '__fixtures__'),*/
    filename: __filename,
    tests: [
        {
            title: 'single prop',
            code: '<Ui display="block" />;',
            output: '<div className="display_block" />;'
        },
        {
            title: 'single prop with existing className',
            code: '<Ui className="cls" display="block" />;',
            output: '<div className="cls display_block" />;'
        },
        {
            title: 'single prop with existing expression className',
            code: '<Ui className={cls} display="block" />;',
            output: '<div className={"display_block " + cls} />;'
        },
        {
            title: 'single prop with existing logical expression className',
            code: '<Ui className={cls || als} display="block" />;',
            output: '<div className={"display_block " + (cls || als)} />;'
        },
        {
            title: 'single prop with existing tagged expression className',
            code: '<Ui className={`hur${ka}`} display="block" />;',
            output: '<div className={"display_block " + `hur${ka}`} />;'
        },
        {
            title: 'multiple props',
            code: '<Ui display="block" textAlign="center" />;',
            output: '<div className="display_block text_align_center" />;'
        },
        {
            title: 'multiple props with existing className',
            code: '<Ui className="cls" display="block" textAlign="center" />;',
            output: '<div className="cls display_block text_align_center" />;'
        },
        {
            title: 'handle property tag',
            code: '<Ui.h2 />;',
            output: '<h2 />;'
        },
        {
            title: 'handle variable value',
            code: '<Ui margin={foo} />;',
            output: '<Ui m={foo} />;'
        },
        {
            title: 'correct closing tag',
            code: '<Ui.p></Ui.p>;',
            output: '<p></p>;'
        },
        {
            title: 'correct closing tag in case it cannot change',
            code: '<Ui.p margin={foo}></Ui.p>;',
            output: '<Ui.p m={foo}></Ui.p>;'
        },
        {
            title: 'handles string literals',
            code: '<Ui margin={`foo`} />;',
            output: '<div className="margin_foo" />;'
        },
        {
            title: 'handles string literals with dynamic content',
            code: '<Ui margin={`foo${bar}`} />;',
            output: '<Ui m={`foo${bar}`} />;'
        },
        {
            title: 'resolves predefined constants => Single',
            code: '<Ui fontSize={Single} />;',
            output: '<div className="font_size_single" />;'
        },
        {
            title: 'resolves predefined constants => Duo.Foo',
            code: '<Ui fontSize={Duo.Foo} />;',
            output: '<div className="font_size__bar" />;'
        },
        {
            title: 'resolves predefined constants => Ui.FontSize.Small',
            code: '<Ui fontSize={Ui.FontSize.Small} />;',
            output: '<div className="font_size_10" />;'
        },
        {
            title: 'resolves predefined constants => Ui.FontSize.Extras.Foo',
            code: '<Ui fontSize={Ui.FontSize.Extras.Foo} />;',
            output: '<div className="font_size__bar" />;'
        },
        {
            title: 'resolves predefined constants => only truly contants',
            code: `<Ui fontSize={Ui.FontSize[cond ? 'x' : 'y']} />;`,
            output: `<Ui fts={Ui.FontSize[cond ? 'x' : 'y']} />;`
        },
        {
            title: 'handles array values => static',
            code: '<Ui margin={[1,2,3,4]} />;',
            output: '<div className="margin__1_2_3_4_" />;'
        },
        {
            title: 'handles array values => non-static',
            code: '<Ui margin={[1,2,foo,4]} />;',
            output: '<Ui m={[1, 2, foo, 4]} />;'
        },
        {
            title: 'handles array values => static:resolved',
            code: '<Ui margin={[1,Ui.FontSize.Small,3,4]} />;',
            output: '<div className="margin__1_10_3_4_" />;'
        },
        {
            title: 'handles non-ccss attributes',
            code: '<Ui fontSize={10} onClick={() => {}} />;',
            output: '<div onClick={() => {}} className="font_size_10" />;'
        },
        {
            title: 'handles non-ccss attributes => non-static',
            code: '<Ui fontSize={foo} onClick={() => {}} />;',
            output: '<Ui fts={foo} onClick={() => {}} />;'
        },
        {
            title: 'handles having both at the same time',
            code: '<Ui fontSize={foo} margin={1} />;',
            output: '<Ui fts={foo} className="margin_1" />;'
        },
        {
            title: 'handles child => static',
            code: '<Ui child={{ sel: { margin: 1 }}} />;',
            output: '<div className="child' + '___sel____m__1__" />;'
        },
        {
            title: 'handles child => dynamic',
            code: '<Ui child={{ sel: { margin: foo }}} />;',
            output: `<Ui child={{
  sel: {
    m: foo
  }
}} />;`
        },
        {
            title: 'handles child => static+dynamic',
            code: '<Ui child={{ sel: { margin: 1, padding: foo }}} />;',
            output: `<Ui child={{
  sel: {
    p: foo
  }
}} className="child___sel____m__1__" />;`
        },
        {
            title: 'handles mq => static',
            code: `<Ui mq={['m', { margin: 1 }]} />;`,
            output: `<div className="mq___m____m__1__" />;`
        },
        {
            title: 'handles mq => dynamic',
            code: `<Ui mq={['m', { margin: foo }]} />;`,
            output: `<Ui mq={['m', {
  m: foo
}]} />;`
        },
        {
            title: 'handles mq => dynamic as variable',
            code: `<Ui mq={['m', foo]} />;`,
            output: `<Ui mq={['m', foo]} />;`
        },
        {
            title: 'handles mq => static and dynamic',
            code: `<Ui mq={['m', { margin: foo, padding: 1 }]} />;`,
            output: `<Ui mq={['m', {
  m: foo
}]} className="mq___m____p__1__" />;`
        },
        {
            title: 'handles mq => static and dynamic and multilevel',
            code: `<Ui mq={[['m', { margin: foo, padding: 1 }], ['t', { margin: 2, padding: bar }]]} />;`,
            output: `<Ui mq={[['m', {
  m: foo
}], ['t', {
  p: bar
}]]} className="mq____m____p__1_____t____m__2___" />;`
        },
        {
            title: 'handles mq => empty objects are static',
            code: `<Ui mq={[['m', { padding: 1 }]]} />;`,
            output: `<div className="mq____m____p__1___" />;`
        },
        {
            title: 'handles object-spread',
            code: `<Ui {...foo} />;`,
            output: `<Ui {...foo} />;`
        },
        {
            title: 'handles boolean => true',
            code: `<Ui mid={true} />;`,
            output: `<div className="mid_true" />;`
        },
        {
            title: 'handles boolean => false',
            code: `<Ui mid={false} />;`,
            output: `<div className="mid_false" />;`
        },
        {
            title: 'handles boolean => null',
            code: `<Ui mid />;`,
            output: `<div className="mid_true" />;`
        },
        {
            title: 'handles unary => expression',
            code: `<Ui margin={-40} />;`,
            output: `<div className="margin__40" />;`
        },
        {
            title: 'handles unary => array',
            code: `<Ui margin={[-40, 10, -5]} />;`,
            output: `<div className="margin___40_10__5_" />;`
        },
        {
            title: 'handles unary => object',
            code: `<Ui child={{
    foo: { margin: -1 }
}} />;`,
            output: `<div className="child___foo____m___1__" />;`
        },
        {
            title: 'handles unary => object + array',
            code: `<Ui child={{
    foo: { margin: [-10, 10, -40] }
}} />;`,
            output: `<div className="child___foo____m____10_10__40___" />;`
        },
        {
            title: 'handles defaultProps',
            code: `<DP />;`,
            output: `<div data-ui />;`
        },
        {
            title: 'handles MemberExpressions',
            code: `<Ui button={{ size: Ui.Button.Size.XSmall }} />;`,
            output: `<div className="button___size___x_small__" />;`
        },
        {
            title: 'handles non-ccss MemberExpressions',
            code: `<Ui button={{ color: Ui.Button.Size.XSmall }} />;`,
            output: `<div className="button___color___x_small__" />;`
        },
        {
            title: 'handles prepared values => array',
            code: `<Ui boxShadow={Ui.Theme.Foo.Bar.Baz.Array}>{variable}</Ui>;`,
            output: `<div className="box_shadow__0_0_0___000__">{variable}</div>;`
        },
        {
            title: 'handles prepared values => object',
            code: `<Ui boxShadow={Ui.Theme.Foo.Bar.Baz.Object}>{variable}</Ui>;`,
            output: `<div className="box_shadow___foo__1_">{variable}</div>;`
        }
    ]
})
