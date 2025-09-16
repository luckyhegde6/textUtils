import { test, expect } from '@playwright/test'

test('homepage has title', async ({ page, baseURL }) => {
  await page.goto(baseURL || 'http://localhost:5173/')
  await expect(page).toHaveTitle(/TextUtils/i)
})
