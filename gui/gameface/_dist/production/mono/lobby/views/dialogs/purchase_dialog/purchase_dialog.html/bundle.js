import {
    S as e,
    j as s,
    J as a,
    I as n,
    Q as t,
    r,
    P as i,
    f as c,
    F as o,
    O as l,
} from '../../../../chunks/vendor.js';
import {
    i as d,
    cU as u,
    aB as m,
    dl as _,
    aI as h,
    ch as p,
    dj as v,
    an as x,
    dm as b,
    f as y,
    o as f,
    dI as g,
    dJ as C,
    b9 as j,
    dK as N,
    Z as P,
    ax as w,
    D as I,
    av as H,
    $ as T,
    aw as S,
    B as A,
    aQ as V,
    cd as k,
    a7 as E,
    cf as W,
    cR as M,
    cg as D,
    dw as z,
    n as O,
    d2 as B,
    cP as U,
    cn as $,
} from '../../../../chunks/lib.js';
import { p as L, C as F } from '../../../../chunks/close_button.js';
import { a as Q, Q as q } from '../../../../chunks/quoted_locale.js';
import { g as G } from '../../../../chunks/get_comp7_reward.js';
import { g as K } from '../../../../chunks/get_button_size.js';
import { V as J, a as X } from '../../../../chunks/vehicle_name.js';
/* empty css                        */ var Z = ((e) => (
    (e[(e.Confirmation = 0)] = 'Confirmation'),
    (e[(e.FlyBy = 1)] = 'FlyBy'),
    (e[(e.Congratulation = 2)] = 'Congratulation'),
    (e[(e.Error = 3)] = 'Error'),
    e
))(Z || {});
const Y = [Q.Vehicle, Q.Style3d],
    ee = [Z.Confirmation, Z.Congratulation],
    [se, ae] = d()(
        ({ observableModel: s }) => {
            const a = { root: s.object(), product: s.array('product') },
                n = e(
                    () => {
                        const e = m(a.product.get(), 0);
                        if (!e) throw new Error('product with index 0 is not found');
                        return e;
                    },
                    { equals: u },
                ),
                t = e(() => n().price.discountValue > 0),
                r = e(() => Y.includes(n().type) && ee.includes(a.root.get().pageState)),
                i = e(() => n().type === Q.Reward && a.root.get().pageState !== Z.Error),
                c = e(() => (n().type === Q.Reward && a.root.get().pageState === Z.Congratulation ? 1300 : 300));
            return {
                ...a,
                computes: {
                    product: n,
                    hasDiscount: t,
                    hasAnimatedReward: i,
                    pageStateTransitionDelay: c,
                    isCameraRotationAvailable: r,
                },
            };
        },
        ({ externalModel: e }) => ({
            close: e.createCallbackNoArgs('onClose'),
            confirm: e.createCallbackNoArgs('onConfirm'),
            mouseOver3dScene: e.createCallback(({ isOver3dScene: e }) => ({ isOver3dScene: e }), 'onMouseOver3dScene'),
            moveSpace: e.createCallback(({ dx: e, dy: s, dz: a }) => ({ dx: e, dy: s, dz: a }), 'onMoveSpace'),
        }),
    ),
    ne = 'Highlight_bae8c620',
    te = 'Highlight_rays_a61afd52',
    re = 'Highlight_4b27c1b2',
    ie = ({ className: e }) =>
        s.jsxs('div', {
            className: a(ne, e),
            children: [
                s.jsx('div', { className: te }),
                s.jsx(_, {
                    className: a(re),
                    src: String(R.videos.comp7.$dyn('godRaysNew_1600x1600')),
                    autoplay: !0,
                    loop: !0,
                }),
            ],
        }),
    ce = 'AnimatedReward_6648a57c',
    oe = 'AnimatedReward_highlight_df228c89',
    le = 'AnimatedReward_highlight__visible_d238da74',
    de = 'AnimatedReward_reward_57bfc05b',
    ue = 'AnimatedReward_reward__success_7efcba6',
    me = { from: { opacity: 0 }, to: { opacity: 1 }, delay: 300, config: { duration: 300 } },
    _e = n(({ className: e }) => {
        const { model: n } = ae(),
            { pageState: c } = n.root.get(),
            o = n.computes.product();
        if (o.type !== Q.Reward) throw new Error('unexpected usage of AnimatedReward component');
        const { mediaSize: l } = h(),
            d = l >= p.Medium ? v.S600x450 : v.S400x300,
            u = t(me),
            m = c === Z.Congratulation;
        return (
            r.useEffect(() => {
                c === Z.Congratulation && x.sound(R.sounds.comp_7_shop_purchase_module());
            }, [c, o.type]),
            s.jsxs(i.div, {
                style: u,
                className: a(ce, e),
                children: [
                    s.jsx(ie, { className: a(oe, m && le) }),
                    s.jsx(b, { className: a(de, m && ue), ...G({ reward: o.reward, size: d }) }),
                ],
            })
        );
    }),
    [he, pe] = d('WalletModel')(
        ({ observableModel: e }) => {
            const s = { currencies: e.dict('currencies') };
            return {
                ...s,
                list: y.shallow((e) =>
                    Array.from(s.currencies.keys.values()).sort((s, a) => {
                        const n = e.indexOf(s),
                            t = e.indexOf(a),
                            r = e.length;
                        return (-1 === n ? r : n) - (-1 === t ? r : t);
                    }),
                ),
            };
        },
        ({ externalModel: e }) => ({ currencyAction: e.createCallback((e) => ({ type: e }), 'onCurrencyAction') }),
    ),
    ve = {
        base: 'Hint_e53dd99e',
        discountBackground: 'Hint_discountBackground_1de34646',
        discount: 'Hint_discount_94b7b9ff',
        onlyDiscount: 'Hint_onlyDiscount_8b648a0a',
        discountWithHintText: 'Hint_discountWithHintText_381cf018',
        onlyHintText: 'Hint_onlyHintText_751386e1',
        discountValue: 'Hint_discountValue_b1f389fc',
        discountHintTitle: 'Hint_discountHintTitle_939c55ad',
        hintText: 'Hint_hintText_6f3fa83f',
        hintTitle: 'Hint_hintTitle_135a3ed',
        discountValue__withHint: 'Hint_discountValue__withHint_e7bbe38f',
    };
