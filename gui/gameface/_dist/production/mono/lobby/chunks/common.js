import { j as e, E as s, r as l } from './vendor.js';
import { a8 as t, h as i, au as r, X as o, p as a, d8 as d } from './lib.js';
import { S as _ } from './story_point.js';
import { D as c, f, g as n, h as b } from './sound.js';
var p = ((e) => ((e.DEFAULT = 'default'), (e.SELECTED = 'selected'), e))(p || {});
const m = {
        root: 'DifficultyItem_root_84d51887',
        base: 'DifficultyItem_f9ea1d1b',
        base__hoverable: 'DifficultyItem_base__hoverable_84d51887',
        content: 'DifficultyItem_content_d2957dcf',
        storyPointsWrapper: 'DifficultyItem_storyPointsWrapper_e7223a99',
        base__locked: 'DifficultyItem_base__locked_84d51887',
        base__selected: 'DifficultyItem_base__selected_84d51887',
        storyPointsGlow: 'DifficultyItem_storyPointsGlow_865279f8',
        border: 'DifficultyItem_border_95aff0e5',
        bgHelper: 'DifficultyItem_bgHelper_e2cbb8de',
        bgHelper__selected: 'DifficultyItem_bgHelper__selected_aa403705',
        bgHelper__hover: 'DifficultyItem_bgHelper__hover_da7a02c3',
        bgHelper__default: 'DifficultyItem_bgHelper__default_6128901',
        bgHelper__locked: 'DifficultyItem_bgHelper__locked_fd5602d8',
        progress: 'DifficultyItem_progress_c50db54a',
        progressIconWrapper: 'DifficultyItem_progressIconWrapper_fb8bd451',
        progressIcon: 'DifficultyItem_progressIcon_4ec65bf6',
        progressIcon__completed: 'DifficultyItem_progressIcon__completed_4fedf01e',
        label: 'DifficultyItem_label_e0bd4ef3',
        lock: 'DifficultyItem_lock_63b24d89',
    },
    u = { 1: n, 2: f, 3: c },
    g = t.resolve('strings');
function y({
    level: l,
    state: t,
    isDisabled: d,
    isLocked: c,
    onClick: f,
    className: n,
    missionCount: y,
    modifier: I,
    completedMissions: v,
}) {
    const D = i({
            resId: R.aliases.last_stand.shared.Difficulty('resId'),
            contentId: R.views.last_stand.mono.lobby.tooltips.difficulty_tooltip('resId'),
            args: { level: l, state: t, isLocked: c },
            disabled: d,
        }),
        j = r({
            body: R.strings.last_stand_lobby.difficult.disabled.body(),
            header: R.strings.last_stand_lobby.difficult.disabled.header(),
            disabled: !d,
        }),
        h = d ? j : D,
        x = t === p.DEFAULT && !c && !d;
    return e.jsx('div', {
        className: s(m.base, m[`base__${t}`], c && m.base__locked, x && m.base__hoverable, n),
        ...h,
        onMouseEnter: (e) => {
            (h.onMouseEnter(e), t !== p.DEFAULT || d || c || a.sound(b));
        },
        onClick: () => {
            if ((h.onClick(), t !== p.DEFAULT || d || c)) return;
            const e = u[l];
            (void 0 !== e && a.sound(e), f(l));
        },
        children: e.jsxs('div', {
            className: m.content,
            children: [
                e.jsxs('div', {
                    className: m.storyPointsWrapper,
                    children: [
                        e.jsx(_, { size: _.sizes.s16x16, modifier: I, withTimesSymbol: !0 }),
                        e.jsx('div', { className: m.storyPointsGlow }),
                    ],
                }),
                e.jsx('div', { className: m.border }),
                e.jsx('div', { className: s(m.bgHelper, m.bgHelper__selected) }),
                t === p.DEFAULT &&
                    !d &&
                    !c &&
                    e.jsxs(e.Fragment, {
                        children: [
                            e.jsx('div', { className: s(m.bgHelper, m.bgHelper__default) }),
                            e.jsx('div', { className: s(m.bgHelper, m.bgHelper__hover) }),
                        ],
                    }),
                c &&
                    e.jsxs(e.Fragment, {
                        children: [
                            e.jsx('div', { className: s(m.bgHelper, m.bgHelper__default) }),
                            e.jsx('div', { className: s(m.bgHelper, m.bgHelper__disabled) }),
                        ],
                    }),
                e.jsx('div', {
                    className: m.progress,
                    children: o(y, (l) =>
                        e.jsx(
                            'div',
                            {
                                className: m.progressIconWrapper,
                                children: e.jsx('div', {
                                    className: s(m.progressIcon, v.includes(l.toString()) && m.progressIcon__completed),
                                }),
                            },
                            `icon_${l}`,
                        ),
                    ),
                }),
                e.jsx('div', {
                    className: m.label,
                    children: g.readOrEmpty(`last_stand_lobby.difficult.uppercase.level_${l}`),
                }),
                c && e.jsx('div', { className: m.lock }),
            ],
        }),
    });
}
const I = 1,
    v = (e) =>
        d(
            'vehicleRoles',
            l.useMemo(() => [e], [e]),
        );
export { y as D, I as S, v as u };
