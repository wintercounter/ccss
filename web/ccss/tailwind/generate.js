import fs from 'fs'
import path from 'path'

const tree = [
    {
        title: 'Getting started',
        slug: 'getting-started',
        children: [
            {
                title: 'Installation',
                slug: 'installation'
            },
            {
                title: 'Release Notes',
                slug: 'release-notes'
            },
            {
                title: 'Upgrade Guide',
                slug: 'upgrade-guide'
            },
            {
                title: 'Using with Preprocessors',
                slug: 'using-with-preprocessors'
            },
            {
                title: 'Optimizing for Production',
                slug: 'optimizing-for-production'
            },
            {
                title: 'Browser Support',
                slug: 'browser-support'
            },
            {
                title: 'IntelliSense',
                slug: 'intellisense'
            }
        ]
    },
    {
        title: 'Core Concepts',
        slug: 'core-concepts',
        children: [
            {
                title: 'Utility-First',
                slug: 'utilityfirst'
            },
            {
                title: 'Responsive Design',
                slug: 'responsive-design'
            },
            {
                title: 'Hover, Focus, & Other States',
                slug: 'hover-focus-other-states'
            },
            {
                title: 'Dark Mode',
                slug: 'dark-mode'
            },
            {
                title: 'Adding Base Styles',
                slug: 'adding-base-styles'
            },
            {
                title: 'Extracting Components',
                slug: 'extracting-components'
            },
            {
                title: 'Adding New Utilities',
                slug: 'adding-new-utilities'
            },
            {
                title: 'Functions & Directives',
                slug: 'functions-directives'
            }
        ]
    },
    {
        title: 'Customization',
        slug: 'customization',
        children: [
            {
                title: 'Configuration',
                slug: 'configuration'
            },
            {
                title: 'Theme',
                slug: 'theme'
            },
            {
                title: 'Breakpoints',
                slug: 'breakpoints'
            },
            {
                title: 'Colors',
                slug: 'colors'
            },
            {
                title: 'Spacing',
                slug: 'spacing'
            },
            {
                title: 'Variants',
                slug: 'variants'
            },
            {
                title: 'Plugins',
                slug: 'plugins'
            },
            {
                title: 'Presets',
                slug: 'presets'
            }
        ]
    },
    {
        title: 'Base Styles',
        slug: 'base-styles',
        children: [
            {
                title: 'Preflight',
                slug: 'preflight'
            }
        ]
    },
    {
        title: 'Layout',
        slug: 'layout',
        children: [
            {
                title: 'Container',
                slug: 'container'
            },
            {
                title: 'Box Sizing',
                slug: 'box-sizing'
            },
            {
                title: 'Display',
                slug: 'display'
            },
            {
                title: 'Floats',
                slug: 'floats'
            },
            {
                title: 'Clear',
                slug: 'clear'
            },
            {
                title: 'Object Fit',
                slug: 'object-fit'
            },
            {
                title: 'Object Position',
                slug: 'object-position'
            },
            {
                title: 'Overflow',
                slug: 'overflow'
            },
            {
                title: 'Overscroll Behavior',
                slug: 'overscroll-behavior'
            },
            {
                title: 'Position',
                slug: 'position'
            },
            {
                title: 'Top / Right / Bottom / Left',
                slug: 'top-right-bottom-left'
            },
            {
                title: 'Visibility',
                slug: 'visibility'
            },
            {
                title: 'Z-Index',
                slug: 'zindex'
            }
        ]
    },
    {
        title: 'Flexbox',
        slug: 'flexbox',
        children: [
            {
                title: 'Flex Direction',
                slug: 'flex-direction'
            },
            {
                title: 'Flex Wrap',
                slug: 'flex-wrap'
            },
            {
                title: 'Flex',
                slug: 'flex'
            },
            {
                title: 'Flex Grow',
                slug: 'flex-grow'
            },
            {
                title: 'Flex Shrink',
                slug: 'flex-shrink'
            },
            {
                title: 'Order',
                slug: 'order'
            }
        ]
    },
    {
        title: 'Grid',
        slug: 'grid',
        children: [
            {
                title: 'Grid Template Columns',
                slug: 'grid-template-columns'
            },
            {
                title: 'Grid Column Start / End',
                slug: 'grid-column-start-end'
            },
            {
                title: 'Grid Template Rows',
                slug: 'grid-template-rows'
            },
            {
                title: 'Grid Row Start / End',
                slug: 'grid-row-start-end'
            },
            {
                title: 'Grid Auto Flow',
                slug: 'grid-auto-flow'
            },
            {
                title: 'Grid Auto Columns',
                slug: 'grid-auto-columns'
            },
            {
                title: 'Grid Auto Rows',
                slug: 'grid-auto-rows'
            },
            {
                title: 'Gap',
                slug: 'gap'
            }
        ]
    },
    {
        title: 'Box Alignment',
        slug: 'box-alignment',
        children: [
            {
                title: 'Justify Content',
                slug: 'justify-content'
            },
            {
                title: 'Justify Items',
                slug: 'justify-items'
            },
            {
                title: 'Justify Self',
                slug: 'justify-self'
            },
            {
                title: 'Align Content',
                slug: 'align-content'
            },
            {
                title: 'Align Items',
                slug: 'align-items'
            },
            {
                title: 'Align Self',
                slug: 'align-self'
            },
            {
                title: 'Place Content',
                slug: 'place-content'
            },
            {
                title: 'Place Items',
                slug: 'place-items'
            },
            {
                title: 'Place Self',
                slug: 'place-self'
            }
        ]
    },
    {
        title: 'Spacing',
        slug: 'spacing',
        children: [
            {
                title: 'Padding',
                slug: 'padding'
            },
            {
                title: 'Margin',
                slug: 'margin'
            },
            {
                title: 'Space Between',
                slug: 'space-between'
            }
        ]
    },
    {
        title: 'Sizing',
        slug: 'sizing',
        children: [
            {
                title: 'Width',
                slug: 'width'
            },
            {
                title: 'Min-Width',
                slug: 'minwidth'
            },
            {
                title: 'Max-Width',
                slug: 'maxwidth'
            },
            {
                title: 'Height',
                slug: 'height'
            },
            {
                title: 'Min-Height',
                slug: 'minheight'
            },
            {
                title: 'Max-Height',
                slug: 'maxheight'
            }
        ]
    },
    {
        title: 'Typography',
        slug: 'typography',
        children: [
            {
                title: 'Font Family',
                slug: 'font-family'
            },
            {
                title: 'Font Size',
                slug: 'font-size'
            },
            {
                title: 'Font Smoothing',
                slug: 'font-smoothing'
            },
            {
                title: 'Font Style',
                slug: 'font-style'
            },
            {
                title: 'Font Weight',
                slug: 'font-weight'
            },
            {
                title: 'Font Variant Numeric',
                slug: 'font-variant-numeric'
            },
            {
                title: 'Letter Spacing',
                slug: 'letter-spacing'
            },
            {
                title: 'Line Height',
                slug: 'line-height'
            },
            {
                title: 'List Style Type',
                slug: 'list-style-type'
            },
            {
                title: 'List Style Position',
                slug: 'list-style-position'
            },
            {
                title: 'Placeholder Color',
                slug: 'placeholder-color'
            },
            {
                title: 'Placeholder Opacity',
                slug: 'placeholder-opacity'
            },
            {
                title: 'Text Align',
                slug: 'text-align'
            },
            {
                title: 'Text Color',
                slug: 'text-color'
            },
            {
                title: 'Text Opacity',
                slug: 'text-opacity'
            },
            {
                title: 'Text Decoration',
                slug: 'text-decoration'
            },
            {
                title: 'Text Transform',
                slug: 'text-transform'
            },
            {
                title: 'Text Overflow',
                slug: 'text-overflow'
            },
            {
                title: 'Vertical Align',
                slug: 'vertical-align'
            },
            {
                title: 'Whitespace',
                slug: 'whitespace'
            },
            {
                title: 'Word Break',
                slug: 'word-break'
            }
        ]
    },
    {
        title: 'Backgrounds',
        slug: 'backgrounds',
        children: [
            {
                title: 'Background Attachment',
                slug: 'background-attachment'
            },
            {
                title: 'Background Clip',
                slug: 'background-clip'
            },
            {
                title: 'Background Color',
                slug: 'background-color'
            },
            {
                title: 'Background Opacity',
                slug: 'background-opacity'
            },
            {
                title: 'Background Position',
                slug: 'background-position'
            },
            {
                title: 'Background Repeat',
                slug: 'background-repeat'
            },
            {
                title: 'Background Size',
                slug: 'background-size'
            },
            {
                title: 'Background Image',
                slug: 'background-image'
            },
            {
                title: 'Gradient Color Stops',
                slug: 'gradient-color-stops'
            }
        ]
    },
    {
        title: 'Borders',
        slug: 'borders',
        children: [
            {
                title: 'Border Radius',
                slug: 'border-radius'
            },
            {
                title: 'Border Width',
                slug: 'border-width'
            },
            {
                title: 'Border Color',
                slug: 'border-color'
            },
            {
                title: 'Border Opacity',
                slug: 'border-opacity'
            },
            {
                title: 'Border Style',
                slug: 'border-style'
            },
            {
                title: 'Divide Width',
                slug: 'divide-width'
            },
            {
                title: 'Divide Color',
                slug: 'divide-color'
            },
            {
                title: 'Divide Opacity',
                slug: 'divide-opacity'
            },
            {
                title: 'Divide Style',
                slug: 'divide-style'
            },
            {
                title: 'Ring Width',
                slug: 'ring-width'
            },
            {
                title: 'Ring Color',
                slug: 'ring-color'
            },
            {
                title: 'Ring Opacity',
                slug: 'ring-opacity'
            },
            {
                title: 'Ring Offset Width',
                slug: 'ring-offset-width'
            },
            {
                title: 'Ring Offset Color',
                slug: 'ring-offset-color'
            }
        ]
    },
    {
        title: 'Effects',
        slug: 'effects',
        children: [
            {
                title: 'Box Shadow',
                slug: 'box-shadow'
            },
            {
                title: 'Opacity',
                slug: 'opacity'
            }
        ]
    },
    {
        title: 'Tables',
        slug: 'tables',
        children: [
            {
                title: 'Border Collapse',
                slug: 'border-collapse'
            },
            {
                title: 'Table Layout',
                slug: 'table-layout'
            }
        ]
    },
    {
        title: 'Transitions and Animation',
        slug: 'transitions-and-animation',
        children: [
            {
                title: 'Transition Property',
                slug: 'transition-property'
            },
            {
                title: 'Transition Duration',
                slug: 'transition-duration'
            },
            {
                title: 'Transition Timing Function',
                slug: 'transition-timing-function'
            },
            {
                title: 'Transition Delay',
                slug: 'transition-delay'
            },
            {
                title: 'Animation',
                slug: 'animation'
            }
        ]
    },
    {
        title: 'Transforms',
        slug: 'transforms',
        children: [
            {
                title: 'Transform',
                slug: 'transform'
            },
            {
                title: 'Transform Origin',
                slug: 'transform-origin'
            },
            {
                title: 'Scale',
                slug: 'scale'
            },
            {
                title: 'Rotate',
                slug: 'rotate'
            },
            {
                title: 'Translate',
                slug: 'translate'
            },
            {
                title: 'Skew',
                slug: 'skew'
            }
        ]
    },
    {
        title: 'Interactivity',
        slug: 'interactivity',
        children: [
            {
                title: 'Appearance',
                slug: 'appearance'
            },
            {
                title: 'Cursor',
                slug: 'cursor'
            },
            {
                title: 'Outline',
                slug: 'outline'
            },
            {
                title: 'Pointer Events',
                slug: 'pointer-events'
            },
            {
                title: 'Resize',
                slug: 'resize'
            },
            {
                title: 'User Select',
                slug: 'user-select'
            }
        ]
    },
    {
        title: 'SVG',
        slug: 'svg',
        children: [
            {
                title: 'Fill',
                slug: 'fill'
            },
            {
                title: 'Stroke',
                slug: 'stroke'
            },
            {
                title: 'Stroke Width',
                slug: 'stroke-width'
            }
        ]
    },
    {
        title: 'Accessibility',
        slug: 'accessibility',
        children: [
            {
                title: 'Screen Readers',
                slug: 'screen-readers'
            }
        ]
    },
    {
        title: 'Official Plugins',
        slug: 'official-plugins',
        children: [
            {
                title: 'Typography',
                slug: 'typography'
            }
        ]
    }
]

