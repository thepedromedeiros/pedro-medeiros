/* Pedro Medeiros — interações do portfólio (JS puro, sem dependências). */
(() => {
  "use strict";

  const html = document.documentElement;
  const isEN = (html.lang || "").toLowerCase().startsWith("en");
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* -------------------------------------------- Relógio (America/Sao_Paulo) */
  const clockEl = $("[data-clock]");
  if (clockEl) {
    const format = new Intl.DateTimeFormat(isEN ? "en-US" : "pt-BR", {
      timeZone: "America/Sao_Paulo",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    });
    const suffix = isEN ? "in Brazil" : "no Brasil";
    const update = () => { clockEl.textContent = `${format.format(new Date())} ${suffix}`; };
    update();
    setInterval(update, 15000);
  }

  /* ----------------------------------------------------------- "Ver mais" */
  $$("[data-show-more]").forEach((btn) => {
    const list = document.getElementById(btn.getAttribute("aria-controls"));
    if (!list) return;
    btn.addEventListener("click", () => {
      $$("[data-extra]", list).forEach((item) => { item.hidden = false; });
      btn.setAttribute("aria-expanded", "true");
      btn.hidden = true;
    });
  });

  /* ------------------------------------------------ Vídeos de capa (opcional)
     Use <video data-autoplay muted loop playsinline poster="..."> em qualquer capa.
     Só tocam com conexão boa e sem "reduzir movimento". */
  const videos = $$("video[data-autoplay]");
  if (videos.length) {
    const conn = navigator.connection;
    const slow = conn && (conn.saveData || /(^|-)(2g|3g)$/.test(conn.effectiveType || ""));
    if (!slow && !reducedMotion.matches) {
      videos.forEach((v) => { v.preload = "auto"; v.play().catch(() => {}); });
    }
  }

  /* -------------------------------------- Atalhos de seção (pílulas da home)
     Clique rola suave até a seção (o deslocamento vem de scroll-margin-top no CSS)
     e a pílula da seção visível fica laranja (aria-current). */
  const pills = $$("[data-section-nav] a[href^='#']");
  if (pills.length) {
    const targets = pills.map((a) => document.getElementById(a.hash.slice(1))).filter(Boolean);

    pills.forEach((a) => {
      a.addEventListener("click", (event) => {
        const el = document.getElementById(a.hash.slice(1));
        if (!el) return;
        event.preventDefault();
        el.scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth", block: "start" });
        history.replaceState(null, "", a.hash);
        setActive(a.hash.slice(1));
      });
    });

    const setActive = (id) => {
      pills.forEach((a) => {
        if (a.hash === `#${id}`) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
    };

    let ticking = false;
    const spy = () => {
      ticking = false;
      const line = window.innerHeight * 0.3;
      let current = null;
      targets.forEach((el) => { if (el.getBoundingClientRect().top <= line) current = el.id; });
      // no fim da página, a última seção é a ativa
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) current = targets[targets.length - 1].id;
      // Página curta (cabe inteira na tela): no topo, a primeira seção é a ativa
      if (window.scrollY < 8 && targets[0]) current = targets[0].id;
      setActive(current);
    };
    window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(spy); } }, { passive: true });
    window.addEventListener("resize", spy);
    spy();
  }

  /* ---------------------------------------------------------- Analytics
     Sem rastreamento por enquanto. Para ativar depois, adicione aqui o
     snippet do provedor escolhido (ex.: Vercel Analytics, PostHog ou GA4).
     window.addEventListener("load", () => { ... });
  */
})();
