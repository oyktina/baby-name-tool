// src/ui.js
// - Render result cards
// - Open a CENTER MODAL (floating dialog) when a name is clicked
// - No page navigation / no new window

function el(id) {
  return document.getElementById(id);
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function closeModal() {
  const overlay = el("modalOverlay");
  const modal = el("nameModal");
  if (overlay) overlay.style.display = "none";
  if (modal) modal.style.display = "none";
  document.body.style.overflow = "";
}

function ensureModalBound() {
  if (window.__NAME_MODAL_BOUND__) return;
  window.__NAME_MODAL_BOUND__ = true;

  const overlay = el("modalOverlay");
  const closeBtn = el("modalClose");

  overlay?.addEventListener("click", closeModal);
  closeBtn?.addEventListener("click", closeModal);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

function openModal(it) {
  const overlay = el("modalOverlay");
  const modal = el("nameModal");
  const title = el("modalTitle");
  const body = el("modalBody");

  if (!overlay || !modal || !title || !body) {
    alert(
      "중앙 모달 UI가 index.html에 없습니다.\n" +
        "index.html에 modalOverlay/nameModal/modalTitle/modalBody/modalClose 요소를 추가해 주세요.",
    );
    return;
  }

  title.textContent = `${it.full} 상세`;

  const tags = Array.isArray(it.tags) ? it.tags : [];
  const tagHtml =
    tags.length > 0
      ? tags
          .map(
            (t) =>
              `<span style="display:inline-block;border:1px solid #ddd;border-radius:999px;padding:6px 10px;margin-right:6px;margin-top:6px;font-size:12px;">${escapeHtml(
                t,
              )}</span>`,
          )
          .join("")
      : `<span class="muted">추정 태그 없음</span>`;

  const rankHtml =
    it.rank != null && it.rank !== ""
      ? `<div style="margin:10px 0;">
           <div style="font-weight:700;margin-bottom:6px;">인기</div>
           <div class="muted">전국 상위 ${escapeHtml(String(it.rank))}위권</div>
         </div>`
      : "";

  body.innerHTML = `
    <div class="muted" style="margin-bottom:10px;">– ${escapeHtml(
      it.comment || "",
    )}</div>

    <div style="margin:10px 0;">
      <div style="font-weight:700;margin-bottom:6px;">Pronunciation</div>
      <div class="muted"><b>${escapeHtml(it.roman || "")}</b></div>
    </div>

    <div style="margin:10px 0;">
      <div style="font-weight:700;margin-bottom:6px;">English name</div>
      <div class="muted"><b>${escapeHtml(it.englishName || "")}</b></div>
    </div>

    <div style="margin:10px 0;">
      <div style="font-weight:700;margin-bottom:6px;">느낌(추정)</div>
      <div>${tagHtml}</div>
    </div>

    ${rankHtml}

    <div style="margin-top:12px;" class="muted">
      (닫기: 바깥 영역 클릭 / ESC / 닫기 버튼)
    </div>
  `;

  overlay.style.display = "block";
  modal.style.display = "flex";

  // lock background scroll
  document.body.style.overflow = "hidden";
}

export function renderResult(items) {
  const wrap = el("result");
  if (!wrap) return;
  wrap.innerHTML = "";

  ensureModalBound();

  if (!items || items.length === 0) {
    wrap.innerHTML =
      "<div class='muted'>추천 결과가 없습니다. 다른 조건으로 시도해보세요.</div>";
    return;
  }

  items.forEach((it) => {
    const card = document.createElement("div");
    card.className = "cardResult";
    card.style.cursor = "pointer";

    card.innerHTML = `
      <div style="font-weight:800; font-size:18px;">${escapeHtml(
        it.full || "",
      )}</div>
      <div class="muted">– ${escapeHtml(it.comment || "")}</div>
      <div class="muted">Pronunciation: <b>${escapeHtml(it.roman || "")}</b></div>
      <div class="muted">English name: <b>${escapeHtml(
        it.englishName || "",
      )}</b></div>
      <div class="muted" style="margin-top:6px;">(클릭하면 상세 보기)</div>
    `;

    card.addEventListener("click", () => openModal(it));
    wrap.appendChild(card);
  });
}
