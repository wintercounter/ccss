process.env.SITE = process.env.SITE || 'ccss'

const configs = {
    ccss: {
        title: 'CCSS',
        tagline: 'Swiss-army knife for custom CSS-in-JS and design-system needs.',
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
                    { to: 'docs/getting-started/installation', label: 'Documentation', position: 'left' },
                    { to: 'https://youeye.dev', label: 'YouEye', position: 'left' },
                    /*{ to: 'tailwind/getting-started/introduction', label: 'Tailwind CCSS', position: 'left' },*/
                    {
                        href: 'https://github.com/wintercounter/ccss',
                        label: 'GitHub',
                        position: 'left'
                    }
                    /*{ to: 'blog', label: 'Blog', position: 'left' },*/
                    /*{
                        href: 'https://github.com/wintercounter/ccss',
                        label: 'GitHub',
                        position: 'right'
                    }*/
                ]
            },
            footer: {},
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
                    docs: false,
                    pages: false,
                    theme: {
                        customCss: require.resolve('./src/css/custom.css')
                    }
                }
            ]
        ],
        themes: ['@docusaurus/theme-live-codeblock'],
        plugins: [
            //'@docusaurus/plugin-google-analytics',
            /* require.resolve('./src/js') */
            [
                '@docusaurus/plugin-content-docs',
                {
                    id: 'docs',
                    path: 'docs/ccss',
                    routeBasePath: 'docs',
                    sidebarPath: require.resolve('./docs/ccss/sidebars.js'),
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true
                }
            ],
            [
                '@docusaurus/plugin-content-pages',
                {
                    path: 'src/pages/ccss',
                    routeBasePath: '/'
                }
            ]
        ]
    },
    youeye: {
        title: 'YouEye',
        tagline: 'The single component UI kit.',
        url: 'https://youeye.dev',
        baseUrl: '/',
        favicon: 'img/youEyeFavicon.ico',
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
                    alt: 'YouEye Logo',
                    src: 'img/youEyeLogoMini.png'
                },
                items: [
                    { to: 'docs/getting-started/basic-usage', label: 'Documentation', position: 'left' },
                    { to: 'https://ccss.dev', label: 'CCSS', position: 'left' },
                    {
                        href: 'https://github.com/wintercounter/ccss',
                        label: 'GitHub',
                        position: 'left'
                    }
                    /*{ to: 'blog', label: 'Blog', position: 'left' },*/
                    /*{
                        href: 'https://github.com/wintercounter/ccss',
                        label: 'GitHub',
                        position: 'right'
                    }*/
                ]
            },
            footer: {},
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
                    docs: false,
                    pages: false,
                    theme: {
                        customCss: require.resolve('./src/css/custom.css')
                    }
                }
            ]
        ],
        themes: ['@docusaurus/theme-live-codeblock'],
        plugins: [
            //'@docusaurus/plugin-google-analytics',
            [
                '@docusaurus/plugin-content-docs',
                {
                    id: 'docs',
                    path: 'docs/youeye',
                    routeBasePath: 'docs',
                    sidebarPath: require.resolve('./docs/youeye/sidebars.js'),
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true
                }
            ],
            [
                '@docusaurus/plugin-content-pages',
                {
                    path: 'src/pages/youeye',
                    routeBasePath: '/'
                }
            ]
        ]
    }
}

module.exports = configs[process.env.SITE]
