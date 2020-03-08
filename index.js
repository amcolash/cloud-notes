const keyword = require('keyword-extractor');
const text = require('./text');
const common = keyword.getStopwords();

const keywords = keyword.extract(text, { return_chained_words: true, remove_duplicates: true });
console.log(keywords.length);

const count = {};
const words = text.replace(/[\.!?,\(\)“]/g, '').split(/\s/);
words.forEach(w => {
  if (common.includes(w)) return;
  if (!count[w]) count[w] = 0;
  count[w]++;
});

const sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);

console.log(sorted);
