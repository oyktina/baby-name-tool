import { safeArr } from "./utils.js";
import { selectedTags } from "./state.js";

function setHint(msg) {
  const el = document.getElementById("tagHint");
  if (el) el.textContent = msg;
}
function updateHint() {
  const n = selectedTags.size;
  if (n === 0) setHint("선택됨: 0개 (선택하지 않으면 인기/무난 이름 중심)");
  else setHint(`선택됨: ${n}개 → ${[...selectedTags].join(", ")} (최대 2개)`);
}

export function renderTags(tags) {
  const wrap = document.getElementById("tagButtons");
  if (!wrap) return;
  wrap.innerHTML = "";

  safeArr(tags).forEach((tag) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = tag.label;

    btn.onclick = () => {
      if (selectedTags.has(tag.id)) {
        selectedTags.delete(tag.id);
        btn.classList.remove("active");
        updateHint();
        return;
      }
      if (selectedTags.size >= 2) {
        setHint("느낌은 최대 2개까지 선택할 수 있어요.");
        return;
      }
      selectedTags.add(tag.id);
      btn.classList.add("active");
      updateHint();
    };

    wrap.appendChild(btn);
  });

  updateHint();
}

export function keyFor(gender) {
  return [...selectedTags].sort().join("|") + "|" + gender;
}
