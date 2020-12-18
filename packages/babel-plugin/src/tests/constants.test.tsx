/**
 * @jest-environment node
 */

// @ts-nocheck

import pluginTester from 'babel-plugin-tester/pure'
import plugin from '../index'

pluginTester({
    pluginName: 'babel-plugin-ccss',
    plugin,
    pluginOptions: {
        extract: false,
        constants: {
            Ui: {
                Dim: {
                    HeaderHeight: 50
                },
                FontSize: {
                    Small: 10,
                    Extras: {
                        Foo: 'Bar'
                    }
                },
                Theme: {
                    Foo: {
                        Bar: {
                            Baz: {
                                Array: [0, 0, 0, '#000'],
                                Object: { foo: 1 },
                                Calc: ['calc(', 4, ')']
                            }
                        }
                    }
                }
            }
        }
    },
    babelOptions: {
        presets: [require.resolve('@babel/preset-react')],
        plugins: [require.resolve('@babel/plugin-syntax-jsx/lib/index.js')]
    },
    filename: __filename,
    tests: [
        {
            title: 'can resolve constants :: simple',
            code: '<Ui fontSize={Ui.FontSize.Small} />;',
            output: `/*#__PURE__*/
React.createElement(Ui, {
  fts: 10
});`
        },
        {
            title: 'can resolve constants :: array',
            code: '<Ui width={Ui.Theme.Foo.Bar.Baz.Array} />;',
            output: `/*#__PURE__*/
React.createElement(Ui, {
  w: [0, 0, 0, "#000"]
});`
        },
        {
            title: 'can resolve constants :: object',
            code: '<Ui width={Ui.Theme.Foo.Bar.Baz.Object} />;',
            output: `/*#__PURE__*/
React.createElement(Ui, {
  w: {
    "foo": 1
  }
});`
        },
        {
            title: 'can skip Ui non-ccss Ui calls',
            code: 'var { Ui } = foo; var [ Ui ] = foo',
            output: `var {
  Ui
} = foo;
var [Ui] = foo;`
        },
        {
            title: 'can skip handling assignments',
            code: 'Ui.Theme = foo',
            output: `Ui.Theme = foo;`
        },
        {
            title: 'can skip computed constants',
            code: `const x = Ui.Theme[theme].Signs`,
            output: `const x = Ui.Theme[theme].Signs;`
        },
        {
            title: 'can resolve transpiled code',
            code: `const SiteHeader = () => {
    const [
        { headerState: state = EHeaderState.GHOST, isSiteMenuOpen, isCelebrityPage, HeaderMainContent },
        setLayoutState
    ] = useContext(LayoutContext)
    const [ref, inView, entry] = useInView({
        triggerOnce: false,
        threshold: 0
    })
    const {
        background,
        jasminLogoColor,
        hamburgerFill,
        lineBackground,
        contentState,
        mainOrder,
        lineOrder
    } = getSiteHeaderColors(state, filledColorProps, ghostColorProps, inView, entry, isCelebrityPage)

    const [uiBurgerState, setUiBurgerState] = useState(UiBurger.STATE.DEFAULT)

    useEffect(() => {
        !isSiteMenuOpen && setUiBurgerState(UiBurger.STATE.DEFAULT)
    }, [isSiteMenuOpen])

    const { placeBanner } = useWarningNotification()

    console.log(SiteHeader.toString())

    return (
        <Ui.header height="var(--dim-HeaderHeight)" position="relative" width="100%">
            <div
                ref={ref}
                style={{
                    position: 'absolute',
                    height: Ui.Dim.HeaderHeight,
                    width: '100%'
                }}
            />
            <Ui flexDirection="column" position="fixed" width="100%" zIndex="50">
                {placeBanner()}
                <Ui
                    data-banner
                    alignItems="center"
                    background={background}
                    flexDirection="column"
                    height={Ui.Dim.HeaderHeight}
                    transition="background var(--transition-duration) var(--transition-timing)"
                    style={{ paraszt: 4 }}
                >
                    <Ui.nav
                        width="100%"
                        display="grid"
                        gridTemplateColumns={Ui.Theme.SiteHeader.GridDesktopTemplate}
                        height="100%"
                        gridGap={Ui.Theme.SiteHeader.GridGap}
                        mq={[
                            't-',
                            {
                                gridTemplateColumns: HeaderMainContent
                                    ? Ui.Theme.SiteHeader.GridMainContentHeaderTemplate
                                    : Ui.Theme.SiteHeader.GridMobileTemplate
                            }
                        ]}
                        style={{
                            order: mainOrder
                        }}
                    >
                        <Ui height="100%">
                            <UiBurger
                                data-testid="site-header-hamburger"
                                fill={hamburgerFill}
                                onClick={() =>
                                    setLayoutState(prevState => ({ ...prevState, isSiteMenuOpen: !isSiteMenuOpen }))
                                }
                                state={uiBurgerState}
                                pad={[0, 1.5]}
                                mq={[
                                    't-',
                                    {
                                        pad: [0, 1]
                                    }
                                ]}
                                height="100%"
                                cursor="pointer"
                            />
                            {isSiteMenuOpen && (
                                <SiteSideMenu onAnimationComplete={() => setUiBurgerState(UiBurger.STATE.ACTIVE)} />
                            )}
                        </Ui>
                        <Ui
                            justifyContent={Ui.Theme.SiteHeader.LogoDirection}
                            alignItems="center"
                            height="100%"
                            data-testid="site-header-logo"
                        >
                            {HeaderMainContent && <HeaderMainContent />}
                            {!HeaderMainContent && (
                                <Link to={ROOT} data-testid="site-header-logo">
                                    <Ui
                                        icon={Ui.Icon.JasminCom}
                                        color={jasminLogoColor}
                                        fontSize={Ui.Font.Size.XL}
                                        transition="color var(--transition-duration) var(--transition-timing)"
                                    />
                                </Link>
                            )}
                        </Ui>
                        <Ui display="grid" gridTemplateColumns="2fr auto auto" gridGap={1}>
                            <Ui />
                            <HeaderButtons state={contentState} />
                            <Authorization state={contentState} />
                        </Ui>
                    </Ui.nav>
                    {Ui.Theme.SiteHeader.allowHeaderBorder && (
                        <Ui
                            background={lineBackground}
                            order={lineOrder}
                            width="100%"
                            height="var(--dim-HeaderBorderHeight)"
                            transition="background var(--transition-duration) var(--transition-timing)"
                            data-testid="site-header-line"
                        />
                    )}
                </Ui>
            </Ui>
        </Ui.header>
    )
}`,
            output: `/*#__PURE__*/
React.createElement(Ui, {
  fts: 10
});`
        }
        /*{
            title: 'can skip mehehe',
            code: `import { merge } from 'lodash-es'

export const applyTheme = Ui => {
    merge(Ui.Theme, {
        AuthMenu: {
            ItemColor: Ui.Color.DarkTwo,
            ItemHover: Ui.Color.StateActive,
            ButtonColor: Ui.Button.Color.Secondary,
            DropDownScheme: 'primary',
            ItemPosBottom: Ui.Dim.HeaderBorderHeight * -1
        },
        AuthButton: {
            TabletFilled: Ui.Color.DarkOne,
            TabletGhost: Ui.Color.LightZero,
            DesktopFilled: Ui.Button.Color.Secondary,
            DesktopGhost: Ui.Button.Color.Primary,
            Size: Ui.Button.Size.XSMall,
            FontSize: Ui.Font.Size.XS,
            FontWeight: undefined,
            Radius: Ui.Radius.Button.Default,
            singleAuthBtn: true
        },
        MainLayout: {
            Background: 'initial',
            BackgroundDark: 'initial',
            isFilledHeader: false,
            isHeadlessCelebrityPage: false
        },
        SiteHeader: {
            ColorFilled: Ui.Color.LightZero95,
            ColorGhost: Ui.Color.Neutral,
            LogoFilled: Ui.Color.JasminRedTwo,
            LogoGhost: Ui.Color.LightZero,
            HamburgerFilled: 'DarkOne',
            HamburgerGhost: 'LightZero',
            IconFilled: Ui.Color.LightZero,
            IconGhost: Ui.Color.LightZero,
            IconHover: Ui.Color.LightZero,
            BadgeFilled: Ui.Color.TagTurquoise,
            BadgeGhost: Ui.Color.TagYellow,
            allowHeaderBorder: true,
            allowFilledMemberButton: false,
            forceFilledJoinButton: false,
            LogoDirection: 'center',
            DropDownTextSize: undefined,
            GridGap: 1,
            GridDesktopTemplate: '5fr 2fr 5fr',
            GridMobileTemplate: '2fr 8fr 2fr',
            GridMainContentHeaderTemplate: '2fr 8fr 2fr'
        },
        SiteFooter: {
            Primary: {
                Background: Ui.Color.DarkOne,
                LinkColorDark: Ui.Color.DarkThree,
                LinkColorHover: Ui.Color.LightZero,
                LinkColorLightTwo: Ui.Color.LightTwo,
                LinkColorLightOne: Ui.Color.LightOne
            },
            Secondary: {
                Background: Ui.Color.DarkOne,
                LinkColorDark: Ui.Color.DarkThree,
                LinkColorHover: Ui.Color.LightZero,
                LinkColorLightTwo: Ui.Color.LightTwo,
                LinkColorLightOne: Ui.Color.LightOne
            }
        },
        SiteSideMenu: {
            Background: 'initial',
            UiBurgerLeft: '100%',
            UiBurgerColorActive: Ui.Color.LightZero,
            UiBurgerColorDefault: Ui.Color.LightZero
        },
        ChatOverlay: {
            BackgroundColor: Ui.Color.LightZero,
            ButtonRadius: Ui.Radius.Button.None,
            ButtonColor: Ui.Button.Color.Secondary,
            IconColor: Ui.Color.Light,
            CloseButtonColor: Ui.Color.DarkThree,
            TitleColor: Ui.Color.DarkTwo,
            TitleFontSize: Ui.Font.Size.Large_20,
            TitleFontWeight: Ui.Font.Weight.Bold,
            SubTitleColor: Ui.Color.DarkTwo,
            SubTitleFontSize: Ui.Font.Size.Normal_16,
            SubTitleFontWeight: Ui.Font.Weight.Normal
        },
        ConsentBanner: {
            TextColor: Ui.Color.Light,
            TextAnchor: Ui.Color.Yellow,
            ButtonColor: Ui.Button.Color.Secondary,
            ButtonRadius: Ui.Radius.Button.Default
        },
        Overlay: {
            Backdrop: Ui.Color.DarkOne90,
            CloseButtonColor: Ui.Color.LighZero,
            CloseButtonIconColor: Ui.Color.DarkTwo
        }
    })
}
`,
            output: `const x = Ui.Theme[theme].Signs;`
        }*/
    ]
})
