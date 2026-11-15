# DESIGN.md — Pedro Medeiros · portfólio

Especificação do design system do site. Todos os valores abaixo saem de `styles.css`, que é a
fonte da verdade. Se mudar algo lá, atualize aqui também.

- **Guia visual ao vivo:** `/design/` no site. Fica fora do menu, tem `noindex` e lê os tokens direto do CSS.
- **Princípio:** fundo quase preto, texto pequeno (15px) e o **laranja da marca** (nunca em botões) só onde há ação ou
  destaque. A hierarquia vem mais da cor (`--fg` → `--muted` → `--subtle`) do que do tamanho.
  Não há bordas pesadas: as superfícies se separam com anéis de 1px (`box-shadow: 0 0 0 1px`).
- **Tema:** por enquanto o site é **só escuro**. `theme-init.js` força `data-theme="dark"` e ignora
  preferências antigas salvas. O tema claro continua completo no CSS, mas não há botão para trocar.

---

## 1. Cores

Os tokens ficam em `:root, [data-theme="light"]` (claro) e `[data-theme="dark"]` (escuro, o ativo).
Qualquer elemento pode receber `data-theme` e mudar de tema localmente; o `/design/` usa isso para
mostrar os dois lado a lado.

### 1.1 Origem da paleta

| Cor | Hex | Uso aqui |
| --- | --- | --- |
| Stack Orange ([stackoverflow.design](https://stackoverflow.design/brand/color)) | `#FF5E00` | `--accent` (ação) e `--accent-text` no escuro |
| Off-black quente | `#121110` | `--bg` do escuro; demais superfícies e linhas são degraus no mesmo matiz |
| Off-White | `#F0EFEE` | `--fg` do escuro e `--panel` do claro |
| Off-Black | `#201C1D` | `--fg` do claro |

### 1.2 Tokens

Contraste entre parênteses = contra o `--bg` do tema (WCAG).

| Token | Escuro (ativo) | Claro (reserva) | Papel | Onde é usado |
| --- | --- | --- | --- | --- |
| `--bg` | `#121110` | `#faf9f8` | Fundo | Página, células de `.numbers`, fundo do `.section-nav` |
| `--panel` | `#1a1917` | `#f0efee` | Superfície de mídia | Miniaturas `.work-thumb`, `.media img`, `.tray`, `.soon-box` |
| `--chip` | `#22201e` | `#ffffff` | Superfície elevada | `.cta` secundário e pílulas inativas, ícone do `.brand`, `.grave-icon`, `.swatch-list li` |
| `--fg` | `#f0efee` (16.4:1) | `#201c1d` (16.0:1) | Texto primário | Título da home, nomes, títulos |
| `--muted` | `#aca69f` (7.8:1) | `#635c5a` (6.2:1) | Texto secundário | Parágrafos de apoio, `.work-desc`, `.block-title`, `.grave-name`, ícones |
| `--subtle` | `#7a746e` (4.1:1) | `#918987` (3.3:1) | Texto terciário | Ano, categoria, rodapé, `figcaption`, `.grave-desc`, `dt` |
| `--line` | `rgba(255,247,240,.08)` ≈ `#252322` | `rgba(32,28,29,.08)` ≈ `#E9E7E6` | Divisória | Anéis de imagens, avatar e chips; linhas do rodapé e dos cases |
| `--line-strong` | `rgba(255,247,240,.15)` ≈ `#363432` | `rgba(32,28,29,.14)` ≈ `#DBDAD9` | Contorno | Anel do `.cta` secundário e das pílulas inativas, sublinhado de links |
| `--hover` | `rgba(255,247,240,.05)` ≈ `#1E1C1B` | `rgba(32,28,29,.035)` ≈ `#F2F1F0` | Hover | Fundo da linha `.work`, `.ghost-btn`, `.cta`, bandeira ativa |
| `--accent` | `#ff5e00` | `#ff5e00` | **Ação / marca** | `::selection`, sublinhado no hover, foco. **Não é usado em botões** |
| `--accent-fg` | `#ffffff` | `#ffffff` | Texto sobre a ação | Texto da `::selection` |
| `--btn-bg` | `#eeece9` | `#201c1d` | **Botão principal (neutro)** | Fundo do `.cta--main` (WhatsApp) e da pílula ativa |
| `--btn-fg` | `#121110` (16.0:1 sobre `--btn-bg`) | `#faf9f8` (16.0:1 sobre `--btn-bg`) | Texto do botão principal | Texto e ícone do `.cta--main` e da pílula ativa |
| `--btn-hover` | `#ffffff` | `#3a3536` | Hover do botão principal | `.cta--main:hover`, pílula ativa no hover |
| `--accent-text` | `#ff5e00` (6.2:1) | `#b84400` (5.2:1) | Laranja como texto | `.hl`, `.case-lede em`, hover de `.work-name`, contador da `.step-list` |
| `--accent-soft` | `rgba(255,94,0,.14)` | `rgba(255,94,0,.10)` | Fundo laranja sutil | Reservado (sem uso atual) |
| `--focus` | `= --accent-text` | `= --accent-text` | Foco | `:focus-visible` (outline 2px) |

**Botões são neutros, nunca laranja.** O botão principal (WhatsApp) e a pílula de seção ativa usam
`--btn-bg` quase branco com texto e ícone escuros (`--btn-fg`, 16.0:1); o secundário (LinkedIn) e as
pílulas inativas são chips escuros (`--chip`) com anel `--line-strong`. O laranja continua como cor de
ação em todo o resto: destaques de texto, hover de links e nomes, seleção, foco.

**GitHub (seção oculta):** `--gh-0…4` escuro `#262422 #0e4429 #006d32 #26a641 #39d353`, claro `#ebedf0 #9be9a8 #40c463 #30a14e #216e39`.

Cores fixas fora dos tokens: `.invert-dark` (logos escuros) usa fundo `#e4e4e4` + `filter: invert(1)` no escuro.

---

## 2. Tipografia

### 2.1 Famílias

| Token | Pilha | Uso |
| --- | --- | --- |
| `--font-sans` | `"Manrope", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif` | Toda a interface e o texto |
| `--font-mono` | `"Geist Mono", ui-monospace, "SF Mono", Menlo, monospace` | Anos, contadores, etiquetas |

Carregadas do Google Fonts: Manrope 400/500/600/700 e Geist Mono 400. Não há fonte serifada:
destaques usam a própria Manrope na cor de ação (`.hl`).

**Base (`body`):** `font: 400 15px/1.65 var(--font-sans)`, `text-wrap: balance`, antialiasing ligado.

### 2.2 Escala

| Estilo | Família / peso | Tamanho / altura | Tracking | Onde |
| --- | --- | --- | --- | --- |
| Lede / título de página | Sans 500 | 22 / 1.35 (20 ≤ 640px no case) | −0.015em | `.page-intro h1`, `.case-lede` |
| Número | Sans 500 | 22 / 1.65 | −0.02em | `.numbers strong` |
| Título de seção (case) | Sans 500 | 17 / 1.4 | −0.01em | `.story h3` |
| **Título da home** | Sans **600** | 15 / 1.65 | −0.005em | `.hero p:first-child` (primeiras linhas da intro) |
| Nome em lista | Sans 600 | 15 / 1.65 | 0 | `.work-name`, `.grave-name`, `.insight strong`, `.soon-box strong` |
| Corpo forte | Sans 500 | 15 / 1.65 | 0 | `.top-name strong`, `.case-intro h1`, `.up-next strong` |
| Corpo | Sans 400 | 15 / 1.65 | 0 | `body`, `p`, `.hero` |
| Apoio | Sans 400 | 14 / 1.5–1.55 | 0 | `.work-desc`, `.grave-desc`, `.block-lede`, `.cta`, `.show-more`, `.facts dd`, `.soon-box` |
| Rótulo | Sans 400 | 13 / 1.65 | 0 | `.block-title`, `.work-tag`, pílulas `.section-nav .cta`, `.foot`, `figcaption`, `.story h2` |
| Mono | Mono 400 | 12 | +0.01em | `.mono`, `.work-year`, `.insight time`, contador da `.step-list` |
| Mono pequeno | Mono 400 | 11 / 1.4 | +0.02em | `.block-title small`, `.swatch-list span` |
| Etiqueta | Mono 500, caixa alta | 10 / 1.5 | +0.02em | `.soon-tag` ("em breve") |
| Destaque | herda | herda | herda | `.hl`, `.case-lede em`: cor `--accent-text` |

---

## 3. Espaçamento

Valores fixos em px:

| px | Uso principal |
| --- | --- |
| 2 | Gap da `.lang-switch`, `.work-meta` |
| 4 | Gap de `.socials`, `.logo-grid` e `.grave-list` |
| 6 | Gap das pílulas `.section-nav` e do `.back-link` |
| 8 | Gap de `.cta-row`, `.cta` |
| 10 | Padding da linha `.work` (e margem negativa −10 para alinhar a miniatura) |
| 12 | Gap de `.top`, `.grave-list li`; padding lateral das pílulas |
| 16 | Gap de `.work` (colunas), margem de parágrafo, `.block-title` margin-bottom, padding do topo do `.section-nav` |
| 20 | Padding lateral no mobile, padding da `.soon-box`, padding-top do rodapé |
| 24 | Padding lateral do `.shell` (coluna única) |
| 40 | `.hero` margin-top, `.media` margem, topo no mobile |
| 48 | Padding lateral da home em duas colunas, padding inferior |
| 56 | Padding superior da coluna direita (`.flow`); `.page-intro`/`.case-intro`; `.block` no mobile |
| 64 | Entre seções `.story` do case |
| 72 | Entre blocos (`.block`), topo da coluna esquerda, `gap` entre as colunas, `scroll-margin-top` das seções |
| 80 | `.up-next` margin-top |
| 96 | `.foot` margin-top |

---

## 4. Layout e breakpoints

| Item | Valor |
| --- | --- |
| Home (≥ 1024px) | `.shell--split`: grid `minmax(300px, var(--side)) minmax(0, var(--column))`, `--side: 380px`, `--column: 600px`, gap 72, padding `0 48px`. **Esquerda** `.side`: `position: sticky; top: 0; height: 100dvh`, padding `72px 0 48px`, contato preso embaixo. **Direita** `.flow`: padding `56px 0 48px`, começa pelas pílulas `.section-nav` (sticky no topo) |
| Home (< 1024px) | Uma coluna: cabeçalho, intro, redes, contato, seções, rodapé. **Pílulas de seção escondidas** |
| Cases e `/design/` | Coluna única de 600px (`.shell`, padding `72px 24px 48px`); mídia larga até `--wide: 880px` |
| Linha de projeto | `.work`: grid `72px 1fr auto`, miniatura 4:3. Mobile: `60px 1fr`, sem categoria/ano |
| Logos | `.logo-grid`: flex; células iguais 2:1 (artboard 114×57); altura = célula do grid antigo de 10 colunas (5 no mobile) |

| Media query | Efeito |
| --- | --- |
| `min-width: 1024px` | Home em duas colunas com a esquerda fixa |
| `max-width: 640px` | Mobile: padding `40px 20px 32px`, `.block` 56, `.work` sem meta, Cemitério em duas linhas |
| `max-width: 400px` | Avatar 36px |
| `pointer: coarse` | Área de toque +8px em `.show-more`, `.ghost-btn`, `.brand` |

---

## 5. Raios

| Raio | Onde |
| --- | --- |
| 2px | Células do GitHub |
| 4px | Anel de foco |
| 5px | Ícone do `.brand` |
| 6px | `.job-logo`, `.skip-link`, tooltip dos logos |
| 7px | Cor dentro da `.swatch-list` |
| 8px | `.ghost-btn` (redes, bandeiras) |
| 9px | `.grave-icon` |
| 10px | `.cta`, pílulas, `.work-thumb` |
| 12px | `.media img`, `.logo-grid li`, `.swatch-list li`, `.tray` no mobile |
| 14px | `.work` (fundo do hover), `.numbers`, `.soon-box` |
| 16px | `.tray` |
| 999px | `.soon-tag` |
| 50% | `.avatar` |

## 6. Bordas e linhas

| Padrão | Valor | Onde |
| --- | --- | --- |
| Anel | `box-shadow: 0 0 0 1px var(--line)` | `.avatar`, `.brand img`, `.work-thumb`, `.grave-icon`, `.media img`, `.soon-box` |
| Anel forte | `box-shadow: 0 0 0 1px var(--line-strong)` | `.cta`, pílulas |
| Divisória | `1px solid var(--line)` | `.foot`, `.facts`, `.step-list li`, `.up-next`, `.insight` |
| Riscado | `text-decoration: line-through 1.5px var(--subtle)` | `.grave-name` |
| Sublinhado | `underline 1px var(--line-strong)`, offset 3px → `--accent` no hover | `a.brand`, `.text-link` |
| Foco | `outline: 2px solid var(--focus); outline-offset: 3px` | `:focus-visible` |

## 7. Sombras

| Nome | Escuro | Claro | Onde |
| --- | --- | --- | --- |
| `--shadow` | `0 1px 2px rgba(0,0,0,.4), 0 16px 40px -8px rgba(0,0,0,.6)` | `0 1px 2px rgba(32,28,29,.04), 0 12px 32px -8px rgba(32,28,29,.18)` | Reservada (elevação) |
| Imagem na bandeja | `0 0 0 1px var(--line), 0 8px 24px -12px rgba(0,0,0,.18)` | igual | `.tray img` |

## 8. Movimento

| Item | Valor |
| --- | --- |
| Curva | `--ease-out: cubic-bezier(0.22, 1, 0.36, 1)` |
| Entrada | `.fade-in`: `rise 0.7s` (de `translateY(8px)` + `blur(4px)` + opacidade 0), atraso `--n × 70ms`. É a única animação de entrada |
| Hover | 200ms em cor/fundo; miniatura `scale(1.06)` em 400ms; setas 250ms; logos 300ms |
| Pílulas de seção | `scrollIntoView({ behavior: "smooth" })`; a seção que cruza 30% da altura da tela fica ativa (`aria-current`) |
| Press | `.cta:active { transform: scale(.98) }` 150ms |
| Acessibilidade | `prefers-reduced-motion: reduce` zera animações/transições e a rolagem fica instantânea |

Não existem mais o preview flutuante, o loader de "planta" nem o Inspetor.

---

## 9. Componentes e estados

| Componente | Classe | Anatomia | Estados |
| --- | --- | --- | --- |
| Cabeçalho | `.top` | Home: `.top-id` (avatar 44px a partir de `/assets/avatar-160/320.webp` + nome/cargo). Cases: `.back-link`. Direita: `.lang-switch` | — |
| Idiomas | `.lang-switch a` | Bandeiras BR e US (22px) em `.ghost-btn` | Atual (`aria-current="true"`): colorida, fundo `--hover`; outra: cinza, opacidade .4 (hover .8) |
| Botão fantasma | `.ghost-btn` | 32×32, raio 8, ícone 16px | hover: `--fg` sobre `--hover` |
| Redes | `.socials` | X, Behance, e-mail (LinkedIn só no Contato) | igual ao botão fantasma |
| CTA | `.cta` / `.cta--main` | 36px, padding 0 14, raio 10, ícone 15 | secundário: `--chip` + anel forte, hover `--hover`; principal: fundo `--btn-bg` (quase branco), texto/ícone `--btn-fg` (escuro), hover `--btn-hover`; active .98. Sem laranja |
| Pílulas de seção | `.section-nav .cta` | 32px, 13px; Projetos, Cases + `.soon-tag`, Insights + `.soon-tag` (Cemitério oculto) | inativa = CTA secundário; ativa = CTA principal (`--btn-bg`/`--btn-fg`). Escondidas abaixo de 1024px |
| Etiqueta | `.soon-tag` | Mono 10 caixa alta, neutra: cor herdada a 70% e fundo `currentColor` 14% | — |
| Linha de projeto/case | `.work` | `.work-thumb` (72px, 4:3) + `.work-name` (`.soon-tag` opcional) / `.work-desc` + `.work-meta` (categoria, ano). Pode ser `<a>` ou `<div>` | hover: fundo `--hover`; se for link, nome laranja e miniatura amplia |
| Ver mais | `.show-more` | Texto 14 `--muted` | hover: `--accent-text`; revela `[data-extra]` |
| Insights / Cases (vazio) | `.soon-box` | "Em breve" + texto | — |
| Insight (futuro) | `.insight-list > li > a.insight` | `time` (mono) + título + descrição | hover: título laranja |
| Cemitério | `.grave-list li` | `.grave-icon` 36px raio 9 + `s.grave-name` riscado + `.grave-desc` | — |
| Grade de logos | `.logo-grid li` | Células iguais 2:1, altura do grid de 10 colunas; o SVG preenche a caixa (já traz o recuo); logo cinza a .5; `data-name` vira tooltip | hover: logo a 1, escala 1.06 |
| Rodapé | `.foot` | Nome © + relógio `[data-clock]` (America/Sao_Paulo) | — |
| Case | `.case-intro`, `.facts`, `.media`, `.tray`, `.story`, `.step-list`, `.numbers`, `.swatch-list`, `.up-next` | Ver seção 16 do CSS | `.up-next` hover: seta laranja +3px |

---

## 10. Como manter

1. Mude o valor em `styles.css`.
2. Confira em `/design/` (os dois temas lado a lado).
3. Atualize a tabela correspondente aqui.
4. Token novo: declare nos dois temas e acrescente a linha em `design/index.html` (via gerador).
