import { mount } from '@vue/test-utils'
import App from './App.vue'

describe('App', () => {
  it('renders static page content', () => {
    const wrapper = mount(App)

    expect(wrapper.get('[data-testid="title"]').text()).toContain('Vue3 CI/CD Demo')
    expect(wrapper.get('[data-testid="desc"]').text()).toContain('这个页面用于演示 Vitest 和 Playwright 测试。')
    expect(wrapper.get('[data-testid="weather-btn"]').text()).toContain('获取武汉天气')
  })
})
