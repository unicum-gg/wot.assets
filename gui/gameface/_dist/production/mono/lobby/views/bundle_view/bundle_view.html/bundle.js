import { j as e, m as s, s as a, r as t, p as n, q as r } from '../../../chunks/vendor.js';
import {
    i,
    $ as o,
    a0 as l,
    T as c,
    O as d,
    X as u,
    a1 as _,
    s as m,
    E as p,
    A as b,
    S as h,
    a2 as g,
    k as N,
    p as y,
    C as x,
    B as v,
    z as C,
    y as f,
    D as j,
    a3 as S,
    a4 as E,
    m as w,
    a5 as k,
    a6 as A,
    a7 as M,
    a8 as T,
    a9 as D,
    Y as I,
    P as U,
    U as P,
} from '../../../chunks/lib.js';
import { K as B, a as $ } from '../../../chunks/key_icon.js';
import { S as K } from '../../../chunks/spring_wrapper.js';
import { T as H } from '../../../chunks/text.js';
import { T as V } from '../../../chunks/text.module.js';
import { g as W, a as O, b as G, c as L } from '../../../chunks/utils2.js';
import '../../../chunks/string-utils.js';
const [z, F] = i()(
    ({ observableModel: e }) => ({
        root: e.object(),
        crystalsTooltip: e.object('crystalsTooltip'),
        goldTooltip: e.object('goldTooltip'),
        creditsTooltip: e.object('creditsTooltip'),
        freeExpTooltip: e.object('freeExpTooltip'),
    }),
    o,
);
var X = ((e) => ((e.backport = 'backport'), (e.normal = 'normal'), (e.absent = 'absent'), e))(X || {});
const q = 'Waiting_e239e82e',
    Y = 'Waiting_alertIcon_112f4a33',
    Z = 'Waiting_frame1_758406cd',
    J = 'Waiting_frame2_35a1fe59',
    Q = 'Waiting_frame3_9a056c36',
    ee = () =>
        e.jsxs(e.Fragment, {
            children: [
                e.jsxs('div', {
                    className: q,
                    children: [
                        e.jsx('div', { className: Z, children: '- ' }),
                        e.jsx('div', { className: J, children: '- ' }),
                        e.jsx('div', { className: Q, children: '- ' }),
                    ],
                }),
                e.jsx('div', { className: Y }),
            ],
        }),
    se = {
        root: 'CurrencyItem_root_bce2d0dc',
        base: 'CurrencyItem_efcd159a',
        base__credits: 'CurrencyItem_base__credits_2413fd9a',
        base__gold: 'CurrencyItem_base__gold_670ed669',
        icon: 'CurrencyItem_icon_ec14dc33',
        base__crystal: 'CurrencyItem_base__crystal_bce2d0dc',
        base__freeXP: 'CurrencyItem_base__freeXP_bce2d0dc',
        base__equipCoin: 'CurrencyItem_base__equipCoin_bce2d0dc',
    },
    ae = ({ resId: a, value: t, currencyType: n, isWGMAvailable: r, tooltip: i }) => {
        const o = n === l.gold ? 'gold' : 'integral',
            u =
                ((_ = i.type),
                (m = { currency: n }),
                {
                    isEnabled: _ !== X.absent,
                    args: m,
                    contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                    decoratorId:
                        _ === X.normal ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId') : void 0,
                    ignoreShowDelay: _ === X.backport,
                    ignoreMouseClick: !0,
                });
        var _, m;
        return e.jsx(c, {
            targetId: a,
            ...u,
            children: e.jsxs('div', {
                className: s(se.base, se[`base__${n}`]),
                children: [e.jsx('div', { className: se.icon }), r ? e.jsx(d, { value: t, format: o }) : e.jsx(ee, {})],
            }),
        });
    },
    te = 'MoneyBalanceApp_b4d79333',
    ne = a(({ resId: s }) => {
        const { model: a } = F(),
            { gold: t, crystals: n, credits: r, freeExp: i, isWGMAvailable: o } = a.root.get();
        return e.jsxs('div', {
            className: te,
            children: [
                -1 !== n &&
                    e.jsx(
                        ae,
                        {
                            value: n,
                            currencyType: l.crystal,
                            isWGMAvailable: o,
                            tooltip: a.creditsTooltip.get(),
                            resId: s,
                        },
                        l.crystal,
                    ),
                -1 !== t &&
                    e.jsx(
                        ae,
                        { value: t, currencyType: l.gold, isWGMAvailable: o, tooltip: a.goldTooltip.get(), resId: s },
                        l.gold,
                    ),
                -1 !== r &&
                    e.jsx(
                        ae,
                        {
                            value: r,
                            currencyType: l.credits,
                            isWGMAvailable: o,
                            tooltip: a.creditsTooltip.get(),
                            resId: s,
                        },
                        l.credits,
                    ),
                -1 !== i &&
                    e.jsx(
                        ae,
                        {
                            value: i,
                            currencyType: l.freeXP,
                            isWGMAvailable: o,
                            tooltip: a.freeExpTooltip.get(),
                            resId: s,
                        },
                        l.freeXP,
                    ),
            ],
        });
    }),
    re = ({ resId: s }) => {
        const a = t.useMemo(() => ({ rootId: s }), [s]);
        return e.jsx(z, { options: a, children: e.jsx(ne, { resId: s }) });
    };
