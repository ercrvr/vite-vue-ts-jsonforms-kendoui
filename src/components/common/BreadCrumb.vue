<template>
  <div class="flex gap-2.5 h-[26px] py-2.5 items-center">
    <RouterLink to="/"
      ><img class="h-6 w-6" src="@/assets/icons/home.svg"
    /></RouterLink>
    <div
      v-if="store.breadcrumbs.length > 0"
      class="flex items-center justify-center h-[18px] w-[18px]"
    >
      <img class="h-[18px] w-[18px]" src="@/assets/icons/gtsign.svg" />
    </div>
    <div v-if="store.breadcrumbs.length > 0" class="flex gap-2.5 items-center">
      <div
        v-for="(item, index) in store.breadcrumbs"
        :key="item.key"
        class="h-[22px]"
      >
        <div class="flex gap-2.5 items-center">
          <RouterLink :to="item.route">
            <span
              :class="{
                'font-bold': index == store.breadcrumbs.length - 1,
                'py-0.5 text-sm leading-[17.5px ]': true,
              }"
            >
              {{ item.value }}
            </span>
          </RouterLink>
          <img
            class="h-[18px] w-[18px]"
            v-if="index < store.breadcrumbs.length - 1"
            src="@/assets/icons/slash.svg"
          />
        </div>
      </div>
    </div>
    <div v-else></div>
  </div>
</template>

<script setup lang="ts">
import { useBreadCrumbStore } from '@/stores/useBreadcrumbStore'
const store = useBreadCrumbStore()
</script>
