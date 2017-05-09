import test from 'ava'
import { mount } from 'avoriaz'
import { i18n, currentLang } from 'app/config'
import Overview from './Overview.vue'

const wrapper = mount(Overview, { i18n })

test('should have the correct name', t => {
  t.is(wrapper.name(), 'Overview')
})

test('should have the correct title', t => {
  const pageTitle = wrapper.find('h1')[0]

  t.is(pageTitle.text(), currentLang.overview.title)
})
