# wot.assets

Vehicle icons from the World of Tanks / Мир танков clients, one branch per
client build. Used by [unicum.gg](https://unicum.gg) to picture a vehicle the
public CDN does not serve.

| Branch | Client |
| --- | --- |
| [`WG`](../../tree/WG) | Wargaming release |
| [`WG_CT`](../../tree/WG_CT) | Wargaming Common Test |
| [`Lesta`](../../tree/Lesta) | Lesta release (Мир танков) |
| [`Lesta_PT`](../../tree/Lesta_PT) | Lesta public test |

Every branch is rebuilt daily from the client itself by the `assets` workflow in
[`unicum-gg/wot-src`](https://github.com/unicum-gg/wot-src), which reads the
update CDN directly. This repository began as a fork of
[Kurzdor/wot.assets](https://github.com/Kurzdor/wot.assets) and was
fast-forwarded from it; that sync is gone, because a branch cannot be both
mirrored from upstream and written to here.

It also carries a narrower scope than upstream: `gui/maps/icons/vehicle/**`
rather than the whole `gui` tree, which is 21 GB and would not fit in a build.

## Notice

Assets provided in the repository are the property of their sole owners.
