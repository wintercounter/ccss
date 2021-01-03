import React, { useEffect, useRef } from 'react'
import classnames from 'classnames'
import { useInView } from 'react-intersection-observer'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import CodeBlock from '@theme/CodeBlock'
import styles from './styles.module.css'
import { Ui } from '../js/ui'

const ShowMoreLink = ({ children, ...rest }) => {
    return (
        <Ui>
            <Ui.a learnMore {...rest}>
                {children}
            </Ui.a>
            <Ui.span fts={14} c="var(--ifm-link-color)" P="r" T={-2} L={15}>
                ▶
            </Ui.span>
        </Ui>
    )
}

const Sandbox = () => (
    <Ui className="demo home-tabs" pB={10}>
        <Tabs
            defaultValue="simple"
            values={[
                { label: 'Simple', value: 'simple' },
                { label: 'Custom Props and Values', value: 'custom' },
                { label: 'Shared styles', value: 'shared' },
                { label: 'YouEye/React', value: 'youeye' }
            ]}
        >
            <TabItem value="simple">
                <iframe
                    loading="lazy"
                    src="https://codesandbox.io/embed/ccss-demo-vanilla-js-bhw3z?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
                    title="CCSS Demo - Vanilla JS"
                    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
                    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
                />
            </TabItem>
            <TabItem value="custom" lazy>
                <iframe
                    loading="lazy"
                    src="https://codesandbox.io/embed/ccss-demo-custom-props-and-values-1i13q?fontsize=14&hidenavigation=1&theme=dark"
                    title="CCSS Demo - Styled-Components"
                    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
                    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
                />
            </TabItem>
            <TabItem value="shared" lazy>
                <iframe
                    loading="lazy"
                    src="https://codesandbox.io/embed/ccss-homepage-demo-longnames-ehyzg?fontsize=14&hidenavigation=1&theme=dark"
                    title="CCSS Demo - LongNames"
                    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
                    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
                />
            </TabItem>
            <TabItem value="youeye" lazy>
                <iframe
                    loading="lazy"
                    src="https://codesandbox.io/embed/ccss-demo-custom-props-and-values-1i13q?fontsize=14&hidenavigation=1&theme=dark"
                    title="CCSS Demo - Custom Props and Values"
                    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
                    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
                />
            </TabItem>
        </Tabs>
    </Ui>
)