var ie = ((e) => ((e.KeyWidget = 'keyWidget'), (e.Decrypt = 'decrypt'), (e.Skip = 'skip'), e))(ie || {});
const oe = { y: -10, opacity: 0 },
    le = R.images.last_stand.gui.maps.icons.bundle.bg,
    ce = (e, s) => {
        const a = le.$dyn(
            ((e) => (e.weight <= u.small.weight ? 'small' : e.name === u.medium.name ? 'medium' : 'large'))(e),
        );
        return a.$dyn(s);
    },
    de = (e) =>
        e.weight <= u.small.weight
            ? { countInRow: 3, cardHeight: 366, gap: 0 }
            : e.name === u.medium.name
              ? { countInRow: 5, cardHeight: 532, gap: 38 }
              : { countInRow: 6, cardHeight: 660, gap: 80 },
    [ue, _e] = i()(
        ({ observableModel: e }) => ({ root: e.object(), bundles: e.array('bundles') }),
        ({ externalModel: e }) => ({
            close: e.createCallbackNoArgs('onClose'),
            purchase: e.createCallback((e, s) => ({ id: e, amount: s }), 'onPurchase'),
        }),
    ),
    me = 'CardHeader_54df506',
    pe = 'CardHeader_header_c816ff1b',
    be = 'CardHeader_subHeader_f67435ab',
    he = R.strings.last_stand_lobby.bundleView.bundle,
    ge = ({ id: a, descrGroupKey: t, priceValue: n, className: r }) => {
        const i = m();
        return e.jsxs('div', {
            className: s(me, r),
            lang: R.strings.settings.LANGUAGE_CODE(),
            children: [
                e.jsx(p, {
                    text: t ? he.header.$dyn(t) : he.header.$dyn(a),
                    isTruncationAvailable: !0,
                    isTooltipEnable: !0,
                    justifyContent: b.Center,
                    classMix: pe,
                }),
                e.jsx(
                    p,
                    {
                        text: t ? he.subHeader.$dyn(t) : he.subHeader.$dyn(a),
                        isTruncationAvailable: !0,
                        isTooltipEnable: !0,
                        justifyContent: b.Center,
                        binding: t ? { eventName: R.strings.last_stand_lobby.bundleView.eventName() } : { cost: n },
                        classMix: be,
                    },
                    `${a}${i.mediaClass}`,
                ),
            ],
        });
    },
    Ne = 'NumericStepper_73259bf3',
    ye = 'NumericStepper_container_6bc73fe',
    xe = 'NumericStepper_base__focus_8dbebc59',
    ve = 'NumericStepper_shadowText_1a5bc160',
    Ce = 'NumericStepper_input_ff6c46c9',
    fe = 'NumericStepper_iconContainer_366380c1',
    je = 'NumericStepper_icon_679ec942',
    Se = 'NumericStepper_buttons_4fd855e8',
    Ee = 'NumericStepper_containerBtn_5efdc725',
    we = 'NumericStepper_containerBtn__disable_52cd57fa',
    ke = 'NumericStepper_iconButtonDown_41231ac1',
    Ae = 'NumericStepper_iconButtonUp_4b539d7e',
    Me = 'NumericStepper_iconButtonDown__disable_8dbebc59',
    Te = 'NumericStepper_iconButtonUp__disable_bd5f8631',
    Re = 'NumericStepper_iconButtonDown__active_8dbebc59',
    De = 'NumericStepper_iconButtonUp__active_430dcd23',
    Ie = 'NumericStepper_iconButtonDown__hover_8dbebc59',
    Ue = 'NumericStepper_iconButtonUp__hover_861d361d';
