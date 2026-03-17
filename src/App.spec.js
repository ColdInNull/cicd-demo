import { flushPromises, mount } from '@vue/test-utils'
import App from './App.vue'

describe('App', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('clicking button should request Wuhan weather and render weather result', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        current: {
          temperature_2m: 25.3,
          weather_code: 1
        }
      })
    })
    vi.stubGlobal('fetch', fetchMock)

    const wrapper = mount(App)

    expect(wrapper.get('[data-testid="title"]').text()).toContain('Vue3 CI/CD Demo')

    const button = wrapper.get('[data-testid="weather-btn"]')
    await button.trigger('click')
    await flushPromises()

    expect(fetchMock).toHaveBeenCalledTimes(1)
    expect(fetchMock.mock.calls[0][0]).toContain('api.open-meteo.com')
    expect(wrapper.get('[data-testid="weather-result"]').text()).toContain('武汉当前气温 25.3°C')
    expect(wrapper.get('[data-testid="weather-result"]').text()).toContain('天气代码 1')
  })
})
