# DESIGN.md — Pedro Medeiros · portfólio

Especificação do design system do site. Todos os valores abaixo saem de `styles.css`, que é a
fonte da verdade. Se mudar algo lá, atualize aqui também.

- **Guia visual ao vivo:** `/design/` no site (ex.: `https://<domínio>/design/`). Fica fora do menu, tem `noindex` e lê os tokens direto do CSS.
- **Princípio:** é uma coluna única de 600px, com texto pequeno (15px). A hierarquia vem mais da **cor**
  (`--fg` → `--muted` → `--subtle`) do que do tamanho. Não há bordas pesadas: as superfícies se
  separam com anéis de 1px (`box-shadow: 0 0 0 1px`) e linhas translúcidas.

---

## 1. Tokens de cor

O tema claro é declarado em `:root, [data-theme="light"]` e o escuro em `[data-theme="dark"]`.
O tema fica salvo em `localStorage` (`pm-theme`) e é aplicado antes da pintura por `theme-init.js`.
Como os seletores não dependem de `:root`, qualquer elemento pode receber `data-theme` e mudar de
tema localmente. O `/design/` usa isso para mostrar os dois temas lado a lado.

### 1.1 Cores do site

| Token | Claro | Escuro | Papel semântico | Onde é usado |
| --- | --- | --- | --- | --- |
| `--bg` | `#fafaf9` | `#111111` | Fundo | Fundo da página, células de `.numbers`, texto do `.cta--main` |
| `--fg` | `#171717` | `#ededed` | Texto primário | Corpo forte, títulos, `.work-name`, fundo do `.cta--main`, seleção de texto |
| `--muted` | `#6f6f6f` | `#a1a1a1` | Texto secundário | Parágrafos de apoio, `.menu a`, `.work-desc`, `.block-title`, `.story p`, ícones |
| `--subtle` | `#a3a3a3` | `#666666` | Texto terciário | `.work-year`, `.work-tag`, rodapé, `figcaption`, `dt`, rótulos mono |
| `--line` | `rgba(0,0,0,.08)` ≈ `#E6E6E5` | `rgba(255,255,255,.08)` ≈ `#242424` | Divisória | Linhas entre itens, rodapé, `.facts`, `.up-next`, anéis de imagens e avatar |
| `--line-strong` | `rgba(0,0,0,.14)` ≈ `#D7D7D6` | `rgba(255,255,255,.16)` ≈ `#373737` | Contorno | Anel do `.cta`, sublinhado de links, menus do Inspetor |
| `--hover` | `rgba(0,0,0,.035)` ≈ `#F1F1F0` | `rgba(255,255,255,.04)` ≈ `#1B1B1B` | Estado hover | Fundo de `.menu a`, `.ghost-btn`, `.cta` e logos no hover |
| `--chip` | `#ffffff` | `#1b1b1b` | Superfície elevada | `.cta`, ícone de `.brand`, `.swatch-list li`, menus e tooltips |
| `--panel` | `#f0f0ee` | `#191919` | Superfície de mídia | Fundo de `.media img`, `.tray`, `.work-thumb`, `.cursor-cover`, `.zoom` |
| `--accent` | `#0a7aff` | `#0a7aff` (herdado) | Foco | `:focus-visible` (outline de 2px) |

> O valor ≈ hex é a cor resultante da transparência sobre o `--bg` do tema. O `/design/` calcula isso em tempo real.

Há também duas cores fixas que não são tokens:

- `[data-theme="dark"] .invert-dark` usa fundo `#e4e4e4` + `filter: invert(1)` para clarear logos escuros.
- `.zoom::backdrop` usa `rgba(0,0,0,.55)` + `blur(6px)`.

### 1.2 Cores do Inspetor (ferramenta de desenvolvimento)

| Token | Claro | Escuro | Papel |
| --- | --- | --- | --- |
| `--ins-grid` | `rgba(8,145,178,.32)` | `rgba(34,211,238,.28)` | Contornos de layout e guias da coluna |
| `--ins-grid-strong` | `#0891b2` | `#22d3ee` | Elemento em hover, botão ativo e traços do loader |
| `--ins-pad` | `#e5488a` | `#f472b6` | Padding |
| `--ins-margin` | `#ea6c0a` | `#fb923c` | Margin |
| `--ins-gap` | `#059669` | `#34d399` | Gap |
| `--ins-comp` | `#9747ff` | `#b386ff` | Rótulos de componentes |
| `--ins-color` | `#d97706` | `#fbbf24` | Camada de cores |

