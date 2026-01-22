console.log("APP VERSION: 2026-01-22 UX MAX2");

let DATA = null;
let selectedTags = new Set();

function pickOne(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function uniq(arr) {
  return [...new Set(arr)];
}

async function loadData() {
  const res = await fetch("./data.json");
  if (!res.ok) throw new Error(`Failed to load data.json: ${res.status}`);
  return res.json();
}

function setHint(msg) {
  const hint = document.getElementById("tagHint");
  if (hint) hint.textContent = msg || "";
}

function updateHint() {
  setHint(`선택됨: ${selectedTags.size}개 (최대 2개)`);
}

function resetTagsUI() {
  selectedTags.clear();
  document.querySelectorAll("#tagButtons button").forEach((b) => {
    b.classList.remove("active");
    b.setAttribute("aria-pressed", "false");
  });
  updateHint();
}

function renderTags(tags) {
  const wrap = document.getElementById("tagButtons");
  wrap.innerHTML = "";

  // 데이터 sanity check (원인 추적용)
  const ids = tags.map((t) => t?.id);
  console.log("TAGS LENGTH:", tags.length);
  console.log("UNIQUE IDS:", new Set(ids).size);

  tags.forEach((tag) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = tag.label ?? tag.id ?? "(태그)";
    btn.setAttribute("data-tag-id", tag.id);
    btn.setAttribute("aria-pressed", "false");

    btn.onclick = () => {
      // 안전장치: id가 없으면 선택 로직이 꼬일 수 있으니 막음
      if (!tag.id) {
        setHint("태그 데이터(id)가 비어 있어 선택할 수 없습니다.");
        return;
      }

      // 이미 선택된 태그면 해제
      if (selectedTags.has(tag.id)) {
        selectedTags.delete(tag.id);
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
        updateHint();
        return;
      }

      // 2개 초과 방지 (핵심)
      if (selectedTags.size >= 2) {
        setHint(
          "느낌은 최대 2개까지 선택할 수 있어요. 다른 느낌을 먼저 해제해 주세요.",
        );
        return;
      }

      // 선택
      selectedTags.add(tag.id);
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      updateHint();
    };

    wrap.appendChild(btn);
  });

  updateHint();
}

function getSurnameTags(surname) {
  const p = DATA.surnameProfiles?.find((x) => x.s === surname);
  return p ? p.tags : [];
}

function isBadCombo(surname, first, second) {
  const lastChar = surname[surname.length - 1];
  if (lastChar === first) return true;
  if (first === second) return true;
  return false;
}

function scoreName(surnameTags, nameTags, userTags) {
  let score = 0;

  // 주 느낌(첫 번째 선택) 강하게
  if (userTags.length > 0 && nameTags.includes(userTags[0])) score += 5;

  // 보조 느낌(두 번째 선택) 약하게
  if (userTags.length > 1 && nameTags.includes(userTags[1])) score += 2;

  // 성씨 태그와 조화(단순 규칙)
  surnameTags.forEach((st) => {
    if (st === "solid" && nameTags.includes("soft")) score += 2;
    if (st === "soft" && nameTags.includes("solid")) score += 2;
    if (st === "calm" && nameTags.includes("poetic")) score += 2;
  });

  // 한국 이름 안정 영역 보정
  if (nameTags.includes("calm") || nameTags.includes("soft")) score += 1;

  return score;
}

function toneComment(surnameTags, nameTags) {
  if (surnameTags.includes("solid") && nameTags.includes("soft"))
    return "단단함과 부드러움이 균형을 이루는 조합";
  if (surnameTags.includes("soft") && nameTags.includes("solid"))
    return "부드러운 성에 중심이 잡힌 이름이 어울리는 조합";
  if (nameTags.includes("poetic") && nameTags.includes("calm"))
    return "차분한 분위기에 여백이 느껴지는 조합";
  if (nameTags.includes("bright")) return "밝고 또렷한 인상을 주는 조합";
  if (nameTags.includes("warm")) return "다정하고 온화한 인상을 주는 조합";
  return "부르는 소리가 편안한 인상을 주는 조합";
}

function chooseEnglish(nameTags) {
  const tag = nameTags.find((t) => DATA.englishByTag?.[t]);
  if (!tag) return "Eden";
  return pickOne(DATA.englishByTag[tag]);
}

function generateCandidates(surname, gender, userTagsArr) {
  const surnameTags = getSurnameTags(surname);

  const candidates = [];
  for (const f of DATA.firstSyllable || []) {
    for (const s of DATA.secondSyllable || []) {
      const first = f.t;
      const second = s.t;
      if (!first || !second) continue;
      if (isBadCombo(surname, first, second)) continue;

      // gender는 MVP에서는 비필터(확장 포인트)
      if (gender !== "any") {
        // 추후: f.gender / s.gender 기준으로 걸러도 됨
      }

      const given = first + second;
      const full = surname + given;

      const nameTags = uniq([...(f.tags || []), ...(s.tags || [])]);
      const score = scoreName(surnameTags, nameTags, userTagsArr);

      candidates.push({
        fullName: full,
        givenName: given,
        tags: nameTags,
        score,
        comment: toneComment(surnameTags, nameTags),
        en: chooseEnglish(nameTags),
      });
    }
  }

  candidates.sort((a, b) => b.score - a.score);

  // 상위 80개 중 5개 랜덤(좀 더 무난한 결과 확보)
  const top = candidates.slice(0, 80);
  const picked = [];
  while (picked.length < 5 && top.length > 0) {
    const idx = Math.floor(Math.random() * top.length);
    picked.push(top.splice(idx, 1)[0]);
  }
  return picked;
}

function renderResult(items) {
  const wrap = document.getElementById("result");
  wrap.innerHTML = "";

  if (!items || items.length === 0) {
    wrap.innerHTML =
      "<div class='muted'>추천 결과가 없습니다. 다른 느낌을 선택해보세요.</div>";
    return;
  }

  items.forEach((it) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div style="font-weight:800; font-size:18px;">${it.fullName}</div>
      <div class="muted">– ${it.comment}</div>
      <div class="muted">English name: <b>${it.en}</b></div>
    `;
    wrap.appendChild(card);
  });
}

async function main() {
  try {
    DATA = await loadData();
    renderTags(DATA.tags || []);

    document.getElementById("btn").onclick = () => {
      const surname = (document.getElementById("surname").value || "").trim();
      const gender = document.getElementById("gender").value;
      const userTagsArr = [...selectedTags];

      if (!surname) {
        alert("성을 입력해 주세요. 예: 김");
        return;
      }

      const items = generateCandidates(surname, gender, userTagsArr);
      renderResult(items);
    };

    document.getElementById("btnReset").onclick = () => {
      resetTagsUI();
    };
  } catch (e) {
    console.error(e);
    document.getElementById("result").innerHTML =
      "<div class='muted'>데이터 로딩에 실패했습니다. data.json 경로/내용을 확인해 주세요.</div>";
  }
}

main();
