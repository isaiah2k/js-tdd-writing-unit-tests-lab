import { isPalindrome } from '../utils.js'

test('racecar is a palindrome', () => {
  expect(isPalindrome('racecar')).toBe(true)
})

test('car is not a palindrome', () => {
  expect(isPalindrome('car')).toBe(false)
})

test('handles uppercase letters', () => {
  expect(isPalindrome('Mom')).toBe(true)
})

test('empty string is false', () => {
  expect(isPalindrome('')).toBe(false)
})

test('throws on numbers', () => {
  expect(() => isPalindrome('123')).toThrow()
})

test('throws on non-string input', () => {
  expect(() => isPalindrome(123)).toThrow()
})