O tooltip do Inspetor (`.ins-tip`) usa fundo `#171717` no claro e `#262626` no escuro, texto `#fff`, chave `#a3a3a3` e destaque `#67e8f9`.

### 1.3 GitHub (seção oculta)

| Nível | Claro | Escuro |
| --- | --- | --- |
| `--gh-0` | `#ebedf0` | `#1f2328` |
| `--gh-1` | `#9be9a8` | `#0e4429` |
| `--gh-2` | `#40c463` | `#006d32` |
| `--gh-3` | `#30a14e` | `#26a641` |
| `--gh-4` | `#216e39` | `#39d353` |

---

## 2. Tipografia

### 2.1 Famílias

Carregadas do Google Fonts: Geist 400/500/600, Geist Mono 400 e Instrument Serif itálico.

| Token | Pilha | Uso |
| --- | --- | --- |
| `--font-sans` | `"Geist", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif` | Toda a interface e o texto |
| `--font-mono` | `"Geist Mono", ui-monospace, "SF Mono", Menlo, monospace` | Anos, números, códigos, rótulos técnicos |
| `--font-serif` | `"Instrument Serif", ui-serif, Georgia, serif` | Só em itálico, como acento dentro de frases |

**Pesos:** 400 (regular) e 500 (medium). O 600 é carregado, mas hoje não é usado.

**Base (`body`):** `font: 400 15px/1.65 var(--font-sans)` com `text-wrap: balance`, antialiasing ligado e `text-rendering: optimizeLegibility`.

### 2.2 Escala tipográfica

| Estilo | Família / peso | Tamanho / altura de linha | Tracking | Onde |
| --- | --- | --- | --- | --- |
| Lede / título de página | Sans 500 | 22px / 1.35 (20px ≤ 640px no case) | −0.015em | `.page-intro h1`, `.case-lede` |
| Número | Sans 500 | 22px / 1.65 | −0.02em | `.numbers strong` |
| Título de seção | Sans 500 | 17px / 1.4 | −0.01em | `.story h3` |
| Corpo | Sans 400 | 15px / 1.65 | 0 | `body`, `p`, `.hero` |
| Corpo forte | Sans 500 | 15px / 1.65 | 0 | `.work-name`, `.top-name strong`, `.case-intro h1`, `.job-role`, `.up-next strong` |
| Apoio | Sans 400 | 14px / 1.55 (`.job-body` 1.6) | 0 | `.work-desc`, `.menu a`, `.cta`, `.show-more`, `.facts dd`, `.up-next span`, `.foot-menu` (mobile) |
| Rótulo | Sans 400 | 13px / 1.65 (`.numbers span` 1.45; `.swatch-list li` 1.4) | 0 | `.block-title`, `.work-tag`, `.foot`, `figcaption`, `.facts dt`, `.story h2`, `.up-next small`, `.skip-link`, `.ins-menu` |
| Pequeno | Sans 400 | 12px | 0 | `.piece-label`, tooltip dos logos, `.ins-off` |
| Mono | Mono 400 | 12px | +0.01em | `.mono`, `.work-year`, contador da `.step-list` |
| Mono pequeno | Mono 400 | 11px / 1.4 | +0.02em (`.block-title small`) | `.block-title small`, `.swatch-list span`, `.gh-months`, `.ins-*`, `.ds code` |
| Micro | Mono 400 (`.cmp` em Sans 500) | 10px / 14–15px | +0.02em no loader | Rótulos do Inspetor (`.sp`, `.tok`, `.cmp`) e do loader (`.blueprint`) |
| Acento serifado | Serif itálico 400 | 1.18em / 1 (1.12em dentro de títulos) | −0.005em | `.serif`, `.page-intro h1 .serif`, `.case-lede em` |

Outros detalhes tipográficos:

- `.foot-clock` usa `font-variant-numeric: tabular-nums`.
- `.top-name` tem `line-height: 1.35`.
- O contador da `.step-list` é `decimal-leading-zero` (01, 02…).

---

## 3. Espaçamento

Não há tokens de espaçamento. Os valores são fixos em px e seguem esta escala:

