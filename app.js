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
  var selectedAnswer = null;

  function toast(texto) {
    var node = $("toast");
    node.textContent = texto;
    node.classList.add("show");
    window.clearTimeout(timer);
    timer = window.setTimeout(function () { node.classList.remove("show"); }, 2900);
  }

  function flagHtml(r, className) {
    // SVGs locais: não dependem do suporte do sistema a emojis de bandeiras.
    return '<img class="flag-img ' + esc(className || '') +
      '" src="assets/flags/' + esc(r.codigo) + '.svg" alt="" aria-hidden="true" decoding="async">';
  }

  function progress() {
    var n = concluidas.length;
    $("progressText").textContent = n + " / 7";
    $("headerCount").textContent = "⭐ " + n + "/7 lições";
    $("xpCount").textContent = "⚡ " + (n * 20) + " XP";
    $("journeyCount").textContent = n + "/7 concluídas";
    $("progressTrack").setAttribute("aria-valuenow", String(n));
    $("progressFill").style.width = (n / 7 * 100) + "%";
  }

  function renderTabs() {
    $("dayTabs").innerHTML = receitas.map(function (r) {
      var selected = r.id === ativa.id;
      var completed = concluidas.includes(r.id);
      var state = completed ? 'Concluído' : (selected ? 'Você está aqui' : 'Explorar');
      return '<button type="button" class="day-tab' +
        (completed ? ' completed' : '') + '" data-day="' + esc(r.id) +
        '" aria-current="' + selected + '" aria-label="Dia ' + r.dia + ', ' +
        esc(r.pais) + (completed ? ', lição concluída' : '') + '">' +
        '<span class="tab-flag-wrap">' + flagHtml(r, 'tab-flag') + '</span>' +
        '<span class="tab-text"><strong>Dia ' + r.dia + '</strong><small>' +
        esc(r.pais) + '</small><span class="tab-state">' + state + '</span></span>' +
        '<span class="tab-check" aria-hidden="true">' +
        (completed ? '✓' : (selected ? '●' : '')) + '</span></button>';
    }).join("");
  }

  function centerActiveDay() {
    var scroller = $("dayTabs");
    var selected = scroller.querySelector('[aria-current="true"]');
    if (!selected || !scroller.scrollTo) return;
    var parentRect = scroller.getBoundingClientRect();
    var itemRect = selected.getBoundingClientRect();
    var center = scroller.scrollLeft + itemRect.left - parentRect.left -
      (scroller.clientWidth - itemRect.width) / 2;
    var reducedMotion = window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    scroller.scrollTo({ left: Math.max(0, center), behavior: reducedMotion ? "auto" : "smooth" });
  }

  function renderStamps() {
    $("stampsProgress").textContent = concluidas.length + "/7 carimbos";
    $("stampGrid").innerHTML = receitas.map(function (r) {
      var earned = concluidas.includes(r.id);
      var isCurrent = ativa.id === r.id;
      return '<button type="button" data-stamp="' + esc(r.id) + '" class="stamp-item' +
        (earned ? ' earned' : '') + (isCurrent ? ' active' : '') +
        '" aria-label="' + esc(r.pais) + ', dia ' + r.dia +
        (earned ? ', lição concluída' : ', lição pendente') +
        (isCurrent ? ', selecionado' : '') + '">' +
        '<span class="stamp-symbol">' + flagHtml(r, 'stamp-flag') + '</span>' +
        '<span class="stamp-name">' + esc(r.pais) + '</span>' +
        '<span class="stamp-state">' + (earned ? 'Concluído ✓' : 'Dia ' + r.dia) +
        '</span></button>';
    }).join("");
  }

  function scrollToRecipe() {
    // Evita a volta indesejada ao topo da landing page ao trocar de lição.
    // A mudança de conteúdo acontece antes da rolagem, para evitar layout shift.
    window.requestAnimationFrame(function () {
      var target = $("topo");
      if (!target) return;
      var reduce = window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      var header = document.querySelector(".site-header");
      var headerHeight = header ? header.getBoundingClientRect().height : 0;
      var top = window.scrollY + target.getBoundingClientRect().top - headerHeight - 10;
      window.scrollTo({ top: Math.max(0, top), behavior: reduce ? "instant" : "smooth" });
    });
  }

  function renderHero(r) {
    document.documentElement.style.setProperty("--accent", r.cor);
    document.documentElement.style.setProperty("--accent-ink", r.escura);
    $("countryBadgeText").textContent = "Dia " + r.dia + " · " + r.pais;
    $("countryFlag").src = "assets/flags/" + r.codigo + ".svg";
    $("headerFlag").src = "assets/flags/" + r.codigo + ".svg";
    $("headerCountryName").textContent = r.pais;
    $("recipeTitle").textContent = r.titulo;
    $("recipeTagline").textContent = r.destaque;
    $("recipeDescription").textContent = r.descricao;
    $("recipeTime").textContent = "⏱️ " + r.tempo;
    $("recipePortions").textContent = "🍽️ " + r.porcoes;
    $("recipeDifficulty").textContent = "✨ " + r.dificuldade;
    $("heroFlag").src = "assets/flags/" + r.codigo + ".svg";
    $("heroFood").textContent = r.emoji;
    $("heroArtDay").textContent = "dia " + r.dia;
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

  var speechLocales = {
    franca: "fr-FR", japao: "ja-JP", mexico: "es-MX", india: "en-IN",
    italia: "it-IT", tailandia: "th-TH", portugal: "pt-PT"
  };

  function renderLesson(r) {
    $("lessonTitle").textContent = "Um pouco de " + r.idioma.toLowerCase() + "...";
    $("quizDay").textContent = String(r.dia);
    $("vocabList").innerHTML = r.vocabulario.map(function (item) {
      return '<div class="vocab-card"><strong lang="' + langs[r.id] + '">' + esc(item.termo) +
        '</strong><span>' + esc(item.significado) + '</span></div>';
    }).join("");
    $("languagePhrase").textContent = r.frase;
    $("languagePhrase").setAttribute("lang", langs[r.id]);
    $("languageTranslation").textContent = r.traducao;
    $("speechNote").textContent = "Toque em ouvir para escutar a frase.";
    $("speakPhrase").disabled = !("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window);
    $("speakPhrase").classList.remove("speaking");
    renderQuiz();
  }

  function renderQuiz() {
    var r = ativa;
    var passed = concluidas.includes(r.id);
    $("quizTitle").textContent = r.pergunta;
    $("quizOptions").innerHTML = r.opcoes.map(function (option, i) {
      var isCorrect = passed && i === r.resposta;
      var isSelected = !passed && selectedAnswer === i;
      return '<button type="button" class="quiz-option' +
        (isCorrect ? ' correct' : '') + (isSelected ? ' selected' : '') +
        '" data-answer="' + i + '" aria-pressed="' + (isSelected ? 'true' : 'false') + '"' +
        (passed ? ' disabled' : '') + '><span class="option-letter" aria-hidden="true">' +
        String.fromCharCode(65 + i) + '</span><span>' + esc(option) + '</span></button>';
    }).join("");

    $("quizMiniProgress").style.width = passed ? "100%" : "20%";
    $("verifyAnswer").hidden = passed;
    $("verifyAnswer").disabled = passed || selectedAnswer === null;
    var feedback = $("quizFeedback");
    feedback.hidden = !passed;
    feedback.className = passed ? "quiz-feedback ok" : "";
    feedback.textContent = passed ? "✓ Muito bem! " + r.explicacao : "";
    $("couponReward").hidden = !passed;
    $("rewardNextDay").textContent = r.dia === receitas.length ? "Ver passaporte ✓" : "Próximo destino →";
  }

  function navigate(id, push, scroll) {
    var next = receitas.find(function (r) { return r.id === id; });
    if (!next) next = receitas[0];
    ativa = next;
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    selectedAnswer = null;
    renderTabs();
    centerActiveDay();
    renderHero(next);
    markList(next);
    renderSteps(next);
    renderLesson(next);
    progress();
    renderStamps();
    $("prevDay").disabled = next.dia === 1;
    $("nextDay").disabled = next.dia === 7;
    $("prevDay").textContent = next.dia === 1 ? "← Primeiro dia" : "← Dia " + (next.dia - 1);
    $("nextDay").textContent = next.dia === 7 ? "Último sabor ✓" : "Dia " + (next.dia + 1) + " →";
    if (push) {
      var link = window.location.pathname + "?dia=" + encodeURIComponent(next.id);
      window.history.pushState({ dia: next.id }, "", link);
    }
    if (scroll) scrollToRecipe();
  }

  $("speakPhrase").addEventListener("click", function () {
    if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
      $("speechNote").textContent = "Seu navegador não oferece síntese de voz.";
      return;
    }
    var text = ativa.frase.replace(/\s*\([^)]*\)/g, "").trim();
    var locale = speechLocales[ativa.id] || "pt-BR";
    window.speechSynthesis.cancel();
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = locale;
    utterance.rate = 0.86;
    utterance.pitch = 1;
    var voices = window.speechSynthesis.getVoices();
    var voice = voices.find(function (v) { return v.lang.toLowerCase() === locale.toLowerCase(); }) ||
      voices.find(function (v) { return v.lang.toLowerCase().startsWith(locale.slice(0, 2).toLowerCase()); });
    if (voice) utterance.voice = voice;
    var button = $("speakPhrase");
    utterance.onstart = function () {
      button.classList.add("speaking");
      $("speechNote").textContent = "Reproduzindo pronúncia gerada pelo dispositivo…";
    };
    utterance.onend = function () {
      button.classList.remove("speaking");
      $("speechNote").textContent = "Pratique repetindo a frase em voz alta!";
    };
    utterance.onerror = function () {
      button.classList.remove("speaking");
      $("speechNote").textContent = "Áudio indisponível. Tente novamente ou leia a frase.";
    };
    window.speechSynthesis.speak(utterance);
  });

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
    selectedAnswer = Number(button.getAttribute("data-answer"));
    $("quizOptions").querySelectorAll(".quiz-option").forEach(function (item) {
      var selected = item === button;
      item.classList.toggle("selected", selected);
      item.classList.remove("incorrect");
      item.setAttribute("aria-pressed", selected ? "true" : "false");
    });
    var feedback = $("quizFeedback");
    feedback.hidden = true;
    feedback.textContent = "";
    $("verifyAnswer").disabled = false;
  });

  $("verifyAnswer").addEventListener("click", function () {
    if (selectedAnswer === null || concluidas.includes(ativa.id)) return;
    var answer = selectedAnswer;
    selectedAnswer = null;
    if (answer === ativa.resposta) {
      concluidas.push(ativa.id);
      save(doneKey, concluidas);
      renderQuiz();
      renderTabs();
      progress();
      renderStamps();
      toast("✨ Resposta certa! +20 XP e um carimbo conquistado.");
    } else {
      var feedback = $("quizFeedback");
      feedback.hidden = false;
      feedback.className = "quiz-feedback bad";
      feedback.textContent = "Você está quase lá! Revise as palavras ao lado e escolha outra resposta.";
      $("quizOptions").querySelectorAll(".quiz-option").forEach(function (item) {
        item.classList.remove("selected");
        item.setAttribute("aria-pressed", "false");
        item.classList.toggle("incorrect", Number(item.getAttribute("data-answer")) === answer);
      });
      $("verifyAnswer").disabled = true;
    }
  });

  $("stampGrid").addEventListener("click", function (event) {
    var stamp = event.target.closest("button[data-stamp]");
    if (stamp) navigate(stamp.getAttribute("data-stamp"), true, true);
  });

  $("rewardNextDay").addEventListener("click", function () {
    if (ativa.dia < receitas.length) {
      navigate(receitas[ativa.dia].id, true, true);
    } else {
      $("passaporte").scrollIntoView({ block: "start", behavior: "smooth" });
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