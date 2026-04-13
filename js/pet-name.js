const petTypeOptions = [
  { id: "dog", label: "강아지" },
  { id: "cat", label: "고양이" },
  { id: "other", label: "기타 반려동물" }
];

const appearanceOptions = [
  "통통한",
  "작고 아담한",
  "다리가 짧은",
  "귀가 쫑긋한",
  "꼬리가 귀여운",
  "털이 복슬복슬한",
  "눈이 동그란",
  "무늬가 독특한",
  "날렵한",
  "하얀 털",
  "검은 털",
  "갈색 털",
  "점박이",
  "얼굴이 동그란",
  "체구가 큰"
];

const personalityOptions = [
  "활발한",
  "귀여운",
  "소심한",
  "장난꾸러기",
  "순한",
  "도도한",
  "애교 많은",
  "엉뚱한",
  "차분한",
  "듬직한",
  "호기심 많은",
  "우아한"
];

const petNameData = [
  {
    name: "콩이",
    en: "Kongi",
    description: "작고 포근한 느낌이 드는 국민 반려동물 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["작고 아담한", "얼굴이 동그란", "눈이 동그란"],
      personalities: ["귀여운", "소심한", "애교 많은"]
    }
  },
  {
    name: "보리",
    en: "Bori",
    description: "정겹고 따뜻해서 오래 불러도 질리지 않는 이름",
    tags: {
      petTypes: ["dog", "cat"],
      appearances: ["갈색 털", "통통한", "꼬리가 귀여운"],
      personalities: ["순한", "귀여운", "차분한"]
    }
  },
  {
    name: "모찌",
    en: "Mochi",
    description: "말랑말랑한 인상이 살아나는 귀여운 네이밍",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["통통한", "하얀 털", "얼굴이 동그란"],
      personalities: ["귀여운", "애교 많은", "순한"]
    }
  },
  {
    name: "까미",
    en: "Kkami",
    description: "검은 털 친구에게 자주 쓰는 친근한 이름",
    tags: {
      petTypes: ["dog", "cat"],
      appearances: ["검은 털", "작고 아담한", "눈이 동그란"],
      personalities: ["장난꾸러기", "활발한", "귀여운"]
    }
  },
  {
    name: "토리",
    en: "Tori",
    description: "짧고 또렷해서 부르기 쉽고 리듬감 있는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["꼬리가 귀여운", "털이 복슬복슬한", "작고 아담한"],
      personalities: ["활발한", "호기심 많은", "장난꾸러기"]
    }
  },
  {
    name: "초코",
    en: "Choco",
    description: "달콤한 이미지의 대표적인 반려동물 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["갈색 털", "검은 털", "통통한"],
      personalities: ["귀여운", "순한", "애교 많은"]
    }
  },
  {
    name: "마루",
    en: "Maru",
    description: "안정감 있고 단정한 느낌이 강한 이름",
    tags: {
      petTypes: ["dog", "cat"],
      appearances: ["체구가 큰", "다리가 짧은", "얼굴이 동그란"],
      personalities: ["차분한", "듬직한", "순한"]
    }
  },
  {
    name: "루루",
    en: "Lulu",
    description: "가볍고 사랑스러운 분위기를 주는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["작고 아담한", "하얀 털", "눈이 동그란"],
      personalities: ["애교 많은", "귀여운", "활발한"]
    }
  },
  {
    name: "밤이",
    en: "Bami",
    description: "깊은 눈빛과 둥근 인상을 가진 아이에게 잘 맞음",
    tags: {
      petTypes: ["dog", "cat"],
      appearances: ["검은 털", "눈이 동그란", "얼굴이 동그란"],
      personalities: ["차분한", "소심한", "순한"]
    }
  },
  {
    name: "젤리",
    en: "Jelly",
    description: "통통하고 말랑한 매력을 살려주는 발랄한 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["통통한", "작고 아담한", "꼬리가 귀여운"],
      personalities: ["장난꾸러기", "귀여운", "애교 많은"]
    }
  },
  {
    name: "로이",
    en: "Roy",
    description: "당당하고 세련된 분위기를 가진 네이밍",
    tags: {
      petTypes: ["dog", "cat"],
      appearances: ["체구가 큰", "날렵한", "검은 털"],
      personalities: ["도도한", "듬직한", "우아한"]
    }
  },
  {
    name: "벨라",
    en: "Bella",
    description: "우아하고 부드러운 인상이 돋보이는 이름",
    tags: {
      petTypes: ["dog", "cat"],
      appearances: ["하얀 털", "털이 복슬복슬한", "작고 아담한"],
      personalities: ["우아한", "도도한", "순한"]
    }
  },
  {
    name: "레오",
    en: "Leo",
    description: "강인하고 리더십 있는 이미지의 이름",
    tags: {
      petTypes: ["dog", "cat"],
      appearances: ["체구가 큰", "갈색 털", "날렵한"],
      personalities: ["듬직한", "활발한", "호기심 많은"]
    }
  },
  {
    name: "밀크",
    en: "Milk",
    description: "새하얗고 포근한 이미지에 잘 어울리는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["하얀 털", "통통한", "털이 복슬복슬한"],
      personalities: ["순한", "귀여운", "차분한"]
    }
  },
  {
    name: "탄이",
    en: "Tani",
    description: "빠르고 씩씩한 성격을 표현하기 좋은 이름",
    tags: {
      petTypes: ["dog", "cat"],
      appearances: ["날렵한", "검은 털", "귀가 쫑긋한"],
      personalities: ["활발한", "장난꾸러기", "호기심 많은"]
    }
  },
  {
    name: "포포",
    en: "Popo",
    description: "짧고 귀엽고 부르기 쉬운 반복형 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["작고 아담한", "얼굴이 동그란", "꼬리가 귀여운"],
      personalities: ["애교 많은", "귀여운", "엉뚱한"]
    }
  },
  {
    name: "달리",
    en: "Dali",
    description: "재빠른 움직임이 돋보이는 친구에게 딱 맞는 이름",
    tags: {
      petTypes: ["dog", "cat"],
      appearances: ["날렵한", "다리가 짧은", "무늬가 독특한"],
      personalities: ["활발한", "장난꾸러기", "호기심 많은"]
    }
  },
  {
    name: "치즈",
    en: "Cheese",
    description: "노란빛 털이나 동그란 얼굴에 잘 어울리는 이름",
    tags: {
      petTypes: ["cat", "dog", "other"],
      appearances: ["갈색 털", "얼굴이 동그란", "통통한"],
      personalities: ["귀여운", "도도한", "애교 많은"]
    }
  },
  {
    name: "하랑",
    en: "Harang",
    description: "맑고 단정한 분위기의 중성적인 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["하얀 털", "날렵한", "체구가 큰"],
      personalities: ["차분한", "우아한", "듬직한"]
    }
  },
  {
    name: "구름",
    en: "Gureum",
    description: "몽글몽글하고 따뜻한 느낌을 주는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["털이 복슬복슬한", "하얀 털", "통통한"],
      personalities: ["순한", "차분한", "귀여운"]
    }
  },
  {
    name: "보노",
    en: "Bono",
    description: "활기 있고 밝은 이미지의 캐주얼한 이름",
    tags: {
      petTypes: ["dog", "cat"],
      appearances: ["무늬가 독특한", "귀가 쫑긋한", "꼬리가 귀여운"],
      personalities: ["활발한", "장난꾸러기", "엉뚱한"]
    }
  },
  {
    name: "라떼",
    en: "Latte",
    description: "부드럽고 크리미한 매력이 담긴 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["갈색 털", "하얀 털", "통통한"],
      personalities: ["순한", "애교 많은", "차분한"]
    }
  },
  {
    name: "도리",
    en: "Dori",
    description: "정감 있는 발음으로 꾸준히 인기 있는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["작고 아담한", "점박이", "눈이 동그란"],
      personalities: ["귀여운", "소심한", "호기심 많은"]
    }
  },
  {
    name: "루비",
    en: "Ruby",
    description: "반짝이고 우아한 인상을 주는 고급형 이름",
    tags: {
      petTypes: ["cat", "dog"],
      appearances: ["무늬가 독특한", "하얀 털", "날렵한"],
      personalities: ["도도한", "우아한", "차분한"]
    }
  },
  {
    name: "호두",
    en: "Hodu",
    description: "동글동글한 매력의 안정적인 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["통통한", "갈색 털", "얼굴이 동그란"],
      personalities: ["순한", "귀여운", "차분한"]
    }
  },
  {
    name: "베리",
    en: "Berry",
    description: "상큼하고 발랄한 무드를 가진 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["작고 아담한", "무늬가 독특한", "점박이"],
      personalities: ["활발한", "엉뚱한", "애교 많은"]
    }
  },
  {
    name: "코코",
    en: "Coco",
    description: "세련되면서도 친근하게 불리는 대표 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["작고 아담한", "갈색 털", "털이 복슬복슬한"],
      personalities: ["귀여운", "장난꾸러기", "도도한"]
    }
  },
  {
    name: "몽이",
    en: "Mongi",
    description: "복슬한 털과 포근한 체형에 잘 어울리는 이름",
    tags: {
      petTypes: ["dog", "cat"],
      appearances: ["털이 복슬복슬한", "통통한", "얼굴이 동그란"],
      personalities: ["순한", "차분한", "소심한"]
    }
  },
  {
    name: "팝콘",
    en: "Popcorn",
    description: "톡톡 튀는 에너지의 장난꾸러기 스타일 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["작고 아담한", "점박이", "꼬리가 귀여운"],
      personalities: ["엉뚱한", "장난꾸러기", "활발한"]
    }
  },
  {
    name: "누리",
    en: "Nuri",
    description: "부드럽고 맑은 분위기의 순한 느낌 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["하얀 털", "눈이 동그란", "날렵한"],
      personalities: ["차분한", "우아한", "순한"]
    }
  },
  {
    name: "해피",
    en: "Happy",
    description: "항상 밝고 꼬리를 흔드는 친구에게 어울리는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["꼬리가 귀여운", "귀가 쫑긋한", "점박이"],
      personalities: ["활발한", "애교 많은", "장난꾸러기"]
    }
  },
  {
    name: "미르",
    en: "Mir",
    description: "짧고 단단한 울림이 있는 중성 네이밍",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["체구가 큰", "검은 털", "날렵한"],
      personalities: ["듬직한", "차분한", "도도한"]
    }
  },
  {
    name: "솜이",
    en: "Somi",
    description: "솜사탕처럼 폭신한 아이에게 잘 어울림",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["털이 복슬복슬한", "하얀 털", "통통한"],
      personalities: ["귀여운", "애교 많은", "순한"]
    }
  },
  {
    name: "단추",
    en: "Danchu",
    description: "작고 동그란 인상을 살리는 개성 있는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["작고 아담한", "눈이 동그란", "얼굴이 동그란"],
      personalities: ["호기심 많은", "엉뚱한", "귀여운"]
    }
  },
  {
    name: "라온",
    en: "Raon",
    description: "즐겁고 긍정적인 기운을 담은 순우리말 느낌 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["무늬가 독특한", "갈색 털", "귀가 쫑긋한"],
      personalities: ["활발한", "우아한", "호기심 많은"]
    }
  },
  {
    name: "멜로",
    en: "Melo",
    description: "부드럽고 감성적인 무드에 잘 어울리는 이름",
    tags: {
      petTypes: ["cat", "dog", "other"],
      appearances: ["하얀 털", "검은 털", "날렵한"],
      personalities: ["차분한", "도도한", "우아한"]
    }
  },
  {
    name: "두부",
    en: "Dubu",
    description: "하얗고 말랑한 이미지에 잘 어울리는 포근한 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["하얀 털", "통통한", "얼굴이 동그란"],
      personalities: ["순한", "귀여운", "차분한"]
    }
  },
  {
    name: "쿠키",
    en: "Cookie",
    description: "달콤하고 친근해서 누구나 부르기 쉬운 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["갈색 털", "점박이", "작고 아담한"],
      personalities: ["귀여운", "장난꾸러기", "애교 많은"]
    }
  },
  {
    name: "버터",
    en: "Butter",
    description: "부드럽고 노란빛 도는 털색에 잘 어울리는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["갈색 털", "하얀 털", "통통한"],
      personalities: ["순한", "차분한", "귀여운"]
    }
  },
  {
    name: "만두",
    en: "Mandu",
    description: "동글동글하고 복스러운 인상에 찰떡인 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["통통한", "얼굴이 동그란", "작고 아담한"],
      personalities: ["귀여운", "순한", "애교 많은"]
    }
  },
  {
    name: "뭉치",
    en: "Mungchi",
    description: "털 많고 포근한 친구를 떠올리게 하는 이름",
    tags: {
      petTypes: ["dog", "cat"],
      appearances: ["털이 복슬복슬한", "통통한", "체구가 큰"],
      personalities: ["순한", "듬직한", "차분한"]
    }
  },
  {
    name: "쫑이",
    en: "Jjongi",
    description: "귀가 쫑긋한 아이에게 잘 붙는 귀여운 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["귀가 쫑긋한", "작고 아담한", "눈이 동그란"],
      personalities: ["활발한", "귀여운", "호기심 많은"]
    }
  },
  {
    name: "다롱",
    en: "Darong",
    description: "사랑스럽고 말랑한 분위기가 나는 이름",
    tags: {
      petTypes: ["dog", "cat"],
      appearances: ["통통한", "꼬리가 귀여운", "털이 복슬복슬한"],
      personalities: ["애교 많은", "귀여운", "순한"]
    }
  },
  {
    name: "나나",
    en: "Nana",
    description: "짧고 발랄해서 작은 친구에게 잘 어울리는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["작고 아담한", "눈이 동그란", "하얀 털"],
      personalities: ["귀여운", "활발한", "애교 많은"]
    }
  },
  {
    name: "미미",
    en: "Mimi",
    description: "부르기 쉽고 여성스러운 분위기의 대표 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["작고 아담한", "하얀 털", "무늬가 독특한"],
      personalities: ["귀여운", "도도한", "애교 많은"]
    }
  },
  {
    name: "쪼꼬",
    en: "Jjokko",
    description: "작고 달콤한 이미지의 귀여운 네이밍",
    tags: {
      petTypes: ["dog", "cat"],
      appearances: ["갈색 털", "작고 아담한", "얼굴이 동그란"],
      personalities: ["귀여운", "장난꾸러기", "애교 많은"]
    }
  },
  {
    name: "쪼롱",
    en: "Jjorong",
    description: "반짝이는 눈매와 발랄한 분위기에 어울리는 이름",
    tags: {
      petTypes: ["dog", "cat"],
      appearances: ["눈이 동그란", "귀가 쫑긋한", "작고 아담한"],
      personalities: ["활발한", "호기심 많은", "엉뚱한"]
    }
  },
  {
    name: "복실",
    en: "Boksil",
    description: "복슬복슬한 털이 매력인 친구에게 딱 맞는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["털이 복슬복슬한", "하얀 털", "통통한"],
      personalities: ["귀여운", "순한", "차분한"]
    }
  },
  {
    name: "송이",
    en: "Songi",
    description: "하얗고 포근한 생김새를 떠올리게 하는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["하얀 털", "작고 아담한", "털이 복슬복슬한"],
      personalities: ["순한", "귀여운", "차분한"]
    }
  },
  {
    name: "초롱",
    en: "Chorong",
    description: "또렷한 눈망울이 인상적인 아이와 잘 맞는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["눈이 동그란", "얼굴이 동그란", "작고 아담한"],
      personalities: ["호기심 많은", "귀여운", "활발한"]
    }
  },
  {
    name: "방울",
    en: "Bangul",
    description: "동글동글하고 맑은 분위기를 담은 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["얼굴이 동그란", "눈이 동그란", "작고 아담한"],
      personalities: ["귀여운", "애교 많은", "차분한"]
    }
  },
  {
    name: "몽실",
    en: "Mongsil",
    description: "구름처럼 폭신한 털이 떠오르는 이름",
    tags: {
      petTypes: ["dog", "cat"],
      appearances: ["털이 복슬복슬한", "통통한", "하얀 털"],
      personalities: ["순한", "귀여운", "소심한"]
    }
  },
  {
    name: "봄이",
    en: "Bomi",
    description: "밝고 산뜻한 분위기를 가진 따뜻한 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["하얀 털", "갈색 털", "작고 아담한"],
      personalities: ["활발한", "귀여운", "애교 많은"]
    }
  },
  {
    name: "여름",
    en: "Yeoreum",
    description: "맑고 경쾌한 이미지의 계절감 있는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["날렵한", "작고 아담한", "무늬가 독특한"],
      personalities: ["활발한", "호기심 많은", "엉뚱한"]
    }
  },
  {
    name: "겨울",
    en: "Gyeoul",
    description: "차분하고 깨끗한 인상이 느껴지는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["하얀 털", "날렵한", "눈이 동그란"],
      personalities: ["차분한", "도도한", "우아한"]
    }
  },
  {
    name: "가을",
    en: "Gaeul",
    description: "따뜻하고 잔잔한 무드가 느껴지는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["갈색 털", "점박이", "얼굴이 동그란"],
      personalities: ["차분한", "순한", "우아한"]
    }
  },
  {
    name: "하늘",
    en: "Haneul",
    description: "맑고 시원한 인상의 중성적인 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["날렵한", "하얀 털", "체구가 큰"],
      personalities: ["차분한", "우아한", "호기심 많은"]
    }
  },
  {
    name: "별이",
    en: "Byeoli",
    description: "반짝이는 눈빛과 사랑스러운 분위기를 살리는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["눈이 동그란", "무늬가 독특한", "작고 아담한"],
      personalities: ["귀여운", "애교 많은", "활발한"]
    }
  },
  {
    name: "달이",
    en: "Dari",
    description: "부드럽고 잔잔한 이미지가 남는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["얼굴이 동그란", "하얀 털", "통통한"],
      personalities: ["차분한", "순한", "소심한"]
    }
  },
  {
    name: "토토",
    en: "Toto",
    description: "짧고 통통 튀는 발랄한 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["작고 아담한", "귀가 쫑긋한", "꼬리가 귀여운"],
      personalities: ["활발한", "장난꾸러기", "귀여운"]
    }
  },
  {
    name: "네로",
    en: "Nero",
    description: "검은 털과 시크한 매력이 돋보이는 이름",
    tags: {
      petTypes: ["dog", "cat"],
      appearances: ["검은 털", "날렵한", "체구가 큰"],
      personalities: ["도도한", "차분한", "우아한"]
    }
  },
  {
    name: "루나",
    en: "Luna",
    description: "고양스럽고 신비로운 느낌이 살아있는 이름",
    tags: {
      petTypes: ["cat", "dog"],
      appearances: ["하얀 털", "검은 털", "날렵한"],
      personalities: ["도도한", "우아한", "차분한"]
    }
  },
  {
    name: "로또",
    en: "Lotto",
    description: "유쾌하고 기억하기 쉬운 장난기 있는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["무늬가 독특한", "점박이", "작고 아담한"],
      personalities: ["엉뚱한", "장난꾸러기", "활발한"]
    }
  },
  {
    name: "무무",
    en: "Mumu",
    description: "순하고 말랑한 친구에게 붙이기 좋은 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["통통한", "하얀 털", "작고 아담한"],
      personalities: ["순한", "소심한", "귀여운"]
    }
  },
  {
    name: "파이",
    en: "Pie",
    description: "작고 달콤한 이미지가 느껴지는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["작고 아담한", "갈색 털", "얼굴이 동그란"],
      personalities: ["귀여운", "애교 많은", "장난꾸러기"]
    }
  },
  {
    name: "츄이",
    en: "Chewy",
    description: "사랑스럽고 말랑한 발음을 가진 귀여운 이름",
    tags: {
      petTypes: ["dog", "cat"],
      appearances: ["꼬리가 귀여운", "눈이 동그란", "작고 아담한"],
      personalities: ["애교 많은", "귀여운", "활발한"]
    }
  },
  {
    name: "쪼이",
    en: "Jjoy",
    description: "에너지가 넘치고 발랄한 인상을 주는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["귀가 쫑긋한", "날렵한", "작고 아담한"],
      personalities: ["활발한", "장난꾸러기", "호기심 많은"]
    }
  },
  {
    name: "보송",
    en: "Bosong",
    description: "보송보송한 털과 깨끗한 분위기에 잘 맞는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["털이 복슬복슬한", "하얀 털", "작고 아담한"],
      personalities: ["순한", "귀여운", "차분한"]
    }
  },
  {
    name: "까꿍",
    en: "Kkakkung",
    description: "작고 장난기 많은 친구를 떠올리게 하는 이름",
    tags: {
      petTypes: ["dog", "cat"],
      appearances: ["작고 아담한", "눈이 동그란", "무늬가 독특한"],
      personalities: ["엉뚱한", "장난꾸러기", "귀여운"]
    }
  },
  {
    name: "루키",
    en: "Rookie",
    description: "활발하고 자신감 넘치는 분위기의 이름",
    tags: {
      petTypes: ["dog", "cat"],
      appearances: ["날렵한", "귀가 쫑긋한", "체구가 큰"],
      personalities: ["활발한", "호기심 많은", "듬직한"]
    }
  },
  {
    name: "맥스",
    en: "Max",
    description: "큰 체구와 든든한 매력을 살려주는 이름",
    tags: {
      petTypes: ["dog"],
      appearances: ["체구가 큰", "날렵한", "검은 털"],
      personalities: ["듬직한", "활발한", "도도한"]
    }
  },
  {
    name: "봉봉",
    en: "Bongbong",
    description: "통통하고 사랑스러운 무드가 살아나는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["통통한", "얼굴이 동그란", "꼬리가 귀여운"],
      personalities: ["귀여운", "애교 많은", "순한"]
    }
  },
  {
    name: "쿠우",
    en: "Kuu",
    description: "동글고 부드러운 이미지가 떠오르는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["통통한", "눈이 동그란", "하얀 털"],
      personalities: ["차분한", "귀여운", "소심한"]
    }
  },
  {
    name: "링고",
    en: "Ringo",
    description: "개성 있고 통통 튀는 발음이 매력적인 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["점박이", "무늬가 독특한", "작고 아담한"],
      personalities: ["엉뚱한", "활발한", "호기심 많은"]
    }
  },
  {
    name: "오레오",
    en: "Oreo",
    description: "흑백 무늬나 독특한 패턴과 잘 어울리는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["검은 털", "하얀 털", "무늬가 독특한"],
      personalities: ["귀여운", "도도한", "장난꾸러기"]
    }
  },
  {
    name: "하찌",
    en: "Hachi",
    description: "똑똑하고 또렷한 분위기를 가진 이름",
    tags: {
      petTypes: ["dog", "cat"],
      appearances: ["귀가 쫑긋한", "날렵한", "갈색 털"],
      personalities: ["호기심 많은", "활발한", "듬직한"]
    }
  },
  {
    name: "나비",
    en: "Nabi",
    description: "가볍고 사랑스러운 움직임이 떠오르는 이름",
    tags: {
      petTypes: ["cat", "other"],
      appearances: ["날렵한", "무늬가 독특한", "작고 아담한"],
      personalities: ["우아한", "도도한", "호기심 많은"]
    }
  },
  {
    name: "토핑",
    en: "Topping",
    description: "귀엽고 달콤한 개성을 살려주는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["점박이", "갈색 털", "작고 아담한"],
      personalities: ["장난꾸러기", "귀여운", "엉뚱한"]
    }
  },
  {
    name: "체리",
    en: "Cherry",
    description: "상큼하고 사랑스러운 분위기가 매력인 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["작고 아담한", "무늬가 독특한", "눈이 동그란"],
      personalities: ["애교 많은", "귀여운", "활발한"]
    }
  },
  {
    name: "메리",
    en: "Merry",
    description: "명랑하고 부드러운 인상을 주는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["하얀 털", "꼬리가 귀여운", "작고 아담한"],
      personalities: ["활발한", "애교 많은", "귀여운"]
    }
  },
  {
    name: "디어",
    en: "Dear",
    description: "차분하고 고급스러운 무드를 주는 이름",
    tags: {
      petTypes: ["cat", "dog"],
      appearances: ["날렵한", "하얀 털", "무늬가 독특한"],
      personalities: ["우아한", "도도한", "차분한"]
    }
  },
  {
    name: "엘리",
    en: "Ellie",
    description: "우아하면서도 부르기 쉬운 부드러운 이름",
    tags: {
      petTypes: ["cat", "dog", "other"],
      appearances: ["작고 아담한", "하얀 털", "털이 복슬복슬한"],
      personalities: ["우아한", "귀여운", "차분한"]
    }
  },
  {
    name: "시루",
    en: "Siru",
    description: "포근하고 익숙한 정서를 담은 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["통통한", "갈색 털", "얼굴이 동그란"],
      personalities: ["순한", "차분한", "귀여운"]
    }
  },
  {
    name: "담이",
    en: "Dami",
    description: "얌전하고 정돈된 분위기에 어울리는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["하얀 털", "날렵한", "눈이 동그란"],
      personalities: ["차분한", "순한", "소심한"]
    }
  },
  {
    name: "후추",
    en: "Huchu",
    description: "작고 까만 매력이 살아나는 개성 있는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["검은 털", "작고 아담한", "눈이 동그란"],
      personalities: ["엉뚱한", "귀여운", "장난꾸러기"]
    }
  },
  {
    name: "감자",
    en: "Gamja",
    description: "통통하고 구수한 매력을 살리는 친근한 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["통통한", "갈색 털", "다리가 짧은"],
      personalities: ["귀여운", "순한", "차분한"]
    }
  },
  {
    name: "고구마",
    en: "Goguma",
    description: "포근하고 둥근 인상에 잘 어울리는 재밌는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["갈색 털", "통통한", "얼굴이 동그란"],
      personalities: ["순한", "애교 많은", "귀여운"]
    }
  },
  {
    name: "잼잼",
    en: "Jamjam",
    description: "사랑스럽고 통통 튀는 발음이 매력적인 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["작고 아담한", "꼬리가 귀여운", "점박이"],
      personalities: ["장난꾸러기", "귀여운", "활발한"]
    }
  },
  {
    name: "비비",
    en: "Bibi",
    description: "부르기 쉽고 경쾌한 느낌의 반복형 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["작고 아담한", "무늬가 독특한", "하얀 털"],
      personalities: ["귀여운", "도도한", "애교 많은"]
    }
  },
  {
    name: "뽀송",
    en: "Pposong",
    description: "깨끗하고 폭신한 이미지를 가진 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["털이 복슬복슬한", "하얀 털", "작고 아담한"],
      personalities: ["순한", "귀여운", "차분한"]
    }
  },
  {
    name: "뽀미",
    en: "Ppomi",
    description: "작고 귀여운 아이에게 무난하게 잘 어울리는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["작고 아담한", "얼굴이 동그란", "꼬리가 귀여운"],
      personalities: ["귀여운", "애교 많은", "소심한"]
    }
  },
  {
    name: "세모",
    en: "Semo",
    description: "귀가 쫑긋한 개성 있는 친구에게 잘 맞는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["귀가 쫑긋한", "날렵한", "무늬가 독특한"],
      personalities: ["엉뚱한", "호기심 많은", "활발한"]
    }
  },
  {
    name: "네모",
    en: "Nemo",
    description: "독특한 외형과 발랄한 매력을 담기 좋은 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["무늬가 독특한", "점박이", "작고 아담한"],
      personalities: ["엉뚱한", "장난꾸러기", "활발한"]
    }
  },
  {
    name: "루팡",
    en: "Lupang",
    description: "영리하고 재빠른 이미지가 느껴지는 이름",
    tags: {
      petTypes: ["cat", "dog"],
      appearances: ["날렵한", "검은 털", "귀가 쫑긋한"],
      personalities: ["호기심 많은", "도도한", "장난꾸러기"]
    }
  },
  {
    name: "반달",
    en: "Bandal",
    description: "잔잔하고 부드러운 분위기의 감성적인 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["하얀 털", "얼굴이 동그란", "통통한"],
      personalities: ["차분한", "우아한", "순한"]
    }
  },
  {
    name: "하니",
    en: "Hani",
    description: "달콤하고 사랑스러운 분위기를 가진 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["작고 아담한", "갈색 털", "눈이 동그란"],
      personalities: ["애교 많은", "귀여운", "활발한"]
    }
  },
  {
    name: "보보",
    en: "Bobo",
    description: "부르기 쉽고 통통한 인상에 잘 맞는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["통통한", "얼굴이 동그란", "작고 아담한"],
      personalities: ["귀여운", "애교 많은", "차분한"]
    }
  },
  {
    name: "링링",
    en: "Lingling",
    description: "작고 발랄한 친구에게 잘 어울리는 경쾌한 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["작고 아담한", "꼬리가 귀여운", "하얀 털"],
      personalities: ["활발한", "귀여운", "엉뚱한"]
    }
  },
  {
    name: "아지",
    en: "Aji",
    description: "친근하고 따뜻한 느낌의 짧은 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["갈색 털", "다리가 짧은", "작고 아담한"],
      personalities: ["순한", "귀여운", "차분한"]
    }
  },
  {
    name: "사랑",
    en: "Sarang",
    description: "애정이 담긴 부드럽고 따뜻한 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["하얀 털", "통통한", "꼬리가 귀여운"],
      personalities: ["애교 많은", "순한", "귀여운"]
    }
  },
  {
    name: "자두",
    en: "Jadu",
    description: "통통 튀고 귀여운 이미지를 가진 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["작고 아담한", "무늬가 독특한", "점박이"],
      personalities: ["귀여운", "엉뚱한", "장난꾸러기"]
    }
  },
  {
    name: "푸딩",
    en: "Pudding",
    description: "말랑하고 달콤한 인상을 살려주는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["통통한", "하얀 털", "얼굴이 동그란"],
      personalities: ["귀여운", "애교 많은", "차분한"]
    }
  },
  {
    name: "버니",
    en: "Bunny",
    description: "쫑긋한 귀와 사랑스러운 분위기에 잘 맞는 이름",
    tags: {
      petTypes: ["cat", "other", "dog"],
      appearances: ["귀가 쫑긋한", "작고 아담한", "하얀 털"],
      personalities: ["귀여운", "활발한", "애교 많은"]
    }
  },
  {
    name: "또또",
    en: "Ttoto",
    description: "짧고 기억하기 쉬운 귀여운 반복형 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["작고 아담한", "꼬리가 귀여운", "눈이 동그란"],
      personalities: ["귀여운", "장난꾸러기", "애교 많은"]
    }
  },
  {
    name: "돌체",
    en: "Dolce",
    description: "세련되고 달콤한 분위기가 있는 이름",
    tags: {
      petTypes: ["cat", "dog"],
      appearances: ["하얀 털", "갈색 털", "날렵한"],
      personalities: ["우아한", "도도한", "차분한"]
    }
  },
  {
    name: "하쿠",
    en: "Haku",
    description: "깨끗하고 중성적인 감각이 살아있는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["하얀 털", "날렵한", "체구가 큰"],
      personalities: ["차분한", "우아한", "듬직한"]
    }
  },
  {
    name: "베베",
    en: "Bebe",
    description: "아기 같은 분위기가 느껴지는 사랑스러운 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["작고 아담한", "통통한", "눈이 동그란"],
      personalities: ["애교 많은", "귀여운", "소심한"]
    }
  },
  {
    name: "쏘이",
    en: "Ssoi",
    description: "짧고 개성 있는 발음의 현대적인 이름",
    tags: {
      petTypes: ["cat", "dog", "other"],
      appearances: ["무늬가 독특한", "날렵한", "작고 아담한"],
      personalities: ["도도한", "엉뚱한", "호기심 많은"]
    }
  },
  {
    name: "복이",
    en: "Bogi",
    description: "복스럽고 친근한 느낌을 가진 따뜻한 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["통통한", "갈색 털", "얼굴이 동그란"],
      personalities: ["순한", "귀여운", "차분한"]
    }
  },
  {
    name: "사탕",
    en: "Satang",
    description: "달콤하고 반짝이는 분위기가 살아나는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["작고 아담한", "하얀 털", "무늬가 독특한"],
      personalities: ["귀여운", "애교 많은", "활발한"]
    }
  },
  {
    name: "쎄리",
    en: "Sseri",
    description: "또렷하고 경쾌한 소리가 매력적인 이름",
    tags: {
      petTypes: ["dog", "cat"],
      appearances: ["귀가 쫑긋한", "날렵한", "작고 아담한"],
      personalities: ["활발한", "도도한", "호기심 많은"]
    }
  },
  {
    name: "모모",
    en: "Momo",
    description: "부드럽고 대중적인 매력이 있는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["작고 아담한", "통통한", "하얀 털"],
      personalities: ["귀여운", "애교 많은", "순한"]
    }
  },
  {
    name: "카이",
    en: "Kai",
    description: "짧고 강한 울림이 있어 멋진 인상을 주는 이름",
    tags: {
      petTypes: ["dog", "cat"],
      appearances: ["날렵한", "체구가 큰", "검은 털"],
      personalities: ["도도한", "듬직한", "활발한"]
    }
  },
  {
    name: "보담",
    en: "Bodam",
    description: "포근하고 귀하게 감싸는 느낌의 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["하얀 털", "통통한", "작고 아담한"],
      personalities: ["순한", "차분한", "애교 많은"]
    }
  },
  {
    name: "율무",
    en: "Yulmu",
    description: "부드럽고 정갈한 이미지가 살아나는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["갈색 털", "하얀 털", "얼굴이 동그란"],
      personalities: ["차분한", "순한", "우아한"]
    }
  },
  {
    name: "콩떡",
    en: "Kongtteok",
    description: "작고 말랑한 매력이 확 살아나는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["통통한", "하얀 털", "작고 아담한"],
      personalities: ["귀여운", "애교 많은", "순한"]
    }
  },
  {
    name: "초이",
    en: "Choi",
    description: "도회적이면서도 짧고 세련된 느낌의 이름",
    tags: {
      petTypes: ["cat", "dog"],
      appearances: ["날렵한", "검은 털", "무늬가 독특한"],
      personalities: ["도도한", "우아한", "호기심 많은"]
    }
  },
  {
    name: "아토",
    en: "Ato",
    description: "짧고 부르기 쉬워 다양한 반려동물에 잘 맞는 이름",
    tags: {
      petTypes: ["dog", "cat", "other"],
      appearances: ["작고 아담한", "날렵한", "꼬리가 귀여운"],
      personalities: ["활발한", "귀여운", "호기심 많은"]
    }
  }
];

