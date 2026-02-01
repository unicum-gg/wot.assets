import { m as s, j as e } from '../../../chunks/vendor.js';
import { i as a, u as i, s as o, b as c, C as n, B as r, t as l, p as t, r as d, U as h } from '../../../chunks/lib.js';
import { V as m } from '../../../chunks/vehicle_count.js';
import { V as p } from '../../../chunks/vignette.js';
import { a as j } from '../../../chunks/sounds.js';
/* empty css                     */ const [u, v] = a()(
        ({ observableModel: s }) => ({ vehicleCounter: s.object('vehicleCounter') }),
        ({ externalModel: s }) => ({ showHangar: s.createCallbackNoArgs('showHangar') }),
    ),
    _ = 'App_47c1cf67',
    x = 'App_content_af08fa77',
    f = 'App_vehiclesCount_23229913',
    b = 'App_close_90a88f64',
    g = 'App_title_7d76a07e',
    C = 'App_divider_3208d1a8',
    N = 'App_description_4d1cf78e',
    A = 'App_button_e3b0b02c',
    k = R.strings.resource_well.confirm.NoVehicles,
    w = s(function () {
        const { model: s, controls: a } = v(),
            d = i({ size: o.small }, { large: { size: o.medium } });
        return (
            c(a.showHangar),
            e.jsxs('div', {
                className: _,
                children: [
                    e.jsx(p, {}),
                    e.jsx('div', { className: f, children: e.jsx(m, { vehicleCounter: s.vehicleCounter.get() }) }),
                    e.jsx('div', { className: b, children: e.jsx(n, { onClose: a.showHangar }) }),
                    e.jsxs('div', {
                        className: x,
                        children: [
                            e.jsx('div', { className: g, children: k.title() }),
                            e.jsx('div', { className: N, children: k.description() }),
                            e.jsx('div', { className: C }),
                            e.jsx(r, {
                                className: A,
                                theme: l.primary,
                                onClick: a.showHangar,
                                onMouseEnter: () => t.sound(j),
                                size: d.size,
                                children: k.buttonCancel.title(),
                            }),
                        ],
                    }),
                ],
            })
        );
    });
d(e.jsx(h, { children: e.jsx(u, { children: e.jsx(w, {}) }) }));
