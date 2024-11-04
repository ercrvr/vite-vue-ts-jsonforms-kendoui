import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useFooterStore } from '../useFooterStore'

beforeEach(() => {
  const pinia = createPinia()
  setActivePinia(pinia)
})

describe('FooterStore', () => {
  it('initializes with default values', () => {
    const store = useFooterStore()
    expect(store.hasSubmit).toBe(false) // Check initial state
    expect(store.isEnabled).toBe(false)
  })

  it('toggles hasSubmit to true', () => {
    const store = useFooterStore()
    store.toggleHasSubmit(true)
    expect(store.hasSubmit).toBe(true) // Check if hasSubmit is set to true
  })

  it('toggles hasSubmit to false', () => {
    const store = useFooterStore()
    store.toggleHasSubmit(false)
    expect(store.hasSubmit).toBe(false) // Check if hasSubmit remains false
  })

  it('toggles isEnabled to true', () => {
    const store = useFooterStore()
    store.toggleEnabled(true)
    expect(store.isEnabled).toBe(true) // Check if isEnabled is set to true
  })

  it('toggles isEnabled to false', () => {
    const store = useFooterStore()
    store.toggleEnabled(false)
    expect(store.isEnabled).toBe(false) // Check if isEnabled remains false
  })

  it('handles toggling with no parameters', () => {
    const store = useFooterStore()
    store.toggleHasSubmit() // Call without parameters
    expect(store.hasSubmit).toBe(false) // Check if hasSubmit defaults to false
    store.toggleEnabled() // Call without parameters
    expect(store.isEnabled).toBe(false) // Check if isEnabled defaults to false
  })
})
