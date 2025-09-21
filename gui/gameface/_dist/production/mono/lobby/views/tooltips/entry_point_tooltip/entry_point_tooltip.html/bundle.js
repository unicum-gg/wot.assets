import { r as e, j as t, f as s, y as a, x as i } from '../../../../chunks/vendor.js';
import { i as o, H as r, cc as n, ai as p, ck as d, dr as l, F as m, bF as _, r as c } from '../../../../chunks/lib.js';
import { t as f, T as u } from '../../../../chunks/tooltips.module.js';
import { g as x } from '../../../../chunks/get_roman_levels.js';
import { a as b } from '../../../../chunks/get_season_name.js';
import { S as h } from '../../../../chunks/season_model.js';
import { u as g } from '../../../../chunks/use_server_time_polling.js';
import { c as v } from '../../../../chunks/types.js';
/* empty css                        */ const [A, j] = o()(
        ({ observableModel: e }) => ({
            root: e.object(),
            vehicleLevels: e.array('vehicleLevels'),
            season: e.primitives(['startTimestamp', 'endTimestamp', 'serverTimestamp', 'state', 'name'], 'season'),
        }),
        ({ externalModel: e }) => ({ pollServerTime: e.createCallbackNoArgs('season.pollServerTime') }),
    ),
    T = 'DateRange_8756cb54',
    y = 'DateRange_label_d6f3c1f3',
    N = 'DateRange_image_68220085',
    S = r.resolve('strings'),
    k = { full: 'full', numeric: 'numeric', compact: 'compact' },
    D = { [k.full]: n.DayMonthFull, [k.numeric]: n.DayMonthNumeric };
function C({ startDate: a, endDate: i, className: o, size: r, isAdaptive: n, isMode: m }) {
    const _ = l,
        c = r === v.medium,
        f = r === v.small,
        u = e.useMemo(
            () => (f || (n && c && m) ? C.format.compact : n || c ? C.format.numeric : C.format.full),
            [n, c, m, f],
        );
    return t.jsxs('div', {
        className: s(T, o),
        children: [
            t.jsx(p, {
                className: N,
                path: 'ui_kit.datetime.x16x16.cooldown',
                width: 18,
                height: 17,
                adaptive: { medium: { path: 'ui_kit.datetime.x24x24.cooldown', width: 24, height: 24 } },
            }),
            u !== k.compact
                ? t.jsx(d, {
                      className: y,
                      text: S.readOrEmpty('user_missions.common.daterange.divider'),
                      params: { startDate: _(a, D[u]), endDate: _(i, D[u]) },
                  })
                : null,
        ],
    });
}
C.format = k;
const I = a(() => {
        const { model: e, controls: s } = j(),
            { timeLeftUntilPrimeTime: a } = e.root.get(),
            i = e.season.startTimestamp.get(),
            o = e.season.endTimestamp.get(),
            r = e.season.serverTimestamp.get(),
            n = e.season.state.get();
        switch ((g(r, o, s.pollServerTime), n)) {
            case h.NotStarted:
                return t.jsx(m, {
                    text: R.strings.comp7_ext.entryPointTooltip.status.notStarted(),
                    binding: { timer: t.jsx(C, { startDate: i, endDate: o, format: C.format.full }) },
                });
            case h.Disabled:
                return t.jsx(m, {
                    text: R.strings.comp7_ext.entryPointTooltip.status.ceasefire(),
                    binding: {
                        timer: t.jsx(_, {
                            start: a,
                            format: _.format.default,
                            type: _.type.cooldown,
                            size: _.size.x24x24,
                        }),
                    },
                });
            default:
                return t.jsx(m, {
                    text: R.strings.comp7_ext.entryPointTooltip.status.active(),
                    binding: {
                        timer: t.jsx(_, {
                            start: o - r,
                            format: _.format.default,
                            type: _.type.accent,
                            size: _.size.x24x24,
                        }),
                    },
                });
        }
    }),
    w = {
        base: 'App_db75b9f1',
        topContentBg: 'App_topContentBg_b84f059',
        base__first: 'App_base__first_0',
        base__second: 'App_base__second_0',
        base__third: 'App_base__third_0',
        base__notStarted: 'App_base__notStarted_0',
        base__disabled: 'App_base__disabled_0',
        base__end: 'App_base__end_0',
        topContent: 'App_topContent_52c7eecf',
        bottomContent: 'App_bottomContent_86b6402b',
        title: 'App_title_65c2019a',
        paragraph: 'App_paragraph_0',
        subTitle: 'App_subTitle_849a18a2',
        mode: 'App_mode_e4b84612',
        modeBtn: 'App_modeBtn_191edcde',
        divider: 'App_divider_5cecff56',
        timerContainer: 'App_timerContainer_3955c4fa',
        fadeIn: 'App_fadeIn_0',
        fadeInThreeQuarters: 'App_fadeInThreeQuarters_0',
        fadeInHalf: 'App_fadeInHalf_0',
        fadeOut: 'App_fadeOut_0',
        fadeInWithScale: 'App_fadeInWithScale_0',
        slideUp: 'App_slideUp_0',
        scale: 'App_scale_0',
        raysAppearance: 'App_raysAppearance_0',
        rotate: 'App_rotate_0',
        'reverse-rotate': 'App_reverse-rotate_0',
        glowAppearance: 'App_glowAppearance_0',
        highlightAppearance: 'App_highlightAppearance_0',
        blink: 'App_blink_0',
        slideUpIn: 'App_slideUpIn_0',
    },
    M = {
        [h.Disabled]: 'disabled',
        [h.JustStarted]: 'justStarted',
        [h.NotStarted]: 'notStarted',
        [h.Active]: 'active',
        [h.EndSoon]: 'endSoon',
        [h.End]: 'end',
    },
    B = a(() => {
        const { model: e } = j(),
            s = e.season.name.get(),
            a = e.season.state.get(),
            o = x(e.vehicleLevels.get(), R.strings.comp7_ext.listSeparator());
        return t.jsxs('div', {
            className: i(w.base, w[`base__${s}`], w[`base__${M[a]}`]),
            children: [
                t.jsx('div', { className: w.topContentBg }),
                t.jsxs('div', {
                    className: w.topContent,
                    children: [
                        t.jsx('div', { className: w.title, children: R.strings.comp7_ext.featureName() }),
                        t.jsx('div', { className: w.subTitle, children: b(s) }),
                    ],
                }),
                t.jsxs('div', {
                    className: w.bottomContent,
                    children: [
                        t.jsx(m, {
                            text: R.strings.comp7_ext.entryPointTooltip.description(),
                            binding: { levels: o },
                            classMix: w.paragraph,
                        }),
                        t.jsx(m, {
                            text: R.strings.comp7_ext.entryPointTooltip.modeDescription(),
                            binding: {
                                mode: t.jsx('div', {
                                    className: w.modeBtn,
                                    children: R.strings.comp7_ext.entryPointTooltip.modeBtnText(),
                                }),
                            },
                            classMix: w.mode,
                        }),
                        t.jsx('div', { className: i(f.divider, w.divider) }),
                        t.jsx('div', { className: w.timerContainer, children: t.jsx(I, {}) }),
                    ],
                }),
            ],
        });
    });
c(t.jsx(A, { children: t.jsx(u, { children: t.jsx(B, {}) }) }));
