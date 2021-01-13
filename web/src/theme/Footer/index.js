/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useEffect } from 'react'
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

    useEffect(() => {
        setTimeout(() => {
            document.body.classList.add('loaded')
        }, 1000)
    }, [])

    if (!footer) {
        return null
    }

    return (
        <Ui.footer position="r" textAlign="center" p={[40, 5, 5, 5]} mq={['d', { o: 'h' }]}>
            <Ui.span c="#888">
                built with ❤ and inspired by
                <br />
                Styled Components, Styled System, Grommet, Linaria and Tailwind CSS
            </Ui.span>
            <Ui c="#888">
                Icons made by{' '}
                <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
                    Freepik
                </a>{' '}
                from{' '}
                <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com
                </a>
            </Ui>
        </Ui.footer>
    )
}

export default Footer
