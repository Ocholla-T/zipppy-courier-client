<script setup lang="ts">
defineProps<{
  class?: string
  inputId?: string
  modelValue: string
  placeholder?: string
  width?: string
  autocomplete?: string
  type: string
}>()

defineEmits(['update:modelValue'])
</script>

<template>
  <input
    :class="class"
    class="input"
    :id="inputId"
    :type="type"
    :placeholder="placeholder"
    :style="{ width }"
    :autocomplete="autocomplete"
    @input="$emit('update:modelValue',($event.target as HTMLInputElement).value)"
    :value="modelValue"
  />
</template>

<style scoped lang="scss">
@use './index';
</style>
