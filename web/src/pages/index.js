import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const features = [
    {
        title: <>True CSS Mangling</>,
        imageUrl: 'img/undraw_docusaurus_mountain.svg',
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
        imageUrl: 'img/undraw_docusaurus_tree.svg',
        description: (
            <>
                During the development of <strong>CCSS</strong>
                strict decision and various micro-optimizations have been made to ensure it won't have serious
                performance costs. The included features are limited to maintain simplicity. However, it is really easy
                to extend the core functionality with custom solutions.
            </>
        )
    },
    {
        title: <>A very different DX</>,
        imageUrl: 'img/undraw_docusaurus_react.svg',
        description: (
            <>
                <strong>CSSS</strong> feels really weird on first sight. However it's not the same thing as using single
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
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

function Home() {
    const context = useDocusaurusContext()
    const { siteConfig = {} } = context
    return (
        <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
            <header className={classnames('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={classnames(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted
                            )}
                            to={useBaseUrl('docs/doc1')}
                        >
                            Get Started
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
            <section className="hero">
                <div className="container">
                    <h1 className="text--center">Examples</h1>
                    <div className="row">
                        <div className="col col--6">
                            <h2 className="text--center">Pure JS</h2>
                            Coming soon...
                        </div>
                        <div className="col col--6">
                            <h2 className="text--center">
                                With <em>styled-components</em>
                            </h2>
                            Coming soon...
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Home
