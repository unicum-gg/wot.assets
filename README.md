# unicum.gg/wot.assets

A mirror fork of [Kurzdor/wot.assets](https://github.com/Kurzdor/wot.assets).

The game and asset content lives on the mirror branches (`WG`, `WG_CT`, `Lesta`,
`Lesta_PT`), kept fast-forwarded to upstream by the
[`Sync upstream branches`](.github/workflows/sync-upstream.yml) workflow
(scheduled twice daily plus a manual trigger).

This `main` branch is automation only (this README plus the workflow); it holds
no assets on purpose, so consumers should reference a mirror branch, e.g.
`raw.githubusercontent.com/unicum-gg/wot.assets/WG/<path>`.

> Don't commit to the mirror branches directly. Any divergence makes the
> fast-forward sync fail, so fork-specific changes belong on `main`.
