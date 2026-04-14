const FEELINGS = [
    { key: "cute", label: "귀여운" },
    { key: "cool", label: "시크한" },
    { key: "bright", label: "활발한" },
    { key: "soft", label: "다정한" },
    { key: "timid", label: "소심한" },
    { key: "mystic", label: "신비로운" },
    { key: "playful", label: "장난꾸러기" },
    { key: "brave", label: "용감한" },
    { key: "gentle", label: "부드러운" },
    { key: "smart", label: "똑똑한" }
  ];
  
  const NAME_POOLS = {
    cute: {
      prefixes: [
        "루", "미", "토", "몽", "콩", "코코", "모모", "보보", "나나", "츄",
        "또", "꼬", "뿌", "삐", "몽글", "두두", "포포", "쪼", "달", "별"
      ],
      suffixes: [
        "몽", "링", "콩", "팡", "냥", "키", "린", "이", "우", "찌",
        "돌", "토", "루", "미", "니", "야", "봉", "쨩"
      ]
    },
    cool: {
      prefixes: [
        "카", "라", "제", "레", "로", "드", "릭", "센", "맥", "델",
        "브", "케이", "제이", "노", "시", "란"
      ],
      suffixes: [
        "스", "크", "드", "온", "렉", "진", "트", "론", "프",
        "엘", "노", "르", "안", "릭"
      ]
    },
    bright: {
      prefixes: [
        "해", "별", "솔", "하", "라", "나", "유", "리", "토",
        "미", "아", "빛", "샤", "루", "보"
      ],
      suffixes: [
        "나", "리", "온", "아", "이", "루", "미", "린", "엘", "우"
      ]
    },
    soft: {
      prefixes: [
        "하", "나", "유", "아", "소", "보", "누", "이", "라", "온",
        "달", "구름", "이슬", "노을", "봄"
      ],
      suffixes: [
        "리", "나", "아", "온", "린", "우", "이", "결", "솔", "람"
      ]
    },
    timid: {
      prefixes: [
        "누", "모", "소", "미", "보", "도", "루", "라", "나", "토"
      ],
      suffixes: [
        "리", "니", "아", "온", "우", "린", "이", "미"
      ]
    },
    mystic: {
      prefixes: [
        "아르", "엘", "네벨", "루나", "세라", "벨라", "카이", "로엔",
        "티아", "시엘", "에린", "라엘", "노아", "베르", "리아"
      ],
      suffixes: [
        "리아", "엘", "온", "안", "시아", "렌", "르", "노", "스",
        "라", "나", "린", "벨", "드", "크"
      ]
    },
    playful: {
      prefixes: [
        "토", "몽", "콩", "쪼", "보", "루", "미", "포", "꼬", "두",
        "또", "방", "팡", "달"
      ],
      suffixes: [
        "리", "몽", "팡", "콩", "키", "루", "토", "니", "야", "봉"
      ]
    },
    brave: {
      prefixes: [
        "레오", "카이", "로", "제", "드", "란", "맥", "센", "벨", "타"
      ],
      suffixes: [
        "온", "르", "스", "안", "록", "진", "드", "엘", "탄"
      ]
    },
    gentle: {
      prefixes: [
        "유", "소", "하", "나", "아", "보", "누", "라", "이슬", "봄"
      ],
      suffixes: [
        "아", "나", "리", "온", "린", "이", "솔", "람"
      ]
    },
    smart: {
      prefixes: [
        "시", "엘", "라", "제", "노", "리", "카", "테", "루", "로"
      ],
      suffixes: [
        "엘", "온", "린", "아", "르", "스", "진", "노"
      ]
    }
  };
  
  const DEFAULT_POOL = {
    prefixes: [
      "루", "미", "토", "네", "라", "모", "하", "도", "시", "리",
      "아", "엘", "벨", "나", "로", "누", "다", "코", "키", "레"
    ],
    suffixes: [
      "몽", "링", "콩", "팡", "냥", "키", "린", "아", "엘", "온",
      "나", "리", "우", "이", "르"
    ]
  };

