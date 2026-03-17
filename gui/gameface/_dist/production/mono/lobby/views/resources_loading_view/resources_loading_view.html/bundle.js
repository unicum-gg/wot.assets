import { r as e, m as s, j as t, e as a } from '../../../chunks/vendor.js';
import {
    i as r,
    x as o,
    v as n,
    p as c,
    y as i,
    z as l,
    A as u,
    E as d,
    G as _,
    k as m,
    H as p,
    F as b,
    J as f,
    K as g,
    L as x,
    M as v,
    N as h,
    T as C,
    O as N,
    P as j,
    Q as S,
    R as I,
    S as w,
    w as E,
    W as y,
    X as T,
    c as A,
    C as k,
    Y as P,
    r as V,
    U as D,
} from '../../../chunks/lib.js';
import { a as L, b as M, c as H, d as W, e as U, f as B, g as $, h as O, t as F } from '../../../chunks/sounds.js';
import { S as z, F as q } from '../../../chunks/footer.js';
import { V as K } from '../../../chunks/vehicle_count.js';
import { g as G } from '../../../chunks/utils.js';
import '../../../chunks/enums.js';
var X = ((e) => ((e.Active = 'active'), (e.NoProgress = 'noProgress'), (e.NoVehicles = 'noVehicles'), e))(X || {});
const [Y, J] = r()(
        ({ observableModel: e }) => ({
            root: e.object(),
            resourcesTabs: e.array('resourcesTabs'),
            vehicleInfo: e.object('vehicleInfo'),
            vehicleCounter: e.object('vehicleCounter'),
        }),
        ({ externalModel: e }) => ({
            close: e.createCallbackNoArgs('close'),
            showHangar: e.createCallbackNoArgs('showHangar'),
            loadResources: e.createCallback((e) => e, 'loadResources'),
        }),
    ),
    Q = 'intelligence',
    Z = ['gold', 'crystal', 'credits', 'freeXP'],
    ee = (e, s) => {
        const t = {};
        let a = 0;
        for (const [r, o] of Object.entries(e)) {
            for (const [e, t] of Object.entries(s)) o.includes(e.toString()) && (a += t.value / t.rate);
            ((t[r] = a), (a = 0));
        }
        return t;
    };
function se(e) {
    return n.formatNumber('gold', e);
}
const te = e.createContext({}),
    ae = s(function ({ children: s }) {
        const [a, r] = e.useState({}),
            [o, n] = e.useState({}),
            [c, i] = e.useState({}),
            [l, u] = e.useState(0),
            [d, _] = e.useState(),
            [m, p] = e.useState(0),
            [b, f] = e.useState(!1),
            [g, x] = e.useState(!1),
            { controls: v } = J(),
            h = e.useCallback(() => {
                const e = ((e) => {
                    const s = {};
                    for (const [t, a] of Object.entries(e)) a.value > 0 && (s[t] = a.value);
                    return s;
                })(a);
                (v.loadResources(e), n(e));
            }, [v, a]);
        return t.jsx(te.Provider, {
            value: {
                progression: l,
                setProgression: u,
                prevProgression: d,
                setPrevProgression: _,
                delta: m,
                setDelta: p,
                resources: a,
                setResources: r,
                resourcesAnimated: o,
                setResourcesAnimated: n,
                isAnimationEnabled: b,
                setIsAnimationEnabled: f,
                isCardAnimationEnabled: g,
                setIsCardAnimationEnabled: x,
                tabsAnimated: c,
                setTabsAnimated: i,
                loadResources: h,
            },
            children: s,
        });
    }),
    re = {
        base: 'NumericControl_8b195b73',
        base__up: 'NumericControl_base__up_50dca44e',
        base__down: 'NumericControl_base__down_45f28a03',
        base__disabled: 'NumericControl_base__disabled_ec26e91e',
        arrow: 'NumericControl_arrow_4ae15c4d',
    },
    oe = 50,
    ne = 300;
