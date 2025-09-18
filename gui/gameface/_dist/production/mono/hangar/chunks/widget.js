import { x as e, r as o, j as t, f as a } from './vendor.js';
import {
    i as r,
    c as n,
    d0 as s,
    d1 as l,
    q as c,
    b as m,
    o as d,
    U as i,
    u,
    r as b,
    al as p,
    J as _,
    ak as I,
} from './lib.js';
import { s as v, i as y, a as P } from '../views/footer/footer.html/bundle.js';
import './divider.js';
import './preload-helper.js';
/* empty css      */ const [g, h] = r('PlatoonProvider')(
        ({ observableModel: e }) => {
            const o = {
                    ...e.primitives([
                        'state',
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
    E = 'notReady',
    w = 'ready',
    B = 'inBattle';
const M = (e, o, t) => (e ? `${t}_${o}` : o === C ? 'search' : 'empty_member'),
    R = {
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
    T = e(function ({ popoverTargetID: e, classNames: r }) {
        const n = h(),
            s = c(),
            l = m({ value: v.small }, { medium: { value: v.medium } }),
            g = d(l.value, i),
            T = n.model.state.get(),
            W = n.model.commanderIndex.get(),
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
                    T !== x &&
                        (s.play('click', { target: 'platoon', original: e }),
                        T !== f ? O.onClick(e) : n.controls.onInPlatoonAction()));
            },
            onMouseEnter: function (e) {
                (D.onMouseEnter(), T !== x && s.play('mouse-enter', { target: 'platoon', original: e }));
            },
            className: a(R.base, null == r ? void 0 : r.base),
            'data-test-id': 'platoonWidget',
            children: (() => {
                switch (T) {
                    case 'CREATE':
                        return t.jsx(I, { ...P(g, 'creation'), className: a(R.button, null == r ? void 0 : r.button) });
                    case x:
                        return t.jsx(I, {
                            ...P(g, 'creation_disabled'),
                            className: a(R.button, R.button__disabled, null == r ? void 0 : r.button),
                        });
                    case 'SEARCHING':
                        return t.jsx(I, {
                            ...P(g, 'search'),
                            className: a(R.button, R.button__search, null == r ? void 0 : r.button),
                        });
                    case f:
                        return _(n.model.members.get(), (e, o) => {
                            const n = ((l = o === W), (s = o === $) && l ? S : s ? N : l ? A : j);
                            var s, l;
                            const c = (function (e) {
                                    switch (e) {
                                        case 'empty':
                                            return k;
                                        case 'searching':
                                            return C;
                                        case 'notReady':
                                            return E;
                                        case 'ready':
                                            return w;
                                        case 'inBattle':
                                            return B;
                                        default:
                                            return (
                                                console.error('Platoon widget: met unexpected member state ', e),
                                                k
                                            );
                                    }
                                })(e.state),
                                m = y(`${n}_${c}`),
                                d = m && c === w;
                            return t.jsx(
                                'div',
                                {
                                    className: R.memberIconWrapper,
                                    children: t.jsx(I, {
                                        ...P(g, M(m, c, n), d),
                                        className: a(
                                            R.memberIcon,
                                            c === C && R.memberIcon__searchState,
                                            d && R.memberIcon__readyState,
                                            null == r ? void 0 : r.memberIcon,
                                        ),
                                    }),
                                },
                                o,
                            );
                        });
                    default:
                        return void console.error('Platoon widget: met unexpected platoon state ', T);
                }
            })(),
        });
    });
function W({ options: e, mocks: o, mode: a, ...r }) {
    return t.jsx(g, { mode: a, mocks: o, options: e, children: t.jsx(T, { ...r }) });
}
export { W as default };
