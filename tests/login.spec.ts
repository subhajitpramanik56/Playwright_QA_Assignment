import path from 'path';
import { expect, test, type Page } from '@playwright/test';

const baseUrl = 'https://practicetestautomation.com/practice-test-login/';
const screenshotDir = path.resolve('screenshots');

async function capture(page: Page, name: string) {
  await page.screenshot({ path: path.join(screenshotDir, name), fullPage: true });
}

async function login(page: Page, username: string, password: string, method: 'click' | 'enter' = 'click') {
  await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
  await capture(page, '01-login-page-loaded.png');

  await page.locator('#username').fill(username);
  await capture(page, '02-username-entered.png');

  await page.locator('#password').fill(password);
  await capture(page, '03-password-entered.png');
  await capture(page, '04-before-submit.png');

  if (method === 'enter') {
    await page.locator('#password').press('Enter');
  } else {
    await page.locator('#submit').click();
  }
}

test.describe('Practice Test Automation login flow', () => {
  test('logs in successfully with valid credentials', async ({ page }) => {
    await login(page, 'student', 'Password123');
    await expect(page).toHaveURL(/logged-in-successfully/);
    await expect(page.locator('body')).toContainText(/logged in successfully|successfully/i);
    await capture(page, '05-login-success.png');
    await capture(page, '06-final-validation-page.png');
  });

  test('submits with Enter key and reaches the authenticated page', async ({ page }) => {
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
    await capture(page, '04-before-submit.png');

    await page.locator('#username').fill('student');
    await page.locator('#password').fill('Password123');
    await page.locator('#submit').focus();
    await page.keyboard.press('Enter');

    await expect(page).toHaveURL(/logged-in-successfully/);
    await expect(page.locator('body')).toContainText(/logged in successfully|successfully/i);
  });

  test('shows an error for invalid credentials', async ({ page }) => {
    await login(page, 'invalid-user', 'wrong-password');
    await expect(page).toHaveURL(baseUrl);
    await expect(page.locator('body')).toContainText(/invalid|password/i);
    await capture(page, '07-invalid-login-error.png');
  });
});
