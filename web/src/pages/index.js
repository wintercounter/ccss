import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import styles from './styles.module.css'

const features = [
    {
        title: <>True CSS Mangling</>,
        imageUrl: 'img/undraw_fast_loading.svg',
        description: (
            <>
                The concept of <strong>CSS mangling</strong> is simple: support a shorter version of all CSS properties
                and static values. While CSS is not the biggest part of your codebase, you can still achieve valuable
                size savings. Using together with <em>styled-components</em> will give you the power of mangling{' '}
                <em>React</em> props used for styling.
            </>
        )
    },
    {
        title: <>Dynamic, fast and extensible</>,
        imageUrl: 'img/undraw_speed_test.svg',
        description: (
            <>
                During the development of <strong>CCSS</strong> strict decisions and various micro-optimizations have
                been made to ensure it won't have serious performance costs. The included features are limited to
                maintain simplicity. However, it is really easy to extend the core functionality with custom solutions.
            </>
        )
    },
    {
        title: <>A very different DX</>,
        imageUrl: 'img/undraw_developer_activity.svg',
        description: (
            <>
                <strong>CCSS</strong> feels really weird on first sight. However it's not the same thing as using single
                characters for variable naming. Once you get used with it you will feel it's benefits and you will ❤️
                the boost it gives you.{' '}
                <a href="https://tailwindcss.com/docs/utility-first" target="_blank">
                    Tailwind CSS's docs
                </a>{' '}
                summarizes really well the feelings of using such <em>Utility-first</em> approach.
            </>
        )
    }
]

function Feature({ imageUrl, title, description }) {
    const imgUrl = useBaseUrl(imageUrl)
    return (
        <div className={classnames('col col--4', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title} />
                </div>
            )}
            <h3 className="text--center">{title}</h3>
            <p>{description}</p>
        </div>
    )
}

function Home() {
    const context = useDocusaurusContext()
    const { siteConfig = {} } = context
    return (
        <Layout
            title="CCSS - CrypticCSS"
            description="A CSS-in-JS concept that brings you true CSS mangling with design system capabilities."
        >
            <header className={classnames(styles.heroBanner)}>
                <div className="container">
                    <h1>
                        <img src="img/logo.png" alt="CrypticCSS" title="CCSS" />
                    </h1>
                    <p>{siteConfig.tagline}</p>
                    <p>
                        Warning! The concept (and the website as well) is in <strong>Alpha</strong> stage. You should
                        expect breaking changes.
                    </p>
                    <div className={styles.buttons}>
                        <Link
                            className={classnames(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted
                            )}
                            to={useBaseUrl('/docs/usage/getting-started')}
                        >
                            Get Started
                        </Link>
                        <Link
                            className={classnames(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted
                            )}
                            to={useBaseUrl('/docs/usage/examples')}
                        >
                            Examples
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                {features && features.length && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
            <div className={styles.buttons} style={{ marginBottom: '40px' }}>
                <a href="https://github.com/wintercounter/ccss">
                    <img
                        src="https://flat.badgen.net/github/stars/wintercounter/ccss?scale=1.5&label=Star%20on%20GitHub&color=00cf9b"
                        alt="CCSS on GitHub"
                    />
                </a>
                <a href="https://twitter.com/wintercounter1">
                    <img
                        src="https://flat.badgen.net/twitter/follow/wintercounter1?scale=1.5&label=Follow%20on%20Twitter&color=1dcaff"
                        alt="wintercounter on Twitter"
                    />
                </a>
            </div>
            <section className="hero demo">
                <div className="container">
                    <h1 className="text--center">Try it out!</h1>
                    <div className="row home-tabs">
                        <Tabs
                            defaultValue="styled"
                            values={[
                                { label: 'Styled-components', value: 'styled' },
                                { label: 'Long names', value: 'long' },
                                { label: 'Custom props and values', value: 'custom' }
                            ]}
                        >
                            <TabItem value="styled">
                                <iframe
                                    loading="lazy"
                                    src="https://codesandbox.io/embed/ccss-homepage-demo-05m1v?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
                                    title="CCSS Homepage Demo"
                                    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
                                    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
                                />
                            </TabItem>
                            <TabItem value="long">
                                <iframe
                                    loading="lazy"
                                    src="https://codesandbox.io/embed/ccss-homepage-demo-05m1v?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
                                    title="CCSS Homepage Demo"
                                    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
                                    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
                                />
                            </TabItem>
                            <TabItem value="custom">
                                <iframe
                                    loading="lazy"
                                    src="https://codesandbox.io/embed/ccss-homepage-demo-05m1v?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
                                    title="CCSS Homepage Demo"
                                    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
                                    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
                                />
                            </TabItem>
                        </Tabs>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Home
