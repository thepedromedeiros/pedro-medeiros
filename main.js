/* Pedro Medeiros — interações do portfólio (JS puro, sem dependências). */
(() => {
  "use strict";

  const html = document.documentElement;
  const isEN = (html.lang || "").toLowerCase().startsWith("en");
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const mq = (q) => window.matchMedia(q);
  const reducedMotion = mq("(prefers-reduced-motion: reduce)");

  /* ------------------------------------------------------------------ Tema */
  $$("[data-theme-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const theme = html.dataset.theme === "dark" ? "light" : "dark";
      html.dataset.theme = theme;
      try { localStorage.setItem("pm-theme", theme); } catch (e) {}
    });
  });

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

  /* ---------------------------------- Capa que segue o cursor nos projetos */
  const cover = $(".cursor-cover");
  if (cover && mq("(hover: hover) and (pointer: fine)").matches) {
    const coverImg = $("img", cover);
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let frame = 0;

    const paint = () => {
      current.x += (target.x - current.x) * 0.18;
      current.y += (target.y - current.y) * 0.18;
      cover.style.setProperty("--px", `${current.x}px`);
      cover.style.setProperty("--py", `${current.y}px`);
      const far = Math.abs(target.x - current.x) + Math.abs(target.y - current.y) > 0.3;
      frame = far ? requestAnimationFrame(paint) : 0;
    };
    const aim = (event) => {
      const w = cover.offsetWidth;
      target.x = event.clientX + 24;
      target.y = event.clientY - cover.offsetHeight / 2;
      if (target.x + w > window.innerWidth - 16) target.x = event.clientX - w - 24;
      if (!frame) frame = requestAnimationFrame(paint);
    };

    $$("[data-cover]").forEach((link) => {
      new Image().src = link.dataset.cover; // pré-carrega para não piscar
      link.addEventListener("mouseenter", (event) => {
        coverImg.src = link.dataset.cover;
        if (!cover.classList.contains("is-on")) {
          aim(event);
          current.x = target.x;
          current.y = target.y;
          paint();
        }
        cover.classList.add("is-on");
      });
      link.addEventListener("mousemove", aim);
      link.addEventListener("mouseleave", () => cover.classList.remove("is-on"));
    });
  }

  /* ---------------------------------------- Playground: amplia a peça */
  const zoom = $("[data-zoom-dialog]");
  if (zoom && typeof zoom.showModal === "function") {
    const big = $("img", zoom);
    $$("[data-zoom]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const thumb = $("img", btn);
        big.src = btn.dataset.zoom;
        big.alt = thumb ? thumb.alt : "";
        zoom.showModal();
        zoom.scrollTop = 0;
      });
    });
    zoom.addEventListener("click", (event) => {
      if (event.target === zoom || event.target === big) zoom.close();
    });
  }

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

  /* ============================================================ Inspetor
     Botão no canto inferior esquerdo com camadas combináveis:
     layout, espaçamentos, cores e componentes. */
  const inspectBtn = $("[data-inspect-btn]");
  const shell = $(".shell");
  if (inspectBtn && shell) setupInspector(inspectBtn, shell);

  function setupInspector(btn, shell) {
    const LAYERS = ["layout", "spacing", "colors", "components"];
    const L = isEN
      ? { title: "Inspect", layout: "Layout", spacing: "Spacing", colors: "Colors", components: "Components", off: "Turn all off", palette: "Colors on this page", light: "light theme", dark: "dark theme", text: "text", fill: "fill", border: "border", gap: "gap" }
      : { title: "Inspecionar", layout: "Layout", spacing: "Espaçamentos", colors: "Cores", components: "Componentes", off: "Desligar tudo", palette: "Cores desta página", light: "tema claro", dark: "tema escuro", text: "texto", fill: "fundo", border: "borda", gap: "gap" };
    const PATHS = {
      layout: '<path d="M5.5 2v12M10.5 2v12M2 5.5h12M2 10.5h12"/>',
      spacing: '<rect x="2.5" y="2.5" width="11" height="11" rx="1.5"/><path d="M2.5 6 6 2.5M2.5 10 10 2.5M2.5 13.5l11-11M6 13.5 13.5 6M10 13.5l3.5-3.5"/>',
      colors: '<circle cx="8" cy="8" r="5.5"/><path d="M8 2.5a5.5 5.5 0 0 1 0 11Z" fill="currentColor" stroke="none"/>',
      components: '<path d="M8 2 10 4 8 6 6 4ZM4 6 6 8 4 10 2 8ZM12 6l2 2-2 2-2-2ZM8 10l2 2-2 2-2-2Z"/>',
    };
    const icon = (d) => `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
    const desktop = mq("(min-width: 900px) and (hover: hover)");

    // Nome de cada peça, como as camadas no Figma (a ordem define a prioridade)
    const PARTS = [
      [".avatar", "Avatar"],
      [".back-link", "Back link"],
      [".lang-btn", "Button / Language"],
      [".theme-btn", "Button / Theme"],
      [".cta--main", "Button / Primary"],
      [".cta:not(.cta--main)", "Button / Secondary"],
      [".brand", "Chip / Company"],
      [".menu", "Nav"],
      [".socials", "Social links"],
      [".block-title", "Section title"],
      [".work", "Project row"],
      [".show-more", "Button / Show more"],
      [".job", "Timeline item"],
      [".logo-grid", "Logo grid"],
      [".gh", "GitHub / Contributions"],
      [".piece", "Exploration card"],
      [".facts", "Meta"],
      [".numbers", "Stats"],
      [".step-list", "Steps"],
      [".swatch-list", "Swatches"],
      [".up-next", "Next case"],
      [".tray", "Panel"],
      [".media", "Figure"],
      [".page-intro, .case-intro", "Page header"],
      [".top", "Header"],
      [".foot", "Footer"],
    ];
    const TOKENS = ["bg", "panel", "chip", "hover", "fg", "muted", "subtle", "line", "line-strong", "accent"];

    // Menu
    const menu = document.createElement("div");
    menu.className = "ins-menu";
    menu.id = "ins-menu";
    menu.setAttribute("role", "menu");
    menu.setAttribute("aria-label", L.title);
    menu.innerHTML =
      `<p class="ins-title" aria-hidden="true">${L.title}</p>` +
      LAYERS.map((k) => `<button type="button" role="menuitemcheckbox" aria-checked="false" data-layer="${k}" tabindex="-1"><span class="ins-ico">${icon(PATHS[k])}</span><span class="ins-name">${L[k]}</span><svg class="ins-check" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3.5 8.5 3 3 6-7"/></svg></button>`).join("") +
      `<button type="button" role="menuitem" class="ins-off" data-off tabindex="-1">${L.off}</button>`;
    document.body.append(menu);
    const items = $$("button", menu);
    btn.setAttribute("aria-controls", menu.id);
    btn.setAttribute("aria-label", L.title);
    btn.title = L.title;

    let open = false;
    const openMenu = (focus) => {
      open = true;
      menu.classList.remove("is-closing");
      menu.classList.add("is-open");
      btn.setAttribute("aria-expanded", "true");
      if (focus) items[0].focus();
    };
    const closeMenu = (refocus) => {
      if (!open) return;
      open = false;
      menu.classList.replace("is-open", "is-closing");
      setTimeout(() => menu.classList.remove("is-closing"), 150);
      btn.setAttribute("aria-expanded", "false");
      if (refocus) btn.focus();
    };
    btn.addEventListener("click", () => (open ? closeMenu() : openMenu(false)));
    btn.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp" || e.key === "ArrowDown") { e.preventDefault(); openMenu(true); }
    });
    menu.addEventListener("keydown", (e) => {
      const visible = items.filter((b) => !b.hidden);
      const at = visible.indexOf(document.activeElement);
      if (e.key === "ArrowDown") { e.preventDefault(); visible[(at + 1) % visible.length].focus(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); visible[(at - 1 + visible.length) % visible.length].focus(); }
      else if (e.key === "Escape") { e.preventDefault(); closeMenu(true); }
      else if (e.key === "Tab") closeMenu(false);
    });
    document.addEventListener("pointerdown", (e) => {
      if (open && !menu.contains(e.target) && !btn.contains(e.target)) closeMenu();
    });

    // Estado: data-<camada>="on" no <html>, lembrado na sessão
    const activeLayers = () => LAYERS.filter((k) => html.dataset[k] === "on");
    const setLayers = (list) => {
      LAYERS.forEach((k) => { if (list.includes(k)) html.dataset[k] = "on"; else delete html.dataset[k]; });
      if (list.length) html.dataset.inspect = "on"; else delete html.dataset.inspect;
      try { list.length ? sessionStorage.setItem("pm-inspect", list.join(",")) : sessionStorage.removeItem("pm-inspect"); } catch (e) {}
      refresh();
    };
    items.forEach((b) => b.addEventListener("click", () => {
      if (b.hasAttribute("data-off")) return setLayers([]);
      const now = activeLayers(), k = b.dataset.layer;
      setLayers(now.includes(k) ? now.filter((x) => x !== k) : now.concat(k));
    }));

    // Camadas desenhadas em coordenadas do documento
    const layer = document.createElement("div");
    layer.className = "ins-layer";
    layer.setAttribute("aria-hidden", "true");
    const palette = document.createElement("aside");
    palette.className = "ins-palette";
    palette.setAttribute("aria-label", L.palette);
    const key = document.createElement("div");
    key.className = "ins-key";
    key.innerHTML = ["pad", "margin", "gap"].map((k) => `<span data-kind="${k}"><i class="sp--${k}"></i>${k === "pad" ? "padding" : k}</span>`).join("");
    $$("span", key).forEach((s) => {
      s.addEventListener("pointerenter", () => { layer.dataset.only = s.dataset.kind; });
      s.addEventListener("pointerleave", () => { delete layer.dataset.only; });
    });
    document.body.append(layer, palette, key);

    const put = (cls, x, y, w, h) => {
      const d = document.createElement("div");
      d.className = cls;
      d.style.cssText = `left:${x + window.scrollX}px;top:${y + window.scrollY}px;width:${w}px;height:${h}px`;
      layer.append(d);
      return d;
    };
    const num = (v) => Math.round(parseFloat(v) * 10) / 10 || 0;
    const visibleBox = (el) => {
      const s = getComputedStyle(el);
      return !["none", "inline", "contents"].includes(s.display) && !["absolute", "fixed"].includes(s.position) && s.visibility !== "hidden" && el.getClientRects().length > 0;
    };
    // Registro de etiquetas para não sobrepor rótulos de camadas diferentes
    let taken = [];
    const fits = (x, y, w) => !taken.some((t) => Math.abs(t.y - y) < 16 && x < t.x + t.w + 4 && t.x < x + w + 4);
    const reserve = (x, y, w) => taken.push({ x, y, w });

    function drawSpacing() {
      let count = 0;
      const band = (kind, x, y, w, h, value) => {
        if (w < 2 || h < 2 || count > 900) return;
        count++;
        const d = put(`sp sp--${kind}`, x, y, w, h);
        const lx = x + w / 2 - 12, ly = y + h / 2 - 7;
        if (Math.min(w, h) >= 12 && Math.max(w, h) >= 28 && fits(lx, ly, 24)) {
          reserve(lx, ly, 24);
          const tag = document.createElement("span");
          tag.textContent = Math.round(value);
          d.append(tag);
        }
      };
      const four = (cs, prop) => ["Top", "Right", "Bottom", "Left"].map((s) => num(cs[prop.replace("$", s)]));
      for (const el of [shell, ...$$("*", shell)]) {
        if (el instanceof SVGElement) continue;
        const cs = getComputedStyle(el);
        if (["inline", "none", "contents"].includes(cs.display)) continue;
        const r = el.getBoundingClientRect();
        if (r.width < 1 || r.height < 1) continue;
        const [bt, br, bb, bl] = four(cs, "border$Width");
        const [pt, pr, pb, pl] = four(cs, "padding$");
        const [mt, mr, mb, ml] = four(cs, "margin$");
        const x = r.left + bl, y = r.top + bt, w = r.width - bl - br, h = r.height - bt - bb;

        if (pt >= 4) band("pad", x, y, w, pt, pt);
        if (pb >= 4) band("pad", x, y + h - pb, w, pb, pb);
        if (el !== shell) {
          if (pl >= 4) band("pad", x, y + pt, pl, h - pt - pb, pl);
          if (pr >= 4) band("pad", x + w - pr, y + pt, pr, h - pt - pb, pr);
        }

        if (el !== shell && visibleBox(el)) {
          if (mt >= 4) band("margin", r.left, r.top - mt, r.width, mt, mt);
          if (mb >= 4) band("margin", r.left, r.bottom, r.width, mb, mb);
          const centered = (v) => v >= 64 || (Math.abs(ml - mr) < 1 && ml >= 16);
          if (ml >= 4 && !centered(ml)) band("margin", r.left - ml, r.top, ml, r.height, ml);
          if (mr >= 4 && !centered(mr)) band("margin", r.right, r.top, mr, r.height, mr);
        }

        if (!/flex|grid/.test(cs.display) || /^(IMG|VIDEO|PICTURE)$/.test(el.tagName)) continue;
        const kids = Array.from(el.children).filter((k) => !(k instanceof SVGElement) && visibleBox(k)).map((k) => {
          const kr = k.getBoundingClientRect();
          const [t, rr, b, l] = four(getComputedStyle(k), "margin$");
          return { top: kr.top - Math.max(t, 0), bottom: kr.bottom + Math.max(b, 0), left: kr.left - Math.max(l, 0), right: kr.right + Math.max(rr, 0) };
        });
        const cx = x + pl, cw = w - pl - pr;
        for (let i = 1; i < kids.length; i++) {
          const a = kids[i - 1], b = kids[i];
          if (b.top >= a.bottom - 0.5 && b.top - a.bottom >= 4) band("gap", cx, a.bottom, cw, b.top - a.bottom, b.top - a.bottom);
          else if (b.left >= a.right - 0.5 && b.left - a.right >= 4 && Math.min(a.bottom, b.bottom) > Math.max(a.top, b.top)) {
            const top = Math.max(a.top, b.top);
            band("gap", a.right, top, b.left - a.right, Math.min(a.bottom, b.bottom) - top, b.left - a.right);
          }
        }
      }
    }

    function drawComponents() {
      const done = new Set();
      PARTS.forEach(([sel, name]) => {
        $$(sel, shell).forEach((el) => {
          if (done.has(el)) return;
          done.add(el);
          const r = el.getBoundingClientRect();
          if (r.width < 4 || r.height < 4) return;
          const d = put("cmp", r.left, r.top, r.width, r.height);
          d.style.borderRadius = getComputedStyle(el).borderRadius;
          const w = name.length * 6 + 22, y = r.top - 17;
          if (fits(r.left, y, w)) {
            reserve(r.left, y, w);
            const tag = document.createElement("span");
            tag.innerHTML = icon(PATHS.components).replace('fill="none"', 'fill="currentColor"') + name;
            d.append(tag);
          } else d.title = name;
        });
      });
    }

    // Cores: resolve cada token no tema atual e conta onde é usado
    const resolveTokens = () => {
      const probe = document.createElement("i");
      probe.style.cssText = "position:absolute;visibility:hidden";
      document.body.append(probe);
      const out = TOKENS.map((t) => { probe.style.color = `var(--${t})`; return [t, getComputedStyle(probe).color]; });
      probe.remove();
      return out;
    };
    const hex = (rgb) => {
      const m = rgb.match(/[\d.]+/g);
      if (!m) return rgb;
      const h = "#" + m.slice(0, 3).map((v) => Math.round(+v).toString(16).padStart(2, "0")).join("");
      return m[3] !== undefined && +m[3] < 1 ? `${h} · ${Math.round(+m[3] * 100)}%` : h;
    };
    const usage = (el, tokens) => {
      const cs = getComputedStyle(el), found = [];
      const hasText = Array.from(el.childNodes).some((n) => n.nodeType === 3 && n.textContent.trim());
      tokens.forEach(([t, v]) => {
        if (hasText && cs.color === v) found.push([L.text, t]);
        if (cs.backgroundColor === v) found.push([L.fill, t]);
        const border = (num(cs.borderTopWidth) > 0 && cs.borderTopColor === v) || (num(cs.borderBottomWidth) > 0 && cs.borderBottomColor === v) || (cs.boxShadow !== "none" && cs.boxShadow.includes(v));
        if (border) found.push([L.border, t]);
      });
      return found;
    };
    let tokens = [];
    function drawColors() {
      tokens = resolveTokens();
      const counts = Object.fromEntries(TOKENS.map((t) => [t, 0]));
      const users = new Map();
      counts.bg = 1; // fundo da página
      $$("*", shell).forEach((el) => {
        if (el instanceof SVGElement) return;
        usage(el, tokens).forEach(([, t]) => {
          counts[t]++;
          if (!users.has(t)) users.set(t, []);
          users.get(t).push(el);
        });
      });
      $$("*", shell).forEach((el) => {
        if (el instanceof SVGElement) return;
        const u = usage(el, tokens).filter(([kind]) => kind !== L.border);
        if (!u.length) return;
        const r = el.getBoundingClientRect();
        if (r.width < 40 || r.height < 10) return;
        const t = (u.find(([kind]) => kind === L.fill) || u[0])[1];
        const w = t.length * 6.6 + 30, y = r.top - 17;
        if (!fits(r.right - w, y, w)) return;
        reserve(r.right - w, y, w);
        const d = put("tok", r.left, r.top, r.width, r.height);
        d.dataset.token = t;
        d.innerHTML = `<span><i style="background:var(--${t})"></i>--${t}</span>`;
      });
      palette.innerHTML =
        `<header><span>${L.palette}</span><span>${html.dataset.theme === "dark" ? L.dark : L.light}</span></header><ul>` +
        tokens.map(([t, v]) => `<li data-token="${t}"${counts[t] ? "" : ' class="is-unused"'}><span class="sw" style="background:var(--${t})"></span><code>--${t}</code><span class="val">${hex(v)}</span><span class="num">${counts[t]}</span></li>`).join("") +
        "</ul>";
      $$("li", palette).forEach((li) => {
        li.addEventListener("pointerenter", () => {
          $$(".tok", layer).forEach((d) => d.classList.toggle("is-faded", d.dataset.token !== li.dataset.token));
          (users.get(li.dataset.token) || []).forEach((el) => {
            const r = el.getBoundingClientRect();
            if (r.width && r.height) put("tok-hit", r.left, r.top, r.width, r.height);
          });
        });
        li.addEventListener("pointerleave", () => {
          $$(".tok-hit", layer).forEach((d) => d.remove());
          $$(".is-faded", layer).forEach((d) => d.classList.remove("is-faded"));
        });
      });
    }

    let frame = 0;
    function render() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        layer.replaceChildren();
        taken = [];
        const on = activeLayers();
        if (!desktop.matches || html.dataset.build === "on" || html.dataset.build === "reveal") return;
        if (on.includes("spacing")) drawSpacing();
        if (on.includes("components")) drawComponents();
        if (on.includes("colors")) drawColors();
      });
    }
    function refresh() {
      const on = activeLayers();
      items.forEach((b) => b.dataset.layer && b.setAttribute("aria-checked", String(on.includes(b.dataset.layer))));
      $("[data-off]", menu).hidden = !on.length;
      btn.toggleAttribute("data-active", on.length > 0);
      if (!on.length) dropHover();
      render();
    }

    new ResizeObserver(render).observe(shell);
    window.addEventListener("resize", render);
    new MutationObserver(render).observe(html, { attributes: true, attributeFilter: ["data-theme", "data-build"] });
    shell.addEventListener("toggle", render, true);
    shell.addEventListener("click", () => setTimeout(render, 50)); // ex.: "Ver mais"

    // Etiqueta que segue o cursor com medidas e informações das camadas ligadas
    let tip = null, hovered = null;
    function dropHover() {
      if (hovered) hovered.classList.remove("is-hovered");
      hovered = null;
      if (tip) tip.remove();
      tip = null;
    }
    if (mq("(hover: hover) and (pointer: fine)").matches) {
      document.addEventListener("pointermove", (e) => {
        const on = activeLayers();
        if (!on.length || !desktop.matches) return;
        const el = e.target.closest ? e.target.closest(".shell *:not(svg *)") : null;
        if (!el) return dropHover();
        if (el !== hovered) {
          if (hovered) hovered.classList.remove("is-hovered");
          hovered = el;
          el.classList.add("is-hovered");
          if (!tip) {
            tip = document.createElement("div");
            tip.className = "ins-tip";
            tip.setAttribute("aria-hidden", "true");
            document.body.append(tip);
          }
          const r = el.getBoundingClientRect(), cs = getComputedStyle(el);
          const first = Array.from(el.classList).find((c) => c !== "is-hovered");
          const rows = [`<b>${first ? "." + first : el.tagName.toLowerCase()}</b><span>${Math.round(r.width)} × ${Math.round(r.height)}</span>`];
          if (on.includes("spacing")) {
            const g = parseFloat(cs.rowGap) || parseFloat(cs.columnGap);
            if (g && /flex|grid/.test(cs.display)) rows.push(`<span class="k"><i class="gap-dot"></i>${L.gap}</span><span>${Math.round(g)}</span>`);
          }
          if (on.includes("colors")) {
            if (!tokens.length) tokens = resolveTokens();
            usage(el, tokens).forEach(([k, t]) => rows.push(`<span class="k">${k}</span><span><i style="background:var(--${t})"></i>--${t}</span>`));
          }
          if (on.includes("components")) {
            const part = PARTS.find(([sel]) => el.matches(sel));
            if (part) rows.push(`<span class="k">◆</span><span>${part[1]}</span>`);
          }
          tip.innerHTML = rows.map((row) => `<div>${row}</div>`).join("");
        }
        tip.style.left = `${Math.min(e.clientX + 12, window.innerWidth - tip.offsetWidth - 8)}px`;
        tip.style.top = `${Math.min(e.clientY + 16, window.innerHeight - tip.offsetHeight - 8)}px`;
      });
      document.addEventListener("pointerleave", dropHover);
    }

    refresh();
  }

  /* ===================================================== Loader de construção
     Desenha a "planta" com as caixas reais da página e depois revela o conteúdo.
     Se o script chegou tarde (rede lenta), mostra tudo direto. */
  if (html.dataset.build === "on" && performance.now() > 2500) html.dataset.build = "done";
  if (html.dataset.build === "on") runBlueprint();

  function runBlueprint() {
    const shell = $(".shell");
    if (!shell) { html.dataset.build = "done"; return; }
    const PICK = [
      ".top .avatar", ".top-name", ".menu a", ".top .ghost-btn",
      "main h1", "main h2", "main p", "main summary", "main .work",
      "main li > a", "main .piece", "main figure", ".case-intro > *", "main .logo-grid li", ".cta",
      ".page-intro > *", ".foot > *",
    ].join(",");
    const kind = (el) => {
      if (el.classList.contains("work")) return "row";
      if (el.tagName === "IMG" || el.tagName === "FIGURE" || el.classList.contains("piece")) return "img";
      if (/^(P|H1|H2|H3|SUMMARY)$/.test(el.tagName)) return "text";
      if (el.tagName === "BUTTON" || el.classList.contains("ghost-btn") || el.classList.contains("cta")) return "btn";
      if (el.tagName === "A") return "link";
      return "frame";
    };
    // Linhas reais de texto de um bloco, agrupadas por altura
    const lines = (el) => {
      const range = document.createRange();
      range.selectNodeContents(el);
      const rows = new Map();
      Array.from(range.getClientRects()).forEach((r) => {
        if (r.width < 4 || r.height < 4) return;
        const k = Math.round((r.top + r.height / 2) / 6);
        const row = rows.get(k);
        if (row) { row.l = Math.min(row.l, r.left); row.r = Math.max(row.r, r.right); }
        else rows.set(k, { l: r.left, r: r.right, y: r.top + r.height / 2 });
      });
      return Array.from(rows.values()).sort((a, b) => a.y - b.y).slice(0, 8);
    };

    let ended = false, overlay = null, clockFrame = 0;
    const timers = [];
    const end = () => {
      if (ended) return;
      ended = true;
      timers.forEach(clearTimeout);
      cancelAnimationFrame(clockFrame);
      html.dataset.build = "done";
      if (overlay) overlay.remove();
    };
    ["pointerdown", "keydown", "wheel", "touchstart"].forEach((t) => window.addEventListener(t, end, { once: true, passive: true }));

    const draw = () => {
      if (ended) return;
      html.style.setProperty("--scroll-y", `${window.scrollY}px`);
      const vh = window.innerHeight;
      const chosen = [];
      for (const el of $$(PICK, shell)) {
        if (chosen.length >= 48) break;
        if (chosen.some((c) => c.contains(el))) continue;
        const r = el.getBoundingClientRect();
        if (r.width < 8 || r.height < 8 || r.bottom < 0 || r.top > vh) continue;
        chosen.push(el);
      }

      overlay = document.createElement("div");
      overlay.className = "blueprint";
      overlay.setAttribute("aria-hidden", "true");
      const ref = ($(".top", shell) || shell).getBoundingClientRect();
      const col = document.createElement("div");
      col.className = "bp-col";
      col.style.left = `${ref.left - 0.5}px`;
      col.style.width = `${ref.width + 1}px`;
      const clock = document.createElement("span");
      clock.className = "bp-clock";
      col.append(clock);
      overlay.append(col);

      const step = Math.min(24, 520 / Math.max(chosen.length, 1));
      const labels = [];
      const room = (x, y, w) => !labels.some((l) => Math.abs(l.y - y) < 14 && x < l.x + l.w + 6 && l.x < x + w + 6);
      let lineCount = 0;
      chosen.forEach((el, i) => {
        const r = el.getBoundingClientRect();
        const k = kind(el);
        const box = document.createElement("div");
        box.className = "bp-box";
        if (el.classList.contains("avatar") || getComputedStyle(el).borderRadius === "50%") box.classList.add("is-circle");
        box.style.cssText = `left:${r.left}px;top:${r.top}px;width:${r.width}px;height:${r.height}px;--delay:${Math.round(i * step)}ms`;
        box.innerHTML = "<i></i><i></i><i></i><i></i>";
        const text = `${k === "frame" ? "" : k.toUpperCase() + " "}${Math.round(r.width)} × ${Math.round(r.height)}`;
        const lw = text.length * 6.2, ly = r.top - 14;
        if (r.width >= 56 && ly > 24 && !(window.innerWidth < 640 && k === "link") && room(r.left, ly, lw)) {
          labels.push({ x: r.left, y: ly, w: lw });
          const b = document.createElement("b");
          b.textContent = text;
          box.append(b);
        }
        overlay.append(box);

        const sources = k === "text" || k === "link" ? [el] : $$(".work-name, .work-desc, strong, span:not(:has(*))", el).slice(0, 3);
        sources.forEach((s) => lines(s).forEach((ln, j) => {
          if (lineCount > 90 || ln.y > vh) return;
          lineCount++;
          const line = document.createElement("span");
          line.className = "bp-line";
          line.style.cssText = `left:${ln.l}px;top:${ln.y}px;width:${Math.max(ln.r - ln.l, 6)}px;--delay:${Math.round(i * step + 90 + j * 40)}ms`;
          overlay.append(line);
        }));
      });
      document.body.append(overlay);

      const width = Math.round(ref.width), start = performance.now();
      const tick = (now) => {
        clock.textContent = `${width} × ${vh}  t+${((now - start) / 1000).toFixed(2)}s`;
        clockFrame = requestAnimationFrame(tick);
      };
      clockFrame = requestAnimationFrame(tick);

      const built = Math.round(chosen.length * step) + 420;
      timers.push(setTimeout(() => { html.dataset.build = "reveal"; }, built));
      timers.push(setTimeout(() => overlay.classList.add("is-gone"), built + 520));
      timers.push(setTimeout(end, built + 1000));
    };

    // Espera as fontes (até 400ms) para medir as linhas no tamanho certo
    const fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    Promise.race([fontsReady, new Promise((r) => setTimeout(r, 400))]).then(() => requestAnimationFrame(draw));
  }

  /* ---------------------------------------------------------- Analytics
     Sem rastreamento por enquanto. Para ativar depois, adicione aqui o
     snippet do provedor escolhido (ex.: Vercel Analytics, PostHog ou GA4).
     window.addEventListener("load", () => { ... });
  */
})();
