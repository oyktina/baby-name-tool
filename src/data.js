import { safeArr } from "./utils.js";

export async function loadData() {
  const url = new URL("../data.json", import.meta.url);
  url.searchParams.set("v", Date.now());

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load data.json (HTTP ${res.status})`);
  return res.json();
}

export function normalizeData(DATA) {
  // blocked
  DATA._blockedSet = new Set(safeArr(DATA.blockedGivenNames));

  // popular ranks
  DATA._popularRank = new Map();
  safeArr(DATA.popularGivenNames?.nationwideTop).forEach((nm, i) => {
    DATA._popularRank.set(nm, i + 1);
  });

  return DATA;
}
