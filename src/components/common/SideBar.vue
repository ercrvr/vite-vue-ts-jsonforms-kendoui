<script setup lang="ts">
import NavItem from '@/components/common/NavItem.vue'
import { useSidebarStore } from '@/stores/useSidebarStore'
const store = useSidebarStore()
</script>
<template>
  <aside
    id="sidebar"
    class="pt-[40px] pl-2.5 pb-2.5 pr-2.5 bg-white w-[60px] h-[calc(100vh-60px)]"
  >
    <div class="">
      <nav class="flex flex-col gap-[15px]">
        <NavItem
          v-for="(item, index) in store.navList"
          :key="item.slug"
          :imageComponent="item.imageComponent"
          :isActive="item.isActive ?? false"
          :hasNotif="item.hasNotif"
          :redirectPath="item.route"
          @toggleActive="() => store.handleActive(index)"
        />
      </nav>
    </div>
  </aside>
</template>

<style scoped>
#sidebar {
  box-shadow: 0.5px 0px 0px 0px #0000001a;
}
</style>
