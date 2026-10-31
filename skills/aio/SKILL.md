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

The ten skills are already installed. aio only decides which one this message needs, then reads that `SKILL.md`. Leave the other nine unread. Do not install a skill from this file.

## If one of the ten is missing

Stop. Do not install that skill alone. Run the full installer, which puts `aio` and all ten on disk:

```bash
git clone https://github.com/luzaio/aio.git
cd aio
node scripts/install-all.mjs
```

If the repo is already cloned, run `node scripts/install-all.mjs` from its root. When it finishes, come back and open only the one skill that fits.

## Pick one

If they invoked `/aio` with no task, show ten plain jobs, in the user's words, and ask which one they want. Do not open with skill filenames.

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

If you do not find it, go back to "If one of the ten is missing" and run the full installer. Do not reconstruct the skill.
