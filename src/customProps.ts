import generate from './generate'
import { pseudoMap } from './maps'

export const pseudo = i => {
    let generated = ''
    for (const k in i) {
        if (Object.prototype.hasOwnProperty.call(i, k)) {
            generated += `
            :${pseudoMap[k] || k} {
                ${generate(i[k])}
            }`
        }
    }
    return generated
}

export const hScroll = (input, { maxw = '100vw' }) => `
    max-width: ${maxw};
    user-select: none;
    overflow-x: auto !important;
    scrollbar-width: none;
    scrollbar-height: none;
    -ms-overflow-style: none;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
        display: none;
    }
`

export const mid = () => `
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
