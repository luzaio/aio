# aio

Your AI can code. The interface still comes out generic.

aio puts ten frontend skills on the machine, and one router with them. You describe the screen. aio opens the skill that fits and leaves the other nine closed.

Paste this to Claude, Cursor, or Codex:

```text
Instale https://github.com/luzaio/aio e siga a seção Install deste README.
```

```text
Install https://github.com/luzaio/aio and follow the Install section of this README.
```

Mac, Linux, and Windows. Node.js 22.20 or later. No extra account.

## Say it like a person

| You type | aio opens |
| --- | --- |
| Build a landing page for a coffee brand. No template look. | design-taste-frontend |
| Make this iOS screen look less generic. | ui-taste |
| Pick a palette and fonts for a fintech dashboard. | ui-ux-pro-max |
| Polish this page. It looks generated. | impeccable |
| Make the hover feel expensive. | emil-design-eng |
| This Next.js page is slow. | vercel-react-best-practices |
| These components are a pile of boolean props. | vercel-composition-patterns |
| Check accessibility on the signup form. | web-design-guidelines |
| Open the page and screenshot the hero. | agent-browser |
| Design the settings screen. | frontend-design |

## The ten

Installed together, once. Counts from [skills.sh](https://skills.sh), 31 October 2026.

| Skill | Installs | From |
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

aio does not copy their text. It reads the file each author ships.

## Install

You are the coding agent. The user asked you to install this repository. Run it. Do not stop at printing commands unless the shell fails.

1. Clone `https://github.com/luzaio/aio` if this checkout is not already on disk.
2. From the repo root, run `node scripts/install-all.mjs`.
3. That is the whole install. It puts eleven skills on disk: `aio` and the ten above. `npx skills add luzaio/aio` alone copies only the router. That is not finished.
4. Finished means all eleven folders exist. On Windows the script copies files, so it does not need an administrator.
5. Tell the user to reload the app and describe the screen. aio opens one skill. It does not download the rest later.

## License

The router is [MIT](LICENSE). The ten skills stay under their own licenses.
