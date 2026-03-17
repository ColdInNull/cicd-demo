import { expect, test } from '@playwright/test'

test('should render homepage and increment counter', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByTestId('title')).toHaveText('Vue3 CI/CD Demo')

  const button = page.getByTestId('counter-btn')
  await expect(button).toContainText('0')

  await button.click()

  await expect(button).toContainText('1')
})
