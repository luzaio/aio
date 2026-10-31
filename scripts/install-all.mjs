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

function add(repo, skill) {
  console.log(`→ ${skill}`);
  const args = ["-y", "skills", "add", repo, "--skill", skill, "-g", "-y"];
  for (const agent of agents) args.push("-a", agent);
  if (windows) args.push("--copy");
  const result = spawnSync("npx", args, { stdio: "inherit", shell: windows });
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

const home = homedir();
console.log("Done. Installed for Cursor, Claude Code, and Codex.");
console.log(path.join(home, ".cursor", "skills"));
console.log("Reload the app and type /aio");
