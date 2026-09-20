(() => {
  const LANGS = ["pt-PT", "pt-BR", "en"];
  const STORAGE_KEY = "forma-lang";
  const config = window.FORMA_CONFIG || {};
  const i18n = window.FORMA_I18N;
  const products = window.FORMA_PRODUCTS;
  const niches = window.FORMA_NICHES;

  if (!i18n || !products || !niches) {
    console.error("FORMA: missing i18n or product data");
    return;
  }

  const state = {
    lang: detectLang(),
    filter: "all",
    interests: new Set()
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  function detectLang() {
    const params = new URLSearchParams(location.search);
    const fromUrl = params.get("lang");
    if (LANGS.includes(fromUrl)) return fromUrl;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (LANGS.includes(stored)) return stored;
    const nav = (navigator.language || "en").toLowerCase();
    if (nav.startsWith("pt-br") || nav === "pt-br") return "pt-BR";
    if (nav.startsWith("pt")) return "pt-PT";
    return "en";
  }

  function lookup(lang, key) {
    return key.split(".").reduce((acc, part) => (acc ? acc[part] : undefined), i18n[lang]);
  }

  function t(key) {
    return lookup(state.lang, key) ?? lookup("en", key) ?? key;
  }

  function applyI18n() {
    document.documentElement.lang = state.lang;
    document.title = t("meta.title");
    const desc = $('meta[name="description"]');
    if (desc) desc.setAttribute("content", t("meta.description"));

    $$("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    $$("[data-i18n-placeholder]").forEach((el) => {
      el.setAttribute("placeholder", t(el.dataset.i18nPlaceholder));
    });
    $$(".lang button").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === state.lang));
    });
    renderNiches();
    renderFilters();
    renderProducts();
    renderShopList();
    renderChips();
    if (window.FORMA_QUOTE) window.FORMA_QUOTE.refresh();
  }

  function setLang(lang) {
    if (!LANGS.includes(lang)) return;
    state.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    const url = new URL(location.href);
    url.searchParams.set("lang", lang);
    history.replaceState({}, "", url);
    applyI18n();
  }

  function pickCopy(value) {
    if (value == null) return "";
    if (typeof value === "string") return value;
    return value[state.lang] || value["pt-BR"] || value["pt-PT"] || value.en || "";
  }

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function productThumb(product, accent) {
    const src = (product.image || "").trim();
    const name = pickCopy(product.name);
    if (src) {
      return `<img src="${esc(src)}" alt="${esc(name)}" />`;
    }
    return svgFor(product.id, accent);
  }

  function svgFor(id, accent) {
    const svgs = {
      "initials-keychain": `<svg viewBox="0 0 80 80" fill="none"><circle cx="22" cy="22" r="10" stroke="${accent}" stroke-width="4"/><rect x="30" y="30" width="34" height="34" rx="6" fill="#f4ecdc"/><path d="M40 40h6v18h-6zM46 40h10c5 0 8 3 8 7s-3 7-8 7H46" stroke="#1a1410" stroke-width="3"/></svg>`,
      "pixel-mascot": `<svg viewBox="0 0 80 80"><rect x="22" y="18" width="36" height="28" fill="#f4ecdc"/><rect x="28" y="24" width="8" height="8" fill="#1a1410"/><rect x="44" y="24" width="8" height="8" fill="#1a1410"/><rect x="32" y="46" width="8" height="16" fill="#f4ecdc"/><rect x="44" y="46" width="8" height="16" fill="#f4ecdc"/><rect x="18" y="28" width="8" height="8" fill="${accent}"/></svg>`,
      "name-tag": `<svg viewBox="0 0 80 80" fill="none"><rect x="12" y="28" width="56" height="24" rx="6" fill="#f4ecdc"/><circle cx="24" cy="40" r="4" fill="${accent}"/><path d="M34 40h28" stroke="#1a1410" stroke-width="3"/></svg>`,
      "geo-planter": `<svg viewBox="0 0 80 80"><path d="M24 22h32l8 36H16z" fill="#f4ecdc"/><path d="M28 18h8l2 8h-12z" fill="${accent}"/></svg>`,
      "cable-nest": `<svg viewBox="0 0 80 80" fill="none"><path d="M16 48c10-18 38-18 48 0" stroke="#f4ecdc" stroke-width="8" stroke-linecap="round"/><circle cx="20" cy="50" r="6" fill="${accent}"/></svg>`,
      "wyrm-mini": `<svg viewBox="0 0 80 80" fill="none"><path d="M16 50c10-22 22-8 30-20 6 14 18 8 18 22" stroke="#f4ecdc" stroke-width="6" stroke-linecap="round"/><circle cx="58" cy="28" r="6" fill="${accent}"/></svg>`,
      "assembled-figure": `<svg viewBox="0 0 80 80"><circle cx="40" cy="16" r="8" fill="#f4ecdc"/><rect x="32" y="26" width="16" height="22" fill="#f4ecdc"/><rect x="22" y="28" width="10" height="6" fill="${accent}"/><rect x="48" y="28" width="10" height="6" fill="${accent}"/><rect x="32" y="50" width="6" height="18" fill="#f4ecdc"/><rect x="42" y="50" width="6" height="18" fill="#f4ecdc"/></svg>`,
      "comic-bust": `<svg viewBox="0 0 80 80"><circle cx="40" cy="24" r="12" fill="#f4ecdc"/><path d="M18 70c4-22 40-22 44 0" fill="#f4ecdc"/><rect x="34" y="22" width="12" height="4" fill="${accent}"/></svg>`,
      "hero-pack": `<svg viewBox="0 0 80 80">${[0, 1, 2, 3, 4]
        .map((i) => `<rect x="${12 + i * 13}" y="${28 + (i % 2) * 8}" width="10" height="22" fill="${i === 2 ? accent : "#f4ecdc"}"/>`)
        .join("")}</svg>`,
      "display-helm": `<svg viewBox="0 0 80 80"><path d="M16 44c0-18 12-28 24-28s24 10 24 28v8H16z" fill="#f4ecdc"/><rect x="28" y="40" width="24" height="8" fill="${accent}"/></svg>`,
      "stage-hilt": `<svg viewBox="0 0 80 80"><rect x="36" y="12" width="8" height="40" fill="#f4ecdc"/><rect x="18" y="34" width="44" height="8" fill="${accent}"/><rect x="32" y="52" width="16" height="16" rx="3" fill="#f4ecdc"/></svg>`,
      "desk-tray": `<svg viewBox="0 0 80 80"><rect x="12" y="28" width="56" height="28" rx="4" fill="#f4ecdc"/><rect x="18" y="34" width="18" height="16" fill="${accent}"/><rect x="42" y="34" width="20" height="10" fill="#1a1410" opacity=".25"/></svg>`
    };
    return svgs[id] || svgs["geo-planter"];
  }

  function renderNiches() {
    const root = $("#niche-grid");
    root.innerHTML = niches
      .map((niche, i) => {
        const title = t(`niches.${niche.id}.title`);
        const desc = t(`niches.${niche.id}.desc`);
        return `<button class="niche" type="button" data-niche="${niche.id}" style="--accent:${niche.accent}">
          <span class="niche-idx">0${i + 1}</span>
          <h3>${title}</h3>
          <p>${desc}</p>
        </button>`;
      })
      .join("");
    $$(".niche", root).forEach((btn) => {
      btn.addEventListener("click", () => {
        state.filter = btn.dataset.niche;
        state.interests.add(btn.dataset.niche);
        renderFilters();
        renderProducts();
        renderChips();
        $("#catalogo").scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  function renderFilters() {
    const root = $("#filters");
    const items = [{ id: "all", label: t("catalog.filterAll") }, ...niches.map((n) => ({ id: n.id, label: t(`niches.${n.id}.title`) }))];
    root.innerHTML = items
      .map(
        (item) =>
          `<button class="filter" type="button" data-filter="${item.id}" aria-pressed="${item.id === state.filter}">${item.label}</button>`
      )
      .join("");
    $$(".filter", root).forEach((btn) => {
      btn.addEventListener("click", () => {
        state.filter = btn.dataset.filter;
        renderFilters();
        renderProducts();
      });
    });
  }

  function formatPrice(product) {
    if (product.price == null) return t("catalog.quote");
    return `${t("catalog.from")} ${product.price}${t("catalog.currency")}`;
  }

  function renderProducts() {
    const root = $("#product-grid");
    const empty = $("#catalog-empty");
    const list = products.filter((p) => state.filter === "all" || p.niche === state.filter);
    empty.hidden = list.length > 0;
    root.innerHTML = list
      .map((product) => {
        const niche = niches.find((n) => n.id === product.niche);
        const name = pickCopy(product.name);
        const blurb = pickCopy(product.blurb);
        return `<article class="card">
          <div class="thumb" style="--accent:${niche.accent}">${productThumb(product, niche.accent)}</div>
          <div class="card-body">
            <h3>${esc(name)}</h3>
            <p>${esc(blurb)}</p>
          </div>
          <div class="card-meta">
            <div>
              <div class="price">${formatPrice(product)}</div>
              <span class="status" data-status="${product.status}">${t(`catalog.status.${product.status}`)}</span>
            </div>
            <button class="notify" type="button" data-notify="${product.niche}">${t("catalog.notify")}</button>
          </div>
        </article>`;
      })
      .join("");
    $$("[data-notify]", root).forEach((btn) => {
      btn.addEventListener("click", () => {
        state.interests.add(btn.dataset.notify);
        renderChips();
        $("#waitlist-form").scrollIntoView({ behavior: "smooth" });
        $("#email").focus();
      });
    });
  }

  function renderShopList() {
    const items = lookup(state.lang, "shop.items") || lookup("en", "shop.items") || [];
    $("#shop-list").innerHTML = items.map((item) => `<li>${item}</li>`).join("");
  }

  function renderChips() {
    const root = $("#interest-chips");
    root.innerHTML = niches
      .map((niche) => {
        const pressed = state.interests.has(niche.id);
        return `<button class="chip" type="button" data-chip="${niche.id}" style="--accent:${niche.accent}" aria-pressed="${pressed}">${t(`niches.${niche.id}.title`)}</button>`;
      })
      .join("");
    $$(".chip", root).forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.chip;
        if (state.interests.has(id)) state.interests.delete(id);
        else state.interests.add(id);
        renderChips();
      });
    });
  }

  function endpoint() {
    if (config.formspreeId) return { url: `https://formspree.io/f/${config.formspreeId}`, extra: {} };
    if (config.ownerEmail) {
      return {
        url: `https://formsubmit.co/ajax/${encodeURIComponent(config.ownerEmail)}`,
        extra: { _captcha: "false", _template: "table" }
      };
    }
    return null;
  }

  function validEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function showStatus(type, message) {
    const el = $("#form-status");
    el.hidden = false;
    el.className = `form-status ${type}`;
    el.textContent = message;
  }

  async function onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.email.value.trim();
    const name = form.name.value.trim();
    const consent = form.consent.checked;
    const dest = endpoint();

    if (!validEmail(email)) {
      showStatus("err", t("form.invalidEmail"));
      return;
    }
    if (!consent) {
      showStatus("err", t("form.consentError"));
      return;
    }
    if (!dest) {
      showStatus("err", t("form.missingConfig"));
      return;
    }

    const submitBtn = form.querySelector("[type=submit] span");
    const original = submitBtn.textContent;
    submitBtn.textContent = t("form.sending");

    const payload = {
      email,
      name,
      language: state.lang,
      niches: [...state.interests].join(", ") || "unspecified",
      source: location.href,
      quote: document.getElementById("quote-summary")?.value || "",
      _subject: "FORMA waitlist",
      ...dest.extra
    };

    try {
      const res = await fetch(dest.url, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error("bad status");
      form.reset();
      showStatus("ok", `${t("form.successTitle")} ${t("form.success")}`);
    } catch (err) {
      showStatus("err", t("form.error"));
    } finally {
      submitBtn.textContent = original;
    }
  }

  function wireInstagram() {
    const link = $("#instagram-link");
    if (config.instagram) {
      link.hidden = false;
      link.href = config.instagram;
    }
  }

  $$(".lang button").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });
  $("#waitlist-form").addEventListener("submit", onSubmit);
  if (window.FORMA_QUOTE) window.FORMA_QUOTE.init();
  wireInstagram();
  applyI18n();
})();
