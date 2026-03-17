import { af as t } from './lib.js';
const e = {
        ENTRY_POINT: {
            hover: { enabled: !1 },
            icon: { emptyIconBrightness: 0.4, boxesIconBrightness: 0.4 },
            shine: { opacity: 0.8 },
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
    n = {
        DEFAULT_CONFIG: e,
        anniversaryCN: {
            ENTRY_POINT: { icon: { emptyIconBrightness: 0.2 } },
            HAS_BOXES_VIEW: { hasIdle: !1, tabsGuaranteedCount: 5 },
            INFO_PAGE: { hasDescription: !0 },
        },
        lootBoxSystem: { ENTRY_POINT: { hover: { enabled: !0 } } },
    },
    o = (o, s) => {
        const r = n[t(o)];
        return r
            ? ((t, e) => {
                  const n = (t, e) => {
                      const o = { ...t };
                      for (const s in o)
                          e &&
                              s in e &&
                              ('object' == typeof o[s] ? (o[s] = n(o[s], e[s] ?? o[s])) : (o[s] = e[s] ?? o[s]));
                      return o;
                  };
                  return n(t, e);
              })(e[s], r[s])
            : e[s];
    };
export { o as g };
