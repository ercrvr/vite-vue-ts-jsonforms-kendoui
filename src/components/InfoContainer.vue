<template>
  <div class="flex flex-col gap-[10px]">
    <div
      class="h-7 text-[color:#003366] font-figtree text-xl font-bold leading-7"
    >
      {{ store.info.title }}
    </div>
    <div
      :class="[
        store.info.color,
        'border-[0.3px] border-[color:#32ADE6]  leading-[23.4px] p-[15px] rounded-lg',
      ]"
    >
      <span
        class="text-justify text-[color:#003366] font-figtree font-medium text-lg"
        >{{ store.info.message }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/useUserStore'
const store = useUserStore()
</script>
