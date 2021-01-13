/**
 * @jest-environment node
 */

// @ts-nocheck

import pluginTester from 'babel-plugin-tester/pure'
import plugin from '@'
import ccss, { toCSSRule } from '@cryptic-css/core'

// Set a non-ccss context prop
ccss.setProps([[['tag', 'icon'], null, [toCSSRule], { ccssContext: false }]])

pluginTester({
    pluginName: 'babel-plugin-ccss',
    plugin,
    pluginOptions: {
        constants: {
            Ui: {
                attrs: [],
                componentStyle: {
                    rules: [null],
                    staticRulesId: '',
                    isStatic: false,
                    componentId: 'sc-bdfBwQ',
                    baseHash: 1014106698
                },
                foldedComponentIds: [],
                styledComponentId: 'sc-bdfBwQ',
                target: 'div',
                a: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-gsTCUz',
                        baseHash: 431907906
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-gsTCUz',
                    target: 'a'
                },
                abbr: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-dlfnbm',
                        baseHash: 394922401
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-dlfnbm',
                    target: 'abbr'
                },
                address: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-hKgILt',
                        baseHash: -1679377413
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-hKgILt',
                    target: 'address'
                },
                area: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-eCssSg',
                        baseHash: -1543823972
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-eCssSg',
                    target: 'area'
                },
                article: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-jSgupP',
                        baseHash: 837617221
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-jSgupP',
                    target: 'article'
                },
                aside: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-gKsewC',
                        baseHash: -1915553472
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-gKsewC',
                    target: 'aside'
                },
                audio: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-iBPRYJ',
                        baseHash: 1059715860
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-iBPRYJ',
                    target: 'audio'
                },
                b: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-fubCfw',
                        baseHash: -1123220339
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-fubCfw',
                    target: 'b'
                },
                base: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-pFZIQ',
                        baseHash: -2005572326
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-pFZIQ',
                    target: 'base'
                },
                bdi: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-jrAGrp',
                        baseHash: 1505707474
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-jrAGrp',
                    target: 'bdi'
                },
                bdo: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-kEjbxe',
                        baseHash: -860817163
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-kEjbxe',
                    target: 'bdo'
                },
                big: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-iqHYGH',
                        baseHash: -1311728344
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-iqHYGH',
                    target: 'big'
                },
                blockquote: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-crrsfI',
                        baseHash: -1040244047
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-crrsfI',
                    target: 'blockquote'
                },
                body: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-dQppl',
                        baseHash: 1074759639
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-dQppl',
                    target: 'body'
                },
                br: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-bqyKva',
                        baseHash: 1572782520
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-bqyKva',
                    target: 'br'
                },
                button: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-kstrdz',
                        baseHash: 520401678
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-kstrdz',
                    target: 'button'
                },
                canvas: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-hBEYos',
                        baseHash: 28710788
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-hBEYos',
                    target: 'canvas'
                },
                caption: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-fodVxV',
                        baseHash: 1131246843
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-fodVxV',
                    target: 'caption'
                },
                cite: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-fFubgz',
                        baseHash: 451619460
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-fFubgz',
                    target: 'cite'
                },
                code: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-bkzZxe',
                        baseHash: 1083998234
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-bkzZxe',
                    target: 'code'
                },
                col: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-idOhPF',
                        baseHash: -257075630
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-idOhPF',
                    target: 'col'
                },
                colgroup: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-dIUggk',
                        baseHash: 358328189
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-dIUggk',
                    target: 'colgroup'
                },
                data: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-hHftDr',
                        baseHash: -282262806
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-hHftDr',
                    target: 'data'
                },
                datalist: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-dmlrTW',
                        baseHash: -1862420742
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-dmlrTW',
                    target: 'datalist'
                },
                dd: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-kfzAmx',
                        baseHash: -2059705779
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-kfzAmx',
                    target: 'dd'
                },
                del: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-fKFyDc',
                        baseHash: 98253211
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-fKFyDc',
                    target: 'del'
                },
                details: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-bBXqnf',
                        baseHash: 617353391
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-bBXqnf',
                    target: 'details'
                },
                dfn: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-iwyYcG',
                        baseHash: 908544916
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-iwyYcG',
                    target: 'dfn'
                },
                dialog: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-cxFLnm',
                        baseHash: -1066620388
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-cxFLnm',
                    target: 'dialog'
                },
                div: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-lmoMRL',
                        baseHash: -1136161421
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-lmoMRL',
                    target: 'div'
                },
                dl: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-iJuUWI',
                        baseHash: -2064721901
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-iJuUWI',
                    target: 'dl'
                },
                dt: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-giIncl',
                        baseHash: -1765865688
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-giIncl',
                    target: 'dt'
                },
                em: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-ezrdKe',
                        baseHash: 577422537
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-ezrdKe',
                    target: 'em'
                },
                embed: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-bYEvPH',
                        baseHash: -437171426
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-bYEvPH',
                    target: 'embed'
                },
                fieldset: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-kLgntA',
                        baseHash: -1011943435
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-kLgntA',
                    target: 'fieldset'
                },
                figcaption: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-iktFzd',
                        baseHash: -2009230560
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-iktFzd',
                    target: 'figcaption'
                },
                figure: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-jJEJSO',
                        baseHash: -110417635
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-jJEJSO',
                    target: 'figure'
                },
                footer: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-hiSbYr',
                        baseHash: 360521973
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-hiSbYr',
                    target: 'footer'
                },
                form: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-gWHgXt',
                        baseHash: -1176886915
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-gWHgXt',
                    target: 'form'
                },
                h1: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-cBNfnY',
                        baseHash: 1006303792
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-cBNfnY',
                    target: 'h1'
                },
                h2: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-citwmv',
                        baseHash: -491660868
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-citwmv',
                    target: 'h2'
                },
                h3: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-jcVebW',
                        baseHash: -1505211871
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-jcVebW',
                    target: 'h3'
                },
                h4: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-bZSQDF',
                        baseHash: 1858073206
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-bZSQDF',
                    target: 'h4'
                },
                h5: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-iUuytg',
                        baseHash: 1652866893
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-iUuytg',
                    target: 'h5'
                },
                h6: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-iBaPrD',
                        baseHash: -1988035710
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-iBaPrD',
                    target: 'h6'
                },
                head: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-eggNIi',
                        baseHash: 257132357
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-eggNIi',
                    target: 'head'
                },
                header: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-cTkwdZ',
                        baseHash: 2130663163
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-cTkwdZ',
                    target: 'header'
                },
                hgroup: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-jNMdTA',
                        baseHash: 1684009430
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-jNMdTA',
                    target: 'hgroup'
                },
                hr: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-dOSReg',
                        baseHash: -54558842
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-dOSReg',
                    target: 'hr'
                },
                html: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-bBrOnJ',
                        baseHash: 8316183
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-bBrOnJ',
                    target: 'html'
                },
                i: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-cOajty',
                        baseHash: -681189948
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-cOajty',
                    target: 'i'
                },
                iframe: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-AzgDb',
                        baseHash: 256912948
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-AzgDb',
                    target: 'iframe'
                },
                img: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-khAkjo',
                        baseHash: 1187723074
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-khAkjo',
                    target: 'img'
                },
                input: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-hTZhsR',
                        baseHash: 1073685217
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-hTZhsR',
                    target: 'input'
                },
                ins: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-jgHCyG',
                        baseHash: 1895964598
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-jgHCyG',
                    target: 'ins'
                },
                kbd: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-gTgzIj',
                        baseHash: -2059619837
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-gTgzIj',
                    target: 'kbd'
                },
                keygen: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-laRPJI',
                        baseHash: 1808094434
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-laRPJI',
                    target: 'keygen'
                },
                label: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-iNqMTl',
                        baseHash: -1404484275
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-iNqMTl',
                    target: 'label'
                },
                legend: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-jeGSBP',
                        baseHash: -938068217
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-jeGSBP',
                    target: 'legend'
                },
                li: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-eJMQSu',
                        baseHash: 1801428699
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-eJMQSu',
                    target: 'li'
                },
                link: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-nFpLZ',
                        baseHash: -507978176
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-nFpLZ',
                    target: 'link'
                },
                main: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-higXBA',
                        baseHash: 752908339
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-higXBA',
                    target: 'main'
                },
                map: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-ehSCib',
                        baseHash: -124430696
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-ehSCib',
                    target: 'map'
                },
                mark: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-lcujXC',
                        baseHash: 480427909
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-lcujXC',
                    target: 'mark'
                },
                marquee: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-gGmIRh',
                        baseHash: 22688080
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-gGmIRh',
                    target: 'marquee'
                },
                menu: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-clsHhM',
                        baseHash: 1158698431
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-clsHhM',
                    target: 'menu'
                },
                menuitem: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-fbkhIv',
                        baseHash: -737602602
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-fbkhIv',
                    target: 'menuitem'
                },
                meta: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-GqfZa',
                        baseHash: 1609371685
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-GqfZa',
                    target: 'meta'
                },
                meter: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-fWSCIC',
                        baseHash: -2115487611
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-fWSCIC',
                    target: 'meter'
                },
                nav: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-dwfUOf',
                        baseHash: 671337543
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-dwfUOf',
                    target: 'nav'
                },
                noscript: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-TmcTc',
                        baseHash: 1016526947
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-TmcTc',
                    target: 'noscript'
                },
                object: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-jHVexB',
                        baseHash: -1190158651
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-jHVexB',
                    target: 'object'
                },
                ol: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-aemoO',
                        baseHash: -959082201
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-aemoO',
                    target: 'ol'
                },
                optgroup: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-jONnTn',
                        baseHash: -621546031
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-jONnTn',
                    target: 'optgroup'
                },
                option: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-hlTvYk',
                        baseHash: 459194970
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-hlTvYk',
                    target: 'option'
                },
                output: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-eLgOdN',
                        baseHash: 1591581381
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-eLgOdN',
                    target: 'output'
                },
                p: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-bTvRPi',
                        baseHash: 455083205
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-bTvRPi',
                    target: 'p'
                },
                param: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-kIeTtH',
                        baseHash: 858813697
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-kIeTtH',
                    target: 'param'
                },
                picture: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-hOqqkJ',
                        baseHash: 644622056
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-hOqqkJ',
                    target: 'picture'
                },
                pre: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-dtwoBo',
                        baseHash: -1154285077
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-dtwoBo',
                    target: 'pre'
                },
                progress: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-dacFzL',
                        baseHash: -2138860776
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-dacFzL',
                    target: 'progress'
                },
                q: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-jUEnpm',
                        baseHash: 971419527
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-jUEnpm',
                    target: 'q'
                },
                rp: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-jQbIHB',
                        baseHash: -1677410636
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-jQbIHB',
                    target: 'rp'
                },
                rt: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-fvhGYg',
                        baseHash: -247349105
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-fvhGYg',
                    target: 'rt'
                },
                ruby: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-fbNXWD',
                        baseHash: -1021264817
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-fbNXWD',
                    target: 'ruby'
                },
                s: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-GTWni',
                        baseHash: 235390317
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-GTWni',
                    target: 's'
                },
                samp: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-gsxnyZ',
                        baseHash: 1802149711
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-gsxnyZ',
                    target: 'samp'
                },
                script: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-bXDlPE',
                        baseHash: -643527575
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-bXDlPE',
                    target: 'script'
                },
                section: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-eGCarw',
                        baseHash: -749753365
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-eGCarw',
                    target: 'section'
                },
                select: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-ctaXAZ',
                        baseHash: 1543346363
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-ctaXAZ',
                    target: 'select'
                },
                small: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-dFJsGO',
                        baseHash: -47827171
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-dFJsGO',
                    target: 'small'
                },
                source: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-bsipQr',
                        baseHash: 36768581
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-bsipQr',
                    target: 'source'
                },
                span: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-gInsOo',
                        baseHash: -1886912835
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-gInsOo',
                    target: 'span'
                },
                strong: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-euMpXR',
                        baseHash: -1588586999
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-euMpXR',
                    target: 'strong'
                },
                style: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-fHuLdG',
                        baseHash: -353781638
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-fHuLdG',
                    target: 'style'
                },
                sub: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-dtTInj',
                        baseHash: 698983271
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-dtTInj',
                    target: 'sub'
                },
                summary: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-dkIXFM',
                        baseHash: 1977638363
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-dkIXFM',
                    target: 'summary'
                },
                sup: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-XhUPp',
                        baseHash: -428848661
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-XhUPp',
                    target: 'sup'
                },
                table: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-ikPAkQ',
                        baseHash: 790813575
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-ikPAkQ',
                    target: 'table'
                },
                tbody: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-tYoTV',
                        baseHash: 12806190
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-tYoTV',
                    target: 'tbody'
                },
                td: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-biBrSq',
                        baseHash: 126815703
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-biBrSq',
                    target: 'td'
                },
                textarea: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-eHfQar',
                        baseHash: -1576195929
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-eHfQar',
                    target: 'textarea'
                },
                tfoot: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-hzMMCg',
                        baseHash: -174998760
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-hzMMCg',
                    target: 'tfoot'
                },
                th: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-kYrkKh',
                        baseHash: 1920565030
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-kYrkKh',
                    target: 'th'
                },
                thead: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-xyEjG',
                        baseHash: 1066787431
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-xyEjG',
                    target: 'thead'
                },
                time: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-dWdcrH',
                        baseHash: -1367035232
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-dWdcrH',
                    target: 'time'
                },
                title: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-jGVbCA',
                        baseHash: -2082762731
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-jGVbCA',
                    target: 'title'
                },
                tr: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-bQdQlF',
                        baseHash: 656874178
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-bQdQlF',
                    target: 'tr'
                },
                track: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-fXoxut',
                        baseHash: 656955398
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-fXoxut',
                    target: 'track'
                },
                u: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-Fyfyc',
                        baseHash: -2059554579
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-Fyfyc',
                    target: 'u'
                },
                ul: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-jXktwP',
                        baseHash: -1610441180
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-jXktwP',
                    target: 'ul'
                },
                var: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-eFubAy',
                        baseHash: -1191245630
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-eFubAy',
                    target: 'var'
                },
                video: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-fmlJLJ',
                        baseHash: 1701658693
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-fmlJLJ',
                    target: 'video'
                },
                wbr: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-ljRboo',
                        baseHash: 1751287672
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-ljRboo',
                    target: 'wbr'
                },
                circle: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-jmhFOf',
                        baseHash: 2132251790
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-jmhFOf',
                    target: 'circle'
                },
                clipPath: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-dUrnRO',
                        baseHash: 197075870
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-dUrnRO',
                    target: 'clipPath'
                },
                defs: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-httYMd',
                        baseHash: 1668922262
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-httYMd',
                    target: 'defs'
                },
                ellipse: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-cbDGPM',
                        baseHash: 1854113617
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-cbDGPM',
                    target: 'ellipse'
                },
                foreignObject: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-hjWSAi',
                        baseHash: -652390400
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-hjWSAi',
                    target: 'foreignObject'
                },
                g: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-gVgnHT',
                        baseHash: 420928010
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-gVgnHT',
                    target: 'g'
                },
                image: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-fWPcDo',
                        baseHash: 806387399
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-fWPcDo',
                    target: 'image'
                },
                line: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-fHYxKZ',
                        baseHash: 1240803184
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-fHYxKZ',
                    target: 'line'
                },
                linearGradient: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-gyUeRy',
                        baseHash: 2134652715
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-gyUeRy',
                    target: 'linearGradient'
                },
                marker: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-gkdzZj',
                        baseHash: 851886380
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-gkdzZj',
                    target: 'marker'
                },
                mask: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-flMoUE',
                        baseHash: 821998550
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-flMoUE',
                    target: 'mask'
                },
                path: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-eWVKcp',
                        baseHash: -1512055662
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-eWVKcp',
                    target: 'path'
                },
                pattern: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-iGctRS',
                        baseHash: 2016938774
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-iGctRS',
                    target: 'pattern'
                },
                polygon: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-irlOZD',
                        baseHash: -536309272
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-irlOZD',
                    target: 'polygon'
                },
                polyline: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-eWvPJL',
                        baseHash: -1583738852
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-eWvPJL',
                    target: 'polyline'
                },
                radialGradient: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-kUbhmq',
                        baseHash: -651515514
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-kUbhmq',
                    target: 'radialGradient'
                },
                rect: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-dwcuIR',
                        baseHash: -797228240
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-dwcuIR',
                    target: 'rect'
                },
                stop: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-jtHMlw',
                        baseHash: -867097618
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-jtHMlw',
                    target: 'stop'
                },
                svg: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-eltcbb',
                        baseHash: -954753904
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-eltcbb',
                    target: 'svg'
                },
                text: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-kiYtDG',
                        baseHash: -1385147774
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-kiYtDG',
                    target: 'text'
                },
                tspan: {
                    attrs: [],
                    componentStyle: {
                        rules: [null],
                        staticRulesId: '',
                        isStatic: false,
                        componentId: 'sc-cKZHah',
                        baseHash: -884028195
                    },
                    foldedComponentIds: [],
                    styledComponentId: 'sc-cKZHah',
                    target: 'tspan'
                },
                Tag: {
                    Size: {
                        XSMALL: 'x-small',
                        SMALL: 'small',
                        NORMAL: 'normal',
                        LARGE: 'large',
                        XLARGE: 'x-large'
                    },
                    Color: {
                        NONE: '',
                        SNOW: 'snow',
                        BLACK: 'black',
                        BLUE: 'blue',
                        GREEN: 'green',
                        GREY: 'grey',
                        ORANGE: 'orange',
                        PINK: 'pink',
                        YELLOW: 'yellow',
                        SALMON: 'salmon',
                        TURQUOISE: 'turquoise',
                        ROSIERED: 'rosie-red',
                        LIME: 'lime',
                        LAVENDER: 'lavender',
                        NUDE: 'nude',
                        TEAL: 'teal',
                        DEFAULT: 'default',
                        RED: 'red',
                        CANDY: 'candy',
                        SUNSHINE: 'sunshine'
                    },
                    State: {
                        DEFAULT: 'default',
                        SELECTED: 'selected',
                        DISABLED: 'disabled'
                    }
                },
                Button: {
                    Size: {
                        XXSMall: 'xx-small',
                        XSMall: 'x-small',
                        Small: 'small',
                        Normal: 'normal',
                        Large: 'large',
                        XLarge: 'x-large'
                    },
                    Color: {
                        Primary: 'primary',
                        Secondary: 'secondary',
                        Tertiary: 'tertiary',
                        Quaternary: 'quaternary',
                        Light: 'light',
                        Dark: 'dark',
                        Red: 'red'
                    },
                    State: {
                        Default: 'default',
                        Hover: 'hover',
                        Disabled: 'disabled'
                    },
                    Variant: {
                        None: 'none',
                        Plain: 'plain',
                        Ghost: 'ghost',
                        Fill: 'fill'
                    }
                },
                Input: {
                    Size: {
                        Small: 'small',
                        Normal: 'normal',
                        Medium: 'medium',
                        Large: 'large'
                    },
                    Color: {
                        Default: 'default',
                        Light: 'light',
                        Dark: 'dark',
                        Red: 'red'
                    },
                    State: {
                        Default: 'default',
                        Disabled: 'disabled'
                    }
                },
                Font: {
                    Size: {
                        XXS: 10,
                        XXSmall: 10,
                        xxs: 10,
                        'xx-small': 10,
                        XS: 11,
                        XSmall: 11,
                        xs: 11,
                        'x-small': 11,
                        S: 12,
                        Small: 12,
                        s: 12,
                        small: 12,
                        N: 14,
                        Normal: 14,
                        n: 14,
                        normal: 14,
                        M: 16,
                        Medium: 16,
                        m: 16,
                        medium: 16,
                        L: 18,
                        Large: 18,
                        l: 18,
                        large: 18,
                        XL: 20,
                        XLarge: 20,
                        xl: 20,
                        'x-large': 20,
                        XXS_05: 5,
                        XXS_15: 15,
                        XXS_20: 20,
                        XXS_25: 25,
                        XXS_30: 30,
                        XXSmall_05: 5,
                        XXSmall_15: 15,
                        XXSmall_20: 20,
                        XXSmall_25: 25,
                        XXSmall_30: 30,
                        xxs_05: 5,
                        xxs_15: 15,
                        xxs_20: 20,
                        xxs_25: 25,
                        xxs_30: 30,
                        'xx-small_05': 5,
                        'xx-small_15': 15,
                        'xx-small_20': 20,
                        'xx-small_25': 25,
                        'xx-small_30': 30,
                        XS_05: 5.5,
                        XS_15: 16.5,
                        XS_20: 22,
                        XS_25: 27.5,
                        XS_30: 33,
                        XSmall_05: 5.5,
                        XSmall_15: 16.5,
                        XSmall_20: 22,
                        XSmall_25: 27.5,
                        XSmall_30: 33,
                        xs_05: 5.5,
                        xs_15: 16.5,
                        xs_20: 22,
                        xs_25: 27.5,
                        xs_30: 33,
                        'x-small_05': 5.5,
                        'x-small_15': 16.5,
                        'x-small_20': 22,
                        'x-small_25': 27.5,
                        'x-small_30': 33,
                        S_05: 6,
                        S_15: 18,
                        S_20: 24,
                        S_25: 30,
                        S_30: 36,
                        Small_05: 6,
                        Small_15: 18,
                        Small_20: 24,
                        Small_25: 30,
                        Small_30: 36,
                        s_05: 6,
                        s_15: 18,
                        s_20: 24,
                        s_25: 30,
                        s_30: 36,
                        small_05: 6,
                        small_15: 18,
                        small_20: 24,
                        small_25: 30,
                        small_30: 36,
                        N_05: 7,
                        N_15: 21,
                        N_20: 28,
                        N_25: 35,
                        N_30: 42,
                        Normal_05: 7,
                        Normal_15: 21,
                        Normal_20: 28,
                        Normal_25: 35,
                        Normal_30: 42,
                        n_05: 7,
                        n_15: 21,
                        n_20: 28,
                        n_25: 35,
                        n_30: 42,
                        normal_05: 7,
                        normal_15: 21,
                        normal_20: 28,
                        normal_25: 35,
                        normal_30: 42,
                        M_05: 8,
                        M_15: 24,
                        M_20: 32,
                        M_25: 40,
                        M_30: 48,
                        Medium_05: 8,
                        Medium_15: 24,
                        Medium_20: 32,
                        Medium_25: 40,
                        Medium_30: 48,
                        m_05: 8,
                        m_15: 24,
                        m_20: 32,
                        m_25: 40,
                        m_30: 48,
                        medium_05: 8,
                        medium_15: 24,
                        medium_20: 32,
                        medium_25: 40,
                        medium_30: 48,
                        L_05: 9,
                        L_15: 27,
                        L_20: 36,
                        L_25: 45,
                        L_30: 54,
                        Large_05: 9,
                        Large_15: 27,
                        Large_20: 36,
                        Large_25: 45,
                        Large_30: 54,
                        l_05: 9,
                        l_15: 27,
                        l_20: 36,
                        l_25: 45,
                        l_30: 54,
                        large_05: 9,
                        large_15: 27,
                        large_20: 36,
                        large_25: 45,
                        large_30: 54,
                        XL_05: 10,
                        XL_15: 30,
                        XL_20: 40,
                        XL_25: 50,
                        XL_30: 60,
                        XLarge_05: 10,
                        XLarge_15: 30,
                        XLarge_20: 40,
                        XLarge_25: 50,
                        XLarge_30: 60,
                        xl_05: 10,
                        xl_15: 30,
                        xl_20: 40,
                        xl_25: 50,
                        xl_30: 60,
                        'x-large_05': 10,
                        'x-large_15': 30,
                        'x-large_20': 40,
                        'x-large_25': 50,
                        'x-large_30': 60
                    },
                    Weight: {
                        L: 300,
                        Light: 300,
                        l: 300,
                        light: 300,
                        N: 400,
                        Normal: 400,
                        n: 400,
                        normal: 400,
                        M: 500,
                        Medium: 500,
                        m: 500,
                        medium: 500,
                        B: 700,
                        Bold: 700,
                        b: 700,
                        bold: 700,
                        BL: 900,
                        Black: 900,
                        bl: 900,
                        black: 900
                    },
                    Family: {
                        Global: "1.4px / 1 'Roboto', sans-serif"
                    }
                },
                Color: {
                    Dark: '#000',
                    DarkZero: '#000',
                    DarkZero25: 'rgba(0,0,0,0.25)',
                    DarkZero60: 'rgba(0,0,0,0.6)',
                    DarkZero80: 'rgba(0,0,0,0.9)',
                    DarkOne: '#262626',
                    DarkOne30: 'rgba(38,38,38,0.3)',
                    DarkOne60: 'rgba(38,38,38,0.6)',
                    DarkOne80: 'rgba(38,38,38,0.8)',
                    DarkOne90: 'rgba(38,38,38,0.9)',
                    DarkTwo: '#555',
                    DarkThree: '#999',
                    DarkThree30: 'rgba(153,153,153,0.3)',
                    DarkThree60: 'rgba(153,153,153,0.6)',
                    Light: '#fff',
                    LightZero: '#fff',
                    LightZero95: 'rgba(255,255,255,0.95)',
                    LightZero40: 'rgba(255,255,255,0.4)',
                    LightOne: '#f9f9f9',
                    LightTwo: '#dbdbdb',
                    LightTwo80: 'rgba(219,219,219,0.8)',
                    LightThree: '#f2f2f2',
                    Neutral: 'rgba(0,0,0,0)',
                    Secondary: '#f69',
                    SecondaryZero: '#f69',
                    SecondaryOne: '#ed7a7a',
                    SecondaryTwo: '#f69',
                    SecondaryThree: '#97416c',
                    Tertiary: '#555',
                    Ruby: '#930000',
                    Blush: '#FFCCCC',
                    Cherry: '#7B0000',
                    TagBlack: '#000',
                    TagYellow: '#fb0',
                    TagPink: '#f69',
                    TagBlue: '#39f',
                    TagGrey: '#999',
                    TagOrange: '#f96',
                    TagGreen: '#0c6',
                    TagSalmon: '#f66',
                    TagTurquoise: '#2bbebe',
                    TagRosieRed: '#f33',
                    TagLime: '#9c3',
                    TagLavender: '#a375d1',
                    TagNude: '#c99',
                    TagTeal: '#288',
                    TagCandy: '#ff3333',
                    TagRed: '#da0000',
                    TagSunshine: '#ffcc00',
                    StatusOnline: '#33cc33',
                    StatusOffline: '#999999',
                    StateSuccess: '#4bcc1d',
                    StateAlert: '#ffbb00',
                    StateActive: '#2bbebe',
                    Yellow: '#ffcc00',
                    Vanilla: '#ffdb4d',
                    Chocolate: '#441f00',
                    GradientZero: 'linear-gradient(45deg, #2bbebe 0%, #ffe457 50%, #ff6699 100%)',
                    GradientOne: 'linear-gradient(45deg, #97416c 0%, #ff6699 50%, #ffa790 100%)',
                    GradientContentShadow: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3))',
                    JasminRedZero: '#a60000',
                    JasminRedOne: '#c00000',
                    JasminRedTwo: '#da0000',
                    AwardsRank1: '#ffbb00',
                    AwardsRank2: '#dbdbdb',
                    AwardsRank3: '#f98706',
                    LiveText: '#228888',
                    Beauty: '#ff6699',
                    GradientLuluBlueZero: '#687bc4',
                    GradientLuluBlueZero30: 'rgba(104,123,196,0.3)',
                    GradientLuluBlueZero40: 'rgba(104,123,196,0.4)',
                    GradientLuluBlueZero50: 'rgba(104,123,196,0.5)',
                    GradientLuluBlueZero60: 'rgba(104,123,196,0.6)',
                    GradientLuluBlueZero85: 'rgba(104,123,196,0.85)',
                    GradientLuluBlueZero100: 'rgba(104,123,196,1)',
                    GradientLuluBlueOne: '#7bd4c4',
                    GradientLuluBlueOne30: 'rgba(123,212,196,0.3)',
                    GradientLuluBlueOne40: 'rgba(123,212,196,0.4)',
                    GradientLuluBlueOne50: 'rgba(123,212,196,0.5)',
                    GradientLuluBlueOne60: 'rgba(123,212,196,0.6)',
                    GradientLuluBlueOne85: 'rgba(123,212,196,0.85)',
                    GradientLuluBlueOne100: 'rgba(123,212,196,1)',
                    GradientLolitaZero: '#a375d1',
                    GradientLolitaZero30: 'rgba(163,117,209,0.3)',
                    GradientLolitaZero40: 'rgba(163,117,209,0.4)',
                    GradientLolitaZero50: 'rgba(163,117,209,0.5)',
                    GradientLolitaZero60: 'rgba(163,117,209,0.6)',
                    GradientLolitaZero85: 'rgba(163,117,209,0.85)',
                    GradientLolitaZero100: 'rgba(163,117,209,1)',
                    GradientLolitaOne: '#feadae',
                    GradientLolitaOne30: 'rgba(254,173,174,0.3)',
                    GradientLolitaOne40: 'rgba(254,173,174,0.4)',
                    GradientLolitaOne50: 'rgba(254,173,174,0.5)',
                    GradientLolitaOne60: 'rgba(254,173,174,0.6)',
                    GradientLolitaOne85: 'rgba(254,173,174,0.85)',
                    GradientLolitaOne100: 'rgba(254,173,174,1)',
                    GradientUnicornZero: '#2bbebe',
                    GradientUnicornZero30: 'rgba(43,190,190,0.3)',
                    GradientUnicornZero40: 'rgba(43,190,190,0.4)',
                    GradientUnicornZero50: 'rgba(43,190,190,0.5)',
                    GradientUnicornZero60: 'rgba(43,190,190,0.6)',
                    GradientUnicornZero85: 'rgba(43,190,190,0.85)',
                    GradientUnicornZero100: 'rgba(43,190,190,1)',
                    GradientUnicornOne: '#ffe457',
                    GradientUnicornOne30: 'rgba(255,228,87,0.3)',
                    GradientUnicornOne40: 'rgba(255,228,87,0.4)',
                    GradientUnicornOne50: 'rgba(255,228,87,0.5)',
                    GradientUnicornOne60: 'rgba(255,228,87,0.6)',
                    GradientUnicornOne85: 'rgba(255,228,87,0.85)',
                    GradientUnicornOne100: 'rgba(255,228,87,1)',
                    GradientUnicornTwo: '#ff6699',
                    GradientUnicornTwo30: 'rgba(255,102,153,0.3)',
                    GradientUnicornTwo40: 'rgba(255,102,153,0.4)',
                    GradientUnicornTwo50: 'rgba(255,102,153,0.5)',
                    GradientUnicornTwo60: 'rgba(255,102,153,0.6)',
                    GradientUnicornTwo85: 'rgba(255,102,153,0.85)',
                    GradientUnicornTwo100: 'rgba(255,102,153,1)',
                    GradientUnicorn40:
                        'linear-gradient(to right, var(--color-GradientUnicornZero40) 0%, var(--color-GradientUnicornOne40) 50%, var(--color-GradientUnicornTwo40) 100%)',
                    GradientLuluBlue:
                        'linear-gradient(45deg, var(--color-GradientLuluBlueZero) 0%, var(--color-GradientLuluBlueOne) 100%)',
                    GradientLolita:
                        'linear-gradient(45deg, var(--color-GradientLolitaZero) 0%, var(--color-GradientLolitaOne) 100%)',
                    GradientShadowToTop: 'linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.6))',
                    GradientShadowToBottom: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.6))',
                    GradientShadowToTop40: 'linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.4))',
                    GradientShadowToBottom40: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.4))',
                    Anthracite80: 'rgba(34,34,34,0.8)',
                    Anthracite: '#222',
                    Candy: '#ff3333',
                    Chili: '#a60000',
                    GradientCottonCandy: ['#ff3333', '#f56f8f', '#ffd798'],
                    Green: '#85D400',
                    MistyRose: '#ffdbe2',
                    Peach: '#FF9999',
                    Red: '#da0000',
                    Rose: '#c00000',
                    Salmon: '#ed7a7a',
                    Sangria: '#3c0000',
                    Scarlet: '#500000',
                    Silver: '#ccc',
                    Snow: '#fff',
                    Sunshine: '#ffcc00'
                },
                Dim: {
                    ColWidth: 93,
                    SiteWidth: 1366,
                    Gutter: 16,
                    SiteOffset: 16,
                    HeaderHeight: 50,
                    HeaderBorderHeight: 2,
                    LoaderContainerHeight: 'calc(100vh - var(--dim-HeaderHeight) - 5px - var(--dim-FooterHeight))',
                    ModelPageMinHeight: '100vh'
                },
                CssVars: {
                    'transition-duration': '0.25s',
                    'transition-timing': 'ease-out',
                    'transition-timing-ease-in-out-back': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
                },
                Radius: {
                    Small: 2,
                    Normal: 4,
                    Large: 6,
                    Full: '100%',
                    Button: {
                        None: '',
                        Default: 'calc(2 * var(--dim-Gutter))',
                        Full: 'calc(500 * var(--dim-Gutter))'
                    },
                    Input: {
                        None: '',
                        Default: '4.0px',
                        Full: '50px'
                    }
                },
                StatusIndicator: {
                    Online: {
                        backgroundColor: 'green'
                    }
                },
                Icon: {
                    Alert: '\\ea02',
                    ASACP: '\\ea01',
                    Back: '\\ea03',
                    Blog: '\\ea04',
                    CancelType: '\\ea05',
                    Close: '\\ea06',
                    Credits: '\\ea07',
                    ExclusiveLock: '\\ea08',
                    Facebook: '\\ea09',
                    Heart: '\\ea0a',
                    Highlights: '\\ea0b',
                    ICRA: '\\ea0c',
                    Instagram: '\\ea0d',
                    JasminCom: '\\ea0e',
                    Library: '\\ea0f',
                    LocketOpen: '\\ea10',
                    LocketPremium: '\\ea11',
                    Messages: '\\ea12',
                    Microphone: '\\ea13',
                    More: '\\ea14',
                    MyStory: '\\ea15',
                    Next: '\\ea16',
                    Pause: '\\ea17',
                    PauseSolid: '\\ea18',
                    Phone: '\\ea19',
                    Photos: '\\ea1a',
                    Play: '\\ea1b',
                    PlaySolid: '\\ea1c',
                    PlayVideo: '\\ea1d',
                    PositiveSexuality: '\\ea1e',
                    Profile: '\\ea1f',
                    ProfileSolid: '\\ea20',
                    Quote: '\\ea21',
                    Search: '\\ea22',
                    Share: '\\ea23',
                    Shop: '\\ea24',
                    ShopSolid: '\\ea25',
                    Star: '\\ea26',
                    Surprise: '\\ea27',
                    Twitter: '\\ea28',
                    VideoCall: '\\ea29',
                    Videos: '\\ea2a',
                    WWF: '\\ea2b'
                },
                Theme: {
                    ApolloAutocomplete: {
                        InputRadius: 4
                    },
                    Avatar: {
                        TagColor: 'candy',
                        RingGradientExclusive: ['#ffbb00', '#ffbb00'],
                        RingGradientLive: ['#ff3333', '#f56f8f', '#ffd798'],
                        RingGradientNewStory: ['#ff3333', '#ffcc00'],
                        RingGradientSeenStory: ['#ed7a7a', '#ed7a7a'],
                        RingGradientAngle: 45,
                        RingColor: '#930000',
                        PulseColor: '#ff3333',
                        PulseZIndex: 1,
                        RingWidth: 2,
                        DefaultImage:
                            'data:image/jpeg;base64,/9j/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgMDAwMDAwMDAwMBAQEBAQEBAgEBAgICAQICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA//dAAQAyP/uAA5BZG9iZQBkwAAAAAH/wAARCAZABkADABEAAREBAhEB/8QAxAABAAIDAQEBAAAAAAAAAAAAAAUGBAcKAwECAQEAAQQDAQAAAAAAAAAAAAAABQQGBwgCAwkBEAEAAgEBAgoFBwkIAwEAAwAAAQIDBBETBRIhMUFRU2GS0QYicYGRFCMyQlKhojM0YnJzgrGywRVDY3STs8LDJIOjZCU10hEBAAECAgQJCAcGBgICAwEAAAECAwQFERIhUQYUMUFhcZGS0RMiMlOBobHBM0JicoLh8CM0UqKywhUkNWNz8XTSFkMlZIOj/9oADAMAAAERAhEAPwDklasvewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//Q5JWrL3sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/0eSVqy97AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9LklasvewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//T5JWrL3sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/1OSVqy97AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9XklasvewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//W5JWrL3sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/1+SVqy97AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9DklasvewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//R5JWrL3sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/0uSVqy97AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9PklasvewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//U5JWrL3sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/1eSVqy97AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9bklasvewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//X5JWrL3sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/0OSVqy97AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9HklasvewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//S5JWrL3sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/0+SVqy97AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9TklasvewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//V5JWrL3sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/1uSVqy97AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9fklasvewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//Q5JWrL3sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/0eSVqy97AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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\n'
                    },
                    AwardsCard: {
                        Background: 'rgba(123,0,0,0.7)',
                        DetailsBackground: '#a60000',
                        RankBackground: '#c00000',
                        RankShadow: [0, 0, 6, 'rgba(0,0,0,0.2)'],
                        RankColor: '#FFCCCC',
                        RankFontWeight: 500,
                        TitleColor: '#fff'
                    },
                    BadgeTagColor: 'candy',
                    CarouselCard: {
                        LazyBackground: 'rgba(123,0,0,0.7)',
                        CoverBackground: 'rgba(123,0,0,0.7)',
                        BadgeShadow: 'linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.4))',
                        DetailShadow: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.4))',
                        InfluencerName: '#fff',
                        Rewards: '#fff',
                        FavoriteIcon: '#fff',
                        FavoriteSelectedIcon: '#ffcc00',
                        RankColor: '#555',
                        TagColor: 'red',
                        BadgesPadding: 0.625,
                        DetailsPadding: 0.625
                    },
                    CelebrityCard: {
                        Default: {
                            Title: '#fff',
                            LiveSoon: {
                                Color: '#ff3333',
                                FontSizeDesktop: 16,
                                FontSizeMobile: 12
                            },
                            NextLive: {
                                Color: '#fff',
                                FontSize: 12,
                                PadDesktop: [0.5, 0],
                                PadMobile: [0.25, 0]
                            },
                            Description: '#fff'
                        },
                        TwoRows: {
                            Background: 'none',
                            Title: '#fff',
                            Paragraph: '#fff'
                        },
                        Background: 'rgba(123,0,0,0.7)'
                    },
                    CelebrityHighlightCard: {
                        Detail: '#fff',
                        CoverBackground: 'rgba(0,0,0,0.25)',
                        BadgeShadow: 'linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.4))',
                        Exclusive: '#ffcc00',
                        Subscribed: '#fff',
                        CoverDetailsShadow: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.6))',
                        CoverDetailsPadding: 0.625,
                        TitleColor: '#fff',
                        TitleFontSize: 18,
                        SubtitleColor: '#dbdbdb',
                        SubtitleFontSize: 14,
                        TagColor: '#fff'
                    },
                    CommonContentBackground: '#a60000',
                    CommonHeaderBackground: 'linear-gradient(to right, rgba(255,51,51,0.4), rgba(255,204,0,0.4))',
                    CreatorsNameFavorite: {
                        InfluencerNameColor: '#fff',
                        FavoriteIconColorGhost: '#fff',
                        FavoriteIconColorFill: '#ffcc00'
                    },
                    CreatorsStories: {
                        IconColor: '#fff',
                        TagTextColor: '#930000',
                        TitleColor: '#f9f9f9',
                        SubtitleColor: '#FF9999'
                    },
                    CreatorsStoryPlaceholder: {
                        IconColor: '#FF9999',
                        ButtonColor: 'red',
                        ButtonVariant: 'fill',
                        ButtonWeight: 500,
                        ButtonRadius: 4,
                        InfluencerNameColor: '#FF9999',
                        Background: '#7B0000'
                    },
                    CreatorsStoryHighlights: {
                        Color: '#fff',
                        Background: '#a60000',
                        TagColor: '#fff',
                        TagTextTransform: 'uppercase',
                        IconColor: '#FF9999',
                        Premium: '#FF9999',
                        Purchased: '#ffcc00',
                        Price: '#ffcc00',
                        PremiumFontSize: 12,
                        FooterSizeMobile: 12
                    },
                    ExploreMoreCard: {
                        CardBackground: 'linear-gradient(180deg, rgba(60,0,0,0.2), rgba(60,0,0,0.6))',
                        ContentBackground: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.6))',
                        Color: '#fff',
                        FontSize: {
                            Desktop: 16,
                            Mobile: 14
                        }
                    },
                    FAQ: {
                        Color: '#FFCCCC',
                        Border: '#930000',
                        ParagraphHover: '#fff'
                    },
                    FavoriteHeart: {
                        IconColor: '#fff',
                        IconSelectedColor: '#ffcc00'
                    },
                    FloatBanner: {
                        Background: 'rgba(38,38,38,0.8)'
                    },
                    FollowsColor: '#FF9999',
                    HorizontalRule: {
                        Background: 'linear-gradient(45deg, #2bbebe 0%, #ffe457 50%, #ff6699 100%)'
                    },
                    InfluencerActions: {
                        Color: '#fff',
                        ButtonColor: 'red',
                        ButtonHover: '#441f00',
                        WatchNowButtonWidth: 230,
                        WatchNowButtonRadius: 4,
                        WatchNowButtonColor: 'red',
                        WatchNowButtonVariant: 'fill',
                        WatchNowButtonWeight: 500
                    },
                    LiveFeedEnded: {
                        Overlay: 'linear-gradient(var(--color-DarkZero80), var(--color-DarkZero80))',
                        Name: '#fff',
                        Reason: '#dbdbdb',
                        Explanation: '#dbdbdb',
                        Heart: '#fff',
                        Button: {
                            Color: {
                                Primary: 'primary',
                                Secondary: 'secondary'
                            },
                            Radius: 'calc(2 * var(--dim-Gutter))'
                        }
                    },
                    LiveSoonBadge: {
                        Background: 'rgba(38,38,38,0.6)',
                        Shadow: 'linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.6))',
                        Color: '#fff',
                        Padding: 0.625,
                        Separator: '#da0000'
                    },
                    LoaderColor: '#FFCCCC',
                    Markdown: {
                        Viewer: {
                            HorizontalRuleBorder: '#930000',
                            Header: '#fff',
                            Paragraph: '#FFCCCC',
                            List: '#FFCCCC',
                            BlockquoteText: '#FFCCCC',
                            Anchor: '#ffcc00',
                            AnchorHover: '#ffcc00',
                            TableBorder: '#f9f9f9'
                        }
                    },
                    Menu: {
                        OverlayBackground: 'rgba(0,0,0,0.6)',
                        ItemsBackground: '#a60000',
                        BtnTextColor: '#ffdbe2',
                        BtnBackground: '#a60000',
                        PrimaryBtnColor: '#441f00',
                        PrimaryBtnBackground: '#ffcc00'
                    },
                    MyStoryPlaceholder: {
                        InfluencerNameColor: '#FF9999',
                        ButtonColor: 'red',
                        ButtonVariant: 'fill',
                        ButtonRadius: 4,
                        ButtonWeight: 500,
                        IconColor: '#FF9999',
                        Background: '#930000'
                    },
                    NameFavorite: {
                        InfluencerNameColor: '#fff',
                        FavoriteIconColorGhost: '#fff',
                        FavoriteIconColorFill: '#ffcc00'
                    },
                    Toast: {
                        TagState: 'selected',
                        TagColor: 'snow',
                        TagSize: 'x-large',
                        Padding: [0.625, 0.375, 0.625, 0.375],
                        BorderRadius: 4,
                        Background: 'rgba(0,0,0,0.6)'
                    },
                    PlaceholderBackground: '#f9f9f9',
                    PlaceholderTitle: '#fff',
                    PlaceholderSubtitle: '#FFCCCC',
                    PopupOverlay: {},
                    ProfileCard: {
                        LocketOpen: 'var(--color-LightZero)',
                        Unlocked: '#fff',
                        UnlockedBackground: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.6))',
                        Label: '#fff',
                        TagTitle: '#fff',
                        TagSubtitle: '#fff',
                        TagInfluencerName: '#fff',
                        DetailTitle: '#262626',
                        DefaultBackground: 'rgba(123,0,0,0.7)',
                        LockedBackground: 'rgba(60,0,0,0.6)',
                        DetailSubtitle: '#555',
                        CoverBackground: 'linear-gradient(180deg, rgba(60,0,0,0) 0%, rgba(60,0,0,0.4) 100%)',
                        BadgesPadding: 0.625,
                        DetailsPadding: 0.625,
                        allowCardBackground: false,
                        TagColor: 'snow',
                        TitleMarginTop: 0.25,
                        SubtitleMarginTop: 0.25,
                        InfluencerNameMarginTop: 0.25,
                        ForcedTitleFontSize: 18,
                        ForcedSubtitleFontSize: 12
                    },
                    PromotionBanner: {
                        Opacity: 0.8,
                        Height: 240,
                        StrongWeight: 500,
                        ButtonColor: 'red',
                        ButtonVariant: 'fill',
                        ButtonSize: 'normal',
                        ButtonRadius: 4,
                        ButtonWeight: 500,
                        TitleSize: 28,
                        TitleWeight: 900,
                        TitleMargin: [0, 0, 0.5, 0],
                        TitleMobileVersionOneSize: 25,
                        TitleMobileVersionTwoSize: 29,
                        SubTitleMarginDesktop: [0, 0, 2, 0],
                        SubTitleMarginMobile: [0, 0, 1.5, 0],
                        SubTitleSize: 20,
                        SubTitleWeight: 300,
                        SubTitleMobileSize: 18,
                        BlockMarginDesktop: [0, 0, 2, 0],
                        BlockMarginMobile: [0, 0, 2, 0],
                        hasCardValidationLineBreak: true
                    },
                    RibbonBackground: '#ffcc00',
                    RibbonColor: '#441f00',
                    SearchInput: {
                        DropDownBackground: '#930000',
                        DropDownColor: '#fff',
                        DropDownItemBackgroundDefault: 'rgba(0,0,0,0.8)',
                        DropDownItemBackgroundSelected: '#222',
                        DropDownItemColor: '#fff',
                        DropDownItemColorDark: '#FF9999',
                        InputBackground: '#930000',
                        InputBorder: 4,
                        InputColor: 'red',
                        ResetIconColor: '#ed7a7a',
                        SearchIconColor: '#FF9999',
                        DropDownItemFontSize: 14
                    },
                    SectionTitleColor: '#FF9999',
                    SectionTitleTextTransform: 'initial',
                    SectionTitleFontWeight: 500,
                    SectionTitleFontSizeDesktop: 16,
                    SectionTitleFontSizeMobile: 16,
                    SendReaction: {},
                    SendReactionEmojis: {},
                    SendReactionMessage: {},
                    Share: {
                        Text: '#555'
                    },
                    Signature: {},
                    SiteMenu: {
                        Background: '#a60000',
                        Title: '#fff',
                        TagColor: 'sunshine'
                    },
                    StoryHighlight: {
                        Color: '#a60000',
                        CardTitle: '#fff',
                        CoverIconLocked: '#ccc',
                        CoverIconPlay: '#fff',
                        CardContent: '#FFCCCC',
                        CoverBackground: 'rgba(60,0,0,0.6)',
                        Price: '#ffcc00',
                        Premium: '#FF9999',
                        PriceFree: '#FF9999',
                        TagColor: '#fff',
                        TagSize: 10,
                        ContentSizeDesktop: 12,
                        ContentSizeMobile: 12,
                        FooterSizeDesktop: 12,
                        FooterSizeMobile: 12,
                        TitleSizeDesktop: 18,
                        TitleSizeMobile: 18,
                        Background: 'rgba(123,0,0,0.7)'
                    },
                    StoryHighlights: {
                        GridGap: 0.1875
                    },
                    SubscriptionAction: {
                        Red: {
                            PriceTextColor: '#ed7a7a',
                            SecondaryTextColor: '#FFCCCC'
                        },
                        Dark: {
                            PriceTextColor: '#999',
                            SecondaryTextColor: '#999'
                        }
                    },
                    SubscriptionBenefits: {
                        Red: {
                            GridGap: 0.25,
                            ItemBackground: '#930000',
                            IconColor: '#ed7a7a',
                            TagTextColor: '#930000',
                            TitleColor: '#f9f9f9',
                            SubtitleColor: '#FFCCCC'
                        },
                        Dark: {
                            GridGap: 0.5,
                            ItemBackground: 'rgba(0,0,0,0.6)',
                            IconColor: '#999',
                            TagTextColor: '#000',
                            TitleColor: '#fff',
                            SubtitleColor: '#ccc'
                        },
                        Blank: {
                            GridGap: 0.5,
                            ItemBackground: 'none',
                            IconColor: '#fff',
                            TagTextColor: '#930000',
                            TitleColor: '#fff',
                            SubtitleColor: '#FF9999'
                        }
                    },
                    SubscriptionDeficit: {
                        Red: {
                            TitleMargin: [0, 0, 1.25],
                            TitleColor: '#FFCCCC',
                            TitleFontSize: 16,
                            SubtitleMargin: [0, 0, 2.25],
                            SubtitleColor: '#FFCCCC',
                            SubtitleFontSize: 16,
                            GridGap: 1,
                            GridTemplateColumns: '1fr 13fr',
                            ItemIconFontSize: 20,
                            ItemIconColor: '#fb0',
                            ItemTxtFontSize: 14,
                            ItemKeywordColor: '#fff',
                            ItemKeywordFontWeight: 700,
                            ItemRemainingTxtColor: '#FFCCCC'
                        },
                        Dark: {
                            TitleMargin: [0, 0, 1.25],
                            TitleColor: '#ccc',
                            TitleFontSize: 16,
                            SubtitleMargin: [0, 0, 2.25],
                            SubtitleColor: '#ccc',
                            SubtitleFontSize: 16,
                            GridGap: 1,
                            GridTemplateColumns: '1fr 13fr',
                            ItemIconFontSize: 20,
                            ItemIconColor: '#da0000',
                            ItemTxtFontSize: 14,
                            ItemKeywordColor: '#fff',
                            ItemKeywordFontWeight: 700,
                            ItemRemainingTxtColor: '#999'
                        }
                    },
                    SurpriseItem: {
                        GhostBackground: 'rgba(123,0,0,0.7)',
                        SkeletonBackground: 'rgba(123,0,0,0.7)',
                        Color: '#FFCCCC'
                    },
                    SurpriseList: {},
                    Tags: {},
                    Tooltip: {
                        CommonLayout: {
                            BackgroundColor: '#000',
                            TextColor: '#fff',
                            ArrowSize: 10
                        }
                    },
                    TotalClaritySurvey: {
                        Background: '#930000',
                        Title: '#fff',
                        Subtitle: '#FFCCCC',
                        ButtonColor: 'red',
                        ButtonRadius: 4,
                        ButtonFontWeight: 500
                    },
                    UnsubscribeActions: {
                        Red: {
                            BlockPadding: [1.5, 0],
                            MobilePrimaryBtnMargin: [1.5, 0],
                            DesktopPrimaryBtnMargin: [0, 0, 1.5],
                            PrimaryBtnRadius: 4,
                            PrimaryBtnFontWeight: 500,
                            PrimaryBtnTxtTransform: 'uppercase',
                            PrimaryBtnColor: 'red',
                            PrimaryBtnVariant: 'fill',
                            LinkPadding: [1.5, 0],
                            LinkColor: '#ffcc00',
                            LinkFontWeight: 500
                        },
                        Dark: {
                            BlockPadding: [1.5, 0],
                            MobilePrimaryBtnMargin: [1.5, 0],
                            DesktopPrimaryBtnMargin: [0, 0, 1.5],
                            PrimaryBtnRadius: 4,
                            PrimaryBtnFontWeight: 500,
                            PrimaryBtnTxtTransform: 'uppercase',
                            PrimaryBtnColor: 'red',
                            PrimaryBtnVariant: 'fill',
                            LinkPadding: [1.5, 0],
                            LinkColor: '#ffcc00',
                            LinkFontWeight: 500
                        }
                    },
                    PopupLayout: {
                        Modal: {
                            Primary: {
                                Background: '#930000',
                                Title: '#fff',
                                TitleFontSize: 24,
                                CloseIconColorA: '#FF9999',
                                CloseIconColorB: '#fff',
                                Ribbon: false,
                                MinWidth: 585,
                                ContentPadding: [2, 3, 4]
                            },
                            Secondary: {
                                Background: 'rgba(0,0,0,0.6)',
                                Title: '#fff',
                                TitleFontSize: 24,
                                CloseIconColorA: '#999',
                                CloseIconColorB: '#fff',
                                Ribbon: false,
                                MinWidth: 585,
                                ContentPadding: [2, 3, 4]
                            },
                            Tertiary: {
                                Background: '#A60202',
                                Title: '#fff',
                                TitleFontSize: 22,
                                CloseIconColorA: '#FF9999',
                                CloseIconColorB: '#fff',
                                Ribbon: true,
                                MaxWidth: 424,
                                ContentPadding: 2,
                                Width: 424
                            }
                        },
                        Popunder: {
                            Primary: {
                                Background: '#930000',
                                Title: '#fff',
                                CloseIconColorA: '#999',
                                CloseIconColorB: '#555',
                                CloseIcon: {
                                    CloseIconColorA: '#FF9999',
                                    CloseIconColorB: '#fff'
                                }
                            },
                            Secondary: {
                                Background: 'rgba(0,0,0,0.6)',
                                Title: '#fff',
                                CloseIconColorA: '#999',
                                CloseIconColorB: '#fff'
                            }
                        }
                    },
                    SendSurprise: {
                        Primary: {
                            Button: 'red',
                            Text: '#FFCCCC',
                            IconSuccess: '#85D400',
                            IconFail: '#ffcc00',
                            TextNoCredit: '#FF9999',
                            ButtonRadius: 4
                        },
                        Secondary: {
                            Button: 'red',
                            Text: '#fff',
                            IconSuccess: '#33cc33',
                            TextNoCredit: '#ccc',
                            ButtonRadius: 4
                        }
                    },
                    Awards: {
                        Title: '#fff',
                        CountdownTitle: '#FFCCCC',
                        CountdownTitleFontSize: 18,
                        CountdownTitleFontWeight: 500,
                        CountdownExpireDate: '#FF9999',
                        CountdownExpireDateFontSize: 14,
                        CountdownTimer: '#fff',
                        CountdownTimerFontSize: 14,
                        CountdownTitleTextTransform: 'uppercase'
                    },
                    Celebrity: {
                        Background: '#262626',
                        BackgroundMobile: '#000',
                        hasHorizontalRule: false,
                        marginBottom: 3
                    },
                    Creators: {
                        Gradient: 'linear-gradient(180deg, rgba(147,0,0,0) 0%, #930000 100%)'
                    },
                    Favorite: {
                        GridTemplateColumnsDesktop: 4,
                        BadgeShadow: 'linear-gradient(to bottom, rgba(60,0,0,0.4), rgba(60,0,0,0))',
                        BadgeColor: '#fff',
                        BadgeSelectedColor: '#ffcc00',
                        BadgePadding: 0.625,
                        ButtonColor: 'red',
                        ButtonVariant: 'fill',
                        ButtonRadius: 4,
                        ButtonWeight: 500,
                        HeartIconColor: '#FFCCCC',
                        LinkColor: '#ffcc00',
                        DescriptionColor: '#FFCCCC',
                        Background: '#930000',
                        ContainerWrapperPadding: 0,
                        BlockWrapperPadDesktop: [1.25, 1.25, 1.25, 1.25],
                        BlockWrapperPadTablet: [1.25, 0.125, 1.25, 0.125],
                        BlockWrapperPadMobile: [0.375, 0.125, 0.375, 0.125],
                        GridGapDesktop: 0.1875,
                        GridGapTablet: 0.1875,
                        GridGapMobile: 0.1875
                    },
                    Home: {
                        hasBanner: false,
                        PromotionBannerA: {
                            Background:
                                'linear-gradient(45deg, rgba(255, 51, 51, 0.8) 0%, rgba(255, 102, 114, 0.8) 50.86%, rgba(255, 204, 0, 0.8) 100%)',
                            hasTeaser: true
                        },
                        PromotionBannerB: {
                            Background:
                                'linear-gradient(45deg, rgba(255, 51, 51, 0.8) 0%, rgba(255, 102, 114, 0.8) 50.86%, rgba(255, 204, 0, 0.8) 100%)',
                            hasTeaser: true
                        }
                    },
                    NotFound: {
                        invertedGrid: true,
                        WrapperWidth: '100%',
                        ContentWrapperAlign: 'flex-end',
                        Title: '#fff',
                        TitleSize: 180,
                        Subtitle: '#fff',
                        SubtitleSize: 22,
                        UpNote: '#FFCCCC',
                        UpNoteSize: 16,
                        UpNoteMargin: [0, 0, 1.875],
                        Background: 'Red',
                        BackgroundPosition: 'center top',
                        ButtonColor: 'red',
                        ButtonVariant: 'fill',
                        ButtonRadius: 4,
                        ButtonWeight: 500
                    },
                    TotalClarity: {
                        Button: {}
                    },
                    AvatarStatus: {
                        LiveSoon: {
                            Color: '#fff',
                            Overlay: [
                                {
                                    offset: '0%',
                                    color: '#ff3333',
                                    opacity: 0.6
                                },
                                {
                                    offset: '20%',
                                    color: '#f56f8f',
                                    opacity: 0.8
                                },
                                {
                                    offset: '50%',
                                    color: '#ffd798',
                                    opacity: 0.8
                                }
                            ]
                        },
                        NextLive: '#FF9999'
                    },
                    AwardsCarousel: {
                        PlayPauseIcon: '#fff',
                        HeartIcon: '#fff',
                        HeartIconSelected: '#ffcc00',
                        ArrowIcon: '#FF9999',
                        Background: 'rgba(123,0,0,0.7)',
                        IconActionPadding: 1.5
                    },
                    AwardsList: {
                        GridGapDesktop: 0.1875,
                        GridGapSmall: 0.1875,
                        GridGapTablet: 0.1875,
                        GridGapMobile: 0.1875
                    },
                    Banner: {
                        Text: '#fff',
                        ImageBackground: '#dbdbdb'
                    },
                    CelebrityDiscover: {
                        Background: '#262626',
                        LiveSoon: '#2bbebe',
                        Loading: '#f69',
                        TagColor: 'teal',
                        ButtonColor: 'secondary',
                        ButtonSize: 'normal',
                        ButtonRadius: 4,
                        BlockMargin: {
                            Desktop: [0, 'auto', 4],
                            Tablet: [0, 0, 2.5],
                            Mobile: [0, 0, 1.5]
                        },
                        BlockPadding: {
                            Desktop: [1, 0.5],
                            Tablet: [2, 0.5],
                            Mobile: 0
                        }
                    },
                    CelebrityHighlights: {
                        Title: '#ffcc00',
                        InfluencerName: '#fff',
                        Caption: '#FFCCCC',
                        CelebrityCarousel: {},
                        ButtonColor: 'red',
                        ButtonVariant: 'ghost',
                        BlockPadDesktop: [0, 1.25, 0, 1.25],
                        BlockPadTablet: [0, 0.125, 0, 0.125],
                        BlockPadMobile: [0, 0.125, 0, 0.125],
                        BlockMarginDesktop: [0, 'auto', 2],
                        LimitDesktopPlus: 4,
                        LimitDesktopSmall: 4,
                        LimitMobile: 1,
                        CardLayout: 2,
                        GridDesktopGap: 0.1875,
                        GridTabletGap: 0.1875,
                        GridMobileGap: 0.1875,
                        GridDesktopPlus: 'repeat(4, 1fr)',
                        GridDesktopSmall: 'repeat(4, 1fr)',
                        GridMobile: '1fr',
                        ButtonSolidIcons: false
                    },
                    CelebrityNote: {
                        Background:
                            'linear-gradient(45deg, rgba(238, 0, 48, 0.6) 0.01%, rgba(245, 111, 143, 0.6) 57.44%, rgba(255, 215, 152, 0.6) 100%);',
                        Content: '#fff',
                        Quote: '#FF9999',
                        FontWeight: 300,
                        BlockMarginDesktop: [0, 'auto', 1.4375],
                        BlockMarginTablet: [2.5, 0, 1.4375],
                        BlockMarginMobile: [2.5, 0, 1.4375]
                    },
                    CelebrityPageHeader: {
                        CardGradient: 'linear-gradient(180deg, rgba(38,38,38,0) 0%, #262626 100%)',
                        CardBackground: '#262626',
                        TagColor: '#ff3333',
                        LiveAnimationGradient: 'linear-gradient(45deg, #ff3333, #f56f8f, #ffd798)',
                        SignatureMarginBottom: 2,
                        whiteSignature: true
                    },
                    CelebrityStoryHighlights: {
                        TitleColor: '#ccc',
                        TitleFontWeight: 400,
                        GridGapDesktop: 0.1875,
                        GridGapMobile: 0.1875
                    },
                    CreatorsHighlights: {
                        Title: '#FF9999',
                        TitleTextTransform: 'initial',
                        TitleSizeDesktop: 16,
                        TitleFontWeight: 400
                    },
                    ExpertPosts: {
                        CardRatio: '3:4',
                        TitleWrapperDesktopPad: [0, 0, 0.75],
                        TitleWrapperMobilePad: [1, 0, 0.75],
                        BlockMarginDesktop: [0, 'auto', 2],
                        BlockMarginMobile: [0, 0, 2],
                        BlockPadDesktop: [0, 1.25],
                        BlockPadMobile: [0, 0.125],
                        GridGapDesktop: 0.1875,
                        GridGapMobile: 0.1875,
                        GridColumnDesktop: 'repeat(4, 3fr)',
                        GridColumnMobile: 'repeat(2, 6fr)'
                    },
                    ExploreCelebrity: {
                        TitleColor: {
                            dark: '#FFCCCC'
                        },
                        CTAButtonColor: 'red',
                        CTAButtonVariant: 'fill',
                        CTAButtonWeight: 500,
                        CTAButtonBorderRadius: 4,
                        GridGapDesktop: 0.1875,
                        GridGapTablet: 0.1875,
                        GridGapMobile: 0.1875,
                        BlockPadDesktop: [0, 1.25, 0, 1.25],
                        BlockPadTablet: [0, 0.125, 0, 0.125],
                        BlockPadMobile: [0, 0.125, 0, 0.125],
                        BlockMarginDesktop: [0, 'auto', 1.375],
                        BlockMarginTablet: [0, 0, 1.375],
                        BlockMarginMobile: [0, 0, 1.375],
                        whiteSignature: true
                    },
                    ExploreMore: {
                        BlockPadDesktopPlus: [0, 1.25],
                        BlockPadDesktop: [0, 1.25],
                        BlockPadTablet: [0, 0.125],
                        BlockPadMobile: [0, 0.125],
                        TitleWrapperDesktopPad: [0, 0, 0.75],
                        TitleWrapperMobilePad: [1, 0, 0.75],
                        CardRatio: '1:1',
                        CardLayout: 'centered',
                        GridDesktopColumns: 'repeat(10, 1fr)',
                        GridDesktopGap: 0.1875,
                        GridDesktopSmallColumns: 'repeat(5, 1fr)',
                        GridDesktopSmallRows: 'repeat(2, 12fr)',
                        GridDesktopSmallGap: 0.5,
                        GridMobileColumns: 'repeat(2, 1fr)',
                        GridMobileGap: 0.1875
                    },
                    Highlights: {
                        BlockMargin: {
                            Desktop: [0, 'auto', 1.46875],
                            Tablet: [0, 0, 0.9375],
                            Mobile: [0, 0, 0.9375]
                        },
                        BlockPad: {
                            Desktop: [0, 1.25],
                            Tablet: [0, 0.125],
                            Mobile: [0, 0.125]
                        },
                        TitleWrapper: {
                            DesktopPad: [0, 0, 0.75],
                            MobilePad: [1, 0, 0.75]
                        },
                        CardLayout: 'simple',
                        Grid: {
                            Mobile: {
                                Gap: 0.1875,
                                Areas:
                                    '\n                        "big1  big1  big1  big1  big1  big1  big1  big1  big1  big1  big1  big1"\n                        "med1  med1  med1  med1  med1  med1  med2  med2  med2  med2  med2  med2"\n                        "big2  big2  big2  big2  big2  big2  big2  big2  big2  big2  big2  big2"\n                        "med3  med3  med3  med3  med3  med3  med4  med4  med4  med4  med4  med4"\n                        "big3  big3  big3  big3  big3  big3  big3  big3  big3  big3  big3  big3"\n                        "med5  med5  med5  med5  med5  med5  med6  med6  med6  med6  med6  med6"\n                        "big4  big4  big4  big4  big4  big4  big4  big4  big4  big4  big4  big4"\n                        "med7  med7  med7  med7  med7  med7  med8  med8  med8  med8  med8  med8"\n                    ',
                                AreaMap: {
                                    '1': 'big1',
                                    '2': 'med1',
                                    '3': 'med2',
                                    '4': 'big2',
                                    '5': 'med3',
                                    '6': 'med4',
                                    '7': 'big3',
                                    '8': 'med5',
                                    '9': 'med6',
                                    '10': 'big4',
                                    '11': 'med7',
                                    '12': 'med8'
                                }
                            },
                            Tablet: {
                                Gap: 0.1875,
                                Portrait: {
                                    Areas:
                                        '\n                            "big1   big1   big1   big1   big1   big1   big2   big2   big2   big2   big2   big2"\n                            "med1   med1   med1   med1   med2   med2   med2   med2   med3   med3   med3   med3"\n                            "big3   big3   big3   big3   big3   big3   big4   big4   big4   big4   big4   big4"\n                            "med4   med4   med4   med4   med5   med5   med5   med5   med6   med6   med6   med6"\n                        ',
                                    AreaMap: {
                                        '1': 'big1',
                                        '2': 'big2',
                                        '3': 'med1',
                                        '4': 'med2',
                                        '5': 'med3',
                                        '6': 'big3',
                                        '7': 'big4',
                                        '8': 'med4',
                                        '9': 'med5',
                                        '10': 'med6',
                                        '11': 'med9',
                                        '12': 'med10',
                                        '13': 'med11',
                                        '14': 'med12',
                                        '15': 'med13',
                                        '16': 'med14',
                                        '17': 'med15'
                                    }
                                },
                                Landscape: {
                                    Areas:
                                        '\n                            "big1   big1   big1   big1   big2   big2   big2   big2   big3   big3   big3   big3"\n                            "med1   med1   med1   med2   med2   med2   med3   med3   med3   med4   med4   med4"\n                            "big4   big4   big4   big4   big5   big5   big5   big5   big6   big6   big6   big6"\n                            "med5   med5   med5   med6   med6   med6   med7   med7   med7   med8   med8   med8"\n                        ',
                                    AreaMap: {
                                        '1': 'big1',
                                        '2': 'big2',
                                        '3': 'big3',
                                        '4': 'med1',
                                        '5': 'med2',
                                        '6': 'med3',
                                        '7': 'med4',
                                        '8': 'big4',
                                        '9': 'big5',
                                        '10': 'big6',
                                        '11': 'med5',
                                        '12': 'med6',
                                        '13': 'med7',
                                        '14': 'med8',
                                        '15': 'med13',
                                        '16': 'med14',
                                        '17': 'med15'
                                    }
                                }
                            },
                            Desktop: {
                                Gap: 0.1875,
                                Areas:
                                    '\n                        "big1 big1 big1 big1  big2  big2  big2  big2  big3  big3  big3  big3"\n                        "med1 med1 med1 med2  med2  med2  med3  med3  med3  med4  med4  med4"\n                        "big4 big4 big4 big4  big5  big5  big5  big5  big6  big6  big6  big6"\n                        "med5 med5 med5 med6  med6  med6  med7  med7  med7  med8  med8  med8"\n                    ',
                                AreaMap: {
                                    '1': 'big1',
                                    '2': 'big2',
                                    '3': 'big3',
                                    '4': 'med1',
                                    '5': 'med2',
                                    '6': 'med3',
                                    '7': 'med4',
                                    '8': 'big4',
                                    '9': 'big5',
                                    '10': 'big6',
                                    '11': 'med5',
                                    '12': 'med6',
                                    '13': 'med7',
                                    '14': 'med8',
                                    '15': 'med12'
                                }
                            },
                            DesktopPlus: {
                                Areas:
                                    '\n                        "big1 big1 big1 big2 big2 big2 big3  big3  big3  big4  big4  big4"\n                        "med1 med1 med2 med2 med3 med3 med4  med4  med5  med5  med6  med6"\n                        "big5 big5 big5 big6 big6 big6 big7  big7  big7  big8  big8  big8"\n                        "med7 med7 med8 med8 med9 med9 med10 med10 med11 med11 med12 med12"\n                    ',
                                AreaMap: {
                                    '1': 'big1',
                                    '2': 'big2',
                                    '3': 'big3',
                                    '4': 'big4',
                                    '5': 'med1',
                                    '6': 'med2',
                                    '7': 'med3',
                                    '8': 'med4',
                                    '9': 'med5',
                                    '10': 'med6',
                                    '11': 'big5',
                                    '12': 'big6',
                                    '13': 'big7',
                                    '14': 'big8',
                                    '15': 'med7',
                                    '16': 'med8',
                                    '17': 'med9',
                                    '18': 'med10',
                                    '19': 'med11',
                                    '20': 'med12'
                                }
                            }
                        }
                    },
                    InfluencerHeader: {
                        AboutMeTextColor: 'Light',
                        FavoriteIconColorFill: '#ffcc00',
                        FavoriteIconColorGhost: '#fff',
                        InfluencerNameColor: '#fff',
                        BackgroundColor: '#930000'
                    },
                    InfluencerHighlights: {
                        Title: '#FFCCCC',
                        TitleTextTransform: 'uppercase',
                        TitleSizeDesktop: 18,
                        TitleFontWeight: 500,
                        BlockPaddingMobile: [0, 0.125]
                    },
                    InfluencerStories: {
                        GridGapDesktop: 0.1875,
                        StoryPlaceholder: {
                            InfluencerNameColor: '#FF9999',
                            ButtonColor: 'red',
                            ButtonVariant: 'fill',
                            ButtonRadius: 4,
                            ButtonWeight: 500,
                            IconColor: '#FF9999',
                            Background: '#7B0000'
                        }
                    },
                    InfluencerSubscription: {
                        TextFontSize: 12,
                        Red: {
                            Background: 'rgba(123,0,0,0.6)',
                            ContentColor: '#FF9999',
                            IconColor: '#FF9999'
                        },
                        Dark: {
                            Background: 'rgba(0,0,0,0.3)',
                            ContentColor: '#999',
                            IconColor: '#fff'
                        }
                    },
                    MagazinePosts: {
                        Background: '#97416c',
                        Title: '#fff',
                        Subtitle: '#fff'
                    },
                    MemberHeader: {
                        NameText: {
                            Scheme: 'DarkOne',
                            Size: {
                                Desktop: 'normal',
                                Mobile: 'large'
                            }
                        },
                        Description: {
                            Scheme: 'DarkOne',
                            Size: {
                                Desktop: 'large',
                                Mobile: 'normal'
                            }
                        }
                    },
                    MyContent: {
                        Background: '#930000',
                        ButtonColor: 'red',
                        ButtonRadius: 4,
                        ButtonVariant: 'fill',
                        ButtonWeight: 500
                    },
                    MyStoryRecommender: {
                        Loading: '#FFCCCC',
                        WrapperMarginDesktop: [1, 0, 0.875],
                        WrapperMarginTablet: [1, 0, 0.875],
                        WrapperMarginMobile: [1, 0, 0.875],
                        GridGapDesktop: 1.15,
                        GridGapMobile: 1,
                        AvatarSize: 64,
                        LimitDesktop: false,
                        LimitSmall: 16,
                        LimitMedium: false,
                        LimitTablet: 20,
                        FontSize: 12,
                        SeeMore: {
                            coloredBorder: true,
                            Opacity: 1,
                            OpacityHovered: 1,
                            TransformHovered: 'scale(1.09)',
                            Height: ['calc(100% - ', 4, ')'],
                            Width: ['calc(100% - ', 4, ')'],
                            Size: 12,
                            Weight: 700,
                            ShowMore: '#930000',
                            ShowMoreBackground: 'linear-gradient(45deg, #FF3333 0%, #F56F8F 49.05%, #FFD798 100%)',
                            WrapperBackgroundColor: '#930000'
                        }
                    },
                    Newbies: {
                        TitleColor: {
                            dark: '#FFCCCC'
                        },
                        CTAButtonColor: 'red',
                        CTAButtonVariant: 'fill',
                        CTAButtonWeight: 500,
                        CTAButtonBorderRadius: 4,
                        GridGapDesktop: 0.1875,
                        GridGapTablet: 0.1875,
                        GridGapMobile: 0.1875,
                        BlockPadDesktop: [0, 1.25, 0, 1.25],
                        BlockPadTablet: [0, 0.125, 0, 0.125],
                        BlockPadMobile: [0, 0.125, 0, 0.125],
                        BlockMarginDesktop: [0, 'auto', 1.375],
                        BlockMarginTablet: [0, 0, 1.375],
                        BlockMarginMobile: [0, 0, 1.375],
                        whiteSignature: true
                    },
                    PopularPosts: {
                        safariWidthFix: false,
                        displayCategoryInTag: true,
                        BlockPadDesktop: [0, 1.25],
                        BlockPadMobile: [0, 0.125],
                        BlockMarginDesktop: [0, 'auto', 1.5],
                        BlockMarginMobile: [0, 'auto', 2],
                        BlockWidth: '100%',
                        GridGapDesktop: '* 0.1875',
                        GridGapMobile: '* 0.1875',
                        BlockPadTablet: [0, 0.125],
                        BlockMarginTablet: [0, 'auto', 2]
                    },
                    SearchContent: {
                        TextColor: '#FFCCCC',
                        ContentResultPadDesktop: [0, 1.25, 0.5],
                        ContentResultPadTablet: [1, 0.125, 0.5],
                        ContentResultPadMobile: [1, 0.125, 0.5],
                        AwardsResultPadDesktop: [0, 1.25, 0.5],
                        AwardsResultPadTablet: [1, 0.125, 0.25],
                        AwardsResultPadMobile: [1, 0.125, 0.25],
                        SubscriptionsResultPadDesktop: [0, 0.25, 0.5],
                        SubscriptionsResultPadTablet: [0, 0, 0.25],
                        SubscriptionsResultPadMobile: [0, 0, 0.25],
                        GridGapDesktop: 0.25,
                        GridGapMobile: 0.25,
                        FeatureContent: {
                            GridsBlockPaddingTop: {
                                Desktop: 0.25,
                                Mobile: 0.25
                            },
                            CardSize: {
                                Desktop: 'x-small',
                                Mobile: 'x-small'
                            }
                        },
                        TagContentCardSize: 'x-small'
                    },
                    SearchFilters: {
                        Background: '#a60000',
                        TagDefault: false,
                        TagColor: 'red',
                        WrapperPadMobile: [0.5, 0.125],
                        WrapperPadDesktop: [0.5, 1.25],
                        CustomTagColor: '#f99',
                        CustomTagBackground: 'rgba(140,3,2,.85)',
                        CustomTagBackgroundActive: '#cd0403'
                    },
                    TopInfluencers: {
                        BlockMarginDesktop: [0, 'auto', 1.46875],
                        BlockMarginTablet: [0, 0, 0.9375],
                        BlockMarginMobile: [0, 0, 0.9375],
                        BlockPadDesktop: [0, 1.25],
                        BlockPadTablet: [0, 0.125],
                        BlockPadMobile: [0, 0.125],
                        TitleWrapperDesktopPad: [0, 0, 0.75],
                        TitleWrapperMobilePad: [1, 0, 0.75],
                        GridGapDesktop: 0.1875,
                        GridGapTablet: 0.1875,
                        GridGapMobile: 0.1875
                    },
                    TrendingPosts: {
                        displayCategoryInTag: false,
                        TitleWrapperDesktopPad: [0, 1, 1.5],
                        TitleWrapperMobilePad: 1,
                        BlockPadDesktop: 0.5,
                        BlockPadTablet: 0,
                        BlockPadMobile: 0,
                        GridDesktopGap: 0.5,
                        GridTabletGap: 0.25,
                        GridMobileGap: 0.25,
                        GridMobileAreas:
                            '\n    "big1 big1 big1 big1 big1 big1 big2 big2 big2 big2 big2 big2"\n    "small1 small1 small1 small1 small2 small2 small2 small2 small3 small3 small3 small3"\n    "small4 small4 small4 small4 small5 small5 small5 small5 small6 small6 small6 small6"\n    "small7 small7 small7 small7 small8 small8 small8 small8 small9 small9 small9 small9"\n    "small10 small10 small10 small10 small11 small11 small11 small11 small12 small12 small12 small12"\n',
                        GridMobileAreaMap: {
                            '1': 'big1',
                            '2': 'big2',
                            '3': 'small1',
                            '4': 'small2',
                            '5': 'small3',
                            '6': 'small4',
                            '7': 'small5',
                            '8': 'small6',
                            '9': 'small7',
                            '10': 'small8',
                            '11': 'small9',
                            '12': 'small10',
                            '13': 'small11',
                            '14': 'small12'
                        },
                        GridTabletAreas:
                            '\n    "big1 big1 big1 big1 big1 big1 big2 big2 big2 big2 big2 big2"\n    "small1 small1 small1 small1 small2 small2 small2 small2 small3 small3 small3 small3"\n    "small4 small4 small4 small4 small5 small5 small5 small5 small6 small6 small6 small6"\n    "small7 small7 small7 small7 small8 small8 small8 small8 small9 small9 small9 small9"\n    "small10 small10 small10 small10 small11 small11 small11 small11 small12 small12 small12 small12"\n',
                        GridTabletAreaMap: {
                            '1': 'big1',
                            '2': 'big2',
                            '3': 'small1',
                            '4': 'small2',
                            '5': 'small3',
                            '6': 'small4',
                            '7': 'small5',
                            '8': 'small6',
                            '9': 'small7',
                            '10': 'small8',
                            '11': 'small9',
                            '12': 'small10',
                            '13': 'small11',
                            '14': 'small12'
                        },
                        GridDesktopAreas:
                            '\n                            "big1 big1 big1 big1 big2 big2 big2 big2 big3 big3 big3 big3"\n                            "med1 med1 med1 med2 med2 med2 med3 med3 med3 med4 med4 med4"\n                            "med5 med5 med5 med6 med6 med6 med7 med7 med7 med8 med8 med8"\n                            "med9 med9 med9 med10 med10 med10 med11 med11 med11 med12 med12 med12"\n                         ',
                        GridDesktopAreaMap: {
                            '1': 'big1',
                            '2': 'big2',
                            '3': 'big3',
                            '4': 'med1',
                            '5': 'med2',
                            '6': 'med3',
                            '7': 'med4',
                            '8': 'med5',
                            '9': 'med6',
                            '10': 'med7',
                            '11': 'med8',
                            '12': 'med9',
                            '13': 'med10',
                            '14': 'med11',
                            '15': 'med12'
                        },
                        GridDesktopPlusAreas:
                            '\n                            "big1 big1 big1 big2 big2 big2 big3 big3 big3 big4 big4 big4"\n                            "med1 med1 med2 med2 med3 med3 med4 med4 med5 med5 med6 med6"\n                            "med7 med7 med8 med8 med9 med9 med10 med10 med11 med11 med12 med12"\n                        ',
                        GridDesktopPlusAreaMap: {
                            '1': 'big1',
                            '2': 'big2',
                            '3': 'big3',
                            '4': 'big4',
                            '5': 'med1',
                            '6': 'med2',
                            '7': 'med3',
                            '8': 'med4',
                            '9': 'med5',
                            '10': 'med6',
                            '11': 'med7',
                            '12': 'med8',
                            '13': 'med9',
                            '14': 'med10',
                            '15': 'med11',
                            '16': 'med12'
                        }
                    },
                    AuthMenu: {
                        ItemColor: '#fff',
                        ItemHover: '#ffcc00',
                        ButtonColor: 'red',
                        DropDownScheme: 'secondary',
                        ItemPosBottom: -2
                    },
                    AuthButton: {
                        TabletFilled: '#fff',
                        TabletGhost: '#fff',
                        DesktopFilled: 'red',
                        DesktopGhost: 'red',
                        Size: 'x-small',
                        FontSize: 11,
                        FontWeight: 500,
                        Radius: 4,
                        singleAuthBtn: false
                    },
                    MainLayout: {
                        Background: '#930000',
                        BackgroundDark: '#222',
                        isFilledHeader: true,
                        isHeadlessCelebrityPage: true
                    },
                    SiteHeader: {
                        ColorFilled: '#da0000',
                        ColorGhost: 'rgba(0,0,0,0)',
                        LogoFilled: '#fff',
                        LogoGhost: '#fff',
                        HamburgerFilled: 'LightZero',
                        HamburgerGhost: 'LightZero',
                        IconFilled: '#fff',
                        IconGhost: '#fff',
                        IconHover: '#ffcc00',
                        BadgeFilled: '#ffcc00',
                        BadgeGhost: '#fb0',
                        allowHeaderBorder: false,
                        allowFilledMemberButton: false,
                        forceFilledJoinButton: true,
                        LogoDirection: 'center',
                        DropDownTextSize: 14,
                        GridGap: 0,
                        GridDesktopTemplate: '4fr 4fr 4fr',
                        GridMobileTemplate: '4fr 4fr 4fr',
                        GridMainContentHeaderTemplate: '6.6px 11fr 2fr'
                    },
                    SiteFooter: {
                        Primary: {
                            Background: '#7B0000',
                            LinkColorDark: '#FF9999',
                            LinkColorHover: '#fff',
                            LinkColorLightTwo: '#FF9999',
                            LinkColorLightOne: '#FF9999'
                        },
                        Secondary: {
                            Background: 'rgba(0,0,0,0.2)',
                            LinkColorDark: '#ccc',
                            LinkColorHover: '#fff',
                            LinkColorLightTwo: '#ccc',
                            LinkColorLightOne: '#ccc'
                        }
                    },
                    SiteSideMenu: {
                        Background: 'rgba(0,0,0,0.7)',
                        UiBurgerLeft: 0,
                        UiBurgerColorActive: '#FF9999',
                        UiBurgerColorDefault: '#fff'
                    },
                    ChatOverlay: {
                        BackgroundColor: '#a60000',
                        ButtonRadius: 4,
                        ButtonColor: 'red',
                        IconColor: '#441f00',
                        CloseButtonColor: '#fff',
                        TitleColor: '#fff',
                        TitleFontSize: 28,
                        TitleFontWeight: 700,
                        SubTitleColor: '#FF9999',
                        SubTitleFontSize: 20,
                        SubTitleFontWeight: 300
                    },
                    ConsentBanner: {
                        TextColor: '#fff',
                        TextAnchor: '#ffcc00',
                        ButtonColor: 'red',
                        ButtonRadius: 4
                    },
                    Overlay: {
                        Backdrop: 'rgba(38,38,38,0.9)',
                        CloseButtonIconColor: '#555'
                    },
                    DHReactAthenaStoryViewer: {
                        SendReaction: {
                            Message: '#ccc',
                            Layout: {
                                Message: 14
                            }
                        },
                        SendReactionEmojis: {
                            QuickReactions: '#fff',
                            Layout: {
                                QuickReactions: 18,
                                Symbol: 36
                            }
                        },
                        SendReactionMessage: {
                            Input: {
                                Color: 'light',
                                Border: 'rgba(0,0,0,0)',
                                Background: 'rgba(0,0,0,0.25)'
                            },
                            Caret: '#ffcc00',
                            Send: '#fff',
                            Layout: {
                                Send: 16,
                                SendTextTransform: 'capitalize',
                                InputRadius: '0.4px 0px 0px 0.4px',
                                InputRadiusUnfocused: 4
                            },
                            SendButton: {
                                Background: 'rgba(0,0,0,0.25) !important',
                                Radius: '0px 0.4px 0.4px 0px'
                            }
                        },
                        ControlOverlay: {
                            PausedOverlay: {},
                            PlayPause: {
                                Icons: '#fff',
                                Layout: {
                                    Icons: 20
                                }
                            },
                            UnmuteButton: {
                                Background: 'rgba(0, 0, 0, 0.5) !important',
                                HoverBackground: 'rgba(0, 0, 0, 1) !important;'
                            },
                            VideoControls: {
                                Background: 'rgba(249, 249, 249, 0.2)',
                                Progress: '#f7f7f8',
                                Indicator: '#fff',
                                Remaining: '#fff',
                                Layout: {
                                    Remaining: 12
                                }
                            }
                        },
                        StoryViewer: {
                            Author: {},
                            Container: {
                                Background: '#000'
                            },
                            DesktopNavigation: {
                                Hover: 'rgba(0, 0, 0, 0.1) !important'
                            },
                            ErrorPage: {
                                Icon: '#fff',
                                Sorry: '#fff',
                                Explanation: '#fff',
                                Retry: 'primary',
                                Layout: {
                                    Icon: 32,
                                    Retry: {
                                        Size: 'normal',
                                        Radius: 'normal'
                                    }
                                }
                            },
                            LoadingPlaceholder: {},
                            MobileNavigation: {},
                            Player: {},
                            Popups: {},
                            ProgressIndicator: {
                                RegularBackground: 'rgba(255,255,255,0.4)',
                                PremiumBackground: 'rgba(255,204,0,0.4)',
                                RegularIndicator: '#fff',
                                PremiumIndicator: 'yellow'
                            },
                            Reactions: {
                                Tag: 'snow',
                                TagBackground: 'rgba(0,0,0,0.6)',
                                Layout: {
                                    State: 'selected',
                                    Size: 'x-large',
                                    TagPadding: [0.625, 0.375, 0.625, 0.375],
                                    TagRadius: 4
                                }
                            },
                            SendReactionWithContext: {},
                            StoryExpired: {
                                Background: '#000',
                                InfluencerName: '#fff',
                                Explanation: '#fff',
                                MessageMe: 'red',
                                ViewProfile: 'primary',
                                Layout: {
                                    InfluencerName: 18,
                                    Explanation: 16,
                                    MessageMe: {
                                        Size: 'normal',
                                        Variant: 'fill',
                                        Radius: 4
                                    },
                                    ViewProfile: {
                                        Size: 'normal',
                                        Variant: 'ghost',
                                        Radius: 4
                                    }
                                }
                            },
                            Styled: {
                                UiBoxWithShadow: {
                                    Before: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))',
                                    After: 'linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))'
                                },
                                BackIcon: '#fff',
                                NextIcon: '#fff',
                                CloseIcon: '#555',
                                LocketPremiumIcon: '#ccc'
                            },
                            Subscribe: {
                                Background: 'rgba(38,38,38,0.6)',
                                Support: '#fff',
                                Exclusive: '#fb0',
                                SupportMe: 'red',
                                Credits: '#dbdbdb',
                                Layout: {
                                    Support: {
                                        Size: 16,
                                        Weight: 500
                                    },
                                    SupportMe: {
                                        Size: 'normal',
                                        FontSize: 16,
                                        Radius: 4,
                                        Variant: 'fill',
                                        Weight: 500
                                    },
                                    Exclusive: 16,
                                    Credits: 14
                                }
                            },
                            UserInterface: {}
                        }
                    },
                    PaymentOverlay: {
                        IFrameBackground: '#a60000',
                        IFrameCloseButton: '#fff',
                        IFrameCloseButtonHover: '#fff'
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
            skip: true,
            title: 'can complex case 1',
            code: `const Badge = ({ color = Ui.Color.LightZero, padding, type = '', liveText = 'Live', ...props }) => {
    console.log(Badge.toString())
    if (type === Magazine.IMagazinePageAuthorStatus.FreeChat) {
        return (
            <Ui padding={padding} tag={{ state: Ui.Tag.State.SELECTED, color: Ui.Theme.BadgeTagColor }} {...props}>
                {liveText}
            </Ui>
        )
    }

    const statusKeys = Object.keys(Ui.StatusIndicator).map(el => el.toUpperCase())

    if (type.toUpperCase() in statusKeys) {
        return <Ui statusIndicator={Ui.StatusIndicator.Online} />
    }

    if (toIcon[type]) {
        return <Ui color={color} fontSize={16} icon={Ui.Icon[toIcon[type]]} padding={padding} {...props} />
    }

    return null
}`
        }
    ]
})
