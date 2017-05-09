import test from 'ava'
import { mount } from 'avoriaz'
import { i18n, currentLang } from 'app/config'
import Stars from './Stars.vue'

const wrapper = mount(Stars, { i18n })

test('should have the correct name', t => {
  t.is(wrapper.name(), 'Stars')
})

test('should have the correct title', t => {
  const pageTitle = wrapper.find('h1')[0]

  t.is(pageTitle.text(), currentLang.stars.title)
})
