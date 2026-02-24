export function pickOne(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
export function uniq(arr) {
  return [...new Set(arr)];
}
export function safeArr(x) {
  return Array.isArray(x) ? x : [];
}