| px | Uso principal |
| --- | --- |
| 2 | Gap do `.menu`, `margin-top` de `.work-desc`, `.facts dd` |
| 4 | Gap de `.top-tools`, `.socials` e `.logo-grid`; `.menu a` padding 4 8; `.ins-menu` padding |
| 5 | Gap do `.brand` |
| 6 | Gap do `.back-link`; tooltip dos logos a 6px |
| 8 | Gap de `.cta-row` e `.swatch-list`; padding da amostra; `.cta` gap |
| 10 | `figcaption` margin-top; `.piece-label` offset |
| 12 | Gap de `.top`, `.top-id`, `.pieces` e `.step-list`; `.case-lede` margin-top; `.show-more` margin-top |
| 14 | Padding vertical de `.work` (14 0); `.cta` padding lateral; `.story h3` margin-bottom; `.tray` padding no mobile |
| 16 | Margem de parágrafo, `.block-title` margin-bottom, gap de `.work` e `.facts`, padding de `.numbers div` e `.up-next` |
| 20 | `.step-list` / `.swatch-list` margin-top; padding-top do rodapé; padding lateral no mobile |
| 24 | Padding lateral do `.shell`; margem de `.numbers` |
| 28 | Padding do `.tray` |
| 32 | `.facts` margin-top; padding inferior no mobile |
| 40 | `.hero` margin-top; `.media` margin vertical; topo do `.shell` no mobile; `.case-intro` no mobile |
| 48 | Padding inferior do `.shell` |
| 56 | `.page-intro` / `.case-intro` margin-top; `.block` no mobile |
| 64 | Distância entre seções `.story` |
| 72 | `.block` margin-top; padding superior do `.shell` |
| 80 | `.up-next` margin-top |
| 96 | `.foot` margin-top |

---

## 4. Layout, grid e breakpoints

| Item | Valor |
| --- | --- |
| Coluna de texto | `--column: 600px`. O `.shell` tem `max-width: calc(var(--column) + 48px)`, margem `0 auto` e padding `72px 24px 48px` |
| Mídia larga (cases) | `--wide: 880px`. `.media--wide` usa `width: min(var(--wide), calc(100vw - 40px))` e centraliza com margem negativa |
| Guia `/design/` | `.ds-shell` usa `max-width: calc(var(--wide) + 48px)` |
| Linha de projeto | `.work`: grid `52px 1fr auto`, gap `0 16px`. Sem hover (≥ 641px): `88px 52px 1fr auto` com miniatura 4:3. Mobile: `76px 1fr auto`, gap `0 14px`, tag oculta |
| Logos | `.logo-grid`: 10 colunas, gap 4, margem `0 -6px`, células 1:1. Mobile: 5 colunas |
| Playground | `.pieces`: 2 colunas, gap 12 (8 no mobile) |
| Case | `.facts` 3 colunas (2 no mobile); `.cols-2` 2 colunas (1 no mobile); `.cols-3` 3 colunas (gap 8 no mobile); `.numbers` 3 colunas (1 no mobile) |
| Preview flutuante | `.cursor-cover`: 300px, 16:10 |

**Breakpoints**

| Media query | Efeito |
| --- | --- |
| `max-width: 640px` | Mobile: padding `40px 20px 32px`, `.block` 56, menu do topo escondido (vai para o rodapé), grids reduzidos, `.case-lede` 20px, `.tray` com padding 14 e raio 12 |
| `max-width: 400px` | Avatar de 36px |
| `max-width: 899px` ou `hover: none` | Inspetor escondido |
| `hover: none` | Sem preview flutuante; miniaturas visíveis; rótulos do playground sempre visíveis |
| `pointer: coarse` | Área de toque +8px em `.show-more`, `.ghost-btn`, `.brand` e `.foot-menu a` |
| `max-width: 760px` (só `/design/`) | Grade do guia vira 1 coluna |

---

## 5. Raios

| Raio | Onde |
| --- | --- |
| 2px | Células do GitHub, overlays `.cmp` e `.tok`, `.ins-key i` |
| 3px | Rótulos do Inspetor, caixas do loader |
| 4px | Anel de foco, amostra `.ins-palette .sw` |
| 5px | Ícone do `.brand` |
| 6px | `.job-logo`, `.skip-link`, tooltip dos logos, `.ins-tip`, `.ins-ico` |
| 7px | Cor dentro de `.swatch-list` |
| 8px | `.ghost-btn`, `.menu a`, `.work-thumb`, botões do menu do Inspetor |
| 10px | `.cta` |
| 12px | `.media img/video`, `.cursor-cover`, `.logo-grid li`, `.ins-menu`, `.ins-palette`, `.swatch-list li`, `.tray` no mobile |
| 14px | `.piece button`, `.numbers` |
| 16px | `.tray`, `.zoom` |
| 999px | Pílula (`.piece-label`) |
| 50% | `.avatar`, `.bp-box.is-circle` |

## 6. Bordas e linhas

