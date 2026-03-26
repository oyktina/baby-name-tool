const CHOSUNG_LIST = ["ㄱ","ㄴ","ㄷ","ㄹ","ㅁ","ㅂ","ㅅ","ㅇ","ㅈ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];

const nameData = [
  { name: "가은", c1: "ㄱ", c2: "ㅇ", desc: "부드럽고 익숙한 분위기의 이름" },
  { name: "건우", c1: "ㄱ", c2: "ㅇ", desc: "또렷하고 힘 있는 인상을 주는 이름" },
  { name: "규원", c1: "ㄱ", c2: "ㅇ", desc: "단정하고 세련된 느낌의 이름" },
  { name: "기온", c1: "ㄱ", c2: "ㅇ", desc: "짧고 개성적인 조합의 이름" },
  { name: "고운", c1: "ㄱ", c2: "ㅇ", desc: "이름 그대로 고운 인상을 주는 이름" },
  { name: "가영", c1: "ㄱ", c2: "ㅇ", desc: "차분하고 익숙한 분위기의 이름" },
  { name: "기윤", c1: "ㄱ", c2: "ㅇ", desc: "세련되고 부드러운 느낌의 이름" },
  { name: "규아", c1: "ㄱ", c2: "ㅇ", desc: "짧고 맑은 인상의 이름" },
  { name: "건아", c1: "ㄱ", c2: "ㅇ", desc: "활기차고 힘 있는 분위기의 이름" },
  { name: "경윤", c1: "ㄱ", c2: "ㅇ", desc: "차분하고 반듯한 분위기의 이름" },

  { name: "나연", c1: "ㄴ", c2: "ㅇ", desc: "부드럽고 여성스러운 울림의 이름" },
  { name: "노을", c1: "ㄴ", c2: "ㅇ", desc: "감성적이고 차분한 느낌의 이름" },
  { name: "누온", c1: "ㄴ", c2: "ㅇ", desc: "드물고 따뜻한 인상을 주는 이름" },
  { name: "나윤", c1: "ㄴ", c2: "ㅇ", desc: "익숙하면서도 부드러운 이름" },
  { name: "나은", c1: "ㄴ", c2: "ㅇ", desc: "익숙하고 부드러운 인상의 이름" },
  { name: "노윤", c1: "ㄴ", c2: "ㅇ", desc: "드물고 세련된 느낌의 이름" },
  { name: "남우", c1: "ㄴ", c2: "ㅇ", desc: "반듯하고 안정적인 분위기의 이름" },
  { name: "누아", c1: "ㄴ", c2: "ㅇ", desc: "짧고 글로벌한 감각의 이름" },
  { name: "나영", c1: "ㄴ", c2: "ㅇ", desc: "부드럽고 단정한 느낌의 이름" },
  { name: "노아", c1: "ㄴ", c2: "ㅇ", desc: "짧고 세련된 인상의 이름" },

  { name: "다온", c1: "ㄷ", c2: "ㅇ", desc: "따뜻하고 부드러운 분위기의 이름" },
  { name: "도윤", c1: "ㄷ", c2: "ㅇ", desc: "대중적이면서 세련된 느낌의 이름" },
  { name: "다은", c1: "ㄷ", c2: "ㅇ", desc: "부드럽고 친근한 인상을 주는 이름" },
  { name: "도원", c1: "ㄷ", c2: "ㅇ", desc: "차분하고 여유 있는 분위기의 이름" },
  { name: "단아", c1: "ㄷ", c2: "ㅇ", desc: "단정하고 깨끗한 느낌의 이름" },
  { name: "대운", c1: "ㄷ", c2: "ㅇ", desc: "묵직하고 안정감 있는 이름" },
  { name: "도아", c1: "ㄷ", c2: "ㅇ", desc: "짧고 부드러운 느낌의 이름" },
  { name: "다영", c1: "ㄷ", c2: "ㅇ", desc: "익숙하고 여성스러운 분위기의 이름" },
  { name: "도연", c1: "ㄷ", c2: "ㅇ", desc: "차분하고 세련된 인상의 이름" },
  { name: "담윤", c1: "ㄷ", c2: "ㅇ", desc: "드물고 요즘 감각이 있는 이름" },

  { name: "도하", c1: "ㄷ", c2: "ㅎ", desc: "세련되고 또렷한 느낌의 이름" },
  { name: "다희", c1: "ㄷ", c2: "ㅎ", desc: "밝고 환한 인상을 주는 이름" },
  { name: "두현", c1: "ㄷ", c2: "ㅎ", desc: "차분하고 단정한 분위기의 이름" },
  { name: "도현", c1: "ㄷ", c2: "ㅎ", desc: "안정감 있고 익숙한 느낌의 이름" },
  { name: "대한", c1: "ㄷ", c2: "ㅎ", desc: "힘 있고 반듯한 인상을 주는 이름" },
  { name: "다현", c1: "ㄷ", c2: "ㅎ", desc: "부드럽고 편안한 느낌의 이름" },
  { name: "도희", c1: "ㄷ", c2: "ㅎ", desc: "은은하고 여성스러운 울림의 이름" },
  { name: "동하", c1: "ㄷ", c2: "ㅎ", desc: "시원하고 또렷한 이미지를 가진 이름" },
  { name: "다혜", c1: "ㄷ", c2: "ㅎ", desc: "밝고 단정한 인상의 이름" },
  { name: "동현", c1: "ㄷ", c2: "ㅎ", desc: "익숙하고 안정감 있는 이름" },
  { name: "대호", c1: "ㄷ", c2: "ㅎ", desc: "힘 있고 시원한 느낌의 이름" },

  { name: "라온", c1: "ㄹ", c2: "ㅇ", desc: "즐거운 느낌을 담은 밝은 이름" },
  { name: "로아", c1: "ㄹ", c2: "ㅇ", desc: "짧고 세련된 분위기의 이름" },
  { name: "리온", c1: "ㄹ", c2: "ㅇ", desc: "글로벌한 감각이 있는 이름" },
  { name: "루아", c1: "ㄹ", c2: "ㅇ", desc: "부드럽고 귀여운 분위기의 이름" },
  { name: "로운", c1: "ㄹ", c2: "ㅇ", desc: "단정하고 편안한 인상의 이름" },
  { name: "로윤", c1: "ㄹ", c2: "ㅇ", desc: "짧고 세련된 느낌이 강한 이름" },
  { name: "리아", c1: "ㄹ", c2: "ㅇ", desc: "글로벌한 감각이 있는 부드러운 이름" },
  { name: "리안", c1: "ㄹ", c2: "ㅇ", desc: "짧고 세련된 중성적 이름" },
  { name: "라윤", c1: "ㄹ", c2: "ㅇ", desc: "요즘 감각이 있는 밝은 이름" },
  { name: "라은", c1: "ㄹ", c2: "ㅇ", desc: "부드럽고 여성스러운 인상의 이름" },

  { name: "민아", c1: "ㅁ", c2: "ㅇ", desc: "짧고 부드럽게 들리는 이름" },
  { name: "민우", c1: "ㅁ", c2: "ㅇ", desc: "익숙하고 안정감 있는 이름" },
  { name: "미온", c1: "ㅁ", c2: "ㅇ", desc: "따뜻하고 은은한 울림의 이름" },
  { name: "명은", c1: "ㅁ", c2: "ㅇ", desc: "차분하고 단정한 인상의 이름" },
  { name: "무안", c1: "ㅁ", c2: "ㅇ", desc: "드물고 개성 있는 초성 조합의 이름" },
  { name: "민영", c1: "ㅁ", c2: "ㅇ", desc: "부드럽고 익숙한 느낌의 이름" },
  { name: "명우", c1: "ㅁ", c2: "ㅇ", desc: "단정하고 안정적인 분위기의 이름" },
  { name: "미유", c1: "ㅁ", c2: "ㅇ", desc: "짧고 귀여운 인상의 이름" },
  { name: "민온", c1: "ㅁ", c2: "ㅇ", desc: "따뜻하고 요즘 감각이 있는 이름" },
  { name: "모아", c1: "ㅁ", c2: "ㅇ", desc: "짧고 사랑스러운 분위기의 이름" },

  { name: "서윤", c1: "ㅅ", c2: "ㅇ", desc: "부드럽고 따뜻한 인상의 대표적인 이름" },
  { name: "수아", c1: "ㅅ", c2: "ㅇ", desc: "짧고 맑은 느낌이 있는 이름" },
  { name: "시온", c1: "ㅅ", c2: "ㅇ", desc: "세련되고 중성적인 분위기의 이름" },
  { name: "소율", c1: "ㅅ", c2: "ㅇ", desc: "감성적이고 부드러운 울림의 이름" },
  { name: "선우", c1: "ㅅ", c2: "ㅇ", desc: "차분하고 단정한 느낌의 이름" },
  { name: "승아", c1: "ㅅ", c2: "ㅇ", desc: "밝고 또렷한 인상을 주는 이름" },
  { name: "서아", c1: "ㅅ", c2: "ㅇ", desc: "부드럽고 사랑스러운 분위기의 이름" },
  { name: "시아", c1: "ㅅ", c2: "ㅇ", desc: "요즘 느낌이 강한 세련된 이름" },
  { name: "시우", c1: "ㅅ", c2: "ㅇ", desc: "짧고 선명해 기억하기 쉬운 이름" },
  { name: "수온", c1: "ㅅ", c2: "ㅇ", desc: "따뜻하고 부드러운 분위기를 담은 이름" },
  { name: "서율", c1: "ㅅ", c2: "ㅇ", desc: "부드럽고 요즘 느낌이 강한 이름" },
  { name: "서은", c1: "ㅅ", c2: "ㅇ", desc: "차분하고 단정한 인상의 이름" },
  { name: "상윤", c1: "ㅅ", c2: "ㅇ", desc: "안정감 있고 반듯한 분위기의 이름" },
  { name: "수연", c1: "ㅅ", c2: "ㅇ", desc: "부드럽고 클래식한 인상의 이름" },
  { name: "소은", c1: "ㅅ", c2: "ㅇ", desc: "짧고 부드러운 울림의 이름" },

  { name: "서하", c1: "ㅅ", c2: "ㅎ", desc: "짧고 세련되며 부르기 쉬운 이름" },
  { name: "소희", c1: "ㅅ", c2: "ㅎ", desc: "익숙하고 여성스러운 인상의 이름" },
  { name: "승호", c1: "ㅅ", c2: "ㅎ", desc: "또렷하고 활기찬 느낌의 이름" },
  { name: "시후", c1: "ㅅ", c2: "ㅎ", desc: "요즘 느낌이 강한 이름" },
  { name: "선화", c1: "ㅅ", c2: "ㅎ", desc: "단정하고 은은한 분위기의 이름" },
  { name: "수현", c1: "ㅅ", c2: "ㅎ", desc: "차분하고 익숙한 분위기의 이름" },
  { name: "소하", c1: "ㅅ", c2: "ㅎ", desc: "짧고 세련된 느낌의 이름" },
  { name: "시현", c1: "ㅅ", c2: "ㅎ", desc: "부드럽고 세련된 인상의 이름" },
  { name: "선호", c1: "ㅅ", c2: "ㅎ", desc: "또렷하고 반듯한 느낌의 이름" },
  { name: "성훈", c1: "ㅅ", c2: "ㅎ", desc: "익숙하고 안정적인 분위기의 이름" },

  { name: "아라", c1: "ㅇ", c2: "ㄹ", desc: "짧고 부드럽게 들리는 이름" },
  { name: "유리", c1: "ㅇ", c2: "ㄹ", desc: "맑고 깨끗한 인상의 이름" },
  { name: "아린", c1: "ㅇ", c2: "ㄹ", desc: "부드럽고 감성적인 분위기의 이름" },
  { name: "연루", c1: "ㅇ", c2: "ㄹ", desc: "드물고 독특한 초성 조합의 이름" },
  { name: "유라", c1: "ㅇ", c2: "ㄹ", desc: "세련되고 익숙한 울림의 이름" },

  { name: "예원", c1: "ㅇ", c2: "ㅇ", desc: "부드럽고 익숙한 인상의 이름" },
  { name: "아윤", c1: "ㅇ", c2: "ㅇ", desc: "짧고 따뜻한 느낌의 이름" },
  { name: "은우", c1: "ㅇ", c2: "ㅇ", desc: "부드럽고 단정한 분위기의 이름" },
  { name: "이안", c1: "ㅇ", c2: "ㅇ", desc: "글로벌한 감각이 있는 세련된 이름" },
  { name: "유아", c1: "ㅇ", c2: "ㅇ", desc: "짧고 맑은 인상의 이름" },
  { name: "유온", c1: "ㅇ", c2: "ㅇ", desc: "따뜻하고 부드러운 울림의 이름" },

  { name: "지안", c1: "ㅈ", c2: "ㅇ", desc: "세련되고 글로벌한 감각이 있는 이름" },
  { name: "주아", c1: "ㅈ", c2: "ㅇ", desc: "밝고 사랑스러운 분위기의 이름" },
  { name: "지우", c1: "ㅈ", c2: "ㅇ", desc: "부드럽고 친근한 느낌의 이름" },
  { name: "재원", c1: "ㅈ", c2: "ㅇ", desc: "안정적이고 단정한 인상의 이름" },
  { name: "정원", c1: "ㅈ", c2: "ㅇ", desc: "자연스럽고 여유 있는 분위기의 이름" },
  { name: "주원", c1: "ㅈ", c2: "ㅇ", desc: "익숙하면서도 세련된 느낌의 이름" },
  { name: "지온", c1: "ㅈ", c2: "ㅇ", desc: "요즘 감각이 있는 중성적 이름" },
  { name: "재아", c1: "ㅈ", c2: "ㅇ", desc: "짧고 환한 인상의 이름" },
  { name: "주연", c1: "ㅈ", c2: "ㅇ", desc: "부드럽고 익숙한 분위기의 이름" },
  { name: "정윤", c1: "ㅈ", c2: "ㅇ", desc: "안정감 있고 단정한 느낌의 이름" },
  { name: "재윤", c1: "ㅈ", c2: "ㅇ", desc: "세련되고 반듯한 분위기의 이름" },
  { name: "지원", c1: "ㅈ", c2: "ㅇ", desc: "익숙하고 부드러운 느낌의 이름" },
  { name: "주은", c1: "ㅈ", c2: "ㅇ", desc: "따뜻하고 편안한 인상을 주는 이름" },

  { name: "지혜", c1: "ㅈ", c2: "ㅎ", desc: "단정하고 익숙한 클래식한 이름" },
  { name: "준호", c1: "ㅈ", c2: "ㅎ", desc: "또렷하고 힘 있는 인상의 이름" },
  { name: "재하", c1: "ㅈ", c2: "ㅎ", desc: "부드럽고 세련된 요즘 느낌의 이름" },
  { name: "주하", c1: "ㅈ", c2: "ㅎ", desc: "짧고 사랑스러운 분위기의 이름" },
  { name: "지호", c1: "ㅈ", c2: "ㅎ", desc: "또렷하고 인기 있는 이름" },
  { name: "준희", c1: "ㅈ", c2: "ㅎ", desc: "부드럽고 세련된 분위기의 이름" },
  { name: "지현", c1: "ㅈ", c2: "ㅎ", desc: "차분하고 익숙한 울림의 이름" },
  { name: "주호", c1: "ㅈ", c2: "ㅎ", desc: "시원하고 또렷한 인상의 이름" },
  { name: "정하", c1: "ㅈ", c2: "ㅎ", desc: "조용하고 단정한 분위기의 이름" },

  { name: "채아", c1: "ㅊ", c2: "ㅇ", desc: "사랑스럽고 밝게 들리는 이름" },
  { name: "찬우", c1: "ㅊ", c2: "ㅇ", desc: "활기차고 힘 있는 인상의 이름" },
  { name: "초아", c1: "ㅊ", c2: "ㅇ", desc: "세련되고 짧은 느낌의 이름" },
  { name: "채윤", c1: "ㅊ", c2: "ㅇ", desc: "부드럽고 단정한 울림의 이름" },
  { name: "치온", c1: "ㅊ", c2: "ㅇ", desc: "드물고 개성 있는 초성 조합의 이름" },
  { name: "채원", c1: "ㅊ", c2: "ㅇ", desc: "부드럽고 단정한 분위기의 이름" },
  { name: "찬아", c1: "ㅊ", c2: "ㅇ", desc: "밝고 또렷한 인상을 주는 이름" },
  { name: "초윤", c1: "ㅊ", c2: "ㅇ", desc: "드물고 세련된 느낌의 이름" },
  { name: "채온", c1: "ㅊ", c2: "ㅇ", desc: "따뜻하고 세련된 울림의 이름" },

  { name: "카이", c1: "ㅋ", c2: "ㅇ", desc: "짧고 글로벌한 감각의 이름" },
  { name: "코아", c1: "ㅋ", c2: "ㅇ", desc: "짧고 개성적인 분위기의 이름" },
  { name: "키온", c1: "ㅋ", c2: "ㅇ", desc: "세련되고 드문 조합의 이름" },
  { name: "카온", c1: "ㅋ", c2: "ㅇ", desc: "요즘 감각이 있는 따뜻한 느낌의 이름" },

  { name: "태윤", c1: "ㅌ", c2: "ㅇ", desc: "또렷하고 세련된 분위기의 이름" },
  { name: "태원", c1: "ㅌ", c2: "ㅇ", desc: "단정하고 힘 있는 인상의 이름" },
  { name: "티아", c1: "ㅌ", c2: "ㅇ", desc: "짧고 글로벌한 느낌의 이름" },
  { name: "태아", c1: "ㅌ", c2: "ㅇ", desc: "밝고 또렷한 분위기의 이름" },
  { name: "토아", c1: "ㅌ", c2: "ㅇ", desc: "짧고 개성 있는 이름" },
  { name: "태우", c1: "ㅌ", c2: "ㅇ", desc: "시원하고 활기찬 분위기의 이름" },
  { name: "태연", c1: "ㅌ", c2: "ㅇ", desc: "차분하고 익숙한 인상의 이름" },
  { name: "토윤", c1: "ㅌ", c2: "ㅇ", desc: "짧고 드문 조합의 세련된 이름" },
  { name: "티온", c1: "ㅌ", c2: "ㅇ", desc: "글로벌한 감각이 느껴지는 이름" },

  { name: "피아", c1: "ㅍ", c2: "ㅇ", desc: "짧고 부드러운 글로벌 감각의 이름" },
  { name: "파온", c1: "ㅍ", c2: "ㅇ", desc: "드물고 세련된 조합의 이름" },
  { name: "푸른", c1: "ㅍ", c2: "ㅇ", desc: "자연스럽고 시원한 인상을 주는 이름" },
  { name: "평온", c1: "ㅍ", c2: "ㅇ", desc: "차분하고 안정적인 느낌이 강한 이름" },
  { name: "파윤", c1: "ㅍ", c2: "ㅇ", desc: "드물고 개성 있는 초성 조합의 이름" },
  { name: "피온", c1: "ㅍ", c2: "ㅇ", desc: "세련되고 글로벌한 분위기의 이름" },
  { name: "푸아", c1: "ㅍ", c2: "ㅇ", desc: "짧고 부드럽게 들리는 이름" },
  { name: "평아", c1: "ㅍ", c2: "ㅇ", desc: "차분하고 단정한 인상의 이름" },

  { name: "하린", c1: "ㅎ", c2: "ㄹ", desc: "맑고 가벼운 분위기의 이름" },
  { name: "해린", c1: "ㅎ", c2: "ㄹ", desc: "부드럽고 감성적인 느낌을 주는 이름" },
  { name: "하람", c1: "ㅎ", c2: "ㄹ", desc: "따뜻하고 순한 인상의 이름" },
  { name: "호람", c1: "ㅎ", c2: "ㄹ", desc: "드물고 개성 있는 울림의 이름" },
  { name: "한라", c1: "ㅎ", c2: "ㄹ", desc: "단정하고 자연스러운 분위기의 이름" },
  { name: "하라", c1: "ㅎ", c2: "ㄹ", desc: "짧고 가벼운 인상을 주는 이름" },
  { name: "혜린", c1: "ㅎ", c2: "ㄹ", desc: "차분하고 감성적인 울림의 이름" },
  { name: "호랑", c1: "ㅎ", c2: "ㄹ", desc: "강하고 개성적인 분위기의 이름" },
  { name: "해람", c1: "ㅎ", c2: "ㄹ", desc: "자연스럽고 부드러운 이름" },

  { name: "하윤", c1: "ㅎ", c2: "ㅇ", desc: "부드럽고 따뜻한 인상을 주는 이름" },
  { name: "현우", c1: "ㅎ", c2: "ㅇ", desc: "안정감 있고 널리 사랑받는 이름" },
  { name: "혜원", c1: "ㅎ", c2: "ㅇ", desc: "차분하고 여성스러운 분위기의 이름" },
  { name: "해온", c1: "ㅎ", c2: "ㅇ", desc: "따뜻함이 다가온다는 느낌의 이름" },
  { name: "희원", c1: "ㅎ", c2: "ㅇ", desc: "부드럽고 세련된 울림이 있는 이름" },
  { name: "하은", c1: "ㅎ", c2: "ㅇ", desc: "부드럽고 따뜻한 분위기의 이름" },
  { name: "현아", c1: "ㅎ", c2: "ㅇ", desc: "또렷하고 밝은 인상을 주는 이름" },
  { name: "현온", c1: "ㅎ", c2: "ㅇ", desc: "차분하고 따뜻한 느낌의 이름" },
  { name: "희아", c1: "ㅎ", c2: "ㅇ", desc: "짧고 세련된 분위기의 이름" },
  { name: "해윤", c1: "ㅎ", c2: "ㅇ", desc: "맑고 부드러운 이미지의 이름" },
  { name: "하온", c1: "ㅎ", c2: "ㅇ", desc: "요즘 감각이 있는 따뜻한 이름" }
];

const firstChosung = document.getElementById("firstChosung");
const secondChosung = document.getElementById("secondChosung");
const chosungBtn = document.getElementById("chosungBtn");
const chosungNameTable = document.getElementById("chosungNameTable");
const emptyBox = document.getElementById("emptyBox");
const resultTableWrap = document.getElementById("resultTableWrap");
const chosungGuideMessage = document.getElementById("chosungGuideMessage");

function setChosungOptions() {
  if (!firstChosung || !secondChosung) return;

  const baseOptions = `<option value="all">전체</option>`;
  const options = CHOSUNG_LIST.map(
    (item) => `<option value="${item}">${item}</option>`
  ).join("");

  firstChosung.innerHTML = baseOptions + options;
  secondChosung.innerHTML = baseOptions + options;
}

function renderChosungNames() {
  if (!chosungNameTable || !emptyBox || !resultTableWrap) return;

  const c1 = firstChosung?.value || "all";
  const c2 = secondChosung?.value || "all";

  const exactMatches = nameData.filter((item) => {
    const c1Ok = c1 === "all" || item.c1 === c1;
    const c2Ok = c2 === "all" || item.c2 === c2;
    return c1Ok && c2Ok;
  });

  let result = [];
  let guideText = "";

  if (c1 !== "all" && c2 !== "all" && exactMatches.length === 0) {
    const firstOnlyMatches = nameData.filter((item) => item.c1 === c1);
    result = firstOnlyMatches;
    guideText = `찾으시는 초성 조합(${c1}${c2})은 아직 없어요. 첫 번째 초성 ${c1} 이(가) 같은 이름들을 대신 보여드릴게요.`;
  } else {
    result = [...exactMatches];

    if (result.length < 20 && c1 !== "all" && c2 !== "all") {
      const relaxedByFirst = nameData.filter((item) => {
        const sameFirst = item.c1 === c1;
        const notIncluded = !result.some((r) => r.name === item.name);
        return sameFirst && notIncluded;
      });

      result = [...result, ...relaxedByFirst];

      if (exactMatches.length > 0) {
        guideText = `정확한 초성 조합(${c1}${c2}) 이름이 많지 않아 첫 번째 초성 ${c1} 이(가) 같은 이름도 함께 보여드려요.`;
      }
    }

    if (result.length < 20) {
      const relaxedMore = nameData.filter((item) => {
        const notIncluded = !result.some((r) => r.name === item.name);
        return notIncluded;
      });

      result = [...result, ...relaxedMore];
    }
  }

  if (result.length === 0) {
    emptyBox.style.display = "block";
    resultTableWrap.style.display = "none";
    if (chosungGuideMessage) chosungGuideMessage.style.display = "none";

    emptyBox.innerHTML = `
      조건에 맞는 이름이 아직 없어요.<br />
      초성을 조금 다르게 선택해보세요.
    `;
    return;
  }

  emptyBox.style.display = "none";
  resultTableWrap.style.display = "block";

  if (chosungGuideMessage) {
    if (guideText) {
      chosungGuideMessage.style.display = "block";
      chosungGuideMessage.textContent = guideText;
    } else {
      chosungGuideMessage.style.display = "none";
      chosungGuideMessage.textContent = "";
    }
  }

  chosungNameTable.innerHTML = result
    .slice(0, 24)
    .map(
      (item) => `
        <tr>
          <td><strong>${item.name}</strong></td>
          <td>${item.c1}${item.c2}</td>
          <td>${item.desc}</td>
        </tr>
      `
    )
    .join("");
}

if (chosungBtn) {
  chosungBtn.addEventListener("click", renderChosungNames);
}

setChosungOptions();
renderChosungNames();