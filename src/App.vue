<script setup>
import { ref } from 'vue'

const loading = ref(false)
const weatherMessage = ref('')
const errorMessage = ref('')
const weatherApiUrl =
  'https://api.open-meteo.com/v1/forecast?latitude=30.5928&longitude=114.3055&current=temperature_2m,weather_code&timezone=Asia%2FShanghai'

const fetchWuhanWeather = async () => {
  loading.value = true
  weatherMessage.value = '1234'
  errorMessage.value = ''
  return

  try {
    const response = await fetch(weatherApiUrl)

    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`)
    }

    const data = await response.json()
    const current = data?.current

    if (!current || current.temperature_2m === undefined || current.weather_code === undefined) {
      throw new Error('Weather data is incomplete')
    }

    weatherMessage.value = `武汉当前气温 ${current.temperature_2m}°C，天气代码 ${current.weather_code}`
  } catch (error) {
    errorMessage.value = '获取武汉天气失败，请稍后重试。'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <main class="container">
    <h1 data-testid="title">Vue3 CI/CD Demo</h1>
    <p data-testid="desc">这个页面用于演示 Vitest 和 Playwright 测试。</p>

    <button
      data-testid="weather-btn"
      type="button"
      class="counter"
      :disabled="loading"
      @click="fetchWuhanWeather"
    >
      {{ loading ? '正在获取天气...' : '获取武汉天气' }}
    </button>

    <p v-if="weatherMessage" data-testid="weather-result" class="weather-result">
      {{ weatherMessage }}
    </p>
    <p v-if="errorMessage" data-testid="weather-error" class="weather-error">
      {{ errorMessage }}
    </p>
  </main>
</template>