function ce({ className: s, enabled: r, direction: o, onChange: n, onClick: i }) {
    const l = e.useRef(null),
        u = () => {
            null !== l.current && (clearTimeout(l.current), (l.current = null));
        };
    return t.jsx('button', {
        type: 'button',
        className: a(re.base, re[`base__${o}`], !r && re.base__disabled, s),
        onMouseDown: (e) => {
            (e.stopPropagation(),
                r &&
                    (n(),
                    (l.current = setTimeout(function e() {
                        (n(), (l.current = setTimeout(e, oe)));
                    }, ne))));
        },
        onClick: (e) => {
            (e.stopPropagation(), e.preventDefault(), null == i || i());
        },
        onMouseUp: u,
        onMouseLeave: u,
        onMouseEnter: () => {
            r && c.sound(L);
        },
        children: t.jsx('span', { className: re.arrow }),
    });
}
const ie = 'NumericStepper_decoration_430dcd23',
    le = 'NumericStepper_decoration__focused_881e8c85',
    ue = 'NumericStepper_decoration__notEmpty_1a5818dd',
    de = 'NumericStepper_decoration__disabled_bd5f8631',
    _e = 'NumericStepper_field_1f69b03a',
    me = 'NumericStepper_field__notEmpty_8dbebc59',
    pe = 'NumericStepper_field__focused_56f5ba82',
    be = 'NumericStepper_control_a4673ab5',
    fe = 'NumericStepper_control__up_5cd004d3',
    ge = 'NumericStepper_control__down_59a15715';
