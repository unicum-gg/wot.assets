import { s, j as e, e as a } from '../../../../chunks/vendor.js';
import {
    i as l,
    N as n,
    F as t,
    j as c,
    k as o,
    l as i,
    C as r,
    n as p,
    o as m,
    c as b,
    U as _,
} from '../../../../chunks/lib.js';
/* empty css                       */ const [d, h] = l()(
        ({ observableModel: s }) => ({ root: s.object() }),
        ({ externalModel: s }) => ({ openChallenge: s.createCallbackNoArgs('onClick') }),
    ),
    j = 'App_image_95a6abe1',
    x = 'App_9e9b93b',
    g = 'App_base__popup_a2438b5f',
    u = 'App_wrapper_ffdbb6e9',
    f = 'App_description_bb08788d',
    A = 'App_title_cd1a36ec',
    N = 'App_text_b138bc7f',
    C = 'App_button_cec9cac4',
    k = 'App_close_654073f5',
    v = R.strings.user_missions.hub.challenge_missions.notification.start,
    w = s(function () {
        const { model: s, controls: l } = h(),
            { first: b, isPopUp: _ } = s.root.get(),
            d = b,
            w = d ? v.title() : v.newChallengesTitle(),
            M = d ? v.text() : v.newChallengesText();
        return e.jsxs(n, {
            className: a(x, _ && g),
            children: [
                e.jsxs('div', {
                    className: u,
                    children: [
                        e.jsx('div', {
                            className: j,
                            style: {
                                backgroundImage: `url(${R.images.gui.maps.icons.userMissions.hub.challenge.started_challenge()})`,
                            },
                        }),
                        e.jsxs('div', {
                            className: f,
                            children: [e.jsx(t, { text: w, className: A }), e.jsx(t, { text: M, className: N })],
                        }),
                        e.jsx(c, {
                            className: C,
                            size: i.small,
                            onClick: l.openChallenge,
                            theme: o.primary,
                            children: v.button(),
                        }),
                    ],
                }),
                _ && e.jsx(r, { size: m.small, onClose: p, className: k }),
            ],
        });
    });
b(e.jsx(d, { children: e.jsx(_, { children: e.jsx(w, {}) }) }));
