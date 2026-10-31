import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { homedir, platform } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const windows = platform() === "win32";

const [major, minor] = process.versions.node.split(".").map(Number);
if (major < 22 || (major === 22 && minor < 20)) {
  console.error(`Need Node.js 22.20 or later. This machine has ${process.versions.node}.`);
  console.error("Install a current Node.js and run this script again. npx skills add luzaio/aio is not a substitute.");
  process.exit(1);
}

const skills = [
  ["vercel-labs/agent-browser", "agent-browser"],
  ["anthropics/skills", "frontend-design"],
  ["uizze.sh", "ui-taste"],
  ["vercel-labs/agent-skills", "vercel-react-best-practices"],
  ["vercel-labs/agent-skills", "web-design-guidelines"],
  ["leonxlnx/taste-skill", "design-taste-frontend"],
  ["vercel-labs/agent-skills", "vercel-composition-patterns"],
  ["nextlevelbuilder/ui-ux-pro-max-skill", "ui-ux-pro-max"],
  ["emilkowalski/skills", "emil-design-eng"],
  ["pbakaus/impeccable", "impeccable"],
  ["vercel-labs/skills", "find-skills"],
  ["mattpocock/skills", "grill-me"],
  ["heygen-com/hyperframes", "hyperframes-cli"],
  ["heygen-com/hyperframes", "hyperframes"],
  ["mattpocock/skills", "grill-with-docs"],
  ["heygen-com/hyperframes", "media-use"],
  ["mattpocock/skills", "improve-codebase-architecture"],
  ["flowkit-labs/skills", "reddit-automation"],
  ["mattpocock/skills", "tdd"],
  ["designed-by-ai/skills", "design-mobile-apps"],
  ["heygen-com/hyperframes", "hyperframes-registry"],
  ["mattpocock/skills", "setup-matt-pocock-skills"],
  ["mattpocock/skills", "handoff"],
  ["mattpocock/skills", "grilling"],
  ["mattpocock/skills", "triage"],
  ["mattpocock/skills", "prototype"],
  ["heygen-com/hyperframes", "hyperframes-animation"],
  ["heygen-com/hyperframes", "hyperframes-core"],
  ["heygen-com/hyperframes", "hyperframes-creative"],
  ["101-skills/superpowers", "ai-video-generation"],
  ["mattpocock/skills", "domain-modeling"],
  ["101-skills/superpowers", "ai-image-generation"],
  ["101-skills/superpowers", "twitter-automation"],
  ["101-skills/superpowers", "ai-avatar-video"],
  ["mattpocock/skills", "teach"],
  ["mattpocock/skills", "codebase-design"],
  ["mattpocock/skills", "diagnosing-bugs"],
  ["open.feishu.cn", "lark-doc"],
  ["mattpocock/skills", "code-review"],
  ["open.feishu.cn", "lark-okr"],
  ["mattpocock/skills", "implement"],
  ["open.feishu.cn", "lark-markdown"],
  ["mattpocock/skills", "ask-matt"],
  ["open.feishu.cn", "lark-vc-agent"],
  ["heygen-com/hyperframes", "hyperframes-keyframes"],
  ["mattpocock/skills", "wayfinder"],
  ["mattpocock/skills", "to-spec"],
  ["open.feishu.cn", "lark-apps"],
  ["mattpocock/skills", "research"],
  ["mattpocock/skills", "to-tickets"],
  ["remotion-dev/skills", "remotion-best-practices"],
  ["heygen-com/hyperframes", "hyperframes-audio"],
  ["heygen-com/hyperframes", "general-video"],
  ["open.feishu.cn", "lark-note"],
  ["juliusbrussee/caveman", "caveman"],
  ["microsoft/azure-skills", "microsoft-foundry"],
  ["mattpocock/skills", "wizard"],
  ["microsoft/azure-skills", "azure-diagnostics"],
  ["mattpocock/skills", "resolving-merge-conflicts"],
  ["heygen-com/hyperframes", "remotion-to-hyperframes"],
  ["heygen-com/hyperframes", "product-launch-video"],
  ["google/agents-cli", "google-agents-cli-adk-code"],
  ["google/agents-cli", "google-agents-cli-deploy"],
  ["microsoft/azure-skills", "azure-compute"],
  ["mattpocock/skills", "to-questionnaire"],
  ["heygen-com/hyperframes", "faceless-explainer"],
  ["mattpocock/skills", "git-guardrails-claude-code"],
];

const agents = ["cursor", "claude-code", "codex"];

function quoteCmd(arg) {
  if (!windows) return arg;
  const escaped = String(arg).replaceAll("%", "%%").replaceAll('"', '""');
  if (escaped === "" || /[\s"&|<>^%]/.test(arg)) return `"${escaped}"`;
  return escaped;
}

function add(repo, skill) {
  console.log(`→ ${skill}`);
  const args = ["-y", "skills", "add", repo, "--skill", skill, "-g", "-y"];
  for (const agent of agents) args.push("-a", agent);
  if (windows) args.push("--copy");
  const file = windows ? "npx.cmd" : "npx";
  const result = spawnSync(file, args.map(quoteCmd), { stdio: "inherit", shell: windows });
  if (result.error) {
    console.error(result.error.message);
    process.exit(1);
  }
  if (result.status !== 0) process.exit(result.status ?? 1);
}

const aioRepo = process.env.AIO_REPO;
const localSkill = path.join(root, "skills", "aio", "SKILL.md");

if (aioRepo) add(aioRepo, "aio");
else if (existsSync(localSkill)) add(root, "aio");
else {
  console.error("Run this from a clone of aio, or set AIO_REPO=you/aio.");
  process.exit(1);
}

for (const [repo, skill] of skills) add(repo, skill);

const names = ["aio", ...skills.map(([, skill]) => skill)];
const home = homedir();
const targets = [
  ["Cursor", path.join(home, ".cursor", "skills")],
  ["Claude Code", path.join(home, ".claude", "skills")],
  ["Codex", path.join(home, ".agents", "skills")],
];

const missing = [];
for (const [label, dir] of targets) {
  for (const name of names) {
    const file = path.join(dir, name, "SKILL.md");
    if (!existsSync(file)) missing.push(`${label}: ${file}`);
  }
}

if (missing.length) {
  console.error("Install incomplete. Missing:");
  for (const file of missing) console.error(file);
  process.exit(1);
}

console.log("Done. Sixty-eight skills for Cursor, Claude Code, and Codex.");
for (const [, dir] of targets) console.log(dir);
console.log("Reload the app and say what you want.");
