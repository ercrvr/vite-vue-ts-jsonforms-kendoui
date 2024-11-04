<script setup lang="ts">
import { useSidebarStore } from '@/stores/useSidebarStore'
const store = useSidebarStore()
</script>

<template>
  <header class="bg-white shadow-sm h-[55px]">
    <div class="flex justify-between items-center gap-5 px-5 h-[55px]">
      <div class="flex items-center gap-5">
        <img
          src="@/assets/icons/menu.svg"
          @click="store.toggleSidebar()"
          alt="Menu Button"
          class="h-5 w-5 cursor-pointer"
        />
        <RouterLink to="/">
          <div class="flex items-center gap-2.5">
            <img
              src="@/assets/icons/company_logo.svg"
              alt="Company Logo"
              class="h-[22px] w-[22px]"
            />
            <span class="font-extrabold text-xl leading-[26px]"
              >Company Logo</span
            >
          </div>
        </RouterLink>
      </div>
      <div class="flex items-center gap-5">
        <img
          class="h-5 w-5"
          src="@/assets/icons/search.svg"
          alt="Search Icon"
        />
        <div class="flex items-center gap-2">
          <img class="h-8 w-8" src="@/assets/icons/Avatar.png" />
          <div>
            <div class="text-sm leading-[17.5px] font-figtree font-semibold">
              Forename Surname
            </div>
            <div
              class="text-xs leading-4 font-normal font-figtree text-tertiary"
            >
              Position
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
