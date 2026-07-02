(() => {
    'use strict';
    var e,
        o = {
            7727: (e, o, t) => {
                function n(e) {
                    engine.call('PlaySound', e);
                }
                t.d(o, { G: () => n });
            },
            9918: (e, o, t) => {
                var n = t(6179),
                    s = t.n(n),
                    i = t(6483),
                    r = t.n(i),
                    a = t(7727);
                const c = {
                        base: 'TextButton_base_b6',
                        base__right: 'TextButton_base__right_39',
                        icon: 'TextButton_icon_17',
                        icon__back: 'TextButton_icon__back_43',
                        icon__forward: 'TextButton_icon__forward_59',
                        icon__close: 'TextButton_icon__close_53',
                        icon__info: 'TextButton_icon__info_33',
                        glow: 'TextButton_glow_a4',
                        caption: 'TextButton_caption_82',
                        caption__back: 'TextButton_caption__back_b9',
                        caption__forward: 'TextButton_caption__forward_4e',
                        caption__close: 'TextButton_caption__close_36',
                        caption__info: 'TextButton_caption__info_23',
                        goto: 'TextButton_goto_e7',
                        base__left: 'TextButton_base__left_ff',
                        shine: 'TextButton_shine_e2',
                    },
                    u = [
                        'caption',
                        'onClick',
                        'goto',
                        'side',
                        'type',
                        'classNames',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'soundClick',
                        'soundHover',
                    ];
                function _() {
                    return (
                        (_ =
                            Object.assign ||
                            function (e) {
                                for (var o = 1; o < arguments.length; o++) {
                                    var t = arguments[o];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        _.apply(this, arguments)
                    );
                }
                class l extends s().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (o) => {
                                (e && e(o),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, a.G)(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (o) => {
                                (e && e(o), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (o) => {
                                (e && e(o),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, a.G)(this.props.soundClick));
                            }),
                            (this._onMouseUp = (e) => (o) => {
                                (e && e(o), this.setState({ click: !1 }));
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 })));
                    }
                    render() {
                        const e = this.props,
                            o = e.caption,
                            t = e.onClick,
                            n = e.goto,
                            i = e.side,
                            a = e.type,
                            l = e.classNames,
                            p = e.onMouseEnter,
                            h = e.onMouseLeave,
                            d = e.onMouseDown,
                            f = e.onMouseUp,
                            v =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, o) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        s = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) ((t = i[n]), o.indexOf(t) >= 0 || (s[t] = e[t]));
                                    return s;
                                })(e, u)),
                            b = r()(c.base, c[`base__${a}`], c[`base__${i}`], null == l ? void 0 : l.base),
                            g = r()(c.icon, c[`icon__${a}`], c[`icon__${i}`], null == l ? void 0 : l.icon),
                            k = r()(c.glow, null == l ? void 0 : l.glow),
                            x = r()(c.caption, c[`caption__${a}`], null == l ? void 0 : l.caption),
                            w = r()(c.goto, null == l ? void 0 : l.goto);
                        return s().createElement(
                            'div',
                            _(
                                {
                                    className: b,
                                    onMouseEnter: this._onMouseEnter(p),
                                    onMouseLeave: this._onMouseLeave(h),
                                    onMouseDown: this._onMouseDown(d),
                                    onMouseUp: this._onMouseUp(f),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                v,
                            ),
                            'info' !== a && s().createElement('div', { className: c.shine }),
                            s().createElement('div', { className: g }, s().createElement('div', { className: k })),
                            s().createElement('div', { className: x }, o),
                            n && s().createElement('div', { className: w }, n),
                        );
                    }
                }
                l.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
            },
        },
        t = {};
    function n(e) {
        var s = t[e];
        if (void 0 !== s) return s.exports;
        var i = (t[e] = { exports: {} });
        return (o[e].call(i.exports, i, i.exports, n), i.exports);
    }
    ((n.m = o),
        (e = []),
        (n.O = (o, t, s, i) => {
            if (!t) {
                var r = 1 / 0;
                for (_ = 0; _ < e.length; _++) {
                    for (var [t, s, i] = e[_], a = !0, c = 0; c < t.length; c++)
                        (!1 & i || r >= i) && Object.keys(n.O).every((e) => n.O[e](t[c]))
                            ? t.splice(c--, 1)
                            : ((a = !1), i < r && (r = i));
                    if (a) {
                        e.splice(_--, 1);
                        var u = s();
                        void 0 !== u && (o = u);
                    }
                }
                return o;
            }
            i = i || 0;
            for (var _ = e.length; _ > 0 && e[_ - 1][2] > i; _--) e[_] = e[_ - 1];
            e[_] = [t, s, i];
        }),
        (n.n = (e) => {
            var o = e && e.__esModule ? () => e.default : () => e;
            return (n.d(o, { a: o }), o);
        }),
        (n.d = (e, o) => {
            for (var t in o) n.o(o, t) && !n.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: o[t] });
        }),
        (n.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (n.o = (e, o) => Object.prototype.hasOwnProperty.call(e, o)),
        (n.j = 121),
        (() => {
            var e = { 121: 0 };
            n.O.j = (o) => 0 === e[o];
            var o = (o, t) => {
                    var s,
                        i,
                        [r, a, c] = t,
                        u = 0;
                    if (r.some((o) => 0 !== e[o])) {
                        for (s in a) n.o(a, s) && (n.m[s] = a[s]);
                        if (c) var _ = c(n);
                    }
                    for (o && o(t); u < r.length; u++) ((i = r[u]), n.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return n.O(_);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(o.bind(null, 0)), (t.push = o.bind(null, t.push.bind(t))));
        })());
    var s = n.O(void 0, [503], () => n(9918));
    s = n.O(s);
})();
