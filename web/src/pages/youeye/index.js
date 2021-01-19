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
import styles from '../../css/index.module.css'
import { Ui } from '../../js/ui'

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
        title: <>Paradigm shift</>,
        imageUrl: 'svg/v5/shuffle.svg',
        description: (
            <>
                <p>
                    <strong>YouEye</strong> works differently than what you've got used to. It has close relations to
                    inline styling solutions, such the <code>css</code> prop, the <code>style</code> prop, custom props
                    and utility class based approaches.
                </p>
                <Ui className="home-tabs" mT={10} child={{ '> div > ul': { pB: 4 } }}>
                    <Tabs
                        defaultValue="css-as-props"
                        values={[
                            { label: 'CSS as props', value: 'css-as-props' },
                            { label: 'Maintainability', value: 'maintain' },
                            { label: 'Style sharing', value: 'style-sharing' },
                            { label: 'Single component approach', value: 'single' }
                        ]}
                    >
                        <TabItem value="css-as-props">
                            <Ui dp="g" gtc="1fr 1fr" gg={6} mq={['d', { gtc: '100%' }]}>
                                <Ui dp="f" jc="sa" fd="c">
                                    <Ui.p fts={[20, '!important']} c="#777">
                                        Many UI solutions providing a subset of some CSS and/or CSS like properties.{' '}
                                        <strong>YouEye</strong> is all about CSS, it let's you use any CSS property.
                                    </Ui.p>
                                    <Ui.p fts={[20, '!important']} c="#777">
                                        Some libraries give you shorthands for some of the props.{' '}
                                        <strong>YouEye</strong> comes with <strong>optional</strong> shorthands for{' '}
                                        <Ui.strong tt="uppercase">all</Ui.strong> CSS properties and values.
                                    </Ui.p>
                                </Ui>
                                <Ui>
                                    <Ui editorWrapper>
                                        <CodeBlock className="js">{`<Ui
    display="grid"
    gridTemplateColumns="2fr 1fr"
    backgrondColor="red"
>
    <Ui fontSize={12}>Cell One</Ui>
    <Ui fontSize={10} color="#333">Cell Two</Ui>
</Ui>`}</CodeBlock>
                                    </Ui>
                                </Ui>
                            </Ui>
                        </TabItem>
                        <TabItem value="style-sharing">
                            <Ui dp="g" gtc="1fr 1fr" gg={6} mq={['d', { gtc: '100%' }]}>
                                <Ui dp="f" jc="sa" fd="c">
                                    <Ui.p fts={[20, '!important']} c="#777">
                                        Create components for each elements separately: Button, Link and Card. How do
                                        you make an element Card, Button and Link at the same time? With a component
                                        based approach this can become messy, a component do not necessarily handle all
                                        cases children can be.
                                    </Ui.p>
                                    <Ui.p fts={[20, '!important']} c="#777">
                                        Using custom props <strong>your elements can become anything</strong>, the
                                        implementation of the props are up to you! This approach is closer to the way of
                                        using traditional CSS.
                                    </Ui.p>
                                </Ui>
                                <Ui>
                                    <Ui editorWrapper>
                                        <CodeBlock className="js">{`<Ui
    button
    card={{ color: 'dark' }}
    link="scale"
    fontSize="large"
    flex={1}
>
    Card content goes brrr...
</Ui>`}</CodeBlock>
                                    </Ui>
                                </Ui>
                            </Ui>
                        </TabItem>
                        <TabItem value="maintain">
                            <Ui dp="g" gtc="1fr 50%" gg={6} mq={['d', { gtc: '100%' }]}>
                                <Ui dp="f" jc="sa" fd="c">
                                    <Ui.p fts={[20, '!important']} c="#777">
                                        It is taught that separating concerns is a good practice. Markup and styles
                                        however are the same concern: <strong>Presentation</strong>.
                                    </Ui.p>
                                    <Ui.p fts={[20, '!important']} c="#777">
                                        Coupling markup with styles is not a new idea, it was how webpages were styled
                                        before CSS. HTML needed an interface to connect to this new technology:{' '}
                                        <strong>Selectors</strong>.
                                    </Ui.p>
                                    <Ui.p fts={[20, '!important']} c="#777">
                                        Maintaining selectors require rules, naming systems - which none them are
                                        flawless -, it forces new tools and workarounds to handle dynamic cases, but
                                        first and foremost:{' '}
                                        <strong>
                                            selectors make hard to understand the results by looking at the markup
                                        </strong>
                                        .
                                    </Ui.p>
                                    <Ui.p fts={[20, '!important']} c="#777">
                                        <strong>YouEye</strong>/inline styles/utility classes are removing this
                                        overhead. You can <em>understand the layout immediately</em> just by looking at
                                        the code, without the need to construct the possible outcome in your mind
                                        checking through multiple files and separate code segments. These are especially
                                        important if the codebase is managed by multiple members.
                                    </Ui.p>
                                    <Ui.p fts={[20, '!important']} c="#777">
                                        Not following/understanding the conventions/layout of a project correctly will
                                        cause frictions in the design-system. <strong>YouEye</strong> is getting rid of
                                        a lot of variables, improves consistency and enforces a less error prone
                                        approach.
                                    </Ui.p>
                                </Ui>
                                <Ui>
                                    <Ui editorWrapper>
                                        <h3>Examples of handling dynamic cases</h3>
                                        <CodeBlock className="css">{`.item {
    list-style-type: none;
    margin-left: 10px;
    border: 1px solid black;
}
.item--active { font-weight: bold }
.item--highlighted { border-color: yellow }`}</CodeBlock>
                                        <Ui.h4 mT={5}>Class names</Ui.h4>
                                        <CodeBlock className="js">{`// String concatenation
<li className={\`item \${isActive ? 'item---active' : ''} \${isTop10 ? 'item--highlighted' : ''}\`} />

// String concatenation + CSS Modules
<li className={\`\${styles.item} \${isActive ? styles.itemActive : ''} \${isTop10 ? styles.itemHighlighted : ''}\`} />

// 'classnames' 3rd party tool
<li className={classNames(['item', { 'item--active': isActive, 'item--highlighted': isTop10 }])} />

// 'classnames' 3rd party tool + CSS Modules
<li className={classNames([styles.item, { [styles.itemActive]: isActive, [styles.itemHighlighted]: isTop10 }])} />`}</CodeBlock>
                                        <Ui.h4 mT={5}>Styled Components</Ui.h4>
                                        <CodeBlock className="jsx">{`const StyledItem = styled.div\`
    list-style-type: none;
    margin-left: 10px;
    border: 1px solid black;
    \${({ active }) => active && 'font-weight: bold'}
    \${({ highlighted }) => highlighted && 'border-color: yellow'}
\``}</CodeBlock>
                                        <Ui.h4 mT={5}>YouEye props</Ui.h4>
                                        <CodeBlock className="js">{`<Ui.li
    listStyleType="none"
    marginLeft={2}
    borderWidth={1}
    borderColor={isTop10 ? 'yellow' : 'black'}
    fontWeight={isActive ? 'normal' : 'bold'}
/>`}</CodeBlock>
                                        <Ui.h4 mT={5}>YouEye custom prop</Ui.h4>
                                        <CodeBlock className="js">{`<Ui.li item={{ active: isActive, highlighted: isTop10 }} />`}</CodeBlock>
                                    </Ui>
                                </Ui>
                            </Ui>
                        </TabItem>
                        <TabItem value="single">
                            <Ui dp="g" gtc="1fr 1fr" gg={6} mq={['d', { gtc: '100%' }]}>
                                <Ui dp="f" jc="sa" fd="c">
                                    <Ui.p fts={[20, '!important']} c="#777">
                                        <strong>YouEye</strong> uses a single component approach for all your markup
                                        needs. This makes usage easy and comfortable, and allows you to use all its
                                        features anywhere you want without extending functionalities of your custom
                                        component.
                                    </Ui.p>
                                </Ui>
                                <Ui />
                            </Ui>
                        </TabItem>
                    </Tabs>
                </Ui>
            </>
        )
    },
    {
        title: <>Super-charged by CCSS</>,
        imageUrl: 'img/ccssLogoMini.png',
        description: (
            <>
                <p>
                    <a href="https://ccss.dev" target="_blank">
                        <strong>CCSS</strong>
                    </a>{' '}
                    is an opinionated, low level utility to deal with CSS style objects.
                </p>
                <p>
                    <strong>YouEye</strong> combines existing CSS-in-JS solutions with <strong>CCSS</strong>, extending
                    them with new features and customization options to suit your own needs.
                </p>
                <Ui className="home-tabs" mT={10}>
                    <Tabs
                        defaultValue="value-maps"
                        values={[
                            { label: 'Value maps', value: 'value-maps' },
                            { label: 'Plugins', value: 'plugins' },
                            { label: 'Custom props', value: 'custom-props' },
                            { label: 'Shorthands', value: 'shorthands' }
                        ]}
                    >
                        <TabItem value="value-maps">
                            <Ui dp="g" gtc="1fr 1fr" gg={6} mq={['d', { gtc: '100%' }]}>
                                <Ui dp="f" jc="sa" fd="c">
                                    <Ui.p fts={[20, '!important']} c="#777">
                                        You can assign value maps to <Ui.span ftw={900}>any</Ui.span> CSS or custom
                                        property your design system requires. Common use cases are colors, font sizes
                                        and dimensions.
                                    </Ui.p>
                                    <Ui.p fts={[20, '!important']} c="#777">
                                        <strong>YouEye</strong> gives you the freedom to implement your design system
                                        needs however it's most comfortable for you.
                                    </Ui.p>
                                </Ui>
                                <Ui>
                                    <CodeBlock className="js">{`ccss.setProps([
  [['width'], { demo: 300 }],
  [['color'], { paragraph: '#c893a1' }],
  [['font-size'], { large: 16 }]
])`}</CodeBlock>
                                    <Ui
                                        mT={4}
                                        editorWrapper
                                        child={{ '[class^="playgroundPreview"] > div > div': { padding: 3 } }}
                                    >
                                        <CodeBlock
                                            className="js"
                                            live
                                        >{`<Ui width="demo" textAlign="center" margin="0 auto">
    <Ui.span fontSize="large" color="paragraph">
        Memes are fun!
    </Ui.span>
</Ui>`}</CodeBlock>
                                    </Ui>
                                </Ui>
                            </Ui>
                        </TabItem>
                        <TabItem value="plugins">
                            <Ui dp="g" gtc="1fr 1fr" gg={6} mq={['d', { gtc: '100%' }]}>
                                <Ui dp="f" jc="sa" fd="c">
                                    <Ui.p fts={[20, '!important']} c="#777">
                                        Enhance the functionality of existing properties by supporting new value types
                                        and/or special rules.
                                    </Ui.p>
                                    <Ui.p fts={[20, '!important']} c="#777">
                                        Good examples are <strong>CCSS</strong>'s <code>plugin-gutter</code> for
                                        consistent spacing, and <code>plugin-ratio</code> to support the padding ratio
                                        "hack" out-of-the-box.
                                    </Ui.p>
                                </Ui>
                                <Ui>
                                    <Ui editorWrapper>
                                        <CodeBlock className="js" live>{`<Ui
    display="grid"
    gridTemplateColumns="1fr 1fr"
    width="100%"
    // 5 * 5px
    gridGap={5}
>
    {/* 3 * 5px */}
    <Ui padding={3}>Column 1</Ui>
    <Ui padding={3}>Column 2</Ui>
</Ui>`}</CodeBlock>
                                    </Ui>
                                </Ui>
                            </Ui>
                        </TabItem>
                        <TabItem value="custom-props">
                            <Ui dp="g" gtc="1fr 1fr" gg={6} mq={['d', { gtc: '100%' }]}>
                                <Ui dp="f" jc="sa" fd="c">
                                    <Ui.p fts={[20, '!important']} c="#777">
                                        Add your own custom properties to share, compose, re-use styles, and design
                                        tokens. Create amazing new features living right inside your CSS.
                                    </Ui.p>
                                    <Ui.p fts={[20, '!important']} c="#777">
                                        Good examples are <strong>CCSS</strong>'s <code>prop-keyframes</code> to
                                        simplify animation creation, and <code>prop-mq</code> to support prepared custom
                                        breakpoints instead of manually constructing them.
                                    </Ui.p>
                                </Ui>
                                <Ui>
                                    <Ui
                                        editorWrapper
                                        child={{
                                            '[class^="playgroundPreview"] > div > div': {
                                                color: 'white',
                                                pad: 3,
                                                textAlign: 'c',
                                                width: '100%'
                                            }
                                        }}
                                    >
                                        <CodeBlock className="js" live>{`<Ui
    animation="1s linear infinite"
    keyframes={{
        from: { opacity: 0 },
        to: { opacity: 1 }
    }}
    at={['tablet-', {
        keyframes: {
            from: { opacity: 0, transform: 'scale(1)' },
            to: { opacity: 1, transform: 'scale(2)' }
        }
    }]}
    >
    Current size:
    <Ui.span at={['tablet-', { display: 'none' }]}>Desktop</Ui.span>
    <Ui.span at={['small+', { display: 'none' }]}>Tablet</Ui.span>
</Ui>`}</CodeBlock>
                                    </Ui>
                                </Ui>
                            </Ui>
                        </TabItem>
                        <TabItem value="shorthands">
                            <Ui dp="g" gtc="1fr 1fr" gg={6} mq={['d', { gtc: '100%' }]}>
                                <Ui dp="f" jc="sa" fd="c">
                                    <Ui.p fts={[20, '!important']} c="#777">
                                        Many libraries offer some sort of shorthands for popular, frequently used cases.
                                        By <strong>CCSS</strong> shorthands are provided for all CSS properties and
                                        values.
                                    </Ui.p>
                                    <Ui.p fts={[20, '!important']} c="#777">
                                        Shorthands enable faster prototyping and development, and removes a lot of
                                        clutter from your screen. It is easy to get used to and get along with after a
                                        short period of time.
                                    </Ui.p>
                                    <Ui.p fts={[20, '!important']} c="#777">
                                        Shorthands are completely <strong>optional</strong> to use. It is a very
                                        opinionated approach, it's always up to the developer's/team's taste. You may
                                        also combine long names with short values for better readability.
                                    </Ui.p>
                                </Ui>
                                <Ui>
                                    <Ui editorWrapper>
                                        <Ui.h4>Long names, long values</Ui.h4>
                                        <CodeBlock className="js">{`<Ui
    display="grid"
    gridTemplateColumns="1fr 1fr"
    margin={10}
    textAlign="center"
    backgroundColor="transparent"
/>`}</CodeBlock>
                                        <Ui.h4 mT={5}>Long names, short values</Ui.h4>
                                        <CodeBlock className="js">{`<Ui
    display="g"
    gridTemplateColumns="1fr 1fr"
    margin={10}
    textAlign="c"
    backgroundColor="t"
/>`}</CodeBlock>
                                        <Ui.h4 mT={5}>Short names, short values</Ui.h4>
                                        <CodeBlock className="js">{`<Ui dp="g" gtc="1fr 1fr" m={10} ta="c" bgc="t" />`}</CodeBlock>
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
        title: <>Static extraction</>,
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
    }
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
                                <Ui.div mR={6}>
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
            <Ui.header P="relative" pT="clamp(30px, calc(100vh - 971px), 220px)" o="h" mq={['d', { pT: 10 }]}>
                <Ui className="myContainer" width="100%" maxWidth={1398} margin="0 auto">
                    <Ui.h1 mB={10}>
                        <img width={300} src="img/youEyeLogo.png" alt="CrypticCSS" title="YouEye" />
                    </Ui.h1>
                    <Ui.p fts={54} fontWeight={900} lh={1.25} mB={5} color="black" mq={['d', { fts: 38 }]}>
                        {siteConfig.tagline}
                    </Ui.p>
                    <Ui.p fts={24} lh={1.8} mB={10} fontWeight={500}>
                        Comfortable, prop based styling combining the advantages of traditional and CSS-in-JS solutions.
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
                                alt="YouEye on GitHub"
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
                            <stop offset="0%" stopColor="#ff007e" />
                            <stop offset="25%" stopColor="#B5179E" />
                            <stop offset="25%" stopColor="#ff007e" />
                            <stop offset="25%" stopColor="#B5179E" />
                            <stop offset="100%" stopColor="#ff007e" />
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
