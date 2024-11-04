/* eslint-disable @typescript-eslint/no-unused-vars */
import { describe, it, expect, beforeEach, vi } from 'vitest'
import eventBus from '../eventBus'

describe('Event Bus', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let callback: (payload: any) => void

  beforeEach(() => {
    // Reset the callback before each test
    callback = payload => {} // Placeholder for the callback
  })

  it('should register and emit events', () => {
    const callback = vi.fn() // Use Vitest's mock function

    eventBus.on('testEvent', callback) // Register the event listener
    eventBus.emit('testEvent', 'data') // Emit the event with data

    expect(callback).toHaveBeenCalled() // Check if the callback was called
    expect(callback).toHaveBeenCalledWith('data') // Check if it was called with the correct data
  })

  it('should allow multiple listeners for the same event', () => {
    const firstCallback = vi.fn()
    const secondCallback = vi.fn()

    eventBus.on('testEvent', firstCallback) // Register the first listener
    eventBus.on('testEvent', secondCallback) // Register the second listener

    eventBus.emit('testEvent', 'more data') // Emit the event

    expect(firstCallback).toHaveBeenCalled() // Check if the first listener was called
    expect(secondCallback).toHaveBeenCalled() // Check if the second listener was called
    expect(firstCallback).toHaveBeenCalledWith('more data') // Check the first listener's data
    expect(secondCallback).toHaveBeenCalledWith('more data') // Check the second listener's data
  })

  it('should remove listeners', () => {
    const callback = vi.fn() // Create a new mock function

    eventBus.on('testEvent', callback) // Register the event listener
    eventBus.off('testEvent', callback) // Remove the event listener

    eventBus.emit('testEvent', 'data') // Emit the event

    expect(callback).not.toHaveBeenCalled() // Check if the callback was NOT called
  })

  // eslint-disable-next-line vitest/expect-expect
  it('should not emit if no listeners are registered', () => {
    eventBus.emit('nonExistentEvent', 'data') // Emit a non-existent event
    // Expect nothing to happen, no assertion needed for a void function
  })
})
