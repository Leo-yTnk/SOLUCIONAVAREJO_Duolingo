/* Conteúdo original de demonstração acadêmica, baseado no roteiro de sete sabores fornecido pelo grupo. */
window.SABORES = [
  {
    id: "franca", codigo: "fr", dia: 1, bandeira: "🇫🇷", pais: "França", idioma: "Francês",
    titulo: "Frango Bourguignon", destaque: "Um clássico francês em versão de frango.",
    descricao: "Um ensopado reconfortante com cogumelos, cenoura, ervas e molho encorpado. Uma adaptação do preparo bourguignon tradicional.",
    cor: "#b999ec", escura: "#593f86", emoji: "🍲", tempo: "65 min", porcoes: "4 porções", dificuldade: "Intermediário",
    produto: "Filé de Coxa e Sobrecoxa sem Pele Swift 1 kg",
    produtoUrl: "https://www.swift.com.br/detail/file-de-coxa-e-sobrecoxa-sem-pele-swift-1kg",
    produtoNota: "Use cerca de 700 g da embalagem. A receita foi adaptada para aves; o protótipo original utilizava carne bovina.",
    ingredientes: [
      "700 g de filé de coxa e sobrecoxa sem pele Swift em cubos", "120 g de bacon em cubinhos (opcional)",
      "2 cenouras em rodelas", "1 cebola grande picada", "2 dentes de alho picados",
      "200 g de cogumelos fatiados", "250 ml de caldo de frango",
      "200 ml de vinho tinto seco OU caldo extra com 1 colher (sopa) de vinagre balsâmico",
      "1 colher (sopa) de extrato de tomate", "1 folha de louro e 2 ramos de tomilho",
      "1 colher (sopa) de azeite", "Sal e pimenta-do-reino a gosto"
    ],
    passos: [
      { titulo: "Prepare os ingredientes", texto: "Descongele o frango na geladeira, corte em pedaços regulares e tempere com sal e pimenta. Pique os legumes." },
      { titulo: "Doure o frango", texto: "Aqueça o azeite em panela larga e doure o frango em etapas, sem amontoar. Retire e reserve." },
      { titulo: "Construa o sabor", texto: "Na mesma panela, doure o bacon (se usar). Refogue cebola, cenoura e alho por 4 minutos; acrescente o extrato de tomate." },
      { titulo: "Faça o molho", texto: "Adicione o vinho ou a alternativa sem álcool, raspando o fundo da panela. Junte caldo, tomilho, louro e o frango." },
      { titulo: "Cozinhe e finalize", texto: "Tampe parcialmente e cozinhe em fogo baixo por 25 a 35 minutos. Em outra frigideira, doure os cogumelos e misture nos minutos finais." },
      { titulo: "Sirva com carinho", texto: "Verifique se o frango está completamente cozido (74 °C no centro) e sirva com purê de batatas ou pão." }
    ],
    vocabulario: [
      { termo: "Je voudrais…", significado: "Eu gostaria de…" },
      { termo: "S'il vous plaît", significado: "Por favor" },
      { termo: "Merci !", significado: "Obrigado(a)!" }
    ],
    frase: "Je voudrais du poulet, s'il vous plaît.",
    traducao: "Eu gostaria de frango, por favor.",
    pergunta: "Em francês, o que significa “Je voudrais du poulet”?",
    opcoes: ["Eu gostaria de frango", "Eu não gosto de frango", "Eu cozinhei uma sopa"],
    resposta: 0, explicacao: "“Je voudrais” é uma forma educada de pedir algo; “poulet” significa frango."
  },
  {
    id: "japao", codigo: "jp", dia: 2, bandeira: "🇯🇵", pais: "Japão", idioma: "Japonês",
    titulo: "Karaage de Frango", destaque: "Crocante por fora, suculento por dentro.",
    descricao: "Um jeito prático de servir o Karaague Swift com molho cítrico e gergelim. O empanado já vem pronto para assar.",
    cor: "#ffe4ac", escura: "#8a4e22", emoji: "🍗", tempo: "30 min", porcoes: "4 porções", dificuldade: "Fácil",
    produto: "Frango Karaague Empanado Swift 700 g",
    produtoUrl: "https://www.swift.com.br/detail/frango-karaague-empanado-swift-700g",
    produtoNota: "Produto já empanado e temperado. Não é necessário empanar novamente. Respeite também as instruções da embalagem.",
    ingredientes: [
      "1 embalagem (700 g) de Frango Karaague Empanado Swift", "2 colheres (sopa) de shoyu",
      "1 colher (chá) de mel ou açúcar", "1 colher (sopa) de suco de limão",
      "1 colher (chá) de gengibre ralado", "1 colher (chá) de gergelim torrado",
      "2 cebolinhas picadas", "Arroz cozido e folhas verdes para acompanhar"
    ],
    passos: [
      { titulo: "Aqueça a air fryer", texto: "Preaqueça a 180 °C, se recomendado no manual do seu aparelho. Não descongele o Karaague." },
      { titulo: "Deixe crocante", texto: "Distribua os pedaços congelados sem sobrepor. Prepare a 180 °C por cerca de 20 a 25 minutos, seguindo a embalagem, até dourar e cozinhar completamente." },
      { titulo: "Misture o molho", texto: "Em uma tigelinha, misture shoyu, mel, limão e gengibre. Para um molho quente, aqueça por 1 minuto em fogo baixo." },
      { titulo: "Sirva", texto: "Disponha o karaage no prato; finalize com gergelim e cebolinha. Sirva o molho à parte para manter a crocância." }
    ],
    vocabulario: [
      { termo: "鶏肉 (toriniku)", significado: "Carne de frango" },
      { termo: "おいしい (oishii)", significado: "Delicioso" },
      { termo: "いただきます (itadakimasu)", significado: "Expressão de gratidão antes de comer" }
    ],
    frase: "この鶏肉はおいしいです。 (Kono toriniku wa oishii desu.)",
    traducao: "Este frango está delicioso.",
    pergunta: "Qual palavra em japonês significa “delicioso”?",
    opcoes: ["Oishii", "Toriniku", "Arigatou"],
    resposta: 0, explicacao: "“Oishii” (おいしい) descreve algo saboroso."
  },
  {
    id: "mexico", codigo: "mx", dia: 3, bandeira: "🇲🇽", pais: "México", idioma: "Espanhol",
    titulo: "Tacos de Frango", destaque: "Uma explosão de sabores a cada mordida.",
    descricao: "Tortilhas, frango desfiado, tomate, milho e limão. Monte uma mesa colorida e deixe cada pessoa personalizar os tacos.",
    cor: "#ffd1b3", escura: "#9b4a2b", emoji: "🌮", tempo: "20 min", porcoes: "4 porções", dificuldade: "Fácil",
    produto: "Peito de Frango Temperado Desfiado Swift 400 g",
    produtoUrl: "https://www.swift.com.br/detail/peito-de-frango-temperado-desfiado-swift-400g",
    produtoNota: "O produto já é cozido, desfiado e temperado; aqueça conforme as instruções da embalagem.",
    ingredientes: [
      "1 embalagem (400 g) de Peito de Frango Temperado Desfiado Swift",
      "8 tortilhas pequenas de milho ou trigo", "1 tomate sem sementes em cubinhos",
      "1/2 cebola roxa fatiada", "1/2 xícara de milho cozido",
      "1 abacate pequeno amassado", "Suco de 1 limão", "Folhas de alface ou coentro",
      "Páprica e pimenta a gosto (opcionais)"
    ],
    passos: [
      { titulo: "Aqueça o frango", texto: "Prepare o frango desfiado seguindo as orientações de aquecimento da embalagem." },
      { titulo: "Faça o creme", texto: "Amasse o abacate com metade do suco de limão e uma pitada de sal." },
      { titulo: "Prepare a guarnição", texto: "Misture tomate, cebola e milho com o restante do limão. Lave e seque as folhas." },
      { titulo: "Aqueça as tortilhas", texto: "Passe cada tortilha rapidamente por uma frigideira seca até ficar flexível." },
      { titulo: "Monte os tacos", texto: "Coloque uma porção do frango, um pouco do creme de abacate, os vegetais e as folhas. Sirva imediatamente." }
    ],
    vocabulario: [
      { termo: "Pollo", significado: "Frango" },
      { termo: "Quisiera…", significado: "Eu gostaria de…" },
      { termo: "Por favor", significado: "Por favor" }
    ],
    frase: "Quisiera dos tacos de pollo, por favor.",
    traducao: "Eu gostaria de dois tacos de frango, por favor.",
    pergunta: "Como se diz “frango” em espanhol?",
    opcoes: ["Pescado", "Pollo", "Carne de res"],
    resposta: 1, explicacao: "“Pollo” é frango; “pescado” é peixe e “carne de res” é carne bovina."
  },
  {
    id: "india", codigo: "in", dia: 4, bandeira: "🇮🇳", pais: "Índia", idioma: "Inglês",
    titulo: "Frango Tikka Masala", destaque: "Especiarias que aquecem o coração.",
    descricao: "Cubos de frango marinados em iogurte e especiarias, finalizados em molho cremoso de tomate. Inspirado no tikka masala.",
    cor: "#ffcf97", escura: "#99541d", emoji: "🍛", tempo: "50 min", porcoes: "4 porções", dificuldade: "Intermediário",
    produto: "Filé de Peito de Frango Swift 1 kg",
    produtoUrl: "https://www.swift.com.br/detail/file-de-peito-de-frango-swift-1kg",
    produtoNota: "Use cerca de 700 g da embalagem. A aula de idioma usa inglês por escolha editorial; a Índia é multilíngue.",
    ingredientes: [
      "700 g de Filé de Peito de Frango Swift em cubos", "1 pote (170 g) de iogurte natural",
      "1 colher (chá) de garam masala", "1 colher (chá) de páprica doce",
      "1 colher (chá) de cúrcuma", "1 cebola picada", "2 dentes de alho picados",
      "1 colher (chá) de gengibre ralado", "400 g de tomate pelado ou passata",
      "150 ml de creme de leite", "1 colher (sopa) de óleo", "Sal e coentro a gosto"
    ],
    passos: [
      { titulo: "Marine o frango", texto: "Misture o frango com iogurte, metade das especiarias e sal. Refrigere por 20 minutos, em recipiente tampado." },
      { titulo: "Doure os cubos", texto: "Aqueça uma frigideira com óleo, doure o frango por fora em pequenas levas e reserve. Ele terminará de cozinhar no molho." },
      { titulo: "Refogue os aromáticos", texto: "Em panela funda, refogue cebola, alho, gengibre e as especiarias restantes por 2 a 3 minutos." },
      { titulo: "Cozinhe o molho", texto: "Acrescente o tomate e cozinhe por 10 minutos, mexendo. Se necessário, junte um pouco de água." },
      { titulo: "Finalize", texto: "Volte o frango à panela, cozinhe completamente até atingir 74 °C no centro e misture o creme de leite. Sirva com arroz." }
    ],
    vocabulario: [
      { termo: "Spice", significado: "Especiaria" },
      { termo: "Delicious", significado: "Delicioso" },
      { termo: "May I have…?", significado: "Posso pedir…?" }
    ],
    frase: "May I have chicken tikka masala, please?",
    traducao: "Posso pedir frango tikka masala, por favor?",
    pergunta: "Na atividade em inglês, o que significa “spice”?",
    opcoes: ["Especiaria", "Sobremesa", "Prato"],
    resposta: 0, explicacao: "“Spice” significa especiaria. O inglês é uma escolha pedagógica, não o único idioma falado na Índia."
  },
  {
    id: "italia", codigo: "it", dia: 5, bandeira: "🇮🇹", pais: "Itália", idioma: "Italiano",
    titulo: "Frango Cacciatore", destaque: "O sabor de uma cozinha italiana de família.",
    descricao: "Sobrecoxas douradas em um molho rústico de tomates, pimentão, cogumelos e ervas.",
    cor: "#d7edb0", escura: "#416c35", emoji: "🍅", tempo: "60 min", porcoes: "4 porções", dificuldade: "Intermediário",
    produto: "Sobrecoxa de Frango Swift 1 kg",
    produtoUrl: "https://www.swift.com.br/detail/sobrecoxa-de-frango-swift-1kg",
    produtoNota: "A sobrecoxa é vendida congelada individualmente; descongele apenas o necessário, na geladeira.",
    ingredientes: [
      "1 kg de Sobrecoxa de Frango Swift", "400 g de tomates pelados",
      "1 pimentão vermelho em tiras", "1 cebola em fatias", "2 dentes de alho",
      "150 g de cogumelos", "1/2 xícara de caldo de frango",
      "2 colheres (sopa) de azeite", "1 colher (chá) de orégano",
      "1 ramo de alecrim ou manjericão", "Sal e pimenta-do-reino a gosto"
    ],
    passos: [
      { titulo: "Tempere e doure", texto: "Descongele na geladeira; tempere as sobrecoxas e doure-as no azeite, com a pele voltada para baixo no começo." },
      { titulo: "Refogue os vegetais", texto: "Retire o frango e refogue cebola, alho, pimentão e cogumelos na mesma panela." },
      { titulo: "Prepare o molho", texto: "Junte o tomate, o caldo e as ervas. Misture, raspando o fundo da panela." },
      { titulo: "Cozinhe lentamente", texto: "Volte o frango ao molho e cozinhe em fogo baixo por 30 a 40 minutos, até atingir 74 °C no centro." },
      { titulo: "Finalize", texto: "Ajuste os temperos e sirva com polenta, massa ou pão rústico." }
    ],
    vocabulario: [
      { termo: "Pollo", significado: "Frango" },
      { termo: "Buon appetito!", significado: "Bom apetite!" },
      { termo: "Grazie", significado: "Obrigado(a)" }
    ],
    frase: "Questo pollo è delizioso!",
    traducao: "Este frango está delicioso!",
    pergunta: "Qual expressão italiana é usada para desejar “bom apetite”?",
    opcoes: ["Grazie", "Buon appetito", "Arrivederci"],
    resposta: 1, explicacao: "“Buon appetito!” equivale a “Bom apetite!”."
  },
  {
    id: "tailandia", codigo: "th", dia: 6, bandeira: "🇹🇭", pais: "Tailândia", idioma: "Tailandês",
    titulo: "Frango ao Curry Thai", destaque: "Cremoso, aromático e cheio de personalidade.",
    descricao: "Frango macio em leite de coco, curry e vegetais. A intensidade da pimenta fica por sua conta.",
    cor: "#c6efe4", escura: "#256b62", emoji: "🥥", tempo: "35 min", porcoes: "4 porções", dificuldade: "Fácil",
    produto: "Filé de Peito de Frango Swift 1 kg",
    produtoUrl: "https://www.swift.com.br/detail/file-de-peito-de-frango-swift-1kg",
    produtoNota: "Use cerca de 700 g da embalagem. Confira o nível de ardência da pasta de curry.",
    ingredientes: [
      "700 g de Filé de Peito de Frango Swift em tiras", "400 ml de leite de coco",
      "1 a 2 colheres (sopa) de pasta de curry verde ou vermelho",
      "1 pimentão vermelho em tiras", "1 abobrinha pequena fatiada",
      "1 cebola pequena", "1 colher (sopa) de óleo",
      "1 colher (chá) de açúcar mascavo", "Suco de 1/2 limão",
      "Folhas de manjericão ou coentro", "Sal a gosto"
    ],
    passos: [
      { titulo: "Prepare o frango", texto: "Descongele o frango na geladeira e corte em tiras do mesmo tamanho." },
      { titulo: "Libere os aromas", texto: "Aqueça o óleo em panela funda e refogue a cebola com a pasta de curry por cerca de 1 minuto." },
      { titulo: "Cozinhe o frango", texto: "Junte o frango e mexa por alguns minutos. Acrescente o leite de coco e cozinhe em fervura suave." },
      { titulo: "Adicione os legumes", texto: "Coloque pimentão e abobrinha. Cozinhe por 8 a 12 minutos, até os legumes ficarem macios e o frango atingir 74 °C." },
      { titulo: "Equilibre e sirva", texto: "Ajuste com açúcar, limão e sal. Finalize com folhas frescas e sirva sobre arroz." }
    ],
    vocabulario: [
      { termo: "สวัสดี (sawasdee)", significado: "Olá" },
      { termo: "ไก่ (gai)", significado: "Frango" },
      { termo: "อร่อย (aroi)", significado: "Delicioso" }
    ],
    frase: "ไก่อร่อย (gai aroi)",
    traducao: "Frango delicioso.",
    pergunta: "Em tailandês, “gai” (ไก่) significa…",
    opcoes: ["Arroz", "Frango", "Olá"],
    resposta: 1, explicacao: "“Gai” (ไก่) significa frango; “sawasdee” é uma saudação."
  },
  {
    id: "portugal", codigo: "pt", dia: 7, bandeira: "🇵🇹", pais: "Portugal", idioma: "Português de Portugal",
    titulo: "Frango ao Piri-píri", destaque: "Um final de viagem com bastante sabor.",
    descricao: "Filezinhos de frango envolvidos em um molho de piri-píri, alho, limão e páprica. Ajuste a picância ao seu gosto.",
    cor: "#ffc6cd", escura: "#923c4f", emoji: "🌶️", tempo: "35 min", porcoes: "4 porções", dificuldade: "Fácil",
    produto: "Filezinho Sassami Swift 1 kg",
    produtoUrl: "https://www.swift.com.br/detail/filezinho-sassami-swift-1kg",
    produtoNota: "Use cerca de 700 g da embalagem. O piri-píri pode ser adaptado com pouca ou nenhuma pimenta.",
    ingredientes: [
      "700 g de Filezinho Sassami Swift", "2 colheres (sopa) de azeite",
      "Suco de 1 limão", "2 dentes de alho amassados",
      "1 colher (chá) de páprica doce", "1/2 colher (chá) de orégano",
      "1 pimenta malagueta pequena, sem sementes (opcional)",
      "Sal e pimenta-do-reino a gosto", "Batatas e salada para acompanhar"
    ],
    passos: [
      { titulo: "Faça a marinada", texto: "Misture azeite, limão, alho, páprica, orégano, sal e piri-píri picado, se usar." },
      { titulo: "Tempere o sassami", texto: "Envolva os filezinhos descongelados na mistura e deixe por 15 minutos, sempre na geladeira." },
      { titulo: "Aqueça o forno", texto: "Preaqueça a 200 °C e disponha os filezinhos em uma única camada numa assadeira." },
      { titulo: "Asse até dourar", texto: "Asse por cerca de 18 a 25 minutos, virando na metade do tempo e verificando 74 °C no centro." },
      { titulo: "Sirva", texto: "Acompanhe com batatas, salada e gotas de limão. Ofereça molho picante à parte." }
    ],
    vocabulario: [
      { termo: "Se faz favor", significado: "Por favor (forma usada em Portugal)" },
      { termo: "Uma dose de frango", significado: "Uma porção de frango" },
      { termo: "Está mesmo bom!", significado: "Está muito bom!" }
    ],
    frase: "Uma dose de frango, se faz favor.",
    traducao: "Uma porção de frango, por favor.",
    pergunta: "Em Portugal, “uma dose” de frango pode significar…",
    opcoes: ["Um tempero", "Uma porção", "Uma sobremesa"],
    resposta: 1, explicacao: "Em contextos de restauração em Portugal, “dose” pode referir-se a uma porção de comida."
  }
];