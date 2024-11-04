import { defineStore } from 'pinia'

export const useBreadCrumbStore = defineStore('breadcrumb', {
  state: () => ({
    breadcrumbs: [] as Record<string, string>[],
  }),
  actions: {
    setBreadCrumbs(breadcrumbs: Record<string, string>[]) {
      this.breadcrumbs = breadcrumbs
    },
  },
})
