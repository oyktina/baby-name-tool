import { safeArr, uniq } from "./utils.js";
import { DATA, selectedTags, recentByKey } from "./state.js";
import { keyFor } from "./tags.js";
import { scoreName, chooseEnglishName, commentLine } from "./scoring.js";
import { romanizeGiven } from "./romanize.js";

function getPool(gender) {
  if (gender === "female") return safeArr(DATA.femaleGivenNames);
  if (gender === "male") return safeArr(DATA.maleGivenNames);
  return uniq([
    ...safeArr(DATA.femaleGivenNames),
    ...safeArr(DATA.maleGivenNames),
  ]);
}

export function generateNames(surname, gender) {
  const userTags = [...selectedTags];
  const blocked = DATA._blockedSet;
  const popRankMap = DATA._popularRank;

  const pool = getPool(gender)
    .map((g) => (g || "").trim())
    .filter(Boolean);

  const k = keyFor(gender);
  if (!recentByKey.has(k)) recentByKey.set(k, new Set());
  const recent = recentByKey.get(k);

  const candidates = [];

  for (const given of pool) {
    if (blocked.has(given)) continue;

    if (surname[surname.length - 1] === given[0]) continue;

    const { score, tags, rank } = scoreName(given, userTags, popRankMap);
    const finalScore = score + (recent.has(given) ? -3 : 0);

    candidates.push({
      surname,
      given,
      full: surname + given,
      score: finalScore,
      tags,
      rank,
      roman: romanizeGiven(given),
      englishName: chooseEnglishName(tags),
      comment: commentLine(tags, rank),
    });
  }

  candidates.sort((a, b) => b.score - a.score);

  const RESULT_COUNT = 10;
  const top = candidates.slice(0, 140);
  const result = [];
  const used = new Set();

  while (result.length < RESULT_COUNT && top.length > 0) {
    const idx = Math.floor(Math.random() * top.length);
    const it = top.splice(idx, 1)[0];
    if (used.has(it.given)) continue;
    used.add(it.given);
    result.push(it);
  }

  result.forEach((r) => recent.add(r.given));
  if (recent.size > 80) {
    [...recent].slice(0, 30).forEach((x) => recent.delete(x));
  }

  return result;
}
