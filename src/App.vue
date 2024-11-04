<script setup lang="ts">
import { RouterView } from 'vue-router'
import CommonHeader from '@/components/common/CommonHeader.vue'
import SideBar from '@/components/common/SideBar.vue'
import BreadCrumb from '@/components/common/BreadCrumb.vue'
import { useSidebarStore } from '@/stores/useSidebarStore'
import InfoContainer from './components/InfoContainer.vue'
import CommonFooter from '@/components/common/CommonFooter.vue'
import { useUserStore } from './stores/useUserStore'
const store = useSidebarStore()
const userStore = useUserStore()
</script>

<template>
  <CommonHeader />
  <div class="flex min-h-screen">
    <SideBar v-if="store.isSidebarOpen" />
    <div class="flex flex-1 flex-col gap-[15px] pt-5 px-32 bg-[color:#f9fafb]">
      <BreadCrumb />
      <InfoContainer v-if="userStore.hasInfo" />
      <RouterView />
    </div>
  </div>
  <CommonFooter />
</template>
