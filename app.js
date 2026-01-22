console.log("APP VERSION: FINAL CLEAN REBUILD");

// 생성 금지 이름 목록
const BLOCKED_GIVEN_NAMES = [
  "도린",
  "윤온",
  "결온",

  "이민",
  "연안",
  "이하",
  "선린",
  "아우",
  "윤린",
  "우오",
  "우은",
  "연윤",
  "지린",
  "선서",
  "아호",
  "선율",
  "준윤",
  "시이",
  "시서",
  "이오",
  "연현",
  "선원",
  "현안",
  "현린",
  "윤율",
  "은린",
  "주윤",
  "준린",
  "지준",
];

// =====================
// Global state
// =====================
let DATA = null;
let selectedTags = new Set();

// 느낌 조합별 최근 결과 기억 (중복 체감 완화)
const recentByTagKey = new Map(); // key: "bright|warm" → Set(["이현", ...])

// =====================
// Utils
// =====================
function pickOne(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function uniq(arr) {
  return [...new Set(arr)];
}

function tagKey() {
  return [...selectedTags].sort().join("|");
}

async function loadData() {
  const res = await fetch("./data.json");
  if (!res.ok) throw new Error("Failed to load data.json");
  return res.json();
}

// =====================
// UI helpers
// =====================
function setHint(msg) {
  const el = document.getElementById("tagHint");
  if (el) el.textContent = msg;
}

function updateHint() {
  const n = selectedTags.size;
  if (n === 0) {
    setHint("선택됨: 0개 (선택하지 않으면 무난한 이름 위주로 추천)");
  } else {
    setHint(`선택됨: ${n}개 → ${[...selectedTags].join(", ")} (최대 2개)`);
  }
}

function resetTagsUI() {
  selectedTags.clear();
  document.querySelectorAll("#tagButtons button").forEach((b) => {
    b.classList.remove("active");
    b.setAttribute("aria-pressed", "false");
  });
  updateHint();
}

// =====================
// Render tags
// =====================
function renderTags(tags) {
  const wrap = document.getElementById("tagButtons");
  wrap.innerHTML = "";

  tags.forEach((tag) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = tag.label;
    btn.setAttribute("aria-pressed", "false");

    btn.onclick = () => {
      if (selectedTags.has(tag.id)) {
        selectedTags.delete(tag.id);
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
        updateHint();
        return;
      }

      if (selectedTags.size >= 2) {
        setHint("느낌은 최대 2개까지 선택할 수 있어요.");
        return;
      }

      selectedTags.add(tag.id);
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      updateHint();
    };

    wrap.appendChild(btn);
  });

  updateHint();
}

// =====================
// Naming logic
// =====================
function getSurnameTags(surname) {
  const p = DATA.surnameProfiles.find((x) => x.s === surname);
  return p ? p.tags : [];
}

function isBadCombo(surname, first, second) {
  // 성과 이름 첫 글자 동일 (이이안)
  if (surname[surname.length - 1] === first) return true;
  // 음절 반복 (하하)
  if (first === second) return true;
  return false;
}

function scoreName(surnameTags, nameTags, userTags) {
  let score = 0;

  // ✅ 느낌 게이트: 느낌 선택 시 최소 1개 매칭 필수
  if (userTags.length > 0) {
    const ok = userTags.some((t) => nameTags.includes(t));
    if (!ok) return -9999;
  }

  // 주 느낌
  if (userTags[0] && nameTags.includes(userTags[0])) score += 6;
  // 보조 느낌
  if (userTags[1] && nameTags.includes(userTags[1])) score += 3;

  // 성씨 조화
  surnameTags.forEach((st) => {
    if (st === "solid" && nameTags.includes("soft")) score += 2;
    if (st === "soft" && nameTags.includes("solid")) score += 2;
    if (st === "calm" && nameTags.includes("poetic")) score += 2;
  });

  // 느낌 미선택 시 무난 보정
  if (userTags.length === 0) {
    if (nameTags.includes("soft") || nameTags.includes("calm")) score += 1;
  }

  return score;
}

