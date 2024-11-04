<template>
  <Suspense>
    <control-wrapper
      v-bind="controlWrapper"
      :styles="styles"
      :is-focused="isFocused"
      :is-label-disabled="true"
      :applied-options="appliedOptions"
    >
      <KendoInput
        :id="control.id + '-input'"
        :class="styles.control.input"
        :value="control.data"
        :disabled="!control.enabled"
        :autofocus="appliedOptions.focus"
        :placeholder="appliedOptions.placeholder"
        @input="onChange"
        @focus="isFocused = true"
        @blur="isFocused = false"
      />
    </control-wrapper>
  </Suspense>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts">
import { type ControlElement } from '@jsonforms/core'
import { defineComponent } from 'vue'
import { default as ControlWrapper } from './ControlWrapper.vue'
import useKendoElement from './renderer'
import { rendererProps, useJsonFormsControl } from '@jsonforms/vue'
import { Input as KendoInput } from '@progress/kendo-vue-inputs'
const stringKendoRenderer = defineComponent({
  name: 'StringControlRenderer',
  components: {
    ControlWrapper,
    KendoInput,
  },
  props: {
    ...rendererProps<ControlElement>(),
  },
  setup(props: any) {
    return useKendoElement(
      useJsonFormsControl(props),
      target => target.value || undefined,
    )
  },
})

export default stringKendoRenderer
</script>
