# Pedro Medeiros — portfólio

Site estático (HTML, CSS e JS puros, sem framework e sem build), hospedado na Vercel.
Cada `git push` na branch `main` publica uma nova versão automaticamente.

## Estrutura

```
index.html                 Home em português (pt-BR)
en/index.html              Home em inglês
playground/index.html      Playground (pt-BR)
en/playground/index.html   Playground (inglês)
projetos/case-01/          Página do Case 01 (pt-BR) — modelo de case longo
projetos/case-02/          Página do Case 02 (pt-BR) — modelo de case curto e visual
en/projetos/case-0X/       Mesmas páginas em inglês
design/                    Guia visual do design system (fora do menu, noindex)
DESIGN.md                  Especificação do design system (tokens, tipografia, componentes)
styles.css                 Todo o visual: tokens de cor, tipografia, layout, tema escuro
main.js                    Interações (tema, relógio, preview, Ver mais, Inspetor, loader, playground)
theme-init.js              Roda antes da pintura: aplica o tema salvo e liga o loader
assets/                    Imagens (todas provisórias)
```

> Tudo que está em **lorem ipsum**, `0000`, `00`, "Empresa A…T", "Projeto 01", "Case 01" etc. é
> conteúdo provisório. Procure por esses textos para saber onde editar. Lembre de editar
> **as duas versões** (`index.html` e `en/index.html`).

## Onde editar cada bloco

| Bloco | Arquivo / trecho | O que trocar |
| --- | --- | --- |
| Título da aba, descrição e imagem de compartilhamento | `<head>` de cada HTML (`<title>`, `meta description`, `og:*`) | Textos e `og:image` |
| Foto | `assets/avatar.svg` (comentário `FOTO` no cabeçalho) | Coloque sua foto (ex.: `assets/avatar.webp`) e atualize o `src`. Troque também `assets/favicon.svg` |
| Nome e cargo | `<header class="top">` | "Pedro Medeiros" / "Product Designer" |
| Texto principal | `<section class="hero">` (comentário `INTRO`) | Os 3 parágrafos. Trechos em itálico serif usam `<span class="serif">…</span>` |
| Empresas citadas no texto | `.brand` dentro da intro | Nome, link e logo (`assets/logos/…`). Logos escuros: mantenha `class="invert-dark"` para clarear no tema escuro |
| Redes sociais | `<ul class="socials">` (comentário `REDES`) | `href` de LinkedIn, Dribbble, Instagram, Behance e e-mail (remova os que não usar) |
| Projetos | `<section … aria-labelledby="projetos">` | Um `<li>` por projeto: ano (`work-year`), nome (`work-name`), descrição (`work-desc`), categoria (`work-tag`), link (`href`) e capa (`data-cover` + `<img>` da miniatura). Atualize o contador `<small>` |
| Cases | `<section … aria-labelledby="cases">` | Igual aos projetos. Itens com `data-extra hidden` só aparecem após "Ver mais". Case 01 e Case 02 já apontam para `/projetos/case-01/` e `/projetos/case-02/` (no inglês, `/en/projetos/…`) |
| Experiência (oculta) | `<section … aria-labelledby="experiencia" hidden>` | Edite os cargos e remova `hidden` para exibir |
| Empresas que conhecem meu trabalho | `<ul class="logo-grid">` | Um `<li data-name="…">` por empresa; troque os SVGs em `assets/logos/` (o `data-name` vira o tooltip) |
| GitHub (oculto) | `<section … aria-labelledby="github" hidden>` | Dados de exemplo. Remova `hidden` se decidir exibir e troque o link do perfil |
| Contato | `<section … aria-labelledby="contato">` | WhatsApp (principal): troque `phone=5500000000000` e o texto `text=…`. LinkedIn (secundário): troque a URL `linkedin.com/in/placeholder` |
| Rodapé | `<footer class="foot">` | Ano/nome. O relógio usa o fuso America/Sao_Paulo (em `main.js`) |
| Playground | `playground/index.html` e `en/playground/index.html` | Cada `<li class="piece">`: imagem (`src`), versão ampliada (`data-zoom`), largura/altura reais e legenda |
| Capas e peças | `assets/covers/`, `assets/playground/` | Substitua os SVGs provisórios por imagens reais (WebP/JPG) e atualize os caminhos |
| Cores, fontes e espaçamentos | `styles.css`, seção **1. Tokens** | Variáveis `--bg`, `--fg`, `--muted`… (claro em `:root, [data-theme="light"]`, escuro em `[data-theme="dark"]`). Referência completa em `DESIGN.md` e `/design/` |

