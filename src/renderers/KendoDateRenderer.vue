<template>
  <Suspense>
    <control-wrapper
      v-bind="controlWrapper"
      :styles="styles"
      :is-focused="isFocused"
      :applied-options="appliedOptions"
    >
      <KendoDatePicker
        toggle-button="myTemplate"
        :id="control.id + '-input'"
        :class="styles.control.input"
        :autofocus="appliedOptions.focus"
        :placeholder="appliedOptions.placeholder"
        @change="onChange"
        @focus="isFocused = true"
        @blur="isFocused = false"
        :format="'dd/MM/yyyy'"
        :format-placeholder="{ day: 'DD', month: 'MM', year: 'YYYY' }"
      >
        <template v-slot:myTemplate="{ props }">
          <CalendarButton
            :image="'src/assets/icons/calendar.svg'"
            @click="(ev: MouseEvent) => props.onClick(ev)"
          />
        </template>
      </KendoDatePicker>
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
import { DatePicker as KendoDatePicker } from '@progress/kendo-vue-dateinputs'
import CalendarButton from '@/components/CalendarButton.vue'
const dateKendoRenderer = defineComponent({
  name: 'DateControlRenderer',
  components: {
    ControlWrapper,
    KendoDatePicker,
    CalendarButton,
  },
  props: {
    ...rendererProps<ControlElement>(),
  },
  setup(props: any) {
    return useKendoElement(
      useJsonFormsControl(props),
      target => new Date(target.value) || null || undefined,
    )
  },
})

export default dateKendoRenderer
</script>
