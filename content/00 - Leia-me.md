---
tipo: guia
site: Pedro Medeiros · portfólio
atualizado: 2026-11-15
---

# Leia-me: como este cofre vira o site

Este cofre guarda **o conteúdo** do portfólio, separado do código. Você edita aqui, no Obsidian, e o
assistente leva as mudanças para o site.

## O que é cada arquivo

| Arquivo | Página do site | O que tem |
| --- | --- | --- |
| `Home.md` | `/` (e `/en/` em inglês) | Todo o texto da página principal, separado por seção |
| `Cases/Case 01.md` | `/projetos/case-01/` (e `/en/projetos/case-01/`) | Conteúdo atual do Case 01 (modelo de case longo) |
| `Cases/Case 02.md` | `/projetos/case-02/` (e `/en/projetos/case-02/`) | Conteúdo atual do Case 02 (modelo de case curto e visual) |
| `Cases/_Modelo - Case.md` | — | Modelo vazio, com a estrutura completa do Case 01. Duplique para um case novo |
| `Cases/_Modelo - Case (variação 02).md` | — | Modelo vazio, com a estrutura do Case 02 (mais imagens, paleta da marca) |

Hoje todo o conteúdo do site é **provisório** (lorem ipsum, `0000`, "Empresa A", "Case 01", imagens cinza).
Ele está aqui igualzinho ao site, para você saber onde cada coisa aparece antes de trocar.

## Como editar

1. Abra o arquivo e procure a seção pelo título (`## Introdução`, `## Projetos`…). Cada seção começa com
   uma nota `> Onde aparece:` explicando o lugar na página.
2. Troque **só os valores**: o texto depois de `campo:`, os itens das listas e as linhas das tabelas.
   Não precisa mexer na estrutura (títulos, nomes dos campos).
3. Para tirar algo, apague o item. Para acrescentar, copie um item igual e altere.
4. Peça ao assistente: "apliquei mudanças no Home.md". Ele atualiza o site (português e inglês), roda
   as verificações e publica numa branch de teste antes de ir ao ar.

> **Importante:** as edições no `Home.md` são aplicadas no site pelo assistente. O site não lê este
> cofre sozinho; nada muda até você pedir.

## Convenções

| Escrevo assim | Vira no site |
| --- | --- |
| `==texto==` | **Destaque em laranja** (cor de ação, mesma fonte do texto). Antes era itálico serifado |
| `**texto**` | Negrito (texto em cor principal, peso 500) dentro de parágrafos dos cases |
| `{Empresa A}` | Chip de empresa (logo pequeno + nome) na introdução. Logo e link ficam na tabela "Marcas citadas" |
| `campo: valor` | Um dado simples (título, ano, link…) |
| Tabela | Lista de itens repetidos (projetos, cases, empresas) |
| `> [!imagem]` | Um bloco de imagem do case: arquivo, texto alternativo e legenda |
| `%% comentário %%` | Instrução para você. Não aparece no modo leitura do Obsidian e não vai para o site |
| `0000`, `00`, lorem | Conteúdo provisório: troque quando tiver o real |

Imagens: o campo traz o caminho no site (ex.: `/assets/cases/case-01/cover.svg`). Para trocar, mande a
imagem nova ao assistente (ou coloque na pasta e diga o nome) e atualize o caminho aqui.

Inglês: escreva em português. O assistente traduz para a versão `/en/`. Se quiser um texto específico
em inglês, escreva-o num campo `en:` logo abaixo do campo em português.

## Criar um case novo

1. Duplique `Cases/_Modelo - Case.md` (ou a variação 02) e renomeie, por exemplo `Cases/Case 03.md`.
2. Preencha o frontmatter (o bloco entre `---` no topo) e as seções. Seções que não usar, apague.
3. Em `Home.md`, na tabela **Cases**, coloque o link `/projetos/case-03/` na linha do case.
4. Peça ao assistente para publicar o case.
