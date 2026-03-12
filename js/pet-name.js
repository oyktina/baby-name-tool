const petNameData = [
  { name: "콩이", feeling: "cute", desc: "작고 귀여운 느낌" },
  { name: "두부", feeling: "cute", desc: "하얗고 말랑한 느낌" },
  { name: "보리", feeling: "cute", desc: "정겹고 부드러운 느낌" },
  { name: "초코", feeling: "cute", desc: "달콤한 느낌" },
  { name: "쿠키", feeling: "cute", desc: "작고 사랑스러운 느낌" },
  { name: "모찌", feeling: "cute", desc: "말랑말랑한 느낌" },
  { name: "토리", feeling: "cute", desc: "부르기 쉽고 귀여운 느낌" },
  { name: "까미", feeling: "cute", desc: "친근하고 귀여운 느낌" },
  { name: "몽이", feeling: "cute", desc: "몽글몽글한 느낌" },
  { name: "나비", feeling: "cute", desc: "가볍고 사랑스러운 느낌" },
  { name: "루루", feeling: "cute", desc: "부드럽고 귀여운 느낌" },
  { name: "코코", feeling: "cute", desc: "발랄하고 친근한 느낌" },
  { name: "젤리", feeling: "cute", desc: "통통하고 말랑한 느낌" },
  { name: "복실", feeling: "cute", desc: "털이 풍성한 아이에게 잘 어울림" },
  { name: "퍼피", feeling: "cute", desc: "작고 귀여운 느낌" },
  { name: "밤이", feeling: "cute", desc: "동그랗고 사랑스러운 느낌" },
  { name: "뽀송", feeling: "cute", desc: "깨끗하고 포근한 느낌" },
  { name: "미미", feeling: "cute", desc: "작고 예쁜 느낌" },
  { name: "구름", feeling: "cute", desc: "몽실몽실한 느낌" },
  { name: "쪼꼬", feeling: "cute", desc: "앙증맞은 느낌" },
  { name: "치즈", feeling: "cute", desc: "노랗고 귀여운 느낌" },
  { name: "만두", feeling: "cute", desc: "통통하고 귀여운 느낌" },
  { name: "호두", feeling: "cute", desc: "작고 동그란 느낌" },
  { name: "뭉치", feeling: "cute", desc: "뭉글뭉글한 느낌" },
  { name: "뭉실", feeling: "cute", desc: "포근한 느낌" },

  { name: "탄이", feeling: "active", desc: "빠르고 씩씩한 느낌" },
  { name: "번개", feeling: "active", desc: "재빠른 느낌" },
  { name: "점프", feeling: "active", desc: "활동적인 느낌" },
  { name: "달리", feeling: "active", desc: "잘 뛰는 아이에게 어울림" },
  { name: "바람", feeling: "active", desc: "가볍고 빠른 느낌" },
  { name: "스피드", feeling: "active", desc: "에너지 넘치는 느낌" },
  { name: "로켓", feeling: "active", desc: "쏜살같은 느낌" },
  { name: "치타", feeling: "active", desc: "재빠른 느낌" },
  { name: "파워", feeling: "active", desc: "힘찬 느낌" },
  { name: "펀치", feeling: "active", desc: "통통 튀는 느낌" },
  { name: "쪼르", feeling: "active", desc: "쫑쫑 뛰는 느낌" },
  { name: "타요", feeling: "active", desc: "빠르게 움직이는 느낌" },
  { name: "마하", feeling: "active", desc: "스피디한 느낌" },
  { name: "슝이", feeling: "active", desc: "슝 하고 뛰는 느낌" },
  { name: "챔프", feeling: "active", desc: "에너지가 많은 느낌" },
  { name: "킥스", feeling: "active", desc: "역동적인 느낌" },
  { name: "돌진", feeling: "active", desc: "거침없는 느낌" },
  { name: "점박", feeling: "active", desc: "활달한 느낌" },
  { name: "질주", feeling: "active", desc: "빠르게 달리는 느낌" },
  { name: "런이", feeling: "active", desc: "잘 뛰는 느낌" },
  { name: "윙크", feeling: "active", desc: "재치 있는 느낌" },
  { name: "타탄", feeling: "active", desc: "리듬감 있는 느낌" },
  { name: "스톰", feeling: "active", desc: "강한 에너지의 느낌" },
  { name: "볼트", feeling: "active", desc: "번개처럼 빠른 느낌" },
  { name: "트랙", feeling: "active", desc: "달리기 좋아하는 느낌" },

  { name: "루이", feeling: "luxury", desc: "세련되고 부드러운 느낌" },
  { name: "벨라", feeling: "luxury", desc: "우아하고 사랑스러운 느낌" },
  { name: "레오", feeling: "luxury", desc: "고급스럽고 당당한 느낌" },
  { name: "엘르", feeling: "luxury", desc: "도회적이고 세련된 느낌" },
  { name: "샤샤", feeling: "luxury", desc: "고급스럽고 부드러운 느낌" },
  { name: "미엘", feeling: "luxury", desc: "은은하고 고급스러운 느낌" },
  { name: "로랑", feeling: "luxury", desc: "품위 있는 느낌" },
  { name: "비비", feeling: "luxury", desc: "작고 세련된 느낌" },
  { name: "체리", feeling: "luxury", desc: "귀엽지만 세련된 느낌" },
  { name: "오스카", feeling: "luxury", desc: "당당하고 멋진 느낌" },
  { name: "클로이", feeling: "luxury", desc: "트렌디하고 우아한 느낌" },
  { name: "리아", feeling: "luxury", desc: "부드럽고 고급스러운 느낌" },
  { name: "에르", feeling: "luxury", desc: "희소성 있는 느낌" },
  { name: "마일로", feeling: "luxury", desc: "세련된 해외 이름 느낌" },
  { name: "라라", feeling: "luxury", desc: "감각적이고 밝은 느낌" },
  { name: "로아", feeling: "luxury", desc: "부드럽고 세련된 느낌" },
  { name: "셀린", feeling: "luxury", desc: "고급 브랜드 같은 느낌" },
  { name: "티파", feeling: "luxury", desc: "세련된 느낌" },
  { name: "듀크", feeling: "luxury", desc: "기품 있는 느낌" },
  { name: "퀸", feeling: "luxury", desc: "우아하고 존재감 있는 느낌" },
  { name: "루카", feeling: "luxury", desc: "세련된 해외 이름 느낌" },
  { name: "아델", feeling: "luxury", desc: "부드럽고 품위 있는 느낌" },
  { name: "로이", feeling: "luxury", desc: "도회적이고 깔끔한 느낌" },
  { name: "베일리", feeling: "luxury", desc: "우아하고 부드러운 느낌" },
  { name: "엘리", feeling: "luxury", desc: "고급스럽고 사랑스러운 느낌" },

  { name: "감자", feeling: "unique", desc: "엉뚱하고 귀여운 느낌" },
  { name: "두둥", feeling: "unique", desc: "기억에 남는 재미있는 느낌" },
  { name: "마카롱", feeling: "unique", desc: "달콤하고 개성 있는 느낌" },
  { name: "찰떡", feeling: "unique", desc: "찰떡같이 잘 어울리는 느낌" },
  { name: "와플", feeling: "unique", desc: "귀엽고 독특한 느낌" },
  { name: "오징어", feeling: "unique", desc: "웃기고 기억에 남는 느낌" },
  { name: "찐빵", feeling: "unique", desc: "말랑하고 통통한 느낌" },
  { name: "후추", feeling: "unique", desc: "작지만 강한 느낌" },
  { name: "치즈볼", feeling: "unique", desc: "동글동글한 느낌" },
  { name: "말랑", feeling: "unique", desc: "부드럽고 귀여운 느낌" },
  { name: "호떡", feeling: "unique", desc: "통통하고 귀여운 느낌" },
  { name: "도넛", feeling: "unique", desc: "달콤하고 통통한 느낌" },
  { name: "버터", feeling: "unique", desc: "부드럽고 노란 느낌" },
  { name: "구슬", feeling: "unique", desc: "작고 반짝이는 느낌" },
  { name: "낑깡", feeling: "unique", desc: "엉뚱하고 귀여운 느낌" },
  { name: "젓가락", feeling: "unique", desc: "기억에 남는 장난스러운 느낌" },
  { name: "쪼리", feeling: "unique", desc: "톡톡 튀는 느낌" },
  { name: "감동", feeling: "unique", desc: "독특하고 유쾌한 느낌" },
  { name: "떡볶이", feeling: "unique", desc: "강렬하고 재미있는 느낌" },
  { name: "국수", feeling: "unique", desc: "길쭉한 아이에게 어울리는 느낌" },
  { name: "복숭", feeling: "unique", desc: "복숭아처럼 말랑한 느낌" },
  { name: "만쥬", feeling: "unique", desc: "폭신한 느낌" },
  { name: "탕후루", feeling: "unique", desc: "통통 튀는 느낌" },
  { name: "치킨", feeling: "unique", desc: "유쾌하고 강한 인상" },
  { name: "토핑", feeling: "unique", desc: "장난스럽고 귀여운 느낌" }
];

const petTable = document.getElementById("petNameTable");
const petFeeling = document.getElementById("petFeeling");

const petFeelingLabelMap = {
  cute: "귀여운",
  active: "활발한",
  luxury: "고급스러운",
  unique: "독특한"
};

function renderPetTable() {
  const selected = petFeeling.value;

  const filtered =
    selected === "all"
      ? petNameData
      : petNameData.filter((item) => item.feeling === selected);

  petTable.innerHTML = filtered
    .slice(0, 100)
    .map(
      (item) => `
        <tr>
          <td><strong>${item.name}</strong></td>
          <td><span class="name-chip">${petFeelingLabelMap[item.feeling] || item.feeling}</span></td>
          <td>${item.desc}</td>
        </tr>
      `
    )
    .join("");
}

petFeeling.addEventListener("change", renderPetTable);
renderPetTable();