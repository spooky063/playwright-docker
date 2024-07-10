// @ts-check
const { test, expect } = require('@playwright/test');
const config = require('#config');
const path = require('path');

test('Demo test Google', async ({ page }) => {
  const snapshotDir = config.snapshotDir;

  await page.goto('http://google.com');
  await expect(page).toHaveTitle(/Google/);
  await page.screenshot({ path: path.join(snapshotDir, 'homepage-google.png'), fullPage: true });
});
