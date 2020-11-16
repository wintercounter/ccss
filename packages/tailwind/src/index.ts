import { merge } from 'lodash-es'

const opacities = {
    '0': '0',
    '25': '0.25',
    '50': '0.5',
    '75': '0.75',
    '100': '1'
}

const spacing = {
    px: '1px',
    '-px': '-1px'
}

const colors = Object.entries({
    transparent: 'transparent',
    current: 'currentColor',

    black: '#000',
    white: '#fff',

    gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c'
    },
    red: {
        100: '#fff5f5',
        200: '#fed7d7',
        300: '#feb2b2',
        400: '#fc8181',
        500: '#f56565',
        600: '#e53e3e',
        700: '#c53030',
        800: '#9b2c2c',
        900: '#742a2a'
    },
    orange: {
        100: '#fffaf0',
        200: '#feebc8',
        300: '#fbd38d',
        400: '#f6ad55',
        500: '#ed8936',
        600: '#dd6b20',
        700: '#c05621',
        800: '#9c4221',
        900: '#7b341e'
    },
    yellow: {
        100: '#fffff0',
        200: '#fefcbf',
        300: '#faf089',
        400: '#f6e05e',
        500: '#ecc94b',
        600: '#d69e2e',
        700: '#b7791f',
        800: '#975a16',
        900: '#744210'
    },
    green: {
        100: '#f0fff4',
        200: '#c6f6d5',
        300: '#9ae6b4',
        400: '#68d391',
        500: '#48bb78',
        600: '#38a169',
        700: '#2f855a',
        800: '#276749',
        900: '#22543d'
    },
    teal: {
        100: '#e6fffa',
        200: '#b2f5ea',
        300: '#81e6d9',
        400: '#4fd1c5',
        500: '#38b2ac',
        600: '#319795',
        700: '#2c7a7b',
        800: '#285e61',
        900: '#234e52'
    },
    blue: {
        100: '#ebf8ff',
        200: '#bee3f8',
        300: '#90cdf4',
        400: '#63b3ed',
        500: '#4299e1',
        600: '#3182ce',
        700: '#2b6cb0',
        800: '#2c5282',
        900: '#2a4365'
    },
    indigo: {
        100: '#ebf4ff',
        200: '#c3dafe',
        300: '#a3bffa',
        400: '#7f9cf5',
        500: '#667eea',
        600: '#5a67d8',
        700: '#4c51bf',
        800: '#434190',
        900: '#3c366b'
    },
    purple: {
        100: '#faf5ff',
        200: '#e9d8fd',
        300: '#d6bcfa',
        400: '#b794f4',
        500: '#9f7aea',
        600: '#805ad5',
        700: '#6b46c1',
        800: '#553c9a',
        900: '#44337a'
    },
    pink: {
        100: '#fff5f7',
        200: '#fed7e2',
        300: '#fbb6ce',
        400: '#f687b3',
        500: '#ed64a6',
        600: '#d53f8c',
        700: '#b83280',
        800: '#97266d',
        900: '#702459'
    }
    // @ts-ignore
}).reduce((acc, [key, colorValues]) => {
    if (typeof colorValues === 'object') {
        Object.entries(colorValues).forEach(([colorKey, color]) => {
            acc[`${key}-${colorKey}`] = color
        })
    } else {
        acc[key] = colorValues
    }
}, {})

