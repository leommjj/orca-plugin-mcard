# Orca Lumina Plugin

Port of the [siyuan-lumina](https://github.com/LunaNorth/siyuan-lumina) plugin for the Orca note-taking app.

A lightweight note-taking plugin inspired by Flomo — capture every passing thought in an instant.

## Features

- **Instant Capture**: Quickly jot down thoughts from the headbar button or via the `lumina.capture` command. Supports Markdown, `#tags`, and images.
- **Dual Layouts**: Switch between flat list layout and a masonry card layout.
- **Themes**: Original (green), SiYuan-follow, and Morandi color themes with 15 Morandi palettes.
- **Daily Review**: Randomly picks past notes weighted by "time since last review" for spaced-repetition-style reflection.
- **Random Walk**: Encounter a random past note — a small spark of inspiration from your past self.
- **Tag Filtering**: Filter notes by tag with a colorful, hash-driven tag palette.
- **Journal Sync**: New notes are auto-synced under today's journal by default.

## Install

1. Build: `pnpm install && pnpm build`
2. Copy `dist/` contents to your Orca plugins folder under `orca-plugin-lumina`.
3. Restart Orca and enable the plugin.

## Commands

- `lumina.capture` — Open the quick-capture modal.
- `lumina.open` — Open the Lumina home panel (register a `lumina.home` block renderer).

## Settings

- Inbox name: the heading under which captured notes are grouped in today's journal.
- Note tag: the tag applied to every Lumina note (used for full-text lookup).
- View style / Theme mode / Morandi color / Font size / Compact mode.
- Daily review count: how many notes are drawn for the daily review.
- Sync to journal: toggle automatic insertion into today's journal.

## Notes

Notes are persisted via `orca.plugins.setData` in the plugin's private storage (key `lumina.notes`) for cross-session recall. When journal sync is enabled, the same content is also written into the Orca journal tree so it participates in full-text search and block graph queries.

## License

MIT
