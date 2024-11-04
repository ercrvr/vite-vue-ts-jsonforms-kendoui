import { defineStore } from 'pinia'

export const useFooterStore = defineStore('footer', {
  state: () => ({
    hasSubmit: false,
    isEnabled: false,
  }),
  actions: {
    toggleHasSubmit(val?: boolean) {
      this.hasSubmit = val || false
    },
    toggleEnabled(val?: boolean) {
      this.isEnabled = val || false
    },
  },
})
