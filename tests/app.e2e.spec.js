import { expect, test } from '@playwright/test'

test('should request Wuhan weather and render result below the button', async ({ page }) => {
  await page.goto('/')

  const button = page.getByTestId('weather-btn')
  await button.click()

  const weatherResult = page.getByTestId('weather-result')
  await expect(weatherResult).toContainText(/武汉当前气温\s-?\d+(\.\d+)?°C，天气代码\s\d+/)
})