const features = [
    {
        title: <>Tiny core</>,
        imageUrl: 'svg/v5/atom.svg',
        description: (
            <>
                <p>
                    <strong>CCSS</strong> is an opinionated, low level utility to deal with CSS style objects. It's{' '}
                    <em>not</em> an out-of-the-box styling solution. It helps you deliver your own, tailor-made tool. It
                    is built on the top of <a href="https://www.npmjs.com/package/transformed">transformed</a>{' '}
                    <em>(3.8 kB, 1.5 kB compressed)</em> which gives you great customization options to suit your own
                    needs.
                </p>
            </>
        )
    },
    {
        title: <>Value maps</>,
        imageUrl: 'svg/v5/map.svg',
        description: (
            <>
                <p>
                    You can assign value maps to <Ui.span ftw={900}>any</Ui.span> CSS or custom property your design
                    system requires. Common use cases are colors, font sizes and dimensions.
                </p>
                <Ui dp="g" gtc="1fr 1fr" gg={6} mT={10} mq={['d', { gtc: '100%' }]}>
                    <Ui>
                        <CodeBlock className="js">{`// Setup custom value maps

ccss.setProps([
  [['max-width'], { container: 1220 }],
  [['color'], { dark: '#333', light: '#eee' }],
  [['font-size'], { small: 12, large: 16 }]
])`}</CodeBlock>
                    </Ui>
                    <Ui>
                        <Ui editorWrapper>
                            <CodeBlock className="js" live>{`ccss({
    maxWidth: 'container',
    color: 'dark',
    ':hover': {
        color: 'light'   
    }
})`}</CodeBlock>
                        </Ui>
                    </Ui>
                </Ui>
            </>
        )
    },
    {
        title: <>Plugins</>,
        imageUrl: 'svg/v5/puzzle-red.svg',
        description: (
            <>
                <p>
                    Enhance the functionality of existing properties by supporting new value types and/or special rules.
                </p>
                <Ui className="home-tabs" mT={10}>
                    <Tabs
                        defaultValue="gutter"
                        values={[
                            { label: 'Gutter', value: 'gutter' },
                            { label: 'Ratio', value: 'ratio' },
                            { label: 'Custom', value: 'custom' }
                        ]}
                    >
                        <TabItem value="gutter">
                            <Ui dp="g" gtc="1fr 1fr" gg={6} mq={['d', { gtc: '100%' }]}>
                                <Ui dp="f" jc="sa" fd="c">
                                    <Ui.p fts={[20, '!important']} c="#777">
                                        Apply a general gutter rule to all your <em>margin</em>, <em>padding</em> and{' '}
                                        <em>grid-gap</em> values. Keeping consistent spacing of one key to a good design
                                        system. The gutter plugin helps you maintain a multiply of a pre-defined unit.
                                        Default: <code>5px</code>
                                    </Ui.p>
                                    <ShowMoreLink href="/docs/api-and-packages/plugin-gutter">Learn more</ShowMoreLink>
                                </Ui>
                                <Ui>
                                    <Ui editorWrapper>
                                        <CodeBlock className="js" live>{`ccss({
    padding: 1,
    margin: [1, 2, 3, 4],
    gridGap: 4
})`}</CodeBlock>
                                    </Ui>
                                </Ui>
                            </Ui>
                        </TabItem>
                        <TabItem value="ratio">
                            <Ui dp="g" gtc="1fr 1fr" gg={6} mq={['d', { gtc: '100%' }]}>
                                <Ui dp="f" jc="sa" fd="c">
                                    <Ui.p fts={[20, '!important']} c="#777">
                                        Add support for <em>margin</em> and <em>padding</em> to accept ratio value. The{' '}
                                        <em>aspect-ratio</em> CSS property is around the corner now, but before the so
                                        called{' '}
                                        <a href="https://css-tricks.com/aspect-ratio-boxes/" target="_blank">
                                            <strong>padding hack</strong>
                                        </a>{' '}
                                        was used. Using this plugin you can avoid any manual calculation you might need
                                        and just provide ratio directly.
                                    </Ui.p>
                                    <ShowMoreLink href="/docs/api-and-packages/plugin-ratio">Learn more</ShowMoreLink>
                                </Ui>
                                <Ui>
                                    <Ui editorWrapper>
                                        <CodeBlock className="js" live>{`ccss({
    paddingTop: '16:9',
    margin: ['4:3', 0, 0, '24:9']
})`}</CodeBlock>
                                    </Ui>
                                </Ui>
                            </Ui>
                        </TabItem>
                        <TabItem value="custom">
                            <Ui dp="g" gtc="1fr 1fr" gg={6} mq={['d', { gtc: '100%' }]}>
                                <Ui dp="f" jc="sa" fd="c">
                                    <Ui.p fts={[20, '!important']} c="#777">
                                        Lets create a plugin that adds support to resolve an object path. This is a
                                        popular solution among other libraries. In this example we will add such support
                                        to the <code>background-color</code> property.
                                    </Ui.p>
                                    <ShowMoreLink href="/docs/api-and-packages/plugin-gutter">
                                        Check documentation
                                    </ShowMoreLink>
                                </Ui>
                                <Ui>
                                    <Ui editorWrapper>
                                        <CodeBlock className="js">{`const colors = {
    dark: { 0: '#000', 1: '#111' }
}

ccss.setProps([
    ['backgroundColor'], null, [
        v => v.split('.').reduce((acc, val) => acc[val], colors),
        '...'
    ]
])`}</CodeBlock>
                                    </Ui>
                                    <Ui editorWrapper mT={6}>
                                        <CodeBlock className="js" live>{`ccss({
    backgroundColor: 'dark.1'
})`}</CodeBlock>
                                    </Ui>
                                </Ui>
                            </Ui>
                        </TabItem>
                    </Tabs>
                </Ui>
            </>
        )
    },
    {
        title: <>Custom properties</>,
        imageUrl: 'svg/v5/puzzle-green.svg',
        description: (
            <>
                <p>
                    Add your own custom properties to share, compose, re-use styles and design tokens. Create amazing
                    new features living right inside your CSS.
                </p>
                <Ui className="home-tabs" mT={10}>
                    <Tabs
                        defaultValue="keyframes"
                        values={[
                            { label: 'Keyframes', value: 'keyframes' },
                            { label: 'Media Query', value: 'mq' },
                            { label: 'Scroll', value: 'scroll' },
                            { label: 'Custom', value: 'custom' }
                        ]}
                    >
                        <TabItem value="keyframes">
                            <Ui dp="g" gtc="1fr 1fr" gg={6} mq={['d', { gtc: '100%' }]}>
                                <Ui dp="f" jc="sa" fd="c">
                                    <Ui.p fts={[20, '!important']} c="#777">
                                        Using the <code>keyframes</code> prop you can add animation keyframes without
                                        hassle and worrying about the naming. The generated names with the same values
                                        are cached to make it reusable.
                                    </Ui.p>
                                    <Ui.p
                                        animation="3s infinite linear"
                                        keyframes={{
                                            from: { color: '#000' },
                                            to: { color: '#fff' }
                                        }}
                                    >
                                        Animated text
                                    </Ui.p>
                                    <ShowMoreLink href="/docs/api-and-packages/prop-keyframes">Learn more</ShowMoreLink>
                                </Ui>
                                <Ui>
                                    <Ui editorWrapper>
                                        <CodeBlock className="js" live>{`ccss({
    animation: '3s infinite',
    keyframes: {
        from: { color: '#000' },
        to: { color: '#fff' }
    }
})`}</CodeBlock>
                                    </Ui>
                                </Ui>
                            </Ui>
                        </TabItem>
                        <TabItem value="mq">
                            <Ui dp="g" gtc="1fr 1fr" gg={6} mq={['d', { gtc: '100%' }]}>
                                <Ui dp="f" jc="sa" fd="c">
                                    <Ui.p fts={[20, '!important']} c="#777">
                                        The <code>mediaQuery</code> <em>(shorthands: mq, at)</em> property adds support
                                        for{' '}
                                        <a href="https://www.npmjs.com/package/@w11r/use-breakpoint" target="_blank">
                                            @w11r/use-breakpoint
                                        </a>
                                        's breakpoint mechanism. It's an array based solution to maintain the order you
                                        want for specificity. It comes with built-in, customizable breakpoints for
                                        various screen sizes and common queries.
                                    </Ui.p>
                                    <ShowMoreLink href="/docs/api-and-packages/prop-mq">Learn more</ShowMoreLink>
                                </Ui>
                                <Ui>
                                    <Ui editorWrapper>
                                        <CodeBlock className="js" live>{`ccss({
    fontSize: 24,
    at: [
        ['tablet', { fontSize: 20 }],
        ['mobile-', { fontSize: 16 }]
    ]
})`}</CodeBlock>
                                    </Ui>
                                </Ui>
                            </Ui>
                        </TabItem>
                        <TabItem value="scroll">
                            <Ui dp="g" gtc="1fr 1fr" gg={6} mq={['d', { gtc: '100%' }]}>
                                <Ui dp="f" jc="sa" fd="c">
                                    <Ui.p fts={[20, '!important']} c="#777">
                                        The <code>scroll</code> property can help you to easily make a container
                                        scrollable. It's a common use-case nowadays on devices to apply horizontal
                                        scroll to a container of items without any scrollbars.
                                    </Ui.p>
                                    <Ui scroll="x" h={150} mq={['small+', { dp: false }]}>
                                        <Ui dp="grid" gtc="repeat(10, 1fr)">
                                            <Ui fts={80}>🍔</Ui>
                                            <Ui fts={80}>🍔</Ui>
                                            <Ui fts={80}>🍔</Ui>
                                            <Ui fts={80}>🍔</Ui>
                                            <Ui fts={80}>🍔</Ui>
                                            <Ui fts={80}>🍔</Ui>
                                            <Ui fts={80}>🍔</Ui>
                                            <Ui fts={80}>🍔</Ui>
                                            <Ui fts={80}>🍔</Ui>
                                            <Ui fts={80}>🍔</Ui>
                                        </Ui>
                                    </Ui>
                                    <ShowMoreLink href="/docs/api-and-packages/prop-scroll">Learn more</ShowMoreLink>
                                </Ui>
                                <Ui>
                                    <Ui editorWrapper mT={6}>
                                        <CodeBlock className="js" live>{`ccss({
    scroll: 'x'
})`}</CodeBlock>
                                    </Ui>
                                </Ui>
                            </Ui>
                        </TabItem>
                        <TabItem value="custom">
                            <Ui dp="g" gtc="1fr 1fr" gg={6} mq={['d', { gtc: '100%' }]}>
                                <Ui dp="f" jc="sa" fd="c">
                                    <Ui.p fts={[20, '!important']} c="#777">
                                        This code will will add a property named <code>icon</code>. It has 2 parts: a
                                        value map that will resolve the icon's character code, and a handler that will
                                        emit the necessary CSS.
                                        <br />
                                        <br />
                                        In this example we're using UTF-8 icons, but the method can work with icon fonts
                                        or any other way, it's up to you to define how it works.
                                    </Ui.p>
                                    <Ui.p>
                                        I always eat a <Ui.span icon="hamburger" /> before I ride my{' '}
                                        <Ui.span icon="rocket" />!
                                    </Ui.p>
                                    <ShowMoreLink href="/docs/api-and-packages/plugin-gutter">
                                        Check documentation
                                    </ShowMoreLink>
                                </Ui>
                                <Ui>
                                    <Ui editorWrapper>
                                        <CodeBlock className="js">{`const icons = {
    hamburger: '🍔',
    rocket: '🚀'
}

const handler = (value, key, transformedFn) =>
    transformedFn({
        '::before': {
            content: \`"\${value}"\`
        }
    })

ccss.setProps([
    [['icon'], icons, [handler]]
])`}</CodeBlock>
                                    </Ui>
                                    <Ui editorWrapper mT={6}>
                                        <CodeBlock className="js" live>{`ccss({
    icon: 'rocket'
})`}</CodeBlock>
                                    </Ui>
                                </Ui>
                            </Ui>
                        </TabItem>
                    </Tabs>
                </Ui>
            </>
        )
    },
    {
        title: <>Shorthands</>,
        imageUrl: 'svg/v5/arrows.svg',
        description: (
            <>
                <p>
                    Work less do more! CCSS comes with shorthands for <Ui.span ftw={900}>all</Ui.span> CSS properties.
                    Both{' '}
                    <a href="https://styled-system.com/" target="_blank">
                        Styled System
                    </a>{' '}
                    and{' '}
                    <a href="https://tailwindcss.com/" target="_blank">
                        Tailwind CSS
                    </a>{' '}
                    are coming with some shorthands out of the box. CCSS gives you the ability to use shorthands for
                    both property names and/or values. Mix to your liking for rapid development.
                </p>
                <Ui dp="g" gtc="1fr 1fr" gg={6} mT={10} mq={['d', { gtc: '100%' }]}>
                    <Ui>
                        <Ui editorWrapper>
                            <CodeBlock className="js" live>{`ccss({ p: 1, m: 2, f: 1, ai: 'c' })`}</CodeBlock>
                        </Ui>
                    </Ui>
                    <Ui>
                        <Ui editorWrapper>
                            <CodeBlock className="js" live>{`ccss({
    position: 'r',
    alignItems: 'c'
})`}</CodeBlock>
                        </Ui>
                    </Ui>
                </Ui>
            </>
        )
    },
    {
        title: <>Plug n' Play</>,
        imageUrl: 'svg/v5/plug.svg',
        description: (
            <>
                <p>
                    Use CCSS in any existing codebase where you can apply CSS string or Style object in JS. No matter
                    what unit system (em, rem, px, etc.) you use, CCSS supports any unit you need.
                </p>
                <p>You may introduce design tokens to a monolithic codebase using multiple styling solutions.</p>
                <Ui dp="g" gtc="1fr 1fr" gg={6} mT={10} mq={['d', { gtc: '100%' }]}>
                    <Ui>
                        <Ui editorWrapper>
                            <CodeBlock className="js">{`import styled from 'styled-components'

const MyComponent = styled.div\`
    \${ccss({
        width: 'site-container',
        color: 'dark',
        icon: 'rocket'
    })}
\``}</CodeBlock>
                        </Ui>
                    </Ui>
                    <Ui>
                        <Ui editorWrapper>
                            <CodeBlock className="js">{`import jss from 'jss'

const styles = {
  button: ccss({
    color: 'dark',
    ':hover': {
      color: 'light'
    }
  })
}

const { classes } = jss.createStyleSheet(styles).attach()

document.body.innerHTML = \`
  <button class="\${classes.button}">Button</button>
\``}</CodeBlock>
                        </Ui>
                    </Ui>
                </Ui>
            </>
        )
    },
    {
        title: <>Performance</>,
        imageUrl: 'svg/v5/speed.svg',
        description: (
            <>
                <p>
                    CSS-in-JS by default is a trade-off on performance, no matter which library you choose. Compiling
                    CSS dynamically at runtime will always have its costs.
                </p>
                <p>
                    During the development of <strong>CCSS</strong> strict decisions and various micro-optimizations
                    have been made to ensure it won't affect performance seriously. The included features are limited to
                    maintain speed and simplicity.
                </p>
                <p>
                    Another area kept in mind is static extraction. Using <code>@you-eye/babel-plugin-react</code>{' '}
                    you're able to static <b>(and even dynamic)</b> extract your <code>Ui</code> components, and replace
                    them with native DOM elements with CSS classes in your production bundle.
                </p>
            </>
        )
    }
    /*{
        title: <>Tooling</>,
        imageUrl: 'svg/v5/hammer.svg',
        description: (
            <p>
                CSS-in-JS by default is a trade-off on performance, no matter which library you choose. Compiling CSS
                dynamically at runtime will always have its costs. During the development of <strong>CCSS</strong>{' '}
                strict decisions and various micro-optimizations have been made to ensure it won't affect performance
                seriously. The included features are limited to maintain speed and simplicity.
            </p>
        )
    }*/
    /* {
        title: <>Made with CCSS</>,
        imageUrl: 'svg/v5/made.svg',
        description: (
            <p>
                CSS-in-JS by default is a trade-off on performance, no matter which library you choose. Compiling CSS
                dynamically at runtime will always have its costs. During the development of <strong>CCSS</strong>{' '}
                strict decisions and various micro-optimizations have been made to ensure it won't affect performance
                seriously. The included features are limited to maintain speed and simplicity.
            </p>
        )
    }*/
    // hmm
    /*{
        title: <>What CCSS means?</>,
        imageUrl: 'svg/018-magnifying-glass.svg',
        description: (
            <>
                <p>
                    <strong>Cryptic</strong>CSS. The initial source of the idea was using <em>short names</em> for all
                    CSS properties and their values in a React props based environment, like <code>v="h"</code> instead
                    of <code>visiblity="hidden"</code>.
                </p>
                <p>
                    There were 3 goals with this approach:
                    <ul>
                        <li>to be able to define styles in a single row of a component;</li>
                        <li>
                            to achieve <strong>true CSS mangling</strong> to optimize file size;
                        </li>
                        <li>to speed up development.</li>
                    </ul>
                    This makes our code look a bit... err... <em>Cryptic</em>, but it's optional to use short names.
                </p>
                <h4>Using the CCSS function</h4>
                <div className="row">
                    <div className="col col--6">
                        <CodeBlock className="js">
                            {`ccss({
    display: 'flex',
    width: '100%',
    backgroundColor: '#fff'
})`}
                        </CodeBlock>
                    </div>
                    <div className="col col--6">
                        <pre>
                            <code>{`ccss({ dp: 'f', w: '100%', bgc: '#fff' })`}</code>
                        </pre>
                    </div>
                </div>
                <h4>Using the @cryptic-css/styled</h4>
                <div className="row">
                    <div className="col col--6">
                        <pre>
                            <code>
                                {`<Ui
    display="flex"
    width="100%"
    backgroundColor="#fff"
>
    My Content
</Ui>`}
                            </code>
                        </pre>
                    </div>
                    <div className="col col--6">
                        <pre>
                            <code>
                                {`<Ui dp="f" w="100%" bgc="#fff">
    My Content
</Ui>`}
                            </code>
                        </pre>
                    </div>
                </div>
            </>
        )
    },
    {
        title: <>@cryptic-css/styled</>,
        icon: <span style={{ fontSize: '110px' }}>💅</span>,
        description: (
            <>
                <p>
                    On the top of <strong>styled-components</strong> we released a solution to utilize{' '}
                    <strong>CCSS</strong>. Using it there are multiple ways to apply styles. You can either use prepared
                    components or the much more preferred* <strong>Ui</strong> component that's provided by the package.
                </p>
                <div className="row p">
                    <div className="col col--6">
                        <pre>
                            <code>
                                {`<Ui
    display="flex"
    width="100%"
    backgroundColor="#fff"
>
    My Content
</Ui>`}
                            </code>
                        </pre>
                    </div>
                    <div className="col col--6">
                        <pre>
                            <code>
                                {`const View = ccssd({
    display: 'flex',
    width: '100%',
    backgroundColor: '#fff'
})

<View>My Content</View>
`}
                            </code>
                        </pre>
                    </div>
                </div>
                * the provided Babel plugin only supports static extraction of <code>{`<Ui>`}</code> components
                currently.
            </>
        )
    },
    {
        title: <>@cryptic-css/babel-plugin-styled</>,
        imageUrl: 'svg/014-experiments.svg',
        description: (
            <div className={styles.p}>
                Using the provided (optional) Babel plugin you are able to automatically:
                <ul>
                    <li>
                        <strong>extract all non-computed</strong> values in a static CSS file;
                    </li>
                    <li>
                        <strong>mangle prop names</strong> for smaller production bundles;
                    </li>
                    <li>
                        convert <code>{`<Ui>`}</code> declarations to static HTML tags completely{' '}
                        <strong>
                            eliminating <em>styled-components</em>
                        </strong>
                        ;
                    </li>
                    <li>
                        single character selectors for <strong>smaller CSS and JS output</strong>;
                    </li>
                    <li>
                        have an output based on <strong>Utility-first</strong> and <strong>AtomicCSS</strong> principles
                        where you only have to ship code in your bundle what you actually use.
                    </li>
                </ul>
            </div>
        )
    },
    {
        title: <>Static extraction</>,
        imageUrl: 'svg/017-funnel.svg',
        description: (
            <>
                <p>
                    Using <em>styled-components</em> dynamically will always come with extra performance costs.{' '}
                    <strong>CCSS</strong> is a completely dynamic approach, but it enables us apply some next level
                    optimizations.
                </p>
                <div className={styles.p}>
                    A highly oversimplified performance comparison between different solutions:
                    <ul>
                        <li>
                            🐢 <progress max={100} value={25} /> Dynamic styled-components: slow
                        </li>
                        <li>
                            🐢 <progress max={100} value={25} /> CCSS + styled-components: slow
                        </li>
                        <li>
                            🐒 <progress max={100} value={50} /> Static styled-components: normal
                        </li>
                        <li>
                            🐇 <progress max={100} value={100} /> CCSS + styled-components + Babel plugin: fast
                        </li>
                    </ul>
                    On a production codebase we managed to save <em>800-1200ms</em> in average on our initial rendering
                    performance.
                </div>
            </>
        )
    },
    {
        title: <>And there's more...</>,
        imageUrl: 'svg/005-bacterium.svg',
        description: (
            <>
                <p>
                    There are other tools and features helping your work. <strong>@cryptic-css/styled</strong> comes
                    with <strong>⚛React-Native</strong> support out of the box, mostly thanks to{' '}
                    <strong>styled-components</strong>.
                </p>
                <p>
                    <strong>CCSS</strong> does not only provide TypeScript types, but also helps you with an almost
                    complete <em>CSS reference</em> using Doc comments. This is extremely useful, especially when using
                    short names.
                </p>
                <div className="row">
                    <div className="col col--6">
                        <img
                            className={styles.contentImg}
                            src="img/marginDocBlock.png"
                            alt="CrypticCSS - DocBlock"
                            title="Showcasing DocBlock using CCSS in WebStorm"
                        />
                    </div>
                    <div className="col col--6">
                        <img
                            className={styles.contentImg}
                            src="img/marginDocBlockUi.png"
                            alt="CrypticCSS - DocBlock"
                            title="Showcasing DocBlock using CCSS with Ui in VSCode"
                        />
                    </div>
                </div>
            </>
        )
    }*/
]