const APPEARANCE_POOLS = {
  "뚱뚱한": {
    prefixes: ["둥", "통", "봉", "팡", "몽", "볼", "푸"],
    suffixes: ["둥", "봉", "통", "몽", "팡", "볼"]
  },
  "작고 귀여운": {
    prefixes: ["꼬", "쪼", "미", "콩", "쫑", "아기", "토"],
    suffixes: ["꼬", "콩", "쪼", "미", "링", "니"]
  },
  "귀가 큰": {
    prefixes: ["토", "루", "라", "버니", "쫑", "도"],
    suffixes: ["토", "루", "니", "랑", "롱"]
  },
  "털이 복슬한": {
    prefixes: ["복", "몽", "솜", "포", "푸", "구름"],
    suffixes: ["솜", "몽", "복", "푸", "랑", "구"]
  },
  "눈이 반짝이는": {
    prefixes: ["별", "반", "샤", "루", "빛", "윤"],
    suffixes: ["별", "빛", "린", "샤", "루", "엘"]
  },
  "꼬리가 긴": {
    prefixes: ["롱", "리", "루", "랑", "테일", "나"],
    suffixes: ["롱", "리", "랑", "엘", "온", "아"]
  }
};
  
  const favoritesKey = "character_name_favorites_v1";
  const selectedFeelings = new Set();
const selectedAppearanceTags = [];
  
  const surnameEl = document.getElementById("surname");
  const genderEl = document.getElementById("gender");
  const tagButtonsEl = document.getElementById("tagButtons");
  const tagHintEl = document.getElementById("tagHint");
const appearanceTagsEl = document.getElementById("appearanceTags");
  const btnEl = document.getElementById("btn");
  const resultEl = document.getElementById("result");
  
  const modalOverlayEl = document.getElementById("modalOverlay");
  const modalWrapEl = document.getElementById("nameModal");
  const modalTitleEl = document.getElementById("modalTitle");
  const modalBodyEl = document.getElementById("modalBody");
  const modalCloseEl = document.getElementById("modalClose");
  
  init();
  
  function init() {
    syncGenderRadios();
    renderFeelingButtons();
  bindAppearanceTags();
    bindEvents();
  }
  
  function syncGenderRadios() {
    document.querySelectorAll('input[name="genderRadio"]').forEach((radio) => {
      radio.addEventListener("change", () => {
        if (radio.checked && genderEl) {
          genderEl.value = radio.value;
        }
      });
    });
  }
  
  function bindEvents() {
    btnEl?.addEventListener("click", handleGenerate);
  
    modalCloseEl?.addEventListener("click", closeModal);
    modalOverlayEl?.addEventListener("click", closeModal);
  
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    });
  }

function bindAppearanceTags() {
  if (!appearanceTagsEl) return;

  const tagButtons = appearanceTagsEl.querySelectorAll("button");
  tagButtons.forEach((button) => {
    const value = button.textContent?.trim();
    if (!value) return;

    if (button.classList.contains("active") && !selectedAppearanceTags.includes(value)) {
      selectedAppearanceTags.push(value);
    }

    button.addEventListener("click", () => {
      toggleAppearanceTag(button, value);
    });
  });
}

function toggleAppearanceTag(buttonEl, value) {
  const foundIndex = selectedAppearanceTags.indexOf(value);
  const isSelected = foundIndex !== -1;

  if (isSelected) {
    selectedAppearanceTags.splice(foundIndex, 1);
    buttonEl.classList.remove("active");
    return;
  }

  selectedAppearanceTags.push(value);
  buttonEl.classList.add("active");
}
  
  function renderFeelingButtons() {
    if (!tagButtonsEl) return;
  
    tagButtonsEl.innerHTML = "";
    FEELINGS.forEach((feeling) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "tag-button";
      button.dataset.value = feeling.key;
      button.textContent = feeling.label;
  
      button.addEventListener("click", () => toggleFeeling(feeling.key, button));
      tagButtonsEl.appendChild(button);
    });
  
    updateFeelingHint();
  }
  
  function toggleFeeling(feelingKey, buttonEl) {
    if (selectedFeelings.has(feelingKey)) {
      selectedFeelings.delete(feelingKey);
      buttonEl.classList.remove("is-selected");
      updateFeelingHint();
      return;
    }
  
    if (selectedFeelings.size >= 2) {
      updateFeelingHint("느낌은 최대 2개까지 선택할 수 있어요.");
      return;
    }
  
    selectedFeelings.add(feelingKey);
    buttonEl.classList.add("is-selected");
    updateFeelingHint();
  }
  
  function updateFeelingHint(message = "") {
    if (!tagHintEl) return;
  
    if (message) {
      tagHintEl.textContent = message;
      return;
    }
  
    if (selectedFeelings.size === 0) {
      tagHintEl.textContent = "느낌을 1~2개 선택해보세요.";
      return;
    }
  
    const labels = [...selectedFeelings].map((key) => {
      const item = FEELINGS.find((feeling) => feeling.key === key);
      return item ? item.label : key;
    });
  
    tagHintEl.textContent = `선택됨: ${labels.join(", ")}`;
  }
  
  function handleGenerate() {
  const surname = (surnameEl?.value || "").trim();
  const gender = genderEl?.value || "any";
  const feelings = [...selectedFeelings];
  const appearanceTags = [...selectedAppearanceTags];

  const suggestions = generateSuggestions({
    surname,
    gender,
    feelings,
    appearanceTags,
    count: 12
  });

  renderResults(suggestions, surname);
}