function xe(e, s) {
    return s > 0 && e > 0 ? Math.round(e / s) * s : e;
}
function ve(e) {
    return parseInt(String(e).replace(/\D/g, ''), 10);
}
function he({
    currentValue: s,
    step: r,
    addResources: o,
    minimum: n,
    maximum: p,
    canIncrease: b,
    canDecrease: f,
    onChangeValue: g,
    onInputMouseDown: x,
    onInputMouseUp: v,
}) {
    const { focused: h, setFocused: C, inputRef: R, disabled: N, value: j, focus: S } = i(),
        I = l(s),
        w = e.useRef(j),
        E = e.useRef(!1);
    (e.useEffect(() => {
        w.current = j;
    }, [j]),
        e.useEffect(() => {
            const e = R.current;
            if (!e) return;
            const s = se(ve(j)).length,
                t = (null == e ? void 0 : e.selectionStart) ?? 0,
                a = (null == e ? void 0 : e.selectionEnd) ?? 0;
            0 !== t || a !== s ? e.setSelectionRange(t === a ? s : t, s) : e.setSelectionRange(s, s);
        }, [R, j]),
        e.useEffect(() => {
            const e = (e) => {
                const s = R.current;
                if (!s || !h) return;
                const t = e.target;
                t === s || s.contains(t) || (C(!1), (E.current = !1));
            };
            return (document.addEventListener('mousedown', e), () => document.removeEventListener('mousedown', e));
        }, [h, R, C]),
        e.useEffect(() => {
            const e = R.current;
            E.current && e && document.activeElement !== e && S();
        }, [R, S]));
    const y = e.useCallback(() => {
            N || (C(!1), (E.current = !1));
        }, [C, N]),
        T = e.useCallback(() => {
            N || (C(!0), (E.current = !0));
        }, [C, N]),
        A = () => {
            const e = _(n, p, xe(ve(w.current) + r, r));
            (o(e), g(se(e)), c.sound(M));
        },
        k = () => {
            const e = _(n, p, xe(ve(w.current) - r, r));
            (o(e), g(se(e)), c.sound(H));
        },
        P = (e, s) => {
            (R.current && R.current.setSelectionRange(e, s),
                setTimeout(() => {
                    R.current && R.current.setSelectionRange(e, s);
                }));
        },
        V = (e) => {
            const s = e.target,
                { selectionStart: t, selectionEnd: a, value: r } = s;
            if (null === t || null === a || t !== a) return;
            const o = e.code === m.BACKSPACE,
                n = e.code === m.DELETE,
                c = /\D/,
                i = r.length,
                l = o && t ? t - 1 : t;
            let u = l;
            const d = c.test(r[l] ?? '');
            if (n && d) for (; c.test(r[u] ?? '') && u < i; ) u++;
            if (o && d) for (; c.test(r[u] ?? '') && u > 0; ) u--;
            if (u !== l || (o && d)) return (e.preventDefault(), (u = u < 0 ? 0 : u), void P(u, u));
            ((o && 1 === t && 1 === i) || n) && (e.preventDefault(), L(e.code));
        },
        D = u(),
        L = (e = '') => {
            var s, t, a;
            const i = e === m.BACKSPACE,
                l = e === m.DELETE,
                u = (null == (s = R.current) ? void 0 : s.selectionStart) || 0,
                d = (null == (t = R.current) ? void 0 : t.selectionEnd) || 0;
            let b = (null == (a = R.current) ? void 0 : a.value) || '';
            const f = Math.max(u, d);
            (l && (b = b.substring(0, f) + b.substring(f + 1, b.length)), i && 1 === u && 1 === b.length && (b = '0'));
            const x = Number(b.trim().replace(/\D/g, '')),
                v = Number.isSafeInteger(x) ? x : Number.MAX_SAFE_INTEGER,
                C = se(v);
            w.current = C;
            let N = 0;
            for (let r = 0; r < f; r++) {
                const e = b[r] || '',
                    s = C[N] || '';
                if (e.match(/\d/g) || e === s) {
                    for (; e !== C[N] && N < C.length; ) N++;
                    N++;
                }
            }
            ('' === b && (N = 1),
                R.current && R.current.setSelectionRange(0, 0),
                P(N, N),
                g(C),
                D.run(() => {
                    const e = _(n, p, xe(v, r)),
                        s = e - (I ?? 0);
                    (s > 0 ? c.sound(M) : s < 0 && c.sound(H), h && (o(e), g(se(e))), D.clear());
                }, 800));
        };
    return t.jsxs(d.Decoration, {
        className: a(ie, h && le, N && de, s > 0 && ue),
        children: [
            t.jsx(d.Field, {
                className: a(_e, h && pe, s > 0 && me),
                onChange: () => {
                    N || L();
                },
                onWheel: (e) => {
                    !N &&
                        h &&
                        (e.preventDefault(), e.stopPropagation(), e.deltaY < 0 && f && k(), e.deltaY > 0 && b && A());
                },
                onKeyDown: (e) => {
                    if (h)
                        switch (e.code) {
                            case m.ARROW_UP:
                            case m.NUMPAD_ADD:
                            case 'Equals':
                                (e.preventDefault(), b && A());
                                break;
                            case m.ARROW_DOWN:
                            case m.MINUS:
                            case m.NUMPAD_SUBTRACT:
                                (e.preventDefault(), f && k());
                                break;
                            case m.PAGE_DOWN:
                            case m.HOME:
                                (e.preventDefault(), o(n), g(se(n)));
                                break;
                            case m.PAGE_UP:
                            case m.END:
                                (e.preventDefault(), o(p), g(se(p)));
                                break;
                            case m.BACKSPACE:
                            case m.DELETE:
                                V(e);
                        }
                },
                onMouseUp: v,
                onMouseDown: x,
                onFocus: T,
                onBlur: y,
            }),
            t.jsx(ce, { className: a(be, fe), direction: 'up', enabled: b, onChange: A, onClick: T }),
            t.jsx(ce, { className: a(be, ge), direction: 'down', enabled: f, onChange: k, onClick: T }),
        ],
    });
}
const Ce = 'ResourceStepper_7487cb5a',
    Re = ({
        limit: s,
        rate: r,
        currentValue: o,
        className: n,
        type: c,
        disabled: i,
        onInputMouseDown: l,
        onInputMouseUp: u,
    }) => {
        const { setResources: _ } = e.useContext(te),
            [m, p] = e.useState(se(o)),
            b = e.useCallback(
                (e) => {
                    const s = { value: e, rate: r };
                    _((e) => ({ ...e, [c]: s }));
                },
                [_, r, c],
            );
        e.useEffect(() => {
            p(se(o));
        }, [o]);
        return t.jsx('div', {
            className: a(Ce, n),
            children: t.jsx(d.Provider, {
                value: m,
                type: d.types.text,
                disabled: i,
                children: t.jsx(he, {
                    step: r,
                    minimum: 0,
                    maximum: s,
                    canIncrease: !i && o < s,
                    canDecrease: !i && o > 0,
                    addResources: b,
                    currentValue: o,
                    onChangeValue: (e) => {
                        p(e);
                    },
                    onInputMouseDown: l,
                    onInputMouseUp: u,
                }),
            }),
        });
    },
    Ne = {
        text: 'Rate_text_a2e91ef6',
        text__gold: 'Rate_text__gold_99844245',
        text__credits: 'Rate_text__credits_5f95f14c',
        text__bonds: 'Rate_text__bonds_d271d8bf',
        text__min: 'Rate_text__min_d4c3fe31',
        icon: 'Rate_icon_c0fece1a',
        icon__intelligence: 'Rate_icon__intelligence_92d7abca',
        icon__currency: 'Rate_icon__currency_e39c71be',
    },
    je = function ({ type: e, rate: s }) {
        const r = p.resolve('intl');
        return t.jsx(b, {
            className: a(Ne.text, Ne[`text__${e}`]),
            text: R.strings.resource_well.resourcesLoadingView.resourceRate.text(),
            params: {
                icon: t.jsx('span', {
                    className: a(Ne.icon, e === Q ? Ne.icon__intelligence : Z.includes(e) && Ne.icon__currency),
                    style: G(e),
                }),
                minValue: t.jsx(b, {
                    className: a(Ne.text, Ne.text__min),
                    text: R.strings.resource_well.commonTexts.percent(),
                    params: { percent: (1).toString() },
                    upgradeLegacy: !0,
                }),
                equals: t.jsx('span', { children: '=' }),
                rate: r.formatNumber('integral', s),
            },
            upgradeLegacy: !0,
        });
    },
    Se = 'Storage_icon_ee526815',
    Ie = 'Storage_icon__reverse_e8e0a133',
    we = 'Storage_value_f68f8626',
    Ee = 'Storage_value__zero_c2260cb9';
