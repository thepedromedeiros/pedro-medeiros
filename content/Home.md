---
pagina: Home
url: /
url_en: /en/
title: "Pedro Medeiros | Product Designer"
description: "Product Designer no Brasil. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
og_image: /assets/covers/projeto-01.svg
---

# Home

%% O bloco acima (frontmatter) é o que aparece na aba do navegador e quando o link é compartilhado:
title = título da aba, description = resumo do Google/WhatsApp, og_image = imagem do compartilhamento. %%

No desktop a home tem **duas colunas**:
- **Esquerda (fixa):** Cabeçalho, Introdução, Redes, Contato.
- **Direita (rola):** Atalhos de seção, Projetos, Cases, Insights, Empresas, Cemitério, Rodapé.

No celular vira uma coluna só, nessa mesma ordem. O site está só no tema escuro.

---

## Cabeçalho

> Onde aparece: topo da coluna da esquerda. Foto redonda, nome e cargo; à direita, as bandeiras de
> idioma (🇧🇷 / 🇺🇸). A bandeira do idioma da página fica colorida; a outra fica cinza.

- nome: Pedro Medeiros
- cargo: Product Designer
- foto: /assets/avatar-320.webp   %% recorte quadrado; o site gera o círculo. Para trocar, mande a foto nova %%
- idiomas: Português → / · English → /en/

---

## Introdução / Destaques

> Onde aparece: abaixo do cabeçalho. O **1º parágrafo é o título da home** (mais pesado, cor principal);
> os outros dois ficam em cinza. `==texto==` fica em laranja e `{Empresa}` vira um chip com logo.

1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, ==sed do eiusmod tempor incididunt.==
2. São mais de 00 anos em lorem ipsum, dolor sit amet e consectetur adipiscing, da ideia à interface em uso. Hoje sou product designer na {Empresa A}, onde ut enim ad minim veniam, quis nostrud exercitation.
3. Meu último cargo foi Lorem Designer na {Empresa B}, onde duis aute irure dolor in reprehenderit. Antes passei pela {Empresa C} e pela {Empresa D}. Excepteur sint occaecat cupidatat non proident.

### Marcas citadas

%% Cada {Nome} do texto acima usa a linha correspondente aqui. Link vazio = chip sem link. %%

| Nome | Logo | Link |
| --- | --- | --- |
| Empresa A | /assets/logos/empresa-a.svg | # |
| Empresa B | /assets/logos/empresa-b.svg | # |
| Empresa C | /assets/logos/empresa-c.svg |  |
| Empresa D | /assets/logos/empresa-d.svg |  |

---

## Redes

> Onde aparece: fileira de ícones abaixo da introdução. São só estas quatro.

| Rede | Link |
| --- | --- |
| LinkedIn | https://www.linkedin.com/in/placeholder |
| X (Twitter) | https://x.com/placeholder |
| Behance | https://www.behance.net/placeholder |
| E-mail | mailto:contato@placeholder.com |

---

## Contato

> Onde aparece: na base da coluna da esquerda. Título "Contato" e dois botões: o principal em laranja
> com texto branco (WhatsApp) e o secundário com contorno (LinkedIn).

- título: Contato
- botão principal:
  - texto: Chamar no WhatsApp
  - telefone: 5500000000000   %% DDI + DDD + número, só dígitos %%
  - mensagem inicial: Olá Pedro
- botão secundário:
  - texto: LinkedIn
  - link: https://www.linkedin.com/in/placeholder

---

## Atalhos de seção

> Onde aparece: fileira de botões em pílula no topo da coluna da direita (fica presa no topo enquanto
> rola). Cada um leva até a seção; o da seção que está na tela fica laranja.

| Botão | Leva para | Etiqueta |
| --- | --- | --- |
| Projetos | Projetos | — |
| Cases | Cases | — |
| Insights | Insights | em breve |
| Cemitério | Cemitério | — |

%% O texto do botão pode ser mais curto que o título da seção (ex.: "Projetos"). %%

---

## Projetos

> Onde aparece: primeiro bloco da coluna da direita. Cada linha tem uma **miniatura à esquerda**,
> nome e descrição no meio, e categoria + ano à direita (no celular, só miniatura, nome e descrição).

- título: Projetos – O que estou construindo
- botão do atalho: Projetos

| Miniatura | Nome | Descrição | Categoria | Ano | Link |
| --- | --- | --- | --- | --- | --- |
| /assets/covers/projeto-01.svg | Projeto 01 | Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod. | Categoria | 0000 | # |
| /assets/covers/projeto-02.svg | Projeto 02 | Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod. | Categoria | 0000 | # |

%% Miniatura: imagem horizontal 4:3 (ex.: 288×216). Ela é cortada para caber. %%

---

## Cases

> Onde aparece: abaixo de Projetos, no mesmo formato. As linhas com "Ver mais = sim" ficam escondidas
> até a pessoa clicar em **Ver mais**. Case 01 e Case 02 abrem as páginas de case.

- título: Cases
- botão: Ver mais

