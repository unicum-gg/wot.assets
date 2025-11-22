import { I as t, j as e } from '../../../../chunks/vendor.js';
import { i, n as s, cB as l, bM as a, ch as o } from '../../../../chunks/lib.js';
const [d, c] = i()(({ observableModel: t }) => ({ ...t.primitives(['name', 'videoName', 'description']) }), s),
    r = 'BattleAbilityAltTooltip_d5041564',
    n = 'BattleAbilityAltTooltip_name_76054ad5',
    m = 'BattleAbilityAltTooltip_description_276f2bbd',
    b = 'BattleAbilityAltTooltip_videoWrapper_3a3622f1',
    p = 'BattleAbilityAltTooltip_video_db3faea6',
    j = t(function () {
        const { model: t } = c();
        return e.jsx(l, {
            children: e.jsx(l.Decorator, {
                children: e.jsxs('div', {
                    className: r,
                    children: [
                        e.jsx(a, { text: t.name.get(), className: n }),
                        e.jsx('div', {
                            className: b,
                            children: e.jsx('video', {
                                className: p,
                                src: R.videos.battleAblity.$dyn(t.videoName.get()),
                                loop: !0,
                                autoPlay: !0,
                            }),
                        }),
                        e.jsx(a, { text: t.description.get(), className: m }),
                    ],
                }),
            }),
        });
    });
o(e.jsx(d, { children: e.jsx(j, {}) }));
