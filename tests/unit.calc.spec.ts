import { test, expect } from '@playwright/test'
import { wordCount, charCount } from '../src/utils/calc'

test('wordCount returns correct number of words', async () => {
  expect(wordCount('')).toBe(0)
  expect(wordCount('hello')).toBe(1)
  expect(wordCount('hello world  ')).toBe(2)
  expect(wordCount(' multiple   spaces ')).toBe(2)
})

test('charCount returns correct character length', async () => {
  expect(charCount('')).toBe(0)
  expect(charCount('abc')).toBe(3)
})