function Feature({ id, imageUrl, title, description, icon, i }) {
    const imgUrl = useBaseUrl(imageUrl)
    const [ref, inView] = useInView({ triggerOnce: true, rootMargin: '0px 0px -350px 0px' })
    const imgRef = useRef()
    const contentRef = useRef()
    useEffect(() => {
        if (imgRef.current && inView) {
            Object.assign(imgRef.current.style, {
                opacity: 1,
                transform: 'translateY(0) rotate(0)'
            })
            Object.assign(contentRef.current.style, {
                opacity: 1,
                transform: 'translateY(0)'
            })
        }
    }, [inView])
    return (
        <>
            <Ui.div
                ref={ref}
                id={id || `feature${i}`}
                o="h"
                mT={35}
                child={{ p: { fts: 24, ftw: 500, maxWidth: 900 } }}
                pT={3}
            >
                <div className="myContainer">
                    <div className="row">
                        <div className="col col--12">
                            <div className="row">
                                <Ui.div mR={6} mL={3} mq={['d', { mL: 0 }]}>
                                    <Ui.div
                                        dp="ib"
                                        P="r"
                                        T={-7}
                                        ref={imgRef}
                                        transition={'all .3s ease-out'}
                                        opacity={0}
                                        transform={'translateX(-200px) rotate(-180deg)'}
                                        transformOrigin={'50% 50%'}
                                    >
                                        {imageUrl && (
                                            <Ui.img
                                                className={styles.featureImage}
                                                src={imgUrl}
                                                height={80}
                                                width={80}
                                            />
                                        )}
                                        {icon}
                                    </Ui.div>
                                </Ui.div>
                                <Ui.div
                                    flex="1 0"
                                    width="100%"
                                    ref={contentRef}
                                    transition={'all .3s ease-out'}
                                    opacity={0}
                                    transform={'translateX(200px)'}
                                    mq={['d', { flex: 'none' }]}
                                >
                                    <Ui.h3 color="#000" fts={52} ftw={900} mB={6} ta="l">
                                        {title}
                                    </Ui.h3>
                                    {description}
                                </Ui.div>
                            </div>
                        </div>
                    </div>
                </div>
            </Ui.div>
        </>
    )
}

