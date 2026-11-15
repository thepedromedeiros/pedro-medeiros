/* Guia visual: lê os valores reais dos tokens e mostra ao lado de cada amostra. */
(() => {
  const parse = (v) => {
    v = v.trim();
    let m = v.match(/^#([0-9a-f]{3,8})$/i);
    if (m) {
      let h = m[1];
      if (h.length === 3) h = h.split("").map((c) => c + c).join("");
      return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16), 1];
    }
    m = v.match(/rgba?\(([^)]+)\)/);
    if (m) { const p = m[1].split(/[\s,\/]+/).filter(Boolean).map(Number); return [p[0], p[1], p[2], p[3] ?? 1]; }
    return null;
  };
  const hex = (c) => "#" + c.slice(0, 3).map((n) => Math.round(n).toString(16).padStart(2, "0")).join("").toUpperCase();

  function fill() {
    document.querySelectorAll(".ds-theme").forEach((panel) => {
      const cs = getComputedStyle(panel);
      const bg = parse(cs.getPropertyValue("--bg"));
      panel.querySelectorAll("[data-token]").forEach((el) => {
        const raw = cs.getPropertyValue(el.dataset.token).trim();
        const c = parse(raw);
        if (!c) { el.textContent = raw; return; }
        if (c[3] < 1 && bg) {
          const mix = c.slice(0, 3).map((n, i) => n * c[3] + bg[i] * (1 - c[3]));
          el.textContent = `${raw.replace(/\s+/g, "")} ≈ ${hex(mix)}`;
        } else el.textContent = hex(c);
      });
    });
    const sh = document.querySelector("[data-shadow-values]");
    if (sh) {
      const [l, d] = document.querySelectorAll(".ds-shadows");
      sh.innerHTML = `--shadow claro: <code>${getComputedStyle(l).getPropertyValue("--shadow").trim()}</code><br>--shadow escuro: <code>${getComputedStyle(d).getPropertyValue("--shadow").trim()}</code>`;
    }
  }

  const replay = document.querySelector("[data-replay]");
  if (replay) replay.addEventListener("click", () => {
    document.querySelectorAll("[data-motion] .fade-in").forEach((el) => {
      el.style.animation = "none";
      void el.offsetWidth;
      el.style.animation = "";
    });
  });

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fill);
  else fill();
})();
