const globalNameData = [
  { name: "이안", roman: "Ian", feeling: "easy", desc: "짧고 또렷해서 해외에서도 부르기 쉬운 이름" },
  { name: "지안", roman: "Ji-an", feeling: "easy", desc: "한국 이름다움이 있으면서도 발음이 비교적 쉬운 이름" },
  { name: "서아", roman: "Seo-a", feeling: "soft", desc: "부드럽고 여성스러운 인상을 주는 이름" },
  { name: "하린", roman: "Ha-rin", feeling: "soft", desc: "발음이 유연하고 밝은 느낌이 있는 이름" },
  { name: "태오", roman: "Tae-o", feeling: "modern", desc: "또렷하고 세련된 분위기를 주는 이름" },
  { name: "시우", roman: "Si-woo", feeling: "easy", desc: "짧고 기억하기 쉬운 구조의 이름" },
  { name: "지우", roman: "Ji-woo", feeling: "neutral", desc: "남녀 모두 자연스럽게 느껴질 수 있는 이름" },
  { name: "하윤", roman: "Ha-yun", feeling: "soft", desc: "부드럽고 따뜻한 분위기의 이름" },
  { name: "연우", roman: "Yeon-woo", feeling: "neutral", desc: "차분하고 여유 있는 느낌의 이름" },
  { name: "은우", roman: "Eun-woo", feeling: "soft", desc: "부드럽고 안정적인 인상을 주는 이름" },
  { name: "도하", roman: "Do-ha", feeling: "modern", desc: "짧고 세련된 울림이 있는 이름" },
  { name: "이서", roman: "I-seo", feeling: "soft", desc: "간결하면서도 한국적인 느낌을 유지하는 이름" },
  { name: "서윤", roman: "Seo-yun", feeling: "soft", desc: "익숙하고 편안한 분위기의 이름" },
  { name: "도윤", roman: "Do-yun", feeling: "easy", desc: "발음이 안정적이고 기억하기 쉬운 이름" },
  { name: "하준", roman: "Ha-jun", feeling: "modern", desc: "짧고 남아 이름으로도 글로벌 감각이 있는 이름" },
  { name: "이준", roman: "I-jun", feeling: "easy", desc: "간결하고 발음 전달이 쉬운 이름" },
  { name: "선우", roman: "Seon-woo", feeling: "neutral", desc: "부드럽고 중성적인 분위기를 가진 이름" },
  { name: "서준", roman: "Seo-jun", feeling: "modern", desc: "세련되고 또렷한 구조의 이름" },
  { name: "현우", roman: "Hyeon-woo", feeling: "neutral", desc: "차분하고 안정감 있는 인상을 주는 이름" },
  { name: "유안", roman: "Yu-an", feeling: "easy", desc: "짧고 글로벌 환경에서도 비교적 자연스러운 이름" },
  { name: "로나", roman: "Rona", feeling: "global", desc: "짧고 이국적인 울림이 있는 이름" },
  { name: "제니", roman: "Jenny", feeling: "global", desc: "해외에서도 익숙하게 들리는 이름" },
  { name: "로아", roman: "Roa", feeling: "modern", desc: "짧고 세련된 느낌의 이름" },
  { name: "리아", roman: "Ria", feeling: "global", desc: "부드럽고 국제적인 느낌이 있는 이름" },
  { name: "라라", roman: "Lara", feeling: "global", desc: "발음이 쉽고 이국적인 느낌의 이름" },
  { name: "리아나", roman: "Riana", feeling: "global", desc: "세련되고 부드러운 울림이 있는 이름" },
  { name: "로렌", roman: "Lauren", feeling: "global", desc: "해외에서 자연스럽게 사용되는 이름" },
  { name: "린", roman: "Lynn", feeling: "neutral", desc: "짧고 중성적인 느낌의 이름" },
  { name: "리안", roman: "Rian", feeling: "neutral", desc: "남녀 모두 어울리는 중성적 이름" },
  { name: "리온", roman: "Leon", feeling: "modern", desc: "강하면서도 세련된 인상의 이름" },
  { name: "엘라", roman: "Ella", feeling: "global", desc: "부드럽고 밝은 느낌이 있는 이름" },
  { name: "에라", roman: "Era", feeling: "modern", desc: "짧고 세련된 인상의 이름" },
  { name: "아린", roman: "Arin", feeling: "neutral", desc: "부드럽고 중성적인 이름" },
  { name: "아론", roman: "Aaron", feeling: "global", desc: "국제적으로 익숙한 이름" },
  { name: "노아", roman: "Noa", feeling: "neutral", desc: "짧고 세계적으로 쓰이는 이름" },
  { name: "니아", roman: "Nia", feeling: "global", desc: "짧고 부드러운 느낌의 이름" },
  { name: "나엘", roman: "Nael", feeling: "modern", desc: "이국적인 분위기의 이름" },
  { name: "네오", roman: "Neo", feeling: "modern", desc: "미래적이고 독특한 느낌의 이름" },
  { name: "루나", roman: "Luna", feeling: "global", desc: "세계적으로 인기 있는 이름" },
  { name: "루카", roman: "Luca", feeling: "global", desc: "유럽권에서 많이 사용되는 이름" },

  { name: "리아나", roman: "Riana", feeling: "global", desc: "부드럽고 이국적인 울림의 이름" },
  { name: "리아", roman: "Ria", feeling: "global", desc: "간결하고 세련된 느낌" },
  { name: "리엘", roman: "Riel", feeling: "modern", desc: "독특하고 세련된 인상의 이름" },
  { name: "리아나", roman: "Riana", feeling: "global", desc: "해외에서도 자연스럽게 들리는 이름" },
  { name: "리오", roman: "Rio", feeling: "neutral", desc: "짧고 중성적인 이름" },
  { name: "로이", roman: "Roy", feeling: "global", desc: "해외에서 익숙한 이름" },
  { name: "로안", roman: "Roan", feeling: "modern", desc: "세련된 글로벌 느낌의 이름" },
  { name: "로건", roman: "Logan", feeling: "neutral", desc: "중성적으로 쓰이는 글로벌 이름" },
  { name: "로엘", roman: "Roel", feeling: "modern", desc: "이국적인 울림이 있는 이름" },
  { name: "로빈", roman: "Robin", feeling: "neutral", desc: "남녀 모두 사용하는 이름" },

  { name: "엘리", roman: "Eli", feeling: "neutral", desc: "짧고 중성적인 글로벌 이름" },
  { name: "엘라", roman: "Ella", feeling: "global", desc: "부드럽고 여성스러운 이름" },
  { name: "엘린", roman: "Elin", feeling: "soft", desc: "차분하고 부드러운 이름" },
  { name: "엘로이", roman: "Eloi", feeling: "modern", desc: "독특하고 세련된 울림의 이름" },
  { name: "엘라나", roman: "Elana", feeling: "global", desc: "이국적인 분위기의 이름" },

  { name: "제이", roman: "Jay", feeling: "neutral", desc: "짧고 중성적인 이름" },
  { name: "제이드", roman: "Jade", feeling: "neutral", desc: "세련되고 중성적인 이름" },
  { name: "제나", roman: "Jena", feeling: "global", desc: "밝고 가벼운 느낌의 이름" },
  { name: "제노", roman: "Xeno", feeling: "modern", desc: "독특하고 미래적인 이름" },
  { name: "제아", roman: "Zea", feeling: "modern", desc: "짧고 이국적인 이름" },

  { name: "카이", roman: "Kai", feeling: "neutral", desc: "세계적으로 사용되는 중성적 이름" },
  { name: "케이", roman: "Kay", feeling: "neutral", desc: "짧고 부르기 쉬운 이름" },
  { name: "케빈", roman: "Kevin", feeling: "global", desc: "익숙한 글로벌 이름" },
  { name: "케일", roman: "Kale", feeling: "modern", desc: "독특하면서 세련된 이름" },

  { name: "미아", roman: "Mia", feeling: "global", desc: "세계적으로 인기 있는 이름" },
  { name: "마야", roman: "Maya", feeling: "global", desc: "부드럽고 국제적인 느낌의 이름" },
  { name: "마린", roman: "Marin", feeling: "neutral", desc: "중성적인 울림의 이름" },
  { name: "마엘", roman: "Mael", feeling: "modern", desc: "이국적이고 세련된 이름" },

  { name: "사라", roman: "Sara", feeling: "global", desc: "전 세계적으로 사용되는 이름" },
  { name: "세라", roman: "Sera", feeling: "soft", desc: "부드럽고 차분한 이름" },
  { name: "세린", roman: "Serin", feeling: "soft", desc: "부드럽고 세련된 이름" },

  { name: "다니", roman: "Dani", feeling: "neutral", desc: "남녀 모두 사용하는 이름" },
  { name: "다엘", roman: "Dael", feeling: "modern", desc: "독특하고 세련된 느낌" },
  { name: "다린", roman: "Darin", feeling: "modern", desc: "세련되고 이국적인 이름" }
];

const globalTable = document.getElementById("globalNameTable");
const globalFeeling = document.getElementById("globalFeeling");

const globalFeelingLabelMap = {
  easy: "부르기 쉬운",
  soft: "부드러운",
  modern: "세련된",
  neutral: "중성적인"
};

function renderGlobalTable() {
  if (!globalTable || !globalFeeling) return;

  const selected = globalFeeling.value;

  const filtered =
    selected === "all"
      ? globalNameData
      : globalNameData.filter((item) => item.feeling === selected);

  globalTable.innerHTML = filtered
    .map(
      (item) => `
        <tr>
          <td><strong>${item.name}</strong></td>
          <td>${item.roman}</td>
          <td><span class="name-chip">${globalFeelingLabelMap[item.feeling] || item.feeling}</span></td>
          <td>${item.desc}</td>
        </tr>
      `
    )
    .join("");
}

if (globalFeeling) {
  globalFeeling.addEventListener("change", renderGlobalTable);
}

renderGlobalTable();