import { p as s, j as a } from '../../../chunks/vendor.js';
import { i as e, n as t, r as i, a as l, P as d, b as n, U as r } from '../../../chunks/lib.js';
const [o, c] = e()(({ observableModel: s }) => ({ primitives: s.primitives(['currentProgress']) }), t),
    p = 'BattleLoadingApp_b9007f71',
    g = 'BattleLoadingApp_vignette_8978ecaa',
    _ = 'BattleLoadingApp_shadow_1e8ca397',
    m = 'BattleLoadingApp_bgImage_b59d6fa2',
    v = 'BattleLoadingApp_block_5da94649',
    j = 'BattleLoadingApp_title_85c5d646',
    b = 'BattleLoadingApp_description_15a2f0f9',
    x = 'BattleLoadingApp_loadingLabel_1e32d06a',
    u = 'BattleLoadingApp_progressBar_acc3809b',
    h = i.resolve('strings'),
    B = l(0, 3),
    L = s(function () {
        const { model: s } = c(),
            e = s.primitives.currentProgress.get();
        return a.jsxs('div', {
            className: p,
            children: [
                a.jsx('div', {
                    className: m,
                    style: {
                        backgroundImage: `url('R.images.last_stand.gui.maps.icons.battle.eventLoading.tips.tipBg_${B}')`,
                    },
                }),
                a.jsx('div', { className: g }),
                a.jsx('div', { className: _ }),
                a.jsxs('div', {
                    className: v,
                    children: [
                        a.jsx('div', {
                            className: j,
                            children: h.readOrEmpty(`R.strings.last_stand_battle.loading.title_${B}`),
                        }),
                        a.jsx('div', {
                            className: b,
                            children: h.readOrEmpty(`R.strings.last_stand_battle.loading.description_${B}`),
                        }),
                        a.jsx('div', { className: x, children: R.strings.last_stand_battle.loading.title() }),
                        a.jsx(d, {
                            className: u,
                            size: d.sizes.medium,
                            value: e,
                            maxValue: 100,
                            status: 'doneInactive',
                            children: a.jsx(d.Fill, {}),
                        }),
                    ],
                }),
            ],
        });
    });
n(a.jsx(r, { children: a.jsx(o, { children: a.jsx(L, {}) }) }));
