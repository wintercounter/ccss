import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import styles from './styles.module.css'

const Sandbox = () => (
    <section className="demo" style={{ width: '100%' }}>
        <div className="container">
            <div className="row home-tabs">
                <Tabs
                    defaultValue="vanilla"
                    values={[
                        { label: 'Vanilla JS', value: 'vanilla' },
                        { label: 'Long names', value: 'long' },
                        { label: 'Styled-components', value: 'styled' },
                        { label: 'Custom props and values', value: 'custom' }
                    ]}
                >
                    <TabItem value="vanilla">
                        <iframe
                            loading="lazy"
                            src="https://codesandbox.io/embed/ccss-demo-vanilla-js-bhw3z?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
                            title="CCSS Demo - Vanilla JS"
                            allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
                            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
                        />
                    </TabItem>
                    <TabItem value="styled">
                        <iframe
                            loading="lazy"
                            src="https://codesandbox.io/embed/ccss-homepage-demo-05m1v?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
                            title="CCSS Demo - Styled-Components"
                            allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
                            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
                        />
                    </TabItem>
                    <TabItem value="long">
                        <iframe
                            loading="lazy"
                            src="https://codesandbox.io/embed/ccss-homepage-demo-longnames-ehyzg?fontsize=14&hidenavigation=1&theme=dark"
                            title="CCSS Demo - LongNames"
                            allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
                            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
                        />
                    </TabItem>
                    <TabItem value="custom">
                        <iframe
                            loading="lazy"
                            src="https://codesandbox.io/embed/ccss-demo-custom-props-and-values-1i13q?fontsize=14&hidenavigation=1&theme=dark"
                            title="CCSS Demo - Custom Props and Values"
                            allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
                            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
                        />
                    </TabItem>
                </Tabs>
            </div>
        </div>
    </section>
)

const features = [
    {
        title: <>What CCSS exactly is?</>,
        imageUrl: 'svg/009-benzene.svg',
        description: (
            <>
                <p>
                    <strong>CCSS</strong> is a very much opinionated, low level utility to deal with CSS style objects.
                    It's <em>not</em> an out of the box styling solution, instead it focuses on helping you deliver your
                    own, custom tool. At the end it's basically an object transformer that generates its output based on
                    different rules which are defined by you. However, we also created some ready to use tools built on
                    top of <strong>CCSS</strong>.
                </p>
                <p>
                    <strong>CCSS</strong> is easy to extend, it's broke down to a very few principles which are helping
                    you play with its results: <em>props</em>, <em>maps</em> and <em>transformers</em>.
                </p>
            </>
        )
    },
    {
        title: <>Performance</>,
        imageUrl: 'svg/022-speedometer.svg',
        description: (
            <p>
                CSS-in-JS by default is a trade-off on performance, no matter which library you choose. Compiling CSS
                dynamically at runtime will always have its costs. During the development of <strong>CCSS</strong>{' '}
                strict decisions and various micro-optimizations have been made to ensure it won't affect performance
                seriously. The included features are limited to maintain speed and simplicity.
            </p>
        )
    },
    {
        title: <>What CCSS means?</>,
        imageUrl: 'svg/018-magnifying-glass.svg',
        description: (
            <>
                <p>
                    <strong>Cryptic</strong>CSS. The initial source of the idea was using <em>short names</em> for all
                    CSS properties and their values in a React props based environment, like <code>d="b"</code> instead
                    of <code>display="block"</code>.
                </p>
                <p>
                    There were 2 goals with this approach:
                    <ul>
                        <li>to be able to define styles in a single row of a component;</li>
                        <li>
                            to achieve <strong>true CSS mangling</strong> to optimize file size.
                        </li>
                    </ul>
                    This makes our code look a bit... err... <em>Cryptic</em>, but it's optional to use short names.
                </p>
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
                            <code>{`<Ui d="f" w="100%" bgc="#fff">
    My Content
</Ui>`}</code>
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
                        have an output based on <strong>utility-first</strong> approaches where you only have the code
                        in your bundle what you actually do use.
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
                            🐢 <progress max={100} value={25} /> dynamic styled-components: slow
                        </li>
                        <li>
                            🐢 <progress max={100} value={25} /> ccss + styled-components: slow
                        </li>
                        <li>
                            🐒 <progress max={100} value={50} /> static styled-components: normal
                        </li>
                        <li>
                            🐇 <progress max={100} value={100} /> ccss + styled-components + babel-plugin: fast
                        </li>
                    </ul>
                    On a production codebase we managed to save <em>800-1200ms</em> in average on our initial rendering
                    performance.
                </div>
            </>
        )
    },
    {
        title: <>React-Native support</>,
        imageUrl: 'img/undraw_fast_loading.svg',
        description: (
            <p>
                The concept of <strong>CSS mangling</strong> is simple: support a shorter version of all CSS properties
                and static values. While CSS is not the biggest part of your codebase, you can still achieve valuable
                size savings. Using together with <em>styled-components</em> will give you the power of mangling{' '}
                <em>React</em> props used for styling.
            </p>
        )
    },
    {
        title: <>True CSS Mangling</>,
        imageUrl: 'img/undraw_fast_loading.svg',
        description: (
            <p>
                The concept of <strong>CSS mangling</strong> is simple: support a shorter version of all CSS properties
                and static values. While CSS is not the biggest part of your codebase, you can still achieve valuable
                size savings. Using together with <em>styled-components</em> will give you the power of mangling{' '}
                <em>React</em> props used for styling.
            </p>
        )
    },
    {
        title: <>Design system capabilities</>,
        imageUrl: 'img/undraw_developer_activity.svg',
        description: (
            <p>
                <strong>CCSS</strong> feels really weird on first sight. However it's not the same thing as using single
                characters for variable naming. Once you get used with it you will feel it's benefits and you will ❤️
                the boost it gives you.{' '}
                <a href="https://tailwindcss.com/docs/utility-first" target="_blank">
                    Tailwind CSS's docs
                </a>{' '}
                summarizes really well the feelings of using such <em>Utility-first</em> approach.
            </p>
        )
    },
    {
        title: <>What problems does it solve?</>,
        imageUrl: 'img/undraw_developer_activity.svg',
        description: <p>Inheriting props.</p>
    },
    {
        id: 'sandbox',
        title: <>Try it out!</>,
        imageUrl: 'svg/031-nuclear-explosion.svg',
        description: <Sandbox />
    }
]

