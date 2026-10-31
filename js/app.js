/* ════════════════════════════════════════════════════
   Summer Scrapbook — app.js

   ╔══════════════════════════════════════════════════╗
   ║  📸  ЯК ДОДАТИ ФОТО                             ║
   ║                                                  ║
   ║  1. Поклади фото у папку images/<назва-сторінки> ║
   ║  2. Вкажи назву файлу у полі photos[] нижче     ║
   ║  3. null = порожній слот (завантаж кліком)      ║
   ╚══════════════════════════════════════════════════╝
════════════════════════════════════════════════════ */

const PAGES = [
  { type: "cover" },

  // ── Сторінка 1 ─────────────────────────────────────────────────────────
  // Папка: images/little-moments/
  {
    type: "scrap", title: "The little moments",
    note: "Тут починається наша iсторiя \u273f",
    theme: "pg-warm", num: "01", sym: "\u25c8", doodle: "\u273f",
    t1: "top:117px;left:21px;transform:rotate(-26deg);background:rgba(218,185,138,.62)",
    t2: "top:257px;right:23px;left:auto;transform:rotate(22deg);background:rgba(196,174,152,.52)",
    photos: [
      "images/little-moments/photo1.jpg",                               // слот 1 — порожній
      "images/little-moments/photo2.jpg",                               // слот 2 — порожній
      "images/little-moments/photo3.jpg",                               // слот 3 — порожній
      "images/little-moments/photo4.jpg",                               // слот 4 — порожній
      // Приклад: "images/little-moments/photo1.jpg"
    ],
  },

  // ── Сторінка 2 ─────────────────────────────────────────────────────────
  // Папка: images/sunny-days/
  {
    type: "scrap", title: "Sunny days",
    note: "Мiсце для улюбленого спогаду",
    theme: "pg-sky", num: "02", sym: "\u2726", doodle: "\u2600",
    t1: "top:110px;left:26px;transform:rotate(-20deg);background:rgba(155,198,218,.62)",
    t2: "top:250px;right:21px;left:auto;transform:rotate(28deg);background:rgba(170,210,222,.52)",
    photos: [
      "images/sunny-days/photo6.jpg",                               // слот 1
      "images/sunny-days/photo7.jpg",                               // слот 2
      "images/sunny-days/photo8.jpg",                               // слот 3
      "images/sunny-days/photo9.jpg",                               // слот 4
      // Приклад: "images/sunny-days/beach.jpg"
    ],
  },

  // ── Сторінка 3 ─────────────────────────────────────────────────────────
  // Папка: images/postcards/
  {
    type: "scrap", title: "Postcards",
    note: "Wish you were here \u2661",
    theme: "pg-blush", num: "03", sym: "\u2661", doodle: "\u2709",
    t1: "top:121px;left:20px;transform:rotate(-30deg);background:rgba(208,162,168,.58)",
    t2: "top:253px;right:25px;left:auto;transform:rotate(18deg);background:rgba(218,182,178,.50)",
    photos: [
      "images/postcards/photo1.jpg",                               // слот 1
      "images/postcards/photo2.jpg",                               // слот 2
      "images/postcards/photo3.jpg",                               // слот 3
      "images/postcards/photo4.jpg",                               // слот 4
    ],
  },

  // ── Сторінка 4 ─────────────────────────────────────────────────────────
  // Папка: images/golden-hour/
  {
    type: "scrap", title: "Golden hour",
    note: "Збережи цей момент",
    theme: "pg-amber", num: "04", sym: "\u25c9", doodle: "\u2726",
    t1: "top:114px;left:25px;transform:rotate(-22deg);background:rgba(210,185,115,.62)",
    t2: "top:258px;right:20px;left:auto;transform:rotate(25deg);background:rgba(196,172,98,.52)",
    photos: [
      "images/golden-hour/photo5.jpg",                               // слот 1
      "images/golden-hour/photo6.jpg",                               // слот 2
      "images/golden-hour/photo7.jpg",                               // слот 3
      "images/golden-hour/photo8.jpg",                               // слот 4
    ],
  },

  // ── Сторінка 5 ─────────────────────────────────────────────────────────
  // Папка: images/little-details/
  {
    type: "scrap", title: "Little details",
    note: "Найкраще ховається в дрiбницях",
    theme: "pg-sage", num: "05", sym: "\u273f", doodle: "\u2663",
    t1: "top:119px;left:23px;transform:rotate(-28deg);background:rgba(158,192,152,.62)",
    t2: "top:254px;right:22px;left:auto;transform:rotate(20deg);background:rgba(172,202,165,.52)",
    photos: [
      "images/little-details/photo1.jpg",                               // слот 1
      "images/little-details/photo2.jpg",                               // слот 2
      "images/little-details/photo3.jpg",                               // слот 3
      "images/little-details/photo4.jpg",                               // слот 4
    ],
  },

  // ── Сторінка 6 ─────────────────────────────────────────────────────────
  // Папка: images/until-next-summer/
  {
    type: "scrap", title: "Until next summer",
    note: "To be continued\u2026",
    theme: "pg-lilac", num: "06", sym: "\u2605", doodle: "\u2661",
    t1: "top:112px;left:25px;transform:rotate(-24deg);background:rgba(182,168,212,.62)",
    t2: "top:256px;right:22px;left:auto;transform:rotate(26deg);background:rgba(192,180,218,.52)",
    photos: [
      "images/until-next-summer/photo1.jpg",                               // слот 1
      "images/until-next-summer/photo2.jpg",                               // слот 2
      "images/until-next-summer/photo3.jpg",                               // слот 3
      "images/until-next-summer/photo4.jpg",                               // слот 4
    ],
  },

  { type: "back-cover" },
];

