export function isPalindrome(word) {
  if (typeof word !== 'string') throw Error('Must be a string')
  if (word === '') return false
  if (!/^[A-Za-z]+$/.test(word)) throw Error('Letters only')

  word = word.toLowerCase()
  return word === word
    .split('')
    .reverse()
    .join('')
}

