<script setup lang="ts">
defineProps<{
  buttonValue: string
  buttonType: string
  class?: string
  width?: string
  color?: string
  background?: string
}>()
</script>

<template>
  <input
    :class="class"
    class="button"
    role="button"
    :type="buttonType"
    :value="buttonValue"
    :style="{ width, color, background }"
  />
</template>

<style scoped lang="scss">
@use './index.scss';
</style>
