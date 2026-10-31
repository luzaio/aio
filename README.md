# aio

Cursor, Claude, or Codex keeps shipping the same generic interface. aio installs the frontend skills people already use, then opens only the one that matches what you typed.

Tell your AI this, with the link:

```text
Instale https://github.com/01ecstacy/aio e siga a seção Install deste README.
```

```text
Install https://github.com/01ecstacy/aio and follow the Install section of this README.
```

## Install

You are the coding agent. The user asked you to install this repository. Run it yourself. Do not stop at printing commands unless the shell fails.

Works on macOS, Linux, and Windows. Needs Git and Node.js 22.20 or later.

1. Clone `https://github.com/01ecstacy/aio` if this checkout is not already on disk.
2. From the repo root, run `node scripts/install-all.mjs`.
3. That command is the whole install. It puts eleven skills on disk: `aio` plus the ten frontend skills. `npx skills add 01ecstacy/aio` alone is not enough, because that copies only the router.
4. The install is finished only when all eleven exist. On Windows the script copies the files, so it does not need an administrator.
5. Tell the user to reload the app and describe the screen. `aio` then opens one of the ten. It does not install anything else.

## Talk normally

| You type | What happens |
| --- | --- |
| Build a landing page for a coffee brand. No template look. | A landing page with its own direction |
| Make this iOS screen look less generic. | Taste and hierarchy, including native UI |
| Pick a palette and font pairing for a fintech dashboard. | A style, colors, and fonts chosen on purpose |
| Polish this page. It looks generated. | A craft pass on the screen you already have |
| Make the hover feel expensive. | Motion and the feel of the interaction |
| This Next.js page is slow. | A React / Next.js performance pass |
| These components are a pile of boolean props. | Cleaner component APIs |
| Check accessibility on the signup form. | An accessibility and UX review |
| Open the page and screenshot the hero. | The real page, in a browser |
| Design the settings screen. | A new interface with a point of view |

You do not pick a tool. aio does.

## What's inside

Counted on [skills.sh](https://skills.sh) on 31 October 2026. The 24-hour chart that day is mostly video and image packs. Among interface skills, `ui-taste` is the one climbing fastest, and it is in this list. aio does not copy these files. It reads the current one from the author.

| Skill | Installs | Source |
| --- | --- | --- |
| agent-browser | 1.3M | vercel-labs/agent-browser |
| frontend-design | 1.1M | anthropics/skills |
| ui-taste | 862K | uizze.sh |
| vercel-react-best-practices | 858K | vercel-labs/agent-skills |
| web-design-guidelines | 808K | vercel-labs/agent-skills |
| design-taste-frontend | 709K | leonxlnx/taste-skill |
| vercel-composition-patterns | 430K | vercel-labs/agent-skills |
| ui-ux-pro-max | 426K | nextlevelbuilder/ui-ux-pro-max-skill |
| emil-design-eng | 404K | emilkowalski/skills |
| impeccable | 375K | pbakaus/impeccable |

The install puts all ten on disk with `aio`. One message opens one of them. The other nine stay closed. `aio` does not download a skill later.

## License

The router is [MIT](LICENSE). The ten skills stay under their own licenses.
