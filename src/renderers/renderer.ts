/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  isDateControl,
  isStringControl,
  rankWith,
  type JsonFormsRendererRegistryEntry,
} from '@jsonforms/core'
import { computed, ref } from 'vue'
import stringKendoRenderer from './KendoTextRenderer.vue'
import { useStyles } from '@jsonforms/vue-vanilla'
import dateKendoRenderer from './KendoDateRenderer.vue'

export const useKendoElement = <I extends { control: any; handleChange: any }>(
  input: I,
  adaptTarget: (target: any) => any = v => v.value,
) => {
  const appliedOptions = computed(() => ({
    ...input.control.value.config,
    ...input.control.value.uischema.options,
  }))
  const isFocused = ref(false)
  const disabledList = ref<string[]>(['#/properties/email'])
  const onChange = (event: Event) => {
    let val = adaptTarget(event.target)
    if (input.control.value.uischema.options.format == 'date') {
      const newDate = new Date(val)
      val = newDate.toLocaleDateString()
    }
    input.handleChange(input.control.value.path, val)
  }

  const controlWrapper = computed(() => {
    const { id, description, errors, label, visible, required } =
      input.control.value
    return {
      id,
      description,
      errors,
      label,
      visible,
      required,
      enabled: disabledList.value,
    }
  })
  return {
    ...input,
    styles: useStyles(input.control.value.uischema),
    isFocused,
    appliedOptions,
    controlWrapper,
    onChange,
  }
}

export default useKendoElement

export const dpRendererEntry: JsonFormsRendererRegistryEntry = {
  renderer: dateKendoRenderer,
  tester: rankWith(2, isDateControl),
}

export const stringRendererEntry: JsonFormsRendererRegistryEntry = {
  renderer: stringKendoRenderer,
  tester: rankWith(1, isStringControl),
}
