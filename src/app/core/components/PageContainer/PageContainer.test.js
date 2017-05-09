import test from 'ava'
import { mount } from 'avoriaz'
import PageContainer from './PageContainer.vue'

const wrapper = mount(PageContainer)

test('should have the correct name', t => {
  t.is(wrapper.name(), 'page-container')
})
