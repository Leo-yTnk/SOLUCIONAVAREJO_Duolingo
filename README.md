# 7 dias, 7 cortes, 7 lições 🍗🌍

Site estático de **demonstração acadêmica** da proposta de campanha **Swift × Duolingo**, desenvolvida no trabalho *Consultoria 4 – Categoria Aves*, referente à Swift Morro Grande.

**Atenção:** não representa uma parceria oficial entre as empresas. Marcas, personagens e fontes proprietárias pertencem aos respectivos titulares. Todos os benefícios comerciais dependem de aprovação.

## Implementado

- Sete países, sete receitas completas e sete produtos Swift, conforme o roteiro da apresentação.
- Ingredientes com checklist, preparo em etapas e ficha oficial do produto do dia.
- Três expressões por país e miniatividade de idioma com feedback.
- Passaporte de progresso salvo localmente no navegador.
- Código DUOSABOR *demonstrativo*, que não concede descontos reais.
- Interface responsiva, navegação acessível e respeito ao movimento reduzido.
- Verificações automáticas de sintaxe, países, produtos e quizzes.

## Roteiro dos sete sabores

| Dia | País | Produto Swift | Receita | Idioma |
| --- | --- | --- | --- | --- |
| 1 | 🇫🇷 França | Filé de Coxa e Sobrecoxa sem Pele 1 kg | Frango Bourguignon | Francês |
| 2 | 🇯🇵 Japão | Frango Karaague Empanado 700 g | Karaage de Frango | Japonês |
| 3 | 🇲🇽 México | Peito Temperado Desfiado 400 g | Tacos de Frango | Espanhol |
| 4 | 🇮🇳 Índia | Filé de Peito 1 kg | Frango Tikka Masala | Inglês* |
| 5 | 🇮🇹 Itália | Sobrecoxa de Frango 1 kg | Frango Cacciatore | Italiano |
| 6 | 🇹🇭 Tailândia | Filé de Peito 1 kg | Frango ao Curry Thai | Tailandês |
| 7 | 🇵🇹 Portugal | Filezinho Sassami 1 kg | Frango ao piri-píri | Português de Portugal |

*O inglês foi escolhido pela apresentação como tema didático para a Índia, país multilíngue.*

As receitas são **adaptações autorais inspiradas em cada país**, não reproduções tradicionais. Para aves cruas, atinja 74 °C no centro do corte; observe também o modo de preparo e as condições de conservação do rótulo de cada produto.

## Figma e fontes

O Figma orientou a composição: topo lilás, ingredientes em card branco, preparo sobre fundo lilás claro e área de idioma em roxo escuro. Essa estrutura foi expandida em um site com sete dias acessíveis por navegação superior.

- **Títulos:** CSS prioriza Feather Bold, tenta o carregamento externo e recorre a Nunito quando indisponível. O arquivo Feather fornecido para análise não foi republicado: seu arquivo contém restrição de incorporação. Para **garantia absoluta** em um site público será necessária licença web apropriada e hospedagem autorizada.
- **Corpo:** Nunito, do [Google Fonts](https://fonts.google.com/specimen/Nunito).
- **Recursos visuais:** elementos do CSS e emojis temáticos, sem redistribuição dos assets temporários do Figma.

## Executar e publicar

O site não tem backend, build nem dependências de JavaScript.

1. Clone ou baixe este repositório.
2. Abra o arquivo index.html no navegador, ou inicie um servidor estático com o comando python -m http.server 8000.
3. Acesse http://localhost:8000.
4. Adicione ?dia=franca, ?dia=japao, ?dia=mexico, ?dia=india, ?dia=italia, ?dia=tailandia ou ?dia=portugal para abrir um país específico.

Para executar verificações com Node.js:

~~~bash
node --check data.js
node --check app.js
node tests/smoke.test.cjs
~~~

O GitHub Actions valida automaticamente o código quando há alterações na branch principal.

### Publicação via GitHub Pages

Abra **Settings → Pages → Build and deployment**, selecione **Deploy from a branch → main → /(root)** e salve. Aguarde a confirmação do GitHub. A existência dos arquivos no repositório **não significa que o GitHub Pages esteja ativo**.

## Mecânica comercial proposta

A apresentação sugere o código DUOSABOR: **10% de desconto em uma unidade do produto do dia, limitado a R$ 5, com validade de 48 horas e um uso por cliente por dia, sem acúmulo**. As condições dependem de análise de margem, aprovação de marcas, canais e regulamento. No site, o código é expressamente classificado como **ilustrativo e não resgatável**. Não há checkout, concessão de desconto ou integração com aplicativo oficial.

## Fontes

- GRUPO 3. *Consultoria 4 – Categoria Aves*. Apresentação acadêmica, 2026. Slides de campanha e roteiro de sete sabores.
- FIGMA. [Protótipo das receitas](https://www.figma.com/proto/jlzlceOCXM7HSCaxBljV8W/Untitled?node-id=4-11). Consultado em: 3 nov. 2026.
- SWIFT. [Aves – catálogo oficial](https://www.swift.com.br/aves?o=mais-vendidos). Acesso em: 3 nov. 2026.
- SWIFT. [Frango Karaague Empanado Swift 700 g](https://www.swift.com.br/detail/frango-karaague-empanado-swift-700g). Acesso em: 3 nov. 2026.
- SWIFT. [Peito de Frango Temperado Desfiado Swift 400 g](https://www.swift.com.br/detail/peito-de-frango-temperado-desfiado-swift-400g). Acesso em: 3 nov. 2026.
- FOODSAFETY.GOV. [Safe Minimum Internal Temperatures](https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures). Acesso em: 3 nov. 2026.
- FDA. [Safe Food Handling](https://www.fda.gov/food/buy-store-serve-safe-food/safe-food-handling). Acesso em: 3 nov. 2026.

## Antes de uma campanha real

Obter autorização de marca, revisar a licença da Feather, validar regulamento e precificação, fotografar os pratos e revisar conteúdo culinário, linguístico e cultural. A campanha proposta não implica acesso ao aplicativo Duolingo ou às bases de clientes da Swift.
