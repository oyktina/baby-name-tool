export let DATA = null;
export function setDATA(x) {
  DATA = x;
}

export const selectedTags = new Set();
export const recentByKey = new Map(); // prevent same names repeating too much per tag combo
