import { loadData, normalizeData } from "./data.js";
import { romanizeGiven } from "./romanize.js";
import { inferTagsFromName, commentLine } from "./scoring.js";

function qs() {
  const p = new URLSearchParams(location.search);
  return {
    name: (p.get("name") || "").trim(),
    surname: (p.get("surname") || "").trim(),
    gender: (p.get("gender") || "").trim(),
  };
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function renderPills(tags) {
  const wrap = document.getElementById("tagPills");
  if (!wrap) return;
  wrap.innerHTML = "";
  if (!tags || tags.length === 0) {
    wrap.textContent = "추정 태그 없음";
    return;
  }
  tags.forEach((t) => {
    const span = document.createElement("span");
    span.className = "pill";
    span.textContent = t;
    wrap.appendChild(span);
  });
}

function findGivenInData(DATA, given) {
  // 현재 data.json 구조는 "배열(이름 문자열)"이므로, 포함 여부만 확인
  const all = new Set([
    ...(DATA.femaleGivenNames || []),
    ...(DATA.maleGivenNames || []),
  ]);
  return all.has(given);
}

async function main() {
  const { name, surname } = qs();

  if (!name) {
    setText(
      "summaryCard",
      "이름 정보가 없습니다. 추천 결과에서 다시 선택해 주세요.",
    );
    return;
  }

  setText("nameTitle", surname ? `${surname}${name}` : name);
  setText("subTitle", "아이 이름 상세 (현재는 ‘느낌 기반’ 정보 중심)");

  // 데이터 로드 (있으면 존재 여부 확인 정도)
  let exists = false;
  try {
    const data = normalizeData(await loadData());
    exists = findGivenInData(data, name);
  } catch (e) {
    // data.json 로딩 실패해도 상세 페이지는 최소 정보로 보여주기
    console.warn(e);
  }

  const tags = inferTagsFromName(name);
  const roman = romanizeGiven(name);
  const comment = commentLine(tags, null);

  const summary = [
    `• 로마자: ${roman}`,
    `• 코멘트: ${comment}`,
    `• 데이터 포함 여부: ${exists ? "포함됨" : "확인 불가/미포함"}`,
  ].join("\n");

  setText("summaryCard", summary);
  renderPills(tags);

  // 공유 텍스트/링크
  const share = `${surname ? surname + name : name} — ${comment}\n${location.href}`;
  setText("shareText", share);

  const copyBtn = document.getElementById("copyLink");
  if (copyBtn) {
    copyBtn.onclick = async (e) => {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(location.href);
        alert("링크를 복사했어요.");
      } catch {
        alert("복사에 실패했어요. 주소창에서 직접 복사해 주세요.");
      }
    };
  }
}

main();
