module.exports = {
    title: 'CCSS',
    tagline: 'A companion on the journey to your next CSS-in-JS and/or design system solution.',
    url: 'https://ccss.dev',
    baseUrl: '/',
    favicon: 'img/favicon.ico',
    organizationName: 'wintercounter', // Usually your GitHub org/user name.
    projectName: 'ccss', // Usually your repo name.
    themeConfig: {
        sidebarCollapsible: false,
        disableDarkTheme: true,
        googleAnalytics: {
            trackingID: 'UA-141789564-1'
        },
        algolia: {
            apiKey: '4fdab68bf474090efe74ceaf220db37e',
            indexName: 'ccss_dev',
            searchParameters: {} // Optional (if provided by Algolia)
        },
        navbar: {
            title: '',
            logo: {
                alt: 'CrypticCSS Logo',
                src: 'img/logo.png'
            },
            items: [
                { to: 'docs/getting-started/installation', label: 'Getting started', position: 'left' },
                { to: 'docs/api-and-packages/core', label: 'API and Packages', position: 'left' },
                { to: 'docs/guides/quick-examples', label: 'Guides', position: 'left' },
                { to: 'tailwind/getting-started/introduction', label: 'TailwindCCSS', position: 'left' },
                { to: 'docs/more-about-ccss/brief-history', label: 'More about CCSS', position: 'left' },
                /*{ to: 'blog', label: 'Blog', position: 'left' },*/
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
                    title: 'Social',
                    items: [
                        /*{
                            label: 'Blog',
                            to: 'blog'
                        },*/
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
                },
                {
                    title: 'Icons made by',
                    items: [
                        {
                            label: 'Freepik',
                            href: 'https://www.flaticon.com/authors/freepik'
                        },
                        {
                            label: 'www.flaticon.com',
                            href: 'https://www.flaticon.com'
                        }
                    ]
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} - Built with ❤ and Docusaurus.`
        },
        colorMode: {
            // "light" | "dark"
            defaultMode: 'light',

            // Hides the switch in the navbar
            // Useful if you want to support a single color mode
            disableSwitch: true,

            // Should we use the prefers-color-scheme media-query,
            // using user system preferences, instead of the hardcoded defaultMode
            respectPrefersColorScheme: false
        }
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/wintercounter/ccss/edit/master/web/'
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                }
            }
        ]
    ],
    themes: ['@docusaurus/theme-live-codeblock'],
    plugins: [
        '@docusaurus/plugin-google-analytics',
        require.resolve('./src/js'),
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'tailwind',
                path: 'tailwind',
                routeBasePath: 'tailwind',
                sidebarPath: require.resolve('./sidebars.tailwind.js'),
                showLastUpdateAuthor: true,
                showLastUpdateTime: true
            }
        ]
    ]
}