function popularBonus(rank) {
  if (!rank) return 0;
  const bucket = Math.floor((rank - 1) / 2); // 0~9
  return Math.max(2, 10 - bucket);
}

function toneComment(nameTags, rank) {
  if (rank) return `요즘 많이 쓰이는 이름 (전국 상위 ${rank}위권)`;
  if (nameTags.includes("bright")) return "밝고 또렷한 인상";
  if (nameTags.includes("warm")) return "다정하고 온화한 인상";
  if (nameTags.includes("poetic")) return "차분하고 감성적인 인상";
  return "부르는 소리가 편안한 인상";
}

// =====================
// Generate names
// =====================
function generateNames(surname, gender, userTags) {
  const surnameTags = getSurnameTags(surname);
  const blocked = DATA._blockedSet;
  const popRank = DATA._popularRank;

  const key = tagKey();
  if (!recentByTagKey.has(key)) recentByTagKey.set(key, new Set());
  const recent = recentByTagKey.get(key);

  const candidates = [];

  for (const f of DATA.firstSyllable) {
    for (const s of DATA.secondSyllable) {
      const first = f.t;
      const second = s.t;

      if (isBadCombo(surname, first, second)) continue;

      const given = first + second;
      if (blocked.has(given)) continue;

      const nameTags = uniq([...(f.tags || []), ...(s.tags || [])]);
      let score = scoreName(surnameTags, nameTags, userTags);
      if (score < -1000) continue;

      const rank = popRank.get(given);
      score += popularBonus(rank);

      if (recent.has(given)) score -= 3;

      candidates.push({
        full: surname + given,
        given,
        tags: nameTags,
        score,
        rank,
        comment: toneComment(nameTags, rank),
        en: pickOne(DATA.englishByTag[nameTags[0]] || ["Eden"]),
      });
    }
  }

  candidates.sort((a, b) => b.score - a.score);

  const pool = candidates.slice(0, 80);
  const result = [];
  const used = new Set();

  while (result.length < 5 && pool.length > 0) {
    const idx = Math.floor(Math.random() * pool.length);
    const item = pool.splice(idx, 1)[0];
    if (used.has(item.given)) continue;
    used.add(item.given);
    result.push(item);
  }

  result.forEach((r) => recent.add(r.given));
  if (recent.size > 60) {
    [...recent].slice(0, 20).forEach((x) => recent.delete(x));
  }

  return result;
}

// =====================
// Render result
// =====================
function renderResult(items) {
  const wrap = document.getElementById("result");
  wrap.innerHTML = "";

  if (items.length === 0) {
    wrap.innerHTML = "<div class='muted'>추천 결과가 없습니다.</div>";
    return;
  }

  items.forEach((it) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <div class="name">${it.full}</div>
      <div class="muted">– ${it.comment}</div>
      <div class="muted">English name: <b>${it.en}</b></div>
    `;
    wrap.appendChild(div);
  });
}

// =====================
// Init
// =====================
async function main() {
  DATA = await loadData();

  // 차단 + 인기 rank 준비
  DATA._blockedSet = new Set(BLOCKED_GIVEN_NAMES);
  DATA._popularRank = new Map();
  (DATA.popularGivenNames?.nationwideTop || []).forEach((nm, i) => {
    DATA._popularRank.set(nm, i + 1);
  });

  renderTags(DATA.tags);

  document.getElementById("btn").onclick = () => {
    const surname = document.getElementById("surname").value.trim();
    const gender = document.getElementById("gender").value;
    if (!surname) {
      alert("성을 입력해 주세요.");
      return;
    }
    const items = generateNames(surname, gender, [...selectedTags]);
    renderResult(items);
  };

  document.getElementById("btnReset").onclick = resetTagsUI;
}

main();
