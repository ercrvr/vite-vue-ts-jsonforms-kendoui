<template>
  <toggle-button @click="handleClick"
    ><img class="h-5 w-5" :src="image"
  /></toggle-button>
</template>

<!-- eslint-disable vue/no-export-in-script-setup -->
<script setup lang="ts">
import { ToggleButton } from '@progress/kendo-vue-dateinputs'

defineProps({
  image: {
    type: String,
    required: true,
  },
})

// Define emits using defineEmits
const emit = defineEmits(['click', 'mousedown', 'mouseup'])

// Handle the click event
function handleClick(e: MouseEvent) {
  emit('click', e)
}
</script>
