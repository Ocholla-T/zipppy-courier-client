<script setup lang="ts">
defineProps<{
  class?: string
  inputId?: string
  placeholder?: string
  width?: string
  autocomplete?: string
  type: string
}>()
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
  />
</template>

<style scoped lang="scss">
@use './index';
</style>
