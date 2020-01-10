import React, { FC } from 'react'
import styled from 'styled-components/macro'
import { position, space, layout, color, compose } from 'styled-system'
import { UiBox } from 'dh-react-ui'
import Benchmarked from './Benchmarked'
import generate, { ICCSSProps } from '../../dist'

const simple = styled.div`
    color: ${({ color }) => color};
`

const simpleCCSS: FC<ICCSSProps> = styled.div(props => {
    return generate(props)
})

const SimpleCCSS: FC<ICCSSProps> = styled.div(props => {
    return generate(props)
})

const simpleSS = styled.div`
    ${color}
`

const advanced = styled.div`
    ${({ position }) => position && `position: ${position};`}
    ${({ display }) => display && `display: ${display};`}
    ${({ height }) => height && `height: ${height};`}
    ${({ width }) => width && `width: ${width};`}
    ${({ color }) => color && `color: ${color};`}
`

const advancedCCSS = styled.div(props => {
    return generate(props)
})

const advancedSS = styled.div(compose(space, layout, color, position))

const Styled = () => {
    return (
        <>
            <SimpleCCSS m={} />
            <div
                style={{
                    display: 'flex'
                }}
            >
                <Benchmarked
                    title="styled-components (simple)"
                    component={simple}
                    componentProps={{ color: 'transparent' }}
                />
                <Benchmarked
                    title="styled-components (simple) with CCSS"
                    component={simpleCCSS}
                    componentProps={{ c: 't' }}
                />
                <Benchmarked
                    title="styled-components (simple) with styled-system"
                    component={simpleSS}
                    componentProps={{ color: 'transparent' }}
                />
                <Benchmarked title="dh-react-ui (simple)" component={UiBox} componentProps={{ color: 'transparent' }} />
            </div>
            <div
                style={{
                    display: 'flex'
                }}
            >
                <Benchmarked
                    title="styled-components (advanced)"
                    component={advanced}
                    componentProps={{
                        color: 'transparent',
                        width: '100%',
                        height: '100%',
                        display: 'block',
                        position: 'absolute',
                        top: 1,
                        right: 1,
                        bottom: 1,
                        left: 1
                    }}
                />
                <Benchmarked
                    title="styled-components (advanced) with CCSS"
                    component={advancedCCSS}
                    componentProps={{
                        c: 't',
                        w: '100%',
                        h: '100%',
                        d: 'b',
                        pos: 'a',
                        T: 0,
                        R: 0,
                        B: 0,
                        L: 0,
                        p: [1, 2, 3, 4]
                    }}
                />
                <Benchmarked
                    title="styled-components (advanced) with styled-system"
                    component={advancedSS}
                    componentProps={{
                        color: 'transparent',
                        width: '100%',
                        height: '100%',
                        display: 'block',
                        position: 'absolute',
                        top: 1,
                        right: 1,
                        bottom: 1,
                        left: 1
                    }}
                />
                <Benchmarked
                    title="dh-react-ui (advanced)"
                    component={UiBox}
                    componentProps={{
                        color: 'transparent',
                        width: '100%',
                        height: '100%',
                        display: 'block',
                        position: 'absolute',
                        pad: [1, 2, 3, 4]
                    }}
                />
            </div>
        </>
    )
}

export default Styled
