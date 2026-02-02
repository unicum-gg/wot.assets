import { m as s, j as e, e as a } from '../../../../chunks/vendor.js';
import {
    i as t,
    r as o,
    u as n,
    a1 as r,
    G as i,
    F as c,
    B as l,
    A as d,
    D as m,
    a2 as u,
    q as p,
    J as j,
    U as h,
    t as b,
} from '../../../../chunks/lib.js';
import { t as x } from '../../../../chunks/sounds.js';
import { D as f, c as _ } from '../../../../chunks/common.module.js';
const [g, y] = t()(
        ({ observableModel: s }) => ({ root: s.object() }),
        ({ externalModel: s }) => ({
            submit: s.createCallbackNoArgs('onClick'),
            close: s.createCallbackNoArgs('onClose'),
        }),
    ),
    C = 'Content_6e60d4f2',
    N = 'Content_imageWrapper_79644b98',
    k = 'Content_image_717c0b1',
    v = 'Content_count_47b057d4',
    w = 'Content_countValue_972aab59',
    A = o.resolve('strings'),
    O = s(function () {
        const { model: s, controls: t } = y(),
            { count: o, isPopUp: u } = s.root.get(),
            p = n();
        return (
            r(() => {
                u && p.play('notificationAppear', { target: 'enter' });
            }),
            e.jsxs(f, {
                isPopUp: u,
                onClose: t.close,
                className: C,
                children: [
                    e.jsxs('div', {
                        className: N,
                        children: [
                            e.jsx(i, { className: k, path: 'seniorityAwards.notifications.vehicles' }),
                            e.jsx(c, {
                                className: a(_.count, v),
                                text: A.readOrEmpty('seniority_awards.notifications.count'),
                                params: { count: e.jsx('span', { className: w, children: o }) },
                                upgradeLegacy: !0,
                            }),
                        ],
                    }),
                    e.jsx(c, {
                        className: _.title,
                        text: A.readOrEmpty('seniority_awards.notifications.selectVehicles.title'),
                        upgradeLegacy: !0,
                    }),
                    e.jsx(l, {
                        onClick: t.submit,
                        theme: m.secondary,
                        size: d.small,
                        className: _.button,
                        children: A.readOrEmpty('seniority_awards.notifications.selectVehicles.button'),
                    }),
                ],
            })
        );
    });
function E() {
    return e.jsx(u, { children: e.jsx(O, {}) });
}
const P = p(x);
b(new j().add(g).addWithProps(h, { soundsOverrides: P }).render(e.jsx(E, {})));
