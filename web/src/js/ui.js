import styled, { ccss, Ui } from '@you-eye/styled'

import propMq from '@cryptic-css/prop-mq'
import propScroll from '@cryptic-css/prop-scroll'
import propKeyframes from '@cryptic-css/prop-keyframes'
import pluginGutter from '@cryptic-css/plugin-gutter'
import pluginRatio from '@cryptic-css/plugin-ratio'

const bgc = { dark: { 0: '#000', 1: '#111' } }

const icons = {
    hamburger: '🍔',
    rocket: '🚀'
}

const iconHandler = (value, key, transformedFn) => {
    return transformedFn({
        '::before': {
            content: `"${value}"`
        }
    })
}

ccss.setProps([
    [['maxWidth'], { container: 1220 }],
    [['color'], { dark: '#333', light: '#eee' }],
    [['editorWrapper'], null, [(v, k, tf) => tf({ br: 4, P: 'r', o: 'h' })]],
    [['learnMore'], null, [(v, k, tf) => tf({ fts: 24 })]],
    [['bgc'], null, [(v) => v.split('.').reduce((acc, val) => acc[val] || v, bgc), '...']],
    [['icon'], icons, [iconHandler]]
])
    .use(propMq)
    .use(propScroll)
    .use(propKeyframes)
    .use(pluginGutter)
    .use(pluginRatio)

export { ccss, Ui, styled }
