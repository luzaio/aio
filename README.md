# aio

Seu agente programa. A tela sai igual à de todo mundo.

Você não instala nada. Cola isso no Claude, no Cursor ou no Codex:

```text
Instale https://github.com/luzaio/aio e siga a seção Install deste README.
```

Ele baixa as 10 skills de frontend que o pessoal já usa, mais a `aio`. Depois você só descreve a tela. A `aio` abre uma. As outras nove ficam fechadas.

Your agent can code. The UI still looks like everyone else's. Paste this:

```text
Install https://github.com/luzaio/aio and follow the Install section of this README.
```

Mac, Linux, and Windows.

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

## O que entra

Uma vez. As mais instaladas de interface no [skills.sh](https://skills.sh), em 31 de outubro de 2026.

| | | |
| --- | --- | --- |
| agent-browser | 1.3M | abrir a página de verdade |
| frontend-design | 1.1M | interface nova |
| ui-taste | 862K | gosto, web e iOS |
| vercel-react-best-practices | 858K | React / Next rápido |
| web-design-guidelines | 808K | acessibilidade |
| design-taste-frontend | 709K | landing sem template |
| vercel-composition-patterns | 430K | componente sem boolean |
| ui-ux-pro-max | 426K | paleta, fonte, estilo |
| emil-design-eng | 404K | motion |
| impeccable | 375K | polir o que já existe |

A `aio` não copia o texto delas. Ela lê o arquivo de quem fez.

## Install

You are the coding agent. The user asked you to install this repository. Run it. Do not stop at printing commands unless the shell fails.

1. Clone `https://github.com/luzaio/aio` if this checkout is not already on disk.
2. From the repo root, run `node scripts/install-all.mjs`.
3. That is the whole install. It puts eleven skills on disk: `aio` and the ten above. `npx skills add luzaio/aio` alone copies only the router. That is not finished.
4. Finished means all eleven folders exist. On Windows the script copies files, so it does not need an administrator.
5. Tell the user to reload the app and describe the screen. aio opens one skill. It does not download the rest later.

## License

The router is [MIT](LICENSE). The ten skills stay under their own licenses.