function Feature({ id, imageUrl, title, description, icon, i }) {
    const imgUrl = useBaseUrl(imageUrl)
    return (
        <>
            <div
                id={id || `feature${i}`}
                className={styles.featuresRow}
                style={{ background: i % 2 ? '#f8f8f8' : '#fff' }}
            >
                <div className="container">
                    <div className="row">
                        <div className={classnames('col col--12', styles.feature)}>
                            <div className="row">
                                <div className="col col--2">
                                    {imageUrl && <img className={styles.featureImage} src={imgUrl} alt={title} />}
                                    {icon}
                                </div>
                                <div className="col col--10">
                                    <h3>{title}</h3>
                                    {description}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function Home() {
    const context = useDocusaurusContext()
    const { siteConfig = {} } = context
    return (
        <Layout title="CrypticCSS" description="Your companion to the journey of your next CSS-in-JS solution.">
            <header className={classnames(styles.heroBanner)}>
                <div className="container">
                    <h1>
                        <img src="img/logo.png" alt="CrypticCSS" title="CCSS" />
                        {/*  CrypticCSS*/}
                    </h1>
                    <p className={styles.tagLine}>{siteConfig.tagline}</p>
                    <p className={styles.tagLine}>
                        Yet another tool to handle CSS style objects but in particular ways.
                    </p>
                    <div className={styles.buttons}>
                        <Link
                            className={classnames(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted
                            )}
                            to={useBaseUrl('/docs/usage/getting-started')}
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
                            to={useBaseUrl('/docs/usage/examples')}
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
                    <div className={styles.buttons} style={{ marginTop: '1rem', marginBottom: 0 }}>
                        <a href="https://github.com/wintercounter/ccss">
                            <img
                                src="https://flat.badgen.net/github/stars/wintercounter/ccss?scale=1.5&label=Star%20on%20GitHub&color=00cf9b"
                                alt="CCSS on GitHub"
                            />
                        </a>
                        <a href="https://github.com/wintercounter/ccss">
                            <img
                                src="https://flat.badgen.net/npm/v/ccss?scale=1.5&label=Latest%20Stable%20&color=d11141"
                                alt="Current stable CCSS version"
                            />
                        </a>
                        <a href="https://twitter.com/wintercounter1">
                            <img
                                src="https://flat.badgen.net/twitter/follow/wintercounter1?scale=1.5&label=Follow%20on%20Twitter&color=1dcaff"
                                alt="wintercounter on Twitter"
                            />
                        </a>
                    </div>
                </div>
            </header>
            <main>
                {features && features.length && (
                    <section className={styles.features}>
                        {features.map((props, idx) => (
                            <Feature key={idx} {...props} i={idx} />
                        ))}
                    </section>
                )}
            </main>
        </Layout>
    )
}

export default Home
