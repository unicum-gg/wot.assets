import { j as e, f as t, z as s, o as a, e as l, x as o, I as i } from '../../../../chunks/vendor.js';
import {
    r as n,
    B as r,
    q as c,
    I as d,
    ac as u,
    i as m,
    c as p,
    aS as h,
    aR as y,
    F as g,
    bf as v,
    bo as b,
    a2 as _,
    a3 as f,
    a4 as x,
    a6 as z,
    cK as j,
    cL as N,
} from '../../../../chunks/lib.js';
import {
    h as C,
    I as A,
    t as k,
    i as S,
    c as I,
    g as O,
    f as w,
    j as T,
    k as E,
    d as B,
} from '../../../../chunks/encode_decode.js';
const P = {
        closeButton: 'Buttons_closeButton_abd8199',
        buttonsBase: 'Buttons_buttonsBase_baa73d96',
        button: 'Buttons_button_1de2fcc1',
    },
    L = n.resolve('strings'),
    $ = function ({ onClick: s, className: a }) {
        const l = c();
        return e.jsx('div', {
            onClick: function (e) {
                l.play('close', { target: 'vehicle:playlists:overlay:close_button', original: e });
            },
            onMouseEnter: function (e) {
                l.play('mouse-enter', { target: 'vehicle:playlists:overlay:close_button', original: e });
            },
            className: t(P.closeBase, a),
            'data-test-id': 'closeOverlay',
            children: e.jsx('div', {
                onClick: s,
                className: P.closeButton,
                children: e.jsx(d, { path: 'ui.close_btn', width: 48, height: 48 }),
            }),
        });
    },
    M = {
        default: { size: r.sizes.extraSmall },
        breakpoints: {
            medium: { size: r.sizes.small },
            large: { size: r.sizes.medium },
            extraLarge: { size: r.sizes.large },
        },
    };
function F({ buttons: t, onAction: s }) {
    const a = u(M.default, M.breakpoints);
    return e.jsx('div', {
        className: P.buttonsBase,
        children: t.map((t, l) =>
            e.jsx(
                r,
                {
                    className: P.button,
                    autoAlignContent: !1,
                    theme: 0 === l ? r.themes.primary : r.themes.secondary,
                    size: a.size,
                    onClick: () => s(t.action),
                    soundTarget: t.soundTarget,
                    'data-test-id': t.title,
                    children: L.readOrEmpty(t.title),
                },
                l,
            ),
        ),
    });
}
const [J, V] = m()(
        ({ observableModel: e }) => {
            const t = e.primitives(['params', 'type']),
                l = p.primitive(() => {
                    try {
                        return s(C, JSON.parse(t.params.get())).title;
                    } catch (e) {
                        return (console.error("Can't get playlist title", e), '');
                    }
                }),
                o = p.shallow(() => {
                    try {
                        return s(A, JSON.parse(t.params.get()));
                    } catch (e) {
                        return (console.error("Can't parse import overlay params", e), { titles: new Set() });
                    }
                });
            return { type: t.type, playlistCode: a.box(''), playlistTitle: l, importParams: o };
        },
        ({ externalModel: e, model: t }) => {
            const s = e.createCallback(
                    (e) => ({ action: k.import, id: e.id, data: JSON.stringify(e.initial) }),
                    'onAction',
                ),
                a = e.createCallback((e) => ({ action: e }), 'onAction');
            return {
                import: l((e) => {
                    s({ id: O(), initial: I(w(t.importParams().titles, 'playlists.defaultName'), e) });
                }),
                doAction: (e) => {
                    if (e === S.import)
                        console.error('Unsupported type to doAction, please use "import" function from DL');
                    else a(e);
                },
                close: e.createCallbackNoArgs('onClose'),
            };
        },
    ),
    D = 'AlertOverlay_6a914e50',
    R = 'AlertOverlay_close_c8fc8fba',
    q = 'AlertOverlay_content_be3b87d6',
    K = 'AlertOverlay_glow_2370fdef',
    U = 'AlertOverlay_icon_ec1d1576',
    W = 'AlertOverlay_divider_c054f0d9',
    G = 'AlertOverlay_title_f9ee7b93',
    H = { iconSize: 157, glowSize: [998, 639] },
    Q = { medium: { iconSize: 188, glowSize: [1200, 768] }, extraLarge: { iconSize: 256, glowSize: [1632, 1044] } },
    X = function ({ titlePath: t, titleParams: s }) {
        const a = u(H, Q);
        return e.jsxs('div', {
            className: q,
            children: [
                e.jsx(d, {
                    path: 'hangar.playlists.overlay_glow',
                    width: a.glowSize[0],
                    height: a.glowSize[1],
                    className: K,
                }),
                e.jsx(d, { path: 'library.icon_alert_256x256', width: a.iconSize, height: a.iconSize, className: U }),
                e.jsx(g, { className: G, path: t, params: s }),
                e.jsx(d, { path: 'ui.noise', className: W, fit: 'contain' }),
            ],
        });
    };
