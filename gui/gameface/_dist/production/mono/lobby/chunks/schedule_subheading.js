import { j as e, C as s, D as a } from './vendor.js';
import { i as t, dq as o, F as n, dr as r, ds as i, dt as m, du as d, dv as l, dw as c, dx as p } from './lib.js';
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
    S = (s, a, t = r.ShortDate) => ({
        startDate: e.jsx(l, { datetime: s, format: t }),
        endDate: e.jsx(l, { datetime: a, format: t }),
    }),
    N = (s, a, t) => {
        const r = a - t,
            l = ((e, s) => j(e - s))(a, t);
        return r >= o
            ? e.jsx(n, { text: h.range(), binding: S(s, a) })
            : r >= i
              ? e.jsx(n, { text: h.daysLeft(), binding: l })
              : r >= m
                ? e.jsx(n, { text: h.hoursLeft(), binding: l })
                : r >= d
                  ? e.jsx(n, { text: h.minutesLeft(), binding: l })
                  : r >= 1
                    ? e.jsx(n, { text: h.secondsLeft(), binding: l })
                    : void 0;
    },
    u = R.strings.comp7_ext,
    T = (e) => ((e, s) => String(e.$dyn(s)))(u.seasonName, e),
    b = 'ActiveSeasonState_7be3b725',
    f = 'ActiveSeasonState_calendarIcon_cc4d1c6a',
    _ = 'ActiveSeasonState_divider_e45543ee',
    M = ({
        startTimestamp: a,
        endTimestamp: t,
        currentTimestamp: o,
        seasonName: n,
        tooltipId: r = '',
        hasSeasonName: i = !0,
        classNames: m,
    }) =>
        e.jsx(c, {
            args: { tooltipId: r },
            isEnabled: Boolean(r),
            children: e.jsxs('div', {
                className: b,
                children: [
                    e.jsx('div', { className: s(f, m?.calendarIcon) }),
                    i && e.jsxs(e.Fragment, { children: [T(n), e.jsx('div', { className: _ })] }),
                    N(a, t, o),
                ],
            }),
        }),
    D = 'ScheduleSubheading_6a634a68',
    I = a(({ className: a, classNames: t, hasSeasonName: o = !0 }) => {
        const { model: n, controls: r } = g(),
            i = n.season.startTimestamp.get(),
            m = n.season.endTimestamp.get(),
            d = n.season.serverTimestamp.get(),
            l = n.season.name.get();
        return (
            x(d, m, r.pollServerTime),
            e.jsx('div', {
                className: s(D, a),
                children:
                    d < m
                        ? e.jsx('div', {
                              className: t?.activeSeasonState,
                              children: e.jsx(M, {
                                  startTimestamp: i,
                                  endTimestamp: m,
                                  currentTimestamp: d,
                                  seasonName: l,
                                  tooltipId: n.root.get().tooltipId,
                                  hasSeasonName: o,
                                  classNames: t?.scheduleClassNames,
                              }),
                          })
                        : e.jsx(p, { text: R.strings.comp7_ext.season.over(), binding: { seasonName: T(l) } }),
            })
        );
    });
export { I as S, v as a, g as u };
