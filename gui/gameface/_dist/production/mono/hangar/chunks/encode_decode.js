import { A as t, J as e, B as s, K as n, L as a, D as i, M as l, N as r, O as o, C as c, P as u } from './vendor.js';
import { r as d, cY as f, cZ as h, aX as g, aA as p, c_ as v, c$ as m } from './lib.js';
const y = d.resolve('strings');
function b(t, e, s = '...') {
    if (
        (g(
            e - s.length >= 0,
            `Incorrect tranticate config max(${e}) - rest.length(${s.length}) must be greater than 0`,
        ),
        t.length <= e)
    )
        return [t, !1];
    return [`${t.slice(0, e - s.length)}${s}`, !0];
}
const _ = f(v + m),
    I = () => `${Date.now().toString(16)}_${_(3)}`;
function N(t, e, s = 1) {
    const n = h(e, { count: s });
    return t.has(n) ? N(t, e, s + 1) : n;
}
function A(t = '', e = []) {
    return {
        title: '' !== t ? t : y.readOrEmpty('playlists.defaultName'),
        createdAt: Date.now(),
        modifiedAt: Date.now(),
        list: e,
    };
}
function w(t, e) {
    return t.title === e.title && p.shallow(t.list, e.list);
}
const B = (t) => ({ type: 'ok', value: t }),
    $ = (t, e) => ({ type: 'error', error: { tag: t, msg: e } });
function k(t) {
    if ('ok' === t.type) return t.value;
}
const O = { delete: 'delete', save: 'save', import: 'import' },
    D = { delete: 'delete', save: 'save', import: 'import', cancel: 'cancel', discard: 'discard', submit: 'submit' },
    E = t({ title: i(), createdAt: e(c(), o(), u(0)), modifiedAt: e(c(), o(), u(0)), list: r(e(c(), o())) }),
    x = e(
        i(),
        l((t) => (t.length > 0 ? t : void 0)),
    ),
    P = t({ id: e(i(), a(1)), new: s(n()) }),
    T = t({ title: i() }),
    C = t({
        titles: e(
            r(i()),
            l((t) => new Set(t)),
        ),
    }),
    L = {
        'mouse-enter': { 'vehicle-card': 'carousel', 'vehicle:playlists:card': 'carousel' },
        click: {
            'vehicle:action-cards': 'yes1',
            'vehicle-card': 'tank_selection',
            'vehicle:playlists:dropdown_trigger': 'tabs',
            'vehicle:playlists:copy_button': 'tabb',
            'vehicle:playlists:edit_button': 'tabb',
            'vehicle:playlists:card': 'carouselButton',
            'vehicle:playlists:edit:footer:save_button': 'yes1',
            'vehicle:playlists:edit:footer:cancel_button': 'cancelcloseno',
            'vehicle:playlists:edit:preview_card:close_button': 'cancelcloseno',
            'vehicle:playlists:overlay:submit_button': 'yes1',
            'vehicle:playlists:overlay:cancel_button': 'cancelcloseno',
        },
        animation: { 'vehicle-ttc-section:accordion-summary': 'gui_ttc_start' },
        drag: { 'vehicle:playlists:edit:draggable_item': 'play' },
        drop: { 'vehicle:playlists:edit:draggable_item': 'tank_selection' },
    },
    R = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_',
    U = 65535;
function j(t) {
    let e = t[0] ?? 0;
    for (let s = 0; s < t.length; s++) e = (e + t[s]) & U;
    return e;
}
function S(t) {
    if (0 === t.length) return $('EMPTY_INPUT');
    const e = j(t),
        s = new Uint8Array(5 + 5 * t.length);
    ((s[0] = e >>> 8), (s[1] = 255 & e), (s[2] = 1));
    let n = 5;
    for (let o = 0; o < t.length; o++) {
        let e = t[o];
        for (;;) {
            const t = 127 & e;
            if (((e >>>= 7), 0 === e)) {
                ((s[n] = t), n++);
                break;
            }
            ((s[n] = 128 | t), n++);
        }
    }
    ((s[3] = (n - 5) >>> 8), (s[4] = (n - 5) & 255));
    let a = '',
        i = 0n,
        l = 0;
    const r = s.slice(0, n);
    for (const o of r)
        for (i = (i << 8n) | BigInt(o), l += 8; l >= 6; ) {
            l -= 6;
            const t = Number((i >> BigInt(l)) & 0x3fn);
            ((a += R[t]), (i &= (1n << BigInt(l)) - 1n));
        }
    if (l > 0) {
        const t = 63 & Number(i << BigInt(6 - l));
        a += R[t];
    }
    return B(a);
}
function M(t) {
    if (0 === t.length) return $('INVALID_INPUT');
    let e = 0n,
        s = 0;
    const n = [];
    for (const o of t) {
        const t = R.indexOf(o);
        if (-1 === t) return $('INVALID_CHAR');
        for (e = (e << 6n) | BigInt(t), s += 6; s >= 8; )
            ((s -= 8), n.push(Number((e >> BigInt(s)) & 0xffn)), (e &= (1n << BigInt(s)) - 1n));
    }
    if (n.length < 6) return $('INCORRECT_LEN');
    const a = (n[0] << 8) | n[1],
        i = n[2] << 8,
        l = 5 + ((n[3] << 8) | n[4]),
        r = [];
    for (let o = 5; o < l; ) {
        let t,
            e = 0,
            s = 0;
        do {
            if (((t = n[o++]), void 0 === t)) return $('OUT_OF_RANGE', `Out of range ${o} in ${n.length}\n\n${n}`);
            ((e |= (127 & t) << s), (s += 7));
        } while (128 == (128 & t));
        r.push(e);
    }
    return B({ numbers: r, hash: a, version: i });
}
export {
    P as E,
    C as I,
    E as P,
    x as S,
    b as a,
    S as b,
    A as c,
    L as d,
    $ as e,
    N as f,
    I as g,
    T as h,
    D as i,
    M as j,
    j as k,
    B as o,
    w as p,
    O as t,
    k as u,
};
