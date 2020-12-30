import styled, { ccss, Ui } from '@cryptic-css/styled'

import propMq from '@cryptic-css/prop-mq'
import propScroll from '@cryptic-css/prop-scroll'
import propKeyframes from '@cryptic-css/prop-keyframes'
import pluginGutter from '@cryptic-css/plugin-gutter'
import pluginRatio from '@cryptic-css/plugin-ratio'

console.log(ccss.setOptions({ unit: 'px' }).options)

ccss.setOptions({ unit: 'px' }).use(propMq).use(propScroll).use(propKeyframes).use(pluginGutter).use(pluginRatio)

export { ccss, Ui, styled }
