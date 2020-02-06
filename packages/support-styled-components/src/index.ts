import ccss from '@cryptic-css/core'
import styled from 'styled-components'

const isObject = o => Object.prototype.toString.call(o) === '[object Object]'

for (const k in styled) {
    if (styled.hasOwnProperty(k)) {
        const original = styled[k]
        styled[k] = function(...args) {
            args.push(ccss)
            for (let i = 0; i < args.length; i++) {
                if (isObject(args[i])) {
                    args[i] = props => ccss({ ...args[i], ...props })
                }
            }
            return original(...args)
        }
        // Apply static methods also
        Object.assign(styled[k], original)
    }
}
