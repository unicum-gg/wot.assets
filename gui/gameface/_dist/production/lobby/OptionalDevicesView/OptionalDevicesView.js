/*! For license information please see OptionalDevicesView.js.LICENSE.txt */
(() => {
    var __webpack_modules__ = {
            8380: (e) => {
                'use strict';
                function u(e) {
                    return getComputedStyle(e);
                }
                function t(e, u) {
                    for (var t in u) {
                        var n = u[t];
                        ('number' == typeof n && (n += 'px'), (e.style[t] = n));
                    }
                    return e;
                }
                function n(e) {
                    var u = document.createElement('div');
                    return ((u.className = e), u);
                }
                var r =
                    'undefined' != typeof Element &&
                    (Element.prototype.matches ||
                        Element.prototype.webkitMatchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector);
                function i(e, u) {
                    if (!r) throw new Error('No element matching method supported');
                    return r.call(e, u);
                }
                function o(e) {
                    e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e);
                }
                function a(e, u) {
                    return Array.prototype.filter.call(e.children, function (e) {
                        return i(e, u);
                    });
                }
                var l = function (e) {
                        return 'ps__thumb-' + e;
                    },
                    s = function (e) {
                        return 'ps__rail-' + e;
                    },
                    c = function (e) {
                        return 'ps__button-start-' + e;
                    },
                    d = function (e) {
                        return 'ps__track_' + e;
                    },
                    E = function (e) {
                        return 'ps__button-end-' + e;
                    },
                    _ = 'ps__child--consume',
                    m = 'ps--focus',
                    A = 'ps--clicking',
                    h = function (e) {
                        return 'ps--active-' + e;
                    },
                    F = function (e) {
                        return 'ps--scrolling-' + e;
                    },
                    D = { x: null, y: null },
                    B = { immediately: !1 };
                function g(e, u, t) {
                    void 0 === t && (t = {});
                    var n = e.element.classList,
                        r = F(u);
                    n.contains(r) ? clearTimeout(D[u]) : n.add(r);
                }
                function C(e, u, t) {
                    (void 0 === t && (t = {}),
                        Object.assign(B, t).immediately
                            ? e.isAlive && e.element.classList.remove(F(u))
                            : (D[u] = setTimeout(function () {
                                  return e.isAlive && e.element.classList.remove(F(u));
                              }, e.settings.scrollingThreshold)));
                }
                var p = function (e) {
                        ((this.element = e), (this.handlers = {}));
                    },
                    b = { isEmpty: { configurable: !0 } };
                ((p.prototype.bind = function (e, u) {
                    (void 0 === this.handlers[e] && (this.handlers[e] = []),
                        this.handlers[e].push(u),
                        this.element.addEventListener(e, u, !1));
                }),
                    (p.prototype.unbind = function (e, u) {
                        var t = this;
                        this.handlers[e] = this.handlers[e].filter(function (n) {
                            return !(!u || n === u) || (t.element.removeEventListener(e, n, !1), !1);
                        });
                    }),
                    (p.prototype.unbindAll = function () {
                        for (var e in this.handlers) this.unbind(e);
                    }),
                    (b.isEmpty.get = function () {
                        var e = this;
                        return Object.keys(this.handlers).every(function (u) {
                            return 0 === e.handlers[u].length;
                        });
                    }),
                    Object.defineProperties(p.prototype, b));
                var f = function () {
                    this.eventElements = [];
                };
                function v(e) {
                    return parseInt(e, 10) || 0;
                }
                ((f.prototype.eventElement = function (e) {
                    var u = this.eventElements.filter(function (u) {
                        return u.element === e;
                    })[0];
                    return (u || ((u = new p(e)), this.eventElements.push(u)), u);
                }),
                    (f.prototype.bind = function (e, u, t) {
                        this.eventElement(e).bind(u, t);
                    }),
                    (f.prototype.unbind = function (e, u, t) {
                        var n = this.eventElement(e);
                        (n.unbind(u, t), n.isEmpty && this.eventElements.splice(this.eventElements.indexOf(n), 1));
                    }),
                    (f.prototype.unbindAll = function () {
                        (this.eventElements.forEach(function (e) {
                            return e.unbindAll();
                        }),
                            (this.eventElements = []));
                    }),
                    (f.prototype.once = function (e, u, t) {
                        var n = this.eventElement(e);
                        n.bind(u, function e(r) {
                            (n.unbind(u, e), t(r));
                        });
                    }));
                var w = {
                    isWebKit: 'undefined' != typeof document && 'WebkitAppearance' in document.documentElement.style,
                    supportsTouch:
                        'undefined' != typeof window &&
                        ('ontouchstart' in window ||
                            (window.DocumentTouch && document instanceof window.DocumentTouch)),
                    supportsIePointer: 'undefined' != typeof navigator && navigator.msMaxTouchPoints,
                    isChrome: 'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent),
                };
                function x() {
                    return new Promise(function (e) {
                        requestAnimationFrame(function () {
                            requestAnimationFrame(function () {
                                e();
                            });
                        });
                    });
                }
                function y(e) {
                    if ('function' == typeof window.CustomEvent) return new CustomEvent(e);
                    var u = document.createEvent('CustomEvent');
                    return (u.initCustomEvent(e, !1, !1, void 0), u);
                }
                var L = function (e, u, t, n, r, i) {
                        var o;
                        if ((void 0 === n && (n = !0), void 0 === r && (r = !1), void 0 === i && (i = !1), 'top' === u))
                            o = ['contentHeight', 'containerHeight', 'scrollTop', 'y', 'up', 'down'];
                        else {
                            if ('left' !== u) throw new Error('A proper axis should be provided');
                            o = ['contentWidth', 'containerWidth', 'scrollLeft', 'x', 'left', 'right'];
                        }
                        !(function (e, u, t, n, r, i) {
                            var o = t[0],
                                a = t[1],
                                l = t[2],
                                s = t[3],
                                c = t[4],
                                d = t[5];
                            (void 0 === n && (n = !0), void 0 === r && (r = !1), void 0 === i && (i = !1));
                            var E = e.element;
                            e.reach &&
                                ((e.reach[s] = null),
                                E[l] < 1 && (e.reach[s] = 'start'),
                                E[l] > e[o] - e[a] - 1 && (e.reach[s] = 'end'),
                                u &&
                                    !r &&
                                    (E.dispatchEvent(y('ps-scroll-' + s)),
                                    u < 0
                                        ? E.dispatchEvent(y('ps-scroll-' + c))
                                        : u > 0 && E.dispatchEvent(y('ps-scroll-' + d)),
                                    n &&
                                        (function (e, u) {
                                            (g(e, u), C(e, u));
                                        })(e, s)),
                                e.reach[s] && (u || i) && E.dispatchEvent(y('ps-' + s + '-reach-' + e.reach[s])));
                        })(e, t, o, n, r, i);
                    },
                    S = function (e, u, n, r) {
                        (void 0 === u && (u = !1), void 0 === n && (n = 0), void 0 === r && (r = !1));
                        var i = e.element;
                        if (i) {
                            if (
                                ((e.containerWidth = Math.round(i.getBoundingClientRect().width)),
                                (e.containerHeight = Math.round(i.getBoundingClientRect().height)),
                                (e.contentWidth = Math.round(i.scrollWidth) - 2 * n),
                                (e.contentHeight = Math.round(i.scrollHeight)),
                                !r)
                            ) {
                                e.contentWidth = Math.round(i.scrollWidth) - 2 * n;
                                var l = e.contentWidth - e.containerWidth + n;
                                i.scrollLeft < n ? (i.scrollLeft = n) : i.scrollLeft > l && (i.scrollLeft = l);
                            }
                            var c = Math.floor(i.scrollTop),
                                d = Math.floor(i.scrollLeft) - n,
                                E = parseFloat(getComputedStyle(document.documentElement).fontSize);
                            (i.contains(e.scrollbarXRail) ||
                                (a(i, s('x')).forEach(function (e) {
                                    return o(e);
                                }),
                                i.appendChild(e.scrollbarXRail)),
                                i.contains(e.scrollbarYRail) ||
                                    (a(i, s('y')).forEach(function (e) {
                                        return o(e);
                                    }),
                                    i.appendChild(e.scrollbarYRail)),
                                !e.settings.suppressScrollX &&
                                e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth
                                    ? ((e.scrollbarXActive = !0),
                                      (e.railXWidth = e.containerWidth - e.railXMarginWidth * E - 15 * E),
                                      (e.railXRatio = e.containerWidth / e.railXWidth),
                                      (e.scrollbarXWidth = T(e, v((e.railXWidth * e.containerWidth) / e.contentWidth))),
                                      (e.scrollbarXLeft = v(
                                          ((e.negativeScrollAdjustment + d) * (e.railXWidth - e.scrollbarXWidth)) /
                                              (e.contentWidth - e.containerWidth),
                                      )),
                                      e.scrollbarXLeft < 0 && (e.scrollbarXLeft = 0))
                                    : (e.scrollbarXActive = !1),
                                !e.settings.suppressScrollY &&
                                e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight
                                    ? ((e.scrollbarYActive = !0),
                                      (e.railYHeight = e.containerHeight - e.railYMarginHeight * E - 15 * E),
                                      (e.railYRatio = e.containerHeight / e.railYHeight),
                                      (e.scrollbarYHeight = T(
                                          e,
                                          v((e.railYHeight * e.containerHeight) / e.contentHeight),
                                      )),
                                      (e.scrollbarYTop = v(
                                          (c * (e.railYHeight - e.scrollbarYHeight)) /
                                              (e.contentHeight - e.containerHeight),
                                      )))
                                    : (e.scrollbarYActive = !1),
                                e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth &&
                                    (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth),
                                e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight &&
                                    (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight),
                                (function (e, u, n) {
                                    var r = { width: u.railXWidth },
                                        i = Math.floor(e.scrollTop);
                                    (u.isRtl
                                        ? (r.left =
                                              u.negativeScrollAdjustment +
                                              e.scrollLeft +
                                              u.containerWidth -
                                              u.contentWidth)
                                        : (r.left = e.scrollLeft),
                                        u.isScrollbarXUsingBottom
                                            ? (r.bottom = u.scrollbarXBottom - i)
                                            : (r.top = u.scrollbarXTop + i),
                                        t(u.scrollbarXRail, r));
                                    var o = { top: i, height: u.railYHeight };
                                    (u.isScrollbarYUsingRight
                                        ? u.isRtl
                                            ? (o.right =
                                                  u.contentWidth -
                                                  (u.negativeScrollAdjustment + e.scrollLeft) -
                                                  u.scrollbarYRight -
                                                  u.scrollbarYOuterWidth)
                                            : (o.right = u.scrollbarYRight - e.scrollLeft)
                                        : u.isRtl
                                          ? (o.left =
                                                u.negativeScrollAdjustment +
                                                e.scrollLeft +
                                                2 * u.containerWidth -
                                                u.contentWidth -
                                                u.scrollbarYLeft -
                                                u.scrollbarYOuterWidth)
                                          : (o.left = u.scrollbarYLeft + e.scrollLeft),
                                        t(u.scrollbarYRail, o),
                                        t(u.scrollbarX, {
                                            left: u.scrollbarXLeft,
                                            width: u.scrollbarXWidth - u.railBorderXWidth * n,
                                        }),
                                        t(u.scrollbarY, {
                                            top: u.scrollbarYTop,
                                            height: u.scrollbarYHeight - u.railBorderYWidth * n,
                                        }));
                                })(i, e, E),
                                e.scrollbarXButtonStart.classList.toggle('disabled', d < 1),
                                e.scrollbarXButtonEnd.classList.toggle(
                                    'disabled',
                                    d + e.containerWidth >= e.contentWidth,
                                ),
                                e.scrollbarYButtonStart.classList.toggle('disabled', i.scrollTop < 1),
                                e.scrollbarYButtonEnd.classList.toggle(
                                    'disabled',
                                    i.scrollTop + e.containerHeight >= e.contentHeight,
                                ),
                                e.scrollbarXActive
                                    ? (i.classList.add(h('x')), L(e, 'left', d - e.lastScrollLeft, !0, u))
                                    : (i.classList.remove(h('x')),
                                      (e.scrollbarXWidth = 0),
                                      (e.scrollbarXLeft = 0),
                                      (i.scrollLeft = 0)),
                                e.scrollbarYActive
                                    ? (i.classList.add(h('y')), L(e, 'top', i.scrollTop - e.lastScrollTop, !0, u))
                                    : (i.classList.remove(h('y')),
                                      (e.scrollbarYHeight = 0),
                                      (e.scrollbarYTop = 0),
                                      (i.scrollTop = 0)),
                                (e.lastScrollTop = c),
                                (e.lastScrollLeft = d),
                                (e.scrollTopPercent = i.scrollTop / i.scrollHeight),
                                (e.scrollLeftPercent = i.scrollLeft / i.scrollWidth));
                        }
                    };
                function T(e, u) {
                    return (
                        e.settings.minScrollbarLength && (u = Math.max(u, e.settings.minScrollbarLength)),
                        e.settings.maxScrollbarLength && (u = Math.min(u, e.settings.maxScrollbarLength)),
                        u
                    );
                }
                var M = {
                        linear: function (e) {
                            return e;
                        },
                        easeInQuad: function (e) {
                            return e * e;
                        },
                        easeOutQuad: function (e) {
                            return e * (2 - e);
                        },
                        easeInOutQuad: function (e) {
                            return e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1;
                        },
                        easeInCubic: function (e) {
                            return e * e * e;
                        },
                        easeOutCubic: function (e) {
                            return --e * e * e + 1;
                        },
                        easeInOutCubic: function (e) {
                            return e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
                        },
                        easeInQuart: function (e) {
                            return e * e * e * e;
                        },
                        easeOutQuart: function (e) {
                            return 1 - --e * e * e * e;
                        },
                        easeInOutQuart: function (e) {
                            return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
                        },
                        easeInQuint: function (e) {
                            return e * e * e * e * e;
                        },
                        easeOutQuint: function (e) {
                            return 1 + --e * e * e * e * e;
                        },
                        easeInOutQuint: function (e) {
                            return e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e;
                        },
                    },
                    H = { breakBounds: !1, startBound: 0, endBound: 0 },
                    k = function (e) {
                        var u = e.scrollableDomEle,
                            t = e.onAnimationCompleteCallback,
                            n = e.direction,
                            r = e.onRefUpdateCallback,
                            i = e.duration,
                            o = e.cubicBezierPoints,
                            a = e.easingPreset,
                            l = e.scrollAmount,
                            s = e.onCheckForBreakCallback,
                            c = e.boundsInfo;
                        void 0 === c && (c = H);
                        var d = null,
                            E = null,
                            _ = null,
                            m = null,
                            A = u === window,
                            h = ['left', 'right'].indexOf(n) > -1,
                            F = ['right', 'bottom'].indexOf(n) > -1;
                        h
                            ? ((E = A ? 'scrollX' : 'scrollLeft'),
                              (m = A ? 'innerWidth' : 'width'),
                              (_ = 'scrollWidth'))
                            : ((E = A ? 'scrollY' : 'scrollTop'),
                              (m = A ? 'innerHeight' : 'height'),
                              (_ = 'scrollHeight'));
                        var D = u[E],
                            B = (function (e) {
                                var u,
                                    t = e.scrollableDomEle,
                                    n = e.elementLengthProp,
                                    r = e.initialScrollPosition,
                                    i = e.isHorizontalDirection,
                                    o = e.scrollLengthProp,
                                    a = e.direction;
                                if (e.isWindow) {
                                    var l = document.documentElement;
                                    u = i ? l.offsetWidth : l.offsetHeight;
                                } else u = (t[o] - t.getBoundingClientRect()[n]) | 0;
                                return ['left', 'top'].includes(a) ? r : u - r;
                            })({
                                isWindow: A,
                                scrollableDomEle: u,
                                elementLengthProp: m,
                                initialScrollPosition: D,
                                isHorizontalDirection: h,
                                scrollLengthProp: _,
                                direction: n,
                            });
                        !isNaN(l) && l < B && (B = l);
                        var g = function e(n) {
                            if (!s || !s()) {
                                var l = n - d,
                                    _ = (function (e) {
                                        var u = e.easingPreset,
                                            t = e.cubicBezierPoints,
                                            n = e.runTime / e.duration;
                                        if (M.hasOwnProperty(u)) return M[u](n);
                                        if (
                                            t &&
                                            !isNaN(t.x1) &&
                                            !isNaN(t.y1) &&
                                            !isNaN(t.x2) &&
                                            !isNaN(t.y2) &&
                                            t.x1 >= 0 &&
                                            t.x2 >= 0
                                        )
                                            return (function (e) {
                                                var u,
                                                    t = e.percentTimeElapsed,
                                                    n = e.x1,
                                                    r = e.y1,
                                                    i = e.x2,
                                                    o = e.y2;
                                                return (
                                                    1 -
                                                    (n * ((u = t), Math.pow(u, 3)) +
                                                        r *
                                                            (function (e) {
                                                                return 3 * e * e * (1 - e);
                                                            })(t) +
                                                        i *
                                                            (function (e) {
                                                                return 3 * e * Math.pow(1 - e, 2);
                                                            })(t) +
                                                        o *
                                                            (function (e) {
                                                                return Math.pow(1 - e, 3);
                                                            })(t))
                                                );
                                            })({ percentTimeElapsed: n, x1: t.x1, x2: t.x2, y1: t.y1, y2: t.y2 });
                                        throw new Error('Please enter a valid easing value');
                                    })({ easingPreset: a, cubicBezierPoints: o, runTime: l, duration: i });
                                if (!isNaN(_)) {
                                    var m = Math.round(_ * B),
                                        g = F ? m + D : B - m;
                                    if (
                                        (c.breakBounds &&
                                            (g < c.startBound
                                                ? (g = c.startBound)
                                                : g > c.endBound && (g = c.endBound)),
                                        l < i)
                                    ) {
                                        if (A) {
                                            var C = h ? g : 0,
                                                p = h ? 0 : g;
                                            window.scrollTo(C, p);
                                        } else u[E] = g;
                                        (r && r(g), requestAnimationFrame(e));
                                    } else t && t();
                                }
                            }
                        };
                        requestAnimationFrame(function (e) {
                            ((d = e), g(e));
                        });
                    },
                    R = function (e, u, t) {
                        return function (n) {
                            u = u.toLowerCase();
                            var r = null,
                                i = function () {
                                    if (1 === n.buttons) {
                                        if (
                                            !n.target.closest('.ps__rail-' + u) ||
                                            !n.target.closest('.ps__track_' + u)
                                        ) {
                                            var i = (function (e) {
                                                    var u = e.e,
                                                        t = e.i;
                                                    return 'y' === e.axis
                                                        ? {
                                                              cursorPosition: u.screenY,
                                                              windowScrolled: window.pageYOffset,
                                                              elementPosition:
                                                                  t.scrollbarYRail.getBoundingClientRect().top,
                                                          }
                                                        : {
                                                              cursorPosition: u.screenX,
                                                              windowScrolled: window.pageXOffset,
                                                              elementPosition:
                                                                  t.scrollbarXRail.getBoundingClientRect().left,
                                                          };
                                                })({ axis: u, e: n, i: e }),
                                                o = i.cursorPosition - i.windowScrolled - i.elementPosition,
                                                a = (function (e) {
                                                    var u = e.i;
                                                    return e.cursorPositionOnRail >
                                                        ('y' === e.axis ? u.scrollbarYTop : u.scrollbarXLeft)
                                                        ? 1
                                                        : -1;
                                                })({ axis: u, cursorPositionOnRail: o, i: e });
                                            ((function (e) {
                                                var u = e.axis,
                                                    t = e.cursorPositionOnRail,
                                                    n = e.direction,
                                                    r = e.i,
                                                    i = (function (e) {
                                                        var u = e.i,
                                                            t = e.cursorPositionOnRail;
                                                        if ('y' === e.axis) {
                                                            var n = u.scrollbarY.offsetTop,
                                                                r = n + u.scrollbarYHeight;
                                                            return t >= n && t <= r;
                                                        }
                                                        var i = u.scrollbarX.offsetLeft,
                                                            o = i + u.scrollbarXWidth;
                                                        return t >= i && t <= o;
                                                    })({ axis: u, i: r, cursorPositionOnRail: t });
                                                return i
                                                    ? ((function (e) {
                                                          var u = e.axis,
                                                              t = e.i,
                                                              n = e.cursorPositionOnRail,
                                                              r = (function (e, u) {
                                                                  if ('y' === e) {
                                                                      var t = u.contentHeight - u.containerHeight;
                                                                      return {
                                                                          rail: u.railYHeight,
                                                                          content: u.contentHeight,
                                                                          scrollbar: u.scrollbarYHeight,
                                                                          maxScroll: t,
                                                                      };
                                                                  }
                                                                  var n = u.contentWidth - u.containerWidth;
                                                                  return {
                                                                      rail: u.railXWidth,
                                                                      content: u.contentWidth,
                                                                      scrollbar: u.scrollbarXWidth,
                                                                      maxScroll: n,
                                                                  };
                                                              })(u, t),
                                                              i = (n - r.scrollbar / 2) / r.rail,
                                                              o = Math.round(
                                                                  Math.min(r.maxScroll, Math.max(0, r.content * i)),
                                                              );
                                                          'y' === u
                                                              ? (t.element.scrollTop = o)
                                                              : (t.element.scrollLeft = o);
                                                      })({ axis: u, i: r, cursorPositionOnRail: t }),
                                                      !0)
                                                    : ('y' === u
                                                          ? (r.element.scrollTop += n * r.containerHeight)
                                                          : (r.element.scrollLeft += n * r.containerWidth),
                                                      !1);
                                            })({ axis: u, cursorPositionOnRail: o, direction: a, i: e }) &&
                                                clearTimeout(r),
                                                S(e, !1, t));
                                        }
                                        n.stopPropagation();
                                    }
                                };
                            (i(),
                                (r = setInterval(i, 100)),
                                e.event.once(e.ownerDocument, 'mouseup', function () {
                                    clearTimeout(r);
                                }));
                        };
                    };
                function O(e, u, t) {
                    var n = t[0],
                        r = t[1],
                        i = t[2],
                        o = t[3],
                        a = t[4],
                        l = t[5],
                        s = t[6],
                        c = t[7],
                        d = t[8],
                        E = e.element,
                        _ = null,
                        m = null,
                        h = null;
                    function F(t) {
                        ((E[s] = v(_ + h * (t[i] - m))), g(e, c), S(e, !1, u), t.stopPropagation(), t.preventDefault());
                    }
                    function D() {
                        (C(e, c), e[d].classList.remove(A), e.event.unbind(e.ownerDocument, 'mousemove', F));
                    }
                    e.event.bind(e[a], 'mousedown', function (u) {
                        1 === u.buttons &&
                            ((_ = E[s]),
                            (m = u[i]),
                            (h = (e[r] - e[n]) / (e[o] - e[l])),
                            e.event.bind(e.ownerDocument, 'mousemove', F),
                            e.event.once(e.ownerDocument, 'mouseup', D),
                            e[d].classList.add(A),
                            u.stopPropagation(),
                            u.preventDefault());
                    });
                }
                var P = 1e3,
                    N = {
                        'click-rail': function (e, u) {
                            (e.event.bind(e.scrollbarY, 'mousedown', function (e) {
                                return e.stopPropagation();
                            }),
                                e.event.bind(e.scrollbarYRail, 'mousedown', R(e, 'y', 0)),
                                e.event.bind(e.scrollbarX, 'mousedown', function (e) {
                                    return e.stopPropagation();
                                }),
                                e.event.bind(e.scrollbarXRail, 'mousedown', R(e, 'x', u)));
                        },
                        'drag-thumb': function (e, u) {
                            (O(e, u, [
                                'containerWidth',
                                'contentWidth',
                                'screenX',
                                'railXWidth',
                                'scrollbarX',
                                'scrollbarXWidth',
                                'scrollLeft',
                                'x',
                                'scrollbarXRail',
                            ]),
                                O(e, u, [
                                    'containerHeight',
                                    'contentHeight',
                                    'screenY',
                                    'railYHeight',
                                    'scrollbarY',
                                    'scrollbarYHeight',
                                    'scrollTop',
                                    'y',
                                    'scrollbarYRail',
                                ]));
                        },
                        keyboard: function (e, u) {
                            var t = e.element;
                            e.event.bind(e.ownerDocument, 'keydown', function (n) {
                                if (
                                    !((n.isDefaultPrevented && n.isDefaultPrevented()) || n.defaultPrevented) &&
                                    i(t, ':hover')
                                ) {
                                    var r,
                                        o = document.activeElement
                                            ? document.activeElement
                                            : e.ownerDocument.activeElement;
                                    if (o) {
                                        if ('IFRAME' === o.tagName) o = o.contentDocument.activeElement;
                                        else for (; o.shadowRoot;) o = o.shadowRoot.activeElement;
                                        if (
                                            i((r = o), 'input,[contenteditable]') ||
                                            i(r, 'select,[contenteditable]') ||
                                            i(r, 'textarea,[contenteditable]') ||
                                            i(r, 'button,[contenteditable]')
                                        )
                                            return;
                                    }
                                    var a = 0,
                                        l = 0;
                                    switch (n.which) {
                                        case 37:
                                            a = n.metaKey ? -e.contentWidth : n.altKey ? -e.containerWidth : -30;
                                            break;
                                        case 38:
                                            l = n.metaKey ? e.contentHeight : n.altKey ? e.containerHeight : 30;
                                            break;
                                        case 39:
                                            a = n.metaKey ? e.contentWidth : n.altKey ? e.containerWidth : 30;
                                            break;
                                        case 40:
                                            l = n.metaKey ? -e.contentHeight : n.altKey ? -e.containerHeight : -30;
                                            break;
                                        case 32:
                                            l = n.shiftKey ? e.containerHeight : -e.containerHeight;
                                            break;
                                        case 33:
                                            l = e.containerHeight;
                                            break;
                                        case 34:
                                            l = -e.containerHeight;
                                            break;
                                        case 36:
                                            l = e.contentHeight;
                                            break;
                                        case 35:
                                            l = -e.contentHeight;
                                            break;
                                        default:
                                            return;
                                    }
                                    (e.settings.suppressScrollX && 0 !== a) ||
                                        (e.settings.suppressScrollY && 0 !== l) ||
                                        ((t.scrollTop -= l),
                                        (t.scrollLeft += a),
                                        S(e, !1, u),
                                        (function (u, n) {
                                            var r = Math.floor(t.scrollTop);
                                            if (0 === u) {
                                                if (!e.scrollbarYActive) return !1;
                                                if (
                                                    (0 === r && n > 0) ||
                                                    (r >= e.contentHeight - e.containerHeight && n < 0)
                                                )
                                                    return !e.settings.wheelPropagation;
                                            }
                                            var i = t.scrollLeft;
                                            if (0 === n) {
                                                if (!e.scrollbarXActive) return !1;
                                                if (
                                                    (0 === i && u < 0) ||
                                                    (i >= e.contentWidth - e.containerWidth && u > 0)
                                                )
                                                    return !e.settings.wheelPropagation;
                                            }
                                            return !0;
                                        })(a, l) && n.preventDefault());
                                }
                            });
                        },
                        wheel: function (e, t) {
                            var n = e.element;
                            function r(r) {
                                var i = (function (e) {
                                        var u = -1 * e.deltaX,
                                            t = e.deltaY;
                                        return (
                                            (void 0 !== u && void 0 !== t) ||
                                                ((u = (-1 * e.wheelDeltaX) / 6), (t = e.wheelDeltaY / 6)),
                                            e.deltaMode && 1 === e.deltaMode && ((u *= 10), (t *= 10)),
                                            u != u && t != t && ((u = 0), (t = e.wheelDelta)),
                                            e.shiftKey ? [-t, -u] : [u, t]
                                        );
                                    })(r),
                                    o = i[0],
                                    a = i[1];
                                if (
                                    !(function (e, t, r) {
                                        if (!w.isWebKit && n.querySelector('select')) return !0;
                                        if (!n.contains(e)) return !1;
                                        for (var i = e; i && i !== n;) {
                                            if (i.classList.contains(_)) return !0;
                                            var o = u(i);
                                            if (
                                                [o.overflow, o.overflowX, o.overflowY].join('').match(/(scroll|auto)/)
                                            ) {
                                                var a = i.scrollHeight - i.clientHeight;
                                                if (
                                                    a > 0 &&
                                                    !((0 === i.scrollTop && r > 0) || (i.scrollTop === a && r < 0))
                                                )
                                                    return !0;
                                                var l = i.scrollWidth - i.clientWidth;
                                                if (
                                                    l > 0 &&
                                                    !((0 === i.scrollLeft && t < 0) || (i.scrollLeft === l && t > 0))
                                                )
                                                    return !0;
                                            }
                                            i = i.parentNode;
                                        }
                                        return !1;
                                    })(r.target, o, a)
                                ) {
                                    var l = !1,
                                        s = (o * e.settings.wheelSpeed) | 0,
                                        c = (a * e.settings.wheelSpeed) | 0;
                                    (e.settings.useBothWheelAxes
                                        ? e.scrollbarYActive && !e.scrollbarXActive
                                            ? (a ? (n.scrollTop -= c) : (n.scrollTop += s), (l = !0))
                                            : e.scrollbarXActive &&
                                              !e.scrollbarYActive &&
                                              (o ? (n.scrollLeft += s) : (n.scrollLeft -= c), (l = !0))
                                        : ((n.scrollTop -= c), (n.scrollLeft += s)),
                                        S(e, !1, t),
                                        (l =
                                            l ||
                                            (function (u, t) {
                                                var r = Math.floor(n.scrollTop),
                                                    i = 0 === n.scrollTop,
                                                    o = r + n.offsetHeight === n.scrollHeight,
                                                    a = 0 === n.scrollLeft,
                                                    l = n.scrollLeft + n.offsetWidth === n.scrollWidth;
                                                return (
                                                    !(Math.abs(t) > Math.abs(u) ? i || o : a || l) ||
                                                    !e.settings.wheelPropagation
                                                );
                                            })(o, a)),
                                        l && !r.ctrlKey && (r.stopPropagation(), r.preventDefault()));
                                }
                            }
                            (e.event.bind(n, 'wheel', r),
                                void 0 !== window.onmousewheel && e.event.bind(n, 'mousewheel', r));
                        },
                        touch: function (e, t) {
                            if (w.supportsTouch || w.supportsIePointer) {
                                var n = e.element,
                                    r = {},
                                    i = 0,
                                    o = {},
                                    a = null;
                                w.supportsTouch
                                    ? (e.event.bind(n, 'touchstart', d),
                                      e.event.bind(n, 'touchmove', E),
                                      e.event.bind(n, 'touchend', m))
                                    : w.supportsIePointer &&
                                      (window.PointerEvent
                                          ? (e.event.bind(n, 'pointerdown', d),
                                            e.event.bind(n, 'pointermove', E),
                                            e.event.bind(n, 'pointerup', m))
                                          : window.MSPointerEvent &&
                                            (e.event.bind(n, 'MSPointerDown', d),
                                            e.event.bind(n, 'MSPointerMove', E),
                                            e.event.bind(n, 'MSPointerUp', m)));
                            }
                            function l(u, r) {
                                ((n.scrollTop -= r), (n.scrollLeft -= u), S(e, !1, t));
                            }
                            function s(e) {
                                return e.targetTouches ? e.targetTouches[0] : e;
                            }
                            function c(e) {
                                return !(
                                    (e.pointerType && 'pen' === e.pointerType && 0 === e.buttons) ||
                                    ((!e.targetTouches || 1 !== e.targetTouches.length) &&
                                        (!e.pointerType ||
                                            'mouse' === e.pointerType ||
                                            e.pointerType === e.MSPOINTER_TYPE_MOUSE))
                                );
                            }
                            function d(e) {
                                if (c(e)) {
                                    var u = s(e);
                                    ((r.pageX = u.pageX),
                                        (r.pageY = u.pageY),
                                        (i = new Date().getTime()),
                                        null !== a && clearInterval(a));
                                }
                            }
                            function E(t) {
                                if (c(t)) {
                                    var a = s(t),
                                        d = { pageX: a.pageX, pageY: a.pageY },
                                        E = d.pageX - r.pageX,
                                        m = d.pageY - r.pageY;
                                    if (
                                        (function (e, t, r) {
                                            if (!n.contains(e)) return !1;
                                            for (var i = e; i && i !== n;) {
                                                if (i.classList.contains(_)) return !0;
                                                var o = u(i);
                                                if (
                                                    [o.overflow, o.overflowX, o.overflowY]
                                                        .join('')
                                                        .match(/(scroll|auto)/)
                                                ) {
                                                    var a = i.scrollHeight - i.clientHeight;
                                                    if (
                                                        a > 0 &&
                                                        !((0 === i.scrollTop && r > 0) || (i.scrollTop === a && r < 0))
                                                    )
                                                        return !0;
                                                    var l = i.scrollLeft - i.clientWidth;
                                                    if (
                                                        l > 0 &&
                                                        !(
                                                            (0 === i.scrollLeft && t < 0) ||
                                                            (i.scrollLeft === l && t > 0)
                                                        )
                                                    )
                                                        return !0;
                                                }
                                                i = i.parentNode;
                                            }
                                            return !1;
                                        })(t.target, E, m)
                                    )
                                        return;
                                    (l(E, m), (r = d));
                                    var A = new Date().getTime(),
                                        h = A - i;
                                    (h > 0 && ((o.x = E / h), (o.y = m / h), (i = A)),
                                        (function (u, t) {
                                            var r = Math.floor(n.scrollTop),
                                                i = n.scrollLeft,
                                                o = Math.abs(u),
                                                a = Math.abs(t);
                                            if (a > o) {
                                                if (
                                                    (t < 0 && r === e.contentHeight - e.containerHeight) ||
                                                    (t > 0 && 0 === r)
                                                )
                                                    return 0 === window.scrollY && t > 0 && w.isChrome;
                                            } else if (
                                                o > a &&
                                                ((u < 0 && i === e.contentWidth - e.containerWidth) ||
                                                    (u > 0 && 0 === i))
                                            )
                                                return !0;
                                            return !0;
                                        })(E, m) && t.preventDefault());
                                }
                            }
                            function m() {
                                e.settings.swipeEasing &&
                                    (clearInterval(a),
                                    (a = setInterval(function () {
                                        e.isInitialized
                                            ? clearInterval(a)
                                            : o.x || o.y
                                              ? Math.abs(o.x) < 0.01 && Math.abs(o.y) < 0.01
                                                  ? clearInterval(a)
                                                  : (l(30 * o.x, 30 * o.y), (o.x *= 0.8), (o.y *= 0.8))
                                              : clearInterval(a);
                                    }, 10)));
                            }
                        },
                        'drag-move': function (e, u) {
                            void 0 === u && (u = 0);
                            var t = e.element,
                                n = null,
                                r = !1,
                                i = 0,
                                o = 0,
                                a = 0;
                            function l() {
                                e.onScroll();
                            }
                            function s(n, r, i, o) {
                                (void 0 === i && (i = null),
                                    void 0 === o && (o = !1),
                                    k({
                                        scrollableDomEle: t,
                                        direction: 'right',
                                        onRefUpdateCallback: l,
                                        duration: r,
                                        easingPreset: 'easeOutCubic',
                                        scrollAmount: n,
                                        onCheckForBreakCallback: i,
                                        boundsInfo: {
                                            breakBounds: o,
                                            startBound: u,
                                            endBound: e.contentWidth - e.containerWidth + u,
                                        },
                                    }));
                            }
                            function c() {
                                if (r) return r;
                            }
                            function d() {
                                a = 0;
                            }
                            function E(r) {
                                if (e.scrollbarXActive) {
                                    var l = n - r.screenX;
                                    ((t.scrollLeft += l), (n = r.screenX));
                                    var s = new Date().getTime();
                                    if (((i = (l / (s - o)) * 1e3), (o = s), e.onScroll(), u > 0)) {
                                        var c = e.contentWidth - e.containerWidth + 2 * u;
                                        0 === t.scrollLeft || t.scrollLeft === c
                                            ? 0 === a && (a = window.setTimeout(d, 250))
                                            : 0 !== a && (window.clearTimeout(a), (a = 0));
                                    }
                                    (g(e, 'x'),
                                        g(e, 'dragging', { immediately: !0 }),
                                        r.stopPropagation(),
                                        r.preventDefault());
                                }
                            }
                            function _(e) {
                                ((n = e.screenX),
                                    (r = !0),
                                    requestAnimationFrame(function () {
                                        r = !1;
                                    }),
                                    (o = new Date().getTime()));
                            }
                            function m(n) {
                                var r = e.contentWidth - e.containerWidth + u;
                                (t.scrollLeft < u
                                    ? s(u - t.scrollLeft, P, c)
                                    : t.scrollLeft > r
                                      ? s(r - t.scrollLeft, P, c)
                                      : new Date().getTime() - o < 100 && s(i / 4, P, c, !0),
                                    C(e, 'x'),
                                    C(e, 'dragging', { immediately: !0 }),
                                    e.scrollbarXRail.classList.remove(A),
                                    e.event.unbind(e.ownerDocument, 'mousemove', E));
                            }
                            function h() {
                                r = !0;
                            }
                            t.addEventListener(
                                'mousedown',
                                function (u) {
                                    1 === u.buttons &&
                                        ((n = u.screenX),
                                        e.event.bind(e.ownerDocument, 'mousemove', E),
                                        e.event.once(e.ownerDocument, 'mouseup', m),
                                        e.event.once(e.ownerDocument, 'mousedown', _),
                                        e.event.once(t, 'wheel', h),
                                        e.scrollbarXRail.classList.add(A),
                                        u.preventDefault());
                                },
                                !1,
                            );
                        },
                    },
                    W = function (e, r) {
                        var i = this;
                        if (
                            (void 0 === r && (r = {}),
                            'string' == typeof e && (e = document.querySelector(e)),
                            !e || !e.nodeName)
                        )
                            throw new Error('no element is specified to initialize PerfectScrollbar');
                        for (var o in ((this.element = e),
                        e.classList.add('ps'),
                        (this.settings = {
                            handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch', 'drag-move'],
                            maxScrollbarLength: null,
                            minScrollbarLength: null,
                            scrollingThreshold: 1e3,
                            scrollXMarginOffset: 0,
                            scrollYMarginOffset: 0,
                            suppressScrollX: !1,
                            suppressScrollY: !1,
                            swipeEasing: !0,
                            useBothWheelAxes: !1,
                            wheelPropagation: !0,
                            wheelSpeed: 10,
                            enableHorizontalScroll: !1,
                            animationDuration: 1e3,
                            animationEasingPreset: 'easeInOutQuint',
                            isDisableScrollToLastPositionOnResize: !1,
                            overScrollWidth: 0,
                        }),
                        r))
                            i.settings[o] = r[o];
                        ((this.containerWidth = null),
                            (this.containerHeight = null),
                            (this.contentWidth = null),
                            (this.contentHeight = null));
                        var a,
                            _,
                            A = function () {
                                return e.classList.add(m);
                            },
                            h = function () {
                                return e.classList.remove(m);
                            };
                        ((this.isRtl = 'rtl' === u(e).direction),
                            (this.isNegativeScroll =
                                ((_ = e.scrollLeft),
                                (e.scrollLeft = -1),
                                (a = e.scrollLeft < 0),
                                (e.scrollLeft = _),
                                a)),
                            (this.negativeScrollAdjustment = this.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0),
                            (this.event = new f()),
                            (this.ownerDocument = e.ownerDocument || document),
                            (this.scrollbarXRail = n(s('x'))),
                            (this.scrollbarXButtonStart = n(c('x'))),
                            (this.scrollbarXButtonEnd = n(E('x'))),
                            (this.scrollbarXTrack = n(d('x'))),
                            e.appendChild(this.scrollbarXRail),
                            this.scrollbarXRail.appendChild(this.scrollbarXTrack),
                            this.scrollbarXRail.appendChild(this.scrollbarXButtonStart),
                            this.scrollbarXRail.appendChild(this.scrollbarXButtonEnd),
                            (this.scrollbarX = n(l('x'))),
                            this.scrollbarXRail.appendChild(this.scrollbarX),
                            this.scrollbarX.setAttribute('tabindex', 0),
                            this.event.bind(this.scrollbarX, 'focus', A),
                            this.event.bind(this.scrollbarX, 'blur', h),
                            (this.scrollbarXActive = null),
                            (this.scrollbarXWidth = null),
                            (this.scrollbarXLeft = null),
                            (this.scrollbarYRail = n(s('y'))),
                            (this.scrollbarYButtonStart = n(c('y'))),
                            (this.scrollbarYButtonEnd = n(E('y'))),
                            (this.scrollbarYTrack = n(d('y'))),
                            e.appendChild(this.scrollbarYRail),
                            this.scrollbarYRail.appendChild(this.scrollbarYTrack),
                            this.scrollbarYRail.appendChild(this.scrollbarYButtonStart),
                            this.scrollbarYRail.appendChild(this.scrollbarYButtonEnd),
                            (this.scrollbarY = n(l('y'))),
                            this.scrollbarYRail.appendChild(this.scrollbarY),
                            this.scrollbarY.setAttribute('tabindex', 0),
                            this.event.bind(this.scrollbarY, 'focus', A),
                            this.event.bind(this.scrollbarY, 'blur', h),
                            (this.scrollbarYActive = null),
                            (this.scrollbarYHeight = null),
                            (this.scrollbarYTop = null),
                            x().then(function () {
                                var n = u(i.scrollbarXRail);
                                ((i.scrollbarXBottom = parseInt(n.bottom, 10)),
                                    isNaN(i.scrollbarXBottom)
                                        ? ((i.isScrollbarXUsingBottom = !1), (i.scrollbarXTop = v(n.top)))
                                        : (i.isScrollbarXUsingBottom = !0),
                                    (i.railBorderXWidth = v(n.borderLeftWidth) + v(n.borderRightWidth)),
                                    t(i.scrollbarXRail, { display: 'block' }),
                                    (i.railXMarginWidth = v(n.marginLeft) + v(n.marginRight)),
                                    t(i.scrollbarXRail, { display: '' }),
                                    (i.railXWidth = null),
                                    (i.railXRatio = null));
                                var r = u(i.scrollbarYRail);
                                ((i.scrollbarYRight = parseInt(r.right, 10)),
                                    isNaN(i.scrollbarYRight)
                                        ? ((i.isScrollbarYUsingRight = !1), (i.scrollbarYLeft = v(r.left)))
                                        : (i.isScrollbarYUsingRight = !0),
                                    (i.scrollbarYOuterWidth = i.isRtl
                                        ? (function (e) {
                                              var t = u(e);
                                              return (
                                                  v(t.width) +
                                                  v(t.paddingLeft) +
                                                  v(t.paddingRight) +
                                                  v(t.borderLeftWidth) +
                                                  v(t.borderRightWidth)
                                              );
                                          })(i.scrollbarY)
                                        : null),
                                    (i.railBorderYWidth = v(r.borderTopWidth) + v(r.borderBottomWidth)),
                                    t(i.scrollbarYRail, { display: 'block' }),
                                    (i.railYMarginHeight = v(r.marginTop) + v(r.marginBottom)),
                                    t(i.scrollbarXRail, { display: '' }),
                                    t(i.scrollbarYRail, { display: '' }),
                                    (i.railYHeight = null),
                                    (i.railYRatio = null),
                                    (i.reach = {
                                        x:
                                            e.scrollLeft <= 0
                                                ? 'start'
                                                : e.scrollLeft >= i.contentWidth - i.containerWidth
                                                  ? 'end'
                                                  : null,
                                        y:
                                            e.scrollTop <= 0
                                                ? 'start'
                                                : e.scrollTop >= i.contentHeight - i.containerHeight
                                                  ? 'end'
                                                  : null,
                                    }),
                                    (i.isAlive = !0),
                                    i.settings.handlers.forEach(function (e) {
                                        return N[e](i, i.settings.overScrollWidth);
                                    }),
                                    (i.boundHandleButtonEnter = i.handleMouseEnter.bind(i)),
                                    (i.boundHandleMouseLeave = i.handleMouseLeave.bind(i)),
                                    (i.boundHandleMouseEnter = i.handleMouseEnter.bind(i)),
                                    (i.boundPlayClickSound = i.playClickSound.bind(i)),
                                    i.scrollbarYButtonStart.addEventListener('mousedown', i.boundPlayClickSound),
                                    i.scrollbarYButtonEnd.addEventListener('mousedown', i.boundPlayClickSound),
                                    i.scrollbarXButtonStart.addEventListener('mousedown', i.boundPlayClickSound),
                                    i.scrollbarXButtonEnd.addEventListener('mousedown', i.boundPlayClickSound),
                                    i.scrollbarXButtonStart.addEventListener('mouseenter', i.boundHandleMouseEnter),
                                    i.scrollbarXButtonEnd.addEventListener('mouseenter', i.boundHandleMouseEnter),
                                    i.scrollbarYButtonStart.addEventListener('mouseenter', i.boundHandleButtonEnter),
                                    i.scrollbarYButtonEnd.addEventListener('mouseenter', i.boundHandleButtonEnter),
                                    i.scrollbarYButtonStart.addEventListener('mouseleave', i.boundHandleMouseLeave),
                                    i.scrollbarYButtonEnd.addEventListener('mouseleave', i.boundHandleMouseLeave),
                                    i.scrollbarY.addEventListener('mouseenter', i.boundHandleMouseEnter),
                                    i.scrollbarX.addEventListener('mouseenter', i.boundHandleMouseEnter),
                                    i.scrollbarY.addEventListener('mouseleave', i.boundHandleMouseLeave),
                                    i.scrollbarY.addEventListener('mousedown', i.boundPlayClickSound),
                                    i.scrollbarX.addEventListener('mousedown', i.boundPlayClickSound),
                                    (i.lastScrollTop = Math.floor(e.scrollTop)),
                                    (i.lastScrollLeft = e.scrollLeft),
                                    (i.scrollTopPercent = e.scrollTop / e.scrollHeight),
                                    (i.scrollLeftPercent = e.scrollLeft / e.scrollWidth),
                                    i.event.bind(i.element, 'scroll', function (e) {
                                        return i.onScroll(e);
                                    }),
                                    i.settings.enableHorizontalScroll &&
                                        i.event.bind(i.element, 'wheel', function (e) {
                                            return i.onWheel(e);
                                        }),
                                    S(i, !1, i.settings.overScrollWidth, !1));
                            }));
                    };
                ((W.prototype._getAnimationSettings = function (e, u, t, n) {
                    var r = this,
                        i = 0;
                    return (
                        null !== this.element &&
                            (i = ['bottom', 'top'].includes(u) ? this.element.scrollTop : this.element.scrollLeft),
                        {
                            scrollableDomEle: this.element,
                            duration: this.settings.animationDuration,
                            easingPreset: this.settings.animationEasingPreset,
                            scrollAmount: e - i,
                            direction: u,
                            onRefUpdateCallback: function (e) {
                                (S(r, !0, r.settings.overScrollWidth, !1), t && t(e));
                            },
                            onAnimationCompleteCallback: function () {
                                n && n();
                            },
                        }
                    );
                }),
                    (W.prototype.playHoverSound = function () {
                        window.engine && engine.call('PlaySound', 'highlight');
                    }),
                    (W.prototype.playClickSound = function () {
                        window.engine && engine.call('PlaySound', 'play');
                    }),
                    (W.prototype.handleMouseEnter = function () {
                        this.playHoverSound();
                    }),
                    (W.prototype.handleMouseLeave = function () {}),
                    (W.prototype.update = function () {
                        var e = this;
                        this.isAlive &&
                            ((this.negativeScrollAdjustment = this.isNegativeScroll
                                ? this.element.scrollWidth - this.element.clientWidth
                                : 0),
                            t(this.scrollbarXRail, { display: 'block' }),
                            t(this.scrollbarYRail, { display: 'block' }),
                            (this.railXMarginWidth =
                                v(u(this.scrollbarXRail).marginLeft) + v(u(this.scrollbarXRail).marginRight)),
                            (this.railYMarginHeight =
                                v(u(this.scrollbarYRail).marginTop) + v(u(this.scrollbarYRail).marginBottom)),
                            t(this.scrollbarXRail, { display: 'none' }),
                            t(this.scrollbarYRail, { display: 'none' }),
                            x().then(function () {
                                (e.settings.isDisableScrollToLastPositionOnResize ||
                                    ((e.element.scrollTop = e.element.scrollHeight * e.scrollTopPercent),
                                    (e.element.scrollLeft = e.element.scrollWidth * e.scrollLeftPercent)),
                                    S(e, !1, e.settings.overScrollWidth, !1),
                                    L(e, 'top', 0, !1, !1, !0),
                                    L(e, 'left', 0, !1, !1, !0),
                                    t(e.scrollbarXRail, { display: '' }),
                                    t(e.scrollbarYRail, { display: '' }));
                            }));
                    }),
                    (W.prototype.setScrollLeft = function (e, u, t) {
                        k(this._getAnimationSettings(e, 'right', u, t));
                    }),
                    (W.prototype.setScrollLeftImmediately = function (e) {
                        ((this.element.scrollLeft = 0 | e), this.update());
                    }),
                    (W.prototype.setScrollTop = function (e, u, t) {
                        k(this._getAnimationSettings(e, 'bottom', u, t));
                    }),
                    (W.prototype.setScrollTopImmediately = function (e) {
                        ((this.element.scrollTop = 0 | e), this.update());
                    }),
                    (W.prototype.onScroll = function (e) {
                        this.isAlive && S(this, !1, this.settings.overScrollWidth, !0);
                    }),
                    (W.prototype.onWheel = function (e) {
                        this.isAlive &&
                            (S(this, !1, this.settings.overScrollWidth, !1),
                            L(this, 'left', this.element.scrollLeft - this.lastScrollLeft),
                            (this.lastScrollLeft = this.element.scrollLeft));
                    }),
                    (W.prototype.destroy = function () {
                        this.isAlive &&
                            (this.scrollbarYButtonStart.removeEventListener('mousedown', this.boundPlayClickSound),
                            this.scrollbarYButtonEnd.removeEventListener('mousedown', this.boundPlayClickSound),
                            this.scrollbarXButtonStart.removeEventListener('mousedown', this.boundPlayClickSound),
                            this.scrollbarXButtonEnd.removeEventListener('mousedown', this.boundPlayClickSound),
                            this.scrollbarXButtonStart.removeEventListener('mouseenter', this.boundHandleMouseEnter),
                            this.scrollbarXButtonEnd.removeEventListener('mouseenter', this.boundHandleMouseEnter),
                            this.scrollbarYButtonStart.removeEventListener('mouseenter', this.boundHandleButtonEnter),
                            this.scrollbarYButtonEnd.removeEventListener('mouseenter', this.boundHandleButtonEnter),
                            this.scrollbarYButtonStart.removeEventListener('mouseleave', this.boundHandleMouseLeave),
                            this.scrollbarYButtonEnd.removeEventListener('mouseleave', this.boundHandleMouseLeave),
                            this.scrollbarY.removeEventListener('mouseenter', this.boundHandleMouseEnter),
                            this.scrollbarX.removeEventListener('mouseenter', this.boundHandleMouseEnter),
                            this.scrollbarY.removeEventListener('mouseleave', this.boundHandleMouseLeave),
                            this.scrollbarY.removeEventListener('mousedown', this.boundPlayClickSound),
                            this.scrollbarX.removeEventListener('mousedown', this.boundPlayClickSound),
                            this.event.unbindAll(),
                            o(this.scrollbarX),
                            o(this.scrollbarY),
                            o(this.scrollbarXRail),
                            o(this.scrollbarYRail),
                            this.removePsClasses(),
                            (this.element = null),
                            (this.scrollbarX = null),
                            (this.scrollbarY = null),
                            (this.scrollbarXRail = null),
                            (this.scrollbarYRail = null),
                            (this.isAlive = !1));
                    }),
                    (W.prototype.removePsClasses = function () {
                        this.element.className = this.element.className
                            .split(' ')
                            .filter(function (e) {
                                return !e.match(/^ps([-_].+|)$/);
                            })
                            .join(' ');
                    }),
                    (e.exports = W));
            },
            926: (e) => {
                e.exports = {
                    SMALL_WIDTH: 'mediaSmallWidth',
                    MEDIUM_WIDTH: 'mediaMediumWidth',
                    LARGE_WIDTH: 'mediaLargeWidth',
                    EXTRA_LARGE_WIDTH: 'mediaExtraLargeWidth',
                    SMALL_HEIGHT: 'mediaSmallHeight',
                    MEDIUM_HEIGHT: 'mediaMediumHeight',
                    LARGE_HEIGHT: 'mediaLargeHeight',
                    EXTRA_LARGE_HEIGHT: 'mediaExtraLargeHeight',
                    SMALL: 'mediaSmall',
                    MEDIUM: 'mediaMedium',
                    LARGE: 'mediaLarge',
                    EXTRA_LARGE: 'mediaExtraLarge',
                };
            },
            3532: (e) => {
                e.exports = {
                    BLACK_REAL: '#000000',
                    WHITE_REAL: '#FFFFFF',
                    WHITE: '#F2F2F7',
                    WHITE_ORANGE: '#FEFEEC',
                    WHITE_SPANISH: '#E9E2BF',
                    PAR: '#8C8C7E',
                    PAR_SECONDARY: '#595950',
                    PAR_TERTIARY: '#37362E',
                    INFO_RED: '#FF0000',
                    RED: '#FF2717',
                    RED_DARK: '#B70000',
                    YELLOW: '#FEAB34',
                    ORANGE: '#EE7000',
                    CREAM: '#FFDD99',
                    BROWN: '#CBAC77',
                    GREEN_BRIGHT: '#80D43A',
                    GREEN: '#7AB300',
                    GREEN_DARK: '#497212',
                    BLUE_BOOSTER: '#CCFFFF',
                    BLUE_TEAMKILLER: '#09E2FF',
                    CRED: '#CED9D9',
                    GOLD: '#FFC363',
                    BOND: '#C9C9B6',
                    PROM: '#A29B70',
                };
            },
            9887: (e) => {
                e.exports = {
                    XS: '4rem',
                    SM: '8rem',
                    SMp: '10rem',
                    MD: '16rem',
                    MDp: '20rem',
                    LG: '32rem',
                    XL: '64rem',
                };
            },
            527: (e, u, t) => {
                'use strict';
                (t.r(u), t.d(u, { mouse: () => a, onResize: () => i }));
                var n = t(2472),
                    r = t(1176);
                const i = (0, n.E)('clientResized'),
                    o = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    a = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, r.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, r.R)(!0);
                        }
                        function n() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', u),
                                      document.body.removeEventListener('mouseleave', t))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', u),
                                      document.body.addEventListener('mouseleave', t))
                                : (0, r.R)(!1);
                        }
                        const i = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const i = `mouse${u}`,
                                            a = o[u]((e) => t([e, 'outside']));
                                        function l(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(i, l),
                                            n(),
                                            () => {
                                                r &&
                                                    (a(),
                                                    window.removeEventListener(i, l),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (r = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                u
                            ),
                            {},
                        );
                        return Object.assign({}, i, {
                            disable() {
                                ((e.enabled = !1), n());
                            },
                            enable() {
                                ((e.enabled = !0), n());
                            },
                            enableOutside() {
                                e.enabled && (0, r.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, r.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => i,
                        getSize: () => r,
                        graphicsQuality: () => o,
                    }));
                var n = t(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, u, t) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            2472: (e, u, t) => {
                'use strict';
                function n(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => n });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => r });
                var n = t(5959);
                const r = { view: t(7641), client: n };
            },
            3722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => n }));
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => r });
                var n = t(2472);
                const r = {
                    onTextureFrozen: (0, n.E)('self.onTextureFrozen'),
                    onTextureReady: (0, n.E)('self.onTextureReady'),
                    onDomBuilt: (0, n.E)('self.onDomBuilt'),
                    onLoaded: (0, n.E)('self.onLoaded'),
                    onDisplayChanged: (0, n.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, n.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, n.E)('children.onAdded'),
                        onLoaded: (0, n.E)('children.onLoaded'),
                        onRemoved: (0, n.E)('children.onRemoved'),
                        onAttached: (0, n.E)('children.onAttached'),
                        onTextureReady: (0, n.E)('children.onTextureReady'),
                        onRequestPosition: (0, n.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => a,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => v,
                        events: () => i.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => s,
                        getDisplayStatus: () => f,
                        getScale: () => h,
                        getSize: () => E,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => p,
                        isFocused: () => g,
                        pxToRem: () => F,
                        remToPx: () => D,
                        resize: () => _,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => x,
                    }));
                var n = t(3722),
                    r = t(6112),
                    i = t(6538),
                    o = t(8566);
                function a(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function s(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function c(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function m(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: D(u.x), y: D(u.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function h() {
                    return viewEnv.getScale();
                }
                function F(e) {
                    return viewEnv.pxToRem(e);
                }
                function D(e) {
                    return viewEnv.remToPx(e);
                }
                function B(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function g() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function p() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const v = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
                        {},
                    ),
                    w = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    x = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => i });
                const n = ['args'],
                    r = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const i = u.args,
                                o = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, n);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
                                          arguments:
                                              ((r = i),
                                              Object.entries(r).map(([e, u]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof u) {
                                                      case 'number':
                                                          return { __Type: t, name: e, number: u };
                                                      case 'boolean':
                                                          return { __Type: t, name: e, bool: u };
                                                      default:
                                                          return { __Type: t, name: e, string: u.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    i = {
                        close(e) {
                            r('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            r(64);
                        },
                        move(e) {
                            r(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, u, t) => {
                'use strict';
                let n, r;
                (t.d(u, { n: () => n }),
                    (function (e) {
                        ((e[(e.NONE = -1)] = 'NONE'),
                            (e[(e.ALT = 165)] = 'ALT'),
                            (e[(e.ENTER = 13)] = 'ENTER'),
                            (e[(e.ESCAPE = 27)] = 'ESCAPE'),
                            (e[(e.SPACE = 32)] = 'SPACE'),
                            (e[(e.END = 35)] = 'END'),
                            (e[(e.HOME = 36)] = 'HOME'),
                            (e[(e.ARROW_LEFT = 37)] = 'ARROW_LEFT'),
                            (e[(e.ARROW_UP = 38)] = 'ARROW_UP'),
                            (e[(e.ARROW_RIGHT = 39)] = 'ARROW_RIGHT'),
                            (e[(e.ARROW_DOWN = 40)] = 'ARROW_DOWN'),
                            (e[(e.NUM_PLUS = 107)] = 'NUM_PLUS'),
                            (e[(e.NUM_MINUS = 109)] = 'NUM_MINUS'),
                            (e[(e.PLUS = 187)] = 'PLUS'),
                            (e[(e.MINUS = 189)] = 'MINUS'),
                            (e[(e.PAGE_UP = 33)] = 'PAGE_UP'),
                            (e[(e.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
                            (e[(e.BACKSPACE = 8)] = 'BACKSPACE'),
                            (e[(e.DELETE = 46)] = 'DELETE'),
                            (e[(e.TAB = 9)] = 'TAB'),
                            (e[(e.KEY_N = 78)] = 'KEY_N'),
                            (e[(e.KEY_0 = 48)] = 'KEY_0'),
                            (e[(e.KEY_1 = 49)] = 'KEY_1'),
                            (e[(e.KEY_2 = 50)] = 'KEY_2'),
                            (e[(e.KEY_3 = 51)] = 'KEY_3'),
                            (e[(e.KEY_4 = 52)] = 'KEY_4'),
                            (e[(e.KEY_5 = 53)] = 'KEY_5'),
                            (e[(e.KEY_6 = 54)] = 'KEY_6'),
                            (e[(e.KEY_7 = 55)] = 'KEY_7'),
                            (e[(e.KEY_8 = 56)] = 'KEY_8'),
                            (e[(e.KEY_9 = 57)] = 'KEY_9'),
                            (e[(e.CAPS_LOCK = 20)] = 'CAPS_LOCK'),
                            (e[(e.INSERT = 45)] = 'INSERT'),
                            (e[(e.F1 = 112)] = 'F1'),
                            (e[(e.F2 = 113)] = 'F2'),
                            (e[(e.F3 = 114)] = 'F3'),
                            (e[(e.F4 = 115)] = 'F4'),
                            (e[(e.F5 = 116)] = 'F5'),
                            (e[(e.F6 = 117)] = 'F6'),
                            (e[(e.F7 = 118)] = 'F7'),
                            (e[(e.F8 = 119)] = 'F8'),
                            (e[(e.F9 = 120)] = 'F9'),
                            (e[(e.F10 = 121)] = 'F10'),
                            (e[(e.F11 = 122)] = 'F11'),
                            (e[(e.F12 = 123)] = 'F12'),
                            (e[(e.SELECT = 93)] = 'SELECT'),
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
                            (e[(e.NUM_DECIMAL = 110)] = 'NUM_DECIMAL'),
                            (e[(e.STAR = 106)] = 'STAR'),
                            (e[(e.NUM_SLASH = 111)] = 'NUM_SLASH'),
                            (e[(e.FORWARD_SLASH = 191)] = 'FORWARD_SLASH'),
                            (e[(e.COMMA = 188)] = 'COMMA'),
                            (e[(e.DASH = 189)] = 'DASH'),
                            (e[(e.PERIOD = 190)] = 'PERIOD'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.ALT = 'Alt'),
                            (e.ALT_GRAPH = 'AltGraph'),
                            (e.CAPS_LOCK = 'CapsLock'),
                            (e.CONTROL = 'Control'),
                            (e.FN = 'Fn'),
                            (e.FN_LOCK = 'FnLock'),
                            (e.META = 'Meta'),
                            (e.NUM_LOCK = 'NumLock'),
                            (e.SCROLL_LOCK = 'ScrollLock'),
                            (e.SHIFT = 'Shift'),
                            (e.SYMBOL = 'Symbol'),
                            (e.SYMBOL_LOCK = 'SymbolLock'));
                    })(r || (r = {})));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => i });
                var n = t(3138);
                class r {
                    constructor() {
                        ((this._callbacks = void 0),
                            (this._updateHandler = void 0),
                            (this._views = void 0),
                            (this.clearViewCallbacks = (e) => {
                                this._views[e] &&
                                    (this._views[e].forEach((e) => {
                                        delete this._callbacks[e];
                                    }),
                                    delete this._views[e]);
                            }),
                            (this._callbacks = {}),
                            (this._views = {}),
                            (this._updateHandler = void 0));
                    }
                    static get instance() {
                        return (window.__dataTracker || (window.__dataTracker = new r()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, u, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = n.O.view.addModelObserver(e, t, r);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(i) : (this._views[t] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
                        );
                    }
                    removeCallback(e, u = 0) {
                        let t = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((t = viewEnv.removeDataChangedCallback(e, u)), delete this._callbacks[e]),
                            t || console.error("Can't remove callback by id:", e),
                            t
                        );
                    }
                    _emmitDataChanged(e, u, t) {
                        t.forEach((t) => {
                            const n = this._callbacks[t];
                            void 0 !== n && n(e, u);
                        });
                    }
                }
                r.__instance = void 0;
                const i = r;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4179);
                class ViewModel {
                    constructor(path, watchingFields = []) {
                        ((this.dataTracker = void 0),
                            (this.modelPath = void 0),
                            (this.callbacks = void 0),
                            (this.data = void 0),
                            (this._notifyObservers = () => {
                                ((this.data = eval(this.modelPath)),
                                    this.callbacks.forEach((e) => {
                                        e(this.data);
                                    }));
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                (this._addCallback(path),
                                    watchingFields.forEach((e) => {
                                        this._addCallback(path + '.' + e);
                                    }),
                                    this._notifyObservers());
                            }));
                    }
                    subscribe(e) {
                        (this.callbacks.add(e), null !== this.data && void 0 !== this.data && e(this.data));
                    }
                    unsubscribe(e) {
                        this.callbacks.delete(e);
                    }
                    destroy() {
                        (this.dataTracker.clear(), this.callbacks.clear());
                    }
                    _addCallback(e) {
                        this.dataTracker.addCallback(e, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            4179: (e, u, t) => {
                'use strict';
                t.d(u, { Sw: () => i.Z, B3: () => c, Gr: () => d, Z5: () => o, B0: () => l, ry: () => B });
                class n {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let n = e.target;
                                    do {
                                        if (n === u) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (n.__instance || (n.__instance = new n()), n.__instance);
                    }
                    register(e, u) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: u }));
                    }
                    unregister(e, u) {
                        const t = e,
                            n = u;
                        ((this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== n)),
                            this.removeMouseListener());
                    }
                    addMouseListener() {
                        this._listenMouse ||
                            (document.addEventListener('mousedown', this.onMouseDown), (this._listenMouse = !0));
                    }
                    removeMouseListener() {
                        this._listenMouse &&
                            0 === this.entries.length &&
                            (document.removeEventListener('mousedown', this.onMouseDown), (this._listenMouse = !1));
                    }
                }
                n.__instance = void 0;
                const r = n;
                var i = t(1358);
                const o = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
                let l;
                var s;
                (((s = l || (l = {}))[(s.UNDEFINED = 0)] = 'UNDEFINED'),
                    (s[(s.TOOLTIP = 1)] = 'TOOLTIP'),
                    (s[(s.POP_OVER = 2)] = 'POP_OVER'),
                    (s[(s.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (s[(s.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (s[(s.MOVE = 16)] = 'MOVE'),
                    (s[(s.CLOSE = 32)] = 'CLOSE'),
                    (s[(s.MINIMIZE = 64)] = 'MINIMIZE'));
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = t(5521),
                    A = t(3138);
                const h = ['args'];
                function F(e, u, t, n, r, i, o) {
                    try {
                        var a = e[i](o),
                            l = a.value;
                    } catch (e) {
                        return void t(e);
                    }
                    a.done ? u(l) : Promise.resolve(l).then(n, r);
                }
                const D = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    B = (function () {
                        var e,
                            u =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((e) => {
                                            engine.on('Ready', e);
                                        })
                                    );
                                }),
                                function () {
                                    var u = this,
                                        t = arguments;
                                    return new Promise(function (n, r) {
                                        var i = e.apply(u, t);
                                        function o(e) {
                                            F(i, n, r, o, a, 'next', e);
                                        }
                                        function a(e) {
                                            F(i, n, r, o, a, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    g = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, h);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, u]) => {
                                                  const t = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof u) {
                                                      case 'number':
                                                          t.number = u;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = u;
                                                          break;
                                                      default:
                                                          t.string = u.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    C = () => g(l.CLOSE),
                    p = (e, u) => {
                        e.keyCode === m.n.ESCAPE && u();
                    };
                var b = t(7572);
                const f = r.instance,
                    v = {
                        DataTracker: i.Z,
                        ViewModel: b.Z,
                        ViewEventType: l,
                        NumberFormatType: c,
                        RealFormatType: d,
                        TimeFormatType: E,
                        DateFormatType: _,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => g(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => g(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            g(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), i) => {
                            const o = A.O.view.getViewGlobalPosition(),
                                a = t.getBoundingClientRect(),
                                s = a.x,
                                c = a.y,
                                d = a.width,
                                E = a.height,
                                _ = {
                                    x: A.O.view.pxToRem(s) + o.x,
                                    y: A.O.view.pxToRem(c) + o.y,
                                    width: A.O.view.pxToRem(d),
                                    height: A.O.view.pxToRem(E),
                                };
                            g(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: D(_),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => p(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, C);
                        },
                        handleViewEvent: g,
                        onBindingsReady: B,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(l.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(l.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(l.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const r = Object.prototype.toString.call(u[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < r.length; u++) t[n].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: f,
                        SystemLocale: o,
                        UserLocale: a,
                    };
                window.ViewEnvHelper = v;
            },
            9170: (e, u, t) => {
                'use strict';
                var n = t(6179),
                    r = t.n(n);
                const i = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var o = t(3138);
                const a = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var l;
                function s(e, u, t) {
                    const n = (function (e, u) {
                            switch (!0) {
                                case e >= u.extraLarge.width:
                                    return u.extraLarge.weight;
                                case e >= u.large.width && e < u.extraLarge.width:
                                    return u.large.weight;
                                case e >= u.medium.width && e < u.large.width:
                                    return u.medium.weight;
                                case e >= u.small.width && e < u.medium.width:
                                    return u.small.weight;
                                default:
                                    return u.extraSmall.weight;
                            }
                        })(e, t),
                        r = (function (e, u) {
                            switch (!0) {
                                case e >= u.extraLarge.height:
                                    return u.extraLarge.weight;
                                case e >= u.large.height && e < u.extraLarge.height:
                                    return u.large.weight;
                                case e >= u.medium.height && e < u.large.height:
                                    return u.medium.weight;
                                case e >= u.small.height && e < u.medium.height:
                                    return u.small.weight;
                                default:
                                    return u.extraSmall.weight;
                            }
                        })(u, t),
                        i = Math.min(n, r);
                    return {
                        extraLarge: i === t.extraLarge.weight,
                        large: i === t.large.weight,
                        medium: i === t.medium.weight,
                        small: i === t.small.weight,
                        extraSmall: i === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
                        extraLargeHeight: r === t.extraLarge.weight,
                        largeHeight: r === t.large.weight,
                        mediumHeight: r === t.medium.weight,
                        smallHeight: r === t.small.weight,
                        extraSmallHeight: r === t.extraSmall.weight,
                    };
                }
                !(function (e) {
                    ((e.extraLarge = 'extraLarge'),
                        (e.large = 'large'),
                        (e.medium = 'medium'),
                        (e.small = 'small'),
                        (e.extraSmall = 'extraSmall'),
                        (e.extraLargeWidth = 'extraLargeWidth'),
                        (e.largeWidth = 'largeWidth'),
                        (e.mediumWidth = 'mediumWidth'),
                        (e.smallWidth = 'smallWidth'),
                        (e.extraSmallWidth = 'extraSmallWidth'),
                        (e.extraLargeHeight = 'extraLargeHeight'),
                        (e.largeHeight = 'largeHeight'),
                        (e.mediumHeight = 'mediumHeight'),
                        (e.smallHeight = 'smallHeight'),
                        (e.extraSmallHeight = 'extraSmallHeight'));
                })(l || (l = {}));
                const c = o.O.client.getSize('rem'),
                    d = c.width,
                    E = c.height,
                    _ = Object.assign({ width: d, height: E }, s(d, E, a)),
                    m = (0, n.createContext)(_),
                    A = ['children'],
                    h = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, A);
                        const r = (0, n.useContext)(m),
                            o = r.extraLarge,
                            a = r.large,
                            l = r.medium,
                            s = r.small,
                            c = r.extraSmall,
                            d = r.extraLargeWidth,
                            E = r.largeWidth,
                            _ = r.mediumWidth,
                            h = r.smallWidth,
                            F = r.extraSmallWidth,
                            D = r.extraLargeHeight,
                            B = r.largeHeight,
                            g = r.mediumHeight,
                            C = r.smallHeight,
                            p = r.extraSmallHeight,
                            b = { extraLarge: D, large: B, medium: g, small: C, extraSmall: p };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && o) return u;
                            if (t.large && a) return u;
                            if (t.medium && l) return u;
                            if (t.small && s) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && d) return i(u, t, b);
                            if (t.largeWidth && E) return i(u, t, b);
                            if (t.mediumWidth && _) return i(u, t, b);
                            if (t.smallWidth && h) return i(u, t, b);
                            if (t.extraSmallWidth && F) return i(u, t, b);
                            if (!(
                                t.extraLargeWidth ||
                                t.largeWidth ||
                                t.mediumWidth ||
                                t.smallWidth ||
                                t.extraSmallWidth
                            )) {
                                if (t.extraLargeHeight && D) return u;
                                if (t.largeHeight && B) return u;
                                if (t.mediumHeight && g) return u;
                                if (t.smallHeight && C) return u;
                                if (t.extraSmallHeight && p) return u;
                            }
                        }
                        return null;
                    };
                ((h.defaultProps = {
                    extraLarge: !1,
                    large: !1,
                    medium: !1,
                    small: !1,
                    extraSmall: !1,
                    extraLargeWidth: !1,
                    largeWidth: !1,
                    mediumWidth: !1,
                    smallWidth: !1,
                    extraSmallWidth: !1,
                    extraLargeHeight: !1,
                    largeHeight: !1,
                    mediumHeight: !1,
                    smallHeight: !1,
                    extraSmallHeight: !1,
                }),
                    (0, n.memo)(h));
                const F = (e) => {
                        const u = (0, n.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    D = (0, n.memo)(({ children: e }) => {
                        const u = (0, n.useContext)(m),
                            t = (0, n.useState)(u),
                            i = t[0],
                            l = t[1],
                            c = (0, n.useCallback)((e, u) => {
                                const t = o.O.view.pxToRem(e),
                                    n = o.O.view.pxToRem(u);
                                l(Object.assign({ width: t, height: n }, s(t, n, a)));
                            }, []);
                        (F(() => {
                            engine.on('clientResized', c);
                        }),
                            (0, n.useEffect)(() => () => engine.off('clientResized', c), [c]));
                        const d = (0, n.useMemo)(() => Object.assign({}, i), [i]);
                        return r().createElement(m.Provider, { value: d }, e);
                    });
                var B = t(6483),
                    g = t.n(B),
                    C = t(926),
                    p = t.n(C);
                let b, f, v;
                (!(function (e) {
                    ((e[(e.ExtraSmall = a.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = a.small.width)] = 'Small'),
                        (e[(e.Medium = a.medium.width)] = 'Medium'),
                        (e[(e.Large = a.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = a.extraLarge.width)] = 'ExtraLarge'));
                })(b || (b = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = a.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = a.small.width)] = 'Small'),
                            (e[(e.Medium = a.medium.width)] = 'Medium'),
                            (e[(e.Large = a.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = a.extraLarge.width)] = 'ExtraLarge'));
                    })(f || (f = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = a.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = a.small.height)] = 'Small'),
                            (e[(e.Medium = a.medium.height)] = 'Medium'),
                            (e[(e.Large = a.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = a.extraLarge.height)] = 'ExtraLarge'));
                    })(v || (v = {})));
                const w = () => {
                        const e = (0, n.useContext)(m),
                            u = e.width,
                            t = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return b.ExtraLarge;
                                    case e.large:
                                        return b.Large;
                                    case e.medium:
                                        return b.Medium;
                                    case e.small:
                                        return b.Small;
                                    case e.extraSmall:
                                        return b.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), b.ExtraSmall);
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return f.ExtraLarge;
                                    case e.largeWidth:
                                        return f.Large;
                                    case e.mediumWidth:
                                        return f.Medium;
                                    case e.smallWidth:
                                        return f.Small;
                                    case e.extraSmallWidth:
                                        return f.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), f.ExtraSmall);
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return v.ExtraLarge;
                                    case e.largeHeight:
                                        return v.Large;
                                    case e.mediumHeight:
                                        return v.Medium;
                                    case e.smallHeight:
                                        return v.Small;
                                    case e.extraSmallHeight:
                                        return v.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), v.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: i, mediaHeight: o, remScreenWidth: u, remScreenHeight: t };
                    },
                    x = ['children', 'className'];
                function y() {
                    return (
                        (y =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        y.apply(this, arguments)
                    );
                }
                const L = {
                        [f.ExtraSmall]: '',
                        [f.Small]: p().SMALL_WIDTH,
                        [f.Medium]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH}`,
                        [f.Large]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH}`,
                        [f.ExtraLarge]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH} ${p().EXTRA_LARGE_WIDTH}`,
                    },
                    S = {
                        [v.ExtraSmall]: '',
                        [v.Small]: p().SMALL_HEIGHT,
                        [v.Medium]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT}`,
                        [v.Large]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT}`,
                        [v.ExtraLarge]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT} ${p().EXTRA_LARGE_HEIGHT}`,
                    },
                    T = {
                        [b.ExtraSmall]: '',
                        [b.Small]: p().SMALL,
                        [b.Medium]: `${p().SMALL} ${p().MEDIUM}`,
                        [b.Large]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE}`,
                        [b.ExtraLarge]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE} ${p().EXTRA_LARGE}`,
                    },
                    M = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, x);
                        const i = w(),
                            o = i.mediaWidth,
                            a = i.mediaHeight,
                            l = i.mediaSize;
                        return r().createElement('div', y({ className: g()(t, L[o], S[a], T[l]) }, n), u);
                    },
                    H = ['children'],
                    k = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, H);
                        return r().createElement(D, null, r().createElement(M, t, u));
                    };
                var O = t(493),
                    P = t.n(O);
                let N;
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(N || (N = {}));
                const W = (e) => e.replace(/&nbsp;/g, ' '),
                    I = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    X = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    Y = (e, u, t = N.left) => e.split(u).reduce(t === N.left ? I : X, []),
                    G = (() => {
                        const e = new RegExp(
                            /[\(\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[ %\+\x2D-9A-Za-\{\}\xA0\xC0-\u0237\u2013\u2014\u2026]+[\)\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3002\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\uFF01\uFF0C\uFF1A\uFF1B\uFF1F\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu
                                .source +
                                '|' +
                                /[\(\xAB\u201C\u275D][\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?|[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[\)\xBB\u201D\u275E][\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu
                                    .source +
                                '|' +
                                /[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[ \):;\u2022\u3001\u3002\u300A-\u300D\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]|[\(,1A-Za-\{\}\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu
                                    .source +
                                '|' +
                                /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu
                                    .source,
                            'gum',
                        );
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    z = ['zh_cn', 'zh_sg', 'zh_tw'];
                let U;
                var $;
                ((($ = U || (U = {})).SHORT_DATE = 'short-date'),
                    ($.SHORT_TIME = 'short-time'),
                    ($.SHORT_DATE_TIME = 'short-date-time'),
                    ($.FULL_DATE = 'full-date'),
                    ($.FULL_DATE_TIME = 'full-date-time'),
                    ($.MONTH = 'month'),
                    ($.MONTH_DATE = 'month-date'),
                    ($.DATE_MONTH = 'date-month'),
                    ($.MONTH_YEAR = 'month-year'),
                    ($.WEEK_DAY = 'week-day'),
                    ($.WEEK_DAY_TIME = 'week-day-time'),
                    ($.YEAR = 'year'),
                    ($.DATE_YEAR = 'date-year'));
                var j = t(4179);
                Date.now();
                const K = (e = 1) => {
                        const u = new Error().stack;
                        let t,
                            n = R.invalid('resId');
                        return (
                            u &&
                                ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== t &&
                                    window.subViews[t] &&
                                    (n = window.subViews[t].id)),
                            { caller: t, stack: u, resId: n }
                        );
                    },
                    V = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    q = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    Z = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    Q = j.Sw.instance;
                let J;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(J || (J = {}));
                const ee = (e = 'model', u = J.Deep) => {
                    const t = (0, n.useState)(0),
                        r = (t[0], t[1]),
                        i = (0, n.useMemo)(() => K(), []),
                        o = i.caller,
                        a = i.resId,
                        l = (0, n.useMemo)(
                            () => (window.__feature && window.__feature !== o ? `subViews.${o}.${e}` : e),
                            [o, e],
                        ),
                        s = (0, n.useState)(() =>
                            ((e) => {
                                const u = V(e, window);
                                for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                return q(u) ? u.value : u;
                            })(
                                ((e) =>
                                    ((e, u) =>
                                        e.split('.').reduce((e, u) => {
                                            const t = V(`${e}.${u}`, window);
                                            return q(t) ? ((e, u) => `${e}.${u}.value`)(e, u) : `${e}.${u}`;
                                        }))(e))(l),
                            ),
                        ),
                        c = s[0],
                        d = s[1],
                        E = (0, n.useRef)(-1);
                    return (
                        F(() => {
                            if (
                                ('boolean' == typeof u &&
                                    ((u = u ? J.Deep : J.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                u !== J.None)
                            ) {
                                const t = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        u === J.Deep
                                            ? (e === c && r((e) => e + 1), d(e))
                                            : d(Object.assign([], e));
                                    },
                                    n = ((e) => {
                                        const u = ((e) => {
                                                const u = K(),
                                                    t = u.caller,
                                                    n = u.resId,
                                                    r =
                                                        window.__feature && window.__feature !== t && t
                                                            ? `subViews.${t}`
                                                            : '';
                                                return { modelPrefix: r, modelPath: Z(r, ''), resId: n };
                                            })(),
                                            t = u.modelPrefix,
                                            n = e.split('.');
                                        if (n.length > 0) {
                                            const e = [n[0]];
                                            return (
                                                n.reduce((u, n) => {
                                                    const r = V(Z(t, `${u}.${n}`), window);
                                                    return q(r)
                                                        ? (e.push(r.id), `${u}.${n}.value`)
                                                        : (e.push(n), `${u}.${n}`);
                                                }),
                                                e.reduce((e, u) => e + '.' + u)
                                            );
                                        }
                                        return '';
                                    })(e);
                                E.current = Q.addCallback(n, t, a, u === J.Deep);
                            }
                        }),
                        (0, n.useEffect)(() => {
                            if (u !== J.None)
                                return () => {
                                    Q.removeCallback(E.current, a);
                                };
                        }, [a, u]),
                        c
                    );
                };
                j.Sw.instance;
                var ue = t(5521);
                const te = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ne(e = ue.n.NONE, u = te, t = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== ue.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (o.O.view.isEventHandled()) return;
                                (o.O.view.setEventHandled(), u(n), t && n.stopPropagation());
                            }
                        }
                    }, [u, e, t]);
                }
                function re(e) {
                    engine.call('PlaySound', e);
                }
                const ie = {
                        playHighlight() {
                            re('highlight');
                        },
                        playClick() {
                            re('play');
                        },
                        playYes() {
                            re('yes1');
                        },
                    },
                    oe = {
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
                        base__disabled: 'CButton_base__disabled_d9',
                        back: 'CButton_back_e5',
                        texture: 'CButton_texture_fe',
                        state: 'CButton_state_11',
                        base__focus: 'CButton_base__focus_83',
                        stateHighlightHover: 'CButton_stateHighlightHover_ff',
                        stateHighlightActive: 'CButton_stateHighlightActive_35',
                        stateDisabled: 'CButton_stateDisabled_54',
                        base__firstHover: 'CButton_base__firstHover_d5',
                        base__highlightActive: 'CButton_base__highlightActive_b2',
                        content: 'CButton_content_cc',
                    };
                let ae, le;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(ae || (ae = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(le || (le = {})));
                const se = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: i,
                    disabled: o,
                    mixClass: a,
                    soundHover: l,
                    soundClick: s,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: E,
                    onMouseUp: _,
                    onMouseLeave: m,
                    onClick: A,
                }) => {
                    const h = (0, n.useRef)(null),
                        F = (0, n.useState)(t),
                        D = F[0],
                        B = F[1],
                        C = (0, n.useState)(!1),
                        p = C[0],
                        b = C[1],
                        f = (0, n.useState)(!1),
                        v = f[0],
                        w = f[1],
                        x = (0, n.useCallback)(() => {
                            o || (h.current && (h.current.focus(), B(!0)));
                        }, [o]),
                        y = (0, n.useCallback)(
                            (e) => {
                                D && null !== h.current && !h.current.contains(e.target) && B(!1);
                            },
                            [D],
                        ),
                        L = (0, n.useCallback)(
                            (e) => {
                                o || (A && A(e));
                            },
                            [o, A],
                        ),
                        S = (0, n.useCallback)(
                            (e) => {
                                o || (null !== l && re(l), c && c(e), w(!0));
                            },
                            [o, l, c],
                        ),
                        T = (0, n.useCallback)(
                            (e) => {
                                d && d(e);
                            },
                            [d],
                        ),
                        M = (0, n.useCallback)(
                            (e) => {
                                o || (_ && _(e), b(!1));
                            },
                            [o, _],
                        ),
                        H = (0, n.useCallback)(
                            (e) => {
                                o || (null !== s && re(s), E && E(e), t && x(), b(!0));
                            },
                            [o, s, E, x, t],
                        ),
                        k = (0, n.useCallback)(
                            (e) => {
                                o || (m && m(e), b(!1));
                            },
                            [o, m],
                        ),
                        O = g()(
                            oe.base,
                            oe[`base__${i}`],
                            {
                                [oe.base__disabled]: o,
                                [oe[`base__${u}`]]: u,
                                [oe.base__focus]: D,
                                [oe.base__highlightActive]: p,
                                [oe.base__firstHover]: v,
                            },
                            a,
                        ),
                        P = g()(oe.state, oe.state__default);
                    return (
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mousedown', y),
                                () => {
                                    document.removeEventListener('mousedown', y);
                                }
                            ),
                            [y],
                        ),
                        (0, n.useEffect)(() => {
                            B(t);
                        }, [t]),
                        r().createElement(
                            'div',
                            {
                                ref: h,
                                className: O,
                                onMouseEnter: S,
                                onMouseMove: T,
                                onMouseUp: M,
                                onMouseDown: H,
                                onMouseLeave: k,
                                onClick: L,
                            },
                            i !== ae.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: oe.back }),
                                    r().createElement('span', { className: oe.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: P },
                                r().createElement('span', { className: oe.stateDisabled }),
                                r().createElement('span', { className: oe.stateHighlightHover }),
                                r().createElement('span', { className: oe.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: oe.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                se.defaultProps = { type: ae.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const ce = (0, n.memo)(se),
                    de = [
                        'children',
                        'contentId',
                        'args',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onClick',
                        'ignoreShowDelay',
                        'ignoreMouseClick',
                        'decoratorId',
                        'isEnabled',
                        'targetId',
                        'onShow',
                        'onHide',
                    ];
                function Ee(e) {
                    return Object.entries(e || {}).map(([e, u]) => {
                        const t = { __Type: 'GFValueProxy', name: e };
                        switch (typeof u) {
                            case 'number':
                                t.number = u;
                                break;
                            case 'boolean':
                                t.bool = u;
                                break;
                            case 'undefined':
                                break;
                            default:
                                t.string = u.toString();
                        }
                        return t;
                    });
                }
                const _e = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: j.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    me = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            i = e.onMouseEnter,
                            o = e.onMouseLeave,
                            a = e.onMouseDown,
                            l = e.onClick,
                            s = e.ignoreShowDelay,
                            c = void 0 !== s && s,
                            d = e.ignoreMouseClick,
                            E = void 0 !== d && d,
                            _ = e.decoratorId,
                            m = void 0 === _ ? 0 : _,
                            A = e.isEnabled,
                            h = void 0 === A || A,
                            F = e.targetId,
                            D = void 0 === F ? 0 : F,
                            B = e.onShow,
                            g = e.onHide,
                            C = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, de);
                        const p = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, n.useMemo)(() => D || K().resId, [D]),
                            f = (0, n.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (_e(t, m, { isMouseEvent: !0, on: !0, arguments: Ee(r) }, b),
                                    B && B(),
                                    (p.current.isVisible = !0));
                            }, [t, m, r, b, B]),
                            v = (0, n.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const e = p.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (p.current.timeoutId = 0)),
                                        _e(t, m, { on: !1 }, b),
                                        p.current.isVisible && g && g(),
                                        (p.current.isVisible = !1));
                                }
                            }, [t, m, b, g]),
                            w = (0, n.useCallback)((e) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(p.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const e = p.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, n.useEffect)(() => {
                                !1 === h && v();
                            }, [h, v]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        (window.removeEventListener('mouseleave', v), v());
                                    }
                                ),
                                [v],
                            ),
                            h
                                ? (0, n.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((x = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((p.current.timeoutId = window.setTimeout(f, c ? 100 : 400)),
                                                          i && i(e),
                                                          x && x(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (v(), null == o || o(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === E && v(), null == l || l(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === E && v(), null == a || a(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          C,
                                      ),
                                  )
                                : u
                        );
                        var x;
                    };
                var Ae = t(9887),
                    he = t.n(Ae);
                const Fe = ['xl', 'lg', 'md', 'sm', 'xs'],
                    De = (e) => e.includes('_') && ((e) => Fe.includes(e))(e.split('_').at(-1)),
                    Be = [b.ExtraLarge, b.Large, b.Medium, b.Small, b.ExtraSmall],
                    ge = (e, u) =>
                        Object.keys(e).reduce((t, n) => {
                            if (n in t) return t;
                            if (De(n)) {
                                const r = n.split('_').slice(0, -1).join('_');
                                if (r in t) return t;
                                const i = Be.indexOf(u),
                                    o = (-1 !== i ? Fe.slice(i) : [])
                                        .map((e) => r + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    a = o ? e[o] : void 0;
                                return ((t[r] = void 0 !== a ? a : e[r]), t);
                            }
                            const r = e[n];
                            return (
                                void 0 === r ||
                                    ((e, u) => Fe.some((t) => void 0 !== u[`${e}_${t}`]))(n, e) ||
                                    (t[n] = r),
                                t
                            );
                        }, {}),
                    Ce = (e, u = ge) => {
                        const t = (
                            (e, u = ge) =>
                            (t) => {
                                const i = w().mediaSize,
                                    o = (0, n.useMemo)(() => u(t, i), [t, i]);
                                return r().createElement(e, o);
                            }
                        )(e, u);
                        return r().memo((u) =>
                            Object.keys(u).some((e) => De(e) && void 0 !== u[e])
                                ? r().createElement(t, u)
                                : r().createElement(e, u),
                        );
                    },
                    pe = {
                        mt__XS: 'Box_mt__XS_0c',
                        mt__SM: 'Box_mt__SM_eb',
                        mt__SMp: 'Box_mt__SMp_cf',
                        mt__MD: 'Box_mt__MD_25',
                        mt__MDp: 'Box_mt__MDp_49',
                        mt__LG: 'Box_mt__LG_e8',
                        mt__XL: 'Box_mt__XL_83',
                        mr__XS: 'Box_mr__XS_7c',
                        mr__SM: 'Box_mr__SM_08',
                        mr__SMp: 'Box_mr__SMp_06',
                        mr__MD: 'Box_mr__MD_4a',
                        mr__MDp: 'Box_mr__MDp_b6',
                        mr__LG: 'Box_mr__LG_d0',
                        mr__XL: 'Box_mr__XL_db',
                        mb__XS: 'Box_mb__XS_bb',
                        mb__SM: 'Box_mb__SM_83',
                        mb__SMp: 'Box_mb__SMp_04',
                        mb__MD: 'Box_mb__MD_ed',
                        mb__MDp: 'Box_mb__MDp_65',
                        mb__LG: 'Box_mb__LG_c8',
                        mb__XL: 'Box_mb__XL_f8',
                        ml__XS: 'Box_ml__XS_8a',
                        ml__SM: 'Box_ml__SM_e6',
                        ml__SMp: 'Box_ml__SMp_fb',
                        ml__MD: 'Box_ml__MD_2b',
                        ml__MDp: 'Box_ml__MDp_c7',
                        ml__LG: 'Box_ml__LG_39',
                        ml__XL: 'Box_ml__XL_4a',
                    },
                    be = [
                        'className',
                        'width',
                        'height',
                        'm',
                        'mt',
                        'mr',
                        'mb',
                        'ml',
                        'column',
                        'row',
                        'flexDirection',
                        'flexStart',
                        'center',
                        'flexEnd',
                        'spaceBetween',
                        'spaceAround',
                        'justifyContent',
                        'alignItems',
                        'alignSelf',
                        'wrap',
                        'flexWrap',
                        'grow',
                        'shrink',
                        'flex',
                        'style',
                        'children',
                    ];
                function fe() {
                    return (
                        (fe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        fe.apply(this, arguments)
                    );
                }
                Object.keys(he());
                const ve = {
                        XL: { mt: pe.mt__XL, mr: pe.mr__XL, mb: pe.mb__XL, ml: pe.ml__XL },
                        LG: { mt: pe.mt__LG, mr: pe.mr__LG, mb: pe.mb__LG, ml: pe.ml__LG },
                        MDp: { mt: pe.mt__MDp, mr: pe.mr__MDp, mb: pe.mb__MDp, ml: pe.ml__MDp },
                        MD: { mt: pe.mt__MD, mr: pe.mr__MD, mb: pe.mb__MD, ml: pe.ml__MD },
                        SMp: { mt: pe.mt__SMp, mr: pe.mr__SMp, mb: pe.mb__SMp, ml: pe.ml__SMp },
                        SM: { mt: pe.mt__SM, mr: pe.mr__SM, mb: pe.mb__SM, ml: pe.ml__SM },
                        XS: { mt: pe.mt__XS, mr: pe.mr__XS, mb: pe.mb__XS, ml: pe.ml__XS },
                    },
                    we = (Object.keys(ve), ['mt', 'mr', 'mb', 'ml']),
                    xe = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    ye = Ce((e) => {
                        let u = e.className,
                            t = e.width,
                            i = e.height,
                            o = e.m,
                            a = e.mt,
                            l = void 0 === a ? o : a,
                            s = e.mr,
                            c = void 0 === s ? o : s,
                            d = e.mb,
                            E = void 0 === d ? o : d,
                            _ = e.ml,
                            m = void 0 === _ ? o : _,
                            A = e.column,
                            h = e.row,
                            F = e.flexDirection,
                            D = void 0 === F ? (A ? 'column' : h && 'row') || void 0 : F,
                            B = e.flexStart,
                            C = e.center,
                            p = e.flexEnd,
                            b = e.spaceBetween,
                            f = e.spaceAround,
                            v = e.justifyContent,
                            w =
                                void 0 === v
                                    ? (B ? 'flex-start' : C && 'center') ||
                                      (p && 'flex-end') ||
                                      (b && 'space-between') ||
                                      (f && 'space-around') ||
                                      void 0
                                    : v,
                            x = e.alignItems,
                            y = void 0 === x ? (B ? 'flex-start' : C && 'center') || (p && 'flex-end') || void 0 : x,
                            L = e.alignSelf,
                            S = e.wrap,
                            T = e.flexWrap,
                            M = void 0 === T ? (S ? 'wrap' : void 0) : T,
                            H = e.grow,
                            k = e.shrink,
                            R = e.flex,
                            O = void 0 === R ? (H || k ? `${H ? 1 : 0} ${k ? 1 : 0} auto` : void 0) : R,
                            P = e.style,
                            N = e.children,
                            W = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, be);
                        const I = (0, n.useMemo)(() => {
                                const e = { mt: l, mr: c, mb: E, ml: m },
                                    u = ((e) =>
                                        we.reduce((u, t) => {
                                            const n = e[t];
                                            return n && 'number' != typeof n ? u.concat(ve[!0 === n ? 'MD' : n][t]) : u;
                                        }, []))(e),
                                    n = ((e) =>
                                        we.reduce((u, t) => {
                                            const n = e[t];
                                            return ('number' == typeof n && (u[xe[t]] = n + 'rem'), u);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, P, n, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== i && 'number' == typeof i ? i + 'rem' : i,
                                        flex: O,
                                        alignSelf: L,
                                        display: D || y ? 'flex' : void 0,
                                        flexDirection: D,
                                        flexWrap: M,
                                        justifyContent: w,
                                        alignItems: y,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, i, l, c, E, m, P, O, L, D, M, w, y]),
                            X = I.computedStyle,
                            Y = I.computedClassNames;
                        return r().createElement('div', fe({ className: g()(pe.base, ...Y, u), style: X }, W), N);
                    }),
                    Le = ({ binding: e, text: u = '', classMix: t, alignment: i = N.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : r().createElement(
                                  n.Fragment,
                                  null,
                                  u.split('\n').map((u, o) =>
                                      r().createElement(
                                          'div',
                                          { className: g()('FormatText_base_d0', t), key: `${u}-${o}` },
                                          ((e, u, t) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  t && e in t
                                                      ? t[e]
                                                      : ((e, u = N.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return z.includes(t)
                                                                ? G(e)
                                                                : ((e, u = N.left) => {
                                                                      let t = [];
                                                                      const n =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          r = W(e);
                                                                      return (
                                                                          Y(r, /( )/, u).forEach(
                                                                              (e) => (t = t.concat(Y(e, n, N.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(e, u);
                                                        })(e, u),
                                              ))(u, i, e).map((e, u) =>
                                              r().createElement(n.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var Se = t(3532),
                    Te = t.n(Se);
                const Me = {
                        'paragraph-P10': 'Text_paragraph-P10_2c',
                        'paragraph-P12': 'Text_paragraph-P12_22',
                        'paragraph-P14': 'Text_paragraph-P14_a7',
                        'paragraph-P16': 'Text_paragraph-P16_90',
                        'paragraph-P18': 'Text_paragraph-P18_50',
                        'paragraph-P24': 'Text_paragraph-P24_33',
                        'heading-H14': 'Text_heading-H14_8b',
                        'heading-H15': 'Text_heading-H15_9e',
                        'heading-H18': 'Text_heading-H18_b7',
                        'heading-H20R': 'Text_heading-H20R_f6',
                        'heading-H22': 'Text_heading-H22_27',
                        'heading-H24R': 'Text_heading-H24R_be',
                        'heading-H24': 'Text_heading-H24_0c',
                        'heading-H28': 'Text_heading-H28_78',
                        'heading-H36': 'Text_heading-H36_32',
                        'heading-H56': 'Text_heading-H56_c3',
                        'heading-H73': 'Text_heading-H73_8f',
                        'heading-H144': 'Text_heading-H144_a9',
                        BLACK_REAL: 'Text_BLACK_REAL_30',
                        WHITE_REAL: 'Text_WHITE_REAL_bc',
                        WHITE: 'Text_WHITE_62',
                        WHITE_ORANGE: 'Text_WHITE_ORANGE_54',
                        WHITE_SPANISH: 'Text_WHITE_SPANISH_df',
                        PAR: 'Text_PAR_15',
                        PAR_SECONDARY: 'Text_PAR_SECONDARY_5d',
                        PAR_TERTIARY: 'Text_PAR_TERTIARY_c9',
                        INFO_RED: 'Text_INFO_RED_30',
                        RED: 'Text_RED_66',
                        RED_DARK: 'Text_RED_DARK_d8',
                        YELLOW: 'Text_YELLOW_ed',
                        ORANGE: 'Text_ORANGE_be',
                        CREAM: 'Text_CREAM_57',
                        BROWN: 'Text_BROWN_18',
                        GREEN_BRIGHT: 'Text_GREEN_BRIGHT_3f',
                        GREEN: 'Text_GREEN_e3',
                        GREEN_DARK: 'Text_GREEN_DARK_f1',
                        BLUE_BOOSTER: 'Text_BLUE_BOOSTER_21',
                        BLUE_TEAMKILLER: 'Text_BLUE_TEAMKILLER_ab',
                        CRED: 'Text_CRED_f7',
                        GOLD: 'Text_GOLD_28',
                        BOND: 'Text_BOND_be',
                        PROM: 'Text_PROM_65',
                    },
                    He = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function ke() {
                    return (
                        (ke =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ke.apply(this, arguments)
                    );
                }
                Object.keys(he());
                const Re = Object.keys(Te()),
                    Oe = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Pe = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Ne = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    We =
                        (Object.keys({
                            XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                            LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                            MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                            MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                            SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                            SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                            XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                        }),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': Oe,
                            'heading-H36': Oe,
                            'heading-H28': Pe,
                            'heading-H24': Pe,
                            'heading-H24R': Pe,
                            'heading-H22': Pe,
                            'heading-H20R': Pe,
                            'heading-H18': Pe,
                            'heading-H15': Ne,
                            'heading-H14': Ne,
                            'paragraph-P24': Pe,
                            'paragraph-P18': Pe,
                            'paragraph-P16': Pe,
                            'paragraph-P14': Ne,
                            'paragraph-P12': Ne,
                            'paragraph-P10': Ne,
                        }),
                    Ie =
                        (Object.keys(We),
                        (e) =>
                            e
                                ? ((e) => Re.includes(e))(e)
                                    ? { colorClassName: Me[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    Xe = Ce((e) => {
                        let u = e.text,
                            t = e.variant,
                            i = e.className,
                            o = e.color,
                            a = e.m,
                            l = e.mt,
                            s = void 0 === l ? a : l,
                            c = e.mr,
                            d = void 0 === c ? a : c,
                            E = e.mb,
                            _ = void 0 === E ? a : E,
                            m = e.ml,
                            A = void 0 === m ? a : m,
                            h = e.style,
                            F = e.format,
                            D = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, He);
                        const B = (0, n.useMemo)(() => {
                                const e = Ie(o),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    n = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, h, n), colorClassName: u };
                            }, [h, o]),
                            C = B.computedStyle,
                            p = B.colorClassName;
                        return r().createElement(
                            ye,
                            ke(
                                {
                                    className: g()(Me.base, t && Me[t], p, i),
                                    style: C,
                                    mt: !0 === s ? We[t || 'paragraph-P16'].mt : s,
                                    mr: !0 === d ? We[t || 'paragraph-P16'].mr : d,
                                    mb: !0 === _ ? We[t || 'paragraph-P16'].mb : _,
                                    ml: !0 === A ? We[t || 'paragraph-P16'].ml : A,
                                },
                                D,
                            ),
                            void 0 !== F ? r().createElement(Le, ke({}, F, { text: u })) : u,
                        );
                    });
                let Ye, Ge, ze;
                (!(function (e) {
                    ((e.Small = 'x2'), (e.Medium = 'x3'), (e.Big = 'x5'));
                })(Ye || (Ye = {})),
                    (function (e) {
                        ((e.Defence = 'defence'), (e.Offence = 'offence'));
                    })(Ge || (Ge = {})),
                    Ye.Small,
                    Ye.Medium,
                    Ye.Big,
                    (function (e) {
                        ((e.SHOW_DETAILS = 'ev_secret_event_hangar_ui_icon_selection'),
                            (e.HIGHLIGHT = 'ev_secret_event_hangar_ui_highlight'));
                    })(ze || (ze = {})));
                const Ue = {
                    base: 'HBCoin_base_d8',
                    label__default: 'HBCoin_label__default_e9',
                    label__booster: 'HBCoin_label__booster_fe',
                    label__counterattackGlow: 'HBCoin_label__counterattackGlow_e3',
                    label__offenceGlow: 'HBCoin_label__offenceGlow_7c',
                    label__defenceGlow: 'HBCoin_label__defenceGlow_78',
                    label__animated: 'HBCoin_label__animated_82',
                    label__notEnough: 'HBCoin_label__notEnough_0e',
                    label__sizeP14: 'HBCoin_label__sizeP14_c0',
                    label__sizeH15: 'HBCoin_label__sizeH15_73',
                    label__sizeH18: 'HBCoin_label__sizeH18_f6',
                    label__sizeH20: 'HBCoin_label__sizeH20_14',
                    label__sizeH22: 'HBCoin_label__sizeH22_9c',
                    label__sizeH24: 'HBCoin_label__sizeH24_b0',
                    label__sizeH28: 'HBCoin_label__sizeH28_6d',
                    label__sizeH36: 'HBCoin_label__sizeH36_10',
                    label__sizeH42: 'HBCoin_label__sizeH42_4f',
                    label__sizeH56: 'HBCoin_label__sizeH56_88',
                    label__sizeH73: 'HBCoin_label__sizeH73_c1',
                    label__sizeH144: 'HBCoin_label__sizeH144_61',
                    label__progression: 'HBCoin_label__progression_08',
                    maxAmount: 'HBCoin_maxAmount_eb',
                    icon: 'HBCoin_icon_27',
                    icon__animated: 'HBCoin_icon__animated_17',
                    icon__size16x16: 'HBCoin_icon__size16x16_6b',
                    icon__size24x24: 'HBCoin_icon__size24x24_35',
                    icon__size32x32: 'HBCoin_icon__size32x32_70',
                    icon__size48x48: 'HBCoin_icon__size48x48_42',
                    icon__size80x80: 'HBCoin_icon__size80x80_ca',
                    icon__size134x134: 'HBCoin_icon__size134x134_4d',
                    stockBg: 'HBCoin_stockBg_25',
                    stockBg__sizeH18: 'HBCoin_stockBg__sizeH18_9b',
                    stockBg__sizeH22: 'HBCoin_stockBg__sizeH22_5a',
                };
                let $e, je;
                (!(function (e) {
                    ((e.P14 = 'P14'),
                        (e.H15 = 'H15'),
                        (e.H18 = 'H18'),
                        (e.H20 = 'H20'),
                        (e.H22 = 'H22'),
                        (e.H24 = 'H24'),
                        (e.H24R = 'H24R'),
                        (e.H28 = 'H28'),
                        (e.H36 = 'H36'),
                        (e.H42 = 'H42'),
                        (e.H56 = 'H56'),
                        (e.H73 = 'H73'),
                        (e.H144 = 'H144'));
                })($e || ($e = {})),
                    (function (e) {
                        ((e.C16x16 = '16x16'),
                            (e.C24x24 = '24x24'),
                            (e.C32x32 = '32x32'),
                            (e.C48x48 = '48x48'),
                            (e.C80x80 = '80x80'),
                            (e.C134x134 = '134x134'));
                    })(je || (je = {})));
                const Ke = (0, n.memo)(
                    ({
                        amount: e,
                        type: u,
                        iconSize: t,
                        labelSize: i,
                        isEnough: o = !0,
                        isHighlighted: a = !1,
                        isAmountVisible: l = !0,
                        isDiscount: s = !1,
                        isAnimated: c = !1,
                        isProgression: d = !1,
                        classMix: E,
                        isBooster: _ = !1,
                        maxAmount: m,
                    }) => {
                        const A = j.Z5.getNumberFormat(e, j.B3.GOLD),
                            h = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url('${R.images.historical_battles.gui.maps.icons.hbCoin.$dyn(`c_${t}`).$dyn(Ge.Offence)}')`,
                                }),
                                [t],
                            ),
                            F = g()(Ue.base, E),
                            D = g()(
                                Ue.label,
                                Ue[`label__${u}`],
                                Ue[`label__size${i}`],
                                a && Ue[`label__${u}Glow`],
                                !o && Ue.label__notEnough,
                                c && Ue.label__animated,
                                d && Ue.label__progression,
                                _ ? Ue.label__booster : Ue.label__default,
                            ),
                            B = g()(Ue.icon, Ue[`icon__size${t}`], c && Ue.icon__animated),
                            C = g()(Ue.stockBg, Ue[`stockBg__size${i}`]);
                        return r().createElement(
                            'div',
                            { className: F },
                            l && r().createElement(Xe, { text: A, className: D }),
                            m &&
                                r().createElement(Xe, {
                                    text: R.strings.historical_battles_progression.header.coinValue.maxAmount(),
                                    className: g()(D, Ue.maxAmount),
                                    format: { binding: { value: j.Z5.getNumberFormat(Number(m), j.B3.GOLD) } },
                                }),
                            r().createElement('div', { className: B, style: h }),
                            s && r().createElement('div', { className: C }),
                        );
                    },
                );
                function Ve() {
                    return (
                        (Ve =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ve.apply(this, arguments)
                    );
                }
                const qe = ({
                        classMix: e,
                        earnings: u,
                        isExchangeEnabled: t,
                        onExchangeClick: i,
                        isHardDisabled: o,
                    }) => {
                        const a = g()('CoinExchangeWidget_base_87', e),
                            l = (0, n.useContext)(m),
                            s = l.medium || l.large,
                            c = l.extraLarge,
                            d = (0, n.useMemo)(() => (s ? $e.H28 : c ? $e.H36 : $e.H22), [s, c]),
                            E = (0, n.useCallback)(() => i(), [i]),
                            _ = (0, n.useMemo)(
                                () =>
                                    o
                                        ? {
                                              contentId:
                                                  R.views.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent(
                                                      'resId',
                                                  ),
                                              decoratorId:
                                                  R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                              args: { body: R.strings.hb_lobby.shop.hardDisable() },
                                          }
                                        : {
                                              contentId:
                                                  R.views.historical_battles.lobby.tooltips.HbCoinExchangeTooltip(
                                                      'resId',
                                                  ),
                                          },
                                [o],
                            );
                        return r().createElement(
                            'div',
                            { className: a },
                            r().createElement(
                                me,
                                { contentId: R.views.historical_battles.lobby.tooltips.GeneralHbCoinTooltip('resId') },
                                r().createElement(
                                    'div',
                                    { className: 'CoinExchangeWidget_earnings_c7' },
                                    u.map(({ id: e, value: u }) =>
                                        r().createElement(
                                            Ke,
                                            Ve({ key: e }, u, {
                                                iconSize: je.C24x24,
                                                labelSize: d,
                                                classMix: 'CoinExchangeWidget_coin_d3',
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                            r().createElement(
                                me,
                                _,
                                r().createElement(
                                    'div',
                                    { className: 'CoinExchangeWidget_exchange_ec' },
                                    r().createElement('div', { className: 'CoinExchangeWidget_spark_cd' }),
                                    r().createElement(
                                        ce,
                                        {
                                            type: ae.primary,
                                            size: le.small,
                                            onClick: E,
                                            mixClass: 'CoinExchangeWidget_button_2c',
                                            disabled: !t || o,
                                        },
                                        R.strings.hb_lobby.coinExchangeWidget.exchangeBtn(),
                                    ),
                                ),
                            ),
                        );
                    },
                    Ze = ({ backgroundPath: e, classMix: u }) => {
                        const t = (0, n.useMemo)(() => {
                                const u = o.O.client.getSize('rem').height,
                                    t = o.O.view.getViewGlobalPosition('rem').y,
                                    n = o.O.view.getSize('rem').height;
                                return { backgroundImage: `url(${e})`, top: `-${t}rem`, bottom: `-${u - n - t}rem` };
                            }, [e]),
                            i = g()('LobbySubViewBackground_base_53', u);
                        return r().createElement('div', { className: i, style: t });
                    },
                    Qe = {
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
                    Je = [
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
                function eu() {
                    return (
                        (eu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        eu.apply(this, arguments)
                    );
                }
                class uu extends r().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && re(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && re(this.props.soundClick));
                            }),
                            (this._onMouseUp = (e) => (u) => {
                                (e && e(u), this.setState({ click: !1 }));
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 })));
                    }
                    render() {
                        const e = this.props,
                            u = e.caption,
                            t = e.onClick,
                            n = e.goto,
                            i = e.side,
                            o = e.type,
                            a = e.classNames,
                            l = e.onMouseEnter,
                            s = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            E =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(e, Je)),
                            _ = g()(Qe.base, Qe[`base__${o}`], Qe[`base__${i}`], null == a ? void 0 : a.base),
                            m = g()(Qe.icon, Qe[`icon__${o}`], Qe[`icon__${i}`], null == a ? void 0 : a.icon),
                            A = g()(Qe.glow, null == a ? void 0 : a.glow),
                            h = g()(Qe.caption, Qe[`caption__${o}`], null == a ? void 0 : a.caption),
                            F = g()(Qe.goto, null == a ? void 0 : a.goto);
                        return r().createElement(
                            'div',
                            eu(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(s),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                E,
                            ),
                            'info' !== o && r().createElement('div', { className: Qe.shine }),
                            r().createElement('div', { className: m }, r().createElement('div', { className: A })),
                            r().createElement('div', { className: h }, u),
                            n && r().createElement('div', { className: F }, n),
                        );
                    }
                }
                uu.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                let tu;
                !(function (e) {
                    ((e.Back = 'back'), (e.Forward = 'forward'), (e.Close = 'close'), (e.Info = 'info'));
                })(tu || (tu = {}));
                const nu = (0, n.memo)(
                        ({
                            background: e,
                            rightText: u = '',
                            leftText: t = '',
                            children: i,
                            leftSubText: o,
                            leftButtonType: a,
                            onClose: l,
                            onLeftButtonClick: s,
                            isHideButtons: c = !1,
                        }) => {
                            const d = (0, n.useMemo)(() => (e ? { backgroundImage: `url('${e}')` } : void 0), [e]);
                            return r().createElement(
                                'div',
                                { className: 'ViewDecorator_base_98', style: d },
                                !c &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        Boolean(t) &&
                                            r().createElement(
                                                'div',
                                                { className: 'ViewDecorator_leftBlock_16' },
                                                r().createElement(uu, {
                                                    caption: t,
                                                    goto: o,
                                                    type: a,
                                                    side: 'left',
                                                    onClick: s,
                                                }),
                                            ),
                                        Boolean(u) &&
                                            r().createElement(
                                                'div',
                                                { className: 'ViewDecorator_rightBlock_75' },
                                                r().createElement(uu, {
                                                    caption: u,
                                                    type: 'close',
                                                    side: 'right',
                                                    onClick: l,
                                                }),
                                            ),
                                    ),
                                r().createElement('div', { className: 'ViewDecorator_view_31' }, i),
                            );
                        },
                    ),
                    ru = (e) => {
                        let u,
                            t = null;
                        return (
                            (t = requestAnimationFrame(() => {
                                t = requestAnimationFrame(() => {
                                    ((t = null), (u = e()));
                                });
                            })),
                            () => {
                                ('function' == typeof u && u(), null !== t && cancelAnimationFrame(t));
                            }
                        );
                    },
                    iu = (e) => {
                        if (!e) return !1;
                        const u = e.getBoundingClientRect(),
                            t = u.width,
                            n = u.height;
                        return 0 !== t && 0 !== n;
                    };
                var ou = t(8380),
                    au = t.n(ou);
                const lu = r().forwardRef((e, u) => {
                        const t = e.offsetLeft,
                            i = void 0 === t ? 0 : t,
                            o = e.offsetTop,
                            a = void 0 === o ? 0 : o,
                            l = e.scrollSettings,
                            s = e.onUpdateActiveAxis,
                            c = e.onHorizontalScroll,
                            d = e.onVerticalScroll,
                            E = e.onOverScrollAtBeginning,
                            _ = e.onOverScrollAtEnd,
                            m = e.wrapperIndent,
                            A = e.verticalScrollbarMargin,
                            h = e.isMultipleScroll,
                            F = e.scrollAreaContainer,
                            D = e.children,
                            B = e.classMix,
                            C = e.onScrollLeftHandled,
                            p = (0, n.useState)(!1),
                            b = p[0],
                            f = p[1],
                            v = (0, n.useState)(),
                            w = v[0],
                            x = v[1],
                            y = (0, n.useState)(),
                            L = y[0],
                            S = y[1],
                            T = (0, n.useRef)(null),
                            M = (0, n.useCallback)(() => {
                                w &&
                                    s &&
                                    s({ x: w.scrollbarXActive, y: w.scrollbarYActive }, { x: w.reach.x, y: w.reach.y });
                            }, [s, w]),
                            H = (0, n.useCallback)(() => w, [w]),
                            k = (0, n.useCallback)(() => {
                                w && w.update();
                            }, [w]),
                            R = (0, n.useCallback)(
                                (e, u, t) => {
                                    w && (w.setScrollLeft(e, u, t), C && C(e, w.contentWidth - w.containerWidth));
                                },
                                [w, C],
                            ),
                            O = (0, n.useCallback)(
                                (e) => {
                                    w && (w.setScrollLeftImmediately(e), C && C(e, w.contentWidth - w.containerWidth));
                                },
                                [w, C],
                            ),
                            P = (0, n.useCallback)(
                                (e, u, t) => {
                                    w && w.setScrollTop(e, u, t);
                                },
                                [w],
                            ),
                            N = (0, n.useCallback)(
                                (e) => {
                                    w && w.setScrollTopImmediately(e);
                                },
                                [w],
                            ),
                            W = (0, n.useCallback)(() => {
                                if (L && c && w) {
                                    const e = { scrollPosition: L.scrollLeft < 0 ? 0 : L.scrollLeft, reach: w.reach.x };
                                    c(e);
                                }
                            }, [c, L, w]),
                            I = (0, n.useCallback)(() => {
                                if (L && d && w) {
                                    const e = { scrollPosition: L.scrollTop, reach: w.reach.y };
                                    d(e);
                                }
                            }, [d, L, w]),
                            X = (0, n.useCallback)(() => {
                                E && E();
                            }, [E]),
                            Y = (0, n.useCallback)(() => {
                                _ && _();
                            }, [_]),
                            G = (0, n.useCallback)(
                                (e) => {
                                    ('function' == typeof u ? u(e) : null !== u && (u.current = e), S(e));
                                },
                                [u],
                            ),
                            z = (0, n.useCallback)(() => {
                                w &&
                                    (w.update(),
                                    (T.current = ru(() => {
                                        M();
                                    })));
                            }, [w, M]),
                            U = (0, n.useCallback)((e) => {
                                0 === e.screenX &&
                                    0 === e.screenY &&
                                    (e.stopImmediatePropagation(), e.preventDefault());
                            }, []);
                        (0, n.useEffect)(() => {
                            if (w && L)
                                return (
                                    document.addEventListener('mousemove', U),
                                    window.addEventListener('resize', z),
                                    L.addEventListener('ps-scroll-x', W),
                                    L.addEventListener('ps-scroll-y', I),
                                    L.addEventListener('over-scroll-beginning', X),
                                    L.addEventListener('over-scroll-ending', Y),
                                    f(!0),
                                    () => {
                                        (window.removeEventListener('resize', z),
                                            document.removeEventListener('mousemove', U),
                                            L &&
                                                (L.removeEventListener('ps-scroll-x', W),
                                                L.removeEventListener('ps-scroll-y', I),
                                                L.removeEventListener('over-scroll-beginning', X),
                                                L.removeEventListener('over-scroll-ending', Y)));
                                    }
                                );
                        }, [U, W, X, Y, z, L, w, I]);
                        const $ = (0, n.useRef)(L || null);
                        $.current = L || null;
                        const j = ((e) => {
                            const u = (0, n.useState)(iu(e ? e.current : null)),
                                t = u[0],
                                r = u[1];
                            return (
                                (0, n.useEffect)(() => {
                                    let u = 0;
                                    const t = () => {
                                        u = requestAnimationFrame(() => {
                                            iu(e ? e.current : null) ? r(!0) : t();
                                        });
                                    };
                                    return (
                                        t(),
                                        () => {
                                            cancelAnimationFrame(u);
                                        }
                                    );
                                }, [e]),
                                (0, n.useEffect)(() => () => r(!1), [e]),
                                t
                            );
                        })($);
                        ((0, n.useEffect)(
                            () => (
                                !w && L && j && x(new (au())(L, Object.assign({}, l))),
                                () => {
                                    w && (w.destroy(), x(void 0));
                                }
                            ),
                            [L, j, l, w],
                        ),
                            (0, n.useEffect)(
                                () => () => {
                                    null == T.current || T.current();
                                },
                                [],
                            ),
                            (0, n.useEffect)(
                                () =>
                                    ru(() => {
                                        w && M();
                                    }),
                                [M, w],
                            ),
                            (0, n.useEffect)(() => {
                                i > 0 && O(i);
                            }, [i, O]),
                            (0, n.useEffect)(() => {
                                a > 0 && N(a);
                            }, [a, N]),
                            (0, n.useEffect)(() => {
                                F &&
                                    ((F.setScrollLeft = R),
                                    (F.setScrollTop = P),
                                    (F.setScrollLeftImmediately = O),
                                    (F.setScrollTopImmediately = N),
                                    (F.updateScrollArea = k),
                                    (F.getScrollbar = H));
                            }, [F, R, O, P, N, k, H]));
                        const K = g()(
                            'ScrollArea_base_47',
                            {
                                ScrollArea_base__scrollIndent_1d: m,
                                ScrollArea_base__hidden_ec: !b,
                                ScrollArea_base__verticalScrollbarMargin_50: A,
                                ScrollArea_base__multiple_44: h,
                            },
                            B,
                        );
                        return r().createElement('div', { className: K, ref: G }, D);
                    }),
                    su = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function cu() {
                    return (
                        (cu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        cu.apply(this, arguments)
                    );
                }
                const du = R.views.common.tooltip_window.simple_tooltip_content,
                    Eu = (e) => {
                        let u = e.children,
                            t = e.body,
                            i = e.header,
                            o = e.note,
                            a = e.alert,
                            l = e.args,
                            s = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, su);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, l, { body: t, header: i, note: o, alert: a });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [a, t, i, o, l]);
                        return r().createElement(
                            me,
                            cu(
                                {
                                    contentId:
                                        ((d = null == l ? void 0 : l.hasHtmlContent),
                                        d ? du.SimpleTooltipHtmlContent('resId') : du.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                s,
                            ),
                            u,
                        );
                        var d;
                    },
                    _u = ({ content: e, classMix: u }) => {
                        const t = (0, n.useRef)(null),
                            i = (0, n.useState)(!0),
                            o = i[0],
                            a = i[1];
                        return (
                            (0, n.useEffect)(() =>
                                ru(() => {
                                    const e = t.current;
                                    e && e.offsetWidth >= e.scrollWidth && a(!1);
                                }),
                            ),
                            r().createElement(
                                Eu,
                                { isEnabled: o, body: e },
                                r().createElement('div', { ref: t, className: g()('TextOverflow_base_3b', u) }, e),
                            )
                        );
                    },
                    mu = ['children'];
                function Au() {
                    return (
                        (Au =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Au.apply(this, arguments)
                    );
                }
                const hu = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, mu);
                    return r().createElement(
                        me,
                        Au(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            t,
                        ),
                        u,
                    );
                };
                function Fu() {
                    return (
                        (Fu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Fu.apply(this, arguments)
                    );
                }
                const Du = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const n = r().createElement('div', { className: t }, e);
                    if (u.header || u.body) return r().createElement(Eu, u, n);
                    const i = u.contentId,
                        o = u.args,
                        a = null == o ? void 0 : o.contentId;
                    return i || a
                        ? r().createElement(me, Fu({}, u, { contentId: i || a }), n)
                        : r().createElement(hu, u, n);
                };
                var Bu = t(9050),
                    gu = t.n(Bu);
                let Cu, pu, bu;
                (!(function (e) {
                    ((e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding'));
                })(Cu || (Cu = {})),
                    (function (e) {
                        ((e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end'));
                    })(pu || (pu = {})),
                    (function (e) {
                        ((e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n'));
                    })(bu || (bu = {})));
                const fu = { [bu.NBSP]: Cu.NoBreakSymbol, [bu.ZWNBSP]: Cu.NoBreakSymbol, [bu.NEW_LINE]: Cu.LineBreak },
                    vu = {
                        blackReal: 'colors_blackReal_fc',
                        whiteReal: 'colors_whiteReal_31',
                        white: 'colors_white_45',
                        whiteOrange: 'colors_whiteOrange_81',
                        whiteSpanish: 'colors_whiteSpanish_c3',
                        par: 'colors_par_5b',
                        parSecondary: 'colors_parSecondary_fd',
                        parTertiary: 'colors_parTertiary_97',
                        red: 'colors_red_79',
                        redDark: 'colors_redDark_73',
                        yellow: 'colors_yellow_76',
                        orange: 'colors_orange_cd',
                        cream: 'colors_cream_0f',
                        brown: 'colors_brown_82',
                        greenBright: 'colors_greenBright_68',
                        green: 'colors_green_fa',
                        greenDark: 'colors_greenDark_a9',
                        blueBooster: 'colors_blueBooster_26',
                        blueTeamkiller: 'colors_blueTeamkiller_86',
                        cred: 'colors_cred_35',
                        gold: 'colors_gold_c3',
                        bond: 'colors_bond_ce',
                        prom: 'colors_prom_83',
                    },
                    wu = (e) => ({ color: `#${e}` }),
                    xu = ({ elementList: e, textBlock: u, key: t }) => {
                        const n = u.colorTag;
                        return n
                            ? vu[n]
                                ? r().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: vu[n] },
                                      e,
                                  )
                                : r().createElement('span', { key: t, 'data-block-type': u.blockType, style: wu(n) }, e)
                            : r().createElement('span', { key: t, 'data-block-type': u.blockType }, e);
                    },
                    yu = {
                        [Cu.Word]: xu,
                        [Cu.NoBreakSymbol]: xu,
                        [Cu.Binding]: ({ elementList: e, textBlock: u, key: t }) =>
                            r().createElement(
                                'span',
                                { key: t, 'data-block-type': u.blockType },
                                e.map((e) => r().createElement(r().Fragment, { key: t }, e)),
                            ),
                        [Cu.LineBreak]: ({ key: e }) =>
                            r().createElement('span', {
                                key: e,
                                'data-block-type': Cu.LineBreak,
                                className: 'renderers_lineBreak_b5',
                            }),
                        [Cu.NewLine]: ({ elementList: e, key: u }) =>
                            r().createElement(
                                'span',
                                { key: u, 'data-block-type': Cu.NewLine, className: 'renderers_newLine_bd' },
                                e,
                            ),
                        [Cu.NoBreakWrapper]: ({ elementList: e, key: u }) =>
                            r().createElement(
                                'span',
                                {
                                    key: u,
                                    'data-block-type': Cu.NoBreakWrapper,
                                    className: 'renderers_noBreakWrapper_10',
                                },
                                e,
                            ),
                    },
                    Lu = (e, u, t) => {
                        const n = [];
                        return (
                            e.childList.forEach((r, i) => {
                                const o = `${t}_${i}`;
                                if (((e) => void 0 !== e.childList)(r)) {
                                    const e = r,
                                        u = e.blockType,
                                        t = Lu(e, yu[u], o);
                                    n.push(...t);
                                } else n.push(u({ elementList: [r], textBlock: e, key: o }));
                            }),
                            n
                        );
                    },
                    Su = (e, u, t, n) => {
                        let r = u.exec(e),
                            i = 0;
                        for (; r;) (i !== r.index && t(e.slice(i, r.index)), n(r), (i = u.lastIndex), (r = u.exec(e)));
                        i !== e.length && t(e.slice(i));
                    },
                    Tu = (e) => {
                        const u = /[\s\u002d]/g;
                        let t = u.exec(e);
                        if (!t) return [e];
                        const n = [];
                        let r = 0;
                        for (; t;) (n.push(e.slice(r, u.lastIndex)), (r = u.lastIndex), (t = u.exec(e)));
                        return (r !== e.length && n.push(e.slice(r)), n);
                    },
                    Mu = (e, u = '') => {
                        const t = [];
                        return (
                            Su(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    t.push({ blockType: Cu.Word, colorTag: u, childList: Tu(e) });
                                },
                                (e) => {
                                    const n = e[0],
                                        r = fu[n.charAt(0)];
                                    r === Cu.LineBreak
                                        ? t.push(
                                              ...((e) => {
                                                  const u = [
                                                      {
                                                          blockType: Cu.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < e.length - 1; t++)
                                                      u.push({
                                                          blockType: Cu.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return u;
                                              })(n),
                                          )
                                        : t.push({ blockType: r, colorTag: u, childList: [n] });
                                },
                            ),
                            t
                        );
                    },
                    Hu = (e, u, t = '') => {
                        const n = [];
                        return (
                            Su(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    n.push(...Mu(e, t));
                                },
                                (e) => {
                                    const r = e[1],
                                        i = void 0 === u[r] ? e[0] : u[r];
                                    'string' == typeof i || 'number' == typeof i
                                        ? n.push(...Mu(String(i), t))
                                        : n.push({ blockType: Cu.Binding, colorTag: t, childList: [i] });
                                },
                            ),
                            n
                        );
                    },
                    ku = (e, u) => {
                        if (!e) return [u];
                        const t = [],
                            n = Object.assign({}, u, { childList: u.childList.splice(0, 1) });
                        if (e.blockType === Cu.NoBreakWrapper) (e.childList.push(n), t.push(e));
                        else {
                            const u = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            (e.childList.length > 0 && t.push(e),
                                t.push({ blockType: Cu.NoBreakWrapper, colorTag: '', childList: [u, n] }));
                        }
                        return (u.childList.length > 0 && t.push(u), t);
                    },
                    Ru = (e, u = {}) => {
                        if (!e) return [];
                        const t = ((e) => {
                            const u = [];
                            let t = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === Cu.NoBreakSymbol
                                        ? ((t = !0), u.push(...ku(u.pop(), e)))
                                        : (t ? u.push(...ku(u.pop(), e)) : u.push(e), (t = !1));
                                }),
                                u
                            );
                        })(
                            ((e, u) => {
                                const t = [];
                                return (
                                    Su(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})/g,
                                        (e) => {
                                            t.push(...Hu(e, u));
                                        },
                                        (e) => {
                                            t.push(...Hu(e[2], u, e[1]));
                                        },
                                    ),
                                    t
                                );
                            })(W(e).replace(/&zwnbsp;/g, '\ufeff'), u),
                        );
                        return ((e) => {
                            const u = [];
                            return (
                                e.forEach((e, t) => {
                                    u.push(
                                        ...((e, u) => {
                                            const t = [],
                                                n = e.blockType,
                                                r = yu[n],
                                                i = Lu(e, r, u);
                                            return (
                                                n === Cu.NoBreakWrapper
                                                    ? t.push(r({ elementList: i, textBlock: e, key: `${u}` }))
                                                    : t.push(...i),
                                                t
                                            );
                                        })(e, t),
                                    );
                                }),
                                u
                            );
                        })(t);
                    },
                    Ou = (e, u) => !e || e.offsetTop + e.offsetHeight > u,
                    Pu = (e, u) => e.offsetLeft + e.offsetWidth - u,
                    Nu = (e, u, t) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > u) return [!1, 0];
                        const n = Pu(e, u),
                            r = e.textContent.length,
                            i = e.offsetWidth / r,
                            o = Math.ceil(n / i);
                        if (n > 0) {
                            const n = Math.floor((u - e.offsetLeft) / i);
                            return n >= t ? [!0, t + o] : [!1, n];
                        }
                        const a = Math.max(t + o, 0);
                        return r < a ? [!1, 0] : [!0, a];
                    },
                    Wu = (e, u, t, n, i, o) => {
                        let a = -1,
                            l = null;
                        for (let s = t; s >= 0; s--) {
                            const t = e[s],
                                c = Number(e[s].getAttribute('data-block-type'));
                            if (c === Cu.LineBreak || c === Cu.NewLine || c === Cu.Binding) continue;
                            const d = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const e = Nu(t, n, i),
                                    c = e[0],
                                    E = e[1];
                                if (!c) {
                                    E > 0 && (i -= E);
                                    continue;
                                }
                                const _ = d.slice(0, d.length - E) + o,
                                    m = u[s];
                                ((l = r().cloneElement(m, m.props, _)), (a = s));
                                break;
                            }
                            {
                                const e = t.children,
                                    c = u[s],
                                    E = c.props.children,
                                    _ = Wu(e, E, e.length - 1, n, i, o),
                                    m = _[0],
                                    A = _[1];
                                if (!(m < 0)) {
                                    const e = E.slice(0, m);
                                    ((l = r().cloneElement(c, c.props, e, A)), (a = s));
                                    break;
                                }
                                i -= d.length;
                            }
                        }
                        return [a, l];
                    },
                    Iu = r().memo(
                        ({
                            text: e,
                            classMix: u,
                            onSizeChanged: t,
                            binding: i,
                            isTooltipEnable: o = !1,
                            isTruncationAvailable: a = !1,
                            targetId: l,
                            justifyContent: s = pu.FlexStart,
                            alignContent: c = pu.FlexStart,
                            truncateIdentify: d = '...',
                        }) => {
                            const E = (0, n.useRef)(null),
                                _ = (0, n.useRef)({ height: 0, width: 0 }),
                                m = (0, n.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                A = m[0],
                                h = m[1],
                                F = (0, n.useMemo)(() => Ru(e, i), [i, e]),
                                D = (0, n.useMemo)(() => {
                                    if (o && A.isTruncated)
                                        return {
                                            args: { text: e, stringifyKwargs: i ? JSON.stringify(i) : '' },
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: l,
                                        };
                                }, [i, o, l, e, A.isTruncated]),
                                B = (0, n.useCallback)(
                                    (e) => {
                                        ((_.current.width = e.contentRect.width),
                                            (_.current.height = e.contentRect.height));
                                        const u = ((e, u, t, n = '...') => {
                                                const r = [...u],
                                                    i = e.current;
                                                if (!i) return [r, !1];
                                                const o = t.height,
                                                    a = t.width,
                                                    l = i.lastElementChild;
                                                if (!Ou(l, o) && Pu(l, a) <= 0) return [r, !1];
                                                const s = i.children,
                                                    c = ((e, u) => {
                                                        let t = 0,
                                                            n = e.length - 1;
                                                        for (; n - t >= 0;) {
                                                            const r = t + Math.ceil(0.5 * (n - t));
                                                            Ou(e[r], u) ? (n = r - 1) : (t = r + 1);
                                                        }
                                                        return t - 1;
                                                    })(s, o);
                                                if (c < 0) return [r, !1];
                                                const d = Wu(s, r, c, a, n.length, n),
                                                    E = d[0],
                                                    _ = d[1];
                                                return (_ && (r.splice(E, 1, _), r.splice(E + 1)), [r, !0]);
                                            })(E, F, _.current, d),
                                            n = u[0],
                                            r = u[1];
                                        (h({ elementList: n, isTruncated: r, isTruncateFinished: !0 }), t && t(r));
                                    },
                                    [t, d, F],
                                ),
                                C = (0, n.useMemo)(() => ({ justifyContent: s, alignContent: c }), [c, s]);
                            return (
                                ((e, u, t = !0) => {
                                    const r = (0, n.useCallback)(
                                        (e) => {
                                            const t = e[0];
                                            u && u(t);
                                        },
                                        [u],
                                    );
                                    (0, n.useEffect)(() => {
                                        if (!e.current || !t) return;
                                        const u = new (gu())((e) => r(e));
                                        return (
                                            u.observe(e.current),
                                            () => {
                                                u.disconnect();
                                            }
                                        );
                                    }, [r, t, e]);
                                })(E, B, a),
                                r().createElement(
                                    'div',
                                    {
                                        className: g()(
                                            'ExtendedText_base_71',
                                            u,
                                            'ExtendedText_base__zeroPadding_25',
                                            a && 'ExtendedText_base__isTruncationAvailable_5b',
                                        ),
                                        style: C,
                                    },
                                    r().createElement('div', { className: 'ExtendedText_unTruncated_b8', ref: E }, F),
                                    r().createElement(
                                        Du,
                                        { tooltipArgs: D },
                                        r().createElement(
                                            'div',
                                            {
                                                className: g()(
                                                    'ExtendedText_truncated_97',
                                                    !A.isTruncateFinished && a && 'ExtendedText_truncated__hide_31',
                                                ),
                                                style: C,
                                            },
                                            A.isTruncateFinished && a ? A.elementList : F,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    Xu = { calcValue: 0, isPositive: !0, valueKey: 'default' },
                    Yu = ({ values: e, localeName: u }) => {
                        const t = e.filter(({ value: { valueKey: e } = {} }) => e === u).pop();
                        if (!t) return Xu;
                        const n = t.value,
                            r = n.value,
                            i = 'mul' === n.valueType ? 100 * (r - 1) : r;
                        return { calcValue: i, isPositive: i > 0, valueKey: n.valueKey };
                    },
                    Gu = (e, u = !1) =>
                        u || Yu(e).isPositive
                            ? R.strings.tank_setup.kpi.bonus.positive.$dyn(e.localeName)
                            : R.strings.tank_setup.kpi.bonus.negative.$dyn(e.localeName),
                    zu = (e, u = R.sounds.highlight()) => {
                        const t = ((e = R.sounds.highlight()) => {
                                const u = (0, n.useState)(!1),
                                    t = u[0],
                                    r = u[1],
                                    i = (0, n.useMemo)(
                                        () => [
                                            () => {
                                                (re(e), r(!0));
                                            },
                                            () => {
                                                r(!1);
                                            },
                                        ],
                                        [e],
                                    );
                                return [t, i[0], i[1]];
                            })(u),
                            r = t[0],
                            i = t[1],
                            o = t[2],
                            a = (0, n.useRef)(0),
                            l = (0, n.useCallback)((e) => {
                                a.current = requestAnimationFrame(() => {
                                    e();
                                });
                            }, []),
                            s = (0, n.useCallback)(() => !e && l(i), [e, i, l]),
                            c = (0, n.useCallback)(() => !e && l(o), [e, o, l]);
                        return ((0, n.useEffect)(() => () => cancelAnimationFrame(a.current)), [r, s, c]);
                    };
                let Uu, $u, ju;
                (!(function (e) {
                    ((e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                })(Uu || (Uu = {})),
                    (function (e) {
                        ((e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.equipCoin = 'equipCoin'));
                    })($u || ($u = {})),
                    (function (e) {
                        ((e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG'));
                    })(ju || (ju = {})));
                class Ku extends r().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? j.B3.GOLD : j.B3.INTEGRAL;
                        const u = j.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                Ku.defaultProps = { format: 'integral' };
                const Vu = {
                        base: 'Currency_base_57',
                        icon: 'Currency_icon_c5',
                        base__small: 'Currency_base__small_af',
                        base__big: 'Currency_base__big_bc',
                        base__large: 'Currency_base__large_65',
                        base__extraLarge: 'Currency_base__extraLarge_4d',
                        'icon__credits-small': 'Currency_icon__credits-small_9b',
                        'icon__credits-big': 'Currency_icon__credits-big_96',
                        'icon__credits-large': 'Currency_icon__credits-large_ac',
                        'icon__credits-extraLarge': 'Currency_icon__credits-extraLarge_16',
                        'icon__gold-small': 'Currency_icon__gold-small_86',
                        'icon__gold-big': 'Currency_icon__gold-big_15',
                        'icon__gold-large': 'Currency_icon__gold-large_36',
                        'icon__gold-extraLarge': 'Currency_icon__gold-extraLarge_a0',
                        'icon__crystal-small': 'Currency_icon__crystal-small_27',
                        'icon__crystal-big': 'Currency_icon__crystal-big_cd',
                        'icon__crystal-large': 'Currency_icon__crystal-large_d3',
                        'icon__crystal-extraLarge': 'Currency_icon__crystal-extraLarge_09',
                        'icon__xp-small': 'Currency_icon__xp-small_a7',
                        'icon__xp-big': 'Currency_icon__xp-big_97',
                        'icon__xp-large': 'Currency_icon__xp-large_6b',
                        'icon__xp-extraLarge': 'Currency_icon__xp-extraLarge_67',
                        'icon__freeXP-small': 'Currency_icon__freeXP-small_ca',
                        'icon__freeXP-big': 'Currency_icon__freeXP-big_21',
                        'icon__freeXP-large': 'Currency_icon__freeXP-large_c8',
                        'icon__freeXP-extraLarge': 'Currency_icon__freeXP-extraLarge_58',
                        'icon__equipCoin-small': 'Currency_icon__equipCoin-small_32',
                        'icon__equipCoin-big': 'Currency_icon__equipCoin-big_79',
                        'icon__equipCoin-large': 'Currency_icon__equipCoin-large_2c',
                        'icon__equipCoin-extraLarge': 'Currency_icon__equipCoin-extraLarge_8a',
                        value: 'Currency_value_e1',
                        value__freeXP: 'Currency_value__freeXP_cb',
                        value__credits: 'Currency_value__credits_76',
                        value__gold: 'Currency_value__gold_dd',
                        value__xp: 'Currency_value__xp_b0',
                        value__crystal: 'Currency_value__crystal_19',
                        value__equipCoin: 'Currency_value__equipCoin_d0',
                        value__notEnough: 'Currency_value__notEnough_56',
                        stock: 'Currency_stock_87',
                        stock__indent: 'Currency_stock__indent_a1',
                        stock__interactive: 'Currency_stock__interactive_93',
                        stockBackground: 'Currency_stockBackground_82',
                    },
                    qu = ({
                        isDiscount: e,
                        isInteractiveDiscount: u,
                        size: t,
                        type: n,
                        isEnough: i,
                        value: o,
                        discountValue: a,
                        showPlus: l,
                        stockBackgroundName: s = ju.Red,
                    }) => {
                        const c = g()(Vu.value, Vu[`value__${n}`], !i && Vu.value__notEnough),
                            d = g()(Vu.icon, Vu[`icon__${n}-${t}`]),
                            E = g()(Vu.stock, a && Vu.stock__indent, u && Vu.stock__interactive),
                            _ = l && o > 0 && '+',
                            m = g()(Vu.base, Vu[`base__${t}`]);
                        return r().createElement(
                            'span',
                            { className: m },
                            r().createElement(
                                'span',
                                { className: c },
                                _,
                                r().createElement(Ku, { value: o, format: n === $u.gold ? 'gold' : 'integral' }),
                            ),
                            r().createElement('span', { className: d }),
                            e &&
                                r().createElement(
                                    'span',
                                    { className: E },
                                    r().createElement('span', {
                                        className: Vu.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${s})` },
                                    }),
                                    Boolean(a) && a,
                                ),
                        );
                    };
                qu.defaultProps = { isEnough: !0 };
                const Zu = r().memo(qu),
                    Qu = {
                        base: 'SimplePrice_base_41',
                        oldPrice: 'SimplePrice_oldPrice_bf',
                        oldPrice__small: 'SimplePrice_oldPrice__small_79',
                        line: 'SimplePrice_line_e0',
                    };
                function Ju() {
                    return (
                        (Ju =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ju.apply(this, arguments)
                    );
                }
                let et, ut;
                (!(function (e) {
                    ((e.Tiny = 'tiny'), (e.Small = 'small'), (e.Big = 'big'), (e.ExtraBig = 'extraBig'));
                })(et || (et = {})),
                    (function (e) {
                        ((e.Credits = 'credits'), (e.Gold = 'gold'), (e.Crystal = 'crystal'));
                    })(ut || (ut = {})));
                const tt = [ut.Credits, ut.Crystal, ut.Gold],
                    nt = {
                        [et.Tiny]: { iconSize: je.C16x16, labelSize: $e.P14 },
                        [et.Small]: { iconSize: je.C16x16, labelSize: $e.H18 },
                        [et.Big]: { iconSize: je.C24x24, labelSize: $e.H22 },
                        [et.ExtraBig]: { iconSize: je.C24x24, labelSize: $e.H28 },
                    },
                    rt = r().memo(
                        ({
                            type: e,
                            discount: u,
                            isEnough: t,
                            isDiscount: i,
                            value: o,
                            oldValue: a,
                            size: l = et.Small,
                        }) => {
                            const s = ((e) => {
                                    switch (e) {
                                        case et.Tiny:
                                        case et.Small:
                                            return Uu.small;
                                        case et.Big:
                                        case et.ExtraBig:
                                            return Uu.big;
                                    }
                                })(l),
                                c = (0, n.useMemo)(
                                    () => ({
                                        contentId: R.views.historical_battles.lobby.tooltips.HbCoinTooltip('resId'),
                                        args: { coinType: e, itemPrice: o },
                                    }),
                                    [e, o],
                                ),
                                d = e in tt,
                                E = g()(Qu.oldPrice, Qu[`oldPrice__${l}`]);
                            return r().createElement(
                                'div',
                                { className: Qu.base },
                                i &&
                                    Boolean(a) &&
                                    r().createElement(
                                        'div',
                                        { className: E },
                                        j.Z5.getNumberFormat(a, j.B3.INTEGRAL),
                                        r().createElement('div', { className: Qu.line }),
                                    ),
                                d
                                    ? r().createElement(Zu, {
                                          size: s,
                                          type: e,
                                          discountValue: u,
                                          isEnough: t,
                                          isDiscount: i,
                                          value: o,
                                      })
                                    : r().createElement(
                                          me,
                                          c,
                                          r().createElement(
                                              'div',
                                              null,
                                              r().createElement(
                                                  Ke,
                                                  Ju({ type: e, amount: o }, nt[l], { isDiscount: i, isEnough: t }),
                                              ),
                                          ),
                                      ),
                            );
                        },
                    ),
                    it = {
                        base: 'MultiPrice_base_a0',
                        plus: 'MultiPrice_plus_cb',
                        plus__tiny: 'MultiPrice_plus__tiny_1a',
                        plus__small: 'MultiPrice_plus__small_5a',
                        plus__big: 'MultiPrice_plus__big_21',
                        item: 'MultiPrice_item_62',
                    };
                function ot() {
                    return (
                        (ot =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ot.apply(this, arguments)
                    );
                }
                let at;
                !(function (e) {
                    ((e.Tiny = 'tiny'), (e.Small = 'small'), (e.Big = 'big'), (e.ExtraBig = 'extraBig'));
                })(at || (at = {}));
                const lt = ({ prices: e, classMix: u, wallet: t, size: i = at.Big }) => {
                    const o = (0, n.useCallback)(
                        (e) => {
                            if (!t) return e.isEnough;
                            const u = t.filter((u) => u.value.type === e.type)[0];
                            return !u || u.value.count >= e.value;
                        },
                        [t],
                    );
                    if (!e || 0 === e.length) return null;
                    const a = g()(it.base, u),
                        l = g()(it.plus, it[`plus__${i}`]);
                    return r().createElement(
                        'div',
                        { className: a },
                        e &&
                            e.map((u, t) => {
                                if (u)
                                    return r().createElement(
                                        'div',
                                        { key: `${u.value.type}_${t}`, className: it.item },
                                        r().createElement(rt, ot({}, u.value, { isEnough: o(u.value), size: i })),
                                        e.length !== t + 1 && r().createElement('div', { className: l }),
                                    );
                            }),
                    );
                };
                function st() {
                    return (
                        (st =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        st.apply(this, arguments)
                    );
                }
                const ct = ({
                        id: e,
                        icon: u,
                        bonuses: t,
                        buyCount: i,
                        price: o,
                        overlayType: a,
                        effect: l,
                        classMix: s,
                    }) => {
                        const c = (0, n.useContext)(m),
                            d = ee('model.items', J.None).onItemClicked,
                            E = !!o.prices.some((e) => !e.value.isEnough),
                            _ = zu(E),
                            A = _[0],
                            h = _[1],
                            F = _[2],
                            D = (0, n.useMemo)(
                                () =>
                                    c.extraLarge
                                        ? {
                                              backgroundImage: `url('${R.images.gui.maps.shop.artefacts.c_360x270.$dyn(u)}')`,
                                          }
                                        : {
                                              backgroundImage: `url('${R.images.gui.maps.shop.artefacts.c_180x135.$dyn(u)}')`,
                                          },
                                [u, c.extraLarge],
                            ),
                            B = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url('${R.images.gui.maps.shop.artefacts.c_180x135.$dyn(`${a}_overlay`)}')`,
                                }),
                                [a],
                            ),
                            C = (0, n.useCallback)(() => {
                                E || (ie.playClick(), d({ bundleID: e }));
                            }, [E, d, e]),
                            p = (0, n.useMemo)(
                                () => (c.extraSmall || c.small ? at.Small : c.extraLarge ? at.ExtraBig : at.Big),
                                [c.extraLarge, c.extraSmall, c.small],
                            ),
                            b = (0, n.useMemo)(
                                () => ({
                                    effectIcon: r().createElement(
                                        'div',
                                        { className: 'Item_effect_d0' },
                                        r().createElement('div', { className: 'Item_effectIcon_ce' }),
                                        R.strings.hb_shop.effects.name(),
                                    ),
                                    effectText: l,
                                }),
                                [l],
                            ),
                            f = g()('Item_base_6d', A && 'Item_base__hovered_5a', E && 'Item_base__disabled_fa', s);
                        return r().createElement(
                            'div',
                            { className: f, onMouseLeave: F, onMouseEnter: h, onClick: C },
                            r().createElement('div', { className: 'Item_hover_72' }),
                            r().createElement('div', { className: 'Item_icon_03', style: D }),
                            r().createElement('div', { className: 'Item_overlay_d1', style: B }),
                            r().createElement(
                                'div',
                                { className: 'Item_text_2a' },
                                r().createElement('div', { className: 'Item_name_76' }, t.title),
                                l
                                    ? r().createElement(Iu, {
                                          classMix: 'Item_effectText_5e',
                                          isTruncationAvailable: !0,
                                          isTooltipEnable: !0,
                                          text: '%(effectIcon)%(effectText)',
                                          binding: b,
                                      })
                                    : t.items.map(({ value: e }, u) =>
                                          r().createElement(
                                              'div',
                                              { key: u, className: 'Item_description_4f' },
                                              r().createElement(
                                                  'div',
                                                  { className: 'Item_bonus_84' },
                                                  ((e) => {
                                                      const u = Yu(e),
                                                          t = u.calcValue,
                                                          n = u.isPositive,
                                                          r = u.valueKey;
                                                      return `${n ? '+' : ''}${j.Z5.getRealFormat(t, j.Gr.WO_ZERO_DIGITS)}${R.strings.tank_setup.kpi.bonus.valueTypes.$dyn(r) || '%'}`;
                                                  })(e),
                                              ),
                                              r().createElement(_u, { content: Gu(e) }),
                                          ),
                                      ),
                            ),
                            i > 0 &&
                                r().createElement(
                                    'div',
                                    { className: 'Item_buyCount_4a' },
                                    r().createElement('div', { className: 'Item_warehousIcon_83' }),
                                    i,
                                ),
                            r().createElement(
                                'div',
                                { className: 'Item_price_ae' },
                                r().createElement(lt, st({}, o, { size: p })),
                            ),
                        );
                    },
                    dt = 'List_devider_4f';
                function Et() {
                    return (
                        (Et =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Et.apply(this, arguments)
                    );
                }
                const _t = { enableHorizontalScroll: !1, suppressScrollX: !0, animationDuration: 700 },
                    mt = () => {
                        const e = ee('model.items.items'),
                            u = (0, n.useState)(!1),
                            t = u[0],
                            i = u[1],
                            o = (0, n.useRef)({}),
                            a = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            s = (0, n.useCallback)(() => {
                                const e = l.current,
                                    u = a.current;
                                u && e && i(e.offsetHeight > u.offsetHeight);
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                (o.current && o.current.updateScrollArea && o.current.updateScrollArea(), s());
                            }, [s]),
                            r().createElement(
                                'div',
                                { className: 'List_base_a2', ref: a },
                                r().createElement('div', { className: dt }),
                                r().createElement(
                                    lu,
                                    {
                                        classMix: 'List_container_b9',
                                        scrollSettings: _t,
                                        scrollAreaContainer: o.current,
                                        onUpdateActiveAxis: s,
                                    },
                                    r().createElement(
                                        'div',
                                        { className: 'List_content_1b', ref: l },
                                        e.map(({ value: e }) =>
                                            r().createElement(ct, Et({ key: e.id, classMix: 'List_item_90' }, e)),
                                        ),
                                    ),
                                ),
                                t && r().createElement('div', { className: dt }),
                            )
                        );
                    },
                    At = () => {
                        const e = (0, n.useContext)(m),
                            u = ee('model', J.None),
                            t = u.onClose,
                            i = u.onBack,
                            o = ee('model.coinWidget'),
                            a = o.isExchangeEnabled,
                            l = o.onExchangeClick,
                            s = o.isHardDisabled,
                            c = ee('model.coinWidget.earnings'),
                            d = (0, n.useCallback)(() => t(), [t]),
                            E = (0, n.useCallback)(() => i(), [i]);
                        var _;
                        ((_ = E), ne(ue.n.ESCAPE, _));
                        const A = (0, n.useMemo)(
                            () => ({
                                leftText: R.strings.hb_lobby.shop.optionalDevices.backBtn(),
                                leftSubText:
                                    e.extraSmall || e.small || e.medium
                                        ? ''
                                        : R.strings.hb_lobby.shop.optionalDevices.backTo(),
                                leftButtonType: tu.Back,
                                rightText: R.strings.hb_lobby.shop.optionalDevices.close(),
                                onLeftButtonClick: E,
                                onClose: d,
                            }),
                            [e.extraSmall, e.small, e.medium, E, d],
                        );
                        return r().createElement(
                            nu,
                            A,
                            r().createElement(
                                'div',
                                { className: 'OptionalDevicesApp_base_89' },
                                r().createElement(Ze, {
                                    backgroundPath:
                                        R.images.historical_battles.gui.maps.icons.backgrounds.shopBackground(),
                                }),
                                r().createElement(
                                    'div',
                                    { className: 'OptionalDevicesApp_header_70' },
                                    r().createElement(
                                        'div',
                                        { className: 'OptionalDevicesApp_text_c5' },
                                        R.strings.hb_lobby.shop.optionalDevices.header(),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: 'OptionalDevicesApp_coinWidget_c1' },
                                        r().createElement(qe, {
                                            earnings: c,
                                            isExchangeEnabled: a,
                                            onExchangeClick: l,
                                            isHardDisabled: s,
                                        }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: 'OptionalDevicesApp_info_ca' },
                                        r().createElement('div', { className: 'OptionalDevicesApp_infoIcon_31' }),
                                        R.strings.hb_lobby.shop.optionalDevices.warning(),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'OptionalDevicesApp_container_c4' },
                                    r().createElement(mt, null),
                                ),
                            ),
                        );
                    };
                engine.whenReady.then(() => {
                    P().render(
                        r().createElement(k, null, r().createElement(At, null)),
                        document.getElementById('root'),
                    );
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e].call(t.exports, t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var r = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [u, t, n] = deferred[l], i = !0, o = 0; o < u.length; o++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((i = !1), n < r && (r = n));
                    if (i) {
                        deferred.splice(l--, 1);
                        var a = t();
                        void 0 !== a && (e = a);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > n; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [u, t, n];
        }),
        (__webpack_require__.n = (e) => {
            var u = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(u, { a: u }), u);
        }),
        (__webpack_require__.d = (e, u) => {
            for (var t in u)
                __webpack_require__.o(u, t) &&
                    !__webpack_require__.o(e, t) &&
                    Object.defineProperty(e, t, { enumerable: !0, get: u[t] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (e, u) => Object.prototype.hasOwnProperty.call(e, u)),
        (__webpack_require__.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (() => {
            var e = { 137: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [i, o, a] = t,
                        l = 0;
                    if (i.some((u) => 0 !== e[u])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (a) var s = a(__webpack_require__);
                    }
                    for (u && u(t); l < i.length; l++)
                        ((r = i[l]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(s);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(9170));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
