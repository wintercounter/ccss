import React from 'react'
import 'jest-styled-components'
import styled from 'styled-components'
import '.'

describe('support-styled-components', () => {
    it('adds support to element calls', () => {
        const cmp = styled.div({
            d: 'b'
        })

        const rule = cmp.componentStyle.rules[0]({
            ta: 'c'
        })

        expect(rule).toEqual('text-align: center;')
    })

    it('works with extra rendered tagged', () => {
        const Cmp = styled.div`
            background: #000;
        `

        const wrapper = mount(<Cmp d="f" />)
        expect(wrapper.find('div')).toHaveStyleRule('background', '#000')
        expect(wrapper.find('div')).toHaveStyleRule('display', 'flex')
    })
})