function ye({ itemsInStorage: e, valueFirst: s }) {
    return t.jsx(f, {
        type: g.depot,
        reverse: s,
        size: x.extraSmall,
        enough: e > 0,
        classNames: { base: a(we, 0 === e && Ee), icon: a(Se, s && Ie) },
        children: e,
    });
}
const Te = {
        base: 'ResourcesCard_3fbe6840',
        imageWrapper: 'ResourcesCard_imageWrapper_4361447a',
        imageWrapper__disabled: 'ResourcesCard_imageWrapper__disabled_3a26ca19',
        storage: 'ResourcesCard_storage_b66b29fe',
        image: 'ResourcesCard_image_f3f1affe',
        image__disabled: 'ResourcesCard_image__disabled_8b1dc9a8',
        base__selected: 'ResourcesCard_base__selected_96c8a160',
        name: 'ResourcesCard_name_7341031a',
        rate: 'ResourcesCard_rate_7d72cca6',
        base__hasVehicle: 'ResourcesCard_base__hasVehicle_96c8a160',
        icon: 'ResourcesCard_icon_44c44023',
        icon__limit: 'ResourcesCard_icon__limit_5f7c7d38',
        icon__max: 'ResourcesCard_icon__max_20c8c1e',
        icon__loaded: 'ResourcesCard_icon__loaded_47403a5b',
        limitText: 'ResourcesCard_limitText_b3e4561',
        limitText__show: 'ResourcesCard_limitText__show_96c8a160',
        limitText__max: 'ResourcesCard_limitText__max_88a2f490',
        limitText__loaded: 'ResourcesCard_limitText__loaded_9a8baf80',
        card: 'ResourcesCard_card_ffbb6603',
        statusWrapper: 'ResourcesCard_statusWrapper_70d16500',
    },
    Ae = R.strings.resource_well,
    ke = ({ value: s, currentValue: r, progressionState: n }) => {
        const { type: c, inventoryCount: i, rate: l, limit: u, tooltipId: d, balance: _ } = s,
            { setResources: m, progression: f, delta: g } = e.useContext(te),
            x = p.resolve('intl'),
            j = r + _ >= u,
            S = f + g >= 100,
            I = n === X.NoVehicles,
            w = u / l < 100,
            E = Math.min(Math.round((100 - f - g + r / l) * l), i - (i % l)),
            y = (0 === i && 0 === r) || _ === u || (0 === r && S) || I,
            T = S ? r : Math.min(u - _, E),
            A = e.useRef(!1);
        e.useEffect(() => {
            I && m({ [c]: { value: 0, rate: l } });
        }, [I, l, m, c]);
        const k = ((e) => {
                var s;
                const t = e && R.strings.blueprints.nations.$dyn(e),
                    a = R.strings.quests.bonusName.$dyn(e);
                switch (!0) {
                    case e === Q:
                        return R.strings.resource_well.resourcesLoadingView.resourceCard.intelligenceBlueprints();
                    case Boolean(t):
                        return t;
                    case Boolean(a):
                        return o((null == (s = R.strings.quests.bonusName.$dyn(e)) ? void 0 : s.toString()) || '');
                    default:
                        console.error('title for reward is not provided');
                }
            })(c),
            P = I || 0 === i || y;
        return t.jsx(v, {
            className: Te.card,
            classNames: { status: { wrapper: Te.statusWrapper } },
            status: h.done,
            selected: Boolean(r),
            disableMouse: P,
            disabled: P,
            onClick: () => {
                if (I) return;
                if (A.current) return void (A.current = !1);
                const e = (({ value: e, rate: s }, t) => {
                    const a = e - (e % s);
                    return t > 100 ? { value: a - (t - 100) * s, rate: s } : { value: a, rate: s };
                })({ value: r + l >= T ? T : r + l, rate: l }, f + g);
                m((s) => ({ ...s, [c]: e }));
            },
            soundTarget: 'resource-card',
            children: t.jsxs('div', {
                className: a(Te.base, I || (0 === i && Te.base__disabled), !I && Te.base__hasVehicle),
                children: [
                    t.jsx('div', { className: Te.storage, children: t.jsx(ye, { itemsInStorage: i - r }) }),
                    t.jsx(C, {
                        contentId:
                            R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent('resId'),
                        args: { tooltipId: d },
                        children: t.jsx(N, {
                            className: a(Te.image, y && Te.image__disabled),
                            path: `R.images.resource_well.gui.maps.icons.resourcesLoading.resources.${c}`,
                            width: 180,
                            height: 135,
                        }),
                    }),
                    'string' == typeof k && t.jsx('div', { className: Te.name, children: k }),
                    t.jsx('div', { className: Te.rate, children: t.jsx(je, { type: c, rate: l }) }),
                    t.jsx(Re, {
                        currentValue: r,
                        limit: T,
                        rate: l,
                        type: c,
                        disabled: y,
                        onInputMouseDown: () => {
                            A.current = !0;
                        },
                        onInputMouseUp: () => {
                            requestAnimationFrame(() => {
                                A.current = !1;
                            });
                        },
                    }),
                    S &&
                        t.jsx(z, {
                            header: Ae.tooltips.resourcesLoadingView.resourcesLoaded.header(),
                            body: Ae.tooltips.resourcesLoadingView.resourcesLoaded.body(),
                            children: t.jsx(b, {
                                className: a(Te.limitText, Te.limitText__loaded, Te.limitText__show),
                                text: Ae.resourcesLoadingView.resourceRate.resourceLoadedText(),
                                params: { iconLoaded: t.jsx('div', { className: a(Te.icon, Te.icon__loaded) }) },
                                upgradeLegacy: !0,
                            }),
                        }),
                    w &&
                        !S &&
                        !I &&
                        t.jsx(C, {
                            contentId: R.views.resource_well.mono.lobby.tooltips.max_progress_tooltip('resId'),
                            args: { currentValue: r + _, maxValue: u, type: c },
                            children: j
                                ? t.jsx(b, {
                                      className: a(Te.limitText, Te.limitText__max),
                                      text: Ae.resourcesLoadingView.resourceRate.maxReachedText(),
                                      params: { iconMax: t.jsx('div', { className: a(Te.icon, Te.icon__max) }) },
                                      upgradeLegacy: !0,
                                  })
                                : t.jsx(b, {
                                      className: Te.limitText,
                                      text: Ae.resourcesLoadingView.resourceRate.maxText(),
                                      params: {
                                          iconInfo: t.jsx('div', { className: a(Te.icon, Te.icon__limit) }),
                                          maxValue: x.formatNumber('integral', u),
                                      },
                                      upgradeLegacy: !0,
                                  }),
                        }),
                ],
            }),
        });
    },
    Pe = {
        base: 'ResourcesCards_f29eea8f',
        scrollWrapper: 'ResourcesCards_scrollWrapper_2cc8cbf8',
        fadeIn: 'ResourcesCards_fadeIn_54b5634',
        scrollContent: 'ResourcesCards_scrollContent_903fe74e',
        base__top: 'ResourcesCards_base__top_54b5634',
        base__bottom: 'ResourcesCards_base__bottom_54b5634',
        base__both: 'ResourcesCards_base__both_54b5634',
        scrollBarPosition: 'ResourcesCards_scrollBarPosition_2564c98d',
        cardsWrapper: 'ResourcesCards_cardsWrapper_c248ee90',
        item: 'ResourcesCards_item_8c44e672',
        fadeOut: 'ResourcesCards_fadeOut_54b5634',
        fadeInWithScale: 'ResourcesCards_fadeInWithScale_54b5634',
        slideUp: 'ResourcesCards_slideUp_54b5634',
        slideUpCenter: 'ResourcesCards_slideUpCenter_54b5634',
        blink: 'ResourcesCards_blink_54b5634',
    },
    Ve = [
        { position: 0, index: 0 },
        { position: 0, index: 1 },
    ],
    De = 'top',
    Le = 'bottom',
    Me = 'both',
    He = 'none';