function generateSuggestions({ surname, gender, feelings, appearanceTags, count }) {
    const used = new Set();
    const results = [];
  
    let safety = 0;
    while (results.length < count && safety < 300) {
      safety += 1;
  
      const name = buildName(feelings, appearanceTags);
      if (!isValidName(name)) continue;
      if (used.has(name)) continue;
  
      used.add(name);
  
      const profile = buildProfile({ name, surname, gender, feelings, appearanceTags });
      results.push(profile);
    }
  
    return results;
  }
  
function buildName(feelings, appearanceTags) {
    const feelingPools = feelings.length
      ? feelings.map((key) => NAME_POOLS[key]).filter(Boolean)
      : [];
    const appearancePools = appearanceTags.length
      ? appearanceTags.map((tag) => APPEARANCE_POOLS[tag]).filter(Boolean)
      : [];
    const pools = [...feelingPools, ...appearancePools];

    const prefixPool = pools.flatMap((pool) => pool.prefixes);
    const suffixPool = pools.flatMap((pool) => pool.suffixes);
    const basePrefixes = prefixPool.length ? prefixPool : DEFAULT_POOL.prefixes;
    const baseSuffixes = suffixPool.length ? suffixPool : DEFAULT_POOL.suffixes;

    const prefix = pick(basePrefixes);
    const suffix = pick(baseSuffixes);
    return normalizeName(`${prefix}${suffix}`);
  }
  
  function normalizeName(name) {
    return name
      .replace(/\s+/g, "")
      .replace(/(.)\1{2,}/g, "$1$1");
  }
  
  function isValidName(name) {
    if (!name) return false;
    if (name.length < 2 || name.length > 6) return false;
    if (/(.)\1\1/.test(name)) return false;
    return true;
  }
  
