import { CCSSOptions, CCSSProps, CCSSProp } from '@cryptic-css/core'

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
            d: 'n'
        }
    }
}

export default (options: Partial<CCSSOptions>) => {
    const props = options.props as CCSSProps
    props.scroll = (input, prop, options, original) => {
        switch (input) {
            case 'x':
                return options.__ccss({
                    ...base,
                    maxW: original.maxW || '100vw',
                    ox: 'a'
                })
            case 'y':
                return options.__ccss({
                    ...base,
                    maxH: original.maxH || '100vh',
                    oy: 'a'
                })
            case true:
            default:
                return options.__ccss({
                    ...base,
                    maxH: original.maxH || '100vh',
                    maxW: original.maxW || '100vw',
                    o: 'a'
                })
        }
    }
}
