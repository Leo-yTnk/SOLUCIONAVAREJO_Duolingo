# 7 dias, 7 cortes, 7 lições 🍗🌍

Site estático de **demonstração acadêmica** da proposta de campanha **Swift × Duolingo**, desenvolvida no trabalho *Consultoria 4 – Categoria Aves*, referente à Swift Morro Grande.

**Atenção:** não representa uma parceria oficial entre as empresas. Marcas, personagens e fontes proprietárias pertencem aos respectivos titulares. Todos os benefícios comerciais dependem de aprovação.

## Implementado

- Sete países, sete receitas completas e sete produtos Swift, conforme o roteiro da apresentação.
- Ingredientes com checklist, preparo em etapas e ficha oficial do produto do dia.
- Três expressões por país e miniatividade de idioma com feedback.
- Passaporte de progresso salvo localmente no navegador.
- Código DUOSABOR *demonstrativo*, que não concede descontos reais.
- Hero principal com passaporte ilustrado, chamada para ação e progresso visível.
- Seção **Uma viagem em 3 passos**, explicando como selecionar o destino, preparar a receita e aprender o idioma.
- Interface responsiva com navegação horizontal entre países e **atalhos inferiores** no celular.
- Navegação acessível, contraste revisado e respeito ao movimento reduzido.
- Verificações automáticas de sintaxe, conteúdo, fluxo funcional e layouts de 320, 390, 768 e 1280 px.

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

## Figma, diretrizes e fontes

A primeira versão derivou a hierarquia da página de receita no [Figma](https://www.figma.com/proto/jlzlceOCXM7HSCaxBljV8W/Untitled?node-id=4-11): ingredientes, modo de preparo e miniatividade de idioma. A revisão de layout acrescentou um **hero verde** com passaporte de sabores, uma seção de explicação em três passos e navegação responsiva.

O redesign foi baseado nas diretrizes e nos artigos públicos sobre design do Duolingo:

- **Verde da marca #58CC02**, utilizado como cor principal; roxo como apoio à identidade da campanha.
- **Títulos curtos e expressivos**, espaçamento consistente e hierarquia clara.
- **Nunito do Google Fonts para títulos e corpo**: é a fonte substituta oficialmente recomendada quando as fontes proprietárias não estão disponíveis.
- A Feather Bold é exclusiva do Duolingo segundo o próprio guia; o arquivo TTF fornecido e uma cópia não licenciada disponibilizada por terceiro **não são distribuídos nem carregados por este site**.
- Elementos gráficos originais em CSS e emojis como apoio visual, sem imitar mascotes oficiais nem redistribuir assets temporários do Figma.
- **Mobile-first:** hero adaptável, cards explicativos deslizáveis, seleção horizontal de países, áreas de toque amplas e barra de atalhos fixa.

Referências: [Duolingo – Typography](https://design.duolingo.com/identity/typography); [Duolingo Blog – Core tabs redesign](https://blog.duolingo.com/core-tabs-redesign/); [Nunito – Google Fonts](https://fonts.google.com/specimen/Nunito).

## Executar e publicar

O site de produção não tem backend nem build. A suíte opcional de testes visuais usa Playwright.

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

Para executar os testes em navegador (é necessário Node.js):

~~~bash
npm install
npx playwright install chromium
npm run test:ui
~~~

O GitHub Actions valida automaticamente o conteúdo e executa os testes de navegação e responsividade em Chromium, anexando screenshots ao relatório de execução.

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
