import test from 'ava'
import { mount } from 'avoriaz'
import { i18n, currentLang } from 'app/config'
import Following from './Following.vue'

const wrapper = mount(Following, { i18n })

test('should have the correct name', t => {
  t.is(wrapper.name(), 'Following')
})

test('should have the correct title', t => {
  const pageTitle = wrapper.find('h1')[0]

  t.is(pageTitle.text(), currentLang.following.title)
})
