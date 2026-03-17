<script setup>
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value += 1
}
</script>

<template>
  <main class="container">
    <h1 data-testid="title">Vue3 CI/CD Demo</h1>
    <p data-testid="desc">这个页面用于演示 Vitest 和 Playwright 测试。</p>

    <button data-testid="counter-btn" type="button" class="counter" @click="increment">
      点击次数: {{ count }}
    </button>
  </main>
</template>
