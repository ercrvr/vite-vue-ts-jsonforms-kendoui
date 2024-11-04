/* eslint-disable @typescript-eslint/no-explicit-any */
import { reactive } from 'vue'

interface EventBus {
  [event: string]: Array<(payload: any) => void>
}

const eventBus: EventBus = reactive({})

const emit = (event: string, payload?: any) => {
  if (!eventBus[event]) {
    return // If no listeners, exit
  }
  eventBus[event].forEach(callback => callback(payload))
}

const on = (event: string, callback: (payload: any) => void) => {
  if (!eventBus[event]) {
    eventBus[event] = []
  }
  eventBus[event].push(callback)
}

const off = (event: string, callback: (payload: any) => void) => {
  if (eventBus[event]) {
    eventBus[event] = eventBus[event].filter(cb => cb !== callback)
  }
}

export default {
  emit,
  on,
  off,
}
