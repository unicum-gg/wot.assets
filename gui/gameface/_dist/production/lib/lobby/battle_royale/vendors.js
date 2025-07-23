(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [695],
    {
        483: (e, t) => {
            var n;
            !(function () {
                'use strict';
                var r = {}.hasOwnProperty;
                function i() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        if (n) {
                            var o = typeof n;
                            if ('string' === o || 'number' === o) e.push(n);
                            else if (Array.isArray(n) && n.length) {
                                var a = i.apply(null, n);
                                a && e.push(a);
                            } else if ('object' === o) for (var s in n) r.call(n, s) && n[s] && e.push(s);
                        }
                    }
                    return e.join(' ');
                }
                e.exports
                    ? ((i.default = i), (e.exports = i))
                    : void 0 ===
                          (n = function () {
                              return i;
                          }.apply(t, [])) || (e.exports = n);
            })();
        },
        403: (e, t, n) => {
            'use strict';
            n.d(t, { Pi: () => w });
            var r = n(174),
                i = n(363),
                o = n.n(i);
            if (!i.useState) throw new Error('mobx-react-lite requires React with Hooks support');
            if (!r.rC) throw new Error('mobx-react-lite@3 requires mobx at least version 6 to be available');
            var a = n(533);
            function s(e) {
                e();
            }
            var u = n(13),
                c = 'undefined' == typeof FinalizationRegistry ? void 0 : FinalizationRegistry,
                l = n(373);
            var f = function (e) {
                var t = 'function' == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && 'number' == typeof e.length)
                    return {
                        next: function () {
                            return (e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e });
                        },
                    };
                throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
            };
            var h = c
                    ? (function (e) {
                          var t = new Map(),
                              n = 1,
                              r = new e(function (e) {
                                  var n = t.get(e);
                                  n && (n.reaction.dispose(), t.delete(e));
                              });
                          return {
                              addReactionToTrack: function (e, i, o) {
                                  var a = n++;
                                  return (
                                      r.register(o, a, e),
                                      (e.current = (0, l.Uy)(i)),
                                      (e.current.finalizationRegistryCleanupToken = a),
                                      t.set(a, e.current),
                                      e.current
                                  );
                              },
                              recordReactionAsCommitted: function (e) {
                                  (r.unregister(e),
                                      e.current &&
                                          e.current.finalizationRegistryCleanupToken &&
                                          t.delete(e.current.finalizationRegistryCleanupToken));
                              },
                              forceCleanupTimerToRunNowForTests: function () {},
                              resetCleanupScheduleForTests: function () {},
                          };
                      })(c)
                    : (function () {
                          var e,
                              t = new Set();
                          function n() {
                              void 0 === e && (e = setTimeout(r, l.Qs));
                          }
                          function r() {
                              e = void 0;
                              var r = Date.now();
                              (t.forEach(function (e) {
                                  var n = e.current;
                                  n && r >= n.cleanAt && (n.reaction.dispose(), (e.current = null), t.delete(e));
                              }),
                                  t.size > 0 && n());
                          }
                          return {
                              addReactionToTrack: function (e, r, i) {
                                  var o;
                                  return ((e.current = (0, l.Uy)(r)), (o = e), t.add(o), n(), e.current);
                              },
                              recordReactionAsCommitted: function (e) {
                                  t.delete(e);
                              },
                              forceCleanupTimerToRunNowForTests: function () {
                                  e && (clearTimeout(e), r());
                              },
                              resetCleanupScheduleForTests: function () {
                                  var n, r;
                                  if (t.size > 0) {
                                      try {
                                          for (var i = f(t), o = i.next(); !o.done; o = i.next()) {
                                              var a = o.value,
                                                  s = a.current;
                                              s && (s.reaction.dispose(), (a.current = null));
                                          }
                                      } catch (e) {
                                          n = { error: e };
                                      } finally {
                                          try {
                                              o && !o.done && (r = i.return) && r.call(i);
                                          } finally {
                                              if (n) throw n.error;
                                          }
                                      }
                                      t.clear();
                                  }
                                  e && (clearTimeout(e), (e = void 0));
                              },
                          };
                      })(),
                v = h.addReactionToTrack,
                d = h.recordReactionAsCommitted,
                p = (h.resetCleanupScheduleForTests, h.forceCleanupTimerToRunNowForTests, n(286)),
                _ = function (e, t) {
                    var n = 'function' == typeof Symbol && e[Symbol.iterator];
                    if (!n) return e;
                    var r,
                        i,
                        o = n.call(e),
                        a = [];
                    try {
                        for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; ) a.push(r.value);
                    } catch (e) {
                        i = { error: e };
                    } finally {
                        try {
                            r && !r.done && (n = o.return) && n.call(o);
                        } finally {
                            if (i) throw i.error;
                        }
                    }
                    return a;
                };
            function b(e) {
                return 'observer' + e;
            }
            var y = function () {};
            function g() {
                return new y();
            }
            function m(e, t) {
                if ((void 0 === t && (t = 'observed'), (0, p.F)())) return e();
                var n = _(o().useState(g), 1)[0],
                    i = _(o().useState(), 2)[1],
                    a = function () {
                        return i([]);
                    },
                    s = o().useRef(null);
                if (!s.current)
                    var c = new r.le(b(t), function () {
                            l.mounted ? a() : (l.changedBeforeMount = !0);
                        }),
                        l = v(s, c, n);
                var f,
                    h,
                    y = s.current.reaction;
                if (
                    (o().useDebugValue(y, u.e),
                    o().useEffect(function () {
                        return (
                            d(s),
                            s.current
                                ? ((s.current.mounted = !0),
                                  s.current.changedBeforeMount && ((s.current.changedBeforeMount = !1), a()))
                                : ((s.current = {
                                      reaction: new r.le(b(t), function () {
                                          a();
                                      }),
                                      mounted: !0,
                                      changedBeforeMount: !1,
                                      cleanAt: 1 / 0,
                                  }),
                                  a()),
                            function () {
                                (s.current.reaction.dispose(), (s.current = null));
                            }
                        );
                    }, []),
                    y.track(function () {
                        try {
                            f = e();
                        } catch (e) {
                            h = e;
                        }
                    }),
                    h)
                )
                    throw h;
                return f;
            }
            var O = function () {
                return (
                    (O =
                        Object.assign ||
                        function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var i in (t = arguments[n]))
                                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            return e;
                        }),
                    O.apply(this, arguments)
                );
            };
            function w(e, t) {
                if ((0, p.F)()) return e;
                var n,
                    r,
                    o,
                    a = O({ forwardRef: !1 }, t),
                    s = e.displayName || e.name,
                    u = function (t, n) {
                        return m(function () {
                            return e(t, n);
                        }, s);
                    };
                return (
                    (u.displayName = s),
                    e.contextTypes && (u.contextTypes = e.contextTypes),
                    (n = a.forwardRef ? (0, i.memo)((0, i.forwardRef)(u)) : (0, i.memo)(u)),
                    (r = e),
                    (o = n),
                    Object.keys(r).forEach(function (e) {
                        A[e] || Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(r, e));
                    }),
                    (n.displayName = s),
                    n
                );
            }
            var A = { $$typeof: !0, render: !0, compare: !0, type: !0 };
            var j;
            ((j = a.unstable_batchedUpdates) || (j = s), (0, r.jQ)({ reactionScheduler: j }));
        },
        286: (e, t, n) => {
            'use strict';
            n.d(t, { F: () => i });
            var r = !1;
            function i() {
                return r;
            }
        },
        13: (e, t, n) => {
            'use strict';
            if ((n.d(t, { e: () => i }), 706 == n.j)) var r = n(174);
            function i(e) {
                return (0, r.Gf)(e);
            }
        },
        373: (e, t, n) => {
            'use strict';
            function r(e) {
                return { reaction: e, mounted: !1, changedBeforeMount: !1, cleanAt: Date.now() + i };
            }
            n.d(t, { Qs: () => o, Uy: () => r });
            var i = 1e4,
                o = 1e4;
        },
        946: (e, t, n) => {
            'use strict';
            n.d(t, { Om: () => O });
            var r = n(174);
            function i(e, t) {
                (void 0 === t && (t = 'Illegal state'),
                    e ||
                        (function (e) {
                            throw new Error('[mobx-utils] ' + e);
                        })(t));
            }
            var o = function e(t) {
                    return (
                        t &&
                        t !== Object.prototype &&
                        Object.getOwnPropertyNames(t).concat(e(Object.getPrototypeOf(t)) || [])
                    );
                },
                a = function (e) {
                    var t = o(e);
                    return t.filter(function (e, n) {
                        return t.indexOf(e) === n;
                    });
                },
                s = 'pending',
                u = 'fulfilled',
                c = 'rejected';
            function l(e) {
                switch (this.state) {
                    case s:
                        return e.pending && e.pending(this.value);
                    case c:
                        return e.rejected && e.rejected(this.value);
                    case u:
                        return e.fulfilled ? e.fulfilled(this.value) : this.value;
                }
            }
            function f(e, t) {
                if (
                    (i(arguments.length <= 2, 'fromPromise expects up to two arguments'),
                    i(
                        'function' == typeof e || ('object' == typeof e && e && 'function' == typeof e.then),
                        'Please pass a promise or function to fromPromise',
                    ),
                    !0 === e.isPromiseBasedObservable)
                )
                    return e;
                'function' == typeof e && (e = new Promise(e));
                var n = e;
                (e.then(
                    (0, r.aD)('observableFromPromise-resolve', function (e) {
                        ((n.value = e), (n.state = u));
                    }),
                    (0, r.aD)('observableFromPromise-reject', function (e) {
                        ((n.value = e), (n.state = c));
                    }),
                ),
                    (n.isPromiseBasedObservable = !0),
                    (n.case = l));
                var o = t && t.state === u ? t.value : void 0;
                return ((0, r.dw)(n, { value: o, state: s }, {}, { deep: !1 }), n);
            }
            !(function (e) {
                ((e.reject = (0, r.aD)('fromPromise.reject', function (t) {
                    var n = e(Promise.reject(t));
                    return ((n.state = c), (n.value = t), n);
                })),
                    (e.resolve = (0, r.aD)('fromPromise.resolve', function (t) {
                        void 0 === t && (t = void 0);
                        var n = e(Promise.resolve(t));
                        return ((n.state = u), (n.value = t), n);
                    })));
            })(f || (f = {}));
            var h = function (e, t, n, r) {
                var i,
                    o = arguments.length,
                    a = o < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
                if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                    a = Reflect.decorate(e, t, n, r);
                else
                    for (var s = e.length - 1; s >= 0; s--)
                        (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
                return (o > 3 && a && Object.defineProperty(t, n, a), a);
            };
            !(function () {
                function e(e, t) {
                    var n = this;
                    (Object.defineProperty(this, 'current', {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0,
                    }),
                        Object.defineProperty(this, 'subscription', {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0,
                        }),
                        (0, r.rC)(this),
                        (0, r.z)(function () {
                            ((n.current = t), (n.subscription = e.subscribe(n)));
                        }));
                }
                (Object.defineProperty(e.prototype, 'dispose', {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: function () {
                        this.subscription && this.subscription.unsubscribe();
                    },
                }),
                    Object.defineProperty(e.prototype, 'next', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e) {
                            this.current = e;
                        },
                    }),
                    Object.defineProperty(e.prototype, 'complete', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function () {
                            this.dispose();
                        },
                    }),
                    Object.defineProperty(e.prototype, 'error', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e) {
                            ((this.current = e), this.dispose());
                        },
                    }),
                    h([r.LO.ref], e.prototype, 'current', void 0),
                    h([r.aD.bound], e.prototype, 'next', null),
                    h([r.aD.bound], e.prototype, 'complete', null),
                    h([r.aD.bound], e.prototype, 'error', null));
            })();
            var v = function () {
                    return (
                        (v =
                            Object.assign ||
                            function (e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var i in (t = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                return e;
                            }),
                        v.apply(this, arguments)
                    );
                },
                d = function (e, t, n, r) {
                    var i,
                        o = arguments.length,
                        a = o < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
                    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                        a = Reflect.decorate(e, t, n, r);
                    else
                        for (var s = e.length - 1; s >= 0; s--)
                            (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
                    return (o > 3 && a && Object.defineProperty(t, n, a), a);
                },
                p = ['model', 'reset', 'submit', 'isDirty', 'isPropertyDirty', 'resetProperty'];
            !(function () {
                function e(e) {
                    var t,
                        n = this;
                    (Object.defineProperty(this, 'model', { enumerable: !0, configurable: !0, writable: !0, value: e }),
                        Object.defineProperty(this, 'localValues', {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: r.LO.map({}),
                        }),
                        Object.defineProperty(this, 'localComputedValues', {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: r.LO.map({}),
                        }),
                        Object.defineProperty(this, 'isPropertyDirty', {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return n.localValues.has(e);
                            },
                        }),
                        (0, r.rC)(this),
                        i((0, r.Pb)(e), 'createViewModel expects an observable object'),
                        ((t = e),
                        a(t).filter(function (e) {
                            return 'constructor' !== e && !~e.indexOf('__');
                        })).forEach(function (t) {
                            var o;
                            if (t !== r.so && '__mobxDidRunLazyInitializers' !== t) {
                                if (
                                    (i(
                                        -1 === p.indexOf(t),
                                        'The propertyname ' + t + ' is reserved and cannot be used with viewModels',
                                    ),
                                    (0, r.eJ)(e, t))
                                ) {
                                    var a = (0, r.kS)(e, t),
                                        s = a.derivation.bind(n),
                                        u = null === (o = a.setter_) || void 0 === o ? void 0 : o.bind(n);
                                    n.localComputedValues.set(t, (0, r.Fl)(s, { set: u }));
                                }
                                var c = Object.getOwnPropertyDescriptor(e, t),
                                    l = c ? { enumerable: c.enumerable } : {};
                                Object.defineProperty(
                                    n,
                                    t,
                                    v(v({}, l), {
                                        configurable: !0,
                                        get: function () {
                                            return (0, r.eJ)(e, t)
                                                ? n.localComputedValues.get(t).get()
                                                : n.isPropertyDirty(t)
                                                  ? n.localValues.get(t)
                                                  : n.model[t];
                                        },
                                        set: (0, r.aD)(function (i) {
                                            (0, r.eJ)(e, t)
                                                ? n.localComputedValues.get(t).set(i)
                                                : i !== n.model[t]
                                                  ? n.localValues.set(t, i)
                                                  : n.localValues.delete(t);
                                        }),
                                    }),
                                );
                            }
                        }));
                }
                (Object.defineProperty(e.prototype, 'isDirty', {
                    get: function () {
                        return this.localValues.size > 0;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                    Object.defineProperty(e.prototype, 'changedValues', {
                        get: function () {
                            return new Map(this.localValues);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, 'submit', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function () {
                            var e = this;
                            ((0, r.XP)(this.localValues).forEach(function (t) {
                                var n = e.localValues.get(t),
                                    i = e.model[t];
                                (0, r.Ei)(i)
                                    ? i.replace(n)
                                    : (0, r.LJ)(i)
                                      ? (i.clear(), i.merge(n))
                                      : (0, r.M5)(n) || (e.model[t] = n);
                            }),
                                this.localValues.clear());
                        },
                    }),
                    Object.defineProperty(e.prototype, 'reset', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function () {
                            this.localValues.clear();
                        },
                    }),
                    Object.defineProperty(e.prototype, 'resetProperty', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e) {
                            this.localValues.delete(e);
                        },
                    }),
                    d([r.Fl], e.prototype, 'isDirty', null),
                    d([r.Fl], e.prototype, 'changedValues', null),
                    d([r.aD.bound], e.prototype, 'submit', null),
                    d([r.aD.bound], e.prototype, 'reset', null),
                    d([r.aD.bound], e.prototype, 'resetProperty', null));
            })();
            var _,
                b =
                    ((_ = function (e, t) {
                        return (
                            (_ =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }),
                            _(e, t)
                        );
                    }),
                    function (e, t) {
                        function n() {
                            this.constructor = e;
                        }
                        (_(e, t),
                            (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())));
                    }),
                y =
                    ((function (e) {
                        function t(t, n, i) {
                            var o = void 0 === i ? {} : i,
                                a = o.name,
                                s = void 0 === a ? 'ogm' + ((1e3 * Math.random()) | 0) : a,
                                u = o.keyToName,
                                c =
                                    void 0 === u
                                        ? function (e) {
                                              return '' + e;
                                          }
                                        : u,
                                l = e.call(this) || this;
                            (Object.defineProperty(l, '_base', {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: void 0,
                            }),
                                Object.defineProperty(l, '_ogmInfoKey', {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: void 0,
                                }),
                                Object.defineProperty(l, '_groupBy', {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: void 0,
                                }),
                                Object.defineProperty(l, '_keyToName', {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: void 0,
                                }),
                                Object.defineProperty(l, '_disposeBaseObserver', {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: void 0,
                                }),
                                (l._keyToName = c),
                                (l._groupBy = n),
                                (l._ogmInfoKey = Symbol('ogmInfo' + s)),
                                (l._base = t));
                            for (var f = 0; f < t.length; f++) l._addItem(t[f]);
                            return (
                                (l._disposeBaseObserver = (0, r.N7)(l._base, function (e) {
                                    if ('splice' === e.type)
                                        (0, r.PS)(function () {
                                            for (var t = 0, n = e.removed; t < n.length; t++) {
                                                var r = n[t];
                                                l._removeItem(r);
                                            }
                                            for (var i = 0, o = e.added; i < o.length; i++) {
                                                var a = o[i];
                                                l._addItem(a);
                                            }
                                        });
                                    else {
                                        if ('update' !== e.type) throw new Error('illegal state');
                                        (0, r.PS)(function () {
                                            (l._removeItem(e.oldValue), l._addItem(e.newValue));
                                        });
                                    }
                                })),
                                l
                            );
                        }
                        (b(t, e),
                            Object.defineProperty(t.prototype, 'clear', {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function () {
                                    throw new Error('not supported');
                                },
                            }),
                            Object.defineProperty(t.prototype, 'delete', {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    throw new Error('not supported');
                                },
                            }),
                            Object.defineProperty(t.prototype, 'set', {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e, t) {
                                    throw new Error('not supported');
                                },
                            }),
                            Object.defineProperty(t.prototype, 'dispose', {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function () {
                                    this._disposeBaseObserver();
                                    for (var e = 0; e < this._base.length; e++) {
                                        var t = this._base[e];
                                        (t[this._ogmInfoKey].reaction(), delete t[this._ogmInfoKey]);
                                    }
                                },
                            }),
                            Object.defineProperty(t.prototype, '_getGroupArr', {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (t) {
                                    var n = e.prototype.get.call(this, t);
                                    return (
                                        void 0 === n &&
                                            ((n = (0, r.LO)([], {
                                                name: 'GroupArray[' + this._keyToName(t) + ']',
                                                deep: !1,
                                            })),
                                            e.prototype.set.call(this, t, n)),
                                        n
                                    );
                                },
                            }),
                            Object.defineProperty(t.prototype, '_removeFromGroupArr', {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (t, n) {
                                    var r = e.prototype.get.call(this, t);
                                    1 === r.length
                                        ? e.prototype.delete.call(this, t)
                                        : (n === r.length - 1 ||
                                              ((r[n] = r[r.length - 1]), (r[n][this._ogmInfoKey].groupArrIndex = n)),
                                          r.length--);
                                },
                            }),
                            Object.defineProperty(t.prototype, '_addItem', {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    var t = this,
                                        n = this._groupBy(e),
                                        i = this._getGroupArr(n),
                                        o = {
                                            groupByValue: n,
                                            groupArrIndex: i.length,
                                            reaction: (0, r.U5)(
                                                function () {
                                                    return t._groupBy(e);
                                                },
                                                function (n, r) {
                                                    var i = e[t._ogmInfoKey];
                                                    t._removeFromGroupArr(i.groupByValue, i.groupArrIndex);
                                                    var o = t._getGroupArr(n),
                                                        a = o.length;
                                                    (o.push(e), (i.groupByValue = n), (i.groupArrIndex = a));
                                                },
                                            ),
                                        };
                                    (Object.defineProperty(e, this._ogmInfoKey, {
                                        configurable: !0,
                                        enumerable: !1,
                                        value: o,
                                    }),
                                        i.push(e));
                                },
                            }),
                            Object.defineProperty(t.prototype, '_removeItem', {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    var t = e[this._ogmInfoKey];
                                    (this._removeFromGroupArr(t.groupByValue, t.groupArrIndex),
                                        t.reaction(),
                                        delete e[this._ogmInfoKey]);
                                },
                            }));
                    })(r.vP),
                    (function () {
                        function e(e, t) {
                            (Object.defineProperty(this, 'base', {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: e,
                            }),
                                Object.defineProperty(this, 'args', {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: t,
                                }),
                                Object.defineProperty(this, 'root', {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: void 0,
                                }),
                                Object.defineProperty(this, 'closest', {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: void 0,
                                }),
                                Object.defineProperty(this, 'closestIdx', {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: 0,
                                }),
                                Object.defineProperty(this, 'isDisposed', {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: !1,
                                }));
                            for (
                                var n = (this.closest = this.root = e), r = 0;
                                r < this.args.length - 1 && (n = n.get(t[r]));
                                r++
                            )
                                this.closest = n;
                            this.closestIdx = r;
                        }
                        return (
                            Object.defineProperty(e.prototype, 'exists', {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function () {
                                    this.assertNotDisposed();
                                    var e = this.args.length;
                                    return this.closestIdx >= e - 1 && this.closest.has(this.args[e - 1]);
                                },
                            }),
                            Object.defineProperty(e.prototype, 'get', {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function () {
                                    if ((this.assertNotDisposed(), !this.exists()))
                                        throw new Error("Entry doesn't exist");
                                    return this.closest.get(this.args[this.args.length - 1]);
                                },
                            }),
                            Object.defineProperty(e.prototype, 'set', {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    this.assertNotDisposed();
                                    for (
                                        var t = this.args.length, n = this.closest, r = this.closestIdx;
                                        r < t - 1;
                                        r++
                                    ) {
                                        var i = new Map();
                                        (n.set(this.args[r], i), (n = i));
                                    }
                                    ((this.closestIdx = t - 1), (this.closest = n), n.set(this.args[t - 1], e));
                                },
                            }),
                            Object.defineProperty(e.prototype, 'delete', {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function () {
                                    if ((this.assertNotDisposed(), !this.exists()))
                                        throw new Error("Entry doesn't exist");
                                    var e = this.args.length;
                                    this.closest.delete(this.args[e - 1]);
                                    for (var t = this.root, n = [t], r = 0; r < e - 1; r++)
                                        ((t = t.get(this.args[r])), n.push(t));
                                    for (r = n.length - 1; r > 0; r--)
                                        0 === n[r].size && n[r - 1].delete(this.args[r - 1]);
                                    this.isDisposed = !0;
                                },
                            }),
                            Object.defineProperty(e.prototype, 'assertNotDisposed', {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function () {
                                    if (this.isDisposed) throw new Error('Concurrent modification exception');
                                },
                            }),
                            e
                        );
                    })()),
                g = (function () {
                    function e() {
                        (Object.defineProperty(this, 'store', {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: new Map(),
                        }),
                            Object.defineProperty(this, 'argsLength', {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: -1,
                            }),
                            Object.defineProperty(this, 'last', {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: void 0,
                            }));
                    }
                    return (
                        Object.defineProperty(e.prototype, 'entry', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                if (-1 === this.argsLength) this.argsLength = e.length;
                                else if (this.argsLength !== e.length)
                                    throw new Error(
                                        'DeepMap should be used with functions with a consistent length, expected: ' +
                                            this.argsLength +
                                            ', got: ' +
                                            e.length,
                                    );
                                return (this.last && (this.last.isDisposed = !0), (this.last = new y(this.store, e)));
                            },
                        }),
                        e
                    );
                })(),
                m = function () {
                    return (
                        (m =
                            Object.assign ||
                            function (e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var i in (t = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                return e;
                            }),
                        m.apply(this, arguments)
                    );
                };
            function O(e, t) {
                if ((void 0 === t && (t = !1), (0, r.LG)(e)))
                    throw new Error("computedFn shouldn't be used on actions");
                var n = !1,
                    i = 0,
                    o = 'boolean' == typeof t ? { keepAlive: t } : t,
                    a = new g();
                return function () {
                    for (var t = this, s = [], u = 0; u < arguments.length; u++) s[u] = arguments[u];
                    var c = a.entry(s);
                    if (c.exists()) return c.get().get();
                    if (!o.keepAlive && !(0, r.SW)())
                        return (
                            n ||
                                (console.warn(
                                    "invoking a computedFn from outside an reactive context won't be memoized, unless keepAlive is set",
                                ),
                                (n = !0)),
                            e.apply(this, s)
                        );
                    var l = (0, r.Fl)(
                        function () {
                            return e.apply(t, s);
                        },
                        m(m({}, o), { name: 'computedFn(' + (o.name || e.name) + '#' + ++i + ')' }),
                    );
                    return (
                        c.set(l),
                        o.keepAlive ||
                            (0, r.pA)(l, function () {
                                a.entry(s).delete();
                            }),
                        l.get()
                    );
                };
            }
        },
        174: (e, t, n) => {
            'use strict';
            n.d(t, {
                Ei: () => En,
                Fl: () => Te,
                Gf: () => Ft,
                LG: () => Dt,
                LJ: () => Ln,
                LO: () => Se,
                M5: () => Zt,
                N7: () => on,
                PS: () => sn,
                Pb: () => Wn,
                SW: () => Je,
                U5: () => Bt,
                XP: () => rn,
                aD: () => Tt,
                dw: () => Gt,
                eJ: () => en,
                jQ: () => Kt,
                kS: () => or,
                le: () => _t,
                pA: () => It,
                rC: () => _n,
                so: () => G,
                vP: () => Bn,
                z: () => Vt,
            });
            function r(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                    n[r - 1] = arguments[r];
                throw new Error(
                    'number' == typeof e
                        ? '[MobX] minified error nr: ' +
                          e +
                          (n.length ? ' ' + n.map(String).join(',') : '') +
                          '. Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts'
                        : '[MobX] ' + e,
                );
            }
            var i = {};
            function o() {
                return 'undefined' != typeof globalThis
                    ? globalThis
                    : 'undefined' != typeof window
                      ? window
                      : void 0 !== n.g
                        ? n.g
                        : 'undefined' != typeof self
                          ? self
                          : i;
            }
            var a = Object.assign,
                s = Object.getOwnPropertyDescriptor,
                u = Object.defineProperty,
                c = Object.prototype,
                l = [];
            Object.freeze(l);
            var f = {};
            Object.freeze(f);
            var h = 'undefined' != typeof Proxy,
                v = Object.toString();
            function d() {
                h || r('Proxy not available');
            }
            function p(e) {
                var t = !1;
                return function () {
                    if (!t) return ((t = !0), e.apply(this, arguments));
                };
            }
            var _ = function () {};
            function b(e) {
                return 'function' == typeof e;
            }
            function y(e) {
                switch (typeof e) {
                    case 'string':
                    case 'symbol':
                    case 'number':
                        return !0;
                }
                return !1;
            }
            function g(e) {
                return null !== e && 'object' == typeof e;
            }
            function m(e) {
                var t;
                if (!g(e)) return !1;
                var n = Object.getPrototypeOf(e);
                return null == n || (null == (t = n.constructor) ? void 0 : t.toString()) === v;
            }
            function O(e) {
                var t = null == e ? void 0 : e.constructor;
                return !!t && ('GeneratorFunction' === t.name || 'GeneratorFunction' === t.displayName);
            }
            function w(e, t, n) {
                u(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
            }
            function A(e, t, n) {
                u(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
            }
            function j(e, t) {
                var n = 'isMobX' + e;
                return (
                    (t.prototype[n] = !0),
                    function (e) {
                        return g(e) && !0 === e[n];
                    }
                );
            }
            function S(e) {
                return e instanceof Map;
            }
            function P(e) {
                return e instanceof Set;
            }
            var x = void 0 !== Object.getOwnPropertySymbols;
            var k =
                'undefined' != typeof Reflect && Reflect.ownKeys
                    ? Reflect.ownKeys
                    : x
                      ? function (e) {
                            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
                        }
                      : Object.getOwnPropertyNames;
            function T(e) {
                return null === e ? null : 'object' == typeof e ? '' + e : e;
            }
            function E(e, t) {
                return c.hasOwnProperty.call(e, t);
            }
            var V =
                Object.getOwnPropertyDescriptors ||
                function (e) {
                    var t = {};
                    return (
                        k(e).forEach(function (n) {
                            t[n] = s(e, n);
                        }),
                        t
                    );
                };
            function D(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    ((r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        'value' in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r));
                }
            }
            function R(e, t, n) {
                return (t && D(e.prototype, t), n && D(e, n), e);
            }
            function C() {
                return (
                    (C =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                        }),
                    C.apply(this, arguments)
                );
            }
            function N(e, t) {
                ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t));
            }
            function B(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function L(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function I(e, t) {
                var n;
                if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return L(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === n && e.constructor && (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                        ? Array.from(e)
                                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                          ? L(e, t)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                return (n = e[Symbol.iterator]()).next.bind(n);
            }
            var M = Symbol('mobx-stored-annotations');
            function U(e) {
                return Object.assign(function (t, n) {
                    K(t, n, e);
                }, e);
            }
            function K(e, t, n) {
                (E(e, M) || w(e, M, C({}, e[M])),
                    (function (e) {
                        return e.annotationType_ === J;
                    })(n) || (e[M][t] = n));
            }
            var G = Symbol('mobx administration'),
                F = (function () {
                    function e(e) {
                        (void 0 === e && (e = 'Atom'),
                            (this.name_ = void 0),
                            (this.isPendingUnobservation_ = !1),
                            (this.isBeingObserved_ = !1),
                            (this.observers_ = new Set()),
                            (this.diffValue_ = 0),
                            (this.lastAccessedBy_ = 0),
                            (this.lowestObserverState_ = Ge.NOT_TRACKING_),
                            (this.onBOL = void 0),
                            (this.onBUOL = void 0),
                            (this.name_ = e));
                    }
                    var t = e.prototype;
                    return (
                        (t.onBO = function () {
                            this.onBOL &&
                                this.onBOL.forEach(function (e) {
                                    return e();
                                });
                        }),
                        (t.onBUO = function () {
                            this.onBUOL &&
                                this.onBUOL.forEach(function (e) {
                                    return e();
                                });
                        }),
                        (t.reportObserved = function () {
                            return dt(this);
                        }),
                        (t.reportChanged = function () {
                            (ht(), pt(this), vt());
                        }),
                        (t.toString = function () {
                            return this.name_;
                        }),
                        e
                    );
                })(),
                z = j('Atom', F);
            function q(e, t, n) {
                (void 0 === t && (t = _), void 0 === n && (n = _));
                var r,
                    i = new F(e);
                return (t !== _ && Mt(Lt, i, t, r), n !== _ && It(i, n), i);
            }
            var H = {
                identity: function (e, t) {
                    return e === t;
                },
                structural: function (e, t) {
                    return ur(e, t);
                },
                default: function (e, t) {
                    return Object.is ? Object.is(e, t) : e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
                },
                shallow: function (e, t) {
                    return ur(e, t, 1);
                },
            };
            function W(e, t, n) {
                return nn(e)
                    ? e
                    : Array.isArray(e)
                      ? Se.array(e, { name: n })
                      : m(e)
                        ? Se.object(e, void 0, { name: n })
                        : S(e)
                          ? Se.map(e, { name: n })
                          : P(e)
                            ? Se.set(e, { name: n })
                            : 'function' != typeof e || Dt(e) || Qt(e)
                              ? e
                              : O(e)
                                ? Jt(e)
                                : Et(n, e);
            }
            function X(e) {
                return e;
            }
            var J = 'override';
            function Y(e, t) {
                return { annotationType_: e, options_: t, make_: Q, extend_: $ };
            }
            function Q(e, t, n, r) {
                var i;
                if (null == (i = this.options_) ? void 0 : i.bound) return null === this.extend_(e, t, n, !1) ? 0 : 1;
                if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
                if (Dt(n.value)) return 1;
                var o = Z(e, this, t, n, !1);
                return (u(r, t, o), 2);
            }
            function $(e, t, n, r) {
                var i = Z(e, this, t, n);
                return e.defineProperty_(t, i, r);
            }
            function Z(e, t, n, r, i) {
                var o, a, s, u, c, l, f, h;
                (void 0 === i && (i = ut.safeDescriptors), (h = r), t.annotationType_, h.value);
                var v,
                    d = r.value;
                (null == (o = t.options_) ? void 0 : o.bound) && (d = d.bind(null != (v = e.proxy_) ? v : e.target_));
                return {
                    value: Ne(
                        null != (a = null == (s = t.options_) ? void 0 : s.name) ? a : n.toString(),
                        d,
                        null != (u = null == (c = t.options_) ? void 0 : c.autoAction) && u,
                        (null == (l = t.options_) ? void 0 : l.bound)
                            ? null != (f = e.proxy_)
                                ? f
                                : e.target_
                            : void 0,
                    ),
                    configurable: !i || e.isPlainObject_,
                    enumerable: !1,
                    writable: !i,
                };
            }
            function ee(e, t) {
                return { annotationType_: e, options_: t, make_: te, extend_: ne };
            }
            function te(e, t, n, r) {
                var i;
                if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
                if (
                    (null == (i = this.options_) ? void 0 : i.bound) &&
                    !Qt(e.target_[t]) &&
                    null === this.extend_(e, t, n, !1)
                )
                    return 0;
                if (Qt(n.value)) return 1;
                var o = re(e, this, t, n, !1, !1);
                return (u(r, t, o), 2);
            }
            function ne(e, t, n, r) {
                var i,
                    o = re(e, this, t, n, null == (i = this.options_) ? void 0 : i.bound);
                return e.defineProperty_(t, o, r);
            }
            function re(e, t, n, r, i, o) {
                var a;
                (void 0 === o && (o = ut.safeDescriptors), (a = r), t.annotationType_, a.value);
                var s,
                    u = r.value;
                i && (u = u.bind(null != (s = e.proxy_) ? s : e.target_));
                return { value: Jt(u), configurable: !o || e.isPlainObject_, enumerable: !1, writable: !o };
            }
            function ie(e, t) {
                return { annotationType_: e, options_: t, make_: oe, extend_: ae };
            }
            function oe(e, t, n) {
                return null === this.extend_(e, t, n, !1) ? 0 : 1;
            }
            function ae(e, t, n, r) {
                return (
                    (function (e, t, n, r) {
                        (t.annotationType_, r.get);
                        0;
                    })(0, this, 0, n),
                    e.defineComputedProperty_(t, C({}, this.options_, { get: n.get, set: n.set }), r)
                );
            }
            function se(e, t) {
                return { annotationType_: e, options_: t, make_: ue, extend_: ce };
            }
            function ue(e, t, n) {
                return null === this.extend_(e, t, n, !1) ? 0 : 1;
            }
            function ce(e, t, n, r) {
                var i, o;
                return (
                    (function (e, t, n, r) {
                        t.annotationType_;
                        0;
                    })(0, this),
                    e.defineObservableProperty_(
                        t,
                        n.value,
                        null != (i = null == (o = this.options_) ? void 0 : o.enhancer) ? i : W,
                        r,
                    )
                );
            }
            var le = fe();
            function fe(e) {
                return { annotationType_: 'true', options_: e, make_: he, extend_: ve };
            }
            function he(e, t, n, r) {
                var i, o, a, s;
                if (n.get) return Te.make_(e, t, n, r);
                if (n.set) {
                    var c = Ne(t.toString(), n.set);
                    return r === e.target_
                        ? null ===
                          e.defineProperty_(t, { configurable: !ut.safeDescriptors || e.isPlainObject_, set: c })
                            ? 0
                            : 2
                        : (u(r, t, { configurable: !0, set: c }), 2);
                }
                if (r !== e.target_ && 'function' == typeof n.value)
                    return O(n.value)
                        ? ((null == (s = this.options_) ? void 0 : s.autoBind) ? Jt.bound : Jt).make_(e, t, n, r)
                        : ((null == (a = this.options_) ? void 0 : a.autoBind) ? Et.bound : Et).make_(e, t, n, r);
                var l,
                    f = !1 === (null == (i = this.options_) ? void 0 : i.deep) ? Se.ref : Se;
                'function' == typeof n.value &&
                    (null == (o = this.options_) ? void 0 : o.autoBind) &&
                    (n.value = n.value.bind(null != (l = e.proxy_) ? l : e.target_));
                return f.make_(e, t, n, r);
            }
            function ve(e, t, n, r) {
                var i, o, a;
                if (n.get) return Te.extend_(e, t, n, r);
                if (n.set)
                    return e.defineProperty_(
                        t,
                        { configurable: !ut.safeDescriptors || e.isPlainObject_, set: Ne(t.toString(), n.set) },
                        r,
                    );
                'function' == typeof n.value &&
                    (null == (i = this.options_) ? void 0 : i.autoBind) &&
                    (n.value = n.value.bind(null != (a = e.proxy_) ? a : e.target_));
                return (!1 === (null == (o = this.options_) ? void 0 : o.deep) ? Se.ref : Se).extend_(e, t, n, r);
            }
            var de = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
            function pe(e) {
                return e || de;
            }
            Object.freeze(de);
            var _e = se('observable'),
                be = se('observable.ref', { enhancer: X }),
                ye = se('observable.shallow', {
                    enhancer: function (e, t, n) {
                        return null == e || Wn(e) || En(e) || Ln(e) || Un(e)
                            ? e
                            : Array.isArray(e)
                              ? Se.array(e, { name: n, deep: !1 })
                              : m(e)
                                ? Se.object(e, void 0, { name: n, deep: !1 })
                                : S(e)
                                  ? Se.map(e, { name: n, deep: !1 })
                                  : P(e)
                                    ? Se.set(e, { name: n, deep: !1 })
                                    : void 0;
                    },
                }),
                ge = se('observable.struct', {
                    enhancer: function (e, t) {
                        return ur(e, t) ? t : e;
                    },
                }),
                me = U(_e);
            function Oe(e) {
                return !0 === e.deep
                    ? W
                    : !1 === e.deep
                      ? X
                      : (t = e.defaultDecorator) && null != (n = null == (r = t.options_) ? void 0 : r.enhancer)
                        ? n
                        : W;
                var t, n, r;
            }
            function we(e, t, n) {
                if (!y(t))
                    return nn(e)
                        ? e
                        : m(e)
                          ? Se.object(e, t, n)
                          : Array.isArray(e)
                            ? Se.array(e, t)
                            : S(e)
                              ? Se.map(e, t)
                              : P(e)
                                ? Se.set(e, t)
                                : 'object' == typeof e && null !== e
                                  ? e
                                  : Se.box(e, t);
                K(e, t, _e);
            }
            Object.assign(we, me);
            var Ae,
                je,
                Se = a(we, {
                    box: function (e, t) {
                        var n = pe(t);
                        return new Ke(e, Oe(n), n.name, !0, n.equals);
                    },
                    array: function (e, t) {
                        var n = pe(t);
                        return (!1 === ut.useProxies || !1 === n.proxy ? rr : On)(e, Oe(n), n.name);
                    },
                    map: function (e, t) {
                        var n = pe(t);
                        return new Bn(e, Oe(n), n.name);
                    },
                    set: function (e, t) {
                        var n = pe(t);
                        return new Mn(e, Oe(n), n.name);
                    },
                    object: function (e, t, n) {
                        return Gt(
                            !1 === ut.useProxies || !1 === (null == n ? void 0 : n.proxy)
                                ? zn({}, n)
                                : (function (e, t) {
                                      var n, r;
                                      return (
                                          d(),
                                          (e = zn(e, t)),
                                          null != (r = (n = e[G]).proxy_) ? r : (n.proxy_ = new Proxy(e, cn))
                                      );
                                  })({}, n),
                            e,
                            t,
                        );
                    },
                    ref: U(be),
                    shallow: U(ye),
                    deep: me,
                    struct: U(ge),
                }),
                Pe = 'computed',
                xe = ie(Pe),
                ke = ie('computed.struct', { equals: H.structural }),
                Te = function (e, t) {
                    if (y(t)) return K(e, t, xe);
                    if (m(e)) return U(ie(Pe, e));
                    var n = m(t) ? t : {};
                    return ((n.get = e), n.name || (n.name = e.name || ''), new ze(n));
                };
            (Object.assign(Te, xe), (Te.struct = U(ke)));
            var Ee,
                Ve = 0,
                De = 1,
                Re = null != (Ae = null == (je = s(function () {}, 'name')) ? void 0 : je.configurable) && Ae,
                Ce = { value: 'action', configurable: !0, writable: !1, enumerable: !1 };
            function Ne(e, t, n, r) {
                function i() {
                    return Be(e, n, t, r || this, arguments);
                }
                return (
                    void 0 === n && (n = !1),
                    (i.isMobxAction = !0),
                    Re && ((Ce.value = e), Object.defineProperty(i, 'name', Ce)),
                    i
                );
            }
            function Be(e, t, n, i, o) {
                var a = (function (e, t, n, r) {
                    var i = !1,
                        o = 0;
                    0;
                    var a = ut.trackingDerivation,
                        s = !t || !a;
                    ht();
                    var u = ut.allowStateChanges;
                    s && (et(), (u = Ie(!0)));
                    var c = nt(!0),
                        l = {
                            runAsAction_: s,
                            prevDerivation_: a,
                            prevAllowStateChanges_: u,
                            prevAllowStateReads_: c,
                            notifySpy_: i,
                            startTime_: o,
                            actionId_: De++,
                            parentActionId_: Ve,
                        };
                    return ((Ve = l.actionId_), l);
                })(0, t);
                try {
                    return n.apply(i, o);
                } catch (e) {
                    throw ((a.error_ = e), e);
                } finally {
                    !(function (e) {
                        Ve !== e.actionId_ && r(30);
                        ((Ve = e.parentActionId_), void 0 !== e.error_ && (ut.suppressReactionErrors = !0));
                        (Me(e.prevAllowStateChanges_),
                            rt(e.prevAllowStateReads_),
                            vt(),
                            e.runAsAction_ && tt(e.prevDerivation_));
                        0;
                        ut.suppressReactionErrors = !1;
                    })(a);
                }
            }
            function Le(e, t) {
                var n = Ie(e);
                try {
                    return t();
                } finally {
                    Me(n);
                }
            }
            function Ie(e) {
                var t = ut.allowStateChanges;
                return ((ut.allowStateChanges = e), t);
            }
            function Me(e) {
                ut.allowStateChanges = e;
            }
            Ee = Symbol.toPrimitive;
            var Ue,
                Ke = (function (e) {
                    function t(t, n, r, i, o) {
                        var a;
                        return (
                            void 0 === r && (r = 'ObservableValue'),
                            void 0 === i && (i = !0),
                            void 0 === o && (o = H.default),
                            ((a = e.call(this, r) || this).enhancer = void 0),
                            (a.name_ = void 0),
                            (a.equals = void 0),
                            (a.hasUnreportedChange_ = !1),
                            (a.interceptors_ = void 0),
                            (a.changeListeners_ = void 0),
                            (a.value_ = void 0),
                            (a.dehancer = void 0),
                            (a.enhancer = n),
                            (a.name_ = r),
                            (a.equals = o),
                            (a.value_ = n(t, void 0, r)),
                            a
                        );
                    }
                    N(t, e);
                    var n = t.prototype;
                    return (
                        (n.dehanceValue = function (e) {
                            return void 0 !== this.dehancer ? this.dehancer(e) : e;
                        }),
                        (n.set = function (e) {
                            this.value_;
                            if ((e = this.prepareNewValue_(e)) !== ut.UNCHANGED) {
                                (0, this.setNewValue_(e));
                            }
                        }),
                        (n.prepareNewValue_ = function (e) {
                            if ((Ye(this), ln(this))) {
                                var t = hn(this, { object: this, type: yn, newValue: e });
                                if (!t) return ut.UNCHANGED;
                                e = t.newValue;
                            }
                            return (
                                (e = this.enhancer(e, this.value_, this.name_)),
                                this.equals(this.value_, e) ? ut.UNCHANGED : e
                            );
                        }),
                        (n.setNewValue_ = function (e) {
                            var t = this.value_;
                            ((this.value_ = e),
                                this.reportChanged(),
                                vn(this) && pn(this, { type: yn, object: this, newValue: e, oldValue: t }));
                        }),
                        (n.get = function () {
                            return (this.reportObserved(), this.dehanceValue(this.value_));
                        }),
                        (n.intercept_ = function (e) {
                            return fn(this, e);
                        }),
                        (n.observe_ = function (e, t) {
                            return (
                                t &&
                                    e({
                                        observableKind: 'value',
                                        debugObjectName: this.name_,
                                        object: this,
                                        type: yn,
                                        newValue: this.value_,
                                        oldValue: void 0,
                                    }),
                                dn(this, e)
                            );
                        }),
                        (n.raw = function () {
                            return this.value_;
                        }),
                        (n.toJSON = function () {
                            return this.get();
                        }),
                        (n.toString = function () {
                            return this.name_ + '[' + this.value_ + ']';
                        }),
                        (n.valueOf = function () {
                            return T(this.get());
                        }),
                        (n[Ee] = function () {
                            return this.valueOf();
                        }),
                        t
                    );
                })(F);
            Ue = Symbol.toPrimitive;
            var Ge,
                Fe,
                ze = (function () {
                    function e(e) {
                        ((this.dependenciesState_ = Ge.NOT_TRACKING_),
                            (this.observing_ = []),
                            (this.newObserving_ = null),
                            (this.isBeingObserved_ = !1),
                            (this.isPendingUnobservation_ = !1),
                            (this.observers_ = new Set()),
                            (this.diffValue_ = 0),
                            (this.runId_ = 0),
                            (this.lastAccessedBy_ = 0),
                            (this.lowestObserverState_ = Ge.UP_TO_DATE_),
                            (this.unboundDepsCount_ = 0),
                            (this.value_ = new He(null)),
                            (this.name_ = void 0),
                            (this.triggeredBy_ = void 0),
                            (this.isComputing_ = !1),
                            (this.isRunningSetter_ = !1),
                            (this.derivation = void 0),
                            (this.setter_ = void 0),
                            (this.isTracing_ = Fe.NONE),
                            (this.scope_ = void 0),
                            (this.equals_ = void 0),
                            (this.requiresReaction_ = void 0),
                            (this.keepAlive_ = void 0),
                            (this.onBOL = void 0),
                            (this.onBUOL = void 0),
                            e.get || r(31),
                            (this.derivation = e.get),
                            (this.name_ = e.name || 'ComputedValue'),
                            e.set && (this.setter_ = Ne('ComputedValue-setter', e.set)),
                            (this.equals_ = e.equals || (e.compareStructural || e.struct ? H.structural : H.default)),
                            (this.scope_ = e.context),
                            (this.requiresReaction_ = !!e.requiresReaction),
                            (this.keepAlive_ = !!e.keepAlive));
                    }
                    var t = e.prototype;
                    return (
                        (t.onBecomeStale_ = function () {
                            !(function (e) {
                                if (e.lowestObserverState_ !== Ge.UP_TO_DATE_) return;
                                ((e.lowestObserverState_ = Ge.POSSIBLY_STALE_),
                                    e.observers_.forEach(function (e) {
                                        e.dependenciesState_ === Ge.UP_TO_DATE_ &&
                                            ((e.dependenciesState_ = Ge.POSSIBLY_STALE_), e.onBecomeStale_());
                                    }));
                            })(this);
                        }),
                        (t.onBO = function () {
                            this.onBOL &&
                                this.onBOL.forEach(function (e) {
                                    return e();
                                });
                        }),
                        (t.onBUO = function () {
                            this.onBUOL &&
                                this.onBUOL.forEach(function (e) {
                                    return e();
                                });
                        }),
                        (t.get = function () {
                            if (
                                (this.isComputing_ && r(32, this.name_, this.derivation),
                                0 !== ut.inBatch || 0 !== this.observers_.size || this.keepAlive_)
                            ) {
                                if ((dt(this), Xe(this))) {
                                    var e = ut.trackingContext;
                                    (this.keepAlive_ && !e && (ut.trackingContext = this),
                                        this.trackAndCompute() &&
                                            (function (e) {
                                                if (e.lowestObserverState_ === Ge.STALE_) return;
                                                ((e.lowestObserverState_ = Ge.STALE_),
                                                    e.observers_.forEach(function (t) {
                                                        t.dependenciesState_ === Ge.POSSIBLY_STALE_
                                                            ? (t.dependenciesState_ = Ge.STALE_)
                                                            : t.dependenciesState_ === Ge.UP_TO_DATE_ &&
                                                              (e.lowestObserverState_ = Ge.UP_TO_DATE_);
                                                    }));
                                            })(this),
                                        (ut.trackingContext = e));
                                }
                            } else
                                Xe(this) &&
                                    (this.warnAboutUntrackedRead_(),
                                    ht(),
                                    (this.value_ = this.computeValue_(!1)),
                                    vt());
                            var t = this.value_;
                            if (We(t)) throw t.cause;
                            return t;
                        }),
                        (t.set = function (e) {
                            if (this.setter_) {
                                (this.isRunningSetter_ && r(33, this.name_), (this.isRunningSetter_ = !0));
                                try {
                                    this.setter_.call(this.scope_, e);
                                } finally {
                                    this.isRunningSetter_ = !1;
                                }
                            } else r(34, this.name_);
                        }),
                        (t.trackAndCompute = function () {
                            var e = this.value_,
                                t = this.dependenciesState_ === Ge.NOT_TRACKING_,
                                n = this.computeValue_(!0),
                                r = t || We(e) || We(n) || !this.equals_(e, n);
                            return (r && (this.value_ = n), r);
                        }),
                        (t.computeValue_ = function (e) {
                            this.isComputing_ = !0;
                            var t,
                                n = Ie(!1);
                            if (e) t = Qe(this, this.derivation, this.scope_);
                            else if (!0 === ut.disableErrorBoundaries) t = this.derivation.call(this.scope_);
                            else
                                try {
                                    t = this.derivation.call(this.scope_);
                                } catch (e) {
                                    t = new He(e);
                                }
                            return (Me(n), (this.isComputing_ = !1), t);
                        }),
                        (t.suspend_ = function () {
                            this.keepAlive_ || ($e(this), (this.value_ = void 0));
                        }),
                        (t.observe_ = function (e, t) {
                            var n = this,
                                r = !0,
                                i = void 0;
                            return Rt(function () {
                                var o = n.get();
                                if (!r || t) {
                                    var a = et();
                                    (e({
                                        observableKind: 'computed',
                                        debugObjectName: n.name_,
                                        type: yn,
                                        object: n,
                                        newValue: o,
                                        oldValue: i,
                                    }),
                                        tt(a));
                                }
                                ((r = !1), (i = o));
                            });
                        }),
                        (t.warnAboutUntrackedRead_ = function () {}),
                        (t.toString = function () {
                            return this.name_ + '[' + this.derivation.toString() + ']';
                        }),
                        (t.valueOf = function () {
                            return T(this.get());
                        }),
                        (t[Ue] = function () {
                            return this.valueOf();
                        }),
                        e
                    );
                })(),
                qe = j('ComputedValue', ze);
            (!(function (e) {
                ((e[(e.NOT_TRACKING_ = -1)] = 'NOT_TRACKING_'),
                    (e[(e.UP_TO_DATE_ = 0)] = 'UP_TO_DATE_'),
                    (e[(e.POSSIBLY_STALE_ = 1)] = 'POSSIBLY_STALE_'),
                    (e[(e.STALE_ = 2)] = 'STALE_'));
            })(Ge || (Ge = {})),
                (function (e) {
                    ((e[(e.NONE = 0)] = 'NONE'), (e[(e.LOG = 1)] = 'LOG'), (e[(e.BREAK = 2)] = 'BREAK'));
                })(Fe || (Fe = {})));
            var He = function (e) {
                ((this.cause = void 0), (this.cause = e));
            };
            function We(e) {
                return e instanceof He;
            }
            function Xe(e) {
                switch (e.dependenciesState_) {
                    case Ge.UP_TO_DATE_:
                        return !1;
                    case Ge.NOT_TRACKING_:
                    case Ge.STALE_:
                        return !0;
                    case Ge.POSSIBLY_STALE_:
                        for (var t = nt(!0), n = et(), r = e.observing_, i = r.length, o = 0; o < i; o++) {
                            var a = r[o];
                            if (qe(a)) {
                                if (ut.disableErrorBoundaries) a.get();
                                else
                                    try {
                                        a.get();
                                    } catch (e) {
                                        return (tt(n), rt(t), !0);
                                    }
                                if (e.dependenciesState_ === Ge.STALE_) return (tt(n), rt(t), !0);
                            }
                        }
                        return (it(e), tt(n), rt(t), !1);
                }
            }
            function Je() {
                return null !== ut.trackingDerivation;
            }
            function Ye(e) {}
            function Qe(e, t, n) {
                var r = nt(!0);
                (it(e),
                    (e.newObserving_ = new Array(e.observing_.length + 100)),
                    (e.unboundDepsCount_ = 0),
                    (e.runId_ = ++ut.runId));
                var i,
                    o = ut.trackingDerivation;
                if (((ut.trackingDerivation = e), ut.inBatch++, !0 === ut.disableErrorBoundaries)) i = t.call(n);
                else
                    try {
                        i = t.call(n);
                    } catch (e) {
                        i = new He(e);
                    }
                return (
                    ut.inBatch--,
                    (ut.trackingDerivation = o),
                    (function (e) {
                        for (
                            var t = e.observing_,
                                n = (e.observing_ = e.newObserving_),
                                r = Ge.UP_TO_DATE_,
                                i = 0,
                                o = e.unboundDepsCount_,
                                a = 0;
                            a < o;
                            a++
                        ) {
                            var s = n[a];
                            (0 === s.diffValue_ && ((s.diffValue_ = 1), i !== a && (n[i] = s), i++),
                                s.dependenciesState_ > r && (r = s.dependenciesState_));
                        }
                        ((n.length = i), (e.newObserving_ = null), (o = t.length));
                        for (; o--; ) {
                            var u = t[o];
                            (0 === u.diffValue_ && lt(u, e), (u.diffValue_ = 0));
                        }
                        for (; i--; ) {
                            var c = n[i];
                            1 === c.diffValue_ && ((c.diffValue_ = 0), ct(c, e));
                        }
                        r !== Ge.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
                    })(e),
                    rt(r),
                    i
                );
            }
            function $e(e) {
                var t = e.observing_;
                e.observing_ = [];
                for (var n = t.length; n--; ) lt(t[n], e);
                e.dependenciesState_ = Ge.NOT_TRACKING_;
            }
            function Ze(e) {
                var t = et();
                try {
                    return e();
                } finally {
                    tt(t);
                }
            }
            function et() {
                var e = ut.trackingDerivation;
                return ((ut.trackingDerivation = null), e);
            }
            function tt(e) {
                ut.trackingDerivation = e;
            }
            function nt(e) {
                var t = ut.allowStateReads;
                return ((ut.allowStateReads = e), t);
            }
            function rt(e) {
                ut.allowStateReads = e;
            }
            function it(e) {
                if (e.dependenciesState_ !== Ge.UP_TO_DATE_) {
                    e.dependenciesState_ = Ge.UP_TO_DATE_;
                    for (var t = e.observing_, n = t.length; n--; ) t[n].lowestObserverState_ = Ge.UP_TO_DATE_;
                }
            }
            var ot = function () {
                    ((this.version = 6),
                        (this.UNCHANGED = {}),
                        (this.trackingDerivation = null),
                        (this.trackingContext = null),
                        (this.runId = 0),
                        (this.mobxGuid = 0),
                        (this.inBatch = 0),
                        (this.pendingUnobservations = []),
                        (this.pendingReactions = []),
                        (this.isRunningReactions = !1),
                        (this.allowStateChanges = !1),
                        (this.allowStateReads = !0),
                        (this.enforceActions = !0),
                        (this.spyListeners = []),
                        (this.globalReactionErrorHandlers = []),
                        (this.computedRequiresReaction = !1),
                        (this.reactionRequiresObservable = !1),
                        (this.observableRequiresReaction = !1),
                        (this.disableErrorBoundaries = !1),
                        (this.suppressReactionErrors = !1),
                        (this.useProxies = !0),
                        (this.verifyProxies = !1),
                        (this.safeDescriptors = !0));
                },
                at = !0,
                st = !1,
                ut = (function () {
                    var e = o();
                    return (
                        e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (at = !1),
                        e.__mobxGlobals && e.__mobxGlobals.version !== new ot().version && (at = !1),
                        at
                            ? e.__mobxGlobals
                                ? ((e.__mobxInstanceCount += 1),
                                  e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
                                  e.__mobxGlobals)
                                : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new ot()))
                            : (setTimeout(function () {
                                  st || r(35);
                              }, 1),
                              new ot())
                    );
                })();
            function ct(e, t) {
                (e.observers_.add(t),
                    e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_));
            }
            function lt(e, t) {
                (e.observers_.delete(t), 0 === e.observers_.size && ft(e));
            }
            function ft(e) {
                !1 === e.isPendingUnobservation_ &&
                    ((e.isPendingUnobservation_ = !0), ut.pendingUnobservations.push(e));
            }
            function ht() {
                ut.inBatch++;
            }
            function vt() {
                if (0 == --ut.inBatch) {
                    yt();
                    for (var e = ut.pendingUnobservations, t = 0; t < e.length; t++) {
                        var n = e[t];
                        ((n.isPendingUnobservation_ = !1),
                            0 === n.observers_.size &&
                                (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()),
                                n instanceof ze && n.suspend_()));
                    }
                    ut.pendingUnobservations = [];
                }
            }
            function dt(e) {
                var t = ut.trackingDerivation;
                return null !== t
                    ? (t.runId_ !== e.lastAccessedBy_ &&
                          ((e.lastAccessedBy_ = t.runId_),
                          (t.newObserving_[t.unboundDepsCount_++] = e),
                          !e.isBeingObserved_ && ut.trackingContext && ((e.isBeingObserved_ = !0), e.onBO())),
                      !0)
                    : (0 === e.observers_.size && ut.inBatch > 0 && ft(e), !1);
            }
            function pt(e) {
                e.lowestObserverState_ !== Ge.STALE_ &&
                    ((e.lowestObserverState_ = Ge.STALE_),
                    e.observers_.forEach(function (e) {
                        (e.dependenciesState_ === Ge.UP_TO_DATE_ && e.onBecomeStale_(),
                            (e.dependenciesState_ = Ge.STALE_));
                    }));
            }
            var _t = (function () {
                function e(e, t, n, r) {
                    (void 0 === e && (e = 'Reaction'),
                        void 0 === r && (r = !1),
                        (this.name_ = void 0),
                        (this.onInvalidate_ = void 0),
                        (this.errorHandler_ = void 0),
                        (this.requiresObservable_ = void 0),
                        (this.observing_ = []),
                        (this.newObserving_ = []),
                        (this.dependenciesState_ = Ge.NOT_TRACKING_),
                        (this.diffValue_ = 0),
                        (this.runId_ = 0),
                        (this.unboundDepsCount_ = 0),
                        (this.isDisposed_ = !1),
                        (this.isScheduled_ = !1),
                        (this.isTrackPending_ = !1),
                        (this.isRunning_ = !1),
                        (this.isTracing_ = Fe.NONE),
                        (this.name_ = e),
                        (this.onInvalidate_ = t),
                        (this.errorHandler_ = n),
                        (this.requiresObservable_ = r));
                }
                var t = e.prototype;
                return (
                    (t.onBecomeStale_ = function () {
                        this.schedule_();
                    }),
                    (t.schedule_ = function () {
                        this.isScheduled_ || ((this.isScheduled_ = !0), ut.pendingReactions.push(this), yt());
                    }),
                    (t.isScheduled = function () {
                        return this.isScheduled_;
                    }),
                    (t.runReaction_ = function () {
                        if (!this.isDisposed_) {
                            (ht(), (this.isScheduled_ = !1));
                            var e = ut.trackingContext;
                            if (((ut.trackingContext = this), Xe(this))) {
                                this.isTrackPending_ = !0;
                                try {
                                    this.onInvalidate_();
                                } catch (e) {
                                    this.reportExceptionInDerivation_(e);
                                }
                            }
                            ((ut.trackingContext = e), vt());
                        }
                    }),
                    (t.track = function (e) {
                        if (!this.isDisposed_) {
                            ht();
                            (0, (this.isRunning_ = !0));
                            var t = ut.trackingContext;
                            ut.trackingContext = this;
                            var n = Qe(this, e, void 0);
                            ((ut.trackingContext = t),
                                (this.isRunning_ = !1),
                                (this.isTrackPending_ = !1),
                                this.isDisposed_ && $e(this),
                                We(n) && this.reportExceptionInDerivation_(n.cause),
                                vt());
                        }
                    }),
                    (t.reportExceptionInDerivation_ = function (e) {
                        var t = this;
                        if (this.errorHandler_) this.errorHandler_(e, this);
                        else {
                            if (ut.disableErrorBoundaries) throw e;
                            var n = "[mobx] uncaught error in '" + this + "'";
                            (ut.suppressReactionErrors || console.error(n, e),
                                ut.globalReactionErrorHandlers.forEach(function (n) {
                                    return n(e, t);
                                }));
                        }
                    }),
                    (t.dispose = function () {
                        this.isDisposed_ || ((this.isDisposed_ = !0), this.isRunning_ || (ht(), $e(this), vt()));
                    }),
                    (t.getDisposer_ = function () {
                        var e = this.dispose.bind(this);
                        return ((e[G] = this), e);
                    }),
                    (t.toString = function () {
                        return 'Reaction[' + this.name_ + ']';
                    }),
                    (t.trace = function (e) {
                        (void 0 === e && (e = !1),
                            (function () {
                                r('trace() is not available in production builds');
                                for (var e = !1, t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                                    n[i] = arguments[i];
                                'boolean' == typeof n[n.length - 1] && (e = n.pop());
                                var o = an(n);
                                if (!o)
                                    return r(
                                        "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly",
                                    );
                                o.isTracing_ === Fe.NONE &&
                                    console.log("[mobx.trace] '" + o.name_ + "' tracing enabled");
                                o.isTracing_ = e ? Fe.BREAK : Fe.LOG;
                            })(this, e));
                    }),
                    e
                );
            })();
            var bt = function (e) {
                return e();
            };
            function yt() {
                ut.inBatch > 0 || ut.isRunningReactions || bt(gt);
            }
            function gt() {
                ut.isRunningReactions = !0;
                for (var e = ut.pendingReactions, t = 0; e.length > 0; ) {
                    100 == ++t && (console.error('[mobx] cycle in reaction: ' + e[0]), e.splice(0));
                    for (var n = e.splice(0), r = 0, i = n.length; r < i; r++) n[r].runReaction_();
                }
                ut.isRunningReactions = !1;
            }
            var mt = j('Reaction', _t);
            var Ot = 'action',
                wt = 'autoAction',
                At = '<unnamed action>',
                jt = Y(Ot),
                St = Y('action.bound', { bound: !0 }),
                Pt = Y(wt, { autoAction: !0 }),
                xt = Y('autoAction.bound', { autoAction: !0, bound: !0 });
            function kt(e) {
                return function (t, n) {
                    return b(t)
                        ? Ne(t.name || At, t, e)
                        : b(n)
                          ? Ne(t, n, e)
                          : y(n)
                            ? K(t, n, e ? Pt : jt)
                            : y(t)
                              ? U(Y(e ? wt : Ot, { name: t, autoAction: e }))
                              : void 0;
                };
            }
            var Tt = kt(!1);
            Object.assign(Tt, jt);
            var Et = kt(!0);
            function Vt(e) {
                return Be(e.name, !1, e, this, void 0);
            }
            function Dt(e) {
                return b(e) && !0 === e.isMobxAction;
            }
            function Rt(e, t) {
                var n, r;
                void 0 === t && (t = f);
                var i,
                    o = null != (n = null == (r = t) ? void 0 : r.name) ? n : 'Autorun';
                if (!t.scheduler && !t.delay)
                    i = new _t(
                        o,
                        function () {
                            this.track(u);
                        },
                        t.onError,
                        t.requiresObservable,
                    );
                else {
                    var a = Nt(t),
                        s = !1;
                    i = new _t(
                        o,
                        function () {
                            s ||
                                ((s = !0),
                                a(function () {
                                    ((s = !1), i.isDisposed_ || i.track(u));
                                }));
                        },
                        t.onError,
                        t.requiresObservable,
                    );
                }
                function u() {
                    e(i);
                }
                return (i.schedule_(), i.getDisposer_());
            }
            (Object.assign(Et, Pt), (Tt.bound = U(St)), (Et.bound = U(xt)));
            var Ct = function (e) {
                return e();
            };
            function Nt(e) {
                return e.scheduler
                    ? e.scheduler
                    : e.delay
                      ? function (t) {
                            return setTimeout(t, e.delay);
                        }
                      : Ct;
            }
            function Bt(e, t, n) {
                var r;
                void 0 === n && (n = f);
                var i,
                    o,
                    a,
                    s,
                    u = null != (r = n.name) ? r : 'Reaction',
                    c = Tt(
                        u,
                        n.onError
                            ? ((i = n.onError),
                              (o = t),
                              function () {
                                  try {
                                      return o.apply(this, arguments);
                                  } catch (e) {
                                      i.call(this, e);
                                  }
                              })
                            : t,
                    ),
                    l = !n.scheduler && !n.delay,
                    h = Nt(n),
                    v = !0,
                    d = !1,
                    p = n.compareStructural ? H.structural : n.equals || H.default,
                    _ = new _t(
                        u,
                        function () {
                            v || l ? b() : d || ((d = !0), h(b));
                        },
                        n.onError,
                        n.requiresObservable,
                    );
                function b() {
                    if (((d = !1), !_.isDisposed_)) {
                        var t = !1;
                        (_.track(function () {
                            var n = Le(!1, function () {
                                return e(_);
                            });
                            ((t = v || !p(a, n)), (s = a), (a = n));
                        }),
                            ((v && n.fireImmediately) || (!v && t)) && c(a, s, _),
                            (v = !1));
                    }
                }
                return (_.schedule_(), _.getDisposer_());
            }
            var Lt = 'onBO';
            function It(e, t, n) {
                return Mt('onBUO', e, t, n);
            }
            function Mt(e, t, n, r) {
                var i = 'function' == typeof r ? ir(t, n) : ir(t),
                    o = b(r) ? r : n,
                    a = e + 'L';
                return (
                    i[a] ? i[a].add(o) : (i[a] = new Set([o])),
                    function () {
                        var e = i[a];
                        e && (e.delete(o), 0 === e.size && delete i[a]);
                    }
                );
            }
            var Ut = 'always';
            function Kt(e) {
                !0 === e.isolateGlobalState &&
                    (function () {
                        if (
                            ((ut.pendingReactions.length || ut.inBatch || ut.isRunningReactions) && r(36),
                            (st = !0),
                            at)
                        ) {
                            var e = o();
                            (0 == --e.__mobxInstanceCount && (e.__mobxGlobals = void 0), (ut = new ot()));
                        }
                    })();
                var t,
                    n,
                    i = e.useProxies,
                    a = e.enforceActions;
                if (
                    (void 0 !== i && (ut.useProxies = i === Ut || ('never' !== i && 'undefined' != typeof Proxy)),
                    'ifavailable' === i && (ut.verifyProxies = !0),
                    void 0 !== a)
                ) {
                    var s = a === Ut ? Ut : 'observed' === a;
                    ((ut.enforceActions = s), (ut.allowStateChanges = !0 !== s && s !== Ut));
                }
                ([
                    'computedRequiresReaction',
                    'reactionRequiresObservable',
                    'observableRequiresReaction',
                    'disableErrorBoundaries',
                    'safeDescriptors',
                ].forEach(function (t) {
                    t in e && (ut[t] = !!e[t]);
                }),
                    (ut.allowStateReads = !ut.observableRequiresReaction),
                    e.reactionScheduler &&
                        ((t = e.reactionScheduler),
                        (n = bt),
                        (bt = function (e) {
                            return t(function () {
                                return n(e);
                            });
                        })));
            }
            function Gt(e, t, n, r) {
                var i = V(t),
                    o = zn(e, r)[G];
                ht();
                try {
                    k(i).forEach(function (e) {
                        o.extend_(e, i[e], !n || !(e in n) || n[e]);
                    });
                } finally {
                    vt();
                }
                return e;
            }
            function Ft(e, t) {
                return zt(ir(e, t));
            }
            function zt(e) {
                var t,
                    n = { name: e.name_ };
                return (
                    e.observing_ &&
                        e.observing_.length > 0 &&
                        (n.dependencies = ((t = e.observing_), Array.from(new Set(t))).map(zt)),
                    n
                );
            }
            var qt = 0;
            function Ht() {
                this.message = 'FLOW_CANCELLED';
            }
            Ht.prototype = Object.create(Error.prototype);
            var Wt = ee('flow'),
                Xt = ee('flow.bound', { bound: !0 }),
                Jt = Object.assign(function (e, t) {
                    if (y(t)) return K(e, t, Wt);
                    var n = e,
                        r = n.name || '<unnamed flow>',
                        i = function () {
                            var e,
                                t = this,
                                i = arguments,
                                o = ++qt,
                                a = Tt(r + ' - runid: ' + o + ' - init', n).apply(t, i),
                                s = void 0,
                                u = new Promise(function (t, n) {
                                    var i = 0;
                                    function u(e) {
                                        var t;
                                        s = void 0;
                                        try {
                                            t = Tt(r + ' - runid: ' + o + ' - yield ' + i++, a.next).call(a, e);
                                        } catch (e) {
                                            return n(e);
                                        }
                                        l(t);
                                    }
                                    function c(e) {
                                        var t;
                                        s = void 0;
                                        try {
                                            t = Tt(r + ' - runid: ' + o + ' - yield ' + i++, a.throw).call(a, e);
                                        } catch (e) {
                                            return n(e);
                                        }
                                        l(t);
                                    }
                                    function l(e) {
                                        if (!b(null == e ? void 0 : e.then))
                                            return e.done ? t(e.value) : (s = Promise.resolve(e.value)).then(u, c);
                                        e.then(l, n);
                                    }
                                    ((e = n), u(void 0));
                                });
                            return (
                                (u.cancel = Tt(r + ' - runid: ' + o + ' - cancel', function () {
                                    try {
                                        s && Yt(s);
                                        var t = a.return(void 0),
                                            n = Promise.resolve(t.value);
                                        (n.then(_, _), Yt(n), e(new Ht()));
                                    } catch (t) {
                                        e(t);
                                    }
                                })),
                                u
                            );
                        };
                    return ((i.isMobXFlow = !0), i);
                }, Wt);
            function Yt(e) {
                b(e.cancel) && e.cancel();
            }
            function Qt(e) {
                return !0 === (null == e ? void 0 : e.isMobXFlow);
            }
            function $t(e, t) {
                if (void 0 === t) return qe(e);
                if (!1 === Wn(e)) return !1;
                if (!e[G].values_.has(t)) return !1;
                var n = ir(e, t);
                return qe(n);
            }
            function Zt(e) {
                return $t(e);
            }
            function en(e, t) {
                return $t(e, t);
            }
            function tn(e, t) {
                return (
                    !!e && (void 0 !== t ? !!Wn(e) && e[G].values_.has(t) : Wn(e) || !!e[G] || z(e) || mt(e) || qe(e))
                );
            }
            function nn(e) {
                return tn(e);
            }
            function rn(e) {
                return Wn(e)
                    ? e[G].keys_()
                    : Ln(e) || Un(e)
                      ? Array.from(e.keys())
                      : En(e)
                        ? e.map(function (e, t) {
                              return t;
                          })
                        : void r(5);
            }
            function on(e, t, n, r) {
                return b(n)
                    ? (function (e, t, n, r) {
                          return or(e, t).observe_(n, r);
                      })(e, t, n, r)
                    : (function (e, t, n) {
                          return or(e).observe_(t, n);
                      })(e, t, n);
            }
            function an(e) {
                switch (e.length) {
                    case 0:
                        return ut.trackingDerivation;
                    case 1:
                        return ir(e[0]);
                    case 2:
                        return ir(e[0], e[1]);
                }
            }
            function sn(e, t) {
                (void 0 === t && (t = void 0), ht());
                try {
                    return e.apply(t);
                } finally {
                    vt();
                }
            }
            function un(e) {
                return e[G];
            }
            Jt.bound = U(Xt);
            var cn = {
                has: function (e, t) {
                    return un(e).has_(t);
                },
                get: function (e, t) {
                    return un(e).get_(t);
                },
                set: function (e, t, n) {
                    var r;
                    return !!y(t) && (null == (r = un(e).set_(t, n, !0)) || r);
                },
                deleteProperty: function (e, t) {
                    var n;
                    return !!y(t) && (null == (n = un(e).delete_(t, !0)) || n);
                },
                defineProperty: function (e, t, n) {
                    var r;
                    return null == (r = un(e).defineProperty_(t, n)) || r;
                },
                ownKeys: function (e) {
                    return un(e).ownKeys_();
                },
                preventExtensions: function (e) {
                    r(13);
                },
            };
            function ln(e) {
                return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
            }
            function fn(e, t) {
                var n = e.interceptors_ || (e.interceptors_ = []);
                return (
                    n.push(t),
                    p(function () {
                        var e = n.indexOf(t);
                        -1 !== e && n.splice(e, 1);
                    })
                );
            }
            function hn(e, t) {
                var n = et();
                try {
                    for (
                        var i = [].concat(e.interceptors_ || []), o = 0, a = i.length;
                        o < a && ((t = i[o](t)) && !t.type && r(14), t);
                        o++
                    );
                    return t;
                } finally {
                    tt(n);
                }
            }
            function vn(e) {
                return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
            }
            function dn(e, t) {
                var n = e.changeListeners_ || (e.changeListeners_ = []);
                return (
                    n.push(t),
                    p(function () {
                        var e = n.indexOf(t);
                        -1 !== e && n.splice(e, 1);
                    })
                );
            }
            function pn(e, t) {
                var n = et(),
                    r = e.changeListeners_;
                if (r) {
                    for (var i = 0, o = (r = r.slice()).length; i < o; i++) r[i](t);
                    tt(n);
                }
            }
            function _n(e, t, n) {
                var r = zn(e, n)[G];
                ht();
                try {
                    (0,
                        null != t ||
                            (t = (function (e) {
                                return (E(e, M) || w(e, M, C({}, e[M])), e[M]);
                            })(e)),
                        k(t).forEach(function (e) {
                            return r.make_(e, t[e]);
                        }));
                } finally {
                    vt();
                }
                return e;
            }
            var bn = 'splice',
                yn = 'update',
                gn = {
                    get: function (e, t) {
                        var n = e[G];
                        return t === G
                            ? n
                            : 'length' === t
                              ? n.getArrayLength_()
                              : 'string' != typeof t || isNaN(t)
                                ? E(wn, t)
                                    ? wn[t]
                                    : e[t]
                                : n.get_(parseInt(t));
                    },
                    set: function (e, t, n) {
                        var r = e[G];
                        return (
                            'length' === t && r.setArrayLength_(n),
                            'symbol' == typeof t || isNaN(t) ? (e[t] = n) : r.set_(parseInt(t), n),
                            !0
                        );
                    },
                    preventExtensions: function () {
                        r(15);
                    },
                },
                mn = (function () {
                    function e(e, t, n, r) {
                        (void 0 === e && (e = 'ObservableArray'),
                            (this.owned_ = void 0),
                            (this.legacyMode_ = void 0),
                            (this.atom_ = void 0),
                            (this.values_ = []),
                            (this.interceptors_ = void 0),
                            (this.changeListeners_ = void 0),
                            (this.enhancer_ = void 0),
                            (this.dehancer = void 0),
                            (this.proxy_ = void 0),
                            (this.lastKnownLength_ = 0),
                            (this.owned_ = n),
                            (this.legacyMode_ = r),
                            (this.atom_ = new F(e)),
                            (this.enhancer_ = function (e, n) {
                                return t(e, n, 'ObservableArray[..]');
                            }));
                    }
                    var t = e.prototype;
                    return (
                        (t.dehanceValue_ = function (e) {
                            return void 0 !== this.dehancer ? this.dehancer(e) : e;
                        }),
                        (t.dehanceValues_ = function (e) {
                            return void 0 !== this.dehancer && e.length > 0 ? e.map(this.dehancer) : e;
                        }),
                        (t.intercept_ = function (e) {
                            return fn(this, e);
                        }),
                        (t.observe_ = function (e, t) {
                            return (
                                void 0 === t && (t = !1),
                                t &&
                                    e({
                                        observableKind: 'array',
                                        object: this.proxy_,
                                        debugObjectName: this.atom_.name_,
                                        type: 'splice',
                                        index: 0,
                                        added: this.values_.slice(),
                                        addedCount: this.values_.length,
                                        removed: [],
                                        removedCount: 0,
                                    }),
                                dn(this, e)
                            );
                        }),
                        (t.getArrayLength_ = function () {
                            return (this.atom_.reportObserved(), this.values_.length);
                        }),
                        (t.setArrayLength_ = function (e) {
                            ('number' != typeof e || isNaN(e) || e < 0) && r('Out of range: ' + e);
                            var t = this.values_.length;
                            if (e !== t)
                                if (e > t) {
                                    for (var n = new Array(e - t), i = 0; i < e - t; i++) n[i] = void 0;
                                    this.spliceWithArray_(t, 0, n);
                                } else this.spliceWithArray_(e, t - e);
                        }),
                        (t.updateArrayLength_ = function (e, t) {
                            (e !== this.lastKnownLength_ && r(16),
                                (this.lastKnownLength_ += t),
                                this.legacyMode_ && t > 0 && nr(e + t + 1));
                        }),
                        (t.spliceWithArray_ = function (e, t, n) {
                            var r = this;
                            this.atom_;
                            var i = this.values_.length;
                            if (
                                (void 0 === e ? (e = 0) : e > i ? (e = i) : e < 0 && (e = Math.max(0, i + e)),
                                (t = 1 === arguments.length ? i - e : null == t ? 0 : Math.max(0, Math.min(t, i - e))),
                                void 0 === n && (n = l),
                                ln(this))
                            ) {
                                var o = hn(this, {
                                    object: this.proxy_,
                                    type: bn,
                                    index: e,
                                    removedCount: t,
                                    added: n,
                                });
                                if (!o) return l;
                                ((t = o.removedCount), (n = o.added));
                            }
                            if (
                                ((n =
                                    0 === n.length
                                        ? n
                                        : n.map(function (e) {
                                              return r.enhancer_(e, void 0);
                                          })),
                                this.legacyMode_)
                            ) {
                                var a = n.length - t;
                                this.updateArrayLength_(i, a);
                            }
                            var s = this.spliceItemsIntoValues_(e, t, n);
                            return (
                                (0 === t && 0 === n.length) || this.notifyArraySplice_(e, n, s),
                                this.dehanceValues_(s)
                            );
                        }),
                        (t.spliceItemsIntoValues_ = function (e, t, n) {
                            var r;
                            if (n.length < 1e4) return (r = this.values_).splice.apply(r, [e, t].concat(n));
                            var i = this.values_.slice(e, e + t),
                                o = this.values_.slice(e + t);
                            this.values_.length += n.length - t;
                            for (var a = 0; a < n.length; a++) this.values_[e + a] = n[a];
                            for (var s = 0; s < o.length; s++) this.values_[e + n.length + s] = o[s];
                            return i;
                        }),
                        (t.notifyArrayChildUpdate_ = function (e, t, n) {
                            var r = !this.owned_ && !1,
                                i = vn(this),
                                o =
                                    i || r
                                        ? {
                                              observableKind: 'array',
                                              object: this.proxy_,
                                              type: yn,
                                              debugObjectName: this.atom_.name_,
                                              index: e,
                                              newValue: t,
                                              oldValue: n,
                                          }
                                        : null;
                            (this.atom_.reportChanged(), i && pn(this, o));
                        }),
                        (t.notifyArraySplice_ = function (e, t, n) {
                            var r = !this.owned_ && !1,
                                i = vn(this),
                                o =
                                    i || r
                                        ? {
                                              observableKind: 'array',
                                              object: this.proxy_,
                                              debugObjectName: this.atom_.name_,
                                              type: bn,
                                              index: e,
                                              removed: n,
                                              added: t,
                                              removedCount: n.length,
                                              addedCount: t.length,
                                          }
                                        : null;
                            (this.atom_.reportChanged(), i && pn(this, o));
                        }),
                        (t.get_ = function (e) {
                            if (e < this.values_.length)
                                return (this.atom_.reportObserved(), this.dehanceValue_(this.values_[e]));
                            console.warn(
                                '[mobx.array] Attempt to read an array index (' +
                                    e +
                                    ') that is out of bounds (' +
                                    this.values_.length +
                                    '). Please check length first. Out of bound indices will not be tracked by MobX',
                            );
                        }),
                        (t.set_ = function (e, t) {
                            var n = this.values_;
                            if (e < n.length) {
                                this.atom_;
                                var i = n[e];
                                if (ln(this)) {
                                    var o = hn(this, { type: yn, object: this.proxy_, index: e, newValue: t });
                                    if (!o) return;
                                    t = o.newValue;
                                }
                                (t = this.enhancer_(t, i)) !== i && ((n[e] = t), this.notifyArrayChildUpdate_(e, t, i));
                            } else e === n.length ? this.spliceWithArray_(e, 0, [t]) : r(17, e, n.length);
                        }),
                        e
                    );
                })();
            function On(e, t, n, r) {
                (void 0 === n && (n = 'ObservableArray'), void 0 === r && (r = !1), d());
                var i = new mn(n, t, r, !1);
                A(i.values_, G, i);
                var o = new Proxy(i.values_, gn);
                if (((i.proxy_ = o), e && e.length)) {
                    var a = Ie(!0);
                    (i.spliceWithArray_(0, 0, e), Me(a));
                }
                return o;
            }
            var wn = {
                clear: function () {
                    return this.splice(0);
                },
                replace: function (e) {
                    var t = this[G];
                    return t.spliceWithArray_(0, t.values_.length, e);
                },
                toJSON: function () {
                    return this.slice();
                },
                splice: function (e, t) {
                    for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
                        r[i - 2] = arguments[i];
                    var o = this[G];
                    switch (arguments.length) {
                        case 0:
                            return [];
                        case 1:
                            return o.spliceWithArray_(e);
                        case 2:
                            return o.spliceWithArray_(e, t);
                    }
                    return o.spliceWithArray_(e, t, r);
                },
                spliceWithArray: function (e, t, n) {
                    return this[G].spliceWithArray_(e, t, n);
                },
                push: function () {
                    for (var e = this[G], t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    return (e.spliceWithArray_(e.values_.length, 0, n), e.values_.length);
                },
                pop: function () {
                    return this.splice(Math.max(this[G].values_.length - 1, 0), 1)[0];
                },
                shift: function () {
                    return this.splice(0, 1)[0];
                },
                unshift: function () {
                    for (var e = this[G], t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    return (e.spliceWithArray_(0, 0, n), e.values_.length);
                },
                reverse: function () {
                    return (ut.trackingDerivation && r(37, 'reverse'), this.replace(this.slice().reverse()), this);
                },
                sort: function () {
                    ut.trackingDerivation && r(37, 'sort');
                    var e = this.slice();
                    return (e.sort.apply(e, arguments), this.replace(e), this);
                },
                remove: function (e) {
                    var t = this[G],
                        n = t.dehanceValues_(t.values_).indexOf(e);
                    return n > -1 && (this.splice(n, 1), !0);
                },
            };
            function An(e, t) {
                'function' == typeof Array.prototype[e] && (wn[e] = t(e));
            }
            function jn(e) {
                return function () {
                    var t = this[G];
                    t.atom_.reportObserved();
                    var n = t.dehanceValues_(t.values_);
                    return n[e].apply(n, arguments);
                };
            }
            function Sn(e) {
                return function (t, n) {
                    var r = this,
                        i = this[G];
                    return (
                        i.atom_.reportObserved(),
                        i.dehanceValues_(i.values_)[e](function (e, i) {
                            return t.call(n, e, i, r);
                        })
                    );
                };
            }
            function Pn(e) {
                return function () {
                    var t = this,
                        n = this[G];
                    n.atom_.reportObserved();
                    var r = n.dehanceValues_(n.values_),
                        i = arguments[0];
                    return (
                        (arguments[0] = function (e, n, r) {
                            return i(e, n, r, t);
                        }),
                        r[e].apply(r, arguments)
                    );
                };
            }
            (An('concat', jn),
                An('flat', jn),
                An('includes', jn),
                An('indexOf', jn),
                An('join', jn),
                An('lastIndexOf', jn),
                An('slice', jn),
                An('toString', jn),
                An('toLocaleString', jn),
                An('every', Sn),
                An('filter', Sn),
                An('find', Sn),
                An('findIndex', Sn),
                An('flatMap', Sn),
                An('forEach', Sn),
                An('map', Sn),
                An('some', Sn),
                An('reduce', Pn),
                An('reduceRight', Pn));
            var xn,
                kn,
                Tn = j('ObservableArrayAdministration', mn);
            function En(e) {
                return g(e) && Tn(e[G]);
            }
            var Vn = {},
                Dn = 'add',
                Rn = 'delete';
            ((xn = Symbol.iterator), (kn = Symbol.toStringTag));
            var Cn,
                Nn,
                Bn = (function () {
                    function e(e, t, n) {
                        (void 0 === t && (t = W),
                            void 0 === n && (n = 'ObservableMap'),
                            (this.enhancer_ = void 0),
                            (this.name_ = void 0),
                            (this[G] = Vn),
                            (this.data_ = void 0),
                            (this.hasMap_ = void 0),
                            (this.keysAtom_ = void 0),
                            (this.interceptors_ = void 0),
                            (this.changeListeners_ = void 0),
                            (this.dehancer = void 0),
                            (this.enhancer_ = t),
                            (this.name_ = n),
                            b(Map) || r(18),
                            (this.keysAtom_ = q('ObservableMap.keys()')),
                            (this.data_ = new Map()),
                            (this.hasMap_ = new Map()),
                            this.merge(e));
                    }
                    var t = e.prototype;
                    return (
                        (t.has_ = function (e) {
                            return this.data_.has(e);
                        }),
                        (t.has = function (e) {
                            var t = this;
                            if (!ut.trackingDerivation) return this.has_(e);
                            var n = this.hasMap_.get(e);
                            if (!n) {
                                var r = (n = new Ke(this.has_(e), X, 'ObservableMap.key?', !1));
                                (this.hasMap_.set(e, r),
                                    It(r, function () {
                                        return t.hasMap_.delete(e);
                                    }));
                            }
                            return n.get();
                        }),
                        (t.set = function (e, t) {
                            var n = this.has_(e);
                            if (ln(this)) {
                                var r = hn(this, { type: n ? yn : Dn, object: this, newValue: t, name: e });
                                if (!r) return this;
                                t = r.newValue;
                            }
                            return (n ? this.updateValue_(e, t) : this.addValue_(e, t), this);
                        }),
                        (t.delete = function (e) {
                            var t = this;
                            if ((this.keysAtom_, ln(this)) && !hn(this, { type: Rn, object: this, name: e })) return !1;
                            if (this.has_(e)) {
                                var n = vn(this),
                                    r = n
                                        ? {
                                              observableKind: 'map',
                                              debugObjectName: this.name_,
                                              type: Rn,
                                              object: this,
                                              oldValue: this.data_.get(e).value_,
                                              name: e,
                                          }
                                        : null;
                                return (
                                    sn(function () {
                                        var n;
                                        (t.keysAtom_.reportChanged(),
                                            null == (n = t.hasMap_.get(e)) || n.setNewValue_(!1),
                                            t.data_.get(e).setNewValue_(void 0),
                                            t.data_.delete(e));
                                    }),
                                    n && pn(this, r),
                                    !0
                                );
                            }
                            return !1;
                        }),
                        (t.updateValue_ = function (e, t) {
                            var n = this.data_.get(e);
                            if ((t = n.prepareNewValue_(t)) !== ut.UNCHANGED) {
                                var r = vn(this),
                                    i = r
                                        ? {
                                              observableKind: 'map',
                                              debugObjectName: this.name_,
                                              type: yn,
                                              object: this,
                                              oldValue: n.value_,
                                              name: e,
                                              newValue: t,
                                          }
                                        : null;
                                (0, n.setNewValue_(t), r && pn(this, i));
                            }
                        }),
                        (t.addValue_ = function (e, t) {
                            var n = this;
                            (this.keysAtom_,
                                sn(function () {
                                    var r,
                                        i = new Ke(t, n.enhancer_, 'ObservableMap.key', !1);
                                    (n.data_.set(e, i),
                                        (t = i.value_),
                                        null == (r = n.hasMap_.get(e)) || r.setNewValue_(!0),
                                        n.keysAtom_.reportChanged());
                                }));
                            var r = vn(this),
                                i = r
                                    ? {
                                          observableKind: 'map',
                                          debugObjectName: this.name_,
                                          type: Dn,
                                          object: this,
                                          name: e,
                                          newValue: t,
                                      }
                                    : null;
                            r && pn(this, i);
                        }),
                        (t.get = function (e) {
                            return this.has(e)
                                ? this.dehanceValue_(this.data_.get(e).get())
                                : this.dehanceValue_(void 0);
                        }),
                        (t.dehanceValue_ = function (e) {
                            return void 0 !== this.dehancer ? this.dehancer(e) : e;
                        }),
                        (t.keys = function () {
                            return (this.keysAtom_.reportObserved(), this.data_.keys());
                        }),
                        (t.values = function () {
                            var e = this,
                                t = this.keys();
                            return fr({
                                next: function () {
                                    var n = t.next(),
                                        r = n.done,
                                        i = n.value;
                                    return { done: r, value: r ? void 0 : e.get(i) };
                                },
                            });
                        }),
                        (t.entries = function () {
                            var e = this,
                                t = this.keys();
                            return fr({
                                next: function () {
                                    var n = t.next(),
                                        r = n.done,
                                        i = n.value;
                                    return { done: r, value: r ? void 0 : [i, e.get(i)] };
                                },
                            });
                        }),
                        (t[xn] = function () {
                            return this.entries();
                        }),
                        (t.forEach = function (e, t) {
                            for (var n, r = I(this); !(n = r()).done; ) {
                                var i = n.value,
                                    o = i[0],
                                    a = i[1];
                                e.call(t, a, o, this);
                            }
                        }),
                        (t.merge = function (e) {
                            var t = this;
                            return (
                                Ln(e) && (e = new Map(e)),
                                sn(function () {
                                    m(e)
                                        ? (function (e) {
                                              var t = Object.keys(e);
                                              if (!x) return t;
                                              var n = Object.getOwnPropertySymbols(e);
                                              return n.length
                                                  ? [].concat(
                                                        t,
                                                        n.filter(function (t) {
                                                            return c.propertyIsEnumerable.call(e, t);
                                                        }),
                                                    )
                                                  : t;
                                          })(e).forEach(function (n) {
                                              return t.set(n, e[n]);
                                          })
                                        : Array.isArray(e)
                                          ? e.forEach(function (e) {
                                                var n = e[0],
                                                    r = e[1];
                                                return t.set(n, r);
                                            })
                                          : S(e)
                                            ? (e.constructor !== Map && r(19, e),
                                              e.forEach(function (e, n) {
                                                  return t.set(n, e);
                                              }))
                                            : null != e && r(20, e);
                                }),
                                this
                            );
                        }),
                        (t.clear = function () {
                            var e = this;
                            sn(function () {
                                Ze(function () {
                                    for (var t, n = I(e.keys()); !(t = n()).done; ) {
                                        var r = t.value;
                                        e.delete(r);
                                    }
                                });
                            });
                        }),
                        (t.replace = function (e) {
                            var t = this;
                            return (
                                sn(function () {
                                    for (
                                        var n,
                                            i = (function (e) {
                                                if (S(e) || Ln(e)) return e;
                                                if (Array.isArray(e)) return new Map(e);
                                                if (m(e)) {
                                                    var t = new Map();
                                                    for (var n in e) t.set(n, e[n]);
                                                    return t;
                                                }
                                                return r(21, e);
                                            })(e),
                                            o = new Map(),
                                            a = !1,
                                            s = I(t.data_.keys());
                                        !(n = s()).done;

                                    ) {
                                        var u = n.value;
                                        if (!i.has(u))
                                            if (t.delete(u)) a = !0;
                                            else {
                                                var c = t.data_.get(u);
                                                o.set(u, c);
                                            }
                                    }
                                    for (var l, f = I(i.entries()); !(l = f()).done; ) {
                                        var h = l.value,
                                            v = h[0],
                                            d = h[1],
                                            p = t.data_.has(v);
                                        if ((t.set(v, d), t.data_.has(v))) {
                                            var _ = t.data_.get(v);
                                            (o.set(v, _), p || (a = !0));
                                        }
                                    }
                                    if (!a)
                                        if (t.data_.size !== o.size) t.keysAtom_.reportChanged();
                                        else
                                            for (
                                                var b = t.data_.keys(), y = o.keys(), g = b.next(), O = y.next();
                                                !g.done;

                                            ) {
                                                if (g.value !== O.value) {
                                                    t.keysAtom_.reportChanged();
                                                    break;
                                                }
                                                ((g = b.next()), (O = y.next()));
                                            }
                                    t.data_ = o;
                                }),
                                this
                            );
                        }),
                        (t.toString = function () {
                            return '[object ObservableMap]';
                        }),
                        (t.toJSON = function () {
                            return Array.from(this);
                        }),
                        (t.observe_ = function (e, t) {
                            return dn(this, e);
                        }),
                        (t.intercept_ = function (e) {
                            return fn(this, e);
                        }),
                        R(e, [
                            {
                                key: 'size',
                                get: function () {
                                    return (this.keysAtom_.reportObserved(), this.data_.size);
                                },
                            },
                            {
                                key: kn,
                                get: function () {
                                    return 'Map';
                                },
                            },
                        ]),
                        e
                    );
                })(),
                Ln = j('ObservableMap', Bn);
            var In = {};
            ((Cn = Symbol.iterator), (Nn = Symbol.toStringTag));
            var Mn = (function () {
                    function e(e, t, n) {
                        (void 0 === t && (t = W),
                            void 0 === n && (n = 'ObservableSet'),
                            (this.name_ = void 0),
                            (this[G] = In),
                            (this.data_ = new Set()),
                            (this.atom_ = void 0),
                            (this.changeListeners_ = void 0),
                            (this.interceptors_ = void 0),
                            (this.dehancer = void 0),
                            (this.enhancer_ = void 0),
                            (this.name_ = n),
                            b(Set) || r(22),
                            (this.atom_ = q(this.name_)),
                            (this.enhancer_ = function (e, r) {
                                return t(e, r, n);
                            }),
                            e && this.replace(e));
                    }
                    var t = e.prototype;
                    return (
                        (t.dehanceValue_ = function (e) {
                            return void 0 !== this.dehancer ? this.dehancer(e) : e;
                        }),
                        (t.clear = function () {
                            var e = this;
                            sn(function () {
                                Ze(function () {
                                    for (var t, n = I(e.data_.values()); !(t = n()).done; ) {
                                        var r = t.value;
                                        e.delete(r);
                                    }
                                });
                            });
                        }),
                        (t.forEach = function (e, t) {
                            for (var n, r = I(this); !(n = r()).done; ) {
                                var i = n.value;
                                e.call(t, i, i, this);
                            }
                        }),
                        (t.add = function (e) {
                            var t = this;
                            if ((this.atom_, ln(this)) && !hn(this, { type: Dn, object: this, newValue: e }))
                                return this;
                            if (!this.has(e)) {
                                sn(function () {
                                    (t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged());
                                });
                                var n = !1,
                                    r = vn(this),
                                    i = r
                                        ? {
                                              observableKind: 'set',
                                              debugObjectName: this.name_,
                                              type: Dn,
                                              object: this,
                                              newValue: e,
                                          }
                                        : null;
                                (n, r && pn(this, i));
                            }
                            return this;
                        }),
                        (t.delete = function (e) {
                            var t = this;
                            if (ln(this) && !hn(this, { type: Rn, object: this, oldValue: e })) return !1;
                            if (this.has(e)) {
                                var n = vn(this),
                                    r = n
                                        ? {
                                              observableKind: 'set',
                                              debugObjectName: this.name_,
                                              type: Rn,
                                              object: this,
                                              oldValue: e,
                                          }
                                        : null;
                                return (
                                    sn(function () {
                                        (t.atom_.reportChanged(), t.data_.delete(e));
                                    }),
                                    n && pn(this, r),
                                    !0
                                );
                            }
                            return !1;
                        }),
                        (t.has = function (e) {
                            return (this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(e)));
                        }),
                        (t.entries = function () {
                            var e = 0,
                                t = Array.from(this.keys()),
                                n = Array.from(this.values());
                            return fr({
                                next: function () {
                                    var r = e;
                                    return ((e += 1), r < n.length ? { value: [t[r], n[r]], done: !1 } : { done: !0 });
                                },
                            });
                        }),
                        (t.keys = function () {
                            return this.values();
                        }),
                        (t.values = function () {
                            this.atom_.reportObserved();
                            var e = this,
                                t = 0,
                                n = Array.from(this.data_.values());
                            return fr({
                                next: function () {
                                    return t < n.length ? { value: e.dehanceValue_(n[t++]), done: !1 } : { done: !0 };
                                },
                            });
                        }),
                        (t.replace = function (e) {
                            var t = this;
                            return (
                                Un(e) && (e = new Set(e)),
                                sn(function () {
                                    Array.isArray(e) || P(e)
                                        ? (t.clear(),
                                          e.forEach(function (e) {
                                              return t.add(e);
                                          }))
                                        : null != e && r('Cannot initialize set from ' + e);
                                }),
                                this
                            );
                        }),
                        (t.observe_ = function (e, t) {
                            return dn(this, e);
                        }),
                        (t.intercept_ = function (e) {
                            return fn(this, e);
                        }),
                        (t.toJSON = function () {
                            return Array.from(this);
                        }),
                        (t.toString = function () {
                            return '[object ObservableSet]';
                        }),
                        (t[Cn] = function () {
                            return this.values();
                        }),
                        R(e, [
                            {
                                key: 'size',
                                get: function () {
                                    return (this.atom_.reportObserved(), this.data_.size);
                                },
                            },
                            {
                                key: Nn,
                                get: function () {
                                    return 'Set';
                                },
                            },
                        ]),
                        e
                    );
                })(),
                Un = j('ObservableSet', Mn),
                Kn = Object.create(null),
                Gn = 'remove',
                Fn = (function () {
                    function e(e, t, n, r) {
                        (void 0 === t && (t = new Map()),
                            void 0 === r && (r = le),
                            (this.target_ = void 0),
                            (this.values_ = void 0),
                            (this.name_ = void 0),
                            (this.defaultAnnotation_ = void 0),
                            (this.keysAtom_ = void 0),
                            (this.changeListeners_ = void 0),
                            (this.interceptors_ = void 0),
                            (this.proxy_ = void 0),
                            (this.isPlainObject_ = void 0),
                            (this.appliedAnnotations_ = void 0),
                            (this.pendingKeys_ = void 0),
                            (this.target_ = e),
                            (this.values_ = t),
                            (this.name_ = n),
                            (this.defaultAnnotation_ = r),
                            (this.keysAtom_ = new F('ObservableObject.keys')),
                            (this.isPlainObject_ = m(this.target_)));
                    }
                    var t = e.prototype;
                    return (
                        (t.getObservablePropValue_ = function (e) {
                            return this.values_.get(e).get();
                        }),
                        (t.setObservablePropValue_ = function (e, t) {
                            var n = this.values_.get(e);
                            if (n instanceof ze) return (n.set(t), !0);
                            if (ln(this)) {
                                var r = hn(this, {
                                    type: yn,
                                    object: this.proxy_ || this.target_,
                                    name: e,
                                    newValue: t,
                                });
                                if (!r) return null;
                                t = r.newValue;
                            }
                            if ((t = n.prepareNewValue_(t)) !== ut.UNCHANGED) {
                                var i = vn(this),
                                    o = i
                                        ? {
                                              type: yn,
                                              observableKind: 'object',
                                              debugObjectName: this.name_,
                                              object: this.proxy_ || this.target_,
                                              oldValue: n.value_,
                                              name: e,
                                              newValue: t,
                                          }
                                        : null;
                                (0, n.setNewValue_(t), i && pn(this, o));
                            }
                            return !0;
                        }),
                        (t.get_ = function (e) {
                            return (ut.trackingDerivation && !E(this.target_, e) && this.has_(e), this.target_[e]);
                        }),
                        (t.set_ = function (e, t, n) {
                            return (
                                void 0 === n && (n = !1),
                                E(this.target_, e)
                                    ? this.values_.has(e)
                                        ? this.setObservablePropValue_(e, t)
                                        : n
                                          ? Reflect.set(this.target_, e, t)
                                          : ((this.target_[e] = t), !0)
                                    : this.extend_(
                                          e,
                                          { value: t, enumerable: !0, writable: !0, configurable: !0 },
                                          this.defaultAnnotation_,
                                          n,
                                      )
                            );
                        }),
                        (t.has_ = function (e) {
                            if (!ut.trackingDerivation) return e in this.target_;
                            this.pendingKeys_ || (this.pendingKeys_ = new Map());
                            var t = this.pendingKeys_.get(e);
                            return (
                                t ||
                                    ((t = new Ke(e in this.target_, X, 'ObservableObject.key?', !1)),
                                    this.pendingKeys_.set(e, t)),
                                t.get()
                            );
                        }),
                        (t.make_ = function (e, t) {
                            if ((!0 === t && (t = this.defaultAnnotation_), !1 !== t)) {
                                if ((Jn(this, t, e), !(e in this.target_))) {
                                    var n;
                                    if (null == (n = this.target_[M]) ? void 0 : n[e]) return;
                                    r(1, t.annotationType_, this.name_ + '.' + e.toString());
                                }
                                for (var i = this.target_; i && i !== c; ) {
                                    var o = s(i, e);
                                    if (o) {
                                        var a = t.make_(this, e, o, i);
                                        if (0 === a) return;
                                        if (1 === a) break;
                                    }
                                    i = Object.getPrototypeOf(i);
                                }
                                Xn(this, t, e);
                            }
                        }),
                        (t.extend_ = function (e, t, n, r) {
                            if ((void 0 === r && (r = !1), !0 === n && (n = this.defaultAnnotation_), !1 === n))
                                return this.defineProperty_(e, t, r);
                            Jn(this, n, e);
                            var i = n.extend_(this, e, t, r);
                            return (i && Xn(this, n, e), i);
                        }),
                        (t.defineProperty_ = function (e, t, n) {
                            void 0 === n && (n = !1);
                            try {
                                ht();
                                var r = this.delete_(e);
                                if (!r) return r;
                                if (ln(this)) {
                                    var i = hn(this, {
                                        object: this.proxy_ || this.target_,
                                        name: e,
                                        type: Dn,
                                        newValue: t.value,
                                    });
                                    if (!i) return null;
                                    var o = i.newValue;
                                    t.value !== o && (t = C({}, t, { value: o }));
                                }
                                if (n) {
                                    if (!Reflect.defineProperty(this.target_, e, t)) return !1;
                                } else u(this.target_, e, t);
                                this.notifyPropertyAddition_(e, t.value);
                            } finally {
                                vt();
                            }
                            return !0;
                        }),
                        (t.defineObservableProperty_ = function (e, t, n, r) {
                            void 0 === r && (r = !1);
                            try {
                                ht();
                                var i = this.delete_(e);
                                if (!i) return i;
                                if (ln(this)) {
                                    var o = hn(this, {
                                        object: this.proxy_ || this.target_,
                                        name: e,
                                        type: Dn,
                                        newValue: t,
                                    });
                                    if (!o) return null;
                                    t = o.newValue;
                                }
                                var a = Hn(e),
                                    s = {
                                        configurable: !ut.safeDescriptors || this.isPlainObject_,
                                        enumerable: !0,
                                        get: a.get,
                                        set: a.set,
                                    };
                                if (r) {
                                    if (!Reflect.defineProperty(this.target_, e, s)) return !1;
                                } else u(this.target_, e, s);
                                var c = new Ke(t, n, 'ObservableObject.key', !1);
                                (this.values_.set(e, c), this.notifyPropertyAddition_(e, c.value_));
                            } finally {
                                vt();
                            }
                            return !0;
                        }),
                        (t.defineComputedProperty_ = function (e, t, n) {
                            void 0 === n && (n = !1);
                            try {
                                ht();
                                var r = this.delete_(e);
                                if (!r) return r;
                                if (ln(this))
                                    if (
                                        !hn(this, {
                                            object: this.proxy_ || this.target_,
                                            name: e,
                                            type: Dn,
                                            newValue: void 0,
                                        })
                                    )
                                        return null;
                                (t.name || (t.name = 'ObservableObject.key'),
                                    (t.context = this.proxy_ || this.target_));
                                var i = Hn(e),
                                    o = {
                                        configurable: !ut.safeDescriptors || this.isPlainObject_,
                                        enumerable: !1,
                                        get: i.get,
                                        set: i.set,
                                    };
                                if (n) {
                                    if (!Reflect.defineProperty(this.target_, e, o)) return !1;
                                } else u(this.target_, e, o);
                                (this.values_.set(e, new ze(t)), this.notifyPropertyAddition_(e, void 0));
                            } finally {
                                vt();
                            }
                            return !0;
                        }),
                        (t.delete_ = function (e, t) {
                            if ((void 0 === t && (t = !1), !E(this.target_, e))) return !0;
                            if (ln(this) && !hn(this, { object: this.proxy_ || this.target_, name: e, type: Gn }))
                                return null;
                            try {
                                var n, r;
                                ht();
                                var i,
                                    o = vn(this),
                                    a = this.values_.get(e),
                                    u = void 0;
                                if (!a && o) u = null == (i = s(this.target_, e)) ? void 0 : i.value;
                                if (t) {
                                    if (!Reflect.deleteProperty(this.target_, e)) return !1;
                                } else delete this.target_[e];
                                if (
                                    (a && (this.values_.delete(e), a instanceof Ke && (u = a.value_), pt(a)),
                                    this.keysAtom_.reportChanged(),
                                    null == (n = this.pendingKeys_) ||
                                        null == (r = n.get(e)) ||
                                        r.set(e in this.target_),
                                    o)
                                ) {
                                    var c = {
                                        type: Gn,
                                        observableKind: 'object',
                                        object: this.proxy_ || this.target_,
                                        debugObjectName: this.name_,
                                        oldValue: u,
                                        name: e,
                                    };
                                    (0, o && pn(this, c));
                                }
                            } finally {
                                vt();
                            }
                            return !0;
                        }),
                        (t.observe_ = function (e, t) {
                            return dn(this, e);
                        }),
                        (t.intercept_ = function (e) {
                            return fn(this, e);
                        }),
                        (t.notifyPropertyAddition_ = function (e, t) {
                            var n,
                                r,
                                i = vn(this);
                            if (i) {
                                var o = i
                                    ? {
                                          type: Dn,
                                          observableKind: 'object',
                                          debugObjectName: this.name_,
                                          object: this.proxy_ || this.target_,
                                          name: e,
                                          newValue: t,
                                      }
                                    : null;
                                (0, i && pn(this, o));
                            }
                            (null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(!0),
                                this.keysAtom_.reportChanged());
                        }),
                        (t.ownKeys_ = function () {
                            return (this.keysAtom_.reportObserved(), k(this.target_));
                        }),
                        (t.keys_ = function () {
                            return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
                        }),
                        e
                    );
                })();
            function zn(e, t) {
                var n;
                if (E(e, G)) return e;
                var r = null != (n = null == t ? void 0 : t.name) ? n : 'ObservableObject',
                    i = new Fn(
                        e,
                        new Map(),
                        String(r),
                        (function (e) {
                            var t;
                            return e ? (null != (t = e.defaultDecorator) ? t : fe(e)) : void 0;
                        })(t),
                    );
                return (w(e, G, i), e);
            }
            var qn = j('ObservableObjectAdministration', Fn);
            function Hn(e) {
                return (
                    Kn[e] ||
                    (Kn[e] = {
                        get: function () {
                            return this[G].getObservablePropValue_(e);
                        },
                        set: function (t) {
                            return this[G].setObservablePropValue_(e, t);
                        },
                    })
                );
            }
            function Wn(e) {
                return !!g(e) && qn(e[G]);
            }
            function Xn(e, t, n) {
                var r;
                null == (r = e.target_[M]) || delete r[n];
            }
            function Jn(e, t, n) {}
            var Yn,
                Qn,
                $n = 0,
                Zn = function () {};
            ((Yn = Zn),
                (Qn = Array.prototype),
                Object.setPrototypeOf
                    ? Object.setPrototypeOf(Yn.prototype, Qn)
                    : void 0 !== Yn.prototype.__proto__
                      ? (Yn.prototype.__proto__ = Qn)
                      : (Yn.prototype = Qn));
            var er = (function (e) {
                function t(t, n, r, i) {
                    var o;
                    (void 0 === r && (r = 'ObservableArray'), void 0 === i && (i = !1), (o = e.call(this) || this));
                    var a = new mn(r, n, i, !0);
                    if (((a.proxy_ = B(o)), A(B(o), G, a), t && t.length)) {
                        var s = Ie(!0);
                        (o.spliceWithArray(0, 0, t), Me(s));
                    }
                    return o;
                }
                N(t, e);
                var n = t.prototype;
                return (
                    (n.concat = function () {
                        this[G].atom_.reportObserved();
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return Array.prototype.concat.apply(
                            this.slice(),
                            t.map(function (e) {
                                return En(e) ? e.slice() : e;
                            }),
                        );
                    }),
                    (n[Symbol.iterator] = function () {
                        var e = this,
                            t = 0;
                        return fr({
                            next: function () {
                                return t < e.length ? { value: e[t++], done: !1 } : { done: !0, value: void 0 };
                            },
                        });
                    }),
                    R(t, [
                        {
                            key: 'length',
                            get: function () {
                                return this[G].getArrayLength_();
                            },
                            set: function (e) {
                                this[G].setArrayLength_(e);
                            },
                        },
                        {
                            key: Symbol.toStringTag,
                            get: function () {
                                return 'Array';
                            },
                        },
                    ]),
                    t
                );
            })(Zn);
            function tr(e) {
                u(
                    er.prototype,
                    '' + e,
                    (function (e) {
                        return {
                            enumerable: !1,
                            configurable: !0,
                            get: function () {
                                return this[G].get_(e);
                            },
                            set: function (t) {
                                this[G].set_(e, t);
                            },
                        };
                    })(e),
                );
            }
            function nr(e) {
                if (e > $n) {
                    for (var t = $n; t < e + 100; t++) tr(t);
                    $n = e;
                }
            }
            function rr(e, t, n) {
                return new er(e, t, n);
            }
            function ir(e, t) {
                if ('object' == typeof e && null !== e) {
                    if (En(e)) return (void 0 !== t && r(23), e[G].atom_);
                    if (Un(e)) return e[G];
                    if (Ln(e)) {
                        if (void 0 === t) return e.keysAtom_;
                        var n = e.data_.get(t) || e.hasMap_.get(t);
                        return (n || r(25, t, ar(e)), n);
                    }
                    if (Wn(e)) {
                        if (!t) return r(26);
                        var i = e[G].values_.get(t);
                        return (i || r(27, t, ar(e)), i);
                    }
                    if (z(e) || qe(e) || mt(e)) return e;
                } else if (b(e) && mt(e[G])) return e[G];
                r(28);
            }
            function or(e, t) {
                return (
                    e || r(29),
                    void 0 !== t
                        ? or(ir(e, t))
                        : z(e) || qe(e) || mt(e) || Ln(e) || Un(e)
                          ? e
                          : e[G]
                            ? e[G]
                            : void r(24, e)
                );
            }
            function ar(e, t) {
                var n;
                if (void 0 !== t) n = ir(e, t);
                else {
                    if (Dt(e)) return e.name;
                    n = Wn(e) || Ln(e) || Un(e) ? or(e) : ir(e);
                }
                return n.name_;
            }
            (Object.entries(wn).forEach(function (e) {
                var t = e[0],
                    n = e[1];
                'concat' !== t && w(er.prototype, t, n);
            }),
                nr(1e3));
            var sr = c.toString;
            function ur(e, t, n) {
                return (void 0 === n && (n = -1), cr(e, t, n));
            }
            function cr(e, t, n, r, i) {
                if (e === t) return 0 !== e || 1 / e == 1 / t;
                if (null == e || null == t) return !1;
                if (e != e) return t != t;
                var o = typeof e;
                if (!b(o) && 'object' !== o && 'object' != typeof t) return !1;
                var a = sr.call(e);
                if (a !== sr.call(t)) return !1;
                switch (a) {
                    case '[object RegExp]':
                    case '[object String]':
                        return '' + e == '' + t;
                    case '[object Number]':
                        return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
                    case '[object Date]':
                    case '[object Boolean]':
                        return +e == +t;
                    case '[object Symbol]':
                        return 'undefined' != typeof Symbol && Symbol.valueOf.call(e) === Symbol.valueOf.call(t);
                    case '[object Map]':
                    case '[object Set]':
                        n >= 0 && n++;
                }
                ((e = lr(e)), (t = lr(t)));
                var s = '[object Array]' === a;
                if (!s) {
                    if ('object' != typeof e || 'object' != typeof t) return !1;
                    var u = e.constructor,
                        c = t.constructor;
                    if (
                        u !== c &&
                        !(b(u) && u instanceof u && b(c) && c instanceof c) &&
                        'constructor' in e &&
                        'constructor' in t
                    )
                        return !1;
                }
                if (0 === n) return !1;
                (n < 0 && (n = -1), (i = i || []));
                for (var l = (r = r || []).length; l--; ) if (r[l] === e) return i[l] === t;
                if ((r.push(e), i.push(t), s)) {
                    if ((l = e.length) !== t.length) return !1;
                    for (; l--; ) if (!cr(e[l], t[l], n - 1, r, i)) return !1;
                } else {
                    var f,
                        h = Object.keys(e);
                    if (((l = h.length), Object.keys(t).length !== l)) return !1;
                    for (; l--; ) if (!E(t, (f = h[l])) || !cr(e[f], t[f], n - 1, r, i)) return !1;
                }
                return (r.pop(), i.pop(), !0);
            }
            function lr(e) {
                return En(e) ? e.slice() : S(e) || Ln(e) || P(e) || Un(e) ? Array.from(e.entries()) : e;
            }
            function fr(e) {
                return ((e[Symbol.iterator] = hr), e);
            }
            function hr() {
                return this;
            }
            (['Symbol', 'Map', 'Set'].forEach(function (e) {
                void 0 === o()[e] && r("MobX requires global '" + e + "' to be available or polyfilled");
            }),
                'object' == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
                    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
                        spy: function (e) {
                            return (console.warn('[mobx.spy] Is a no-op in production builds'), function () {});
                        },
                        extras: { getDebugName: ar },
                        $mobx: G,
                    }));
        },
    },
]);
