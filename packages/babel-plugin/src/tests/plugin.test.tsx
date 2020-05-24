/**
 * @jest-environment node
 */

import path from 'path'
import pluginTester from 'babel-plugin-tester/pure'
import plugin from '../'

pluginTester({
    pluginName: 'babel-plugin-ccss',
    plugin,
    pluginOptions: {
        identifiers: {
            Ui: true
        },
        constants: {
            Ui: {
                FontSize: {
                    Small: 10,
                    Extras: {
                        Foo: 'Bar'
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
            code: 'const x = <Ui display="block" />;',
            output: 'const x = <div className="display_block" />;'
        },
        {
            title: 'single prop with existing className',
            code: 'const x = <Ui className="cls" display="block" />;',
            output: 'const x = <div className="cls display_block" />;'
        },
        {
            title: 'single prop with existing expression className',
            code: 'const x = <Ui className={cls} display="block" />;',
            output: 'const x = <div className={"display_block " + cls} />;'
        },
        {
            title: 'single prop with existing logical expression className',
            code: 'const x = <Ui className={cls || als} display="block" />;',
            output: 'const x = <div className={"display_block " + (cls || als)} />;'
        },
        {
            title: 'single prop with existing tagged expression className',
            code: 'const x = <Ui className={`hur${ka}`} display="block" />;',
            output: 'const x = <div className={"display_block " + `hur${ka}`} />;'
        },
        {
            title: 'multiple props',
            code: 'const x = <Ui display="block" textAlign="center" />;',
            output: 'const x = <div className="display_block text_align_center" />;'
        },
        {
            title: 'multiple props with existing className',
            code: 'const x = <Ui className="cls" display="block" textAlign="center" />;',
            output: 'const x = <div className="cls display_block text_align_center" />;'
        },
        {
            title: 'handle property tag',
            code: 'const x = <Ui.h2 />;',
            output: 'const x = <h2 />;'
        },
        {
            title: 'handle variable value',
            code: 'const x = <Ui margin={foo} />;',
            output: 'const x = <Ui m={foo} />;'
        },
        {
            title: 'correct closing tag',
            code: 'const x = <Ui.p></Ui.p>;',
            output: 'const x = <p></p>;'
        },
        {
            title: 'correct closing tag in case it cannot change',
            code: 'const x = <Ui.p margin={foo}></Ui.p>;',
            output: 'const x = <Ui.p m={foo}></Ui.p>;'
        },
        {
            title: 'handles string literals',
            code: 'const x = <Ui margin={`foo`} />;',
            output: 'const x = <div className="margin_foo" />;'
        },
        {
            title: 'handles string literals with dynamic content',
            code: 'const x = <Ui margin={`foo${bar}`} />;',
            output: 'const x = <Ui m={`foo${bar}`} />;'
        },
        {
            title: 'resolves predefined constants => Single',
            code: 'const x = <Ui fontSize={Single} />;',
            output: 'const x = <div className="font_size_single" />;'
        },
        {
            title: 'resolves predefined constants => Duo.Foo',
            code: 'const x = <Ui fontSize={Duo.Foo} />;',
            output: 'const x = <div className="font_size__bar" />;'
        },
        {
            title: 'resolves predefined constants => Ui.FontSize.Small',
            code: 'const x = <Ui fontSize={Ui.FontSize.Small} />;',
            output: 'const x = <div className="font_size_10" />;'
        },
        {
            title: 'resolves predefined constants => Ui.FontSize.Extras.Foo',
            code: 'const x = <Ui fontSize={Ui.FontSize.Extras.Foo} />;',
            output: 'const x = <div className="font_size__bar" />;'
        },
        {
            title: 'handles array values => static',
            code: 'const x = <Ui margin={[1,2,3,4]} />;',
            output: 'const x = <div className="margin_1_2_3_4" />;'
        },
        {
            title: 'handles array values => non-static',
            code: 'const x = <Ui margin={[1,2,foo,4]} />;',
            output: 'const x = <Ui m={[1, 2, foo, 4]} />;'
        },
        {
            title: 'handles array values => static:resolved',
            code: 'const x = <Ui margin={[1,Ui.FontSize.Small,3,4]} />;',
            output: 'const x = <div className="margin_1_10_3_4" />;'
        },
        {
            title: 'handles non-ccss attributes',
            code: 'const x = <Ui fontSize={10} onClick={() => {}} />;',
            output: 'const x = <div onClick={() => {}} className="font_size_10" />;'
        },
        {
            title: 'handles non-ccss attributes => non-static',
            code: 'const x = <Ui fontSize={foo} onClick={() => {}} />;',
            output: 'const x = <Ui fts={foo} onClick={() => {}} />;'
        },
        {
            title: 'handles having both at the same time',
            code: 'const x = <Ui fontSize={foo} margin={1} />;',
            output: 'const x = <Ui fts={foo} className="margin_1" />;'
        }
        /*
        {
            title: 'handles mq prop',
            code: 'const x = <Ui margin={[1,2,3,4]} />;',
            output: 'const x = <div className="font_size__bar" />;'
        },*/
    ]
})