const MAX_APPEARANCE = 3;
const MAX_PERSONALITY = 2;
const RECOMMEND_COUNT = 12;

const petTypeChoices = document.getElementById("petTypeChoices");
const appearanceChoices = document.getElementById("appearanceChoices");
const personalityChoices = document.getElementById("personalityChoices");
const recommendBtn = document.getElementById("recommendBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const resultSummary = document.getElementById("resultSummary");
const petResultList = document.getElementById("petResultList");
const petEmptyState = document.getElementById("petEmptyState");

const selectedState = {
  petType: "dog",
  appearance: new Set(),
  personality: new Set()
};

function createChip({ id, label, name, value, type }) {
  const wrapper = document.createElement("label");
  const input = document.createElement("input");
  const chip = document.createElement("span");

  input.className = "chip-input";
  input.id = id;
  input.name = name;
  input.value = value;
  input.type = type;

  chip.className = "chip";
  chip.textContent = label;

  wrapper.append(input, chip);
  return { wrapper, input };
}

function renderOptions() {
  petTypeOptions.forEach((item, idx) => {
    const { wrapper, input } = createChip({
      id: `pet-type-${item.id}`,
      label: item.label,
      name: "petType",
      value: item.id,
      type: "radio"
    });

    if (idx === 0) {
      input.checked = true;
    }

    input.addEventListener("change", () => {
      selectedState.petType = item.id;
      renderRecommendations();
    });

    petTypeChoices.appendChild(wrapper);
  });

  appearanceOptions.forEach((label) => {
    const { wrapper, input } = createChip({
      id: `appearance-${label}`,
      label,
      name: "appearance",
      value: label,
      type: "checkbox"
    });

    input.addEventListener("change", () => {
      if (input.checked) {
        selectedState.appearance.add(label);
      } else {
        selectedState.appearance.delete(label);
      }
      enforceSelectionLimit("appearance");
      renderRecommendations();
    });

    appearanceChoices.appendChild(wrapper);
  });

  personalityOptions.forEach((label) => {
    const { wrapper, input } = createChip({
      id: `personality-${label}`,
      label,
      name: "personality",
      value: label,
      type: "checkbox"
    });

    input.addEventListener("change", () => {
      if (input.checked) {
        selectedState.personality.add(label);
      } else {
        selectedState.personality.delete(label);
      }
      enforceSelectionLimit("personality");
      renderRecommendations();
    });

    personalityChoices.appendChild(wrapper);
  });
}

function enforceSelectionLimit(group) {
  const root = group === "appearance" ? appearanceChoices : personalityChoices;
  const limit = group === "appearance" ? MAX_APPEARANCE : MAX_PERSONALITY;
  const selectedSet = selectedState[group];
  const isLimitReached = selectedSet.size >= limit;

  root.querySelectorAll('input[type="checkbox"]').forEach((input) => {
    input.disabled = isLimitReached && !input.checked;
  });
}

function shuffleArray(items) {
  const copied = [...items];
  for (let i = copied.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [copied[i], copied[randomIndex]] = [copied[randomIndex], copied[i]];
  }
  return copied;
}

function calculateScore(item) {
  let score = 0;
  const reasons = [];

  if (item.tags.petTypes.includes(selectedState.petType)) {
    score += 5;
    reasons.push("선택한 반려동물 종류와 잘 맞아요.");
  }

  let appearanceMatchCount = 0;
  selectedState.appearance.forEach((tag) => {
    if (item.tags.appearances.includes(tag)) {
      appearanceMatchCount += 1;
    }
  });

  if (appearanceMatchCount > 0) {
    score += appearanceMatchCount * 2;
    reasons.push(`외형 특징 ${appearanceMatchCount}개가 일치해요.`);
  }

  let personalityMatchCount = 0;
  selectedState.personality.forEach((tag) => {
    if (item.tags.personalities.includes(tag)) {
      personalityMatchCount += 1;
    }
  });

  if (personalityMatchCount > 0) {
    score += personalityMatchCount * 3;
    reasons.push(`성격/느낌 ${personalityMatchCount}개가 어울려요.`);
  }

  return { score, reasons };
}

function getRecommendations() {
  const scored = petNameData
    .map((item) => {
      const { score, reasons } = calculateScore(item);
      return {
        ...item,
        score,
        reasonText: reasons.join(" ")
      };
    })
    .filter((item) => item.score > 0);

  return shuffleArray(scored)
    .sort((a, b) => b.score - a.score)
    .slice(0, RECOMMEND_COUNT);
}

function renderRecommendations() {
  const recommendations = getRecommendations();
  const selectedAppearanceCount = selectedState.appearance.size;
  const selectedPersonalityCount = selectedState.personality.size;

  resultSummary.textContent = `종류 1개, 외형 ${selectedAppearanceCount}개, 성격/느낌 ${selectedPersonalityCount}개를 반영해 ${recommendations.length}개 이름을 추천했어요.`;

  if (recommendations.length === 0) {
    petResultList.innerHTML = "";
    petEmptyState.style.display = "block";
    return;
  }

  petEmptyState.style.display = "none";
  petResultList.innerHTML = recommendations
    .map(
      (item) => `
      <article class="result-card">
        <h3 class="result-name">${item.name}</h3>
        <div class="result-en">${item.en}</div>
        <p class="result-desc">${item.description}</p>
        <div class="result-reason">${item.reasonText}</div>
      </article>
    `
    )
    .join("");
}

function initPetNamePage() {
  if (
    !petTypeChoices ||
    !appearanceChoices ||
    !personalityChoices ||
    !recommendBtn ||
    !shuffleBtn ||
    !resultSummary ||
    !petResultList ||
    !petEmptyState
  ) {
    return;
  }

  recommendBtn.addEventListener("click", renderRecommendations);
  shuffleBtn.addEventListener("click", renderRecommendations);

  renderOptions();
  renderRecommendations();
}

initPetNamePage();