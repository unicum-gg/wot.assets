import { r as e, j as t } from './vendor.js';
const n = (t) =>
    e.createElement(
        'svg',
        { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...t },
        e.createElement('path', {
            d: 'M4 9L3 11L10.5 20L22 4L21 2L10.5 13L4 9Z',
            fill: 'url(#paint0_linear_1804_263569)',
        }),
        e.createElement(
            'defs',
            null,
            e.createElement(
                'linearGradient',
                {
                    id: 'paint0_linear_1804_263569',
                    x1: 11.6364,
                    y1: 2,
                    x2: 11.6364,
                    y2: 20,
                    gradientUnits: 'userSpaceOnUse',
                },
                e.createElement('stop', { stopColor: '#CBFD70' }),
                e.createElement('stop', { offset: 1, stopColor: '#95F04E' }),
            ),
        ),
    );
function r({ className: e }) {
    return t.jsx(n, { className: e });
}
export { r as D };
