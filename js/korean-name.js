const koreanNameData = [
  { name: "가람", feeling: "nature", meaning: "강" },
  { name: "나래", feeling: "bright", meaning: "날개" },
  { name: "누리", feeling: "warm", meaning: "세상" },
  { name: "다온", feeling: "warm", meaning: "좋은 일이 다 온다" },
  { name: "라온", feeling: "bright", meaning: "즐거운" },
  { name: "마루", feeling: "calm", meaning: "하늘, 꼭대기" },
  { name: "다솜", feeling: "warm", meaning: "사랑" },
  { name: "아라", feeling: "nature", meaning: "바다" },
  { name: "아람", feeling: "nature", meaning: "탐스러운 열매" },
  { name: "하람", feeling: "calm", meaning: "하늘이 내린" },
  { name: "하늬", feeling: "nature", meaning: "서쪽에서 부는 바람" },
  { name: "한울", feeling: "nature", meaning: "큰 하늘" },
  { name: "보람", feeling: "warm", meaning: "기쁨의 보람" },
  { name: "새롬", feeling: "bright", meaning: "새롭고 맑은 느낌" },
  { name: "한결", feeling: "calm", meaning: "한결같음" },
  { name: "이든", feeling: "calm", meaning: "착하고 어진" },
  { name: "여울", feeling: "nature", meaning: "물이 얕게 흐르는 곳" },
  { name: "노을", feeling: "nature", meaning: "해질 무렵 하늘빛" },
  { name: "새봄", feeling: "bright", meaning: "새로운 봄" },
  { name: "윤슬", feeling: "bright", meaning: "햇빛이나 달빛에 비쳐 반짝이는 잔물결" },

  { name: "가온", feeling: "calm", meaning: "가운데, 중심" },
  { name: "겨울", feeling: "calm", meaning: "겨울" },
  { name: "고운", feeling: "warm", meaning: "곱고 어여쁨" },
  { name: "나린", feeling: "nature", meaning: "내리는" },
  { name: "늘봄", feeling: "bright", meaning: "늘 봄처럼" },
  { name: "다린", feeling: "warm", meaning: "사랑스러운 느낌의 이름" },
  { name: "다슬", feeling: "calm", meaning: "슬기롭고 맑은 느낌" },
  { name: "다해", feeling: "warm", meaning: "모두 다, 다하도록" },
  { name: "들봄", feeling: "nature", meaning: "들판의 봄" },
  { name: "루다", feeling: "calm", meaning: "부드러운 울림의 이름" },
  { name: "마음", feeling: "warm", meaning: "마음" },
  { name: "모아", feeling: "calm", meaning: "모으다, 함께" },
  { name: "별하", feeling: "bright", meaning: "별처럼 빛남" },
  { name: "보라", feeling: "bright", meaning: "보랏빛의 느낌" },
  { name: "사랑", feeling: "warm", meaning: "사랑" },
  { name: "소리", feeling: "calm", meaning: "맑은 울림" },
  { name: "아리", feeling: "bright", meaning: "곱고 예쁜 느낌" },
  { name: "온새미", feeling: "warm", meaning: "가르지 않고 전부" },
  { name: "온빛", feeling: "bright", meaning: "온전한 빛" },
  { name: "이룸", feeling: "warm", meaning: "이루다" },

  { name: "자람", feeling: "warm", meaning: "자라남" },
  { name: "푸름", feeling: "nature", meaning: "푸른 빛" },
  { name: "한빛", feeling: "bright", meaning: "큰 빛" },
  { name: "나빛", feeling: "bright", meaning: "나의 빛" },
  { name: "다별", feeling: "bright", meaning: "많은 별" },
  { name: "루리", feeling: "calm", meaning: "맑고 푸른 느낌" },
  { name: "보듬", feeling: "warm", meaning: "따뜻하게 안다" },
  { name: "새빛", feeling: "bright", meaning: "새로운 빛" },
  { name: "아림", feeling: "warm", meaning: "아름다운 울림" },
  { name: "하랑", feeling: "nature", meaning: "함께 높이 날다" },
  { name: "가린", feeling: "nature", meaning: "곱고 맑은 느낌" },
  { name: "강나", feeling: "nature", meaning: "강처럼 흐르는 느낌" },
  { name: "나봄", feeling: "bright", meaning: "봄처럼 밝은 느낌" },
  { name: "라별", feeling: "bright", meaning: "별처럼 빛남" },
  { name: "바론", feeling: "nature", meaning: "바람 같은 느낌" },
  { name: "비나", feeling: "nature", meaning: "비처럼 맑음" },
  { name: "새결", feeling: "bright", meaning: "새로운 결" },
  { name: "온나", feeling: "warm", meaning: "온화한 느낌" },
  { name: "하늘", feeling: "nature", meaning: "하늘" },
  { name: "다온빛", feeling: "bright", meaning: "좋은 빛이 다 옴" },

  { name: "누리봄", feeling: "bright", meaning: "세상에 봄이 오는 느낌" },
  { name: "가을", feeling: "nature", meaning: "가을" },
  { name: "새나", feeling: "nature", meaning: "새처럼 자유로운 느낌" },
  { name: "슬아", feeling: "calm", meaning: "슬기로움" },
  { name: "한나", feeling: "warm", meaning: "하나뿐인 소중함" },
  { name: "해나", feeling: "bright", meaning: "해처럼 밝은 아이" },
  { name: "은새", feeling: "bright", meaning: "빛나는 새" },
  { name: "이레", feeling: "calm", meaning: "7일, 바른 주기" },
  { name: "드림", feeling: "bright", meaning: "꿈" },
  { name: "미르", feeling: "nature", meaning: "용" },
  { name: "바다", feeling: "nature", meaning: "바다" },
  { name: "보미", feeling: "warm", meaning: "봄 같은 따뜻함" },
  { name: "예나", feeling: "warm", meaning: "곱고 단정한 느낌" },
  { name: "온새", feeling: "warm", meaning: "온전한 새로움" },
  { name: "우람", feeling: "nature", meaning: "크고 씩씩함" },
  { name: "지음", feeling: "warm", meaning: "뜻을 짓다" },
  { name: "보늬", feeling: "nature", meaning: "밤송이 속 알맹이의 껍질" },
  { name: "새론", feeling: "bright", meaning: "새로운" },
  { name: "하늬라", feeling: "nature", meaning: "바람 같은 맑은 느낌" },
  { name: "이음", feeling: "calm", meaning: "이어줌" },

  { name: "한별", feeling: "bright", meaning: "큰 별" },
  { name: "솔빛", feeling: "nature", meaning: "소나무와 빛" },
  { name: "달래", feeling: "warm", meaning: "다독이고 위로함" },
  { name: "해담", feeling: "warm", meaning: "햇살 같은 따뜻함" },
  { name: "나봄이", feeling: "bright", meaning: "봄처럼 다가오는 아이" },
  { name: "물결", feeling: "nature", meaning: "물결" },
  { name: "별온", feeling: "bright", meaning: "별처럼 온화함" },
  { name: "다해봄", feeling: "bright", meaning: "봄처럼 환한 마음" },
  { name: "하라", feeling: "calm", meaning: "맑고 단정한 울림" },
  { name: "새음", feeling: "calm", meaning: "새로운 울림" },
  { name: "다빛", feeling: "bright", meaning: "많은 빛" },
  { name: "한솔", feeling: "nature", meaning: "큰 소나무" },
  { name: "다미", feeling: "warm", meaning: "아름답고 따뜻한 느낌" },
  { name: "나예", feeling: "bright", meaning: "예쁘고 밝은 느낌" },
  { name: "하온", feeling: "warm", meaning: "따뜻하고 밝은 느낌" },
  { name: "서린", feeling: "calm", meaning: "맑게 서린 느낌" },
  { name: "다린빛", feeling: "bright", meaning: "사랑스러운 빛" },
  { name: "해울", feeling: "nature", meaning: "해가 비추는 울타리 같은 느낌" },
  { name: "가온빛", feeling: "bright", meaning: "중심을 밝히는 빛" },
  { name: "바림", feeling: "calm", meaning: "바르고 단정한 느낌" }
];

const tbody = document.getElementById("koreanNameTable");
const feelingSelect = document.getElementById("koreanFeeling");

const feelingLabelMap = {
  nature: "자연",
  bright: "밝은",
  warm: "따뜻한",
  calm: "차분한"
};

function renderKoreanTable() {
  const selected = feelingSelect.value;

  const filtered =
    selected === "all"
      ? koreanNameData
      : koreanNameData.filter((item) => item.feeling === selected);

  tbody.innerHTML = filtered
    .slice(0, 100)
    .map(
      (item) => `
        <tr>
          <td><strong>${item.name}</strong></td>
          <td><span class="name-chip">${feelingLabelMap[item.feeling] || item.feeling}</span></td>
          <td>${item.meaning}</td>
        </tr>
      `
    )
    .join("");
}

feelingSelect.addEventListener("change", renderKoreanTable);
renderKoreanTable();