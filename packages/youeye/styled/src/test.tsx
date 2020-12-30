// @ts-nocheck

import React from 'react'
import 'jest-styled-components'
import styled, { Ui, ccssd, ccss, createCCSS, createStyledCCSS, objectOutputTransformer } from '.'

const ccssObject = createCCSS({
    outputTransformer: objectOutputTransformer
})
const objectStyled = createStyledCCSS(ccssObject)

export const objectCcss = objectStyled.ccss
export const ObjectUi = objectStyled.Ui
export const objectCcssd = objectStyled.ccssd

describe('styled-components', () => {
    it('support native styled components', () => {
        const Cmp = styled.div(
            () =>
                ccss({
                    c: 'white'
                }),
            ccss
        )
        const wrapper = mount(<Cmp d="f" />)
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
        const wrapper = mount(<Cmp d="f" />)
        const div = wrapper.find('div')

        expect(div).toHaveStyleRule('color', 'white')
        expect(div).toHaveStyleRule('display', 'flex')
    })

    it('works as prepared Ui component', () => {
        const wrapper = mount(<Ui d="f" />)
        const div = wrapper.find('div')

        expect(div).toHaveStyleRule('display', 'flex')
    })

    it('works as prepared Ui component:object', () => {
        const wrapper = mount(<ObjectUi d="f" />)
        const div = wrapper.find('div')

        expect(div).toHaveStyleRule('display', 'flex')
    })

    it('works as prepared Ui component with extend', () => {
        const Cmp = styled(Ui)(() =>
            ccss({
                c: 'white'
            })
        )
        const wrapper = mount(<Cmp d="f" />)
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
        const wrapper = mount(<Cmp d="f" />)
        const div = wrapper.find('div')

        expect(div).toHaveStyleRule('color', 'white')
        expect(div).toHaveStyleRule('display', 'flex')
    })

    it('works as prepared ccssd component', () => {
        const Cmp = ccssd({
            c: 'white'
        })

        const wrapper = mount(<Cmp d="f" />)
        const div = wrapper.find('div')

        expect(div).toHaveStyleRule('color', 'white')
        expect(div).toHaveStyleRule('display', 'flex')
    })

    it('works as prepared ccssd component:object', () => {
        const Cmp = objectCcssd({
            c: 'white'
        })

        const wrapper = mount(<Cmp d="f" />)
        const div = wrapper.find('div')

        expect(div).toHaveStyleRule('color', 'white')
        expect(div).toHaveStyleRule('display', 'flex')
    })

    it('works as prepared, tagged ccssd component', () => {
        const Cmp = ccssd.div({
            c: 'white'
        })

        const wrapper = mount(<Cmp d="f" />)
        const div = wrapper.find('div')

        expect(div).toHaveStyleRule('color', 'white')
        expect(div).toHaveStyleRule('display', 'flex')
    })

    it('works as prepared, tagged ccssd component:object', () => {
        const Cmp = objectCcssd.div({
            c: 'white'
        })

        const wrapper = mount(<Cmp d="f" />)
        const div = wrapper.find('div')

        expect(div).toHaveStyleRule('color', 'white')
        expect(div).toHaveStyleRule('display', 'flex')
    })

    it('can use child', () => {
        const wrapper = mount(<Ui child={{ ':h': { d: 'f' } }} />)
        const div = wrapper.find('div')

        expect(div).toHaveStyleRule('display', 'flex', { modifier: ':hover' })
    })

    it('can use child:object', () => {
        const wrapper = mount(<ObjectUi child={{ ':h': { d: 'f' } }} />)
        const div = wrapper.find('div')

        expect(div).toHaveStyleRule('display', 'flex', { modifier: ':hover' })
    })
})
