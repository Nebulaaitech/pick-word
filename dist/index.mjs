// src/index.ts
function pickWord(words, { trim = true, dropEmpty = true } = {}) {
  const pool = (trim ? words.map((w) => w.trim()) : words).filter(
    (w) => dropEmpty ? w.length > 0 : true
  );
  if (pool.length === 0) throw new Error("No words available to pick");
  return pool[Math.floor(Math.random() * pool.length)];
}
export {
  pickWord
};
