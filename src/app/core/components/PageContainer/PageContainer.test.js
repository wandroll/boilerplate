import test from 'ava'
import { mount } from 'avoriaz'
import PageContainer from './PageContainer.vue'

const wrapper = mount(PageContainer)

test('should have the correct name', t => {
  t.is(wrapper.name(), 'page-container')
})

test('should have render container parent', t => {
  const pageContainer = wrapper.contains('.page-container')

  t.is(pageContainer, true)
})
