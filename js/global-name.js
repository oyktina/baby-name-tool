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
  { name: "유안", roman: "Yu-an", feeling: "easy", desc: "짧고 글로벌 환경에서도 비교적 자연스러운 이름" }
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