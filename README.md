# Pedro Medeiros — portfólio

Site estático (HTML, CSS e JS puros, sem framework e sem build), hospedado na Vercel.
Cada `git push` na branch `main` publica uma nova versão automaticamente.

## Estrutura

```
index.html                 Home em português (pt-BR)
en/index.html              Home em inglês
playground/index.html      Playground (pt-BR)
en/playground/index.html   Playground (inglês)
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
| Cases | `<section … aria-labelledby="cases">` | Igual aos projetos. Itens com `data-extra hidden` só aparecem após "Ver mais" |
| Experiência (oculta) | `<section … aria-labelledby="experiencia" hidden>` | Edite os cargos e remova `hidden` para exibir |
| Empresas que conhecem meu trabalho | `<ul class="logo-grid">` | Um `<li data-name="…">` por empresa; troque os SVGs em `assets/logos/` (o `data-name` vira o tooltip) |
| GitHub (oculto) | `<section … aria-labelledby="github" hidden>` | Dados de exemplo. Remova `hidden` se decidir exibir e troque o link do perfil |
| Contato | `<section … aria-labelledby="contato">` | WhatsApp (principal): troque `phone=5500000000000` e o texto `text=…`. LinkedIn (secundário): troque a URL `linkedin.com/in/placeholder` |
| Rodapé | `<footer class="foot">` | Ano/nome. O relógio usa o fuso America/Sao_Paulo (em `main.js`) |
| Playground | `playground/index.html` e `en/playground/index.html` | Cada `<li class="piece">`: imagem (`src`), versão ampliada (`data-zoom`), largura/altura reais e legenda |
| Capas e peças | `assets/covers/`, `assets/playground/` | Substitua os SVGs provisórios por imagens reais (WebP/JPG) e atualize os caminhos |
| Cores, fontes e espaçamentos | `styles.css`, seção **1. Tokens** | Variáveis `--bg`, `--fg`, `--muted`… (claro em `:root`, escuro em `[data-theme="dark"]`) |

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
