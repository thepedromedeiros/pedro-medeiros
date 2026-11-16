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
- idiomas: Português → / · English → /en/

%% Foto: a atual segue em /assets/avatar-160.webp e avatar-320.webp (recorte quadrado; o site gera o círculo). %%

---

## Introdução / Destaques

> Onde aparece: abaixo do cabeçalho. O **1º parágrafo é o título da home** (mais pesado, cor principal);
> os outros dois ficam em cinza. `==texto==` fica em laranja e `{Empresa}` vira um chip com logo.

1. Conecto ==necessidades== das pessoas e ==objetivos== do negócio por meio do design.
2. Há **8 anos** atuo no mercado de design, com experiências em comunicação visual, marketing e construção de produtos digitais. Atualmente, faço parte do time da {Ecx Pay}, trabalhando na evolução dos produtos **XMulti**, **XCorp** e **XFleet**, em diferentes frentes que envolvem estrutura, design system, interfaces e UX web e mobile.
3. Construo produtos e ajudo a desenvolver processos em equipe com a AI aplicada no dia a dia.

### Marcas citadas

%% Cada {Nome} do texto acima usa a linha correspondente aqui. Link vazio = chip sem link. %%

| Nome    | Logo                           | Link                   |
| ------- | ------------------------------ | ---------------------- |
| Ecx Pay | /assets/logos/icon-ecx-pay.svg | https://ecxpay.com.br/ |

---

## Redes

> Onde aparece: fileira de ícones abaixo da introdução. São só estas três; o LinkedIn
> fica apenas no botão grande de Contato (sem ícone duplicado).

| Rede | Link |
| --- | --- |
| X (Twitter) | https://x.com/themedeiross |
| Behance | https://www.behance.net/pedromedeiros1 |
| E-mail | mailto:pedr.henrique16medeiros@gmail.com |

---

## Contato

> Onde aparece: na base da coluna da esquerda. Título "Contato" e dois botões: o principal claro
> (quase branco, texto escuro) para o WhatsApp e o secundário escuro com contorno (LinkedIn).

- título: Contato
- botão principal:
  - texto: Chamar no WhatsApp
  - telefone: 5531971361175   %% DDI + DDD + número, só dígitos: (31) 9 7136-1175 %%
  - mensagem inicial: Olá Pedro, vim pelo seu portfólio e quero conversar sobre um projeto.
  - mensagem inicial (inglês): Hi Pedro, I came across your portfolio and would like to talk about a project.
- botão secundário:
  - texto: LinkedIn
  - link: https://www.linkedin.com/in/thepedromedeiros/

---

## Atalhos de seção

> Onde aparece: fileira de botões em pílula no topo da coluna da direita (fica presa no topo enquanto
> rola). Cada um leva até a seção; o da seção que está na tela fica no estilo do botão principal.

| Botão | Leva para | Etiqueta |
| --- | --- | --- |
| Projetos | Projetos | — |
| Cases | Cases | em breve |
| Insights | Insights | em breve |

%% Cemitério fica de fora das pílulas enquanto a seção estiver oculta. %%

---

## Projetos

> Onde aparece: primeiro bloco da coluna da direita. Cada linha tem uma **miniatura à esquerda**,
> nome e descrição no meio, e categoria + ano à direita (no celular, só miniatura, nome e descrição).
> A etiqueta **building** fica ao lado do nome. Sem link por enquanto (as linhas não são clicáveis).

- título: Projetos – O que estou construindo
- botão do atalho: Projetos

| Miniatura                     | Nome   | Descrição                                                                                                      | Categoria | Ano  | Link | Etiqueta |
| ----------------------------- | ------ | -------------------------------------------------------------------------------------------------------------- | --------- | ---- | ---- | -------- |
| /assets/covers/projeto-01.svg | Voally | Viaje mais, procure menos. Encontre excursões e bate-voltas tudo num lugar só.                                | SaaS · IA | 2026 | —    | building |
| /assets/covers/projeto-02.svg | Planly  | Organize seus eventos em família sem dor de cabeça. Um organizador de eventos familiares, facilitando a vida de quem fica responsável. | SaaS · IA          | 2026 | —    | building |
| /assets/covers/bustime.png    | BusTime | Os próximos ônibus direto no pulso, em tempo real. App para relógios Garmin, com previsão ao vivo e fallback para a programação.      | Garmin · Connect IQ | 2026 | —    | building |

%% Miniatura: imagem horizontal 4:3 (ex.: 288×216). Ela é cortada para caber. A do BusTime é uma captura real; as outras seguem como placeholder. %%

---

## Cases

> Onde aparece: abaixo de Projetos. Enquanto não houver cases reais, a seção fica no estado
> **em breve** (etiqueta na pílula e uma caixa "Em breve"), no mesmo formato do Insights.
> As páginas `/projetos/case-01/` e `/projetos/case-02/` existem no site, mas não entram na lista.

- título: Cases
- etiqueta: em breve
- estado: em breve   %% troque para "publicado" quando houver itens na tabela abaixo %%
- caixa "em breve":
  - título: Em breve
  - texto: Estudos de caso sobre produtos que desenhei e o processo por trás deles.
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
  - texto: Notas curtas sobre produto, design e o que venho aprendendo pelo caminho.

| Data | Título | Descrição curta | Link |
| --- | --- | --- | --- |
|  |  |  |  |

---

## Empresas

> Onde aparece: fileira de logos em cinza. No hover o logo acende e o nome aparece num balão.
> Os quatro SVGs compartilham o mesmo artboard 114×57 (já com o recuo). No site, cada um
> entra numa célula igual, 2:1, com a altura do grid original.

- título: Empresas que conhecem meu trabalho

| Nome (balão)               | Logo                          |
| -------------------------- | ----------------------------- |
| Ecx Pay                    | /assets/logos/company-1.svg   |
| Gibb                       | /assets/logos/company-2.svg   |
| FacilitaPay (Atual Attrus) | /assets/logos/company-3.svg   |
| Sixtema Marketing          | /assets/logos/company-4.svg   |

---

## Cemitério (oculto)

> Onde aparece: hoje **não aparece**. Se ligar, entra no fim da coluna da direita, com pílula no topo:
> ícone pequeno arredondado, **nome riscado** e uma descrição curta em cinza. Uma frase curta abre a seção.

- exibir: não
- título: Cemitério
- frase de abertura: Coisas que tentei construir e não deram certo. Lorem ipsum dolor sit amet. Descansem em paz.

| Ícone                         | Nome            | Descrição curta             |
| ----------------------------- | --------------- | --------------------------- |
| /assets/cemiterio/item-01.svg | Visione quadros | Quadros personalizados      |
| /assets/cemiterio/item-02.svg | Projeto Beta    | Consectetur adipiscing elit |
| /assets/cemiterio/item-03.svg | Projeto Gama    | Sed do eiusmod tempor       |
| /assets/cemiterio/item-04.svg | Projeto Delta   | Ut enim ad minim veniam     |
| /assets/cemiterio/item-05.svg | Projeto Épsilon | Quis nostrud exercitation   |
| /assets/cemiterio/item-06.svg | Projeto Zeta    | Duis aute irure dolor       |

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
