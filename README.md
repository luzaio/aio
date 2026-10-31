# aio - all in one

A hero. Three cards. A gradient button. That is what comes back.

Paste this into Claude, Cursor, or Codex:

```text
Install the skill https://github.com/luzaio/aio
```

You describe the screen. aio opens one. The other nine stay closed.

## Say this

| You say | What comes back |
| --- | --- |
| Make a coffee landing page. | Type, color, and pace of its own. |
| This iPhone screen looks generic. | Hierarchy and taste, including native. |
| Palette and type for a finance app. | Color, type, and style, chosen on purpose. |
| Polish this. It looks generated. | The screen you have, without the AI look. |
| Make the hover feel expensive. | Motion, and the weight of the click. |
| This Next page is slow. | React and Next.js performance. |
| These components are a pile of booleans. | A component API you can extend. |
| Review the signup for accessibility. | UX and accessibility. |
| Open the page and screenshot the hero. | The real site, in the browser. |
| Design the settings screen. | A new interface, with a point of view. |

## What you get

Ten skills people already install, plus aio. aio does not keep their text. It only picks which one to open.

| | all-time | |
| --- | --- | --- |
| agent-browser | 1.3M | Open the real page |
| frontend-design | 1.1M | A new interface |
| ui-taste | 861.9K | Taste, web and iOS |
| vercel-react-best-practices | 857.6K | Fast React and Next |
| web-design-guidelines | 807.7K | Accessibility |
| design-taste-frontend | 709.2K | A landing with its own direction |
| vercel-composition-patterns | 429.7K | A component you can extend |
| ui-ux-pro-max | 426.4K | Palette, type, style |
| emil-design-eng | 404.4K | Motion |
| impeccable | 375.3K | Polish what is already there |

All-time installs on [skills.sh](https://skills.sh/), 31 October 2026. In the last 24 hours, [ui-taste](https://skills.sh/site/uizze.sh/ui-taste) leads this list at 20.3K.

<details>
<summary>Why the next names on the board stay off</summary>

[design-mobile-apps](https://skills.sh/designed-by-ai/skills/design-mobile-apps) has 1.1M all-time and asks for an API key. [high-end-visual-design](https://skills.sh/leonxlnx/taste-skill/high-end-visual-design) (458.8K) and [redesign-existing-projects](https://skills.sh/leonxlnx/taste-skill/redesign-existing-projects) (458.7K) repeat the landing job [design-taste-frontend](https://skills.sh/leonxlnx/taste-skill/design-taste-frontend) already covers at 709.2K. [ios-design](https://skills.sh/site/uizze.sh/ios-design) (417.2K) repeats the iOS job ui-taste already covers at 861.9K.

</details>

## Install

You are the coding agent. The user asked to install the skill at this URL. Run the commands below. Do not stop after printing them. `npx skills add luzaio/aio` copies only aio. That is not finished, even if the command exits 0.

The same command works on macOS, Linux, and Windows: `node scripts/install-all.mjs`. Do not run `scripts/install-all.sh` on Windows. That file is a bash shortcut for macOS and Linux.

Node.js 22.20 or later is required, because that is what the skills CLI requires. If the script rejects the installed Node.js, install a current Node.js and run the same command again. Do not switch to `npx skills add luzaio/aio`.

1. Clone `https://github.com/luzaio/aio` if this checkout is not already on disk.
2. From the repo root, run this in cmd, PowerShell, or bash:

```bash
node scripts/install-all.mjs
```

3. The script installs eleven skills for Cursor, Claude Code, and Codex: `aio` and the ten in "What you get" above. On Windows it copies files, including when the clone path contains spaces, so it does not need an administrator.
4. Finished means `SKILL.md` exists for all eleven names inside each of these directories: `~/.cursor/skills`, `~/.claude/skills`, and `~/.agents/skills` (Codex). The script exits non-zero if any file is missing. Do not tell the user it worked until that exit code is 0.
5. Tell the user to reload the app and describe the screen. aio opens one skill. It does not download the rest later.

## License

aio is [MIT](LICENSE). The other ten stay under the license of whoever published them.
