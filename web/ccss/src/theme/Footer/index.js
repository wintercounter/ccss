/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { Ui } from '../../js/ui'

function FooterLink({ to, href, label, prependBaseUrlToHref, ...props }) {
    const toUrl = useBaseUrl(to)
    const normalizedHref = useBaseUrl(href, {
        forcePrependBaseUrl: true
    })
    return (
        <Link
            className="footer__link-item"
            {...(href
                ? {
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      href: prependBaseUrlToHref ? normalizedHref : href
                  }
                : {
                      to: toUrl
                  })}
            {...props}
        >
            {label}
        </Link>
    )
}

const FooterLogo = ({ url, alt }) => <img className="footer__logo" alt={alt} src={url} />

function Footer() {
    const context = useDocusaurusContext()
    const { siteConfig = {} } = context
    const { themeConfig = {} } = siteConfig
    const { footer } = themeConfig
    const { copyright, links = [], logo = {} } = footer || {}
    const logoUrl = useBaseUrl(logo.src)

    if (!footer) {
        return null
    }

    return (
        <Ui.footer position="r" bg={false} textAlign="center" pB={5} height={80}>
            <Ui.span c="#fff">
                CCSS is built with ❤ and inspired by
                <br />
                Styled Components, Styled System, Grommet, Linaria and Tailwind CSS
            </Ui.span>
            <Ui.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                objectFit="cover"
                position="absolute"
                width="100%"
                left={0}
                right={0}
                maxWidth={1920}
                bottom={0}
                margin="0 auto"
                zi={-1}
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
                    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
        </Ui.footer>
    )
}

export default Footer
