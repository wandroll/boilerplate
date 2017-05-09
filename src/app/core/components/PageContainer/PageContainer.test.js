import test from 'ava'
import Vue from 'vue'
import { mount } from 'avoriaz'
import PageContainer from './PageContainer.vue'

(async () => {
  const wrapper = mount(PageContainer)

  await Vue.nextTick()

  test('should have the correct name', t => {
    t.is(wrapper.name(), 'page-container')
  })

  test('should render parent wrapper', t => {
    const hasPageWrapper = wrapper.contains('.page-wrapper')

    t.is(hasPageWrapper, true)
  })
})()
