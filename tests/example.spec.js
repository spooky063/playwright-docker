// @ts-check
import { test, expect } from '@playwright/test';
import config from '#config';
import path from 'path';

test('Demo test Google', async ({ page }) => {
  const snapshotDir = config.snapshotDir;
  if (snapshotDir === undefined) {
    throw new Error('Error: check your configuration. The variable snapshotDir is undefined !');
  }

  await page.goto('http://google.com');
  await expect(page).toHaveTitle(/Google/);
  await page.screenshot({ path: path.join(snapshotDir, 'homepage-google.png'), fullPage: true });
});
