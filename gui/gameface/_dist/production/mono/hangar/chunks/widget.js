import { v as e, r as o, j as t, f as a } from './vendor.js';
import {
    i as r,
    c as n,
    dc as s,
    dd as l,
    o as c,
    q as m,
    v as d,
    U as i,
    u,
    r as b,
    x as p,
    a6 as _,
    w as v,
} from './lib.js';
import { s as I, a as y, i as P } from '../views/footer/footer.html/bundle.js';
import './divider.js';
import './preload-helper.js';
/* empty css      */ const [g, h] = r('PlatoonProvider')(
        ({ observableModel: e }) => {
            const o = {
                    ...e.primitives([
                        'state',
                        'useWelcomeLayout',
                        'commanderIndex',
                        'playerIndex',
                        'tooltipHeader',
                        'tooltipBody',
                        'tooltipParams',
                    ]),
                    members: e.arrayClone('members'),
                },
                t = n.structural(() => {
                    try {
                        const e = JSON.parse(o.tooltipParams.get()),
                            t = o.tooltipHeader.get(),
                            a = o.tooltipBody.get();
                        return { header: (t && s(l(t), e)) ?? void 0, body: (a && s(l(a), e)) ?? void 0 };
                    } catch (e) {
                        return {};
                    }
                });
            return { ...o, computes: { tooltipArgs: t } };
        },
        ({ externalModel: e }) => ({ onInPlatoonAction: e.createCallbackNoArgs('onInPlatoonAction') }),
    ),
    f = 'IN_PLATOON',
    x = 'DISABLED',
    j = 'member',
    N = 'player',
    A = 'commander',
    S = 'commanderPlayer',
    k = 'empty',
    C = 'search',
    w = 'notReady',
    E = 'ready',
    W = 'inBattle';
const B = (e, o, t) => (e ? `${t}_${o}` : o === C ? 'search' : 'empty_member'),
    M = {
        base: 'Platoon_9c663a1',
        button: 'Platoon_button_a989ea7f',
        button__disabled: 'Platoon_button__disabled_e1f331be',
        button__search: 'Platoon_button__search_a7562308',
        rotation: 'Platoon_rotation_78daa44d',
        memberIconWrapper: 'Platoon_memberIconWrapper_3b1536c',
        memberIcon: 'Platoon_memberIcon_7e29c5ae',
        memberIcon__searchState: 'Platoon_memberIcon__searchState_78daa44d',
        memberIcon__readyState: 'Platoon_memberIcon__readyState_407793d7',
    },
    L = e(function ({ popoverTargetID: e, classNames: r }) {
        const n = h(),
            s = c(),
            l = m({ value: I.small }, { medium: { value: I.medium } }),
            g = d(l.value, i),
            L = n.model.state.get(),
            R = n.model.useWelcomeLayout.get(),
            T = n.model.commanderIndex.get(),
            $ = n.model.playerIndex.get(),
            D = u(n.model.computes.tooltipArgs()),
            H = o.useMemo(
                () => ({ resId: e ?? b.resolve('aliases').read((e) => e.lobby_footer.default.Platoon('resId')) }),
                [e],
            ),
            O = p('squadTypeSelectPopover', void 0, H);
        return t.jsx('div', {
            ...D,
            onClick: function (e) {
                (D.onClick(),
                    L !== x &&
                        (s.play('click', { target: 'platoon', original: e }),
                        L !== f && R ? O.onClick(e) : n.controls.onInPlatoonAction()));
            },
            onMouseEnter: function (e) {
                (D.onMouseEnter(e), L !== x && s.play('mouse-enter', { target: 'platoon', original: e }));
            },
            className: a(M.base, null == r ? void 0 : r.base),
            'data-test-id': 'platoonWidget',
            children: (() => {
                switch (L) {
                    case 'CREATE':
                        return t.jsx(v, { ...y(g, 'creation'), className: a(M.button, null == r ? void 0 : r.button) });
                    case x:
                        return t.jsx(v, {
                            ...y(g, 'creation_disabled'),
                            className: a(M.button, M.button__disabled, null == r ? void 0 : r.button),
                        });
                    case 'SEARCHING':
                        return t.jsx(v, {
                            ...y(g, 'search'),
                            className: a(M.button, M.button__search, null == r ? void 0 : r.button),
                        });
                    case f:
                        return _(n.model.members.get(), (e, o) => {
                            const n = ((l = o === T), (s = o === $) && l ? S : s ? N : l ? A : j);
                            var s, l;
                            const c = (function (e) {
                                    switch (e) {
                                        case 'empty':
                                            return k;
                                        case 'searching':
                                            return C;
                                        case 'notReady':
                                            return w;
                                        case 'ready':
                                            return E;
                                        case 'inBattle':
                                            return W;
                                        default:
                                            return (
                                                console.error('Platoon widget: met unexpected member state ', e),
                                                k
                                            );
                                    }
                                })(e.state),
                                m = P(`${n}_${c}`),
                                d = m && c === E;
                            return t.jsx(
                                'div',
                                {
                                    className: M.memberIconWrapper,
                                    children: t.jsx(v, {
                                        ...y(g, B(m, c, n), d),
                                        className: a(
                                            M.memberIcon,
                                            c === C && M.memberIcon__searchState,
                                            d && M.memberIcon__readyState,
                                            null == r ? void 0 : r.memberIcon,
                                        ),
                                    }),
                                },
                                o,
                            );
                        });
                    default:
                        return void console.error('Platoon widget: met unexpected platoon state ', L);
                }
            })(),
        });
    });
function R({ options: e, mocks: o, mode: a, ...r }) {
    return t.jsx(g, { mode: a, mocks: o, options: e, children: t.jsx(L, { ...r }) });
}
export { R as default };
