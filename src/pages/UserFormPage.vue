<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { JsonForms, type JsonFormsChangeEvent } from '@jsonforms/vue'
import schema from '@/jsonforms/user/schema.json' // Adjust the path as necessary
import uiSchema from '@/jsonforms/user/uiSchema.json' // Adjust the path as necessary
import { useUserStore } from '@/stores/useUserStore'
import { dpRendererEntry, stringRendererEntry } from '@/renderers/renderer'
import { createAjv, type JsonFormsRendererRegistryEntry } from '@jsonforms/core'
import { vanillaRenderers } from '@jsonforms/vue-vanilla'
import { calculateAge } from '@/helpers/functions'
import CollapsiblePanel from '@/components/CollapsiblePanel.vue'
import { useFooterStore } from '@/stores/useFooterStore'
import eventBus from '@/eventbus/eventBus'

const userStore = useUserStore()
const footerStore = useFooterStore()
const ajv = createAjv({ allErrors: true })
const customRenderers: JsonFormsRendererRegistryEntry[] = [
  stringRendererEntry,
  dpRendererEntry,
  ...vanillaRenderers,
]
const renderers = ref(Object.freeze(customRenderers))
// Handle form changes
const onChange = (evt: JsonFormsChangeEvent) => {
  userStore.user = !evt.data ? {} : evt.data
  userStore.user.age = calculateAge(
    userStore.user.dateOfBirth || new Date().toDateString(),
  )
  if (userStore.user.age >= 18) {
    userStore.removeFromDisabledList('#/properties/email')
  } else {
    userStore.addToDisableList('#/properties/email')
  }
  if (
    typeof userStore.user.foreName != 'undefined' ||
    typeof userStore.user.surname != 'undefined' ||
    typeof userStore.user.dateOfBirth != 'undefined'
  ) {
    userStore.setInfoColor('bg-[color:#E5F2FF]')
  }
  footerStore.toggleEnabled(
    userStore.user.age >= 18 &&
      evt.errors?.length == 0 &&
      evt.data.foreName &&
      evt.data.surname,
  )
}

function handleMessage() {
  userStore.resetForm()
}

onMounted(() => {
  eventBus.on('resetFormMessage', handleMessage)
})

onBeforeUnmount(() => {
  eventBus.off('resetFormMessage', handleMessage)
})
</script>

<template>
  <CollapsiblePanel :title="'Details'" :ariaTitle="'Details'" class="jsonforms">
    <json-forms
      :debug="true"
      :ajv="ajv"
      :renderers="renderers"
      :schema="schema"
      :uischema="uiSchema"
      :data="userStore.user"
      @change="onChange"
    />
  </CollapsiblePanel>
</template>
