import { s as e, r as a, j as r, f as s } from './vendor.js';
import { i as n, D as o, p as i, ak as t, T as l, ad as d, E as _, A as c, au as m } from './lib.js';
import { G as b } from './index.js';
import { a as k, K as u } from './key_icon.js';
import { N as y } from './number_anim.js';
import { m as v, n as x, o as C } from './sound.js';
const [f, g] = n()(
        ({ observableModel: e }) => ({ root: e.object() }),
        ({ externalModel: e }) => ({ click: e.createCallbackNoArgs('onClick') }),
    ),
    h = {
        root: 'KeyCard_root_43595af7',
        progressBar: 'KeyCard_progressBar_967bcc0c',
        progressBarBackgroundPattern: 'KeyCard_progressBarBackgroundPattern_268e2181',
        progressBarFillStart: 'KeyCard_progressBarFillStart_3be419ed',
        progressBarBackground: 'KeyCard_progressBarBackground_e4b45087',
        base: 'KeyCard_de0d272d',
        bg: 'KeyCard_bg_6733a7e9',
        text: 'KeyCard_text_2bcee1b5',
        blink: 'KeyCard_blink_a980ebf8',
        blink__anim: 'KeyCard_blink__anim_182d8e42',
        blinkAnim: 'KeyCard_blinkAnim_43595af7',
        blink__hoverAnim: 'KeyCard_blink__hoverAnim_7f29eedd',
        hoverBlinkAnim: 'KeyCard_hoverBlinkAnim_43595af7',
        blink__unhoverAnim: 'KeyCard_blink__unhoverAnim_c4bd604d',
        unHoverBlinkAnim: 'KeyCard_unHoverBlinkAnim_43595af7',
        keyText: 'KeyCard_keyText_bc5b9444',
        key: 'KeyCard_key_f3b35f5b',
        keyIcon: 'KeyCard_keyIcon_97aa0e3d',
    },
    j = e(({ className: e, fullBorder: n, withBackground: m }) => {
        const { model: f, controls: j } = g(),
            [K, p] = a.useState(!1),
            [B, A] = a.useState(!1),
            { keys: N, isCompleted: I, isDisabled: T } = f.root.get(),
            M = a.useRef(N),
            S = N > 9999,
            E = S ? `${o(9999, 0)}+` : o(N, 0);
        (a.useEffect(() => {
            M.current !== N && (M.current = N);
        }, [N]),
            a.useEffect(() => {
                let e, a;
                return (
                    I ||
                        B ||
                        K ||
                        (e = setTimeout(() => {
                            (i.sound(v),
                                (a = setInterval(() => {
                                    i.sound(v);
                                }, 25e3)));
                        }, 5e3)),
                    () => {
                        (clearTimeout(e), clearInterval(a));
                    }
                );
            }, [B, I, K]));
        const F = t({ value: k.C24x24 }, { large: { value: k.C70x70 }, extraLarge: { value: k.C86x86 } });
        return r.jsx(l, {
            targetId: R.aliases.last_stand.shared.Keys('resId'),
            contentId: R.views.last_stand.mono.lobby.tooltips.key_tooltip('resId'),
            children: r.jsx('div', {
                children: r.jsx(b, {
                    onActive: (e) => A(e),
                    onHover: (e) => {
                        (p(e), i.sound(e ? x : C));
                    },
                    hovered: K,
                    active: B,
                    onClick: T ? d : j.click,
                    className: e,
                    fullBorder: n,
                    disabled: T,
                    children: r.jsxs('div', {
                        className: s(h.base, K && h.base__hovered, B && h.base__active),
                        children: [
                            m && r.jsx('div', { className: h.bg }),
                            r.jsx(_, {
                                classMix: h.text,
                                text: R.strings.last_stand_lobby.keyCard.name(),
                                isTruncationAvailable: !0,
                                alignContent: c.Center,
                            }),
                            r.jsx('div', {
                                className: h.key,
                                children: r.jsx('div', {
                                    className: s(h.blink, !B && !K && h.blink__anim),
                                    children: r.jsxs('div', {
                                        className: s(h.blink, K ? h.blink__hoverAnim : h.blink__unhoverAnim),
                                        children: [
                                            r.jsx('div', {
                                                className: h.keyText,
                                                children: S
                                                    ? E
                                                    : r.jsx(y, {
                                                          isFormatted: !0,
                                                          previousNumber: M.current,
                                                          currentNumber: N,
                                                      }),
                                            }),
                                            r.jsx(u, { className: h.keyIcon, size: F.value }),
                                        ],
                                    }),
                                }),
                            }),
                        ],
                    }),
                }),
            }),
        });
    });
function K(e) {
    const s = R.aliases.last_stand.shared.Keys('resId'),
        n = a.useMemo(() => ({ rootId: s }), [s]);
    return r.jsx(m, { id: s, children: r.jsx(f, { options: n, children: r.jsx(j, { ...e }) }) });
}
export { K };
