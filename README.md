# Pedro Medeiros — portfólio

Site estático (HTML, CSS e JS puros, sem framework e sem build), hospedado na Vercel.
Cada `git push` na branch `main` publica uma nova versão automaticamente; outras branches geram só um Preview.

## Estrutura

```
index.html                 Home em português (pt-BR)
en/index.html              Home em inglês
projetos/case-01/          Case 01 (pt-BR) — modelo de case longo
projetos/case-02/          Case 02 (pt-BR) — modelo de case curto e visual
en/projetos/case-0X/       Mesmos cases em inglês
design/                    Guia visual do design system (fora do menu, noindex)
DESIGN.md                  Especificação do design system
content/                   Cópia dos .md do cofre do Obsidian (conteúdo editável; veja content/00 - Leia-me.md)
styles.css                 Todo o visual: tokens, tipografia, layout
main.js                    Relógio, "Ver mais", vídeos de capa, pílulas de seção (rolagem + seção ativa)
theme-init.js              Força o tema escuro antes da pintura
assets/                    Avatar, favicon, miniaturas, logos e imagens dos cases
```

> Tudo que está em **lorem ipsum**, `0000`, `00`, "Empresa A…T", "Projeto 01", "Case 01", "Projeto Alfa" etc.
> é provisório. Edite **as duas versões** (`index.html` e `en/index.html`).

## Onde editar cada bloco da home

A home tem duas colunas no desktop: a **esquerda** (`<div class="side">`) fica fixa e a **direita**
(`<div class="flow">`) rola. No celular vira uma coluna.

| Bloco | Trecho | O que trocar |
| --- | --- | --- |
| Título da aba e compartilhamento | `<head>` (`<title>`, `meta description`, `og:*`) | Textos e `og:image` |
| Foto | `<picture>` no cabeçalho | `assets/avatar-160.webp/.jpg` e `avatar-320.webp/.jpg` (recorte quadrado; o círculo é feito no CSS). Favicon: `assets/favicon-64.png` e `apple-touch-icon.png` |
| Nome e cargo | `.top-name` | "Pedro Medeiros" / "Product Designer" |
| Idiomas | `<nav class="lang-switch">` | Bandeiras BR/US; a do idioma da página tem `aria-current="true"` (fica colorida) |
| Título e intro | `<section class="hero">` | 3 parágrafos; o 1º é o título (peso 600). Destaque em laranja: `<span class="hl">…</span>` |
| Empresas na intro | `.brand` | Nome, link e logo (`assets/logos/…`); mantenha `class="invert-dark"` em logos escuros |
| Redes | `<ul class="socials">` | LinkedIn, X, Behance e e-mail (`href`) |
| Contato | `.contact-block` | WhatsApp: `phone=5500000000000` e `text=…`; LinkedIn: URL |
| Atalhos de seção | `<nav class="section-nav">` | Pílulas com `href="#id-da-seção"`; o `soon-tag` marca "em breve" |
| Projetos | `<section id="projetos">` | Um `<li>` por projeto: miniatura (`.work-thumb img`), nome, descrição, categoria (`work-tag`), ano (`work-year`), link. Atualize o contador `<small>` |
| Cases | `<section id="cases">` | Igual. Itens com `data-extra hidden` aparecem após "Ver mais". Case 01/02 apontam para `/projetos/case-0X/` |
| Insights | `<section id="insights">` | Hoje "Em breve" (`.soon-box`). O comentário no HTML mostra a estrutura de item (`.insight-list`) |
| Empresas | `<ul class="logo-grid">` | Um `<li data-name="…">` por empresa (o nome vira tooltip) |
| Cemitério | `<section id="cemiterio">` | Frase de abertura (`.block-lede`) e um `<li>` por item: ícone (`assets/cemiterio/`), nome riscado (`<s class="grave-name">`), descrição |
| Experiência / GitHub | seções com `hidden` | Ocultas; remova `hidden` para exibir |
| Rodapé | `<footer class="foot">` | Nome/ano; relógio em America/Sao_Paulo |
| Cores, fontes, espaços | `styles.css`, seção 1 | Ver `DESIGN.md` e `/design/` |

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

## Marca, tema e fonte

- **Cor de ação:** laranja `#FF5E00` (`--accent`), texto branco no botão principal. Laranja em texto: `--accent-text`.
- **Tema:** só escuro por enquanto (`--bg: #050505`). O tema claro segue no CSS; para reativar, volte a ler
  `localStorage` em `theme-init.js` e devolva um botão de troca.
- **Fonte:** Manrope (`--font-sans`) + Geist Mono para números e etiquetas.

## Conteúdo no Obsidian

Os textos também existem em Markdown no cofre do Obsidian do Pedro, com cópia em `content/`:
`Home.md`, `Cases/Case 01.md`, `Cases/Case 02.md`, os modelos `Cases/_Modelo - Case*.md` e
`Insights/_Modelo - Insight.md`. O site **não** lê esses arquivos sozinho: quando o `Home.md` muda,
as alterações são aplicadas no HTML (pt e en) e publicadas.

## Design system

- **`DESIGN.md`**: todos os valores (cores claro/escuro, tipografia, espaçamentos, raios, sombras,
  movimento, componentes e estados), tirados de `styles.css`.
- **`/design/`**: guia visual com amostras ao vivo. Fora do menu e com `noindex`. Lê os tokens de
  `styles.css` diretamente, então mudou o token, mudou o guia. Arquivos próprios: `design/design.css`
  e `design/design.js`. Se criar um token novo, acrescente a linha correspondente em `design/index.html`.

## Recursos

- **Idioma**: bandeiras no cabeçalho alternam entre `/` e `/en/` (e entre as versões de cada case).
- **Pílulas de seção** no topo da coluna direita: rolagem suave e seção atual no estilo do botão principal (branco). Escondidas no celular/tablet (< 1024px). Botões não usam laranja.
- **Relógio** local (horário de Brasília) no rodapé.
- **Ver mais** revela os cases extras.
- **Vídeos de capa** (opcional): `<video data-autoplay muted loop playsinline poster="…">`.
- Entrada suave dos blocos (`.fade-in`); respeita `prefers-reduced-motion`.
- **Analytics**: desligado (espaço comentado em `main.js` e no `<head>`).

## Rodar localmente

Como os caminhos são absolutos (`/styles.css`), use um servidor local na raiz:

```bash
npx serve .
# ou
python3 -m http.server 8000
```
