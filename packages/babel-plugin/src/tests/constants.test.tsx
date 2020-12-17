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
            title: 'can resolve constants :: array',
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
            code: 'const { Ui } = foo',
            output: `const {
  Ui
} = foo;`
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
        }
    ]
})
