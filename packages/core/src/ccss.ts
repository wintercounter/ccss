import { TCCSSCoreProp } from './types'
import props from './props'

const ccss = (v: TCCSSCoreProp): string => {
    let generated = ''
    // eslint-disable-next-line no-restricted-syntax
    for (const k in v) {
        if (Object.prototype.hasOwnProperty.call(v, k)) {
            if (props[k]) {
                generated += props[k](v[k], v)
            } else {
                console.warn(`UI: Unsupported CSS prop '${k}' with value`, v)
            }
        }
    }
    return generated
}

export default ccss