function xe({ classNames: e }) {
    const a = f.resolve('strings');
    return s.jsxs('div', {
        className: c(ve.onlyDiscount, null == e ? void 0 : e.onlyDiscount),
        children: [
            s.jsx('div', { className: c(ve.discountBackground, null == e ? void 0 : e.discountBackground) }),
            s.jsx(g.Root, {
                children: s.jsx(g.Value, {
                    value: a.readOrEmpty('common.common.percent'),
                    classNames: {
                        valueContainer: c(ve.discount, null == e ? void 0 : e.discount),
                        value: c(ve.discountValue, null == e ? void 0 : e.discountValue),
                    },
                }),
            }),
        ],
    });
}
function be({ type: e, classNames: a }) {
    const n = f.resolve('intl'),
        t = f.resolve('strings');
    return s.jsx('div', {
        className: c(
            ve.hintText,
            ve.onlyHintText,
            null == a ? void 0 : a.hintText,
            null == a ? void 0 : a.onlyHintText,
        ),
        children: s.jsx(C, {
            classNames: null == a ? void 0 : a.textGradient,
            children: s.jsx('div', {
                className: c(ve.hintTitle, null == a ? void 0 : a.hintTitle),
                children: n.toUpperCase(t.readOrEmpty(`menu.headerButtons.btnLabel.${e}`)),
            }),
        }),
    });
}
function ye({ classNames: e, type: a }) {
    const n = f.resolve('intl'),
        t = f.resolve('strings');
    return s.jsxs('div', {
        className: c(ve.discountWithHintText, null == e ? void 0 : e.discountWithHintText),
        children: [
            s.jsx('div', { className: c(ve.discountBackground, null == e ? void 0 : e.discountBackground) }),
            s.jsx('div', {
                className: c(ve.discountHintTitle, null == e ? void 0 : e.discountHintTitle),
                children: n.toUpperCase(t.readOrEmpty(`menu.headerButtons.btnLabel.${a}`)),
            }),
            s.jsx(g.Root, {
                children: s.jsx(g.Value, {
                    value: t.readOrEmpty('common.common.percent'),
                    classNames: {
                        valueContainer: c(ve.discount, null == e ? void 0 : e.discount),
                        value: c(ve.discountValue, ve.discountValue__withHint, null == e ? void 0 : e.discountValue),
                    },
                }),
            }),
        ],
    });
}
function fe({ classNames: e, type: a }) {
    return s.jsxs('div', {
        className: c(ve.base, null == e ? void 0 : e.base),
        children: [
            s.jsx(xe, {
                classNames: {
                    onlyDiscount: null == e ? void 0 : e.onlyDiscount,
                    discountBackground: null == e ? void 0 : e.discountBackground,
                    discount: null == e ? void 0 : e.discount,
                    discountValue: null == e ? void 0 : e.discountValue,
                },
            }),
            s.jsx(be, {
                type: a,
                classNames: {
                    hintText: null == e ? void 0 : e.hintText,
                    textGradient: null == e ? void 0 : e.textGradient,
                    onlyHintText: null == e ? void 0 : e.onlyHintText,
                },
            }),
            s.jsx(ye, { classNames: e, type: a }),
        ],
    });
}
const ge = {
        base: 'Currency_92022680',
        hintWrapper: 'Currency_hintWrapper_530465b9',
        base__interactive: 'Currency_base__interactive_52396ddd',
        currencyWrapper: 'Currency_currencyWrapper_b13579ba',
        currencyIcon: 'Currency_currencyIcon_346f8c78',
        value: 'Currency_value_b1cf6531',
        value__unavailable: 'Currency_value__unavailable_3a328d4',
        dash: 'Currency_dash_2806b61e',
        formattedValue: 'Currency_formattedValue_b7cad7e0',
        hint: 'Currency_hint_f9d16bb2',
        text: 'Currency_text_2c4f0a4',
        text__overlay: 'Currency_text__overlay_64b93131',
        discountWithHintText: 'Currency_discountWithHintText_95e3324b',
        base__discount: 'Currency_base__discount_271064ec',
        onlyHintText: 'Currency_onlyHintText_61ecd7b0',
        onlyDiscount: 'Currency_onlyDiscount_61ecd7b0',
    },
    Ce = 1e6,
    je = 1e5;