function buildProfile({ name, surname, gender, feelings, appearanceTags }) {
    const fullName = surname ? `${surname}${name}` : name;
    const feelingLabels = feelings.length
      ? feelings.map((key) => FEELINGS.find((item) => item.key === key)?.label || key)
      : ["자유로운"];
  const appearanceLabels = appearanceTags.length ? appearanceTags : ["자유로운 외형"];
  
  const oneLine = makeOneLine(feelingLabels, appearanceLabels);
  const detail = makeDetail({ fullName, gender, feelingLabels, appearanceLabels });
    const similar = makeSimilarNames(name, feelings);
  
    return {
      id: `${name}-${Math.random().toString(36).slice(2, 8)}`,
      name,
      fullName,
      oneLine,
      detail,
      similar,
      feelings: [...feelingLabels, ...appearanceLabels]
    };
  }
  
  function makeOneLine(feelingLabels, appearanceLabels) {
    const first = feelingLabels[0] || "자유로운";
    const second = feelingLabels[1];
    const firstAppearance = appearanceLabels[0] || "자유로운 외형";
  
    if (second) {
      return `${firstAppearance} 외형과 ${first}/${second} 분위기를 함께 살린 캐릭터 이름이에요.`;
    }
  
    return `${firstAppearance} 외형에 ${first} 인상이 살아나는 캐릭터 이름이에요.`;
  }
  
  function makeDetail({ fullName, gender, feelingLabels, appearanceLabels }) {
    const genderText =
      gender === "male" ? "남성적인" :
      gender === "female" ? "여성적인" :
      "중성적인";
  
    const mood = feelingLabels.join(", ");
    const appearance = appearanceLabels.join(", ");
    return `${fullName}은 ${genderText} 톤에도 잘 어울리고, ${appearance} 외형과 ${mood} 느낌을 자연스럽게 살려주는 이름입니다. 부를 때 리듬감이 좋고 캐릭터의 인상을 한 번에 보여주기 쉬운 편이에요.`;
  }
  
  function makeSimilarNames(baseName, feelings) {
    const result = new Set();
  
    let tries = 0;
    while (result.size < 3 && tries < 50) {
      tries += 1;
  
      const pool = feelings.length
        ? feelings.map((key) => NAME_POOLS[key]).filter(Boolean)
        : [DEFAULT_POOL];
  
      const suffixes = pool.flatMap((item) => item.suffixes);
      const prefix = baseName.length >= 2 ? baseName.slice(0, Math.max(1, Math.floor(baseName.length / 2))) : baseName;
      const suffix = pick(suffixes.length ? suffixes : DEFAULT_POOL.suffixes);
      const next = normalizeName(prefix + suffix);
  
      if (next !== baseName && isValidName(next)) {
        result.add(next);
      }
    }
  
    return [...result];
  }
  
  function renderResults(items) {
    if (!resultEl) return;
  
    if (!items.length) {
      resultEl.innerHTML = `<p class="empty-result">추천할 이름을 찾지 못했어요. 느낌을 바꿔서 다시 시도해보세요.</p>`;
      return;
    }
  
    const favorites = getFavorites();
  
    resultEl.innerHTML = `
      <div class="name-result-grid">
        ${items
          .map((item) => {
            const isFavorite = favorites.some((fav) => fav.name === item.name);
            return `
              <article class="name-result-card">
                <div class="name-result-card__head">
                  <div>
                    <h3 class="name-result-card__title">${escapeHtml(item.name)}</h3>
                    <p class="name-result-card__subtitle">${escapeHtml(item.oneLine)}</p>
                  </div>
                  <button
                    type="button"
                    class="favorite-btn ${isFavorite ? "is-active" : ""}"
                    data-favorite-name="${escapeHtml(item.name)}"
                    aria-label="이름 저장"
                  >
                    ${isFavorite ? "♥" : "♡"}
                  </button>
                </div>
  
                <div class="name-result-card__chips">
                  ${item.feelings
                    .map((label) => `<span class="name-chip">${escapeHtml(label)}</span>`)
                    .join("")}
                </div>
  
                <div class="name-result-card__actions">
                  <button type="button" class="ghost-btn" data-detail-id="${escapeHtml(item.id)}">상세 보기</button>
                </div>
              </article>
            `;
          })
          .join("")}
      </div>
    `;
  
    bindResultEvents(items);
  }
  
  function bindResultEvents(items) {
    resultEl.querySelectorAll("[data-detail-id]").forEach((button) => {
      button.addEventListener("click", () => {
        const found = items.find((item) => item.id === button.dataset.detailId);
        if (found) openModal(found);
      });
    });
  
    resultEl.querySelectorAll("[data-favorite-name]").forEach((button) => {
      button.addEventListener("click", () => {
        const found = items.find((item) => item.name === button.dataset.favoriteName);
        if (!found) return;
  
        toggleFavorite(found);
        renderResults(items);
      });
    });
  }
  
  function openModal(item) {
    if (!modalTitleEl || !modalBodyEl || !modalWrapEl || !modalOverlayEl) return;
  
    modalTitleEl.textContent = item.fullName || item.name;
    modalBodyEl.innerHTML = `
      <div class="name-modal-section">
        <p><strong>이름 느낌</strong></p>
        <p>${escapeHtml(item.oneLine)}</p>
      </div>
      <div class="name-modal-section">
        <p><strong>상세 설명</strong></p>
        <p>${escapeHtml(item.detail)}</p>
      </div>
      <div class="name-modal-section">
        <p><strong>비슷한 이름</strong></p>
        <p>${item.similar.map((name) => `<span class="name-chip">${escapeHtml(name)}</span>`).join(" ")}</p>
      </div>
    `;
  
    modalOverlayEl.style.display = "block";
    modalWrapEl.style.display = "block";
  }
  
  function closeModal() {
    if (modalWrapEl) modalWrapEl.style.display = "none";
    if (modalOverlayEl) modalOverlayEl.style.display = "none";
  }
  
  function getFavorites() {
    try {
      const raw = localStorage.getItem(favoritesKey);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }
  
  function toggleFavorite(item) {
    const current = getFavorites();
    const exists = current.some((fav) => fav.name === item.name);
  
    const next = exists
      ? current.filter((fav) => fav.name !== item.name)
      : [...current, { name: item.name, fullName: item.fullName, oneLine: item.oneLine }];
  
    localStorage.setItem(favoritesKey, JSON.stringify(next));
  }
  
  function pick(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }