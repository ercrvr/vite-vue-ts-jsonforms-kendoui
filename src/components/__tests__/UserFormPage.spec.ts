import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import UserFormPage from '@/pages/UserFormPage.vue'
import { createPinia, setActivePinia } from 'pinia'

describe('jsonForms.dateInput', () => {
  beforeEach(() => {
    // Create and set the active Pinia instance before each test
    const pinia = createPinia()
    setActivePinia(pinia)
  })

  it('renders the button with correct text', () => {
    const wrapper = mount(UserFormPage)

    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)
    expect(button.text()).toContain('Details') // Check if the button has the correct text
  })

  it('renders the collapsible icon image', () => {
    const wrapper = mount(UserFormPage)

    const img = wrapper.find(
      'img[src="/src/assets/icons/collapsible_icon.svg"]',
    )
    expect(img.exists()).toBe(true) // Verify that the image is rendered
  })

  it('renders content sections', () => {
    const wrapper = mount(UserFormPage)

    const contentDiv = wrapper.find('.content')
    expect(contentDiv.exists()).toBe(true) // Ensure the content div is present

    // Check if there are the expected number of vertical-layout-items
    const items = contentDiv.findAll('.vertical-layout-item')
    expect(items.length).toBe(2) // Adjust based on your expected layout
  })
})
