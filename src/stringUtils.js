function reverseWords(str) {
  return str.split(' ').reverse().join(' ');
}

function countVowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

function isPalindrome(str) {
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return normalized === normalized.split('').reverse().join('');
}

module.exports = { reverseWords, countVowels, isPalindrome };
