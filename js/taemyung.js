const FEELING_OPTIONS = [
  { key: "cute", label: "귀여운" },
  { key: "warm", label: "따뜻한" },
  { key: "soft", label: "부드러운" },
  { key: "bright", label: "밝은" },
  { key: "nature", label: "자연 느낌" },
  { key: "pure", label: "순우리말 느낌" },
  { key: "playful", label: "발랄한" },
  { key: "strong", label: "건강한" }
];

const TAEMYUNG_DATA = [
  {
    name: "콩이",
    oneLine: "작고 소중한 느낌의 대표적인 태명이에요.",
    detail: "부르기 쉽고 가족 모두가 금방 익숙해질 수 있어 첫 태명으로 많이 선택합니다.",
    feelings: ["cute", "soft", "warm"]
  },
  {
    name: "토리",
    oneLine: "통통 튀는 리듬감이 귀여운 태명이에요.",
    detail: "짧고 발음이 쉬워 매일 불러도 부담이 없고, 밝은 분위기를 살리기 좋습니다.",
    feelings: ["cute", "playful", "bright"]
  },
  {
    name: "복숭이",
    oneLine: "복숭아처럼 말랑하고 사랑스러운 인상을 줘요.",
    detail: "먹거리 느낌이 있으면서도 어감이 부드러워 따뜻한 분위기의 태명을 찾을 때 어울립니다.",
    feelings: ["cute", "warm", "soft"]
  },
  {
    name: "해님이",
    oneLine: "햇살처럼 밝고 건강한 기운을 담은 태명이에요.",
    detail: "밝고 긍정적인 의미를 좋아하는 가족에게 잘 맞고, 응원하는 느낌을 담기 좋습니다.",
    feelings: ["bright", "strong", "warm"]
  },
  {
    name: "새싹이",
    oneLine: "자라나는 생명력을 상징하는 태명이에요.",
    detail: "자연의 이미지를 담고 있어 순하고 싱그러운 인상을 원할 때 추천합니다.",
    feelings: ["nature", "pure", "soft"]
  },
  {
    name: "별이",
    oneLine: "반짝이는 존재라는 의미를 담기 좋아요.",
    detail: "짧고 선명한 어감 덕분에 남녀 구분 없이 사용하기 쉬운 태명입니다.",
    feelings: ["bright", "soft", "pure"]
  },
  {
    name: "단비",
    oneLine: "반가운 비처럼 귀한 존재를 표현한 태명이에요.",
    detail: "순우리말 계열 이름으로 의미를 중시하는 가족에게 특히 잘 어울립니다.",
    feelings: ["pure", "warm", "nature"]
  },
  {
    name: "튼튼이",
    oneLine: "건강하고 씩씩하게 자라길 바라는 마음을 담았어요.",
    detail: "직관적인 의미가 강해 조부모님 세대까지도 쉽게 공감할 수 있는 이름입니다.",
    feelings: ["strong", "bright", "playful"]
  },
  {
    name: "보들이",
    oneLine: "보들보들한 촉감처럼 부드러운 인상을 줘요.",
    detail: "발음 자체가 순해서 다정하고 포근한 느낌을 살리고 싶을 때 좋습니다.",
    feelings: ["soft", "warm", "cute"]
  },
  {
    name: "구름이",
    oneLine: "하늘과 자연 이미지를 담은 편안한 태명이에요.",
    detail: "자연 느낌을 좋아하는 경우 무난하게 선택하기 좋고, 어감도 둥글어 부르기 쉽습니다.",
    feelings: ["nature", "soft", "pure"]
  },
  {
    name: "라온이",
    oneLine: "즐거움을 뜻하는 순우리말 느낌의 태명이에요.",
    detail: "의미가 밝고 세련돼 요즘 감성의 태명을 찾을 때 자주 추천되는 스타일입니다.",
    feelings: ["pure", "bright", "playful"]
  },
  {
    name: "하랑이",
    oneLine: "함께 자라나는 따뜻한 울림이 있는 태명이에요.",
    detail: "부드러운 모음 중심이라 발음 피로가 적고, 정서적으로 안정적인 느낌을 줍니다.",
    feelings: ["warm", "soft", "pure"]
  }
];

const surnameInput = document.getElementById("surname");
const tagButtons = document.getElementById("tagButtons");
const tagHint = document.getElementById("tagHint");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

if (!tagButtons || !tagHint || !btn || !result) {
  // Required UI is missing; do not execute.
} else {
  const selectedFeelings = new Set();

  function renderTagButtons() {
    tagButtons.innerHTML = "";
    FEELING_OPTIONS.forEach((item) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = item.label;
      button.dataset.feeling = item.key;
      if (selectedFeelings.has(item.key)) button.classList.add("active");
      button.addEventListener("click", () => toggleFeeling(item.key));
      tagButtons.appendChild(button);
    });
    renderHint();
  }

  function renderHint() {
    if (selectedFeelings.size === 0) {
      tagHint.textContent = "느낌을 선택하지 않으면 전체 태명에서 추천합니다.";
      return;
    }
    const labels = FEELING_OPTIONS
      .filter((f) => selectedFeelings.has(f.key))
      .map((f) => f.label);
    tagHint.textContent = `선택한 느낌: ${labels.join(", ")} (${selectedFeelings.size}/2)`;
  }

  function toggleFeeling(feeling) {
    if (selectedFeelings.has(feeling)) {
      selectedFeelings.delete(feeling);
      renderTagButtons();
      return;
    }

    if (selectedFeelings.size >= 2) {
      tagHint.textContent = "느낌은 최대 2개까지 선택할 수 있어요.";
      return;
    }

    selectedFeelings.add(feeling);
    renderTagButtons();
  }

  function shuffle(list) {
    const cloned = [...list];
    for (let i = cloned.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
    }
    return cloned;
  }

  function createCard(item, surnameText) {
    const matchedTags = FEELING_OPTIONS
      .filter((f) => item.feelings.includes(f.key))
      .slice(0, 2)
      .map((f) => f.label)
      .join(" · ");

    const surnamePrefix = surnameText ? `${surnameText}과 어울리는 ` : "";

    return `
      <article class="name-card">
        <span class="name-card__tag">${matchedTags}</span>
        <h3 class="name-card__title">${item.name}</h3>
        <p class="name-card__desc">${surnamePrefix}${item.oneLine}</p>
        <details>
          <summary>상세 설명 보기</summary>
          <p class="name-card__sub">${item.detail}</p>
        </details>
      </article>
    `;
  }

  function getFilteredData() {
    const selected = [...selectedFeelings];
    if (selected.length === 0) return TAEMYUNG_DATA;
    return TAEMYUNG_DATA.filter((item) =>
      selected.every((feeling) => item.feelings.includes(feeling))
    );
  }

  function renderResults() {
    const surnameText = (surnameInput?.value || "").trim();
    const filtered = getFilteredData();
    const picked = shuffle(filtered).slice(0, 6);

    if (picked.length === 0) {
      result.innerHTML = `
        <article class="name-card">
          <h3 class="name-card__title">조건에 맞는 태명을 찾지 못했어요</h3>
          <p class="name-card__desc">선택한 느낌을 1개로 줄이거나 다른 느낌을 선택해보세요.</p>
          <p class="name-card__sub">필요하면 느낌을 선택하지 않고 다시 추천받아도 좋아요.</p>
        </article>
      `;
      return;
    }

    result.innerHTML = picked.map((item) => createCard(item, surnameText)).join("");
  }

  btn.addEventListener("click", renderResults);
  renderTagButtons();
  renderResults();
}
