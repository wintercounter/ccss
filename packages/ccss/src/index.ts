import applyPropMid from '@cryptic-css/prop-mid'
import applyPropMq from '@cryptic-css/prop-mq'
import applyPropScroll from '@cryptic-css/prop-scroll'
//import applyPluginGrid from '@cryptic-css/plugin-grid'
import applyPluginGutter from '@cryptic-css/plugin-gutter'
import applyPluginRatio from '@cryptic-css/plugin-ratio'
import ccss, { defaultOptions } from '@cryptic-css/core'

applyPropMid(defaultOptions)
applyPropMq(defaultOptions)
applyPropScroll(defaultOptions)
//applyPluginGrid(defaultOptions)
applyPluginGutter(defaultOptions)
applyPluginRatio(defaultOptions)

export * from '@cryptic-css/core'

export default ccss
