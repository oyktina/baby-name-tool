import { uniq, pickOne } from "./utils.js";
import { DATA } from "./state.js";

const CHAR_TAGS = {
  하: ["bright", "soft"],
  예: ["bright"],
  봄: ["bright", "poetic"],
  별: ["bright", "poetic"],
  빛: ["bright"],
  아: ["bright", "soft"],
  오: ["bright"],
  윤: ["warm"],
  온: ["warm"],
  우: ["warm", "bright"],
  솔: ["warm", "calm"],
  나: ["warm", "soft"],
  담: ["warm", "poetic"],
  서: ["soft", "calm"],
  은: ["soft", "calm"],
  린: ["soft"],
  리: ["soft"],
  희: ["poetic", "calm"],
  혜: ["soft", "calm"],
  연: ["poetic", "calm"],
  해: ["poetic", "calm"],
  준: ["solid"],
  건: ["solid"],
  성: ["solid"],
  호: ["solid"],
  현: ["calm", "solid"],
  진: ["calm", "solid"],
  태: ["solid"],
  찬: ["solid"],
};

export function inferTagsFromName(given) {
  const tags = [];
  for (const ch of given) {
    if (CHAR_TAGS[ch]) tags.push(...CHAR_TAGS[ch]);
  }
  return uniq(tags);
}

function popularBonus(rank) {
  if (!rank) return 0;
  const bucket = Math.floor((rank - 1) / 2);
  return Math.max(2, 10 - bucket);
}

export function scoreName(given, userTags, popRankMap) {
  const tags = inferTagsFromName(given);
  let score = 0;

  if (userTags[0] && tags.includes(userTags[0])) score += 6;
  if (userTags[1] && tags.includes(userTags[1])) score += 3;

  if (userTags.length === 0) {
    if (tags.includes("soft") || tags.includes("calm")) score += 1;
  }

  const rank = popRankMap.get(given);
  score += popularBonus(rank);

  if (tags.includes("soft") || tags.includes("calm")) score += 1;

  return { score, tags, rank };
}

export function chooseEnglishName(tags) {
  const dict = DATA?.englishByTag || {};
  const tag = tags.find((t) => dict[t]);
  if (!tag) return "Eden";
  return pickOne(dict[tag]);
}

export function commentLine(tags, rank) {
  if (rank) return `요즘 많이 쓰이는 이름 (전국 상위 ${rank}위권)`;
  if (tags.includes("bright")) return "밝고 또렷한 인상";
  if (tags.includes("warm")) return "다정하고 온화한 인상";
  if (tags.includes("poetic")) return "차분하고 감성적인 인상";
  return "부르는 소리가 편안한 인상";
}