const TOTAL = PAGES.length;

const pagesRoot = document.getElementById("insidePages");
const book = document.getElementById("book");
const picker = document.getElementById("photoPicker");
const pageCount = document.getElementById("pageCount");

let current = 0;
let isAnimating = false;
let selectedSlot = null;
let touchStartX = 0;

// ── Utils ─────────────────────────────────────────────────────────────────
function esc(v) {
  return String(v).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[c])
  );
}
function slots(n) {
  return Array.from({ length: n }, (_, s) =>
    '<button class="photo-slot" type="button" aria-label="Фото ' + (s + 1) + '" data-slot="' + s + '">' +
    '<span class="add-photo"><b>\uff0b</b><small>Додати фото</small></span></button>'
  ).join("");
}

// Завантажує зображення з масиву photos[] у слоти сторінки
function loadPhotos(el, photos) {
  if (!photos || !photos.length) return;
  const slotBtns = el.querySelectorAll(".photo-slot");
  photos.forEach((src, i) => {
    if (!src || !slotBtns[i]) return;
    const img = document.createElement("img");
    img.alt = "Фото " + (i + 1);
    img.src = src;
    img.onerror = () => {
      // Якщо файл не знайдено — показуємо підказку у консолі
      console.warn("[Scrapbook] Зображення не знайдено:", src);
      img.remove();
    };
    slotBtns[i].replaceChildren(img);
    slotBtns[i].classList.add("has-photo");
  });
}

// ── Builders ──────────────────────────────────────────────────────────────
function buildCover() {
  const el = document.createElement("article");
  el.className = "book-page cover-page";
  el.innerHTML = '<div class="cover-shell">' +
    '<span class="cover-kicker">A COLLECTION OF</span>' +
    '<h2>Summer<br>Memories</h2>' +
    '<div class="cover-flower">\u273f</div>' +
    '<p>the moments we keep</p>' +
    '<span class="cover-year">2026</span>' +
    '</div>';
  return el;
}
function buildScrap(cfg) {
  const el = document.createElement("article");
  el.className = "book-page scrap-page " + cfg.theme;
  el.innerHTML =
    '<div class="page-topline"><span>SUMMER MEMORIES</span><span>' + cfg.num + '</span></div>' +
    '<div class="page-heading">' +
    '<input aria-label="Назва" value="' + esc(cfg.title) + '" maxlength="42">' +
    '<span class="tiny-star pg-accent">' + cfg.sym + '</span>' +
    '</div>' +
    '<div class="photo-layout">' + slots(4) + '</div>' +
    '<div class="tape" style="' + cfg.t1 + '"></div>' +
    '<div class="tape" style="' + cfg.t2 + '"></div>' +
    '<div class="page-note">' +
    '<textarea aria-label="Пiдпис" maxlength="180">' + esc(cfg.note) + '</textarea>' +
    '<span class="doodle pg-accent">' + cfg.doodle + '</span>' +
    '</div>' +
    '<div class="page-bottomline"><span>MADE WITH LOVE</span><span>' + cfg.sym + '</span></div>';
  el.querySelectorAll(".photo-slot").forEach(btn => {
    btn.addEventListener("click", () => { selectedSlot = btn; picker.click(); });
  });
  // ← Завантажуємо фото з масиву photos[] у слоти
  loadPhotos(el, cfg.photos);
  return el;
}
function buildBackCover() {
  const el = document.createElement("article");
  el.className = "book-page back-cover";
  el.innerHTML =
    '<span class="bc-title">THE END?</span>' +
    '<span class="bc-heart">\u2661</span>' +
    '<span class="bc-sub">more memories to come</span>' +
    '<span class="bc-flower">\u273f</span>';
  return el;
}

