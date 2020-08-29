import { CCSSOptions, CCSSProps, CCSSProp } from '@cryptic-css/core'

declare module '@cryptic-css/core' {
    interface CCSSProps {
        /**
         * # mid
         *
         * A shorthand the apply the common middle positioning solution:
         *
         * ```css
         * top: 50%;
         * left: 50%;
         * transform: translate(-50%, -50%);
         * ```
         *
         * @see https://ccss.dev/docs/api-and-packages/prop-mid
         */
        mid?: CCSSProp
    }
}

export default (options: Partial<CCSSOptions>) => {
    const props = options.props as CCSSProps

    props.mid = (input, prop, options) =>
        options.__ccss({
            T: '50%',
            L: '50%',
            tf: 'translate(-50%, -50%)'
        })
}
