let DATA = null;
let selectedTags = new Set();

function pickOne(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function uniq(arr) {
  return [...new Set(arr)];
}

function loadData() {
  return fetch("./data.json").then((r) => r.json());
}

function renderTags(tags) {
  const wrap = document.getElementById("tagButtons");
  wrap.innerHTML = "";
  tags.forEach((tag) => {
    const btn = document.createElement("button");
    btn.textContent = tag.label;
    btn.onclick = () => {
      if (selectedTags.has(tag.id)) {
        selectedTags.delete(tag.id);
        btn.classList.remove("active");
      } else {
        if (selectedTags.size >= 3) return;
        selectedTags.add(tag.id);
        btn.classList.add("active");
      }
    };
    wrap.appendChild(btn);
  });
}

function getSurnameTags(surname) {
  const p = DATA.surnameProfiles.find((x) => x.s === surname);
  return p ? p.tags : []; // 없으면 빈 배열
}

function isBadCombo(surname, first, second) {
  // 1) 성 마지막 글자 = 이름 첫 글자면 제외(예: 이이안)
  const lastChar = surname[surname.length - 1];
  if (lastChar === first) return true;

  // 2) 같은 음절 반복(예: 하하, 민민) 피하기
  if (first === second) return true;

  return false;
}

function scoreName(surnameTags, nameTags, userTags) {
  let score = 0;

  // 사용자 태그 일치
  userTags.forEach((t) => {
    if (nameTags.includes(t)) score += 5;
  });

  // 성씨 태그와 이름 태그 조화(아주 단순)
  surnameTags.forEach((st) => {
    if (st === "solid" && nameTags.includes("soft")) score += 2;
    if (st === "soft" && nameTags.includes("solid")) score += 2;
    if (st === "calm" && nameTags.includes("poetic")) score += 2;
  });

  return score;
}

function toneComment(surnameTags, nameTags) {
  // 간단한 코멘트 규칙
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
  // 이름 태그 중 하나를 골라 그 태그의 영어이름 리스트에서 1개 선택
  const tag = nameTags.find((t) => DATA.englishByTag[t]);
  if (!tag) return "Eden";
  return pickOne(DATA.englishByTag[tag]);
}

function generateCandidates(surname, gender, userTagsArr) {
  const surnameTags = getSurnameTags(surname);

  const candidates = [];
  for (const f of DATA.firstSyllable) {
    for (const s of DATA.secondSyllable) {
      const first = f.t;
      const second = s.t;
      if (isBadCombo(surname, first, second)) continue;

      // 성별 필터 (초기 MVP에서는 간단히: 특정 음절은 중성으로 취급)
      // 나중에 확장: 음절에 gender 속성 추가 가능
      if (gender !== "any") {
        // MVP: 아무것도 안 걸러도 됨. 필요하면 여기서 걸러요.
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

  // 점수 높은 순 정렬 후, 상위 60개 중에서 랜덤 5개 뽑기
  candidates.sort((a, b) => b.score - a.score);
  const top = candidates.slice(0, 60);
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

  if (items.length === 0) {
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
  DATA = await loadData();
  renderTags(DATA.tags);

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
}

main();
