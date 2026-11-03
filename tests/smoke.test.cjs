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
assert.match(css, /Feather Bold/);
console.log("✓ Sete países, produtos, receitas, quizzes, estrutura e tipografia verificados.");