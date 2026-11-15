/* Roda no <head>, antes da primeira pintura.
   1) aplica o tema salvo (ou o do sistema) para não piscar o tema errado;
   2) restaura as camadas do Inspetor ligadas nesta visita;
   3) liga o loader de "planta" só na primeira página da visita. */
(function () {
  var doc = document.documentElement;

  // 1. Tema
  try {
    var stored = localStorage.getItem("pm-theme");
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    doc.setAttribute("data-theme", stored === "dark" || stored === "light" ? stored : prefersDark ? "dark" : "light");
  } catch (err) {
    doc.setAttribute("data-theme", "light");
  }

  // 2. Inspetor (apenas desktop com mouse, onde o botão existe)
  try {
    if (window.matchMedia("(min-width: 900px) and (hover: hover)").matches) {
      var layers = (sessionStorage.getItem("pm-inspect") || "").split(",").filter(Boolean);
      for (var i = 0; i < layers.length; i++) doc.setAttribute("data-" + layers[i], "on");
      if (layers.length) doc.setAttribute("data-inspect", "on");
    }
  } catch (err) {}

  // 3. Loader de construção (?build na URL força a exibição)
  try {
    var forced = /[?&]build\b/.test(location.search);
    var calm = !window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
    var conn = navigator.connection;
    var slow = conn && (conn.saveData || /(^|-)(2g|3g)$/.test(conn.effectiveType || ""));
    if ((forced || !sessionStorage.getItem("pm-built")) && !calm && !slow) {
      doc.setAttribute("data-build", "on");
      sessionStorage.setItem("pm-built", "1");
      // Rede de segurança: se o main.js atrasar ou falhar, o conteúdo aparece mesmo assim
      setTimeout(function () {
        if (doc.getAttribute("data-build") !== "done") doc.setAttribute("data-build", "done");
      }, 4000);
    }
  } catch (err) {}
})();
