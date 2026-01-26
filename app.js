/**
 * baby-name-tool app.js (FINAL STABLE)
 * - List-based given names (female/male/any) from data.json
 * - Tag selection max 2
 * - Prioritize Supreme Court popular names (popularGivenNames.nationwideTop)
 * - Block weird/bad names (blockedGivenNames)
 * - Romanization: "지윤" -> "Ji-yun"
 * - NO dependency on surnameProfiles (so it will never crash even if data.json doesn't have it)
 */

console.log("APP VERSION: FINAL STABLE (no surnameProfiles)");

// -----------------------------
// Global state
// -----------------------------
let DATA = null;
let selectedTags = new Set();
const recentByKey = new Map(); // prevent same names repeating too much per tag combo

// -----------------------------
// Helpers
// -----------------------------
function pickOne(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function uniq(arr) {
  return [...new Set(arr)];
}
function safeArr(x) {
  return Array.isArray(x) ? x : [];
}
function keyFor(gender) {
  return [...selectedTags].sort().join("|") + "|" + gender;
}

// -----------------------------
// Romanization (simple, name-friendly)
// -----------------------------
const ROMA = {
  가: "Ga",
  나: "Na",
  다: "Da",
  라: "Ra",
  마: "Ma",
  바: "Ba",
  사: "Sa",
  아: "A",
  자: "Ja",
  차: "Cha",
  카: "Ka",
  타: "Ta",
  파: "Pa",
  하: "Ha",

  거: "Geo",
  너: "Neo",
  더: "Deo",
  러: "Reo",
  머: "Meo",
  버: "Beo",
  서: "Seo",
  어: "Eo",
  저: "Jeo",
  처: "Cheo",
  커: "Keo",
  터: "Teo",
  퍼: "Peo",
  허: "Heo",

  고: "Go",
  노: "No",
  도: "Do",
  로: "Ro",
  모: "Mo",
  보: "Bo",
  소: "So",
  오: "O",
  조: "Jo",
  초: "Cho",
  코: "Ko",
  토: "To",
  포: "Po",
  호: "Ho",

  구: "Gu",
  누: "Nu",
  두: "Du",
  루: "Ru",
  무: "Mu",
  부: "Bu",
  수: "Su",
  우: "U",
  주: "Ju",
  추: "Chu",
  쿠: "Ku",
  투: "Tu",
  푸: "Pu",
  후: "Hu",

  기: "Gi",
  니: "Ni",
  디: "Di",
  리: "Ri",
  미: "Mi",
  비: "Bi",
  시: "Si",
  이: "I",
  지: "Ji",
  치: "Chi",
  키: "Ki",
  티: "Ti",
  피: "Pi",
  히: "Hi",

  // frequently-used syllables in given names (override-ish)
  윤: "Yun",
  은: "Eun",
  연: "Yeon",
  영: "Young",
  민: "Min",
  현: "Hyeon",
  진: "Jin",
  린: "Rin",
  율: "Yul",
  태: "Tae",
  선: "Seon",
  희: "Hee",
  혜: "Hye",
  효: "Hyo",
  채: "Chae",
};

function romanizeGiven(given) {
  if (!given) return "";
  const chars = [...given];
  if (chars.length === 1) return ROMA[chars[0]] || chars[0];
  if (chars.length === 2) {
    const a = ROMA[chars[0]] || chars[0];
    const b = ROMA[chars[1]] || chars[1];
    return `${a}-${b}`;
  }
  return chars.map((c) => ROMA[c] || c).join("-");
}

// -----------------------------
// Load data.json (cache-bust)
// -----------------------------
async function loadData() {
  const url = `./data.json?v=${Date.now()}`; // avoid GitHub Pages caching
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load data.json (HTTP ${res.status})`);
  return res.json();
}

// -----------------------------
// Tag UI (max 2)
// -----------------------------
function setHint(msg) {
  const el = document.getElementById("tagHint");
  if (el) el.textContent = msg;
}
function updateHint() {
  const n = selectedTags.size;
  if (n === 0) setHint("선택됨: 0개 (선택하지 않으면 인기/무난 이름 중심)");
  else setHint(`선택됨: ${n}개 → ${[...selectedTags].join(", ")} (최대 2개)`);
}

function renderTags(tags) {
  const wrap = document.getElementById("tagButtons");
  if (!wrap) return;
  wrap.innerHTML = "";

  safeArr(tags).forEach((tag) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = tag.label;

    btn.onclick = () => {
      if (selectedTags.has(tag.id)) {
        selectedTags.delete(tag.id);
        btn.classList.remove("active");
        updateHint();
        return;
      }
      if (selectedTags.size >= 2) {
        setHint("느낌은 최대 2개까지 선택할 수 있어요.");
        return;
      }
      selectedTags.add(tag.id);
      btn.classList.add("active");
      updateHint();
    };

    wrap.appendChild(btn);
  });

  updateHint();
}

// -----------------------------
// 분위기 태그 추정 (heuristic)
// - data.json에 각 이름의 태그가 없으므로, 이름 글자 단서로만 약하게 추정
// - "느낌" 필터는 엄격하게 걸면 빈 결과가 나와서, '가중치' 중심으로 동작
// -----------------------------
const CHAR_TAGS = {
  // bright
  하: ["bright", "soft"],
  예: ["bright"],
  봄: ["bright", "poetic"],
  별: ["bright", "poetic"],
  빛: ["bright"],
  아: ["bright", "soft"],
  오: ["bright"],

  // warm
  윤: ["warm"],
  온: ["warm"],
  우: ["warm", "bright"],
  솔: ["warm", "calm"],
  나: ["warm", "soft"],
  담: ["warm", "poetic"],

  // calm/soft/poetic
  서: ["soft", "calm"],
  은: ["soft", "calm"],
  린: ["soft"],
  리: ["soft"],
  희: ["poetic", "calm"],
  혜: ["soft", "calm"],
  연: ["poetic", "calm"],
  해: ["poetic", "calm"],

  // solid
  준: ["solid"],
  건: ["solid"],
  성: ["solid"],
  호: ["solid"],
  현: ["calm", "solid"],
  진: ["calm", "solid"],
  태: ["solid"],
  찬: ["solid"],
};

function inferTagsFromName(given) {
  const tags = [];
  for (const ch of given) {
    if (CHAR_TAGS[ch]) tags.push(...CHAR_TAGS[ch]);
  }
  return uniq(tags);
}

// -----------------------------
// Scoring
// -----------------------------
function popularBonus(rank) {
  if (!rank) return 0;
  // 1~2위 +10, 3~4위 +9 ... 19~20위 +2
  const bucket = Math.floor((rank - 1) / 2);
  return Math.max(2, 10 - bucket);
}

function scoreName(given, userTags, popRankMap) {
  const tags = inferTagsFromName(given);
  let score = 0;

  // user tags weighting (soft gate: not mandatory)
  if (userTags[0] && tags.includes(userTags[0])) score += 6;
  if (userTags[1] && tags.includes(userTags[1])) score += 3;

  // no tags selected → safe bias
  if (userTags.length === 0) {
    if (tags.includes("soft") || tags.includes("calm")) score += 1;
  }

  // popular names prioritized
  const rank = popRankMap.get(given);
  score += popularBonus(rank);

  // minor stable bias
  if (tags.includes("soft") || tags.includes("calm")) score += 1;

  return { score, tags, rank };
}

function chooseEnglishName(tags) {
  const dict = DATA.englishByTag || {};
  const tag = tags.find((t) => dict[t]);
  if (!tag) return "Eden";
  return pickOne(dict[tag]);
}

function commentLine(tags, rank) {
  if (rank) return `요즘 많이 쓰이는 이름 (전국 상위 ${rank}위권)`;
  if (tags.includes("bright")) return "밝고 또렷한 인상";
  if (tags.includes("warm")) return "다정하고 온화한 인상";
  if (tags.includes("poetic")) return "차분하고 감성적인 인상";
  return "부르는 소리가 편안한 인상";
}

// -----------------------------
// Pools
// -----------------------------
function getPool(gender) {
  if (gender === "female") return safeArr(DATA.femaleGivenNames);
  if (gender === "male") return safeArr(DATA.maleGivenNames);
  return uniq([
    ...safeArr(DATA.femaleGivenNames),
    ...safeArr(DATA.maleGivenNames),
  ]);
}

// -----------------------------
// Generate
// -----------------------------
function generateNames(surname, gender) {
  const userTags = [...selectedTags];
  const blocked = DATA._blockedSet;
  const popRankMap = DATA._popularRank;

  const pool = getPool(gender)
    .map((g) => (g || "").trim())
    .filter(Boolean);

  const k = keyFor(gender);
  if (!recentByKey.has(k)) recentByKey.set(k, new Set());
  const recent = recentByKey.get(k);

  const candidates = [];

  for (const given of pool) {
    if (blocked.has(given)) continue;

    // avoid "이이서" style
    if (surname[surname.length - 1] === given[0]) continue;

    const { score, tags, rank } = scoreName(given, userTags, popRankMap);

    // reduce repeats
    const finalScore = score + (recent.has(given) ? -3 : 0);

    candidates.push({
      given,
      full: surname + given,
      score: finalScore,
      tags,
      rank,
      roman: romanizeGiven(given),
      englishName: chooseEnglishName(tags),
      comment: commentLine(tags, rank),
    });
  }

  candidates.sort((a, b) => b.score - a.score);

  // pick 5 from top slice randomly
  const top = candidates.slice(0, 140);
  const result = [];
  const used = new Set();

  while (result.length < 5 && top.length > 0) {
    const idx = Math.floor(Math.random() * top.length);
    const it = top.splice(idx, 1)[0];
    if (used.has(it.given)) continue;
    used.add(it.given);
    result.push(it);
  }

  // remember recent
  result.forEach((r) => recent.add(r.given));
  if (recent.size > 80) {
    [...recent].slice(0, 30).forEach((x) => recent.delete(x));
  }

  return result;
}

// -----------------------------
// Render
// -----------------------------
function renderResult(items) {
  const wrap = document.getElementById("result");
  if (!wrap) return;
  wrap.innerHTML = "";

  if (!items || items.length === 0) {
    wrap.innerHTML =
      "<div class='muted'>추천 결과가 없습니다. 다른 조건으로 시도해보세요.</div>";
    return;
  }

  items.forEach((it) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div style="font-weight:800; font-size:18px;">${it.full}</div>
      <div class="muted">– ${it.comment}</div>
      <div class="muted">Pronunciation: <b>${it.roman}</b></div>
      <div class="muted">English name: <b>${it.englishName}</b></div>
    `;
    wrap.appendChild(card);
  });
}

// -----------------------------
// Main
// -----------------------------
async function main() {
  try {
    DATA = await loadData();

    // normalize
    DATA._blockedSet = new Set(safeArr(DATA.blockedGivenNames));
    DATA._popularRank = new Map();
    safeArr(DATA.popularGivenNames?.nationwideTop).forEach((nm, i) => {
      DATA._popularRank.set(nm, i + 1);
    });

    renderTags(DATA.tags);

    const btn = document.getElementById("btn");
    if (btn) {
      btn.onclick = () => {
        const surname = (
          document.getElementById("surname")?.value || ""
        ).trim();
        const gender = (
          document.getElementById("gender")?.value || "any"
        ).trim();

        if (!surname) {
          alert("성을 입력해 주세요. 예: 김");
          return;
        }

        const items = generateNames(surname, gender);
        renderResult(items);
      };
    }
  } catch (e) {
    console.error(e);
    alert(
      "데이터 로딩 중 오류가 발생했습니다.\n" +
        (e && e.message ? e.message : String(e)) +
        "\n\n(1) data.json이 같은 폴더에 있는지\n(2) data.json에 // 주석이 없는지\n(3) GitHub Pages 캐시라면 새로고침(Ctrl+Shift+R) 해보세요.",
    );
  }
}

main();