function Ne({ wgMoneyAvailable: e, value: a, type: n, classNames: t }) {
    const i = r.useRef(null),
        o = f.resolve('intl'),
        l = f.resolve('strings'),
        d = j(
            {
                displayValue: () =>
                    a >= Ce ? { abbreviated: !0, value: N(a, je) / Ce } : { abbreviated: !1, value: a },
            },
            {
                medium: {
                    displayValue: () =>
                        a >= 1e7 ? { abbreviated: !0, value: N(a, je) / Ce } : { abbreviated: !1, value: a },
                },
                large: {
                    displayValue: () =>
                        a >= 1e8 ? { abbreviated: !0, value: N(a, je) / Ce } : { value: a, abbreviated: !1 },
                },
            },
        );
    if (!1 === e)
        return s.jsxs('div', {
            className: c(ge.value, ge.value__unavailable, null == t ? void 0 : t.value),
            children: [
                s.jsx('div', { className: ge.dash, children: l.readOrEmpty('common.common.semi_dash') }),
                s.jsx('div', { className: ge.dash, children: l.readOrEmpty('common.common.semi_dash') }),
            ],
        });
    const u = d.displayValue();
    return s.jsx('div', {
        ref: i,
        className: c(ge.value, null == t ? void 0 : t.base),
        children: u.abbreviated
            ? s.jsx(P, {
                  path: 'menu.hangar_header.million',
                  params: { value: u.value },
                  brackets: { start: '%(', end: ')s' },
                  className: c(ge.formattedValue, null == t ? void 0 : t.formattedValue),
              })
            : o.formatNumber(n === w.gold ? 'gold' : 'integral', u.value),
    });
}
const Pe = o(function ({ currency: e, type: a, className: n, classNames: t }) {
        var i, o, l, d, u;
        const { controls: m } = pe(),
            _ = I(),
            h = 'AVAILABLE' === e.status,
            p = (function (e, s, a, n) {
                const t = f.resolve('strings'),
                    i = A({
                        header: t.readOrEmpty(`tooltips.header.buttons.${e}.header`),
                        body: t.readOrEmpty(`tooltips.header.buttons.${e}.body`),
                    }),
                    c = r.useMemo(() => ({ disabled: 'string' != typeof a || '' === a }), [a]),
                    o = V(
                        a,
                        r.useMemo(() => [n], [n]),
                        c,
                    );
                return !1 === s ? i : o;
            })(a, h, e.tooltipType, e.value),
            v = j({ size: H.extraSmall }, { large: { size: H.small }, extraLarge: { size: H.medium } }),
            x = T(v.size, H.small);
        return s.jsxs('div', {
            ...p,
            className: c(
                ge.base,
                h ? ge.base__interactive : ge.base__nonInteractive,
                e.discount > 0 && ge.base__discount,
                n,
            ),
            onMouseEnter: function (e) {
                (_.play('mouse-enter', { target: 'WalletCurrency', original: e }), p.onMouseEnter(e));
            },
            onClick: function (e) {
                (null == p || p.onClick(),
                    h && (_.play('click', { target: 'WalletCurrency', original: e }), m.currencyAction(a)));
            },
            children: [
                s.jsx('div', {
                    className: c(ge.currencyWrapper, null == t ? void 0 : t.currencyWrapper),
                    children: s.jsx(S, {
                        reverse: !0,
                        classNames: {
                            ...(null == t ? void 0 : t.currency),
                            icon: c(ge.currencyIcon, null == (i = null == t ? void 0 : t.currency) ? void 0 : i.icon),
                        },
                        type: a,
                        size: x,
                        'data-test-id': a,
                        children: s.jsx(Ne, {
                            wgMoneyAvailable: h,
                            value: e.value,
                            type: a,
                            classNames: null == t ? void 0 : t.currencyValue,
                        }),
                    }),
                }),
                h &&
                    s.jsx('div', {
                        className: c(ge.hintWrapper, null == t ? void 0 : t.hintWrapper),
                        children: s.jsx(fe, {
                            type: a,
                            classNames: {
                                ...(null == t ? void 0 : t.hint),
                                discountWithHintText: c(
                                    ge.discountWithHintText,
                                    null == (o = null == t ? void 0 : t.hint) ? void 0 : o.discountWithHintText,
                                ),
                                onlyDiscount: c(
                                    ge.onlyDiscount,
                                    null == (l = null == t ? void 0 : t.hint) ? void 0 : l.onlyDiscount,
                                ),
                                onlyHintText: c(
                                    ge.onlyHintText,
                                    null == (d = null == t ? void 0 : t.hint) ? void 0 : d.onlyHintText,
                                ),
                                base: c(ge.hint, null == (u = null == t ? void 0 : t.hint) ? void 0 : u.base),
                                textGradient: { text: ge.text, textOverlay: c(ge.text, ge.text__overlay) },
                            },
                        }),
                    }),
            ],
        });
    }),
    we = o(function (e) {
        const a = pe().model.currencies.get(e.type);
        return a
            ? s.jsx(Pe, { ...e, currency: a })
            : (console.error(`Currency with type ${e.type} is not defined`), null);
    }),
    Ie = 'Wallet_fc600169',
    He = [w.crystal, w.gold, w.credits],
    Re = o(function ({ className: e, classNames: a, currenciesOrder: n = He }) {
        const { model: t } = pe(),
            r = t.list(n);
        return s.jsx('div', {
            'data-name': 'Wallet',
            className: c(Ie, e),
            children: r.map((e) => s.jsx(we, { type: e, classNames: a }, e)),
        });
    }),
    Te = r.memo(({ className: e, classNames: a, currenciesOrder: n, ...t }) =>
        s.jsx(he, { ...t, children: s.jsx(Re, { className: e, classNames: a, currenciesOrder: n }) }),
    ),
    Se = 'CurrentBalance_c7674c4d',
    Ae = f.resolve('aliases'),
    Ve = n(({ className: e }) => {
        const n = r.useMemo(() => ({ rootId: Ae.read((e) => e.lobby_header.default.Wallet('resId')) }), []);
        return s.jsx('div', { className: a(Se, e), children: s.jsx(Te, { options: n }) });
    }),
    ke = 'Content_subtitle_6f1a94',
    Ee = 'Content_wrapper_a688e273',
    We = (e) => (e >= p.Large ? X.x64 : X.x48),
    Me = n(() => {
        const { model: e } = ae(),
            a = e.computes.product(),
            { mediaSize: n } = h();
        switch (a.type) {
            case Q.Vehicle:
                return s.jsx(J, {
                    name: a.vehicleInfo.name,
                    type: a.vehicleInfo.type,
                    tier: a.vehicleInfo.tier,
                    isPremium: a.vehicleInfo.isPremium,
                    vehicleCD: a.vehicleInfo.vehicleCD,
                    role: a.vehicleInfo.roleKey,
                    tooltipArgs: { tooltipId: 'shopVehicle', vehicleCD: a.vehicleInfo.vehicleCD },
                    size: We(n),
                    className: ke,
                });
            case Q.Style3d:
                return s.jsx(k, {
                    text: R.strings.comp7_ext.purchase.success.style3d(),
                    binding: { name: s.jsx(q, { name: a.name }), vehicleName: a.vehicleInfo.name },
                    classMix: ke,
                });
            case Q.Reward:
                return s.jsx('div', {
                    className: Ee,
                    children: s.jsx('div', { className: ke, children: a.reward.label }),
                });
            default:
                return (console.error(`Unreachable product type ${a.type}`), null);
        }
    }),
    De = 'Congratulation_d16d6f64',
    ze = 'Congratulation_heading_94951bd9',
    Oe = 'Congratulation_footer_f519b4d4',
    Be = 'Congratulation_timer_85938cbe',
    Ue = 'Congratulation_description_e5fb3e08',
    $e = 'Congratulation_balance_7e36c12f',
    Le = 'Congratulation_separator_8e19ddae',
    Fe = 'Congratulation_buttonWrapper_5adec04e',
    Qe = 'Congratulation_button_e12951cf',
    qe = n(() => {
        const { controls: e } = ae(),
            { mediaSize: n } = h();
        return s.jsxs('div', {
            className: De,
            children: [
                s.jsx(Ve, { className: $e }),
                s.jsx('div', { className: a(L.heading, ze), children: R.strings.comp7_ext.purchase.success.heading() }),
                s.jsx(Me, {}),
                s.jsxs('div', {
                    className: Oe,
                    children: [
                        s.jsx(k, {
                            text: R.strings.comp7_ext.purchase.success.receiving(),
                            binding: { icon: s.jsx('div', { className: Be }) },
                            classMix: Ue,
                        }),
                        s.jsx('div', { className: Le }),
                        s.jsx('div', {
                            className: Fe,
                            children: s.jsx(E, {
                                theme: E.themes.primary,
                                size: K(n),
                                onClick: () => {
                                    (x.sound(R.sounds.comp_7_shop_purchase_done()), e.close());
                                },
                                className: Qe,
                                children: R.strings.comp7_ext.purchase.affirmative(),
                            }),
                        }),
                    ],
                }),
            ],
        });
    }),
    Ge = 'Error_7d25edad',
    Ke = 'Error_content_5f4a10ec',
    Je = 'Error_icon_698631fb',
    Xe = 'Error_title_4ecb2575',
    Ze = 'Error_description_c7261d2',
    Ye = 'Error_separator_4410b8aa',
    es = 'Error_button_58182876',
    ss = n(() => {
        const { controls: e } = ae(),
            { mediaSize: a } = h();
        return s.jsx('div', {
            className: Ge,
            children: s.jsxs('div', {
                className: Ke,
                children: [
                    s.jsx('div', { className: Je }),
                    s.jsx(k, { text: R.strings.comp7_ext.purchase.error.title(), classMix: Xe }),
                    s.jsx(k, { text: R.strings.comp7_ext.purchase.error.description(), classMix: Ze }),
                    s.jsx('div', { className: Ye }),
                    s.jsx('div', {
                        className: es,
                        children: s.jsx(E, {
                            theme: E.themes.secondary,
                            size: K(a),
                            onClick: () => {
                                (x.sound(R.sounds.comp_7_shop_purchase_done()), e.close());
                            },
                            children: R.strings.comp7_ext.purchase.affirmative(),
                        }),
                    }),
                ],
            }),
        });
    }),
    as = 'Content_title_21cb0a6f',
    ns = 'Content_title__reward_c151c326',
    ts = 'Content_subtitle_8cf5417d',
    rs = 'Content_style3dSubtitle_b8c34c03',
    is = 'Content_style3dVehicleName_2841a0a6',
    cs = n(() => {
        const { model: e } = ae(),
            n = e.computes.product();
        switch (n.type) {
            case Q.Vehicle:
                return s.jsxs(s.Fragment, {
                    children: [
                        s.jsx(k, {
                            text: R.strings.comp7_ext.purchase.title.vehicle(),
                            binding: {
                                name: s.jsx(J, {
                                    name: n.vehicleInfo.name,
                                    type: n.vehicleInfo.type,
                                    tier: n.vehicleInfo.tier,
                                    role: n.vehicleInfo.roleKey,
                                    vehicleCD: n.vehicleInfo.vehicleCD,
                                    tooltipArgs: { tooltipId: 'shopVehicle', vehicleCD: n.vehicleInfo.vehicleCD },
                                    isPremium: n.vehicleInfo.isPremium,
                                    size: X.x64,
                                    className: as,
                                }),
                            },
                            classMix: as,
                        }),
                        n.description && s.jsx(W, { text: n.description, classMix: ts }),
                    ],
                });
            case Q.Style3d:
                return s.jsxs(s.Fragment, {
                    children: [
                        s.jsx(k, {
                            text: R.strings.comp7_ext.purchase.title.style3d(),
                            binding: { name: s.jsx(q, { name: n.name }) },
                            classMix: as,
                        }),
                        s.jsx(k, {
                            classMix: rs,
                            text: R.strings.comp7_ext.forVehicle(),
                            binding: {
                                vehicleName: s.jsx(J, {
                                    name: n.vehicleInfo.name,
                                    type: n.vehicleInfo.type,
                                    tier: n.vehicleInfo.tier,
                                    isPremium: n.vehicleInfo.isPremium,
                                    size: X.x48,
                                    className: is,
                                }),
                            },
                        }),
                    ],
                });
            case Q.Reward:
                return s.jsx('div', { className: a(as, ns), children: n.reward.label });
            default:
                return (console.error(`Unreachable product type ${n.type}`), null);
        }
    }),
    os = {
        base: 'PurchaseConfirm_34fadd9c',
        balance: 'PurchaseConfirm_balance_b01c62d8',
        content: 'PurchaseConfirm_content_11a1daef',
        base__reward: 'PurchaseConfirm_base__reward_8bdc2658',
        separator: 'PurchaseConfirm_separator_4bdcba90',
        alert: 'PurchaseConfirm_alert_a180f70e',
        alertIcon: 'PurchaseConfirm_alertIcon_2b74eeac',
        priceContainer: 'PurchaseConfirm_priceContainer_188919e9',
        price: 'PurchaseConfirm_price_40c2612',
        currency: 'PurchaseConfirm_currency_deb1947d',
        discount: 'PurchaseConfirm_discount_2c4a07e6',
        discount__freeXP: 'PurchaseConfirm_discount__freeXP_ceb0446b',
        discount__credits: 'PurchaseConfirm_discount__credits_95cbffd7',
        discount__gold: 'PurchaseConfirm_discount__gold_ac9be8c6',
        discount__xp: 'PurchaseConfirm_discount__xp_8bdc2658',
        discount__crystal: 'PurchaseConfirm_discount__crystal_8bdc2658',
        discount__equipCoin: 'PurchaseConfirm_discount__equipCoin_6f13de01',
        discountLine: 'PurchaseConfirm_discountLine_b61b5a2b',
        buttons: 'PurchaseConfirm_buttons_b4e35304',
        buttonWrapper: 'PurchaseConfirm_buttonWrapper_68c5e204',
        button: 'PurchaseConfirm_button_1987862d',
        fadeIn: 'PurchaseConfirm_fadeIn_8bdc2658',
        fadeInThreeQuarters: 'PurchaseConfirm_fadeInThreeQuarters_8bdc2658',
        fadeInHalf: 'PurchaseConfirm_fadeInHalf_8bdc2658',
        fadeOut: 'PurchaseConfirm_fadeOut_8bdc2658',
        fadeInWithScale: 'PurchaseConfirm_fadeInWithScale_8bdc2658',
        slideUp: 'PurchaseConfirm_slideUp_8bdc2658',
        scale: 'PurchaseConfirm_scale_8bdc2658',
        raysAppearance: 'PurchaseConfirm_raysAppearance_8bdc2658',
        rotate: 'PurchaseConfirm_rotate_8bdc2658',
        'reverse-rotate': 'PurchaseConfirm_reverse-rotate_8bdc2658',
        glowAppearance: 'PurchaseConfirm_glowAppearance_8bdc2658',
        highlightAppearance: 'PurchaseConfirm_highlightAppearance_8bdc2658',
        blink: 'PurchaseConfirm_blink_8bdc2658',
        slideUpIn: 'PurchaseConfirm_slideUpIn_8bdc2658',
    },
    ls = n(() => {
        const { model: e, controls: n } = ae(),
            { mediaSize: t } = h(),
            { hasSuitableVehicle: r } = e.root.get(),
            i = e.computes.product(),
            c = e.computes.hasDiscount(),
            o = K(t);
        return s.jsxs('div', {
            className: a(os.base, i.type === Q.Reward && os.base__reward),
            children: [
                s.jsx(Ve, { className: os.balance }),
                s.jsxs('div', {
                    className: os.content,
                    children: [
                        s.jsx(cs, {}),
                        s.jsx('div', { className: os.separator }),
                        i.type === Q.Style3d &&
                            !r &&
                            s.jsx(k, {
                                text: R.strings.comp7_ext.purchase.noSuitableVehicle(),
                                classMix: os.alert,
                                binding: { alertIcon: s.jsx('div', { className: os.alertIcon }) },
                            }),
                        s.jsxs('div', {
                            className: os.priceContainer,
                            children: [
                                s.jsx('div', { className: os.price, children: R.strings.comp7_ext.purchase.price() }),
                                c &&
                                    s.jsxs('div', {
                                        className: a(os.discount, os[`discount__${i.price.name}`]),
                                        children: [
                                            s.jsx(M, { value: i.price.value }),
                                            s.jsx('div', { className: os.discountLine }),
                                        ],
                                    }),
                                s.jsx(S, {
                                    type: i.price.name,
                                    enough: i.price.isEnough,
                                    size: S.sizes.small,
                                    reverse: !0,
                                    classNames: { base: os.currency },
                                    children: c ? i.price.discountValue : i.price.value,
                                }),
                            ],
                        }),
                        s.jsxs('div', {
                            className: os.buttons,
                            children: [
                                s.jsx(D, {
                                    isEnabled: !i.price.isEnough,
                                    body: R.strings.comp7_ext.products.message.notEnough(),
                                    children: s.jsx('div', {
                                        className: os.buttonWrapper,
                                        children: s.jsx(E, {
                                            theme: E.themes.primary,
                                            size: o,
                                            onMouseEnter: () => {
                                                i.price.isEnough && x.highlight();
                                            },
                                            onClick: () => {
                                                i.price.isEnough && (x.click(), n.confirm());
                                            },
                                            silent: !0,
                                            disabled: !i.price.isEnough,
                                            className: os.button,
                                            children: R.strings.comp7_ext.purchase.confirmButton(),
                                        }),
                                    }),
                                }),
                                s.jsx('div', {
                                    className: os.buttonWrapper,
                                    children: s.jsx(E, {
                                        theme: E.themes.secondary,
                                        size: o,
                                        onClick: n.close,
                                        className: os.button,
                                        children: R.strings.comp7_ext.purchase.cancelButton(),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    ds = 'App_386e819',
    us = 'App_rewardWrapper_0',
    ms = 'App_sceneWrapper_ebba30ef',
    _s = 'App_content_9b2432aa',
    hs = 'App_close_3178228e',
    ps = 'App_waiting_a67312c1',
    vs = { [Z.Confirmation]: ls, [Z.FlyBy]: () => s.jsx('div', {}), [Z.Congratulation]: qe, [Z.Error]: ss },
    xs = n(() => {
        const { model: e, controls: a } = ae(),
            { pageState: n, isPurchaseProcessing: t } = e.root.get(),
            r = l(n, {
                from: { opacity: 0 },
                enter: { opacity: 1, delay: e.computes.pageStateTransitionDelay() },
                leave: { opacity: 0 },
                config: { duration: 500 },
            });
        return s.jsxs('div', {
            className: ds,
            children: [
                e.computes.isCameraRotationAvailable() &&
                    s.jsx('div', {
                        className: ms,
                        children: s.jsx(z, { moveSpace: a.moveSpace, onMouseOver3dScene: a.mouseOver3dScene }),
                    }),
                e.computes.hasAnimatedReward() && s.jsx(_e, { className: us }),
                r((e, a) => {
                    const n = vs[a];
                    return n
                        ? s.jsx(i.div, { style: e, className: _s, children: s.jsx(n, {}) })
                        : (console.error('Unreachable code: PurchaseDialog/App.tsx'), null);
                }),
                s.jsx(F, { onClick: t ? O : a.close, className: hs }),
                t &&
                    s.jsx('div', {
                        className: ps,
                        children: s.jsx(B, { message: R.strings.waiting.wotShopProductPurchase() }),
                    }),
            ],
        });
    });
U(s.jsx($, { children: s.jsx(se, { children: s.jsx(xs, {}) }) }));