// ── Build pages ────────────────────────────────────────────────────────────
const pageEls = PAGES.map(cfg => {
  let el;
  if (cfg.type === "cover") el = buildCover();
  else if (cfg.type === "scrap") el = buildScrap(cfg);
  else if (cfg.type === "back-cover") el = buildBackCover();
  // Start all invisible
  el.style.opacity = "0";
  el.style.position = "absolute";
  el.style.inset = "0";
  pagesRoot.appendChild(el);
  return el;
});

// ── Show current immediately ──────────────────────────────────────────────
function showPage(idx, instant) {
  pageEls.forEach((el, i) => {
    if (i === idx) {
      if (instant) {
        el.style.transition = "none";
        el.style.opacity = "1";
      } else {
        el.style.transition = "opacity 0.35s ease";
        el.style.opacity = "1";
      }
      el.style.pointerEvents = "";
      el.style.zIndex = "10";
    } else {
      el.style.transition = instant ? "none" : "opacity 0.35s ease";
      el.style.opacity = "0";
      el.style.pointerEvents = "none";
      el.style.zIndex = "1";
    }
  });
}

// ── Update nav buttons ────────────────────────────────────────────────────
function updateNav() {
  pageCount.textContent = (current + 1) + " / " + TOTAL;
  document.getElementById("prevBtn").disabled = current === 0;
  document.getElementById("nextBtn").disabled = current === TOTAL - 1;
  document.getElementById("prevEdge").disabled = current === 0;
  document.getElementById("nextEdge").disabled = current === TOTAL - 1;
}

function updateBook(instant) {
  showPage(current, instant);
  updateNav();
}

// ── Navigation ────────────────────────────────────────────────────────────
function goTo(newIdx) {
  if (isAnimating || newIdx < 0 || newIdx >= TOTAL || newIdx === current) return;
  isAnimating = true;

  // Fade out old page, fade in new page simultaneously
  const outEl = pageEls[current];
  const inEl = pageEls[newIdx];

  outEl.style.transition = "opacity 0.28s ease";
  inEl.style.transition = "opacity 0.28s ease";
  inEl.style.zIndex = "10";
  outEl.style.zIndex = "9";
  inEl.style.pointerEvents = "";
  outEl.style.opacity = "0";
  inEl.style.opacity = "1";

  current = newIdx;
  updateNav();

  setTimeout(() => {
    // Finalize: hide all others
    pageEls.forEach((el, i) => {
      if (i !== current) {
        el.style.opacity = "0";
        el.style.pointerEvents = "none";
        el.style.zIndex = "1";
      }
    });
    isAnimating = false;
  }, 350);
}

function nextPage() { if (!isAnimating) goTo(current + 1); }
function prevPage() { if (!isAnimating) goTo(current - 1); }

// ── Events ────────────────────────────────────────────────────────────────
document.getElementById("nextBtn").addEventListener("click", nextPage);
document.getElementById("nextEdge").addEventListener("click", nextPage);
document.getElementById("prevBtn").addEventListener("click", prevPage);
document.getElementById("prevEdge").addEventListener("click", prevPage);

picker.addEventListener("change", () => {
  const file = picker.files && picker.files[0];
  if (!file || !selectedSlot) return;
  if (!file.type.startsWith("image/")) return;
  const reader = new FileReader();
  reader.onload = () => {
    const img = document.createElement("img");
    img.src = reader.result; img.alt = "Фото";
    selectedSlot.replaceChildren(img);
    selectedSlot.classList.add("has-photo");
    selectedSlot = null;
  };
  reader.readAsDataURL(file);
  picker.value = "";
});

book.addEventListener("touchstart", (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
book.addEventListener("touchend", (e) => {
  const dx = e.changedTouches[0].screenX - touchStartX;
  if (Math.abs(dx) > 45) { if (dx < 0) nextPage(); else prevPage(); }
}, { passive: true });

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextPage();
  if (e.key === "ArrowLeft") prevPage();
});

// ── Init ──────────────────────────────────────────────────────────────────
updateBook(true);
