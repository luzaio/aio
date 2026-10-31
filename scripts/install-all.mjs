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

console.log("Done. Eleven skills for Cursor, Claude Code, and Codex.");
for (const [, dir] of targets) console.log(dir);
console.log("Reload the app and describe the screen.");
