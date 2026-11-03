/* Aplicação estática sem dependências e sem coleta de dados pessoais. */
(function () {
  "use strict";

  var receitas = Array.isArray(window.SABORES) ? window.SABORES : [];
  if (receitas.length !== 7) {
    console.error("O roteiro dos sete sabores não foi carregado corretamente.");
    return;
  }

  function $(id) { return document.getElementById(id); }
  function getSaved(key, fallback) {
    try {
      var parsed = JSON.parse(localStorage.getItem(key));
      return parsed === null ? fallback : parsed;
    } catch (error) { return fallback; }
  }
  function save(key, data) {
    try { localStorage.setItem(key, JSON.stringify(data)); } catch (error) { /* Navegação continua sem persistência. */ }
  }
  function esc(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char];
    });
  }

  var doneKey = "duosabores-licoes-v1";
  var checkKey = "duosabores-ingredientes-v1";
  var concluidas = getSaved(doneKey, []);
  var marcadas = getSaved(checkKey, {});
  var timer;
  if (!Array.isArray(concluidas)) concluidas = [];
  if (!marcadas || typeof marcadas !== "object" || Array.isArray(marcadas)) marcadas = {};
  concluidas = concluidas.filter(function (id) { return receitas.some(function (r) { return r.id === id; }); });

  var ativa = receitas[0];

  function toast(texto) {
    var node = $("toast");
    node.textContent = texto;
    node.classList.add("show");
    window.clearTimeout(timer);
    timer = window.setTimeout(function () { node.classList.remove("show"); }, 2900);
  }

  function progress() {
    var n = concluidas.length;
    $("progressText").textContent = n + " / 7";
    $("headerCount").textContent = "⭐ " + n + " de 7 lições";
    $("progressTrack").setAttribute("aria-valuenow", String(n));
    $("progressFill").style.width = (n / 7 * 100) + "%";
  }

  function renderTabs() {
    $("dayTabs").innerHTML = receitas.map(function (r) {
      var selected = r.id === ativa.id;
      var completed = concluidas.includes(r.id);
      return '<button type="button" class="day-tab" data-day="' + esc(r.id) + '" aria-current="' + selected + '" aria-label="Dia ' +
        r.dia + ', ' + esc(r.pais) + (completed ? ', lição concluída' : "") + '">' +
        '<span class="tab-flag" aria-hidden="true">' + r.bandeira + '</span>' +
        '<span class="tab-text">Dia ' + r.dia + '<small>' + esc(r.pais) + '</small></span>' +
        (completed ? '<span class="tab-check" aria-hidden="true">✓</span>' : '') + '</button>';
    }).join("");
  }

  function renderHero(r) {
    document.documentElement.style.setProperty("--accent", r.cor);
    document.documentElement.style.setProperty("--accent-ink", r.escura);
    $("countryBadge").textContent = r.bandeira + " Dia " + r.dia + " · " + r.pais;
    $("recipeTitle").textContent = r.titulo;
    $("recipeTagline").textContent = r.destaque;
    $("recipeDescription").textContent = r.descricao;
    $("recipeTime").textContent = "⏱️ " + r.tempo;
    $("recipePortions").textContent = "🍽️ " + r.porcoes;
    $("recipeDifficulty").textContent = "✨ " + r.dificuldade;
    $("heroFlag").textContent = r.bandeira;
    $("heroFood").textContent = r.emoji;
    document.querySelector(".hero-art").setAttribute("aria-label", "Prato " + r.titulo + ", tema " + r.pais);
    $("productName").textContent = r.produto;
    $("productNote").textContent = r.produtoNota;
    $("productLink").href = r.produtoUrl;
    document.title = r.titulo + " · Dia " + r.dia + " | 7 dias, 7 cortes, 7 lições";
  }

  function markList(r) {
    var selected = Array.isArray(marcadas[r.id]) ? marcadas[r.id] : [];
    $("ingredientList").innerHTML = r.ingredientes.map(function (item, i) {
      return '<li class="ingredient-item"><label class="ingredient-label">' +
        '<input type="checkbox" data-ingredient="' + i + '"' + (selected.includes(i) ? " checked" : "") +
        ' aria-label="Separado: ' + esc(item) + '">' + '<span>' + esc(item) + '</span></label></li>';
    }).join("");
    updateIngredientCount();
  }

  function updateIngredientCount() {
    var selected = Array.isArray(marcadas[ativa.id]) ? marcadas[ativa.id] : [];
    $("ingredientCount").textContent = selected.length + " de " + ativa.ingredientes.length + " ingredientes separados";
  }

  function renderSteps(r) {
    $("stepsList").innerHTML = r.passos.map(function (passo, i) {
      return '<li class="step-item"><span class="step-number" aria-hidden="true">' + (i + 1) +
        '</span><div><h4>' + esc(passo.titulo) + '</h4><p>' + esc(passo.texto) + '</p></div></li>';
    }).join("");
  }

  var langs = { franca: "fr", japao: "ja", mexico: "es", india: "en", italia: "it", tailandia: "th", portugal: "pt-PT" };

  function renderLesson(r) {
    $("lessonTitle").textContent = "Um pouco de " + r.idioma.toLowerCase() + "...";
    $("vocabList").innerHTML = r.vocabulario.map(function (item) {
      return '<div class="vocab-card"><strong lang="' + langs[r.id] + '">' + esc(item.termo) +
        '</strong><span>' + esc(item.significado) + '</span></div>';
    }).join("");
    $("languagePhrase").textContent = r.frase;
    $("languagePhrase").setAttribute("lang", langs[r.id]);
    $("languageTranslation").textContent = r.traducao;
    renderQuiz();
  }

  function renderQuiz() {
    var r = ativa;
    var passed = concluidas.includes(r.id);
    $("quizTitle").textContent = r.pergunta;
    $("quizOptions").innerHTML = r.opcoes.map(function (option, i) {
      return '<button type="button" class="quiz-option' + (passed && i === r.resposta ? " correct" : "") +
        '" data-answer="' + i + '"' + (passed ? " disabled" : "") + '><span class="option-letter" aria-hidden="true">' +
        String.fromCharCode(65 + i) + '</span><span>' + esc(option) + '</span></button>';
    }).join("");

    var feedback = $("quizFeedback");
    feedback.hidden = !passed;
    feedback.className = passed ? "quiz-feedback ok" : "";
    feedback.textContent = passed ? "✓ Resposta correta! " + r.explicacao : "";
    $("couponReward").hidden = !passed;
  }

  function navigate(id, push, scroll) {
    var next = receitas.find(function (r) { return r.id === id; });
    if (!next) next = receitas[0];
    ativa = next;
    renderTabs();
    renderHero(next);
    markList(next);
    renderSteps(next);
    renderLesson(next);
    progress();
    $("prevDay").disabled = next.dia === 1;
    $("nextDay").disabled = next.dia === 7;
    $("prevDay").textContent = next.dia === 1 ? "← Primeiro dia" : "← Dia " + (next.dia - 1);
    $("nextDay").textContent = next.dia === 7 ? "Último sabor ✓" : "Dia " + (next.dia + 1) + " →";
    if (push) {
      var link = window.location.pathname + "?dia=" + encodeURIComponent(next.id);
      window.history.pushState({ dia: next.id }, "", link);
    }
    if (scroll) window.scrollTo({ top: 0, behavior: "smooth" });
  }

  $("dayTabs").addEventListener("click", function (event) {
    var tab = event.target.closest("button[data-day]");
    if (tab) navigate(tab.getAttribute("data-day"), true, true);
  });

  $("ingredientList").addEventListener("change", function (event) {
    var check = event.target;
    if (!check.matches("input[data-ingredient]")) return;
    var index = Number(check.getAttribute("data-ingredient"));
    var current = Array.isArray(marcadas[ativa.id]) ? marcadas[ativa.id].slice() : [];
    current = current.filter(function (n) { return n !== index; });
    if (check.checked) current.push(index);
    marcadas[ativa.id] = current.sort(function (a, b) { return a - b; });
    save(checkKey, marcadas);
    updateIngredientCount();
  });

  $("quizOptions").addEventListener("click", function (event) {
    var button = event.target.closest("button[data-answer]");
    if (!button || concluidas.includes(ativa.id)) return;
    var selected = Number(button.getAttribute("data-answer"));
    var feedback = $("quizFeedback");
    $("quizOptions").querySelectorAll(".quiz-option").forEach(function (item) {
      item.classList.remove("incorrect");
    });
    if (selected === ativa.resposta) {
      concluidas.push(ativa.id);
      save(doneKey, concluidas);
      renderQuiz();
      renderTabs();
      progress();
      toast("Mais um carimbo no passaporte! 🎉");
    } else {
      button.classList.add("incorrect");
      feedback.className = "quiz-feedback bad";
      feedback.textContent = "Quase! Leia as expressões ao lado e tente outra alternativa.";
      feedback.hidden = false;
    }
  });

  $("prevDay").addEventListener("click", function () {
    if (ativa.dia > 1) navigate(receitas[ativa.dia - 2].id, true, true);
  });
  $("nextDay").addEventListener("click", function () {
    if (ativa.dia < 7) navigate(receitas[ativa.dia].id, true, true);
  });

  function shareLink() {
    return window.location.origin + window.location.pathname + "?dia=" + encodeURIComponent(ativa.id);
  }

  function copy(text, successMessage) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        toast(successMessage);
      }).catch(function () {
        toast("Não foi possível copiar automaticamente neste navegador.");
      });
    } else {
      toast("A cópia requer uma página HTTPS. Use o endereço do navegador.");
    }
  }

  $("shareRecipe").addEventListener("click", function () {
    var title = "Receita: " + ativa.titulo;
    if (navigator.share) {
      navigator.share({ title: title, text: "Conheça o sabor do dia " + ativa.dia + "!", url: shareLink() })
        .catch(function () { /* Cancelar compartilhamento não é erro. */ });
    } else {
      copy(shareLink(), "Link da receita copiado! 🔗");
    }
  });

  $("copyCoupon").addEventListener("click", function () {
    copy("DUOSABOR", "Código demonstrativo copiado. Não válido para compras.");
  });

  window.addEventListener("popstate", function () {
    var id = new URLSearchParams(window.location.search).get("dia");
    navigate(id, false, false);
  });

  var initial = new URLSearchParams(window.location.search).get("dia");
  navigate(initial, false, false);
})();