tree.forEach(section => {
    const dirpath = path.resolve(__dirname, section.slug)
    if (!fs.existsSync(dirpath)) {
        fs.mkdirSync(dirpath)
    }
    section.children.forEach(item => {
        const data = `---
id: ${item.slug}
title: ${item.title}
---`
        const filepath = path.resolve(__dirname, section.slug, item.slug + '.md')
        if (fs.existsSync(filepath)) {
            return
        }
        fs.writeFileSync(filepath, data)
    })
})

/*
// SECTIONS
String.prototype.slugify = function (separator = "-") {
    return this
        .toString()
        .normalize('NFD')                   // split an accented letter in the base letter and the acent
        .replace(/[\u0300-\u036f]/g, '')   // remove all previously split accents
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9 ]/g, '')   // remove all chars not letters, numbers and spaces (to be replaced)
        .replace(/\s+/g, separator);
};

(() => {
    const sections = Array.from($$('#nav > [class="mb-8"]'))

    const results = sections.map(section => {
        const title = section.querySelector('h5').textContent
        return {
            title,
            slug: title.slugify(),
            children: [...section.querySelectorAll('span.relative')].map(item => {
                return { title: item.textContent, slug: item.textContent.slugify() }
            })
        }
    })
    console.log(JSON.stringify(results, null, 2))
})()
 */

/*
SIDEBARS
String.prototype.slugify = function (separator = "-") {
    return this
        .toString()
        .normalize('NFD')                   // split an accented letter in the base letter and the acent
        .replace(/[\u0300-\u036f]/g, '')   // remove all previously split accents
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9 ]/g, '')   // remove all chars not letters, numbers and spaces (to be replaced)
        .replace(/\s+/g, separator);
};

(() => {
    const sections = Array.from($$('#nav > [class="mb-8"]'))

    const results = {}

    sections.map(section => {
        const title = section.querySelector('h5').textContent
        results[title] =  [...section.querySelectorAll('span.relative')].map(item => {
                return `${title.slugify()}/${item.textContent.slugify()}`
        })
    })
    console.log(JSON.stringify(results, null, 2))
})()
 */
