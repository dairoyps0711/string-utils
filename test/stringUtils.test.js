const test = require('node:test');
const assert = require('node:assert/strict');
const { reverseWords, countVowels, isPalindrome } = require('../src/stringUtils');

test('reverseWords reverses word order', () => {
  assert.equal(reverseWords('hola mundo'), 'mundo hola');
});

test('countVowels counts upper and lower case vowels', () => {
  assert.equal(countVowels('Hello World'), 3);
});

test('isPalindrome accepts a simple lowercase palindrome', () => {
  assert.equal(isPalindrome('anita lava la tina'.replace(/ /g, '')), true);
});

test('isPalindrome rejects a non-palindrome', () => {
  assert.equal(isPalindrome('hello'), false);
});
