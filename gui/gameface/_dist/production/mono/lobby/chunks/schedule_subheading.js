import { j as e, w as s, x as a } from './vendor.js';
import { i as t, d4 as o, F as n, d5 as i, d6 as r, d7 as m, d8 as d, d9 as l, da as c, db as p } from './lib.js';
import { u as x } from './use_server_time_polling.js';
const [v, g] = t()(
        ({ observableModel: e }) => ({
            root: e.object(),
            season: e.primitives(
                ['startTimestamp', 'endTimestamp', 'serverTimestamp', 'state', 'name', 'hasTentativeDates'],
                'season',
            ),
            year: e.primitives(['state'], 'year'),
        }),
        ({ externalModel: e }) => ({ pollServerTime: e.createCallbackNoArgs('season.pollServerTime') }),
    ),
    j = (e) => {
        const s = Math.floor(e);
        return {
            totalSecondsLeft: s,
            seconds: Math.floor(s % 60),
            minutes: Math.floor(s / 60) % 60,
            hours: Math.floor((s / 3600) % 24),
            totalDays: Math.floor(s / 86400),
        };
    },
    h = R.strings.comp7_ext.season,
    S = (s, a, t = i.ShortDate) => ({
        startDate: e.jsx(l, { datetime: s, format: t }),
        endDate: e.jsx(l, { datetime: a, format: t }),
    }),
    u = (s, a, t) => {
        const i = a - t,
            l = ((e, s) => j(e - s))(a, t);
        return i >= o
            ? e.jsx(n, { text: h.range(), binding: S(s, a) })
            : i >= r
              ? e.jsx(n, { text: h.daysLeft(), binding: l })
              : i >= m
                ? e.jsx(n, { text: h.hoursLeft(), binding: l })
                : i >= d
                  ? e.jsx(n, { text: h.minutesLeft(), binding: l })
                  : i >= 1
                    ? e.jsx(n, { text: h.secondsLeft(), binding: l })
                    : void 0;
    },
    N = R.strings.comp7_ext,
    b = (e) => ((e, s) => String(e.$dyn(s)))(N.seasonName, e),
    T = 'ActiveSeasonState_7be3b725',
    f = 'ActiveSeasonState_calendarIcon_cc4d1c6a',
    _ = 'ActiveSeasonState_divider_e45543ee',
    M = ({
        startTimestamp: a,
        endTimestamp: t,
        currentTimestamp: o,
        seasonName: n,
        tooltipId: i = '',
        hasSeasonName: r = !0,
        classNames: m,
    }) =>
        e.jsx(c, {
            args: { tooltipId: i },
            isEnabled: Boolean(i),
            children: e.jsxs('div', {
                className: T,
                children: [
                    e.jsx('div', { className: s(f, null == m ? void 0 : m.calendarIcon) }),
                    r && e.jsxs(e.Fragment, { children: [b(n), e.jsx('div', { className: _ })] }),
                    u(a, t, o),
                ],
            }),
        }),
    I = 'ScheduleSubheading_6a634a68',
    y = a(({ className: a, classNames: t, hasSeasonName: o = !0 }) => {
        const { model: n, controls: i } = g(),
            r = n.season.startTimestamp.get(),
            m = n.season.endTimestamp.get(),
            d = n.season.serverTimestamp.get(),
            l = n.season.name.get();
        return (
            x(d, m, i.pollServerTime),
            e.jsx('div', {
                className: s(I, a),
                children:
                    d < m
                        ? e.jsx('div', {
                              className: null == t ? void 0 : t.activeSeasonState,
                              children: e.jsx(M, {
                                  startTimestamp: r,
                                  endTimestamp: m,
                                  currentTimestamp: d,
                                  seasonName: l,
                                  tooltipId: n.root.get().tooltipId,
                                  hasSeasonName: o,
                                  classNames: null == t ? void 0 : t.scheduleClassNames,
                              }),
                          })
                        : e.jsx(p, { text: R.strings.comp7_ext.season.over(), binding: { seasonName: b(l) } }),
            })
        );
    });
export { y as S, v as a, g as u };
