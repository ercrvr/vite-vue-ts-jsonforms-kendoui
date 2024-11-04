<template>
  <footer class="px-32 py-[10px]">
    <div class="flex flex-1 justify-end">
      <button
        v-if="footerStore.hasSubmit"
        @click="submit"
        :disable="!footerStore.isEnabled"
        :class="[
          footerStore.isEnabled ? 'bg-[color:#003366]' : 'submit-disabled',
          'h-11 flex items-center rounded-[100px]  px-5 py-3 w-[116px]',
        ]"
      >
        <label
          :class="[
            footerStore.isEnabled ? 'text-[color:white]' : 'submit-disabled',
            'px-2',
          ]"
          >Next</label
        >
        <SubmitIcon
          :class="[footerStore.isEnabled ? '' : 'submit-disabled']"
          :color="footerStore.isEnabled ? 'white' : '#97A1AF'"
        />
      </button>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useFooterStore } from '@/stores/useFooterStore'
import { useUserStore } from '@/stores/useUserStore'
import SubmitIcon from '@/components/submit-icons/SubmitIcon.vue'

const submit = () => {
  if (footerStore.isEnabled) {
    userStore.saveUser()
  }
}

const footerStore = useFooterStore()
const userStore = useUserStore()
</script>
