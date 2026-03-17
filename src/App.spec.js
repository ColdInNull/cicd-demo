import { mount } from '@vue/test-utils'
import App from './App.vue'

describe('App', () => {
  it('renders title and increments counter', async () => {
    const wrapper = mount(App)

    expect(wrapper.get('[data-testid="title"]').text()).toContain('Vue3 CI/CD Demo')

    const button = wrapper.get('[data-testid="counter-btn"]')
    expect(button.text()).toContain('0')

    await button.trigger('click')
    expect(button.text()).toContain('1')
  })
})
