(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [8310],
    {
        3457: (e, t, s) => {
            'use strict';
            s.d(t, { L$: () => l.L, qE: () => l.q, u5: () => m });
            var n = s(6483),
                a = s.n(n),
                i = s(7727),
                o = s(6179),
                r = s.n(o),
                c = s(6880),
                l = s(2106);
            const u = ({
                children: e,
                size: t,
                isFocused: s,
                type: n,
                disabled: u,
                mixClass: m,
                soundHover: _,
                soundClick: d,
                onMouseEnter: h,
                onMouseMove: p,
                onMouseDown: b,
                onMouseUp: v,
                onMouseLeave: g,
                onClick: E,
            }) => {
                const N = (0, o.useRef)(null),
                    f = (0, o.useState)(s),
                    y = f[0],
                    C = f[1],
                    w = (0, o.useState)(!1),
                    S = w[0],
                    k = w[1];
                return (
                    (0, o.useEffect)(() => {
                        function e(e) {
                            y && null !== N.current && !N.current.contains(e.target) && C(!1);
                        }
                        return (
                            document.addEventListener('mousedown', e),
                            () => {
                                document.removeEventListener('mousedown', e);
                            }
                        );
                    }, [y]),
                    (0, o.useEffect)(() => {
                        C(s);
                    }, [s]),
                    r().createElement(
                        'div',
                        {
                            ref: N,
                            className: a()(
                                c.Z.base,
                                c.Z[`base__${n}`],
                                u && c.Z.base__disabled,
                                t && c.Z[`base__${t}`],
                                y && c.Z.base__focus,
                                S && c.Z.base__highlightActive,
                                m,
                            ),
                            onMouseEnter: function (e) {
                                u || (null !== _ && (0, i.G)(_), h && h(e));
                            },
                            onMouseMove: function (e) {
                                p && p(e);
                            },
                            onMouseUp: function (e) {
                                u || (v && v(e), k(!1));
                            },
                            onMouseDown: function (e) {
                                u ||
                                    (null !== d && (0, i.G)(d),
                                    b && b(e),
                                    s && (u || (N.current && (N.current.focus(), C(!0)))),
                                    k(!0));
                            },
                            onMouseLeave: function (e) {
                                u || (g && g(e), k(!1));
                            },
                            onClick: function (e) {
                                u || (E && E(e));
                            },
                        },
                        n !== l.L.ghost &&
                            r().createElement(
                                r().Fragment,
                                null,
                                r().createElement('div', { className: c.Z.back }),
                                r().createElement('span', { className: c.Z.texture }),
                            ),
                        r().createElement(
                            'span',
                            { className: a()(c.Z.state, c.Z.state__default) },
                            r().createElement('span', { className: c.Z.stateDisabled }),
                            r().createElement('span', { className: c.Z.stateHighlightHover }),
                            r().createElement('span', { className: c.Z.stateHighlightActive }),
                        ),
                        r().createElement(
                            'span',
                            { className: c.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                            e,
                        ),
                    )
                );
            };
            u.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
            const m = u;
        },
        2106: (e, t, s) => {
            'use strict';
            let n, a;
            (s.d(t, { L: () => n, q: () => a }),
                (function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(n || (n = {})),
                (function (e) {
                    ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'));
                })(a || (a = {})));
        },
        280: (e, t, s) => {
            'use strict';
            s.d(t, { z: () => l });
            var n = s(6483),
                a = s.n(n),
                i = s(3649),
                o = s(6179),
                r = s.n(o),
                c = s(5287);
            const l = ({ binding: e, text: t = '', classMix: s, alignment: n = i.v2.left, formatWithBrackets: l }) => {
                if (null === t) return (console.error("FormatText was supplied with 'null'"), null);
                const u = l && e ? (0, i.WU)(t, e) : t;
                return r().createElement(
                    o.Fragment,
                    null,
                    u.split('\n').map((t, l) =>
                        r().createElement(
                            'div',
                            { className: a()(c.Z.base, s), key: `${t}-${l}` },
                            (0, i.Uw)(t, n, e).map((e, t) => r().createElement(o.Fragment, { key: `${t}-${e}` }, e)),
                        ),
                    ),
                );
            };
        },
        9766: (e, t, s) => {
            'use strict';
            s.d(t, { z: () => n.z });
            var n = s(280);
            s(8082);
        },
        8082: (e, t, s) => {
            'use strict';
            s(3649);
        },
        3368: () => {
            (!(function () {
                let e,
                    t,
                    s,
                    n,
                    a,
                    i,
                    o,
                    r = -1;
                (document.addEventListener('mousedown', (s) => {
                    (document.getSelection().empty(),
                        s.target.select &&
                            -1 === r &&
                            ((e = s.target), (t = e.getBoundingClientRect()), e.setSelectionRange(0, 0)));
                }),
                    document.addEventListener('mousemove', (s) => {
                        if ((-1 === r && s.target.select && s.target === e && (r = e.selectionStart), r > -1)) {
                            const n = Math.min(Math.max(s.x, t.left), t.right),
                                a = Math.min(Math.max(s.y, t.top), t.bottom),
                                i = document.createEvent('MouseEvent');
                            (i.initMouseEvent('mousedown', !0, !0, null, 1, n, a, n, a, !1, !1, !1, !1, 0, null),
                                e.dispatchEvent(i));
                            const o = e.selectionEnd;
                            o > r ? e.setSelectionRange(r, o, 'forward') : e.setSelectionRange(o, r, 'backward');
                        }
                    }),
                    document.addEventListener('mouseup', () => {
                        ((e = null), (r = -1));
                    }),
                    document.addEventListener('dblclick', (e) => {
                        e.target.select &&
                            (document.getSelection().empty(),
                            (s = e.target),
                            (n = e.target.value),
                            (a = s.selectionStart),
                            (i = -1 !== n.lastIndexOf(' ', a) ? n.lastIndexOf(' ', a) + 1 : 0),
                            (o = -1 !== n.indexOf(' ', a) ? n.indexOf(' ', a) : n.length),
                            s.setSelectionRange(i, o, 'forward'));
                    }));
            })(),
                (function () {
                    let e = null;
                    (document.addEventListener('mousedown', (t) => {
                        (document.getSelection().empty(),
                            0 !== t.button || t.target.select || e || (e = document.caretPositionFromPoint(t.x, t.y)));
                    }),
                        document.addEventListener('mousemove', (t) => {
                            if (0 === t.button && !t.target.select && e) {
                                const s = document.caretPositionFromPoint(t.x, t.y);
                                if (!s.offsetNode || !e.offsetNode) return;
                                document
                                    .getSelection()
                                    .setBaseAndExtent(e.offsetNode, e.offset, s.offsetNode, s.offset);
                            }
                        }),
                        document.addEventListener('mouseup', () => {
                            e = null;
                        }));
                })());
        },
        8310: (e, t, s) => {
            'use strict';
            (s.r(t), s.d(t, { default: () => et }));
            var n = s(6179),
                a = s.n(n),
                i = s(6483),
                o = s.n(i),
                r = s(8089),
                c = s(7596),
                l = s(8526),
                u = s(5521),
                m = s(3403),
                _ = s(3604),
                d = s(545);
            var h = s(3047),
                p = s(7727),
                b = s(5976),
                v = s(4069);
            const g = 'GodRays_base_26',
                E = 'GodRays_expander_d0',
                N = 'GodRays_canvas_7d',
                f = (e) =>
                    `R.images.gui.maps.icons.sequence.sun_shine_with_particles.reward_glow${e.toString().padStart(4, '0')}`,
                y = a().memo(({ className: e, width: t = 400, height: s = 400 }) =>
                    a().createElement(
                        'div',
                        { className: g },
                        a().createElement('div', { className: o()(E, e) }),
                        a().createElement(v.A, {
                            width: t,
                            height: s,
                            frameCount: 49,
                            frameTime: 50,
                            getSrcByFrame: f,
                            className: N,
                        }),
                    ),
                ),
                C = {
                    base: 'GiftMachineCoin_base_f5',
                    base__small: 'GiftMachineCoin_base__small_80',
                    base__medium: 'GiftMachineCoin_base__medium_b1',
                    base__large: 'GiftMachineCoin_base__large_c8',
                    base__extraLarge: 'GiftMachineCoin_base__extraLarge_d9',
                    base__s180x135: 'GiftMachineCoin_base__s180x135_6f',
                    icon: 'GiftMachineCoin_icon_9c',
                    godRays: 'GiftMachineCoin_godRays_67',
                    blinkShape: 'GiftMachineCoin_blinkShape_07',
                    blink: 'GiftMachineCoin_blink_dd',
                    blinker: 'GiftMachineCoin_blinker_97',
                };
            let w;
            !(function (e) {
                ((e.ExtraSmall = 'extraSmall'),
                    (e.Small = 'small'),
                    (e.Medium = 'medium'),
                    (e.Large = 'large'),
                    (e.ExtraLarge = 'extraLarge'),
                    (e.S180x135 = 's180x135'));
            })(w || (w = {}));
            const S = (0, n.memo)(function ({ size: e, hasBlink: t, displayGodrays: s = !0, classNames: n }) {
                return a().createElement(
                    'div',
                    { className: o()(C.base, C[`base__${e}`], null == n ? void 0 : n.base) },
                    a().createElement('div', { className: o()(C.icon, null == n ? void 0 : n.icon) }),
                    s &&
                        !1 === b.Z.isWeak() &&
                        a().createElement(
                            'div',
                            { className: o()(C.godRays, null == n ? void 0 : n.godRays) },
                            a().createElement(y, null),
                        ),
                    t &&
                        a().createElement(
                            'div',
                            { className: C.blinkShape },
                            a().createElement('div', { className: C.blink }),
                        ),
                );
            });
            var k = s(1458);
            const M = {
                base: 'ArrowButton_base_3a',
                base__right: 'ArrowButton_base__right_16',
                base__left: 'ArrowButton_base__left_0c',
                arrow: 'ArrowButton_arrow_d5',
                text: 'ArrowButton_text_be',
                coin: 'ArrowButton_coin_8a',
                icon: 'ArrowButton_icon_12',
            };
            let D, x;
            (!(function (e) {
                ((e.TextOnly = 'textOnly'), (e.WithCoin = 'withCoin'));
            })(D || (D = {})),
                (function (e) {
                    ((e.Left = 'left'), (e.Right = 'right'));
                })(x || (x = {})));
            const T = (0, n.memo)(({ text: e, direction: t, type: s = D.TextOnly, hasTokens: i = !1, onClick: r }) => {
                const c = (0, k.SD)(),
                    u = (0, n.useRef)();
                return (
                    (0, l.I9)(() => {
                        u.current && (u.current(), (u.current = void 0));
                    }),
                    a().createElement(
                        'div',
                        {
                            className: o()(M.base, M[`base__${t}`], i && M.base__hasTokens),
                            onClick: r,
                            onMouseEnter: () => {
                                s === D.WithCoin
                                    ? ((0, p.G)(R.sounds.hangar_newyear_vendor_switch_hover_on()),
                                      (u.current = () => (0, p.G)(R.sounds.hangar_newyear_vendor_switch_hover_off())))
                                    : (0, p.G)(R.sounds.highlight());
                            },
                            onMouseLeave: () => {
                                s === D.WithCoin && (0, p.G)(R.sounds.hangar_newyear_vendor_switch_hover_off());
                            },
                        },
                        a().createElement('div', { className: M.arrow }),
                        a().createElement('div', { className: M.text }, e),
                        s === D.WithCoin &&
                            a().createElement(S, {
                                displayGodrays: !1 === i,
                                size: c ? w.ExtraSmall : w.Small,
                                hasBlink: !i,
                                classNames: { base: M.coin, icon: M.icon, godRays: M.godRays },
                            }),
                    )
                );
            });
            var A = s(3457),
                I = s(2056);
            const P = 'BuyTokens_base_55',
                B = 'BuyTokens_title_db',
                O = 'BuyTokens_coinBlock_0e',
                F = 'BuyTokens_resourcesBlock_41',
                L = 'BuyTokens_buttonBox_5d',
                U = 'BuyTokens_button_80';
            var V = s(5415);
            s(3368);
            let G;
            !(function (e) {
                ((e[(e.ZERO = 48)] = 'ZERO'),
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
                    (e[(e.NUMPAD_9 = 105)] = 'NUMPAD_9'));
            })(G || (G = {}));
            var W = s(9916);
            const H = {
                base: 'NyNumericStepper_base_4d',
                base__isFocus: 'NyNumericStepper_base__isFocus_cd',
                base__isDisabled: 'NyNumericStepper_base__isDisabled_76',
                base__small: 'NyNumericStepper_base__small_49',
                inputContainer: 'NyNumericStepper_inputContainer_2a',
                input: 'NyNumericStepper_input_81',
                control: 'NyNumericStepper_control_1a',
                buttonIncrement: 'NyNumericStepper_buttonIncrement_9c',
                buttonDecrement: 'NyNumericStepper_buttonDecrement_38',
                'buttonIncrement__isActive-small': 'NyNumericStepper_buttonIncrement__isActive-small_24',
                'buttonDecrement__isActive-small': 'NyNumericStepper_buttonDecrement__isActive-small_e5',
                buttonIncrement__isDisabled: 'NyNumericStepper_buttonIncrement__isDisabled_d3',
                buttonDecrement__isDisabled: 'NyNumericStepper_buttonDecrement__isDisabled_7d',
                buttonIncrement__isActive: 'NyNumericStepper_buttonIncrement__isActive_7c',
                buttonDecrement__isActive: 'NyNumericStepper_buttonDecrement__isActive_1e',
                slideInFadeIn: 'NyNumericStepper_slideInFadeIn_15',
                fadeOut: 'NyNumericStepper_fadeOut_4a',
                fadeIn: 'NyNumericStepper_fadeIn_82',
                fadeInWithScale: 'NyNumericStepper_fadeInWithScale_f3',
                slideUp: 'NyNumericStepper_slideUp_86',
                scale: 'NyNumericStepper_scale_c0',
                spin: 'NyNumericStepper_spin_eb',
                blink: 'NyNumericStepper_blink_41',
                slideInNotification: 'NyNumericStepper_slideInNotification_37',
            };
            class z extends a().PureComponent {
                constructor(...e) {
                    (super(...e),
                        (this.timer = null),
                        (this.validationTimer = null),
                        (this.numericalStepper = (0, n.createRef)()),
                        (this.input = (0, n.createRef)()),
                        (this.state = {
                            value: this.props.value,
                            isFocused: this.props.isFocused,
                            activeDecrement: !1,
                            activeIncrement: !1,
                        }),
                        (this.setFocusOnInput = () => {
                            this.props.isDisabled ||
                                (this.input.current && (this.input.current.focus(), this.setState({ isFocused: !0 })));
                        }),
                        (this.blurInput = () => {
                            this.input.current && (this.input.current.blur(), this.setState({ isFocused: !1 }));
                        }),
                        (this.componentDidMount = () => {
                            (this.state.isFocused &&
                                (this.setFocusOnInput(),
                                setTimeout(() => {
                                    const e = this.formattedValue.length;
                                    this.input.current && this.input.current.setSelectionRange(e, e);
                                }, 0)),
                                document.addEventListener('click', this.handleClickOutside),
                                document.addEventListener('mouseup', this.handleMouseUp));
                        }),
                        (this.componentWillUnmount = () => {
                            (this.stop(),
                                document.removeEventListener('click', this.handleClickOutside),
                                document.removeEventListener('mouseup', this.handleMouseUp));
                        }),
                        (this.formatValue = (e) => W.Z5.getNumberFormat(e, W.B3.INTEGRAL)),
                        (this.getValidValue = (e) => {
                            const t = Math.min(this.props.maximum, Math.max(this.props.minimum, e)),
                                s = this.props.stepSize;
                            return Math.round(t / s) * s;
                        }),
                        (this.changeValue = (e) => {
                            e !== this.state.value && (this.setState({ value: e }), this.props.onChange(e));
                        }),
                        (this.setCursorPosition = (e, t) => {
                            (this.input.current && this.input.current.setSelectionRange(e, t),
                                setTimeout(() => {
                                    this.input.current && this.input.current.setSelectionRange(e, t);
                                }));
                        }),
                        (this.handleChange = () => {
                            this.props.isDisabled || this.updateInput();
                        }),
                        (this.updateInput = (e = 0) => {
                            const t = e === u.n.BACKSPACE,
                                s = e === u.n.DELETE,
                                n = this.input.current,
                                a = n.selectionStart || 0,
                                i = n.selectionEnd || 0;
                            let o = n.value;
                            const r = Math.max(a, i),
                                c = r;
                            (s && (o = o.substring(0, r) + o.substring(r + 1, o.length)),
                                t && 1 === a && 1 === o.length && (o = '0'));
                            const l = Number(o.trim().replace(/\D/g, '')),
                                m = Number.isSafeInteger(l) ? l : Number.MAX_SAFE_INTEGER,
                                _ = this.formatValue(m);
                            n.value = _;
                            const d = new RegExp(/\d/g);
                            let h = 0;
                            for (let e = 0; e < c; e++) {
                                const t = o[e] || '',
                                    s = _[h] || '';
                                if (t.match(d) || t === s) {
                                    for (; t !== _[h] && h < _.length;) h++;
                                    h++;
                                }
                            }
                            ('' === o && (h = 1),
                                this.input.current && this.input.current.setSelectionRange(0, 0),
                                this.setCursorPosition(h, h),
                                this.changeValue(m),
                                this.validationTimer && clearTimeout(this.validationTimer),
                                (this.validationTimer = setTimeout(() => {
                                    this.getValidValue(m) !== m &&
                                        this.state.isFocused &&
                                        (this.changeValue(this.getValidValue(m)),
                                        this.setCursorPosition(0, this.formatValue(m).length));
                                }, 1e3)));
                        }),
                        (this.handleDelete = (e) => {
                            const t = e.keyCode === u.n.BACKSPACE,
                                s = e.keyCode === u.n.DELETE,
                                n = e.target,
                                a = n.selectionStart,
                                i = n.selectionEnd,
                                o = n.value,
                                r = a !== i,
                                c = new RegExp(/\D/),
                                l = t && a ? a - 1 : a || 0;
                            if (r) return;
                            let m = l;
                            const _ = c.test(o[l]);
                            if (s && _) for (; c.test(o[m]) && m < o.length;) m++;
                            if (t && _) for (; c.test(o[m]) && m > 0;) m--;
                            if (m !== l || (t && _))
                                return (e.preventDefault(), (m = m < 0 ? 0 : m), void this.setCursorPosition(m, m));
                            ((t && 1 === a && 1 === o.length) || s) &&
                                (e.preventDefault(), this.updateInput(e.keyCode));
                        }),
                        (this.handleClickOutside = (e) => {
                            this.state.isFocused &&
                                null !== this.numericalStepper.current &&
                                !this.numericalStepper.current.contains(e.target) &&
                                this.blurInput();
                        }),
                        (this.handleBlur = () => {
                            if (this.props.isDisabled) return;
                            const e = this.getValidValue(this.state.value);
                            e !== this.state.value && this.changeValue(e);
                        }),
                        (this.handleWheel = (e) => {
                            if (this.props.isDisabled || !this.state.isFocused) return;
                            e.preventDefault();
                            e.deltaY < 0 ? this.decrement() : this.increment();
                        }),
                        (this.handleMouseUp = () => {
                            (this.stop(), this.setState({ activeIncrement: !1, activeDecrement: !1 }));
                        }),
                        (this.handleMouseLeave = () => {
                            this.stop();
                        }),
                        (this.incrementHandleMouseEnter = (e) => {
                            (this.state.activeIncrement && this.incrementHandleMouseDown(e, !0),
                                this.buttonIncrementIsDisabled || this.playHoverSound());
                        }),
                        (this.decrementHandleMouseEnter = (e) => {
                            (this.state.activeDecrement && this.decrementHandleMouseDown(e, !0),
                                this.buttonDecrementIsDisabled || this.playHoverSound());
                        }),
                        (this.handleKeyDown = (e) => {
                            if (!this.props.isDisabled) {
                                switch (
                                    (e.keyCode in u.n &&
                                        e.keyCode !== u.n.BACKSPACE &&
                                        e.keyCode !== u.n.DELETE &&
                                        e.preventDefault(),
                                    e.keyCode)
                                ) {
                                    case u.n.ARROW_UP:
                                    case u.n.NUM_PLUS:
                                        (this.state.activeIncrement || this.setState({ activeIncrement: !0 }),
                                            this.increment());
                                        break;
                                    case u.n.ARROW_DOWN:
                                    case u.n.NUM_MINUS:
                                        (this.state.activeDecrement || this.setState({ activeDecrement: !0 }),
                                            this.decrement());
                                        break;
                                    case u.n.HOME:
                                        this.changeValue(this.props.minimum);
                                        break;
                                    case u.n.END:
                                        this.changeValue(this.props.maximum);
                                        break;
                                    case u.n.ENTER:
                                        if (
                                            (e.nativeEvent.stopImmediatePropagation(),
                                            this.state.value >= this.props.maximum)
                                        ) {
                                            const e = this.formatValue(this.props.maximum).length;
                                            (this.changeValue(this.props.maximum), this.setCursorPosition(0, e));
                                        }
                                        break;
                                    case u.n.PAGE_UP:
                                        this.changeValue(this.props.maximum);
                                        break;
                                    case u.n.PAGE_DOWN:
                                        this.changeValue(this.props.minimum);
                                        break;
                                    case u.n.BACKSPACE:
                                    case u.n.DELETE:
                                        this.handleDelete(e);
                                }
                                this.props.onKeyDown(e);
                            }
                        }),
                        (this.handleKeyUp = (e) => {
                            if (!this.props.isDisabled)
                                switch (e.keyCode) {
                                    case u.n.ARROW_UP:
                                    case u.n.NUM_PLUS:
                                        this.setState({ activeIncrement: !1 });
                                        break;
                                    case u.n.ARROW_DOWN:
                                    case u.n.NUM_MINUS:
                                        this.setState({ activeDecrement: !1 });
                                }
                        }),
                        (this.allowOnlyNumbers = (e) => {
                            e.which in G || e.preventDefault();
                        }),
                        (this.increment = () => {
                            const e = Math.min(
                                this.getValidValue(this.state.value) + this.props.stepSize,
                                this.props.maximum,
                            );
                            this.changeValue(e);
                        }),
                        (this.decrement = () => {
                            const e = Math.max(
                                this.getValidValue(this.state.value) - this.props.stepSize,
                                this.props.minimum,
                            );
                            this.changeValue(e);
                        }),
                        (this.incrementHandleMouseDown = (e, t = !1) => {
                            this.buttonIncrementIsDisabled ||
                                (e.persist(),
                                e.preventDefault(),
                                this.stop(),
                                this.setFocusOnInput(),
                                this.state.value < this.props.maximum &&
                                    (!t && this.playClickSound(),
                                    (0 === e.button || t) &&
                                        (this.increment(),
                                        (this.timer = setTimeout(
                                            () => {
                                                this.incrementHandleMouseDown(e, !0);
                                            },
                                            t ? 50 : 300,
                                        )),
                                        this.setState({ activeIncrement: !0 }))));
                        }),
                        (this.decrementHandleMouseDown = (e, t = !1) => {
                            this.buttonDecrementIsDisabled ||
                                (e.persist(),
                                e.preventDefault(),
                                this.stop(),
                                this.setFocusOnInput(),
                                this.state.value > this.props.minimum &&
                                    (!t && this.playClickSound(),
                                    (0 === e.button || t) &&
                                        (this.decrement(),
                                        (this.timer = setTimeout(
                                            () => {
                                                this.decrementHandleMouseDown(e, !0);
                                            },
                                            t ? 50 : 300,
                                        )),
                                        this.setState({ activeDecrement: !0 }))));
                        }),
                        (this.playHoverSound = () => {
                            this.props.isDisabled || (0, p.G)('highlight');
                        }),
                        (this.playClickSound = () => {
                            this.props.isDisabled || (0, p.G)('play');
                        }),
                        (this.stop = () => {
                            (this.timer && clearTimeout(this.timer), (this.timer = null));
                        }));
                }
                componentDidUpdate(e, t) {
                    const s = this.state,
                        n = s.value,
                        a = s.isFocused;
                    if (n !== t.value && a) {
                        const e = this.formattedValue.length,
                            t = this.input.current && this.input.current.selectionStart,
                            s = this.input.current && this.input.current.selectionEnd,
                            n = t === s ? e : t || 0;
                        0 === t && s === e
                            ? this.input.current && this.input.current.setSelectionRange(e, e)
                            : this.input.current && this.input.current.setSelectionRange(n, e);
                    }
                }
                componentWillReceiveProps({ value: e, isFocused: t }) {
                    (e !== this.props.value && this.setState({ value: e }),
                        t !== this.props.isFocused &&
                            (this.setState({ isFocused: t }),
                            t
                                ? (this.setFocusOnInput(), this.setCursorPosition(0, this.formattedValue.length))
                                : this.blurInput()));
                }
                get formattedValue() {
                    return this.formatValue(this.state.value);
                }
                get buttonIncrementIsDisabled() {
                    return this.state.value >= this.props.maximum || this.props.isDisabled;
                }
                get buttonDecrementIsDisabled() {
                    return this.state.value <= this.props.minimum || this.props.isDisabled;
                }
                render() {
                    const e = this.props,
                        t = e.isDisabled,
                        s = e.size,
                        n = o()(
                            H.base,
                            t && H.base__isDisabled,
                            this.state.isFocused && H.base__isFocus,
                            H[`base__${s}`],
                        ),
                        i = o()(H.buttonIncrement, this.buttonIncrementIsDisabled && H.buttonIncrement__isDisabled),
                        r = o()(H.buttonDecrement, this.buttonDecrementIsDisabled && H.buttonDecrement__isDisabled),
                        c = o()(H.input, t && H.input__disabled);
                    return a().createElement(
                        'div',
                        { className: n, ref: this.numericalStepper },
                        a().createElement(
                            'div',
                            { className: H.inputContainer },
                            a().createElement('input', {
                                ref: this.input,
                                className: c,
                                type: 'text',
                                value: this.formattedValue,
                                maxLength: this.props.maximumLength,
                                disabled: t,
                                onWheel: this.handleWheel,
                                onChange: this.handleChange,
                                onKeyPress: this.allowOnlyNumbers,
                                onKeyDown: this.handleKeyDown,
                                onKeyUp: this.handleKeyUp,
                                onBlur: this.handleBlur,
                                onFocus: this.setFocusOnInput,
                            }),
                        ),
                        a().createElement(
                            'div',
                            { className: H.control },
                            a().createElement('div', {
                                className: i,
                                onClick: this.setFocusOnInput,
                                onMouseUp: this.handleMouseUp,
                                onMouseLeave: this.handleMouseLeave,
                                onMouseEnter: this.incrementHandleMouseEnter,
                                onMouseDown: this.incrementHandleMouseDown,
                            }),
                            a().createElement('div', {
                                className: r,
                                onClick: this.setFocusOnInput,
                                onMouseUp: this.handleMouseUp,
                                onMouseLeave: this.handleMouseLeave,
                                onMouseEnter: this.decrementHandleMouseEnter,
                                onMouseDown: this.decrementHandleMouseDown,
                            }),
                        ),
                    );
                }
            }
            let Z;
            ((z.defaultProps = {
                value: 1,
                stepSize: 1,
                minimum: 0,
                maximum: 0,
                isFocused: !0,
                isDisabled: !1,
                onChange: () => null,
                onKeyDown: () => null,
            }),
                (function (e) {
                    ((e.Small = 'small'), (e.Big = 'big'));
                })(Z || (Z = {})));
            const $ = 'CoinBlock_base_16',
                K = 'CoinBlock_coin_21',
                q = 'CoinBlock_godRays_99',
                X = 'CoinBlock_content_1e',
                Y = 'CoinBlock_description_cb',
                j = R.strings.ny.giftMachine.buyTokensBlock,
                J = { base: K, godRays: q },
                Q = (0, m.Pi)(() => {
                    const e = (0, h.tT)(),
                        t = e.model,
                        s = e.controls,
                        n = (0, V.GS)().mediaSize,
                        i = t.tokenCount,
                        o = t.constants;
                    return a().createElement(
                        'div',
                        { className: $ },
                        a().createElement(S, { size: n >= V.cJ.Medium ? w.Medium : w.S180x135, classNames: J }),
                        a().createElement(
                            'div',
                            { className: X },
                            a().createElement('div', { className: Y }, j.description()),
                            a().createElement(z, {
                                value: i.get(),
                                onChange: s.changeTokenCount,
                                minimum: o.MIN_TOKEN_COUNT,
                                maximum: o.MAX_TOKEN_COUNT,
                                maximumLength: 4,
                                size: n >= V.cJ.Medium ? Z.Big : Z.Small,
                            }),
                        ),
                    );
                });
            var ee = s(4254),
                te = s(6766);
            const se = 'ResourcesBlock_base_fd',
                ne = 'ResourcesBlock_price_be',
                ae = 'ResourcesBlock_price__notEnough_4b',
                ie = 'ResourcesBlock_resourceIcon_06',
                oe = (0, m.Pi)(() => {
                    const e = (0, h.tT)(),
                        t = e.model,
                        s = e.controls,
                        n = t.computes,
                        i = t.currentResource,
                        r = !n.isEnoughResources();
                    return a().createElement(
                        'div',
                        { className: se },
                        a().createElement(
                            I.u,
                            {
                                contentId: R.views.lobby.new_year.tooltips.NyMarketLackTheResTooltip('resId'),
                                args: n.getLackResourcesTooltipArgs(),
                                isEnabled: r,
                            },
                            a().createElement(
                                'div',
                                null,
                                a().createElement(ee._z, {
                                    value: n.totalPrice(),
                                    type: i.get(),
                                    size: ee.q4.s32,
                                    isReverse: !0,
                                    classNames: { value: o()(ne, r && ae), icon: ie },
                                }),
                            ),
                        ),
                        a().createElement(te._, {
                            resources: n.resourcesTypes(),
                            currentResource: i.get(),
                            switchResource: s.changeResourceType,
                        }),
                    );
                }),
                re = R.strings.ny.giftMachine.buyTokensBlock,
                ce = (0, m.Pi)(() => {
                    const e = (0, h.tT)(),
                        t = e.model,
                        s = e.controls,
                        n = t.tokenCount,
                        i = t.computes,
                        o = t.root.get().isWalletAvailable,
                        r = 0 === n.get() || !i.isEnoughResources() || !o;
                    return a().createElement(
                        'div',
                        { className: P },
                        a().createElement('div', { className: B }, re.title()),
                        a().createElement('div', { className: O }, a().createElement(Q, null)),
                        a().createElement('div', { className: B }, re.resourcesTitle()),
                        a().createElement('div', { className: F }, a().createElement(oe, null)),
                        a().createElement(
                            I.u,
                            {
                                contentId: R.views.lobby.new_year.tooltips.NyMarketLackTheResTooltip('resId'),
                                args: i.getLackResourcesTooltipArgs(),
                                isEnabled: !i.isEnoughResources(),
                            },
                            a().createElement(
                                'div',
                                { className: L },
                                a().createElement(
                                    A.u5,
                                    { onClick: s.buyTokens, size: A.qE.medium, disabled: r, mixClass: U },
                                    re.button(),
                                ),
                            ),
                        ),
                    );
                });
            var le = s(9690),
                ue = s(3649);
            const me = 'Condition_base_d4',
                _e = 'Condition_status_ca',
                de = 'Condition_check_9d',
                he = 'Condition_point_7c',
                pe = ({ text: e, isCompleted: t, className: s }) =>
                    a().createElement(
                        'div',
                        { className: o()(me, s) },
                        a().createElement(
                            'div',
                            { className: _e },
                            t
                                ? a().createElement('div', { className: de })
                                : a().createElement('div', { className: he }),
                        ),
                        (0, ue.z4)(e),
                    ),
                be = 'PurchaseUnavailable_base_07',
                ve = 'PurchaseUnavailable_wrapper_5d',
                ge = 'PurchaseUnavailable_title_77',
                Ee = 'PurchaseUnavailable_conditionList_5f',
                Ne = 'PurchaseUnavailable_conditionItem_fc',
                fe = 'PurchaseUnavailable_buttonWrapper_5a',
                ye = R.strings.ny.giftMachine.purchaseUnavailable,
                Ce = (0, m.Pi)(() => {
                    const e = (0, h.tT)(),
                        t = e.model,
                        s = e.controls,
                        n = t.root.get(),
                        i = n.isMaxAtmosphereLevel,
                        o = n.isGuestQuestsCompleted;
                    return a().createElement(
                        'div',
                        { className: be },
                        a().createElement(
                            'div',
                            { className: ve },
                            a().createElement('div', { className: ge }, ye.infoBlock.title()),
                            a().createElement('div', { className: Ee }, ye.infoBlock.description()),
                            a().createElement(
                                'div',
                                { className: fe },
                                a().createElement(r.A, {
                                    caption: ye.infoBlock.button(),
                                    side: 'right',
                                    type: 'forward',
                                    onClick: s.goToVillage,
                                }),
                            ),
                        ),
                        a().createElement(
                            'div',
                            { className: ve },
                            a().createElement('div', { className: ge }, ye.conditions.title()),
                            a().createElement(
                                'div',
                                { className: Ee },
                                a().createElement(pe, {
                                    text: (0, ue.uF)(ye.conditions.maxAtmosphereLevel(), { level: (0, le.HG)(10) }),
                                    isCompleted: i,
                                    className: Ne,
                                }),
                                a().createElement(pe, {
                                    text: ye.conditions.challengeCompetedGuest(),
                                    isCompleted: o,
                                    className: Ne,
                                }),
                            ),
                            a().createElement(
                                'div',
                                { className: fe },
                                a().createElement(r.A, {
                                    caption: ye.conditions.button(),
                                    side: 'right',
                                    type: 'forward',
                                    onClick: s.goToChallengeGuest,
                                }),
                            ),
                        ),
                    );
                }),
                we = 'Purchase_base_89',
                Se = 'Purchase_base__indent_33',
                ke = 'Purchase_logo_0e',
                Me = 'Purchase_logo__small_78',
                De = 'Purchase_buyTokens_a4',
                xe = 'Purchase_intro_55',
                Te = (0, m.Pi)(({ className: e }) => {
                    const t = (0, h.tT)().model.computes.isPurchaseAvailable();
                    return a().createElement(
                        'div',
                        { className: o()(we, t && Se, e) },
                        a().createElement('div', { className: o()(ke, t && Me) }),
                        t
                            ? a().createElement('div', { className: De }, a().createElement(ce, null))
                            : a().createElement('div', { className: xe }, a().createElement(Ce, null)),
                    );
                });
            var Re = s(9766);
            const Ae = 'TankName_base_c0',
                Ie = 'TankName_type_3c',
                Pe = 'TankName_type__elite_c7',
                Be = R.images.gui.maps.icons.vehicleTypes.big,
                Oe = ({
                    vehicleName: e,
                    vehicleImagePath: t,
                    vehicleLvl: s,
                    classNames: n,
                    vehicleType: i = '',
                    isElite: r = !1,
                }) => {
                    const c = t || Be.$dyn((0, ue.BN)(i));
                    return a().createElement(
                        'div',
                        { className: o()(Ae, n && n.base) },
                        s,
                        a().createElement('div', {
                            className: o()(!t && Ie, !t && r && Pe, n && n.icon),
                            style: { backgroundImage: `url(${c})` },
                        }),
                        e,
                    );
                },
                Fe = 'VehiclePreview_base_80',
                Le = 'VehiclePreview_vignette_ec',
                Ue = 'VehiclePreview_content_44',
                Ve = 'VehiclePreview_base__visible_f4',
                Ge = 'VehiclePreview_typeIcon_c9',
                We = 'VehiclePreview_rent_9d',
                He = 'VehiclePreview_clockIcon_bc',
                ze = 'VehiclePreview_buttons_f8',
                Ze = 'VehiclePreview_button_42',
                $e = R.strings.ny.giftMachine.vehiclePreview,
                Ke = (0, m.Pi)(({ visible: e }) => {
                    const t = (0, h.tT)(),
                        s = t.model,
                        n = t.controls,
                        i = s.root.get().isInSquad,
                        r = s.vehiclePreview.get(),
                        c = r.rentDays,
                        l = r.rentBattles,
                        u = s.vehicleInfo.get(),
                        m = u.vehicleLvl,
                        _ = u.vehicleName,
                        d = u.vehicleType,
                        p = u.isElite;
                    return a().createElement(
                        'div',
                        { className: o()(Fe, e && Ve) },
                        a().createElement('div', { className: Le }),
                        a().createElement(
                            'div',
                            { className: Ue },
                            _ &&
                                a().createElement(Oe, {
                                    classNames: { icon: Ge },
                                    vehicleName: _,
                                    vehicleLvl: (0, le.HG)(m),
                                    vehicleType: `${d}${p ? '_elite' : ''}`,
                                    isElite: p,
                                }),
                            c > 0 &&
                                a().createElement(Re.z, {
                                    text: R.strings.ny.giftMachine.rentDays(),
                                    binding: { clockIcon: a().createElement('span', { className: He }), days: c },
                                    classMix: We,
                                }),
                            l > 0 &&
                                a().createElement(Re.z, {
                                    text: R.strings.ny.giftMachine.rentBattles(),
                                    binding: { clockIcon: a().createElement('span', { className: He }), battles: l },
                                    classMix: We,
                                }),
                            a().createElement(
                                'div',
                                { className: ze },
                                a().createElement(
                                    A.u5,
                                    { size: A.qE.medium, onClick: n.backFromVehiclePreview, mixClass: Ze },
                                    $e.button.continue(),
                                ),
                                a().createElement(
                                    A.u5,
                                    { type: A.L$.secondary, size: A.qE.medium, onClick: n.goToHangar, mixClass: Ze },
                                    i ? $e.button.goToHangar() : $e.button.lookInHangar(),
                                ),
                            ),
                        ),
                    );
                }),
                qe = {
                    base: 'Vignette_base_86',
                    right: 'Vignette_right_65',
                    right__normal: 'Vignette_right__normal_7f',
                    base__buyTokens: 'Vignette_base__buyTokens_93',
                    right__wide: 'Vignette_right__wide_f3',
                },
                Xe = (0, m.Pi)(() => {
                    const e = (0, h.tT)().model.root.get().machineState;
                    return a().createElement(
                        'div',
                        { className: o()(qe.base, qe[`base__${e}`]) },
                        a().createElement('div', { className: o()(qe.right, qe.right__normal) }),
                        a().createElement('div', { className: o()(qe.right, qe.right__wide) }),
                    );
                }),
                Ye = {
                    base: 'App_base_d5',
                    sceneWrapper: 'App_sceneWrapper_f6',
                    close: 'App_close_92',
                    base__cameraSwitching: 'App_base__cameraSwitching_8a',
                    vignette: 'App_vignette_22',
                    base__specialRewardPreview: 'App_base__specialRewardPreview_7c',
                    base__specialReward: 'App_base__specialReward_f2',
                    base__specialRewardPrequel: 'App_base__specialRewardPrequel_bb',
                    arrowButton: 'App_arrowButton_c8',
                    arrowButton__toBuyTokens: 'App_arrowButton__toBuyTokens_e2',
                    base__idle: 'App_base__idle_53',
                    base__reward: 'App_base__reward_58',
                    base__rareReward: 'App_base__rareReward_1b',
                    base__error: 'App_base__error_80',
                    arrowButton__toIdle: 'App_arrowButton__toIdle_14',
                    base__buyTokens: 'App_base__buyTokens_59',
                    purchase: 'App_purchase_f2',
                    vehiclePreview: 'App_vehiclePreview_9a',
                    hint: 'App_hint_e4',
                    hint__visible: 'App_hint__visible_75',
                },
                je = R.strings.ny.giftMachine,
                Je = (0, m.Pi)(() => {
                    const e = (0, h.tT)(),
                        t = e.model,
                        s = e.controls,
                        i = t.computes,
                        m = t.root.get(),
                        p = m.machineState,
                        b = m.isMoveSpaceEnable,
                        v = m.isCameraSwitching,
                        g = m.isNeededShowHint,
                        E = i.isCloseVisible(),
                        N = i.isAnimState(),
                        f = i.isOnSpecialReward(),
                        y = i.canClose(),
                        C = i.isHintVisible(),
                        w = (0, n.useCallback)(() => {
                            (g && s.hintClose(), s.onSkipAnimation());
                        }, [s, g]);
                    return (
                        (0, l.gd)(
                            u.n.ESCAPE,
                            () => {
                                E ? s.goToIdle() : N ? w() : f && !v && s.goToHangar();
                            },
                            y,
                        ),
                        ((e, t = !1) => {
                            const s = (0, n.useCallback)(
                                    (s) => {
                                        (s.keyCode !== u.n.SPACE && s.keyCode !== u.n.ENTER) ||
                                            (e(s), t && s.stopPropagation());
                                    },
                                    [e, t],
                                ),
                                a = (0, n.useCallback)(
                                    (s) => {
                                        0 === s.button && (e(s), t && s.stopPropagation());
                                    },
                                    [e, t],
                                );
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('keydown', s, t),
                                    window.addEventListener('mousedown', a, t),
                                    () => {
                                        (window.removeEventListener('keydown', s, t),
                                            window.removeEventListener('mousedown', a, t));
                                    }
                                ),
                                [s, a, t],
                            );
                        })(() => {
                            N && w();
                        }),
                        a().createElement(
                            'div',
                            { className: o()(Ye.base, Ye[`base__${p}`], v && Ye.base__cameraSwitching) },
                            a().createElement(
                                'div',
                                { className: Ye.sceneWrapper },
                                a().createElement(d.w, {
                                    moveSpace: s.onMoveSpace,
                                    onMouseOver3dScene: s.onMouseOver3dScene,
                                    isMoveSpaceEnabled: b,
                                }),
                            ),
                            a().createElement('div', { className: Ye.vignette }, a().createElement(Xe, null)),
                            E &&
                                a().createElement(
                                    'div',
                                    { className: Ye.close },
                                    a().createElement(r.A, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: s.goToIdle,
                                    }),
                                ),
                            a().createElement(
                                'div',
                                { className: o()(Ye.arrowButton, Ye.arrowButton__toBuyTokens) },
                                a().createElement(T, {
                                    text: je.arrow.goToBuyTokens(),
                                    direction: x.Right,
                                    type: D.WithCoin,
                                    hasTokens: i.hasTokens(),
                                    onClick: s.goToBuyTokens,
                                }),
                            ),
                            a().createElement(
                                'div',
                                { className: o()(Ye.arrowButton, Ye.arrowButton__toIdle) },
                                a().createElement(T, {
                                    text: je.arrow.goToGiftMachine(),
                                    direction: x.Left,
                                    type: D.TextOnly,
                                    onClick: s.goToIdle,
                                }),
                            ),
                            a().createElement(Te, { className: Ye.purchase }),
                            a().createElement(
                                'div',
                                { className: Ye.vehiclePreview },
                                a().createElement(Ke, { visible: p === c.a.SpecialRewardPreview && !v }),
                            ),
                            g &&
                                a().createElement(
                                    'div',
                                    { className: o()(Ye.hint, C && Ye.hint__visible) },
                                    a().createElement(_.x, { text: je.hint(), onClose: s.hintClose }),
                                ),
                        )
                    );
                }),
                Qe = { context: 'model.giftMachineModel' },
                et = () => a().createElement(h.k8, { options: Qe }, a().createElement(Je, null));
        },
        406: (e, t, s) => {
            'use strict';
            s.d(t, { B: () => l });
            var n = s(280),
                a = s(6179),
                i = s.n(a);
            const o = {
                    creamColor: 'FormatTextWithColorTags_creamColor_8f',
                    brownColor: 'FormatTextWithColorTags_brownColor_90',
                    credColor: 'FormatTextWithColorTags_credColor_a7',
                    blueColor: 'FormatTextWithColorTags_blueColor_73',
                    lightBlueColor: 'FormatTextWithColorTags_lightBlueColor_fa',
                    goldColor: 'FormatTextWithColorTags_goldColor_d6',
                    grayColor: 'FormatTextWithColorTags_grayColor_8b',
                    whiteSpanish: 'FormatTextWithColorTags_whiteSpanish_4b',
                    bondColor: 'FormatTextWithColorTags_bondColor_53',
                    yellowColor: 'FormatTextWithColorTags_yellowColor_84',
                },
                r = ['text', 'binding', 'className'];
            function c() {
                return (
                    (c = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var s = arguments[t];
                                  for (var n in s) ({}).hasOwnProperty.call(s, n) && (e[n] = s[n]);
                              }
                              return e;
                          }),
                    c.apply(null, arguments)
                );
            }
            const l = (0, a.memo)((e) => {
                let t = e.text,
                    s = e.binding,
                    a = e.className,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var s = {};
                        for (var n in e)
                            if ({}.hasOwnProperty.call(e, n)) {
                                if (t.indexOf(n) >= 0) continue;
                                s[n] = e[n];
                            }
                        return s;
                    })(e, r);
                const u = ((e, t) => {
                        const s =
                                /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                            a = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                            r = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                            c = t ? Object.assign({}, t) : {};
                        let l = s.exec(e),
                            u = e,
                            m = 0;
                        for (; l;) {
                            const d = l[0],
                                h = a.exec(d),
                                p = r.exec(d),
                                b = l[1];
                            if (h && p) {
                                const e = h[0],
                                    s = e + m++ + p[0].replaceAll(')', '') + e;
                                ((u = u.replace(d, `%(${s})`)),
                                    (c[s] = o[e]
                                        ? i().createElement(
                                              'span',
                                              { className: o[e] },
                                              i().createElement(n.z, { text: b, binding: t }),
                                          )
                                        : i().createElement(
                                              'span',
                                              { style: ((_ = e), { color: `#${_}` }) },
                                              i().createElement(n.z, { text: b, binding: t }),
                                          )));
                            }
                            l = s.exec(e);
                        }
                        var _;
                        return [u, c];
                    })(t, s),
                    m = u[0],
                    _ = u[1];
                return i().createElement(n.z, c({ text: m, classMix: a, binding: _ }, l));
            });
        },
        4069: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => c });
            var n = s(6179),
                a = s.n(n),
                i = s(6808);
            const o = [
                'width',
                'height',
                'getSrcByFrame',
                'frameCount',
                'onAnimate',
                'frameTime',
                'initialFrameIndex',
                'loop',
                'state',
                'onAnimationComplete',
            ];
            function r() {
                return (
                    (r = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var s = arguments[t];
                                  for (var n in s) ({}).hasOwnProperty.call(s, n) && (e[n] = s[n]);
                              }
                              return e;
                          }),
                    r.apply(null, arguments)
                );
            }
            const c = (0, n.memo)((e) => {
                let t = e.width,
                    s = e.height,
                    c = e.getSrcByFrame,
                    l = e.frameCount,
                    u = e.onAnimate,
                    m = void 0 === u ? i.Bi : u,
                    _ = e.frameTime,
                    d = void 0 === _ ? 33 : _,
                    h = e.initialFrameIndex,
                    p = void 0 === h ? 0 : h,
                    b = e.loop,
                    v = void 0 === b || b,
                    g = e.state,
                    E = void 0 === g ? 'play' : g,
                    N = e.onAnimationComplete,
                    f = void 0 === N ? i.Bi : N,
                    y = (function (e, t) {
                        if (null == e) return {};
                        var s = {};
                        for (var n in e)
                            if ({}.hasOwnProperty.call(e, n)) {
                                if (t.indexOf(n) >= 0) continue;
                                s[n] = e[n];
                            }
                        return s;
                    })(e, o);
                const C = (0, n.useRef)(null);
                return (
                    (0, n.useEffect)(() => {
                        const e = C.current;
                        if (!e) return;
                        const n = l - 1,
                            a = e.getContext('2d'),
                            i = (n) => {
                                (a.clearRect(0, 0, e.width, e.height), a.drawImage(n, 0, 0, t, s));
                            };
                        if ('stop' === E) {
                            const e = c(0),
                                t = new Image();
                            t.src = e;
                            const s = () => i(t);
                            return (t.addEventListener('load', s), () => t.removeEventListener('load', s));
                        }
                        const o = ((e, t) => {
                                const s = [];
                                for (let n = 0; n < e; n++) {
                                    const e = new Image();
                                    ((e.src = t(n)), s.push(e));
                                }
                                return s;
                            })(l, c),
                            r = ((e, t = 0) => {
                                let s = t;
                                return () => {
                                    const t = s;
                                    return ((s += 1), s > e && (s = 0), t);
                                };
                            })(n, p),
                            u = setInterval(() => {
                                const e = r(),
                                    t = o[e];
                                (i(o[e]), m(e, t), e === n && (f(), v || clearInterval(u)));
                            }, d);
                        return () => clearInterval(u);
                    }, [l, d, c, s, p, v, m, f, E, t]),
                    a().createElement('canvas', r({}, y, { width: t, height: s, ref: C }))
                );
            });
        },
        3604: (e, t, s) => {
            'use strict';
            s.d(t, { x: () => u });
            var n = s(514),
                a = s(6179),
                i = s.n(a),
                o = s(406);
            const r = 'FinishedMessage_base_3a',
                c = 'FinishedMessage_text_01',
                l = 'FinishedMessage_close_07',
                u = ({ onClose: e, text: t }) =>
                    i().createElement(
                        'div',
                        { className: r },
                        i().createElement(o.B, { className: c, text: t }),
                        i().createElement('div', {
                            className: l,
                            onClick: () => {
                                (n.hY.sound(R.sounds.cancelcloseno()), e());
                            },
                            onMouseEnter: () => n.hY.sound(R.sounds.highlight()),
                        }),
                    );
        },
        6766: (e, t, s) => {
            'use strict';
            s.d(t, { _: () => v });
            var n = s(6483),
                a = s.n(n),
                i = s(2056),
                o = s(7727),
                r = s(6179),
                c = s.n(r),
                l = s(4254);
            const u = 'Resources_base_aa',
                m = 'Resources_item_98',
                _ = 'Resources_item__active_4b',
                d = 'Resources_check_ac',
                h = 'Resources_iconCheck_26',
                p = 'Resources_glowBox_2d',
                b = 'Resources_glow_ed',
                v = ({ resources: e, currentResource: t, switchResource: s, resourceSize: n, classNames: r }) => {
                    const v = null != n ? n : l.q4.s28;
                    return c().createElement(
                        'div',
                        { className: u },
                        e.map((e, n) =>
                            c().createElement(
                                i.u,
                                {
                                    key: n,
                                    contentId: R.views.lobby.new_year.tooltips.NyResourceTooltip('resId'),
                                    args: { type: e },
                                },
                                c().createElement(
                                    'div',
                                    {
                                        onClick: () => {
                                            var n;
                                            (n = e) !== t && (s(n), (0, o.G)(R.sounds.hangar_newyear_hud_side_click()));
                                        },
                                        onMouseEnter: () => {
                                            e !== t && o.$.playHighlight();
                                        },
                                        className: a()(m, e === t && _, null == r ? void 0 : r.item),
                                    },
                                    c().createElement(
                                        'div',
                                        { className: p },
                                        c().createElement('div', { className: b }),
                                    ),
                                    c().createElement(l._z, { type: e, size: v }),
                                    c().createElement(
                                        'div',
                                        { className: d },
                                        c().createElement('div', { className: h }),
                                    ),
                                ),
                            ),
                        ),
                    );
                };
        },
        545: (e, t, s) => {
            'use strict';
            s.d(t, { w: () => u });
            var n = s(6483),
                a = s.n(n),
                i = s(6179),
                o = s.n(i);
            const r = 'SceneWrapper_base_85',
                c = 'SceneWrapper_base__down_fc',
                l = 'SceneWrapper_base__moveSpaceDisabled_67',
                u = ({
                    children: e,
                    moveSpace: t,
                    onMouseOver3dScene: s,
                    onDragStateChange: n,
                    isMoveSpaceEnabled: u = !0,
                }) => {
                    const m = (0, i.useState)(!1),
                        _ = m[0],
                        d = m[1],
                        h = (0, i.useState)({ x: 0, y: 0 }),
                        p = h[0],
                        b = h[1],
                        v = (0, i.createRef)(),
                        g = (0, i.useCallback)(() => {
                            (d(!1), null == n || n(!1));
                        }, [n]);
                    (0, i.useEffect)(
                        () => (window.addEventListener('mouseup', g), () => window.removeEventListener('mouseup', g)),
                        [g],
                    );
                    const E = (0, i.useCallback)(
                            (e) => {
                                if (!v.current) return;
                                const t = v.current.getBoundingClientRect(),
                                    s = t.width,
                                    n = t.height;
                                return !(
                                    0 === e.clientX ||
                                    0 === e.clientY ||
                                    e.clientX >= s - 1 ||
                                    e.clientY >= n - 1
                                );
                            },
                            [v],
                        ),
                        N = (0, i.useCallback)(
                            (e) => {
                                (e.preventDefault(),
                                    0 === e.button &&
                                        E(e) &&
                                        u &&
                                        (d(!0), null == n || n(!0), b({ x: e.clientX, y: e.clientY })));
                            },
                            [E, u, n],
                        ),
                        f = (0, i.useCallback)(
                            (e) => {
                                if ((e.preventDefault(), _)) {
                                    if (!E(e)) return;
                                    const s = e.clientX !== p.x ? e.clientX - p.x : 0,
                                        n = e.clientY !== p.y ? e.clientY - p.y : 0;
                                    (b({ x: e.clientX, y: e.clientY }), t({ dx: s, dy: n, dz: 0 }));
                                }
                            },
                            [E, _, p.x, p.y, t],
                        ),
                        y = (0, i.useCallback)(
                            (e) => {
                                if ((e.preventDefault(), !u || !E(e))) return;
                                const s = e.deltaY < 0;
                                t({ dx: 0, dy: 0, dz: s ? -600 : 600 });
                            },
                            [E, u, t],
                        ),
                        C = (0, i.useCallback)(() => {
                            (d(!1), null == n || n(!1));
                        }, [n]),
                        w = (0, i.useCallback)(
                            (e) => {
                                (0 === e.buttons && _ && (d(!1), null == n || n(!1)), s({ isOver3dScene: !0 }));
                            },
                            [n, s, _],
                        ),
                        S = (0, i.useCallback)(() => {
                            s({ isOver3dScene: !1 });
                        }, [s]);
                    return o().createElement(
                        'div',
                        {
                            ref: v,
                            className: a()(r, _ && c, !u && l),
                            onMouseDown: N,
                            onMouseMove: f,
                            onMouseUp: C,
                            onWheel: y,
                            onMouseOver: w,
                            onMouseOut: S,
                        },
                        e,
                    );
                };
        },
        6880: (e, t, s) => {
            'use strict';
            s.d(t, { Z: () => n });
            const n = {
                base: 'CButton_base_40',
                base__main: 'CButton_base__main_42',
                base__primary: 'CButton_base__primary_7f',
                base__primaryGreen: 'CButton_base__primaryGreen_6f',
                base__primaryRed: 'CButton_base__primaryRed_ec',
                base__secondary: 'CButton_base__secondary_50',
                base__ghost: 'CButton_base__ghost_ed',
                base__extraSmall: 'CButton_base__extraSmall_27',
                base__small: 'CButton_base__small_df',
                base__medium: 'CButton_base__medium_74',
                base__large: 'CButton_base__large_5c',
                base__disabled: 'CButton_base__disabled_d9',
                back: 'CButton_back_e5',
                texture: 'CButton_texture_fe',
                state: 'CButton_state_11',
                base__focus: 'CButton_base__focus_83',
                stateHighlightHover: 'CButton_stateHighlightHover_ff',
                stateHighlightActive: 'CButton_stateHighlightActive_35',
                stateDisabled: 'CButton_stateDisabled_54',
                base__highlightActive: 'CButton_base__highlightActive_b2',
                content: 'CButton_content_cc',
            };
        },
        5287: (e, t, s) => {
            'use strict';
            s.d(t, { Z: () => n });
            const n = { base: 'FormatText_base_d0' };
        },
    },
]);
