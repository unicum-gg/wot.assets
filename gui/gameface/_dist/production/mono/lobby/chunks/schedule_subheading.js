import { j as e, x as s, y as a } from './vendor.js';
import { i as t, cS as o, F as n, cT as i, cU as r, cV as m, cW as l, cX as c, cY as d, cZ as p } from './lib.js';
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
    S = R.strings.comp7_ext.season,
    h = (s, a, t = i.ShortDate) => ({
        startDate: e.jsx(c, { datetime: s, format: t }),
        endDate: e.jsx(c, { datetime: a, format: t }),
    }),
    u = (s, a, t) => {
        const i = a - t,
            c = ((e, s) => j(e - s))(a, t);
        return i >= o
            ? e.jsx(n, { text: S.range(), binding: h(s, a) })
            : i >= r
              ? e.jsx(n, { text: S.daysLeft(), binding: c })
              : i >= m
                ? e.jsx(n, { text: S.hoursLeft(), binding: c })
                : i >= l
                  ? e.jsx(n, { text: S.minutesLeft(), binding: c })
                  : i >= 1
                    ? e.jsx(n, { text: S.secondsLeft(), binding: c })
                    : void 0;
    },
    N = R.strings.comp7_ext,
    T = (e) => ((e, s) => String(e.$dyn(s)))(N.seasonName, e),
    b = 'ActiveSeasonState_7be3b725',
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
        e.jsx(d, {
            args: { tooltipId: i },
            isEnabled: Boolean(i),
            children: e.jsxs('div', {
                className: b,
                children: [
                    e.jsx('div', { className: s(f, null == m ? void 0 : m.calendarIcon) }),
                    r && e.jsxs(e.Fragment, { children: [T(n), e.jsx('div', { className: _ })] }),
                    u(a, t, o),
                ],
            }),
        }),
    y = 'ScheduleSubheading_6a634a68',
    I = a(({ className: a, classNames: t, hasSeasonName: o = !0 }) => {
        const { model: n, controls: i } = g(),
            r = n.season.startTimestamp.get(),
            m = n.season.endTimestamp.get(),
            l = n.season.serverTimestamp.get(),
            c = n.season.name.get();
        return (
            x(l, m, i.pollServerTime),
            e.jsx('div', {
                className: s(y, a),
                children:
                    l < m
                        ? e.jsx('div', {
                              className: null == t ? void 0 : t.activeSeasonState,
                              children: e.jsx(M, {
                                  startTimestamp: r,
                                  endTimestamp: m,
                                  currentTimestamp: l,
                                  seasonName: c,
                                  tooltipId: n.root.get().tooltipId,
                                  hasSeasonName: o,
                                  classNames: null == t ? void 0 : t.scheduleClassNames,
                              }),
                          })
                        : e.jsx(p, { text: R.strings.comp7_ext.season.over(), binding: { seasonName: T(c) } }),
            })
        );
    });
export { I as S, v as a, g as u };
