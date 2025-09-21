import { ad as t } from './lib.js';
const n = {
        ENTRY_POINT: {
            icon: { emptyIconBrightness: 0.3, boxesIconBrightness: 0.3 },
            shine: { opacityCustom: 0.15, opacityCustomNewBox: 0.4, opacityDiff: 0.15, animationDuration: '40s' },
        },
        HAS_BOXES_VIEW: {
            hasIdle: !0,
            vignette: { isEnabled: !0, opacity: 0.4 },
            tabsGuaranteedCount: 10,
            accentCount: 5,
            hoverZone: { width: '38%', height: '39%', horizontalOffset: '30.8%', verticalOffset: '39%' },
            backgroundColor: '#111',
        },
        INFO_PAGE: { hasDescription: !0 },
        REWARDS: { accentCount: 5 },
    },
    o = {
        DEFAULT_CONFIG: n,
        anniversaryCN: {
            ENTRY_POINT: { icon: { emptyIconBrightness: 0.2 } },
            HAS_BOXES_VIEW: { hasIdle: !1, tabsGuaranteedCount: 5 },
            INFO_PAGE: { hasDescription: !0 },
        },
        wt: { HAS_BOXES_VIEW: { tabsGuaranteedCount: 5 } },
        wtCn: { HAS_BOXES_VIEW: { tabsGuaranteedCount: 5 } },
    },
    e = (e, a) => {
        const s = o[t(e)];
        return s
            ? ((t, n) => {
                  const o = (t, n) => {
                      const e = { ...t };
                      for (const a in e)
                          n &&
                              a in n &&
                              ('object' == typeof e[a] ? (e[a] = o(e[a], n[a] ?? e[a])) : (e[a] = n[a] ?? e[a]));
                      return e;
                  };
                  return o(t, n);
              })(n[a], s[a])
            : n[a];
    };
export { e as g };
