import { s, j as e, e as a } from '../../../../chunks/vendor.js';
import {
    i as l,
    N as i,
    F as n,
    k as c,
    t as o,
    l as p,
    C as r,
    n as t,
    p as m,
    r as d,
    U as _,
} from '../../../../chunks/lib.js';
const [b, h] = l()(
        ({ observableModel: s }) => ({ root: s.object() }),
        ({ externalModel: s }) => ({ openChallenge: s.createCallbackNoArgs('onClick') }),
    ),
    g = 'App_image_95a6abe1',
    u = 'App_82fdeee3',
    j = 'App_base__popup_a2438b5f',
    x = 'App_wrapper_ffdbb6e9',
    f = 'App_description_1dcdd2b2',
    N = 'App_title_8c05c489',
    A = 'App_button_6c8a11bb',
    k = 'App_close_654073f5',
    C = R.strings.user_missions.hub.challenge_missions.notification.fail,
    v = s(function () {
        const { model: s, controls: l } = h(),
            { challengeName: d, isPopUp: _ } = s.root.get();
        return e.jsxs(i, {
            className: a(u, _ && j),
            children: [
                e.jsxs('div', {
                    className: x,
                    children: [
                        e.jsx('div', {
                            className: g,
                            style: {
                                backgroundImage: `url(${R.images.gui.maps.icons.userMissions.hub.challenge.fail_challenge()})`,
                            },
                        }),
                        e.jsx('div', {
                            className: f,
                            children: e.jsx(n, {
                                params: { challenge: d },
                                text: C.title(),
                                className: N,
                                upgradeLegacy: !0,
                            }),
                        }),
                        e.jsx(c, {
                            className: A,
                            size: p.small,
                            onClick: l.openChallenge,
                            theme: o.primary,
                            children: C.button(),
                        }),
                    ],
                }),
                _ && e.jsx(r, { size: m.small, onClose: t, className: k }),
            ],
        });
    });
d(e.jsx(b, { children: e.jsx(_, { children: e.jsx(v, {}) }) }));
