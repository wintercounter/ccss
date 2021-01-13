import { CCSSProp } from '@cryptic-css/core'

declare module '@cryptic-css/core' {
    interface CCSSProps {
        /**
         * # scroll
         *
         * Shorthand to create scrollable elements.
         *
         * @see https://ccss.dev/docs/api-and-packages/prop-scroll
         */
        scroll?: CCSSProp
    }
}

const base = {
    us: 'n',
    sw: 'n',
    sh: 'n',
    '-ms-overflow-style': 'none',
    '-webkit-overflow-scrolling': 'touch',
    child: {
        '::-webkit-scrollbar': {
            dp: 'n'
        }
    }
}

const parser = (input, prop, transformedFn, inputObject) => {
    switch (input) {
        case 'x':
            return transformedFn({
                ...base,
                maxW: inputObject.maxW || inputObject.maxWidth || '100vw',
                ox: 'a'
            })
        case 'y':
            return transformedFn({
                ...base,
                maxH: inputObject.maxH || inputObject.maxHeight || '100vh',
                oy: 'a'
            })
        case true:
        default:
            return transformedFn({
                ...base,
                maxH: inputObject.maxW || inputObject.maxWidth || '100vh',
                maxW: inputObject.maxH || inputObject.maxHeight || '100vw',
                o: 'a'
            })
    }
}

const useProp = (transformedFn) => {
    transformedFn.setProps(['scroll'].map((prop) => [[prop], null, [parser]]))
}

export default useProp
