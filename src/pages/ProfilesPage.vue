<script setup lang="ts">
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/useUserStore'

// Fetch users when the component mounts
onMounted(async () => {
  const store = useUserStore()
  await store.fetchUsers()
})
</script>

<template>
  <main>Profiles Page</main>
</template>
