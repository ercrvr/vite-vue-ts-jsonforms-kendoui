<script setup lang="ts">
defineProps({
  imageComponent: {
    type: Object,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  redirectPath: {
    type: String,
    required: true,
  },
  hasNotif: {
    type: Boolean,
  },
})

const toggleActive = () => {
  emit('toggleActive')
  emit('hideNotification')
}
const emit = defineEmits(['toggleActive', 'hideNotification'])
</script>

<template>
  <RouterLink :to="redirectPath" @click="toggleActive">
    <div
      :class="{
        'bg-tertiary': isActive,
        'rounded-full flex h-[35px] w-[35px]': true,
      }"
    >
      <div class="w-[27px] flex items-center justify-end">
        <imageComponent :color="isActive ? '#003366' : '#637083'" />
      </div>
      <div class="w-2 h-[35px] flex justify-start">
        <img
          v-if="hasNotif"
          class="h-2 w-2"
          src="@/assets/icons/indicator.svg"
          alt="Indicator"
        />
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.bg-tertiary {
  background-color: var(--Screen-Background-background-tertiary, #f2f4f7);
}
</style>