const We = s(function ({ activeTabIndex: s }) {
    const { resources: r } = e.useContext(te),
        { model: o } = J(),
        n = o.resourcesTabs.get(),
        { progressionState: c } = o.root.get(),
        { api: i } = j(),
        u = n[s],
        [d, _] = e.useState(Ve),
        [m, p] = e.useState(He);
    e.useLayoutEffect(() => {
        const e = () => {
                const e = i.getContainerSize() ?? 0,
                    s = i.getWrapperSize() ?? 0,
                    t = i.animationScroll.scrollPosition.get();
                p(
                    (function (e, s, t) {
                        return e <= s ? He : t <= 10 ? Le : s + t >= e - 10 ? De : Me;
                    })(e, s, t),
                );
            },
            t = () => {
                (e(),
                    _(d.map((e) => (e.index === s ? { ...e, position: i.animationScroll.scrollPosition.get() } : e))));
            };
        return (
            i.events.on('change', t),
            i.events.on('recalculateContent', t),
            i.events.on('resizeHandled', t),
            () => {
                (i.events.off('resizeHandled', t), i.events.off('change', t), i.events.off('recalculateContent', t));
            }
        );
    }, [i, s, d]);
    const b = l(s),
        f = S(() => {
            b && s !== b && d[s] && i.applyScroll(d[s].position, { immediate: !0 });
        });
    return (
        e.useEffect(() => {
            f();
        }, [f, s]),
        t.jsxs('div', {
            className: a(Pe.base, Pe[`base__${m}`]),
            children: [
                t.jsx(I, {
                    classNames: { wrapper: Pe.scrollWrapper, content: Pe.scrollContent },
                    children: (() => {
                        if (u && 0 !== u.value.resources.length)
                            return t.jsx(w, {
                                className: Pe.cardsWrapper,
                                children: E(u.value.resources, (e, a) => {
                                    var o;
                                    return t.jsx(
                                        'div',
                                        {
                                            className: Pe.item,
                                            children: t.jsx(ke, {
                                                value: e,
                                                currentValue: (null == (o = r[e.type]) ? void 0 : o.value) || 0,
                                                progressionState: c,
                                            }),
                                        },
                                        `card_${a}_${e.type}_${s}`,
                                    );
                                }),
                            });
                    })(),
                }),
                t.jsx(y, { classNames: { base: Pe.scrollBarPosition } }),
            ],
        })
    );
});
function Ue(e) {
    return t.jsx(T, { children: t.jsx(We, { ...e }) });
}
const Be = {
        base: 'ResourcesHeaderItem_571dd076',
        base__active: 'ResourcesHeaderItem_base__active_953d6379',
        label: 'ResourcesHeaderItem_label_73933285',
        image: 'ResourcesHeaderItem_image_9f26e135',
        image__currency: 'ResourcesHeaderItem_image__currency_d4f85be8',
        image__blueprints: 'ResourcesHeaderItem_image__blueprints_c397f084',
        base__animated: 'ResourcesHeaderItem_base__animated_b8d7a3f9',
        blink: 'ResourcesHeaderItem_blink_b8d7a3f9',
        deltaPercent: 'ResourcesHeaderItem_deltaPercent_888bdebb',
        deltaPercent__loaded: 'ResourcesHeaderItem_deltaPercent__loaded_775ee532',
        glow: 'ResourcesHeaderItem_glow_141d9bf7',
        fadeOut: 'ResourcesHeaderItem_fadeOut_b8d7a3f9',
        fadeIn: 'ResourcesHeaderItem_fadeIn_b8d7a3f9',
        fadeInWithScale: 'ResourcesHeaderItem_fadeInWithScale_b8d7a3f9',
        slideUp: 'ResourcesHeaderItem_slideUp_b8d7a3f9',
        slideUpCenter: 'ResourcesHeaderItem_slideUpCenter_b8d7a3f9',
    },
    $e = R.strings.resource_well,
    Oe = ({ type: s, delta: r, activeTabIndex: o, tabIndex: n, onClick: i }) => {
        var l, u, d;
        const { isCardAnimationEnabled: _, tabsAnimated: m } = e.useContext(te);
        return t.jsxs('div', {
            className: a(Be.base, o === n && Be.base__active, m[s] && m[s] > 0 && o !== n && _ && Be.base__animated),
            onClick: () => {
                (c.sound(W), i(n));
            },
            onMouseEnter: () => {
                c.sound(U);
            },
            children: [
                t.jsx('div', { className: Be.glow }),
                t.jsx('div', {
                    className: Be.label,
                    children: null == (l = $e.resourcesLoadingView.resourcesHeader.$dyn(s)) ? void 0 : l.toString(),
                }),
                t.jsx(z, {
                    header:
                        null == (u = $e.tooltips.resourcesLoadingView.header.$dyn(`${s}_title`))
                            ? void 0
                            : u.toString(),
                    body:
                        null == (d = $e.tooltips.resourcesLoadingView.header.$dyn(`${s}_description`))
                            ? void 0
                            : d.toString(),
                    children: t.jsx('div', { className: a(Be.image, Be[`image__${s}`]) }),
                }),
                t.jsx(b, {
                    className: a(Be.deltaPercent, r > 0 && Be.deltaPercent__loaded),
                    text: 0 === r ? $e.commonTexts.percent() : $e.resourcesLoadingView.counter.delta(),
                    params: { delta: r.toFixed(), percent: 0 },
                    upgradeLegacy: !0,
                }),
            ],
        });
    },
    Fe = 'ResourcesHeader_839e69c3',
    ze = s(function ({ handleTabClick: s, activeTabIndex: a }) {
        const { model: r } = J(),
            o = r.resourcesTabs.get(),
            { resources: n, setDelta: c, setTabsAnimated: i } = e.useContext(te),
            l = ((e) => {
                const s = {};
                let t = [];
                return (
                    e.map(({ value: e }) => {
                        (e.resources.map(({ value: e }) => {
                            t.push(e.type);
                        }),
                            (s[e.type] = t),
                            (t = []));
                    }),
                    s
                );
            })(o);
        e.useEffect(() => {
            var e;
            c(((e = ee(l, n)), Object.values(e).reduce((e, s) => e + s, 0)));
        }, [c, l, n]);
        const u = e.useCallback(
            (e) => {
                (i(ee(l, n)), s(e));
            },
            [s, l, n, i],
        );
        return t.jsx('div', {
            className: Fe,
            children: o.map(({ value: e }, s) =>
                t.jsx(
                    Oe,
                    {
                        type: e.type,
                        resources: e.resources,
                        delta: ee(l, n)[e.type] || 0,
                        activeTabIndex: a,
                        tabIndex: s,
                        onClick: u,
                    },
                    s,
                ),
            ),
        });
    }),
    qe = 'Content_d86d909',
    Ke = 'Content_header_9d26a7f4',
    Ge = 'Content_c84d5903',
    Xe = 'Content_content__center_41e47377',
    Ye = s(function () {
        const { model: s } = J(),
            r = s.resourcesTabs.get(),
            [o, n] = e.useState(0),
            c = e.useCallback((e) => {
                n(e);
            }, []);
        return t.jsxs('div', {
            className: qe,
            children: [
                t.jsx('div', { className: Ke, children: t.jsx(ze, { handleTabClick: c, activeTabIndex: o }) }),
                t.jsx('div', {
                    className: a(Ge, r[o] && r[o].value.resources.length <= 5 && Xe),
                    children: t.jsx(Ue, { activeTabIndex: o }),
                }),
            ],
        });
    }),
    Je = 'Header_7d83acf6',
    Qe = 'Header_title_848ac8f3',
    Ze = 'Header_subtitle_ebe5184e',
    es = () =>
        t.jsxs('div', {
            className: Je,
            children: [
                t.jsx('div', { className: Qe, children: R.strings.resource_well.commonTexts.eventTitle() }),
                t.jsx('div', { className: Ze, children: R.strings.resource_well.resourcesLoadingView.subtitle() }),
            ],
        }),
    ss = 'App_ee95fab5',
    ts = 'App_base__blur_0',
    as = 'App_background_b5ce4082',
    rs = 'App_wrapper_f23099db',
    os = 'App_solidBackground_fab1cfb4',
    ns = 'App_header_eefc9528',
    cs = 'App_close_c4e6c691',
    is = 'App_counter_bb31fd22',
    ls = 'App_footer_1a5766c7',
    us = s(function () {
        const { model: s, controls: r } = J(),
            { progression: o, progressionState: n, isLoadingError: i, showBlur: l } = s.root.get();
        A();
        const {
            loadResources: u,
            setProgression: d,
            setPrevProgression: _,
            setResources: m,
            prevProgression: p,
            setIsAnimationEnabled: b,
            delta: f,
            setIsCardAnimationEnabled: g,
            setResourcesAnimated: x,
            setTabsAnimated: v,
        } = e.useContext(te);
        (e.useEffect(() => {
            d(o);
        }, [d, o]),
            e.useEffect(() => _(o), []),
            e.useEffect(() => {
                m({});
            }, [o, m]),
            e.useEffect(() => {
                i && (m({}), g(!1), b(!1));
            }, [i, m, g, b]),
            e.useEffect(() => {
                Boolean(o) && void 0 !== p && o !== p && g(!0);
            }, [p, o, g, n]),
            e.useEffect(() => {
                const e = n === X.NoProgress;
                ((Boolean(o) && e) || f > 0) && (o !== p && c.sound(B), b(!0));
            }, [p, o, b, n, f]),
            e.useEffect(() => {
                o + f === 100 && 100 !== o && c.sound($);
            }, [o, f]));
        const h = e.useCallback(() => {
            (_(o), f || (o !== p && c.sound(O)), x({}), v({}), g(!1));
        }, [_, o, f, x, v, g, p]);
        return t.jsxs('div', {
            className: a(ss, l && ts),
            children: [
                t.jsx('div', { className: os }),
                t.jsx('div', { className: as }),
                t.jsxs('div', {
                    className: rs,
                    children: [
                        t.jsx('div', { className: is, children: t.jsx(K, { vehicleCounter: s.vehicleCounter.get() }) }),
                        t.jsx('div', { className: ns, children: t.jsx(es, {}) }),
                        t.jsx(k, { className: cs, onClose: r.close }),
                        t.jsx(Ye, {}),
                        t.jsx(q, {
                            className: ls,
                            variant: 'resources',
                            counterUnavailable: !s.vehicleCounter.get().isVehicleCountAvailable,
                            progressionState: n === X.NoProgress ? X.Active : n,
                            vehicleInfo: s.vehicleInfo.get(),
                            onHangarShow: r.showHangar,
                            onClose: r.close,
                            onResourcesLoad: u,
                            onProgressBarAnimate: h,
                            progressValue: o,
                            deltaValue: f,
                        }),
                    ],
                }),
            ],
        });
    }),
    ds = P(F);
V(t.jsx(D, { soundsOverrides: ds, children: t.jsx(Y, { children: t.jsx(ae, { children: t.jsx(us, {}) }) }) }));
