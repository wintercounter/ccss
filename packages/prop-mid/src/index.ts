import { CCSSOptions, CCSSProps } from '@cryptic-css/core'

export default (options: Partial<CCSSOptions>) => {
    const props = options.props as CCSSProps

    props.mid = (input, prop, options) =>
        options.__ccss({
            T: '50%',
            L: '50%',
            tf: 'translate(-50%, -50%)'
        })
}
