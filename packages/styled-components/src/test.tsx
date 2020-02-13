import React from 'react'
import 'jest-styled-components'
import styled, { Ui, ccssd, ccss } from '.'

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

    it('works as prepared Ui component', () => {
        const wrapper = mount(<Ui d="f" />)
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

    it('works as prepared ccssd component', () => {
        const Cmp = ccssd({
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

    it('can use child', () => {
        const wrapper = mount(<Ui child={{ ':h': { d: 'f' } }} />)
        const div = wrapper.find('div')

        expect(div).toHaveStyleRule('display', 'flex', { modifier: ':hover' })
    })
})