## Páginas de case

Arquivos: `projetos/case-01/index.html`, `projetos/case-02/index.html` e as cópias em `en/projetos/…`
(edite as duas línguas). O conteúdo fica todo dentro de `<main>` (comentário `CONTEÚDO DO CASE`).

| Bloco | Classe | O que trocar |
| --- | --- | --- |
| Título, frase de abertura e resumo | `<section class="case-intro">` | `<h1>` (nome), `.case-lede` (o `<em>` vira itálico serifado), `.case-sub` |
| Ano / Escopo / Papel / Links | `<dl class="facts">` | Um `<div><dt>…</dt><dd>…</dd></div>` por item (3 colunas; 2 no mobile) |
| Imagem larga | `<figure class="media media--wide">` | `<img src>` + `<figcaption>` opcional. Largura até 880px (`--wide`) |
| Grade de imagens | `<div class="tray cols-2">` ou `cols-3` dentro do `figure` | Imagens dentro de uma bandeja cinza. `cols-3` funciona bem para telas de celular |
| Seção de texto | `<section class="story">` | `<h2>` = rótulo pequeno, `<h3>` = título, `<p>` = texto; `<strong>` destaca em `--fg` |
| Etapas | `<ol class="step-list">` | Um `<li>` por etapa; a numeração 01, 02… é automática |
| Números | `<div class="numbers">` | 3 blocos `<strong>` (valor) + `<span>` (descrição) |
| Paleta da marca (Case 02) | `<ul class="swatch-list">` | `style="background:#…"` e o hex no `<span>` |
| Capa em vídeo (Case 02) | comentário `CAPA` | Troque o `<img>` pelo `<video … data-autoplay>` indicado no comentário |
| Próximo case | `<a class="up-next">` | Link, nome e descrição curta |
| Imagens | `assets/cases/case-01/`, `assets/cases/case-02/` | SVGs cinza provisórios: `cover` (1536×864), `tela-0X` (1600×1000), `mobile-0X` (750×1624) |

Para criar o Case 03: copie a pasta `projetos/case-01/` (e a de `en/`), troque os textos e imagens,
aponte o `href` da linha na home e ajuste o `up-next` dos cases vizinhos.

## Design system

- **`DESIGN.md`**: todos os valores (cores claro/escuro, tipografia, espaçamentos, raios, sombras,
  movimento, componentes e estados), tirados de `styles.css`.
- **`/design/`**: guia visual com amostras ao vivo. Fora do menu e com `noindex`. Lê os tokens de
  `styles.css` diretamente, então mudou o token, mudou o guia. Arquivos próprios: `design/design.css`
  e `design/design.js`. Se criar um token novo, acrescente a linha correspondente em `design/index.html`.

## Recursos

- **Tema claro/escuro** com persistência (`localStorage`) e sem flash do tema errado (`theme-init.js`).
- **Idioma**: bandeira no cabeçalho alterna entre `/` e `/en/`.
- **Relógio** local (horário de Brasília) no rodapé.
- **Preview da capa** que segue o cursor nos projetos/cases (só com mouse). No toque aparece a miniatura.
- **Ver mais** revela os cases extras.
- **Inspetor** (botão `</>` no canto inferior esquerdo, só desktop): camadas de layout, espaçamentos, cores e componentes.
- **Loader de construção**: na primeira visita a página é desenhada como planta antes do conteúdo
  (adicione `?build` na URL para ver de novo). Tem fallback se o script atrasar.
- **Playground** com diálogo que amplia a peça.
- **Vídeos de capa** (opcional): use `<video data-autoplay muted loop playsinline poster="…">`.
- Respeita `prefers-reduced-motion`.
- **Analytics**: desligado. Há um espaço comentado em `main.js` e no `<head>`.

## Rodar localmente

Como os caminhos são absolutos (`/styles.css`), use um servidor local na raiz:

```bash
npx serve .
# ou
python3 -m http.server 8000
```
