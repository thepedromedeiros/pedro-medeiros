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

No desktop a home tem **duas colunas**. A da esquerda fica fixa (Cabeçalho, Introdução, Redes, Contato)
e a da direita rola (Projetos, Cases, Empresas, Rodapé). No celular vira uma coluna só, nessa mesma ordem.

---

## Cabeçalho

> Onde aparece: topo da coluna da esquerda. Foto redonda, nome e cargo; à direita, o link Playground,
> a bandeira que troca o idioma e o botão de tema claro/escuro.

- nome: Pedro Medeiros
- cargo: Product Designer
- foto: /assets/avatar.svg   %% provisória; mande sua foto (quadrada, 88×88 ou maior) %%
- menu:
  - Playground → /playground/

---

## Introdução / Destaques

> Onde aparece: logo abaixo do cabeçalho, na coluna da esquerda. São três parágrafos: o primeiro
> em cor principal e os outros em cinza. `==texto==` fica em laranja e `{Empresa}` vira um chip com logo.

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

> Onde aparece: fileira de ícones abaixo da introdução.

| Rede | Link |
| --- | --- |
| LinkedIn | https://www.linkedin.com/in/placeholder |
| Dribbble | # |
| Instagram | # |
| Behance | # |
| E-mail | mailto:contato@exemplo.com |

%% Apague a linha da rede que não usar. "#" = ainda sem link. %%

---

## Contato

> Onde aparece: na base da coluna da esquerda. Título "Contato" e dois botões: o principal em laranja
> (WhatsApp) e o secundário com contorno (LinkedIn).

- título: Contato
- botão principal:
  - texto: Chamar no WhatsApp
  - telefone: 5500000000000   %% DDI + DDD + número, só dígitos %%
  - mensagem inicial: Olá Pedro
- botão secundário:
  - texto: LinkedIn
  - link: https://www.linkedin.com/in/placeholder

---

## Projetos

> Onde aparece: primeiro bloco da coluna da direita. Cada linha mostra ano, nome, descrição e
> categoria; ao passar o mouse, a capa aparece flutuando junto do cursor.

- título: Projetos

| Ano | Nome | Descrição | Categoria | Capa | Link |
| --- | --- | --- | --- | --- | --- |
| 0000 | Projeto 01 | Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod. | Categoria | /assets/covers/projeto-01.svg | # |
| 0000 | Projeto 02 | Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod. | Categoria | /assets/covers/projeto-02.svg | # |

---

## Cases

> Onde aparece: abaixo de Projetos, no mesmo formato. As linhas marcadas "Ver mais = sim" ficam escondidas
> até a pessoa clicar em **Ver mais**. Case 01 e Case 02 abrem as páginas de case.

- título: Cases
- botão: Ver mais

| Ano | Nome | Descrição | Categoria | Capa | Link | Ver mais |
| --- | --- | --- | --- | --- | --- | --- |
| 0000 | Case 01 | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. | SaaS · IA | /assets/covers/projeto-03.svg | /projetos/case-01/ | não |
| 0000 | Case 02 | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. | Design System | /assets/covers/projeto-04.svg | /projetos/case-02/ | não |
| 0000 | Case 03 | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. | Site institucional | /assets/covers/projeto-05.svg | # | sim |
| 0000 | Case 04 | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. | Web & Mobile App | /assets/covers/projeto-06.svg | # | sim |
| 0000 | Case 05 | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. | Mobile App | /assets/covers/projeto-07.svg | # | sim |
| 0000 | Case 06 | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. | Portal | /assets/covers/projeto-08.svg | # | não |

---

## Empresas

> Onde aparece: grade de logos em cinza na coluna da direita. No hover o logo ganha cor e o nome
> aparece num balão.

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

## GitHub (oculto)

> Onde aparece: hoje **não aparece** (seção escondida). Se ligar, fica abaixo de Empresas: um gráfico de
> contribuições (dados de exemplo) e o link do perfil.

- exibir: não
- título: GitHub
- contador: 000 contribuições no último ano
- link do perfil: https://github.com/
- texto do link: Ver perfil no GitHub

---

## Experiência (oculto)

> Onde aparece: hoje **não aparece**. Se ligar, fica abaixo de Cases: lista de cargos que abre ao clicar,
> mostrando o texto do cargo.

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

> Onde aparece: final da coluna da direita. Assinatura à esquerda e relógio ao vivo (horário de Brasília)
> à direita. No celular, o link Playground também aparece aqui.

- assinatura: Pedro Medeiros © 2026
- relógio: horário de Brasília (America/Sao_Paulo), seguido de "Brasil"
