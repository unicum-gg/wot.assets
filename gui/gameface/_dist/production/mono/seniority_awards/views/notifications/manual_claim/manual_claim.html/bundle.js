import { q as s, j as a } from '../../../../chunks/vendor.js';
import {
    i as o,
    r as t,
    d as e,
    a0 as n,
    I as r,
    B as i,
    b as l,
    t as c,
    a1 as m,
    L as d,
    M as u,
    U as p,
    N as b,
} from '../../../../chunks/lib.js';
import { t as j } from '../../../../chunks/sounds.js';
import { D as h, c as f } from '../../../../chunks/common.module.js';
const [C, k] = o()(
        ({ observableModel: s }) => ({ root: s.object() }),
        ({ externalModel: s }) => ({
            submit: s.createCallbackNoArgs('onClick'),
            close: s.createCallbackNoArgs('onClose'),
        }),
    ),
    x = 'Content_image_95b0bad',
    y = t.resolve('strings'),
    g = s(function () {
        const { model: s, controls: o } = k(),
            { isPopUp: t } = s.root.get(),
            m = e();
        return (
            n(() => {
                t && m.play('notificationAppear', { target: 'enter' });
            }),
            a.jsxs(h, {
                isPopUp: t,
                onClose: o.close,
                children: [
                    a.jsx(r, { className: x, path: 'seniorityAwards.notifications.manual_claim' }),
                    a.jsx('div', {
                        className: f.title,
                        children: y.readOrEmpty('seniority_awards.notifications.manualClaim.title'),
                    }),
                    a.jsx(i, {
                        onClick: o.submit,
                        theme: c.secondary,
                        size: l.small,
                        className: f.button,
                        children: y.readOrEmpty('seniority_awards.notifications.manualClaim.button'),
                    }),
                ],
            })
        );
    });
function N() {
    return a.jsx(m, { children: a.jsx(g, {}) });
}
const v = d(j);
b(new u().add(C).addWithProps(p, { soundsOverrides: v }).render(a.jsx(N, {})));
