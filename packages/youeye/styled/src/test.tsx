// @ts-nocheck

/**
 * @jest-environment jsdom
 */

import React from 'react'
import 'jest-styled-components'
import { styled, Ui, ccss, createCCSS, createStyledCCSS, objectOutputTransformer } from '.'

const ccssObject = createCCSS({
    outputTransformer: objectOutputTransformer
})
const objectStyled = createStyledCCSS(ccssObject)

export const objectCcss = objectStyled.ccss
export const ObjectUi = objectStyled.Ui

describe('styled-components', () => {
    it('meho', () => {
        console.log(
            objectCcss({
                child: {
                    ':root': {
                        color: '#fff',
                        '--hmm': 12,
                        width: function () {
                            console.log(this.theme)
                        },
                        unsupported: true
                    }
                },
                theme: {
                    x: 2
                }
            })
        )
    })

    it('support native styled components', () => {
        const Cmp = styled.div(
            () =>
                ccss({
                    c: 'white'
                }),
            ccss
        )
        const wrapper = mount(<Cmp dp="f" />)
        const div = wrapper.find('div')

        expect(div).toHaveStyleRule('color', 'white')
        expect(div).toHaveStyleRule('display', 'flex')
    })

    it('support native styled components:object', () => {
        const Cmp = styled.div(
            () =>
                objectCcss({
                    c: 'white'
                }),
            objectCcss
        )
        const wrapper = mount(<Cmp dp="f" />)
        const div = wrapper.find('div')

        expect(div).toHaveStyleRule('color', 'white')
        expect(div).toHaveStyleRule('display', 'flex')
    })

    it('works as prepared Ui component', () => {
        const wrapper = mount(<Ui dp="f" />)
        const div = wrapper.find('div')

        expect(div).toHaveStyleRule('display', 'flex')
    })

    it('works as prepared Ui component:object', () => {
        const wrapper = mount(<ObjectUi dp="f" />)
        const div = wrapper.find('div')

        expect(div).toHaveStyleRule('display', 'flex')
    })

    it('works as prepared Ui component with extend', () => {
        const Cmp = styled(Ui)(() =>
            ccss({
                c: 'white'
            })
        )
        const wrapper = mount(<Cmp dp="f" />)
        const div = wrapper.find('div')

        expect(div).toHaveStyleRule('color', 'white')
        expect(div).toHaveStyleRule('display', 'flex')
    })

    it('works as prepared Ui component with extend:object', () => {
        const Cmp = styled(ObjectUi)(() =>
            objectCcss({
                c: 'white'
            })
        )
        const wrapper = mount(<Cmp dp="f" />)
        const div = wrapper.find('div')

        expect(div).toHaveStyleRule('color', 'white')
        expect(div).toHaveStyleRule('display', 'flex')
    })

    it('can use child', () => {
        const wrapper = mount(<Ui child={{ ':h': { dp: 'f' } }} />)
        const div = wrapper.find('div')

        expect(div).toHaveStyleRule('display', 'flex', { modifier: ':hover' })
    })

    it('can use child:object', () => {
        const wrapper = mount(<ObjectUi child={{ ':h': { dp: 'f' } }} />)
        const div = wrapper.find('div')

        expect(div).toHaveStyleRule('display', 'flex', { modifier: ':hover' })
    })
})
