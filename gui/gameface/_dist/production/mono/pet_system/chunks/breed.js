import { j as e, f as s } from './vendor.js';
import { r as a } from './lib.js';
const r = 'Breed_45af4a36',
    l = 'Breed_animal_d884042f',
    { toUpperCase: i } = a.resolve('intl');
function n({ petType: a, breedName: n, className: o }) {
    return a || n
        ? e.jsxs('div', {
              className: s(r, o),
              children: [a && e.jsx('div', { className: l, children: i(a) }), n && i(n)],
          })
        : null;
}
export { n as B };
