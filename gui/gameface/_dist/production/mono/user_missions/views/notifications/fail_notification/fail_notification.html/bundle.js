import { s, j as e, e as a } from '../../../../chunks/vendor.js';
import {
    i as l,
    N as o,
    F as c,
    j as i,
    k as n,
    l as p,
    C as r,
    n as t,
    o as m,
    c as d,
    U as _,
} from '../../../../chunks/lib.js';
/* empty css                       */ const [h, g] = l()(
        ({ observableModel: s }) => ({ root: s.object() }),
        ({ externalModel: s }) => ({ openChallenge: s.createCallbackNoArgs('onClick') }),
    ),
    b = 'App_image_95a6abe1',
    j = 'App_32d4293d',
    u = 'App_base__popup_a2438b5f',
    x = 'App_wrapper_ffdbb6e9',
    f = 'App_description_1dcdd2b2',
    N = 'App_title_8c05c489',
    A = 'App_button_111c82e',
    k = 'App_close_654073f5',
    C = R.strings.user_missions.hub.challenge_missions.notification.fail,
    v = s(function () {
        const { model: s, controls: l } = g(),
            { challengeName: d, isPopUp: _ } = s.root.get();
        return e.jsxs(o, {
            className: a(j, _ && u),
            children: [
                e.jsxs('div', {
                    className: x,
                    children: [
                        e.jsx('div', {
                            className: b,
                            style: {
                                backgroundImage: `url(${R.images.gui.maps.icons.userMissions.hub.challenge.fail_challenge()})`,
                            },
                        }),
                        e.jsx('div', {
                            className: f,
                            children: e.jsx(c, {
                                params: { challenge: d },
                                text: C.title(),
                                className: N,
                                upgradeLegacy: !0,
                            }),
                        }),
                        e.jsx(i, {
                            className: A,
                            size: p.small,
                            onClick: l.openChallenge,
                            theme: n.primary,
                            children: C.button(),
                        }),
                    ],
                }),
                _ && e.jsx(r, { size: m.small, onClose: t, className: k }),
            ],
        });
    });
d(e.jsx(h, { children: e.jsx(_, { children: e.jsx(v, {}) }) }));
