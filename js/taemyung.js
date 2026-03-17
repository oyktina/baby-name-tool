const taeData = [
  // cute
  {
    name: "콩이",
    category: "cute",
    feeling: "playful",
    style: "common",
    desc: "작고 소중한 존재를 떠올리게 하는 대표적인 태명",
    sub: "짧고 귀여워서 가족 모두가 편하게 부르기 좋습니다."
  },
  {
    name: "토리",
    category: "cute",
    feeling: "soft",
    style: "common",
    desc: "짧고 동글동글한 느낌이 있는 귀여운 태명",
    sub: "성별과 상관없이 부르기 편해 많이 쓰이는 스타일입니다."
  },
  {
    name: "복이",
    category: "cute",
    feeling: "warm",
    style: "common",
    desc: "복이 가득 들어오길 바라는 마음을 담은 태명",
    sub: "가볍게 부르기 좋고 의미도 따뜻합니다."
  },
  {
    name: "쪼꼬",
    category: "cute",
    feeling: "playful",
    style: "modern",
    desc: "작고 귀여운 이미지를 주는 발랄한 태명",
    sub: "가족끼리 애칭처럼 쓰기 좋은 스타일입니다."
  },
  {
    name: "말랑이",
    category: "cute",
    feeling: "soft",
    style: "modern",
    desc: "말랑말랑한 느낌을 살린 귀여운 태명",
    sub: "부드러운 인상을 원할 때 잘 어울립니다."
  },
  {
    name: "몽이",
    category: "cute",
    feeling: "soft",
    style: "common",
    desc: "몽글몽글하고 포근한 이미지를 주는 태명",
    sub: "짧고 귀여운 소리 때문에 많이 선호됩니다."
  },
  {
    name: "꼬물이",
    category: "cute",
    feeling: "playful",
    style: "common",
    desc: "작고 소중한 움직임을 떠올리게 하는 태명",
    sub: "초기 임신 시기에 특히 많이 쓰는 스타일입니다."
  },
  {
    name: "쪼이",
    category: "cute",
    feeling: "bright",
    style: "modern",
    desc: "짧고 밝게 들리는 귀여운 태명",
    sub: "요즘 느낌을 살리고 싶을 때 어울립니다."
  },
  {
    name: "쑥이",
    category: "cute",
    feeling: "warm",
    style: "common",
    desc: "쑥쑥 잘 자라라는 바람이 담긴 태명",
    sub: "귀엽고 건강한 이미지를 함께 줍니다."
  },
  {
    name: "또또",
    category: "cute",
    feeling: "playful",
    style: "modern",
    desc: "반복되는 소리로 귀여움을 살린 태명",
    sub: "짧고 기억하기 쉬운 스타일입니다."
  },

  // pure
  {
    name: "별이",
    category: "pure",
    feeling: "bright",
    style: "common",
    desc: "반짝이는 소중한 존재라는 느낌을 담은 태명",
    sub: "순우리말 느낌을 살리면서도 익숙하게 부를 수 있습니다."
  },
  {
    name: "해님이",
    category: "pure",
    feeling: "bright",
    style: "common",
    desc: "햇살처럼 밝고 따뜻하길 바라는 마음의 태명",
    sub: "환한 분위기를 좋아하는 부모에게 잘 어울립니다."
  },
  {
    name: "나래",
    category: "pure",
    feeling: "soft",
    style: "modern",
    desc: "날개처럼 자유롭고 가볍게 자라라는 의미의 태명",
    sub: "부드럽고 감성적인 순우리말 계열입니다."
  },
  {
    name: "바다",
    category: "pure",
    feeling: "warm",
    style: "modern",
    desc: "넓고 깊은 이미지를 가진 순우리말 태명",
    sub: "단정하면서도 감성적인 느낌이 있습니다."
  },
  {
    name: "노을",
    category: "pure",
    feeling: "soft",
    style: "unique",
    desc: "따뜻하고 여백 있는 분위기를 주는 태명",
    sub: "흔하지 않으면서도 감성적인 이름입니다."
  },
  {
    name: "나봄",
    category: "pure",
    feeling: "bright",
    style: "modern",
    desc: "봄처럼 밝고 따뜻한 느낌의 태명",
    sub: "순우리말 기반이지만 요즘 느낌도 있습니다."
  },
  {
    name: "하늘이",
    category: "pure",
    feeling: "bright",
    style: "common",
    desc: "넓고 환한 이미지를 담은 태명",
    sub: "편하게 부르기 좋아 꾸준히 선호되는 스타일입니다."
  },
  {
    name: "보람이",
    category: "pure",
    feeling: "warm",
    style: "common",
    desc: "기쁨과 보람을 담은 순우리말 태명",
    sub: "부모의 바람이 잘 느껴지는 따뜻한 이름입니다."
  },
  {
    name: "윤슬이",
    category: "pure",
    feeling: "soft",
    style: "unique",
    desc: "햇빛이나 달빛에 반짝이는 잔물결 같은 이미지",
    sub: "감성적이고 조금 특별한 순우리말 태명입니다."
  },
  {
    name: "누리",
    category: "pure",
    feeling: "warm",
    style: "modern",
    desc: "세상을 뜻하는 순우리말 태명",
    sub: "짧고 단정해 요즘 태명으로도 잘 어울립니다."
  },

  // food
  {
    name: "알콩이",
    category: "food",
    feeling: "playful",
    style: "common",
    desc: "작고 귀여운 콩을 떠올리게 하는 대표적인 먹거리 태명",
    sub: "맘카페 등에서 가장 많이 보이는 익숙한 스타일입니다."
  },
  {
    name: "달콩이",
    category: "food",
    feeling: "warm",
    style: "common",
    desc: "달콤하고 귀여운 느낌을 더한 태명",
    sub: "알콩이보다 조금 더 부드럽게 들리는 편입니다."
  },
  {
    name: "밤톨이",
    category: "food",
    feeling: "playful",
    style: "common",
    desc: "작고 동글동글한 이미지를 담은 태명",
    sub: "귀여운 먹거리 느낌을 좋아할 때 잘 어울립니다."
  },
  {
    name: "복숭이",
    category: "food",
    feeling: "soft",
    style: "modern",
    desc: "복숭아처럼 말랑하고 사랑스러운 느낌의 태명",
    sub: "여리고 부드러운 이미지를 살릴 수 있습니다."
  },
  {
    name: "딸기",
    category: "food",
    feeling: "bright",
    style: "common",
    desc: "작고 빨갛고 귀여운 이미지를 담은 태명",
    sub: "발랄하고 밝은 분위기를 좋아할 때 잘 어울립니다."
  },
  {
    name: "체리",
    category: "food",
    feeling: "bright",
    style: "modern",
    desc: "귀엽고 사랑스러운 과일 느낌의 태명",
    sub: "약간 영어식 감각도 있어 요즘 느낌이 있습니다."
  },
  {
    name: "호두",
    category: "food",
    feeling: "warm",
    style: "common",
    desc: "작고 단단하게 잘 자라길 바라는 느낌의 태명",
    sub: "짧고 중성적으로도 부르기 좋은 편입니다."
  },
  {
    name: "만두",
    category: "food",
    feeling: "playful",
    style: "common",
    desc: "동글동글하고 포근한 이미지를 주는 태명",
    sub: "애칭처럼 귀엽게 부르기 좋습니다."
  },
  {
    name: "쿠키",
    category: "food",
    feeling: "playful",
    style: "modern",
    desc: "발랄하고 달콤한 분위기의 태명",
    sub: "약간 영어식 느낌도 있어 요즘 감각에 맞습니다."
  },
  {
    name: "젤리",
    category: "food",
    feeling: "soft",
    style: "modern",
    desc: "말랑하고 귀여운 인상을 주는 태명",
    sub: "부드럽고 통통 튀는 느낌을 함께 줍니다."
  },

  // nature
  {
    name: "햇살이",
    category: "nature",
    feeling: "bright",
    style: "common",
    desc: "햇살처럼 환하고 따뜻한 느낌의 태명",
    sub: "밝은 기운을 담고 싶을 때 잘 어울립니다."
  },
  {
    name: "구름이",
    category: "nature",
    feeling: "soft",
    style: "common",
    desc: "몽글몽글하고 포근한 분위기의 태명",
    sub: "부드럽고 편안한 느낌을 좋아할 때 좋습니다."
  },
  {
    name: "바람이",
    category: "nature",
    feeling: "soft",
    style: "modern",
    desc: "가볍고 자유로운 이미지를 담은 태명",
    sub: "조금 감성적이고 자연스러운 분위기가 있습니다."
  },
  {
    name: "노을이",
    category: "nature",
    feeling: "warm",
    style: "unique",
    desc: "따뜻하고 차분한 분위기의 자연 태명",
    sub: "조용하고 감성적인 느낌을 좋아할 때 잘 어울립니다."
  },
  {
    name: "별빛이",
    category: "nature",
    feeling: "bright",
    style: "modern",
    desc: "반짝이는 이미지가 살아 있는 태명",
    sub: "밝고 환한 느낌을 강조할 수 있습니다."
  },
  {
    name: "바다야",
    category: "nature",
    feeling: "warm",
    style: "modern",
    desc: "넓고 편안한 이미지를 담은 자연 태명",
    sub: "순우리말 느낌과 자연 느낌을 함께 줍니다."
  },
  {
    name: "새봄이",
    category: "nature",
    feeling: "bright",
    style: "modern",
    desc: "새로운 시작과 밝음을 담은 태명",
    sub: "임신 소식을 기쁘게 담아내기 좋은 스타일입니다."
  },
  {
    name: "달빛이",
    category: "nature",
    feeling: "soft",
    style: "unique",
    desc: "조용하고 은은한 이미지를 주는 태명",
    sub: "부드러운 감성을 좋아하는 부모에게 잘 맞습니다."
  },
  {
    name: "꽃비",
    category: "nature",
    feeling: "bright",
    style: "unique",
    desc: "예쁘고 감성적인 자연 태명",
    sub: "순우리말 느낌과 귀여움을 함께 담고 있습니다."
  },
  {
    name: "초롱이",
    category: "nature",
    feeling: "bright",
    style: "common",
    desc: "맑고 환한 이미지를 떠올리게 하는 태명",
    sub: "귀여우면서도 생기 있는 느낌이 있습니다."
  },

  // english
  {
    name: "루루",
    category: "english",
    feeling: "playful",
    style: "modern",
    desc: "짧고 귀엽게 들리는 영어 느낌 태명",
    sub: "부르기 쉽고 발랄한 분위기가 있습니다."
  },
  {
    name: "로이",
    category: "english",
    feeling: "modern",
    style: "modern",
    desc: "짧고 또렷한 영어 느낌의 태명",
    sub: "남녀 모두 가볍게 부르기 좋은 편입니다."
  },
  {
    name: "엘리",
    category: "english",
    feeling: "soft",
    style: "modern",
    desc: "부드럽고 여성스러운 영어 느낌 태명",
    sub: "익숙하고 귀엽게 들리는 스타일입니다."
  },
  {
    name: "레오",
    category: "english",
    feeling: "bright",
    style: "modern",
    desc: "짧고 선명한 영어식 태명",
    sub: "또렷하고 발음하기 쉬운 편입니다."
  },
  {
    name: "미아",
    category: "english",
    feeling: "soft",
    style: "modern",
    desc: "전 세계적으로 익숙한 짧은 이름 느낌의 태명",
    sub: "부드럽고 편안한 이미지가 있습니다."
  },
  {
    name: "로나",
    category: "english",
    feeling: "modern",
    style: "unique",
    desc: "이국적이고 세련된 영어 느낌의 태명",
    sub: "조금 특별한 분위기를 원할 때 잘 어울립니다."
  },
  {
    name: "제니",
    category: "english",
    feeling: "bright",
    style: "common",
    desc: "귀엽고 익숙한 영어 느낌 태명",
    sub: "가볍고 친근한 이미지가 있습니다."
  },
  {
    name: "리아",
    category: "english",
    feeling: "soft",
    style: "modern",
    desc: "부드럽고 글로벌한 울림이 있는 태명",
    sub: "짧고 세련된 인상을 줍니다."
  },
  {
    name: "루나",
    category: "english",
    feeling: "soft",
    style: "modern",
    desc: "몽환적이고 감성적인 영어 느낌 태명",
    sub: "요즘 감각이 강한 편입니다."
  },
  {
    name: "지오",
    category: "english",
    feeling: "modern",
    style: "unique",
    desc: "짧고 개성 있는 글로벌 느낌 태명",
    sub: "중성적이고 세련된 인상이 있습니다."
  },

  // strong
  {
    name: "튼튼이",
    category: "strong",
    feeling: "strong",
    style: "common",
    desc: "건강하고 튼튼하게 자라길 바라는 대표적인 태명",
    sub: "가장 익숙하고 상징적인 건강형 태명입니다."
  },
  {
    name: "쑥쑥이",
    category: "strong",
    feeling: "strong",
    style: "common",
    desc: "무럭무럭 잘 자라길 바라는 마음을 담은 태명",
    sub: "밝고 긍정적인 분위기가 강합니다."
  },
  {
    name: "씩씩이",
    category: "strong",
    feeling: "strong",
    style: "common",
    desc: "건강하고 씩씩한 아이가 되길 바라는 태명",
    sub: "남녀 모두 무난하게 쓸 수 있는 편입니다."
  },
  {
    name: "무럭이",
    category: "strong",
    feeling: "strong",
    style: "modern",
    desc: "무럭무럭 잘 자라는 이미지를 담은 태명",
    sub: "건강한 느낌을 조금 부드럽게 표현할 수 있습니다."
  },
  {
    name: "튼별이",
    category: "strong",
    feeling: "warm",
    style: "unique",
    desc: "튼튼함과 소중함을 함께 담은 태명",
    sub: "건강한 느낌에 감성을 섞고 싶을 때 좋습니다."
  },
  {
    name: "튼복이",
    category: "strong",
    feeling: "warm",
    style: "unique",
    desc: "건강과 복을 함께 담은 태명",
    sub: "조금 특별하게 건강한 의미를 담고 싶을 때 어울립니다."
  },
  {
    name: "건강이",
    category: "strong",
    feeling: "strong",
    style: "common",
    desc: "이름 그대로 건강을 바라는 태명",
    sub: "직관적이고 의미가 분명한 스타일입니다."
  },
  {
    name: "튼실이",
    category: "strong",
    feeling: "strong",
    style: "common",
    desc: "튼실하고 건강하게 자라길 바라는 태명",
    sub: "조금 더 묵직한 건강형 태명입니다."
  },
  {
    name: "쑥별이",
    category: "strong",
    feeling: "bright",
    style: "modern",
    desc: "쑥쑥 자라며 반짝이길 바라는 태명",
    sub: "건강한 느낌에 밝은 이미지를 함께 담았습니다."
  },
  {
    name: "씩복이",
    category: "strong",
    feeling: "warm",
    style: "unique",
    desc: "씩씩함과 복을 함께 담은 태명",
    sub: "건강형 태명 중에서도 조금 귀엽게 들립니다."
  }
];

