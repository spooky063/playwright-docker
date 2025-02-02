import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  outputDir: process.env.PLAYWRIGHT_OUTPUT,
  snapshotDir: process.env.PLAYWRIGHT_SNAPSHOTS,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['list', { printSteps: true }],
    ['html', { outputFolder: `${process.env.PLAYWRIGHT_OUTPUT}/reports`}],
    ['junit', { outputFile: `${process.env.PLAYWRIGHT_OUTPUT}/junit.xml` }],
  ],
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