| Padrão | Valor | Onde |
| --- | --- | --- |
| Divisória | `border-top: 1px solid var(--line)` | `.rows > li + li`, `.foot`, `.facts`, `.step-list li`, `.up-next` (`border-block`) |
| Anel | `box-shadow: 0 0 0 1px var(--line)` | `.avatar`, `.brand img`, `.job-logo`, `.work-thumb`, `.piece button`, `.media img`, `.swatch-list li`, `.numbers` |
| Anel forte | `box-shadow: 0 0 0 1px var(--line-strong)` | `.cta`, `.ins-menu`, `.ins-palette` |
| Anel interno | `inset 0 0 0 1px var(--line)` | `.swatch-list i` |
| Sublinhado | `text-decoration: underline 1px var(--line-strong)`, `text-underline-offset: 3px` → `currentColor` no hover | `a.brand`, `.text-link`, `.gh-foot a` |
| Foco | `outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px` | `:focus-visible` (na `.piece` o offset é 2px) |
| Guia | `1px dashed var(--ins-grid)` | Coluna do Inspetor e do loader |
| Planta | `1px dotted var(--ins-grid-strong)` | `.bp-box`, `.bp-line` |

Os anéis com `box-shadow` são o padrão porque não ocupam espaço no layout.

## 7. Sombras

| Nome | Claro | Escuro | Onde |
| --- | --- | --- | --- |
| `--shadow` | `0 1px 2px rgba(0,0,0,.04), 0 12px 32px -8px rgba(0,0,0,.18)` | `0 1px 2px rgba(0,0,0,.3), 0 16px 40px -8px rgba(0,0,0,.7)` | `.cursor-cover`, `.zoom`, `.ins-menu`, `.ins-palette` |
| Imagem na bandeja | `0 0 0 1px var(--line), 0 8px 24px -12px rgba(0,0,0,.18)` | (igual) | `.tray img` |
| Tooltip | `0 6px 20px -6px rgba(0,0,0,.4)` | `0 0 0 1px rgba(255,255,255,.08), 0 6px 20px -6px rgba(0,0,0,.6)` | `.ins-tip` |

Superfícies translúcidas: `color-mix(in srgb, var(--bg) 82%, transparent)` com `backdrop-filter: blur(8px)` (botão do Inspetor), ou `var(--chip) 92%` com `blur(12px)` (menus) e `88%` com `blur(8px)` (`.piece-label`).

## 8. Movimento

| Item | Valor |
| --- | --- |
| Curva padrão | `--ease-out: cubic-bezier(0.22, 1, 0.36, 1)` |
| Entrada (reveal) | `.fade-in`: `rise 0.7s var(--ease-out) both`, atraso `calc(var(--n) * 70ms)`. Vai de `opacity 0; translateY(8px); blur(4px)` até o estado final. Use `style="--n:0,1,2…"` para escalonar |
| Cores e hover | 200ms (`color`, `background-color`, `text-decoration-color`) |
| Press | `.cta:active { transform: scale(.98) }` em 150ms |
| Opacidade das linhas | `.work` 250ms. Na lista, as linhas sem hover vão para `opacity .45` |
| Setas | `.back-link svg` `translateX(-2px)` e `.up-next svg` `translateX(3px)` em 250ms |
| Preview flutuante | opacidade 250ms, transform 350ms. Vai de `scale(.92) rotate(-2deg)` para `scale(1)` |
| `+` da experiência | `rotate(45deg)` em 300ms |
| Logos | 300ms com `scale(1.06)` no hover; tooltip 150ms (opacidade) e 200ms (posição) |
| Playground | imagem `scale(1.015)` em 600ms; `.zoom` com `zoom-pop` 350ms (de `opacity 0; scale .96`) |
| Inspetor | menu 250ms ao abrir e 150ms ao fechar; painéis com `rise` 350ms |
| Loader | caixas `bp-draw` 340ms, linhas 380ms, coluna 400ms, cortina 700ms `cubic-bezier(0.65, 0, 0.35, 1)`, saída com 400ms `ease-in-out` e conteúdo `--n × 60ms` |
| Tema | `body` com transição de `background-color` e `color` em 300ms |
| Acessibilidade | `prefers-reduced-motion: reduce` zera todas as animações e transições e esconde o loader |

---

## 9. Componentes e estados