| Miniatura | Nome | Descrição | Categoria | Ano | Link | Ver mais |
| --- | --- | --- | --- | --- | --- | --- |
| /assets/covers/projeto-03.svg | Case 01 | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. | SaaS · IA | 0000 | /projetos/case-01/ | não |
| /assets/covers/projeto-04.svg | Case 02 | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. | Design System | 0000 | /projetos/case-02/ | não |
| /assets/covers/projeto-05.svg | Case 03 | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. | Site institucional | 0000 | # | sim |
| /assets/covers/projeto-06.svg | Case 04 | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. | Web & Mobile App | 0000 | # | sim |
| /assets/covers/projeto-07.svg | Case 05 | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. | Mobile App | 0000 | # | sim |
| /assets/covers/projeto-08.svg | Case 06 | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. | Portal | 0000 | # | não |

---

## Insights

> Onde aparece: abaixo de Cases. Hoje mostra a etiqueta **em breve** e uma caixa "Em breve". Quando
> houver insights, a caixa vira uma lista (data, título, descrição curta, link). Cada insight novo
> nasce do modelo `Insights/_Modelo - Insight.md`.

- título: Insights
- etiqueta: em breve
- estado: em breve   %% troque para "publicado" quando houver itens na tabela abaixo %%
- caixa "em breve":
  - título: Em breve
  - texto: Notas curtas sobre produto, design e o que venho aprendendo pelo caminho. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

| Data | Título | Descrição curta | Link |
| --- | --- | --- | --- |
|  |  |  |  |

---

## Empresas

> Onde aparece: grade de logos em cinza. No hover o logo acende e o nome aparece num balão.

- título: Empresas que conhecem meu trabalho

| Nome (balão) | Logo |
| --- | --- |
| Empresa A | /assets/logos/empresa-a.svg |
| Empresa B | /assets/logos/empresa-b.svg |
| Empresa C | /assets/logos/empresa-c.svg |
| Empresa D | /assets/logos/empresa-d.svg |
| Empresa E | /assets/logos/empresa-e.svg |
| Empresa F | /assets/logos/empresa-f.svg |
| Empresa G | /assets/logos/empresa-g.svg |
| Empresa H | /assets/logos/empresa-h.svg |
| Empresa I | /assets/logos/empresa-i.svg |
| Empresa J | /assets/logos/empresa-j.svg |
| Empresa K | /assets/logos/empresa-k.svg |
| Empresa L | /assets/logos/empresa-l.svg |
| Empresa M | /assets/logos/empresa-m.svg |
| Empresa N | /assets/logos/empresa-n.svg |
| Empresa O | /assets/logos/empresa-o.svg |
| Empresa P | /assets/logos/empresa-p.svg |
| Empresa Q | /assets/logos/empresa-q.svg |
| Empresa R | /assets/logos/empresa-r.svg |
| Empresa S | /assets/logos/empresa-s.svg |
| Empresa T | /assets/logos/empresa-t.svg |

%% A grade tem 10 colunas no desktop e 5 no celular; múltiplos de 10 fecham as linhas. %%

---

## Cemitério

> Onde aparece: última seção da coluna da direita. Coisas que você tentou construir e não deram certo:
> ícone pequeno arredondado, **nome riscado** e uma descrição curta em cinza. Uma frase curta abre a seção.

- título: Cemitério
- frase de abertura: Coisas que tentei construir e não deram certo. Lorem ipsum dolor sit amet. Descansem em paz.

| Ícone | Nome | Descrição curta |
| --- | --- | --- |
| /assets/cemiterio/item-01.svg | Projeto Alfa | Lorem ipsum dolor sit amet |
| /assets/cemiterio/item-02.svg | Projeto Beta | Consectetur adipiscing elit |
| /assets/cemiterio/item-03.svg | Projeto Gama | Sed do eiusmod tempor |
| /assets/cemiterio/item-04.svg | Projeto Delta | Ut enim ad minim veniam |
| /assets/cemiterio/item-05.svg | Projeto Épsilon | Quis nostrud exercitation |
| /assets/cemiterio/item-06.svg | Projeto Zeta | Duis aute irure dolor |

%% Ícone: quadrado (ex.: 72×72). A descrição cabe numa linha curta (até ~40 caracteres). %%

---

## GitHub (oculto)

> Onde aparece: hoje **não aparece**. Se ligar, entra na coluna da direita: gráfico de contribuições
> (dados de exemplo) e link do perfil.

- exibir: não
- título: GitHub
- contador: 000 contribuições no último ano
- link do perfil: https://github.com/
- texto do link: Ver perfil no GitHub

---

## Experiência (oculto)

> Onde aparece: hoje **não aparece**. Se ligar, fica abaixo de Cases: lista de cargos que abre ao clicar.

- exibir: não
- título: Experiência
- período (canto direito do título): 0000 — hoje

| Cargo | Empresa | Logo | Período | Descrição |
| --- | --- | --- | --- | --- |
| Lorem Designer | Empresa A | /assets/logos/empresa-a.svg | 0000 — hoje | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. |
| Lorem Designer | Empresa B | /assets/logos/empresa-b.svg | 0000 — 0000 | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. |
| Lorem Designer | Empresa C | /assets/logos/empresa-c.svg | 0000 — 0000 | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. |

---

## Rodapé

> Onde aparece: final da coluna da direita. Assinatura à esquerda e relógio ao vivo (horário de Brasília).

- assinatura: Pedro Medeiros © 2026
- relógio: horário de Brasília (America/Sao_Paulo), seguido de "no Brasil"
