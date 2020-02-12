module.exports = {
    title: 'CCSS',
    tagline: 'CrypticCSS - A CSS-in-JS concept that brings you true CSS mangling with design system capabilities.',
    url: 'https://ccss.dev',
    baseUrl: '/',
    favicon: 'img/favicon.ico',
    organizationName: 'wintercounter', // Usually your GitHub org/user name.
    projectName: 'ccss', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'CCSS',
            logo: {
                alt: 'CrypticCSS Logo',
                src: 'img/logo.svg'
            },
            links: [
                { to: 'docs/doc1', label: 'Docs', position: 'left' },
                { to: 'blog', label: 'Blog', position: 'left' },
                {
                    href: 'https://github.com/wintercounter/ccss',
                    label: 'GitHub',
                    position: 'right'
                }
            ]
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Style Guide',
                            to: 'docs/doc1'
                        },
                        {
                            label: 'Second Doc',
                            to: 'docs/doc2'
                        }
                    ]
                },
                {
                    title: 'Social',
                    items: [
                        {
                            label: 'Blog',
                            to: 'blog'
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/wintercounter/ccss'
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/wintercounter1'
                        }
                    ]
                },
                {
                    title: 'Inspired by',
                    items: [
                        {
                            label: 'Styled Components',
                            href: 'https://styled-components.com'
                        },
                        {
                            label: 'Styled System',
                            href: 'https://styled-system.com'
                        },
                        {
                            label: 'Grommet',
                            href: 'https://v2.grommet.io'
                        }
                    ]
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} - Built with Docusaurus.`
        }
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/wintercounter/css/edit/master/web/'
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                }
            }
        ]
    ]
}
