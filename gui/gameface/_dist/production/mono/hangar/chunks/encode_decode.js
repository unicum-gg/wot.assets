import {
    z as t,
    K as e,
    A as s,
    L as n,
    M as a,
    C as i,
    N as l,
    E as r,
    O as o,
    B as c,
    P as u,
    Q as d,
} from './vendor.js';
import { r as f, dl as g, dm as h, bt as p, ar as v, dn as m, dp as y } from './lib.js';
const b = f.resolve('strings');
function _(t, e, s = '...') {
    if (
        (p(
            e - s.length >= 0,
            `Incorrect tranticate config max(${e}) - rest.length(${s.length}) must be greater than 0`,
        ),
        t.length <= e)
    )
        return [t, !1];
    return [`${t.slice(0, e - s.length)}${s}`, !0];
}
const I = g(m + y),
    N = () => `${Date.now().toString(16)}_${I(3)}`;
function w(t, e, s = 1) {
    const n = h(e, { count: s });
    return t.has(n) ? w(t, e, s + 1) : n;
}
function A(t = '', e = []) {
    return {
        title: '' !== t ? t : b.readOrEmpty('playlists.defaultName'),
        createdAt: Date.now(),
        modifiedAt: Date.now(),
        list: e,
    };
}
function B(t, e) {
    return t.title === e.title && v.shallow(t.list, e.list);
}
const E = (t) => ({ type: 'ok', value: t }),
    x = (t, e) => ({ type: 'error', error: { tag: t, msg: e } });
function $(t) {
    if ('ok' === t.type) return t.value;
}
const k = { delete: 'delete', save: 'save', import: 'import' },
    O = { delete: 'delete', save: 'save', import: 'import', cancel: 'cancel', discard: 'discard', submit: 'submit' },
    D = t({ title: i(), createdAt: e(c(), o(), u(0)), modifiedAt: e(c(), o(), u(0)), list: r(e(c(), o())) }),
    P = e(
        i(),
        l((t) => (t.length > 0 ? t : void 0)),
    ),
    T = { New: 'new', Existing: 'existing' },
    C = t({ id: e(i(), a(1)), playlistState: s(n([d(T.Existing), d(T.New)])) }),
    L = t({ title: i() }),
    R = t({
        titles: e(
            r(i()),
            l((t) => new Set(t)),
        ),
    }),
    S = {
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
    U = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_',
    j = 65535;
function M(t) {
    let e = t[0] ?? 0;
    for (let s = 0; s < t.length; s++) e = (e + t[s]) & j;
    return e;
}
function V(t) {
    if (0 === t.length) return x('EMPTY_INPUT');
    const e = M(t),
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
            ((a += U[t]), (i &= (1n << BigInt(l)) - 1n));
        }
    if (l > 0) {
        const t = 63 & Number(i << BigInt(6 - l));
        a += U[t];
    }
    return E(a);
}
function z(t) {
    if (0 === t.length) return x('INVALID_INPUT');
    let e = 0n,
        s = 0;
    const n = [];
    for (const o of t) {
        const t = U.indexOf(o);
        if (-1 === t) return x('INVALID_CHAR');
        for (e = (e << 6n) | BigInt(t), s += 6; s >= 8; )
            ((s -= 8), n.push(Number((e >> BigInt(s)) & 0xffn)), (e &= (1n << BigInt(s)) - 1n));
    }
    if (n.length < 6) return x('INCORRECT_LEN');
    const a = (n[0] << 8) | n[1],
        i = n[2] << 8,
        l = 5 + ((n[3] << 8) | n[4]),
        r = [];
    for (let o = 5; o < l; ) {
        let t,
            e = 0,
            s = 0;
        do {
            if (((t = n[o++]), void 0 === t)) return x('OUT_OF_RANGE', `Out of range ${o} in ${n.length}\n\n${n}`);
            ((e |= (127 & t) << s), (s += 7));
        } while (128 == (128 & t));
        r.push(e);
    }
    return E({ numbers: r, hash: a, version: i });
}
export {
    T as E,
    R as I,
    D as P,
    P as S,
    V as a,
    _ as b,
    A as c,
    C as d,
    x as e,
    w as f,
    N as g,
    S as h,
    L as i,
    O as j,
    z as k,
    M as l,
    E as o,
    B as p,
    k as t,
    $ as u,
};