const taeCategory = document.getElementById("taeCategory");
const taeFeeling = document.getElementById("taeFeeling");
const taeStyle = document.getElementById("taeStyle");
const taeBtn = document.getElementById("taeBtn");
const taeResult = document.getElementById("taeResult");

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function renderTaeResult() {
  const category = taeCategory?.value || "all";
  const feeling = taeFeeling?.value || "all";
  const style = taeStyle?.value || "all";

  let filtered = taeData.filter((item) => {
    const categoryOk = category === "all" || item.category === category;
    const feelingOk = feeling === "all" || item.feeling === feeling;
    const styleOk = style === "all" || item.style === style;
    return categoryOk && feelingOk && styleOk;
  });

  if (filtered.length < 10) {
    filtered = taeData.filter((item) => {
      const categoryOk = category === "all" || item.category === category;
      const feelingOk = feeling === "all" || item.feeling === feeling;
      return categoryOk && feelingOk;
    });
  }

  if (filtered.length < 10) {
    filtered = taeData.filter((item) => {
      const categoryOk = category === "all" || item.category === category;
      return categoryOk;
    });
  }

  if (filtered.length < 10) {
    filtered = taeData;
  }

  const picked = shuffle(filtered).slice(0, 10);

  taeResult.innerHTML = picked
    .map(
      (item) => `
        <article class="name-card">
          <div class="name-card__tag">${getCategoryLabel(item.category)}</div>
          <h2 class="name-card__title">${item.name}</h2>
          <p class="name-card__desc">${item.desc}</p>
          <div class="name-card__sub">${item.sub}</div>
        </article>
      `
    )
    .join("");
}

function getCategoryLabel(category) {
  const labels = {
    cute: "귀여운 태명",
    pure: "순우리말 태명",
    food: "먹거리 태명",
    nature: "자연 느낌 태명",
    english: "영어 느낌 태명",
    strong: "튼튼한 느낌 태명"
  };
  return labels[category] || category;
}

if (taeBtn) {
  taeBtn.addEventListener("click", renderTaeResult);
}

renderTaeResult();