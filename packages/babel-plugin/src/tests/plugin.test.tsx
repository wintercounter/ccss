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
            output: 'const x = <div className="displayblock" />;'
        },
        {
            title: 'single prop with existing className',
            code: 'const x = <Ui className="cls" display="block" />;',
            output: 'const x = <div className="cls displayblock" />;'
        },
        {
            title: 'multiple props',
            code: 'const x = <Ui display="block" textAlign="center" />;',
            output: 'const x = <div className="displayblock text_aligncenter" />;'
        },
        {
            title: 'multiple props with existing className',
            code: 'const x = <Ui className="cls" display="block" textAlign="center" />;',
            output: 'const x = <div className="cls displayblock text_aligncenter" />;'
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
    ]
})