| Componente | Classe | Anatomia | Estados |
| --- | --- | --- | --- |
| Cabeçalho | `.top` | `.top-id` (`.avatar` 44px + `.top-name`) ou `.back-link` nos cases e no guia; `.top-tools` (`.menu`, `.lang-btn`, `.theme-btn`) | Mobile: o menu some |
| Botão fantasma | `.ghost-btn` | 32×32, raio 8, ícone 16px, cor `--muted` | hover: `--fg` sobre `--hover`; `.lang-btn` em cinza com opacidade .7, colorido no hover |
| Alternar tema | `.theme-btn` | Ícone lua no tema claro e sol no escuro | `[data-theme]` na raiz |
| Menu | `.menu a` | 14px, padding 4 8, raio 8 | hover: `--fg` + `--hover`; `aria-current="page"`: `--fg` |
| Voltar | `.back-link` | Seta 14px + texto, gap 6, `--muted` | hover: `--fg`, seta −2px |
| Chip de marca | `.brand` | Ícone 18px (raio 5, anel) + nome | Link: sublinhado `--line-strong` que vira `currentColor`; `.invert-dark` no escuro |
| Linha de projeto | `.work` | ano mono, nome 500, descrição 14 `--muted`, tag 13 `--subtle`; `data-cover` | hover: as outras linhas vão para .45 e o preview segue o cursor; sem hover aparece a miniatura |
| Ver mais | `.show-more` | Texto 14 `--muted` | hover/foco: `--fg`; revela `[data-extra]` |
| Experiência | `.job` (`details`) | logo 20, cargo, empresa, período, `+` | `[open]`: `+` gira 45° |
| Grade de logos | `.logo-grid li` | Logo a 62%, cinza, opacidade .5; `data-name` vira tooltip | hover: fundo `--hover`, logo colorido a 1 com escala 1.06, tooltip sobe |
| CTA | `.cta` / `.cta--main` | 36px de altura, padding 0 14, raio 10, ícone 15 | secundário: `--chip` + anel forte, hover `--hover`; principal: fundo `--fg`/texto `--bg`, hover opacidade .88; active scale .98 |
| Rodapé | `.foot` | Nome ©, `.foot-menu` (só mobile), relógio `[data-clock]` | link hover: `--fg` |
| Peça do playground | `.piece` | Botão com imagem, `.piece-label` em pílula | hover: imagem 1.015 e rótulo aparece; clique abre o `.zoom` |
| Zoom | `dialog.zoom` | Imagem, `.zoom-close` | aberto: `zoom-pop`, backdrop com blur, scroll travado |
| Intro do case | `.case-intro` | `h1` 15/500, `.case-lede` 22, `.case-sub` `--muted`, `.facts` | — |
| Meta | `.facts` | `dl` em 3 colunas, `dt` 13 `--subtle`, `dd` 14 | — |
| Mídia | `.media` / `.media--wide` | `img`/`video` raio 12, anel, fundo `--panel`; `figcaption` 13 centralizada | `video[data-autoplay]` toca quando entra na tela |
| Bandeja | `.tray` + `.cols-2`/`.cols-3` | Fundo `--panel`, padding 28, raio 16 | Mobile: padding 14, raio 12 |
| Seção de texto | `.story` | `h2` rótulo 13, `h3` 17/500, `p` `--muted`, `strong` `--fg`, `.note` | — |
| Etapas | `.step-list` | Contador mono 01…, divisória entre itens | — |
| Números | `.numbers` | 3 células com divisória de 1px (gap sobre `--line`), raio 14 | Mobile: empilhado |
| Amostras | `.swatch-list` | Cartão `--chip` raio 12, cor de 56px raio 7, hex mono 11 | — |
| Próximo case | `.up-next` | Rótulo 13, nome 500, descrição 14, seta | hover: seta `--fg` +3px |
| Inspetor | `.inspect-btn`, `.ins-menu` | Botão `</>` fixo e menu com 4 camadas (Layout, Espaçamento, Cores, Componentes) | `[data-active]`, `aria-expanded`, `aria-checked`; só desktop |
| Loader | `[data-build]`, `.blueprint` | Planta com caixas, medidas e cortina | Primeira visita da sessão (`pm-built`) ou `?build` |
| Skip link | `.skip-link` | Pílula `--fg`/`--bg` | foco: aparece no topo |

---

## 10. Como manter

1. Mude o valor em `styles.css`, na seção 1 (Tokens) ou no componente.
2. Abra `/design/` e confira os dois temas lado a lado.
3. Atualize a tabela correspondente deste arquivo.
4. Token novo: declare nos dois blocos de tema e acrescente a linha em `design/index.html`
   (lista de cores), para o guia mostrar a amostra.
