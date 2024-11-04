import { defineStore } from 'pinia'
import type { Component } from 'vue'
import { shallowRef } from 'vue'
import FormIcon from '@/components/nav-icons/FormIcon.vue'
import ProfileIcon from '@/components/nav-icons/ProfileIcon.vue'

interface navigationItem {
  slug: string
  isActive?: boolean | null | undefined
  route: string
  hasNotif?: boolean
  imageComponent: Component
}

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({
    isSidebarOpen: true,
    activeIndex: 0,
    navList: [
      {
        slug: 'form',
        imageComponent: shallowRef(FormIcon),
        label: 'Add User',
        route: '/',
        hasNotif: true,
        isActive: true,
      },
      {
        slug: 'profiles',
        imageComponent: shallowRef(ProfileIcon),
        route: '/profiles',
        hasNotif: true,
      },
    ],
  }),
  actions: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen
    },
    handleActive(index: number) {
      this.activeIndex = index
      this.navList[index].isActive = true
      this.navList[index].hasNotif = false

      // Set isActive to false for all other items
      this.navList.forEach((item: navigationItem, i: number) => {
        if (i !== index) {
          item.isActive = false
        }
      })
    },
  },
})
