# aio

Seu agente programa. A tela sai igual à de todo mundo.

Cola no Claude, no Cursor ou no Codex:

```text
Clona https://github.com/luzaio/aio e, na raiz do clone, roda node scripts/install-all.mjs. Mac, Linux e Windows. npx skills add luzaio/aio sozinho não termina. Segue a seção Install deste README até existirem as onze pastas.
```

Your agent can code. The screen still looks like everyone else's.

Paste this into Claude, Cursor, or Codex:

```text
Clone https://github.com/luzaio/aio and run node scripts/install-all.mjs from the clone root. Mac, Linux, and Windows. npx skills add luzaio/aio by itself is not finished. Follow the Install section of this README until all eleven folders exist.
```

Aí você descreve a tela. Uma abre. As outras nove ficam fechadas.

Then you describe the screen. One opens. The other nine stay closed.

## Aí você fala assim

| Você escreve | O que volta |
| --- | --- |
| Faz uma landing de café. Sem cara de template. | Uma página com direção própria |
| Deixa essa tela de iPhone menos genérica. | Hierarquia e gosto, inclusive no nativo |
| Escolhe paleta e fonte pra um app financeiro. | Cor, tipo e estilo decididos de propósito |
| Dá um polimento. Isso parece gerado. | A tela que você já tem, sem cara de IA |
| Faz o hover parecer caro. | O movimento e o peso do clique |
| Essa página de Next tá lenta. | Performance de React / Next.js |
| Esses componentes são um monte de boolean. | Uma API de componente limpa |
| Revisa a acessibilidade do cadastro. | UX e acessibilidade |
| Abre a página e tira print do hero. | O site de verdade, no navegador |
| Desenha a tela de configurações. | Uma interface nova, com ponto de vista |

## Then you say it like this

| You write | What comes back |
| --- | --- |
| Make a coffee landing page. No template look. | A page with its own direction |
| Make this iPhone screen less generic. | Hierarchy and taste, including native |
| Pick a palette and a typeface for a finance app. | Color, type, and style chosen on purpose |
| Polish this. It looks generated. | The screen you already have, without the AI look |
| Make the hover feel expensive. | The motion and the weight of the click |
| This Next page is slow. | React / Next.js performance |
| These components are a pile of booleans. | A clean component API |
| Review the signup for accessibility. | UX and accessibility |
| Open the page and screenshot the hero. | The real site, in the browser |
| Design the settings screen. | A new interface, with a point of view |

## O que entra

Dez, mais o aio. Contagem acumulada no [skills.sh](https://skills.sh/) em 31 de outubro de 2026. Nas últimas 24 horas a ordem é outra: [ui-taste](https://skills.sh/site/uizze.sh/ui-taste) fica na frente, com 20.3K. A lista continua estas dez. [design-mobile-apps](https://skills.sh/designed-by-ai/skills/design-mobile-apps) tem 1.1M acumulado e pede chave de API. [high-end-visual-design](https://skills.sh/leonxlnx/taste-skill/high-end-visual-design) (458.8K) e [redesign-existing-projects](https://skills.sh/leonxlnx/taste-skill/redesign-existing-projects) (458.7K) repetem a landing, que [design-taste-frontend](https://skills.sh/leonxlnx/taste-skill/design-taste-frontend) já cobre com 709.2K. [ios-design](https://skills.sh/site/uizze.sh/ios-design) (417.2K) repete o iOS, que ui-taste já cobre com 861.9K.

Ten, plus aio. All-time installs on [skills.sh](https://skills.sh/) on 31 October 2026. Over the last 24 hours the order changes: [ui-taste](https://skills.sh/site/uizze.sh/ui-taste) leads this list, at 20.3K. The list stays these ten. [design-mobile-apps](https://skills.sh/designed-by-ai/skills/design-mobile-apps) has 1.1M all-time and asks for an API key. [high-end-visual-design](https://skills.sh/leonxlnx/taste-skill/high-end-visual-design) (458.8K) and [redesign-existing-projects](https://skills.sh/leonxlnx/taste-skill/redesign-existing-projects) (458.7K) repeat the landing job [design-taste-frontend](https://skills.sh/leonxlnx/taste-skill/design-taste-frontend) already covers at 709.2K. [ios-design](https://skills.sh/site/uizze.sh/ios-design) (417.2K) repeats the iOS job ui-taste already covers at 861.9K.

| | acumulado / all-time | |
| --- | --- | --- |
| agent-browser | 1.3M | abrir a página de verdade · open the real page |
| frontend-design | 1.1M | interface nova · a new interface |
| ui-taste | 861.9K | gosto, web e iOS · taste, web and iOS |
| vercel-react-best-practices | 857.6K | React / Next rápido · fast React / Next |
| web-design-guidelines | 807.7K | acessibilidade · accessibility |
| design-taste-frontend | 709.2K | landing sem template · a landing that is not a template |
| vercel-composition-patterns | 429.7K | componente sem boolean · a component without boolean props |
| ui-ux-pro-max | 426.4K | paleta, fonte, estilo · palette, type, style |
| emil-design-eng | 404.4K | motion |
| impeccable | 375.3K | polir o que já existe · polish what is already there |

O aio não guarda o texto delas. Ele só escolhe qual abrir.

aio does not keep their text. It only chooses which one to open.

## Install

You are the coding agent. The user asked you to install this repository. Run the commands. Do not stop after printing them. `npx skills add luzaio/aio` copies only aio. That is not finished, even if the command exits 0.

The same command works on macOS, Linux, and Windows: `node scripts/install-all.mjs`. Do not run `scripts/install-all.sh` on Windows. That file is a bash shortcut for macOS and Linux.

Node.js 22.20 or later is required, because that is what the skills CLI requires. If the script rejects the installed Node.js, install a current Node.js and run the same command again. Do not switch to `npx skills add luzaio/aio`.

1. Clone `https://github.com/luzaio/aio` if this checkout is not already on disk.
2. From the repo root, run this in cmd, PowerShell, or bash:

```bash
node scripts/install-all.mjs
```

3. The script installs eleven skills for Cursor, Claude Code, and Codex: `aio` and the ten above. On Windows it copies files, including when the clone path contains spaces, so it does not need an administrator.
4. Finished means `SKILL.md` exists for all eleven names inside each of these directories: `~/.cursor/skills`, `~/.claude/skills`, and `~/.agents/skills` (Codex). The script exits non-zero if any file is missing. Do not tell the user it worked until that exit code is 0.
5. Tell the user to reload the app and describe the screen. aio opens one skill. It does not download the rest later.

## License

O aio está sob [MIT](LICENSE). As outras dez continuam na licença de quem as publicou.

aio is [MIT](LICENSE). The other ten stay under the license of whoever published them.
