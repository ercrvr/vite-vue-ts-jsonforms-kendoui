<template>
  <div class="panel">
    <button @click.prevent="togglePanel">
      <div class="flex justify-between">
        <div
          class="text-[color:#003366] font-figtree font-bold h-[28px] text-xl leading-7"
        >
          {{ title }}
        </div>
        <span
          ><img
            src="@/assets/icons/collapsible_icon.svg"
            :class="[showPanel ? '' : 'rotate-180']"
        /></span>
      </div>
    </button>
    <div class="content" v-if="showPanel">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const showPanel = ref(true)
const togglePanel = () => {
  showPanel.value = !showPanel.value
}
defineProps({
  title: {
    type: String,
    required: true,
  },
  ariaTitle: {
    type: String,
    required: true,
  },
})
</script>
