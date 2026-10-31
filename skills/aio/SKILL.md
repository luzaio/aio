---
name: aio
description: >-
  Routes frontend and UI work to exactly one popular skill and reads only that
  skill. Use when the user invokes /aio or asks for a landing page, React or
  Next.js UI, Tailwind interface, palette, font pairing, accessibility review,
  animation, polish, or a browser screenshot of the page.
---

# aio

One install. The frontend skills people actually have. Open one.

aio does not contain those skills. It picks the one row that matches and follows that skill's own `SKILL.md`. Leave the other nine unread.

## Pick one

If they invoked `/aio` with no task, do not install anything. Show ten plain jobs, in the user's words, and ask which one they want. Do not open with skill filenames.

Use the first rule that fits. If none fit, do the task normally. Do not install anything.

1. **agent-browser** — they want a browser driven: open a page, click, fill, extract, or screenshot.
2. **vercel-react-best-practices** — React or Next.js performance: waterfalls, bundles, data fetching, rerenders.
3. **vercel-composition-patterns** — component API design: boolean props, compound components, reusable React APIs.
4. **web-design-guidelines** — review the UI for accessibility, UX, or Vercel's interface guidelines.
5. **emil-design-eng** — animation, easing, motion, or the feel of an interaction.
6. **ui-ux-pro-max** — pick a style, palette, font pairing, icon, chart, or stack-specific UI rules.
7. **design-taste-frontend** — a landing page, portfolio, or marketing site that must not look templated.
8. **impeccable** — an interface already exists and they want it polished, critiqued, audited, made bolder, or made quieter.
9. **ui-taste** — make a web or iOS UI look better: hierarchy, taste, anti-slop, including a native screen.
10. **frontend-design** — any other new interface or visual direction.

A landing page goes to `design-taste-frontend`, not `frontend-design`. A native or iOS screen goes to `ui-taste`. "Review accessibility" goes to `web-design-guidelines`. "Polish this" goes to `impeccable`. Do not open two of these in one step.

## Load only that skill

Search for a `SKILL.md` whose frontmatter `name` is the chosen skill. Look in the project and in the user home. On Windows the home is the user profile; the folder names are the same.

- `.agents/skills/`
- `.cursor/skills/`
- `.claude/skills/`
- `.codex/skills/`
- `~/.agents/skills/`
- `~/.cursor/skills/`
- `~/.claude/skills/`
- `~/.codex/skills/`

If you find it, read that file and follow it. Stop. Do not read the other catalog skills, and do not answer from memory of them.

If you do not find it, install that one skill for Cursor, Claude Code, and Codex, then search again and read it:

```bash
npx skills add OWNER/REPO --skill NAME -g -a cursor -a claude-code -a codex -y
```

On Windows, add `--copy` so the install does not need a symlink or an administrator.

| Skill | OWNER/REPO |
| --- | --- |
| frontend-design | anthropics/skills |
| ui-taste | uizze.sh |
| vercel-react-best-practices | vercel-labs/agent-skills |
| web-design-guidelines | vercel-labs/agent-skills |
| design-taste-frontend | leonxlnx/taste-skill |
| vercel-composition-patterns | vercel-labs/agent-skills |
| ui-ux-pro-max | nextlevelbuilder/ui-ux-pro-max-skill |
| emil-design-eng | emilkowalski/skills |
| impeccable | pbakaus/impeccable |
| agent-browser | vercel-labs/agent-browser |

Pass a single `--skill`. Do not pass `--all`. Do not install a second skill in the same turn.

If the install fails, give the user that one command and stop. Do not reconstruct the upstream skill.