var Pe = ((e) => (
    (e[(e.ZERO = 48)] = 'ZERO'),
    (e[(e.ONE = 49)] = 'ONE'),
    (e[(e.TWO = 50)] = 'TWO'),
    (e[(e.THREE = 51)] = 'THREE'),
    (e[(e.FOUR = 52)] = 'FOUR'),
    (e[(e.FIVE = 53)] = 'FIVE'),
    (e[(e.SIX = 54)] = 'SIX'),
    (e[(e.SEVEN = 55)] = 'SEVEN'),
    (e[(e.EIGHT = 56)] = 'EIGHT'),
    (e[(e.NINE = 57)] = 'NINE'),
    (e[(e.NUMPAD_0 = 96)] = 'NUMPAD_0'),
    (e[(e.NUMPAD_1 = 97)] = 'NUMPAD_1'),
    (e[(e.NUMPAD_2 = 98)] = 'NUMPAD_2'),
    (e[(e.NUMPAD_3 = 99)] = 'NUMPAD_3'),
    (e[(e.NUMPAD_4 = 100)] = 'NUMPAD_4'),
    (e[(e.NUMPAD_5 = 101)] = 'NUMPAD_5'),
    (e[(e.NUMPAD_6 = 102)] = 'NUMPAD_6'),
    (e[(e.NUMPAD_7 = 103)] = 'NUMPAD_7'),
    (e[(e.NUMPAD_8 = 104)] = 'NUMPAD_8'),
    (e[(e.NUMPAD_9 = 105)] = 'NUMPAD_9'),
    e
))(Pe || {});
const Be = t.memo(function ({
        value: a,
        minimum: n,
        maximum: r,
        stepSize: i = 1,
        isFocused: o = !0,
        isDisabled: l = !1,
        onChange: c = () => null,
        isSmall: d = !1,
        className: u,
    }) {
        const [_, m] = t.useState(a),
            [p, b] = t.useState(o),
            [x, v] = t.useState(!1),
            [C, f] = t.useState(!1),
            [j, S] = t.useState(!1),
            [E, w] = t.useState(!1),
            k = t.useRef(null),
            A = t.useRef(a),
            M = t.useRef(0),
            T = t.useRef(0),
            D = () => {
                (M.current && clearTimeout(M.current),
                    (M.current = 0),
                    T.current && clearTimeout(T.current),
                    (T.current = 0));
            },
            I = (e) => {
                const s = Math.min(r, Math.max(n, e));
                return Math.round(s / i) * i;
            },
            U = (e) => {
                e !== A.current && (m(e), (A.current = e), c(e));
            },
            P = () => {
                l || (k.current && k.current.focus());
            },
            K = A.current >= r || l,
            H = A.current <= n || l,
            V = () => {
                (D(), w(!1), S(!1));
            },
            W = t.useCallback(() => {
                (D(), f(!1), v(!1));
            }, []),
            O = (e, s) => {
                k.current && k.current.setSelectionRange(e, s);
            },
            G = () => {
                const e = Math.min(I(A.current) + i, r);
                U(e);
                const s = e.toString().length;
                O(s, s);
            },
            L = () => {
                const e = Math.max(I(A.current) - i, n);
                U(e);
                const s = e.toString().length;
                O(s, s);
            },
            z = (e = 0) => {
                const s = e === N.BACKSPACE,
                    a = e === N.DELETE;
                if (!k.current) return;
                const t = k.current.selectionStart || 0,
                    n = k.current.selectionEnd || 0;
                let r = k.current.value;
                const i = Math.max(t, n),
                    o = i;
                (a && (r = r.substring(0, i) + r.substring(i + 1, r.length)),
                    s && 1 === t && 1 === r.length && (r = '0'));
                const l = Number(r.trim().replace(/\D/g, '')),
                    c = Number.isSafeInteger(l) ? l : Number.MAX_SAFE_INTEGER,
                    d = c.toString(),
                    u = !isNaN(Number(r.replace(' ', '')));
                k.current.value = d;
                const _ = new RegExp(/\d/g);
                let m = 0;
                for (let p = 0; p < o; p++) {
                    const e = r[p] || '',
                        s = d[m] || '';
                    if (e.match(_) || e === s) {
                        for (; e !== d[m] && m < d.length;) m++;
                        m++;
                    }
                }
                ('' === r ? (m = 1) : u || (m = r.length),
                    k.current && k.current.setSelectionRange(0, 0),
                    O(m, m),
                    U(c),
                    (T.current = setTimeout(() => {
                        const e = I(A.current);
                        e !== A.current && p && (U(e), O(0, e.toString().length));
                    }, 1e3)));
            },
            F = () => {
                l || y.highlight();
            },
            X = () => {
                l || y.click();
            },
            q = (e, s = !1) => {
                K ||
                    (e.persist(),
                    e.preventDefault(),
                    D(),
                    P(),
                    _ < r &&
                        (!s && X(),
                        (0 === e.button || s) &&
                            (G(), (M.current = window.setTimeout(() => q(e, !0), s ? 50 : 300)), v(!0))));
            },
            Y = (e, s = !1) => {
                H ||
                    (e.persist(),
                    e.preventDefault(),
                    D(),
                    P(),
                    _ > n &&
                        (!s && X(),
                        (0 === e.button || s) &&
                            (L(), (M.current = window.setTimeout(() => Y(e, !0), s ? 50 : 300)), f(!0))));
            };
        return (
            t.useEffect(
                () => (
                    document.addEventListener('mouseup', W),
                    () => {
                        (document.removeEventListener('mouseup', W), D());
                    }
                ),
                [W],
            ),
            t.useLayoutEffect(() => {
                if (p) {
                    const e = _.toString().length,
                        s = k.current && k.current.selectionStart,
                        a = k.current && k.current.selectionEnd,
                        t = s === a ? e : s || 0;
                    (k.current && k.current.focus(),
                        0 === s && a === e
                            ? k.current && k.current.setSelectionRange(e, e)
                            : k.current && k.current.setSelectionRange(t, e));
                }
            }, [p, _]),
            e.jsx(h, {
                header: R.strings.last_stand_lobby.bundleView.tooltip.stepper.header(),
                body: R.strings.last_stand_lobby.bundleView.tooltip.stepper.body(),
                children: e.jsx('div', {
                    className: s(Ne, p && xe, u),
                    children: e.jsxs('div', {
                        className: ye,
                        children: [
                            e.jsx('div', { className: ve, children: g(n, r, _) }),
                            e.jsx('input', {
                                ref: k,
                                className: Ce,
                                type: 'text',
                                value: _,
                                disabled: l,
                                onWheel: (e) => {
                                    if (l || !p) return;
                                    e.preventDefault();
                                    e.deltaY < 0 ? L() : G();
                                },
                                onChange: () => {
                                    l || z();
                                },
                                onKeyPress: (e) => {
                                    e.which in Pe || e.preventDefault();
                                },
                                onKeyDown: (e) => {
                                    if (!l)
                                        switch (
                                            (e.keyCode in N &&
                                                e.keyCode !== N.BACKSPACE &&
                                                e.keyCode !== N.DELETE &&
                                                e.preventDefault(),
                                            e.keyCode)
                                        ) {
                                            case N.ARROW_UP:
                                            case N.NUM_PLUS:
                                            case N.PLUS:
                                                (x || v(!0), G());
                                                break;
                                            case N.ARROW_DOWN:
                                            case N.NUM_MINUS:
                                            case N.MINUS:
                                                (C || f(!0), L());
                                                break;
                                            case N.HOME:
                                                U(n);
                                                break;
                                            case N.END:
                                                U(r);
                                                break;
                                            case N.ENTER:
                                                if ((e.nativeEvent.stopImmediatePropagation(), _ >= r)) {
                                                    const e = r.toString().length;
                                                    (U(r), O(0, e));
                                                }
                                                break;
                                            case N.PAGE_UP:
                                                U(r);
                                                break;
                                            case N.PAGE_DOWN:
                                                U(n);
                                                break;
                                            case N.BACKSPACE:
                                            case N.DELETE:
                                                ((e) => {
                                                    const s = e.keyCode === N.BACKSPACE,
                                                        a = e.keyCode === N.DELETE,
                                                        { selectionStart: t, selectionEnd: n, value: r } = e.target,
                                                        i = t !== n,
                                                        o = new RegExp(/\D/),
                                                        l = s && t ? t - 1 : t || 0;
                                                    if (i) return;
                                                    let c = l;
                                                    const d = o.test(r[l]);
                                                    if (a && d) for (; o.test(r[c]) && c < r.length;) c++;
                                                    if (s && d) for (; o.test(r[c]) && c > 0;) c--;
                                                    if (c !== l || (s && d))
                                                        return (e.preventDefault(), (c = c < 0 ? 0 : c), void O(c, c));
                                                    ((s && 1 === t && 1 === r.length) || a) &&
                                                        (e.preventDefault(), z(e.keyCode));
                                                })(e);
                                        }
                                },
                                onKeyUp: (e) => {
                                    if (!l)
                                        switch (e.keyCode) {
                                            case N.ARROW_UP:
                                            case N.NUM_PLUS:
                                            case N.PLUS:
                                                v(!1);
                                                break;
                                            case N.ARROW_DOWN:
                                            case N.NUM_MINUS:
                                            case N.MINUS:
                                                f(!1);
                                        }
                                },
                                onFocus: () => {
                                    l || b(!0);
                                },
                                onBlur: () => {
                                    l || b(!1);
                                },
                            }),
                            e.jsx('div', {
                                className: fe,
                                children: e.jsx(B, {
                                    isTooltipEnable: !0,
                                    size: d ? $.C40x40 : $.C60x60,
                                    className: je,
                                }),
                            }),
                            e.jsxs('div', {
                                className: Se,
                                children: [
                                    e.jsx('div', {
                                        className: s(Ee, K && we),
                                        onClick: P,
                                        onMouseUp: W,
                                        onMouseLeave: V,
                                        onMouseEnter: (e) => {
                                            (S(!0), x && q(e, !0), K || F());
                                        },
                                        onMouseDown: q,
                                        children: e.jsx('div', {
                                            className: s(Ae, K && Te, x && !K && De, j && !K && Ue),
                                        }),
                                    }),
                                    e.jsx('div', {
                                        className: s(Ee, H && we),
                                        onClick: P,
                                        onMouseUp: W,
                                        onMouseLeave: V,
                                        onMouseEnter: (e) => {
                                            (w(!0), C && Y(e, !0), H || F());
                                        },
                                        onMouseDown: Y,
                                        children: e.jsx('div', {
                                            className: s(ke, H && Me, C && !H && Re, E && !H && Ie),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            })
        );
    }),
    $e = 'KeyCard_card_4c78b469',
    Ke = 'KeyCard_buttonContainer_31512688',
    He = 'KeyCard_button_41b967bb',
    Ve = 'KeyCard_keyNumber_5aee8862',
    We = 'KeyCard_key_76829772',
    Oe = 'KeyCard_132eea66',
    Ge = 'KeyCard_icon_70ae5469',
    Le = 'KeyCard_keyContainer_cd2a9302',
    ze = 'KeyCard_numericContainer_7db9cc46',
    Fe = 'KeyCard_currencyContainer_a92dd1fc',
    Xe = 'KeyCard_currencyValue_168f42f9',
    qe = R.strings.last_stand_lobby.bundleView,
    Ye = a(
        ({
            id: a,
            keysInBundle: n,
            maximumBundleCount: r,
            price: i,
            index: o,
            lackOfKeys: l,
            onClick: c,
            className: d,
        }) => {
            const { model: _ } = _e(),
                { breakpoint: p } = m(),
                [b, h] = t.useState(l),
                N = 1 === n,
                y = p.weight <= u.small.weight;
            return e.jsx('div', {
                className: s(Oe, d),
                children: e.jsx(K, {
                    from: oe,
                    delay: 600 + 150 * o,
                    duration: 750,
                    children: e.jsxs('div', {
                        className: $e,
                        children: [
                            e.jsx('div', { className: Ge, style: { backgroundImage: `url(${ce(p, a)})` } }),
                            e.jsx('div', {
                                className: Ke,
                                children: e.jsx(x, {
                                    mixClass: He,
                                    type: v.main,
                                    onClick: () => c(a, N ? b : r),
                                    children: qe.btn.keys(),
                                }),
                            }),
                            N
                                ? e.jsx(Be, {
                                      value: b,
                                      maximum: r,
                                      minimum: 1,
                                      onChange: h,
                                      isSmall: y,
                                      className: ze,
                                  })
                                : e.jsxs('div', {
                                      className: Le,
                                      children: [
                                          e.jsx('div', { className: Ve, children: n }),
                                          e.jsx(B, {
                                              isTooltipEnable: !0,
                                              className: We,
                                              size: y ? $.C28x28 : $.C70x70,
                                          }),
                                      ],
                                  }),
                            e.jsx('div', {
                                className: Fe,
                                children: e.jsx(C, {
                                    type: i.name,
                                    enough: !(i.value * b > _.root.get().goldCount),
                                    size: y ? f.small : f.medium,
                                    reverse: !0,
                                    children: e.jsx('div', {
                                        className: Xe,
                                        children: j(N ? g(1 * i.value, r * i.value, i.value * b) : i.value, 0),
                                    }),
                                }),
                            }),
                            e.jsx(ge, { id: a, priceValue: i.value }),
                        ],
                    }),
                }),
            });
        },
    ),
    Ze = 'ShopCard_card_dca80ca3',
    Je = 'ShopCard_buttonContainer_5f6858b2',
    Qe = 'ShopCard_button_6d095ad9',
    es = 'ShopCard_keyNumber_ee93523f',
    ss = 'ShopCard_key_677af027',
    as = 'ShopCard_1e57f87f',
    ts = 'ShopCard_cardHeader_c0e89f12',
    ns = 'ShopCard_base__small_3a4dd01f',
    rs = 'ShopCard_base__hover_3a4dd01f',
    is = 'ShopCard_cardHeader__hover_d4fdcf5b',
    os = 'ShopCard_icon_ac8989e0',
    ls = 'ShopCard_overlayRewards_fd25c008',
    cs = 'ShopCard_overlayGray_952bc1e5',
    ds = 'ShopCard_mask_f0502a3f',
    us = 'ShopCard_base__first_3a4dd01f',
    _s = 'ShopCard_base__oneRow_3a4dd01f',
    ms = 'ShopCard_keyContainer_8d7ef931',
    ps = 'ShopCard_dividerPlus_ab933d19',
    bs = 'ShopCard_dividerDots_9bfb8b6e',
    hs = 'ShopCard_dot_e62af945',
    gs = 'ShopCard_rewardsList_2d61789b',
    Ns = 'ShopCard_rewardsListTail_9038cf68',
    ys = 'ShopCard_reward_188af144',
    xs = R.strings.last_stand_lobby.bundleView,
    vs = { tension: 220, friction: 16 },
    Cs = ({ id: a, descrGroupKey: i, keysInBundle: o, index: l, bonuses: c, price: d, onClick: p, className: b }) => {
        const [h, g] = t.useState(!1),
            [N, v] = t.useState(!1),
            { breakpoint: C } = m(),
            f = C.weight <= u.small.weight,
            j = ((e, s) =>
                e.length % s == 1
                    ? { bonusesHead: [..._(e, 0, e.length - 3)], bonusesTail: [..._(e, e.length - 2)] }
                    : { bonusesHead: e, bonusesTail: void 0 })(c, de(C).countInRow),
            {
                rows: T,
                oneColumnHeight: R,
                allColumnHeight: D,
                oneColumnRatio: I,
                allColumnRatio: U,
            } = ((e, s, a) => {
                const { countInRow: t, cardHeight: n, gap: r } = de(s),
                    i = Math.ceil(e / t),
                    o = 224 * a,
                    l = (60 * i + 70 + 56) * a;
                return {
                    rows: i,
                    oneColumnHeight: o,
                    allColumnHeight: l,
                    oneColumnRatio: (o + r) / n / a,
                    allColumnRatio: (l + r) / n / a,
                };
            })(c.length, C, S()),
            P = 1 === T,
            H = E(),
            [V, L] = n(() => ({ y: 0 })),
            [z, F] = n(() => ({ transform: 'scale(1, 0)' }));
        return (
            t.useEffect(() => {
                f && N && !P
                    ? (F.start({
                          from: h ? { transform: `scale(1, ${I})` } : { transform: `scale(1, ${U})` },
                          to: h ? { transform: `scale(1, ${U})` } : { transform: `scale(1, ${I})` },
                          immediate: H,
                          config: vs,
                      }),
                      L.start({
                          from: h ? { y: -R } : { y: -D },
                          to: h ? { y: -D } : { y: -R },
                          immediate: H,
                          config: vs,
                      }))
                    : (F.set({ transform: `scale(1, ${U})` }), L.set({ y: -D }));
            }, [L, F, H, h, f, D, R, I, U, N, P]),
            e.jsx('div', {
                className: s(as, f && ns, H && us, h && !P && rs, P && _s, b),
                onMouseEnter: () => {
                    N && f && (g(!0), y.highlight());
                },
                onMouseLeave: () => {
                    N && f && g(!1);
                },
                children: e.jsx(K, {
                    from: oe,
                    delay: 600 + 150 * l,
                    duration: 750,
                    isCanceled: N,
                    onRest: () => v(!0),
                    children: e.jsxs('div', {
                        className: Ze,
                        children: [
                            e.jsx('div', { className: os, style: { backgroundImage: `url(${ce(C, a)})` } }),
                            e.jsx(r.div, { style: z, className: cs }, `${a}_${l}_gray`),
                            e.jsxs('div', {
                                className: bs,
                                children: [
                                    e.jsx('span', { className: hs }),
                                    e.jsx('span', { className: hs }),
                                    e.jsx('span', { className: hs }),
                                ],
                            }),
                            e.jsx('div', {
                                className: ds,
                                children: e.jsxs(
                                    r.div,
                                    {
                                        style: V,
                                        className: ls,
                                        children: [
                                            e.jsxs('div', {
                                                className: ms,
                                                children: [
                                                    e.jsx('div', { className: es, children: o }),
                                                    e.jsx(B, {
                                                        isTooltipEnable: !0,
                                                        className: ss,
                                                        size: f ? $.C28x28 : $.C70x70,
                                                    }),
                                                ],
                                            }),
                                            e.jsx('div', { className: ps }),
                                            e.jsx('div', {
                                                className: gs,
                                                children: w(j.bonusesHead, (s, a) =>
                                                    e.jsx(
                                                        k,
                                                        {
                                                            name: s.name,
                                                            value: W(s),
                                                            special: s.overlayType,
                                                            image: O(s, A.Small),
                                                            valueType: M(s.name),
                                                            tooltipArgs: G(s),
                                                            size: A.Small,
                                                            className: ys,
                                                        },
                                                        `bonusesHead${s.name}${a}`,
                                                    ),
                                                ),
                                            }),
                                            j.bonusesTail &&
                                                e.jsx('div', {
                                                    className: Ns,
                                                    children: j.bonusesTail.map((s, a) =>
                                                        e.jsx(
                                                            k,
                                                            {
                                                                name: s.name,
                                                                value: W(s),
                                                                special: s.overlayType,
                                                                image: O(s, A.Small),
                                                                valueType: M(s.name),
                                                                tooltipArgs: G(s),
                                                                size: A.Small,
                                                                className: ys,
                                                            },
                                                            `bonusesTail${s.name}${a}`,
                                                        ),
                                                    ),
                                                }),
                                        ],
                                    },
                                    `${a}_${l}`,
                                ),
                            }),
                            e.jsx('div', {
                                className: Je,
                                children: e.jsx(x, { mixClass: Qe, onClick: () => p(a, 1), children: xs.btn.shop() }),
                            }),
                            e.jsx(ge, { id: a, descrGroupKey: i, priceValue: d.value, className: s(ts, T >= 3 && is) }),
                        ],
                    }),
                }),
            })
        );
    },
    fs = 'BundleViewApp_26940d35',
    js = 'BundleViewApp_topRight_62308a7f',
    Ss = 'BundleViewApp_closeButton_1651f276',
    Es = 'BundleViewApp_title_90db89b0',
    ws = 'BundleViewApp_keyIcon_99e9919d',
    ks = 'BundleViewApp_slide_2c622189',
    As = 'BundleViewApp_shadow_6a5cf73a',
    Ms = 'BundleViewApp_slideText_ea75459d',
    Ts = 'BundleViewApp_cards_5fab908f',
    Rs = 'BundleViewApp_topContainer_5d195faf',
    Ds = R.strings.last_stand_lobby.bundleView,
    Is = (e, s, a) => (s !== ie.KeyWidget && Boolean(a) ? Ds.$plural('subTitle', a) : Ds.title.$dyn(e)),
    Us = a(() => {
        const { model: s, controls: a } = _e(),
            { lackOfKeys: t, windowType: n, titleState: r, slide: i } = s.root.get();
        T(a.close);
        const o = D(
            { value: B.sizes.C60x60 },
            {
                medium: { value: B.sizes.C70x70 },
                large: { value: B.sizes.C86x86 },
                extraLarge: { value: B.sizes.C110x110 },
            },
        );
        return e.jsxs('div', {
            className: fs,
            children: [
                e.jsx(K, {
                    from: oe,
                    delay: 300,
                    duration: 750,
                    className: Rs,
                    children: e.jsx(H, {
                        text: Is(r, n, t),
                        type: V.MetaHeading,
                        className: Es,
                        alignContent: b.Center,
                        justifyContent: b.Center,
                        shadow: !0,
                        binding: {
                            key: e.jsxs(e.Fragment, {
                                children: [e.jsx('div', { children: t }), e.jsx(B, { className: ws, size: o.value })],
                            }),
                            slide: e.jsxs('div', {
                                className: ks,
                                lang: R.strings.settings.LANGUAGE_CODE(),
                                children: [
                                    e.jsx('div', { className: Ms, children: L(i) }),
                                    e.jsx('div', { className: As }),
                                ],
                            }),
                        },
                    }),
                }),
                e.jsx('div', {
                    className: Ts,
                    children: w(s.bundles.get(), (s, n) =>
                        e.jsx(
                            'div',
                            {
                                children: s.isShopBundle
                                    ? 0 !== s.maximumBundleCount && e.jsx(Cs, { ...s, onClick: a.purchase, index: n })
                                    : 0 !== s.maximumBundleCount &&
                                      e.jsx(Ye, { ...s, lackOfKeys: t, onClick: a.purchase, index: n }),
                            },
                            `cards${n}`,
                        ),
                    ),
                }),
                e.jsxs('div', {
                    className: js,
                    children: [
                        e.jsx(re, { resId: R.aliases.last_stand.shared.MoneyBalance('resId') }),
                        e.jsx(I, {
                            classNames: { base: Ss },
                            caption: R.strings.last_stand_lobby.common.close(),
                            type: 'close',
                            side: 'right',
                            onClick: a.close,
                        }),
                    ],
                }),
            ],
        });
    });
U(e.jsx(ue, { children: e.jsx(P, { children: e.jsx(Us, {}) }) }));
