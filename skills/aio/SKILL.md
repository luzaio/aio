---
name: aio
description: >-
  Routes one installed skill and reads only that skill. Use when the user
  invokes /aio or the task matches the catalog: UI, tests, review, debugging,
  video, images, docs, or another listed job.
---

# aio - all in one

One install. Sixty-seven skills people already have, plus this one. Open one.

The sixty-seven skills are already installed. aio only decides which one this message needs, then reads that `SKILL.md`. Leave the other sixty-six unread. Do not install a skill from this file.

## If one of the sixty-seven is missing

Stop. Do not install that skill alone. `npx skills add luzaio/aio` only copies this router. Run the full installer, which puts `aio` and all sixty-seven on disk. On Windows run the `node` command, not `scripts/install-all.sh`.

```bash
git clone https://github.com/luzaio/aio.git
cd aio
node scripts/install-all.mjs
```

If the repo is already cloned, run `node scripts/install-all.mjs` from its root. When it finishes, come back and open only the one skill that fits.

## Pick one

If they invoked `/aio` with no task, ask what they want in their words. Do not open with skill filenames, and do not dump the catalog.

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
10. **grill-with-docs** — grill a plan and write the docs, ADRs, or glossary as you go.
11. **grill-me** — interview them until a plan or a design is sharp.
12. **grilling** — they say "grill" about a plan, a decision, or an idea.
13. **tdd** — tests first, red-green-refactor, or integration tests.
14. **diagnosing-bugs** — something is broken, throwing, or failing and they want it diagnosed.
15. **code-review** — review the changes since a commit, branch, or tag.
16. **improve-codebase-architecture** — scan a codebase for places to deepen the design.
17. **codebase-design** — design or improve one module's interface.
18. **domain-modeling** — the project's terms, a glossary, or an ADR.
19. **resolving-merge-conflicts** — a merge or rebase conflict is in progress.
20. **git-guardrails-claude-code** — block dangerous git commands in Claude Code.
21. **handoff** — pack this conversation so another agent can pick it up.
22. **triage** — move issues or external PRs through triage.
23. **to-spec** — turn this conversation into a spec on the issue tracker.
24. **to-tickets** — split a plan into tickets.
25. **to-questionnaire** — turn a decision into questions for someone else.
26. **wayfinder** — the work is too big for one session and needs a map of tickets.
27. **implement** — a spec or tickets already exist and they want that work built.
28. **prototype** — a throwaway prototype to test a state or a flow.
29. **research** — investigate a question and save the findings as markdown.
30. **teach** — they ask to be taught a concept.
31. **ask-matt** — they ask which of Matt Pocock's skills fits.
32. **setup-matt-pocock-skills** — they want his engineering-skills repo configured.
33. **caveman** — they ask for caveman mode or a terse answer.
34. **wizard** — a bash wizard for steps only a human can do.
35. **design-mobile-apps** — mobile screens in Sleek. It needs a Sleek API key.
36. **hyperframes-keyframes** — a zoom, reframe, or camera move in a HyperFrames video.
37. **hyperframes-audio** — mix audio that is already in a HyperFrames video.
38. **hyperframes-animation** — motion inside a HyperFrames video.
39. **hyperframes-creative** — look, type, palette, or narration of a HyperFrames video.
40. **hyperframes-core** — the HyperFrames composition itself.
41. **hyperframes-cli** — the HyperFrames command line: preview, render, publish.
42. **hyperframes-registry** — a ready-made HyperFrames block.
43. **media-use** — music, images, voice, or other media for a HyperFrames video.
44. **remotion-to-hyperframes** — bring Remotion, Lottie, or footage into HyperFrames.
45. **remotion-best-practices** — they are writing Remotion.
46. **product-launch-video** — a launch or promo video from a URL, script, or brief.
47. **faceless-explainer** — a faceless explainer from text.
48. **ai-avatar-video** — a talking-head or avatar video.
49. **ai-video-generation** — an AI-generated video.
50. **ai-image-generation** — an AI-generated image.
51. **general-video** — a custom HyperFrames video, and no narrower video rule fits.
52. **hyperframes** — any other HyperFrames video.
53. **reddit-automation** — find Reddit threads and draft replies.
54. **twitter-automation** — post or manage Twitter/X.
55. **lark-doc** — Lark or Feishu documents.
56. **lark-okr** — Lark or Feishu OKRs.
57. **lark-markdown** — Lark or Feishu markdown.
58. **lark-vc-agent** — Lark or Feishu video meetings.
59. **lark-apps** — Lark or Feishu apps.
60. **lark-note** — Lark or Feishu notes.
61. **microsoft-foundry** — Microsoft Foundry agents or models.
62. **azure-diagnostics** — debug an Azure production issue.
63. **azure-compute** — Azure VMs or scale sets.
64. **google-agents-cli-adk-code** — write an agent with Google ADK.
65. **google-agents-cli-deploy** — deploy an ADK agent.
66. **find-skills** — they explicitly ask to find a skill. This does not replace the aio installer.
67. **frontend-design** — any other new interface or visual direction.

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

If you do not find it, go back to "If one of the sixty-seven is missing" and run the full installer. Do not reconstruct the skill.