function Y(e) {
    const t = `playlists.dialogs.${e}.button.submit`,
        s = `playlists.dialogs.${e}.button.cancel`;
    switch (e) {
        case k.delete:
            return [
                { action: S.delete, title: t, soundTarget: 'vehicle:playlists:overlay:submit_button' },
                { action: S.cancel, title: s, soundTarget: 'vehicle:playlists:overlay:cancel_button' },
            ];
        case k.save:
            return [
                { action: S.save, title: t, soundTarget: 'vehicle:playlists:overlay:submit_button' },
                { action: S.discard, title: s, soundTarget: 'vehicle:playlists:overlay:cancel_button' },
            ];
        default:
            return [
                {
                    action: S.submit,
                    title: 'dialogs.common.submit',
                    soundTarget: 'vehicle:playlists:overlay:submit_button',
                },
                {
                    action: S.cancel,
                    title: 'dialogs.common.cancel',
                    soundTarget: 'vehicle:playlists:overlay:cancel_button',
                },
            ];
    }
}
const Z = o(function () {
        const t = V(),
            s = t.model.type.get(),
            a = { playlistTitle: s === k.delete ? t.model.playlistTitle() : '' };
        return (
            h(y.ESCAPE, t.controls.close),
            e.jsxs('div', {
                className: D,
                children: [
                    e.jsx($, { onClick: t.controls.close, className: R }),
                    e.jsx(X, { titlePath: `playlists.dialogs.${s}.title`, titleParams: a }),
                    e.jsx(F, {
                        buttons: Y(s),
                        onAction: function (e) {
                            t.controls.doAction(e);
                        },
                    }),
                ],
            })
        );
    }),
    ee = {
        base: 'Input_1c7ccc50',
        decoration: 'Input_decoration_85fbd35d',
        field: 'Input_field_17ca5da5',
        placeholder: 'Input_placeholder_491fdc9a',
    },
    te = n.resolve('strings'),
    se = o(function (s) {
        const a = u({ size: v.sizes.medium }, { medium: { size: v.sizes.large } });
        return e.jsx(v.Provider, {
            value: s.state.code.get(),
            size: a.size,
            state: s.state.valid.get() ? v.states.default : v.states.alert,
            children: e.jsxs('div', {
                className: t(ee.base, s.className),
                children: [
                    e.jsxs(v.Decoration, {
                        className: ee.decoration,
                        children: [
                            e.jsx(v.Field, {
                                onChange: (e) => s.state.setCode(e.currentTarget.value),
                                className: ee.field,
                                classNames: { placeholder: ee.placeholder },
                                'data-test-id': 'playlistCodeInput',
                                children: te.readOrEmpty('playlists.dialogs.import.input.message'),
                            }),
                            e.jsx(v.ClearButton, {}),
                        ],
                    }),
                    e.jsx(v.Message, {
                        visible: !s.state.valid.get(),
                        className: ee.message,
                        children: te.readOrEmpty('playlists.dialogs.import.input.alert'),
                    }),
                ],
            }),
        });
    });
const ae = 'Import_40d148c8',
    le = 'Import_input_e16c13cf',
    oe = 'Import_close_a22b55d9',
    ie = 'Import_content_4f83aea5',
    ne = 'Import_title_84bfc65',
    re = 'Import_buttons_cfa84075',
    ce = 'Import_button_4685dd9f',
    de = n.resolve('strings'),
    ue = {
        default: { size: r.sizes.extraSmall },
        breakpoints: {
            medium: { size: r.sizes.small },
            large: { size: r.sizes.medium },
            extraLarge: { size: r.sizes.large },
        },
    },
    me = o(function ({ state: t }) {
        const s = u(ue.default, ue.breakpoints),
            a = V();
        function l() {
            const e = t.code.get(),
                s = T(e);
            return (
                t.setValid('ok' === s.type),
                'error' === s.type
                    ? console.warn(`Failed to decode the code ${t.code}`, s.error)
                    : s.value.hash !== E(s.value.numbers)
                      ? (console.error('Invalid hash sum. List can be corrupted'), t.setValid(!1))
                      : void a.controls.import(s.value.numbers)
            );
        }
        return (
            b(y.ENTER, l),
            e.jsxs('div', {
                className: re,
                children: [
                    e.jsx(r, {
                        className: ce,
                        autoAlignContent: !1,
                        theme: r.themes.primary,
                        size: s.size,
                        onClick: l,
                        soundTarget: 'vehicle:playlists:overlay:submit_button',
                        'data-test-id': 'importPlaylist',
                        children: de.readOrEmpty('playlists.dialogs.import.button.submit'),
                    }),
                    e.jsx(r, {
                        className: ce,
                        autoAlignContent: !1,
                        theme: r.themes.secondary,
                        size: s.size,
                        onClick: () => a.controls.doAction(S.cancel),
                        soundTarget: 'vehicle:playlists:overlay:cancel_button',
                        'data-test-id': 'cancelImportPlaylist',
                        children: de.readOrEmpty('dialogs.common.cancel'),
                    }),
                ],
            })
        );
    }),
    pe = o(function () {
        const t = V(),
            s = i(() => {
                const e = a.box(!0),
                    t = a.box('');
                return {
                    valid: e,
                    code: t,
                    setValid: l(e.set.bind(e)),
                    setCode: l((s) => {
                        (e.set(!0), t.set(s));
                    }),
                };
            });
        return (
            h(y.ESCAPE, t.controls.close),
            e.jsxs('div', {
                className: ae,
                children: [
                    e.jsx($, { onClick: t.controls.close, className: oe }),
                    e.jsxs('div', {
                        className: ie,
                        children: [
                            e.jsx('div', { className: ne, children: de.readOrEmpty('playlists.dialogs.import.title') }),
                            e.jsx(se, { state: s, className: le }),
                        ],
                    }),
                    e.jsx(me, { state: s }),
                ],
            })
        );
    }),
    he = o(function () {
        const t = V().model.type.get();
        switch (t) {
            case k.import:
                return e.jsx(pe, {});
            case k.delete:
            case k.save:
                return e.jsx(Z, {});
            default:
                return (console.error(`The overlay type for ${t} is not supported`), null);
        }
    }),
    ye = _(B);
z(new f().addWithProps(x, { soundsOverrides: ye }).add(J).render(e.jsx(he, {})))
    .then(() => j(document.getElementById('root')))
    .then(() => N());
