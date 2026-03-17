import { o as e, I as s, p as o } from './vendor.js';
import {
    i as t,
    d5 as n,
    ci as a,
    cj as i,
    d6 as r,
    d7 as c,
    d8 as l,
    d9 as u,
    R as p,
    da as m,
    db as b,
    dc as d,
    dd as P,
    T as f,
} from './lib.js';
var g = ((e) => ((e.None = 'None'), (e.Core = 'Core'), (e.Pro = 'Pro'), e))(g || {}),
    v = ((e) => ((e.Inactive = 'Inactive'), (e.Active = 'Active'), (e.Cancelled = 'Cancelled'), e))(v || {});
const C = n(
        P((e) => e > 0),
        d(f),
    ),
    k = [
        [r, c],
        [l, u],
        [p, m],
        [b, () => m(1)],
    ];
function A(e) {
    if (e) {
        const s = a(e, i());
        for (const [e, o] of k) {
            const t = Math.ceil(e(s));
            if (t > 0) return o(t);
        }
    }
}
var x = ((e) => ((e.Unlock = 'unlock'), (e.UnlockSteamAndCn = 'unlockSteamAndCn'), (e.UnlockPro = 'unlockPro'), e))(
    x || {},
);
const [I, y] = t('UserAccountProvider')(
    ({ observableModel: t, cleanup: n }) => {
        const a = t.object('userInfo'),
            i = t.object('subscriptions.wotPlus'),
            r = t.object('subscriptions.premiumAccount'),
            c = t.primitives(['isCnRealm', 'isSteamPlatform'], 'subscriptions'),
            l = t.arrayClone('subscriptions.wotPlus.benefits'),
            u = t.arrayClone('subscriptions.wotPlus.proBenefits'),
            p = { basic: e.box(A(C(r.get().expiryTime))), plus: e.box(A(C(i.get().expiryTime))) };
        const m = s(
                () => r.get().expiryTime,
                (e) => {
                    p.basic.set(A(C(e)));
                },
            ),
            b = s(
                () => i.get().expiryTime,
                (e) => {
                    p.plus.set(A(C(e)));
                },
            ),
            d = setInterval(function () {
                o(() => {
                    (p.basic.set(A(C(r.get().expiryTime))), p.plus.set(A(C(i.get().expiryTime))));
                });
            }, 6e4);
        return (
            n(() => {
                (clearInterval(d), m(), b());
            }),
            {
                userInfo: a,
                premiums: p,
                wotPlus: i,
                premiumAccount: r,
                benefits: l,
                proBenefits: u,
                subscriptionPrimitives: c,
                getTooltipVariant: () => {
                    const e = i.get().state,
                        s = i.get().type;
                    return e === v.Inactive && s === g.None && (c.isCnRealm.get() || c.isSteamPlatform.get())
                        ? 'unlockSteamAndCn'
                        : e === v.Inactive && s === g.None
                          ? 'unlock'
                          : e !== v.Inactive && s === g.Core
                            ? 'unlockPro'
                            : 'unlock';
                },
            }
        );
    },
    ({ externalModel: e }) => ({
        openAccountDashboard: e.createCallbackNoArgs('onOpenAccountDashboard'),
        openWotPlusSubscriptionPage: e.createCallbackNoArgs('subscriptions.onOpenWotPlus'),
        openPremiumSubscriptionPage: e.createCallbackNoArgs('subscriptions.onOpenPremium'),
    }),
);
export { x as T, I as U, v as W, g as a, y as u };
