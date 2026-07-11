import { s, j as e, e as a } from '../../../../chunks/vendor.js';
import {
    i as l,
    N as t,
    F as n,
    k as i,
    t as o,
    l as c,
    C as r,
    n as p,
    p as m,
    r as _,
    U as b,
} from '../../../../chunks/lib.js';
const [d, h] = l()(
        ({ observableModel: s }) => ({ root: s.object() }),
        ({ externalModel: s }) => ({ openChallenge: s.createCallbackNoArgs('onClick') }),
    ),
    x = 'App_image_95a6abe1',
    g = 'App_fefef38d',
    j = 'App_base__popup_a2438b5f',
    f = 'App_wrapper_ffdbb6e9',
    u = 'App_description_bb08788d',
    A = 'App_title_cd1a36ec',
    N = 'App_text_b138bc7f',
    C = 'App_button_b9f61bec',
    k = 'App_close_654073f5',
    v = R.strings.user_missions.hub.challenge_missions.notification.start,
    w = s(function () {
        const { model: s, controls: l } = h(),
            { first: _, isPopUp: b } = s.root.get(),
            d = _,
            w = d ? v.title() : v.newChallengesTitle(),
            M = d ? v.text() : v.newChallengesText();
        return e.jsxs(t, {
            className: a(g, b && j),
            children: [
                e.jsxs('div', {
                    className: f,
                    children: [
                        e.jsx('div', {
                            className: x,
                            style: {
                                backgroundImage: `url(${R.images.gui.maps.icons.userMissions.hub.challenge.started_challenge()})`,
                            },
                        }),
                        e.jsxs('div', {
                            className: u,
                            children: [e.jsx(n, { text: w, className: A }), e.jsx(n, { text: M, className: N })],
                        }),
                        e.jsx(i, {
                            className: C,
                            size: c.small,
                            onClick: l.openChallenge,
                            theme: o.primary,
                            children: v.button(),
                        }),
                    ],
                }),
                b && e.jsx(r, { size: m.small, onClose: p, className: k }),
            ],
        });
    });
_(e.jsx(d, { children: e.jsx(b, { children: e.jsx(w, {}) }) }));
