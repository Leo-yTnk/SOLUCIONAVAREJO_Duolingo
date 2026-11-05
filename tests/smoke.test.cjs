const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

const root = process.cwd();
const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(root + "/data.js", "utf8"), sandbox);

const dias = sandbox.window.SABORES;
assert.equal(dias.length, 7, "a campanha deve ter sete dias");
assert.deepEqual(Array.from(dias, (d) => d.pais), [
  "França", "Japão", "México", "Índia", "Itália", "Tailândia", "Portugal"
]);
assert.deepEqual(Array.from(dias, (d) => d.titulo), [
  "Frango Bourguignon", "Karaage de Frango", "Tacos de Frango",
  "Frango Tikka Masala", "Frango Cacciatore", "Frango ao Curry Thai",
  "Frango ao Piri-píri"
]);
assert.equal(new Set(dias.map((d) => d.id)).size, 7, "IDs únicos");
assert.deepEqual(Array.from(dias, (d) => d.codigo), ["fr","jp","mx","in","it","th","pt"], "códigos ISO corretos");
dias.forEach(d => {
  const svg = fs.readFileSync(root + "/assets/flags/" + d.codigo + ".svg", "utf8");
  assert.match(svg, /<svg[\\s>]/);
  assert.match(svg, /<\\/svg>/);
});
assert.match(fs.readFileSync(root + "/assets/flags/LICENSE", "utf8"), /MIT License/);
dias.forEach((d, i) => {
  assert.equal(d.dia, i + 1);
  assert.match(d.produtoUrl, /^https:\/\/www\.swift\.com\.br\//);
  assert.ok(d.ingredientes.length >= 7, "ingredientes: " + d.id);
  assert.ok(d.passos.length >= 4, "passos: " + d.id);
  assert.equal(d.vocabulario.length, 3, "três termos por lição");
  assert.equal(d.opcoes.length, 3, "três alternativas por lição");
  assert.ok(d.resposta >= 0 && d.resposta < d.opcoes.length);
  assert.ok(d.pergunta && d.explicacao && d.frase && d.traducao);
});
const html = fs.readFileSync(root + "/index.html", "utf8");
["data.js", "app.js", "styles.css", "ingredientList", "dayTabs", "quizOptions", "couponReward"].forEach((ref) =>
  assert.ok(html.includes(ref), "referência ausente: " + ref)
);
const css = fs.readFileSync(root + "/styles.css", "utf8");
assert.match(css, /Nunito/);
assert.doesNotMatch(css, /onlinewebfonts\.com/, "não importar Feather de repositórios de terceiros");
assert.match(css, /campaign-hero/, "hero da campanha");
assert.match(css, /mobile-quickbar/, "atalhos de celular");
assert.match(html, /id="como-funciona"/, "seção explicativa");
assert.match(html, /id="sabores"/, "navegação para os sete dias");
assert.match(html, /id="heroArtDay"/, "carimbo do dia no hero");
assert.match(html, /class="passport-stamps"/);
assert.match(html, /src="assets\\/flags\\/fr\\.svg"/);
assert.match(html, /id="speakPhrase"/);
assert.match(html, /id="journeyCount"/);
assert.match(html, /id="headerFlag"/);
assert.match(html, /id="progressTrack"/, "progresso");
const app = fs.readFileSync(root + "/app.js", "utf8");
assert.match(app, /centerActiveDay/, "rolagem horizontal mobile");
assert.match(app, /heroArtDay/, "arte do dia atualizada");
console.log("✓ Sete países, produtos, receitas, quizzes, estrutura e tipografia verificados.");