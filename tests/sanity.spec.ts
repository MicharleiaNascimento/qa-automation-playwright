import { test, expect } from '@playwright/test';

test('shows the SauceDemo login form', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByPlaceholder('Username')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});