// @ts-ignore
const theme = {
    screens: {
        sm: [0, 640],
        md: [641, 768],
        lg: [769, 1024],
        xl: [1025, 1280]
    },
    colors,
    // TODO, gradient prop
    backgroundImage: {
        none: 'none',
        'gradient-to-t': 'linear-gradient(to top, var(--gradient-color-stops))',
        'gradient-to-tr': 'linear-gradient(to top right, var(--gradient-color-stops))',
        'gradient-to-r': 'linear-gradient(to right, var(--gradient-color-stops))',
        'gradient-to-br': 'linear-gradient(to bottom right, var(--gradient-color-stops))',
        'gradient-to-b': 'linear-gradient(to bottom, var(--gradient-color-stops))',
        'gradient-to-bl': 'linear-gradient(to bottom left, var(--gradient-color-stops))',
        'gradient-to-l': 'linear-gradient(to left, var(--gradient-color-stops))',
        'gradient-to-tl': 'linear-gradient(to top left, var(--gradient-color-stops))'
    },
    borderColor: {
        ...colors,
        default: '#e2e8f0' // 'colors.gray.300'
    },
    borderOpacity: opacities,
    borderRadius: {
        none: 0,
        sm: 2,
        default: 4,
        md: 6,
        lg: 8,
        xl: 12,
        '2xl': 16,
        '3xl': 24,
        full: 9999
    },
    // TODO
    boxShadow: {
        xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        none: 'none'
    },
    // TODO
    divideColor: (theme) => theme('borderColor'),
    // TODO
    divideOpacity: (theme) => theme('borderOpacity'),
    // TODO
    divideWidth: (theme) => theme('borderWidth'),
    fontFamily: {
        sans: [
            'system-ui',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            '"Noto Sans"',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Noto Color Emoji"'
        ].join(', '),
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'].join(', '),
        mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'].join(', ')
    },
    fontSize: {
        xs: 12,
        sm: 14,
        base: 16,
        lg: 18,
        xl: 20,
        '2xl': 24,
        '3xl': 30,
        '4xl': 36,
        '5xl': 48,
        '6xl': 64
    },
    fontWeight: {
        hairline: '100',
        thin: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900'
    },
    height: {
        full: '100%',
        screen: '100vh'
    },
    letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em'
    },
    // TODO
    lineHeight: {
        none: '1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2'
        // TODO DOCS
        // No need for numbers, if you need precise control, define your own values.
    },
    // TODO
    margin: {
        auto: 'auto',
        ...spacing
    },
    maxHeight: {
        full: '100%',
        screen: '100vh'
    },
    maxWidth: (theme, { breakpoints }) => ({
        none: 'none',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        full: '100%',
        screen: '100vw',
        // TODO decide if needed
        ...breakpoints(theme('screens'))
    }),
    minHeight: {
        full: '100%',
        screen: '100vh'
    },
    minWidth: {
        full: '100%',
        screen: '100vw'
    },
    opacity: opacities,
    order: {
        first: '-9999',
        last: '9999',
        none: '0'
    },
    outline: {
        none: [2, 'solid transparent'],
        white: [2, 'dotted white'],
        black: [2, 'dotted black']
    },
    padding: spacing,
    // TODO remove, modifier support
    // placeholderColor: (theme) => theme('colors'),
    // placeholderOpacity: (theme) => theme('opacity'),
    // TODO is it needed?? (space-between) add prop
    /*space: (theme, { negative }) => ({
        ...theme('spacing'),
        ...negative(theme('spacing'))
    }),*/
    stroke: colors,
    textColor: colors,
    textOpacity: opacities,
    width: {
        auto: 'auto',
        ...spacing,
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        full: '100%',
        screen: '100vw'
    },
    // TODO
    gap: spacing,
    gridTemplateColumns: {
        '1': 'repeat(1, minmax(0, 1fr))',
        '2': 'repeat(2, minmax(0, 1fr))',
        '3': 'repeat(3, minmax(0, 1fr))',
        '4': 'repeat(4, minmax(0, 1fr))',
        '5': 'repeat(5, minmax(0, 1fr))',
        '6': 'repeat(6, minmax(0, 1fr))',
        '7': 'repeat(7, minmax(0, 1fr))',
        '8': 'repeat(8, minmax(0, 1fr))',
        '9': 'repeat(9, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 1fr))',
        '11': 'repeat(11, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))'
    },
    gridAutoColumns: {
        min: 'min-content',
        max: 'max-content',
        fr: 'minmax(0, 1fr)'
    },
    gridColumn: {
        'span-1': 'span 1 / span 1',
        'span-2': 'span 2 / span 2',
        'span-3': 'span 3 / span 3',
        'span-4': 'span 4 / span 4',
        'span-5': 'span 5 / span 5',
        'span-6': 'span 6 / span 6',
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
        'span-10': 'span 10 / span 10',
        'span-11': 'span 11 / span 11',
        'span-12': 'span 12 / span 12',
        'span-full': '1 / -1'
    },
    gridTemplateRows: {
        '1': 'repeat(1, minmax(0, 1fr))',
        '2': 'repeat(2, minmax(0, 1fr))',
        '3': 'repeat(3, minmax(0, 1fr))',
        '4': 'repeat(4, minmax(0, 1fr))',
        '5': 'repeat(5, minmax(0, 1fr))',
        '6': 'repeat(6, minmax(0, 1fr))'
    },
    gridAutoRows: {
        min: 'min-content',
        max: 'max-content',
        fr: 'minmax(0, 1fr)'
    },
    gridRow: {
        'span-1': 'span 1 / span 1',

        'span-2': 'span 2 / span 2',
        'span-3': 'span 3 / span 3',
        'span-4': 'span 4 / span 4',
        'span-5': 'span 5 / span 5',
        'span-6': 'span 6 / span 6',
        'span-full': '1 / -1'
    },
    transformOrigin: {
        'top-right': 'top right',
        'bottom-right': 'bottom right',
        'bottom-left': 'bottom left',
        'top-left': 'top left'
    },
    scale: {
        '0': '0',
        '50': '.5',
        '75': '.75',
        '90': '.9',
        '95': '.95',
        '100': '1',
        '105': '1.05',
        '110': '1.1',
        '125': '1.25',
        '150': '1.5'
    },
    rotate: {
        '-180': '-180deg',
        '-90': '-90deg',
        '-45': '-45deg',
        '-12': '-12deg',
        '-6': '-6deg',
        '-3': '-3deg',
        '-2': '-2deg',
        '-1': '-1deg',
        '0': '0',
        '1': '1deg',
        '2': '2deg',
        '3': '3deg',
        '6': '6deg',
        '12': '12deg',
        '45': '45deg',
        '90': '90deg',
        '180': '180deg'
    },
    translate: {
        ...spacing,
        '-full': '-100%',
        '-1/2': '-50%',
        '1/2': '50%',
        full: '100%'
    },
    skew: {
        '-12': '-12deg',
        '-6': '-6deg',
        '-3': '-3deg',
        '-2': '-2deg',
        '-1': '-1deg',
        '0': '0',
        '1': '1deg',
        '2': '2deg',
        '3': '3deg',
        '6': '6deg',
        '12': '12deg'
    },
    transitionProperty: {
        default: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
        // @ts-ignore
        [true]: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
        colors: 'background-color, border-color, color, fill, stroke',
        shadow: 'box-shadow'
    },
    transitionTimingFunction: {
        in: 'cubic-bezier(0.4, 0, 1, 1)',
        out: 'cubic-bezier(0, 0, 0.2, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
    },
    transitionDuration: {
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms'
    },
    transitionDelay: {
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms'
    },
    animation: {
        spin: 'spin 1s linear infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite'
    },
    keyframes: {
        spin: {
            to: { transform: 'rotate(360deg)' }
        },
        ping: {
            '75%, 100%': { transform: 'scale(2)', opacity: '0' }
        },
        pulse: {
            '50%': { opacity: '.5' }
        },
        bounce: {
            '0%, 100%': {
                transform: 'translateY(-25%)',
                animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
            },
            '50%': {
                transform: 'none',
                animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
            }
        }
    }
}

export const createTailwindCCSS = (options, overrides = {}) => {
    const config = merge({}, defaults, overrides)
}
