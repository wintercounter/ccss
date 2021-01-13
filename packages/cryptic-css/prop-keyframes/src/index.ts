import { CCSSProp, CCSSOptions } from '@cryptic-css/core'

declare module '@cryptic-css/core' {
    interface CCSSProps {
        /**
         * # keyframes (mb)
         *
         * Helps you to create CCSS based keyframe animations.
         *
         * @see https://ccss.dev/docs/api-and-packages/prop-keyframes
         */
        kf?: CCSSProp
        /**
         * # keyframes (mb)
         *
         * Helps you to create CCSS based keyframe animations.
         *
         * @see https://ccss.dev/docs/api-and-packages/prop-keyframes
         */
        keyframes?: CCSSProp
    }
}

const cache = new Map()
let index = 1

const stringOutputHandler = (input, prop, transformedFn) => {
    // Generate CSS string
    let animation = ''
    for (const key in input) {
        if (Object.prototype.hasOwnProperty.call(input, key)) {
            animation += `${key} {
    ${transformedFn(input[key])}
}
`
        }
    }

    // It was an empty object
    if (!animation.length) return

    // Let's reuse the same name for the same string
    let cachedIndex = cache.get(animation)
    if (!cachedIndex) {
        cachedIndex = index++
        cache.set(animation, cachedIndex)
    }
    const animationName = `a${cachedIndex}`

    return `animation-name: ${animationName};
@keyframes ${animationName} {
    ${animation}
}`
}

const useProp = transformedFn => {
    // TODO: support for object output would be nice also
    const keyframes = stringOutputHandler
    transformedFn.setProps(['kf', 'keyframes'].map(prop => [[prop], null, [keyframes]]))
}

export default useProp
