# wot.assets

**World of Tanks client GUI assets** (icons, atlases, flash, videos), one
branch per client build. Extracted straight from the update CDN by
[`unicum-gg/wot.build`](https://github.com/unicum-gg/wot.build), with no game
client installed. Used by [unicum.gg](https://unicum.gg) to picture anything
Wargaming's public CDN will not serve.

## Branches

| Branch | Client | Update service | guid |
| --- | --- | --- | --- |
| [`WG`](../../tree/WG) | Wargaming release | `wgus-woteu.wargaming.net` | `WOT.EU.PRODUCTION` |
| [`WG_CT`](../../tree/WG_CT) | Wargaming Common Test | `wgus-wotct.wargaming.net` | `WOT.CT.PRODUCTION` |
| [`Lesta`](../../tree/Lesta) | Lesta release (Мир танков) | `lstus-ru.lesta.ru` | `MT.RU.PRODUCTION` |
| [`Lesta_PT`](../../tree/Lesta_PT) | Lesta public test | `lstus-ru.lesta.ru` | `MT.PT.PRODUCTION` |

## Why it exists

Wargaming's public CDN serves **released vehicles only**. A vehicle in Common
Test 404s there, so a site that wants to show it before release has nowhere else
to look. The client itself has the art all along, and that is what this mirror
publishes.

## It accumulates, on purpose

Wargaming pulls an event's art when the event ends, and no later client hands it
back: St Patrick, Grinch, Halloween, off-season Frontline, retired lootbox
rewards. So a build **writes over its branch without clearing it**: what the
live client carries is refreshed, what it dropped is kept. Roughly 23k such
files are here for that reason.

This is the opposite of what its sibling
[`wot-src`](https://github.com/unicum-gg/wot-src) does, and deliberately so:
that tree describes what the game *is*, so a dropped file must stop being
published there.

## History

This began as a fork of
[Kurzdor/wot.assets](https://github.com/Kurzdor/wot.assets), fast-forwarded from
it. Upstream's test branch froze in July 2026, which left Common Test vehicles
with no picture anywhere. Every branch is now built from the client itself.

## Notice

Assets provided in the repository are the property of their sole owners.
