import { p as e, j as s, q as t } from '../../../chunks/vendor.js';
import {
    i as a,
    r as i,
    A as n,
    aa as o,
    B as c,
    s as l,
    t as r,
    ab as d,
    d as _,
    U as m,
} from '../../../chunks/lib.js';
const [b, j] = a()(
        ({ observableModel: e }) => ({ root: e.object() }),
        ({ externalModel: e }) => ({
            claimReward: e.createCallbackNoArgs('onClaimReward'),
            close: e.createCallbackNoArgs('onClose'),
        }),
    ),
    x = 'Content_7ccb81a0',
    f = 'Content_base__popUp_625d5a8b',
    C = 'Content_wrapper_5b2a02af',
    p = 'Content_base__withTimer_da09528a',
    h = 'Content_header_bbcd779c',
    g = 'Content_close_bb3f95f0',
    v = 'Content_title_ac2b00ad',
    u = 'Content_timer_d9a7c8e8',
    N = 'Content_background_7cd0fee1',
    k = 'Content_border_cf3f87b3',
    y = 'Content_lip_76ca28b8',
    w = 'Content_lip__top_efd01179',
    R = 'Content_lip__bottom_2b60ccae',
    $ = i.resolve('strings'),
    A = (e, s) => ({
        backgroundImage: `url('R.images.one_time_gift.gui.maps.icons.notification.${`bg${e ? '' : '_faded'}_${e ? 270 : 290}x${s ? 390 : 300}`}')`,
    }),
    B = e(function () {
        const { model: e, controls: a } = j(),
            { timeLeft: i, isPopUp: d, isDisabled: _ } = e.root.get(),
            m = i > 0,
            b = n({ body: $.readOrEmpty('one_time_gift.notification.disabledClaimButtonTooltip.text') });
        return s.jsxs('div', {
            className: t(x, d && f, m && p),
            children: [
                s.jsxs('div', {
                    className: C,
                    children: [
                        s.jsxs('div', {
                            className: h,
                            children: [
                                s.jsx('div', {
                                    className: v,
                                    children: $.readOrEmpty('one_time_gift.notification.title'),
                                }),
                                m && s.jsx('div', { className: u, children: s.jsx(o, { start: i }) }),
                            ],
                        }),
                        s.jsx(c, {
                            ...(_ && b),
                            disabled: _,
                            onClick: a.claimReward,
                            theme: r.secondary,
                            size: l.small,
                            children: $.readOrEmpty('one_time_gift.notification.claimButton.text'),
                        }),
                    ],
                }),
                d && s.jsx('div', { className: g, onClick: a.close }),
                s.jsx('div', { className: N, style: A(d, m), children: s.jsx('div', { className: k }) }),
                !d &&
                    s.jsxs(s.Fragment, {
                        children: [s.jsx('div', { className: t(y, w) }), s.jsx('div', { className: t(y, R) })],
                    }),
            ],
        });
    });
function E() {
    return s.jsx(d, { children: s.jsx(B, {}) });
}
_(s.jsx(b, { children: s.jsx(m, { children: s.jsx(E, {}) }) }));
