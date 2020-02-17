import { setProps } from '@cryptic-css/core'

const base = `
    user-select: none;
    scrollbar-width: none;
    scrollbar-height: none;
    -ms-overflow-style: none;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
        display: none;
    }
`

setProps({
    scroll(input, prop, { maxw, maxh }) {
        switch (input) {
            case 'x':
                return `
                    ${maxw ? '' : 'max-width: 100vw;'}
                    overflow-x: auto;
                    ${base}
                `
            case 'y':
                return `
                    ${maxh ? '' : 'max-height: 100vh;'}
                    overflow-y: auto;
                    ${base}
                `
            case true:
            default:
                return `
                    ${maxw ? '' : 'max-width: 100vw;'}
                    ${maxh ? '' : 'max-height: 100vh;'}
                    overflow: auto;
                    ${base}
                `
        }
    }
})