function Home() {
    const context = useDocusaurusContext()
    const { siteConfig = {} } = context

    return (
        <Layout title="Home" description="Your companion to the journey of your next CSS-in-JS solution.">
            <Ui.header P="relative" pT="clamp(30px, calc(100vh - 1112px), 220px)" o="h" mq={['d', { pT: 10 }]}>
                <Ui className="myContainer" width="100%" maxWidth={1398} margin="0 auto">
                    <Ui.h1 mB={10}>
                        <img width={300} src="img/logo.png" alt="CrypticCSS" title="CCSS" />
                    </Ui.h1>
                    <Ui.p fts={54} fontWeight={900} lh={1.25} mB={5} color="black" mq={['d', { fts: 38 }]}>
                        {siteConfig.tagline}
                    </Ui.p>
                    <Ui.p fts={24} lh={1.5} mB={10} fontWeight={500}>
                        Shorthands, custom properties, value maps, design tokens, static/dynamic extraction, and much
                        more...
                    </Ui.p>
                    <Sandbox />
                    <div style={{ display: 'none' }}>
                        <Link
                            className={classnames(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted
                            )}
                            to={useBaseUrl('/docs/guides/quick-examples')}
                        >
                            <span>🎌</span>
                            <br />
                            Get Started
                        </Link>
                        <Link
                            className={classnames(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted
                            )}
                            to={useBaseUrl('/docs/getting-started/basic-usage')}
                        >
                            <span>📚</span>
                            <br />
                            Documentation
                        </Link>
                        <Link
                            className={classnames(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted
                            )}
                            to="#sandbox"
                        >
                            <span>🤾‍♀</span>
                            <br />
                            Playground
                        </Link>
                    </div>
                    <div
                        className={styles.socialButtons}
                        style={{ marginTop: '1rem', marginBottom: 0, display: 'none' }}
                    >
                        <a href="https://github.com/wintercounter/ccss">
                            <img
                                src="https://flat.badgen.net/npm/v/ccss?scale=1.5&label=Latest%Version%20&color=d11141"
                                alt="Current stable CCSS version"
                            />
                        </a>
                        <a href="https://github.com/wintercounter/ccss">
                            <img
                                src="https://flat.badgen.net/github/stars/wintercounter/ccss?scale=1.5&label=Star%20on%20GitHub&color=00cf9b"
                                alt="CCSS on GitHub"
                            />
                        </a>
                    </div>
                </Ui>

                <Ui.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    position="a"
                    bottom={0}
                    left={0}
                    right={0}
                    maxWidth={3520}
                    margin="0 auto"
                    zIndex={-1}
                    at={['d', { h: 700 }]}
                    child={{
                        path: {
                            keyframes: {
                                '0%, 100%': {
                                    d: `path('M0,256L60,240C120,224,240,192,360,186.7C480,181,600,203,720,197.3C840,192,960,160,1080,138.7C1200,117,1320,107,1380,101.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z')`
                                },
                                '30%': {
                                    d: `path('M0,96L60,106.7C120,117,240,139,360,133.3C480,128,600,96,720,90.7C840,85,960,107,1080,122.7C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z')`
                                },
                                '60%': {
                                    d: `path('M0,128L60,138.7C120,149,240,171,360,176C480,181,600,171,720,192C840,213,960,267,1080,261.3C1200,256,1320,192,1380,160L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z')`
                                }
                            },
                            animationDuration: '60s',
                            animationIterationCount: 'infinite',
                            animationTimingFunction: 'linear',
                            fill: 'url(#waveGradient)'
                        }
                    }}
                >
                    <defs>
                        <linearGradient
                            id="waveGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                            //gradientTransform="rotate(-15)"
                        >
                            <animateTransform
                                attributeName="gradientTransform"
                                attributeType="XML"
                                type="rotate"
                                values="0;-360"
                                repeatCount="indefinite"
                                dur="30s"
                                additive="sum"
                            />
                            <stop offset="0%" stopColor="#B5179E" />
                            <stop offset="25%" stopColor="#7209B7" />
                            <stop offset="50%" stopColor="#560BAD" />
                            <stop offset="75%" stopColor="#480CA8" />
                            <stop offset="100%" stopColor="#560BAD" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0,256L60,240C120,224,240,192,360,186.7C480,181,600,203,720,197.3C840,192,960,160,1080,138.7C1200,117,1320,107,1380,101.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                        fill="#0099ff"
                        fillOpacity="1"
                    />
                </Ui.svg>
            </Ui.header>
            <main>
                {features.map((props, idx) => (
                    <Feature key={idx} {...props} i={idx} />
                ))}
            </main>
        </Layout>
    )
}

export default Home
