console.log("APP VERSION: FINAL STABLE (modularized)");

import { loadData, normalizeData } from "./data.js";
import { setDATA } from "./state.js";
import { renderTags } from "./tags.js";
import { generateNames } from "./generator.js";
import { renderResult } from "./ui.js";

async function main() {
  try {
    const data = await loadData();
    const normalized = normalizeData(data);
    setDATA(normalized);

    renderTags(normalized.tags);

    const btn = document.getElementById("btn");
    if (btn) {
      btn.onclick = () => {
        const surname = (
          document.getElementById("surname")?.value || ""
        ).trim();
        const gender = (
          document.getElementById("gender")?.value || "any"
        ).trim();

        if (!surname) {
          alert("성을 입력해 주세요. 예: 김");
          return;
        }

        const items = generateNames(surname, gender);
        renderResult(items);
      };
    }
  } catch (e) {
    console.error(e);
    alert(
      "데이터 로딩 중 오류가 발생했습니다.\n" +
        (e && e.message ? e.message : String(e)) +
        "\n\n(1) data.json이 같은 폴더에 있는지\n(2) data.json에 // 주석이 없는지\n(3) GitHub Pages 캐시라면 새로고침(Ctrl+Shift+R) 해보세요.",
    );
  }
}

main();
