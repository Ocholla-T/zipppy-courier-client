<script setup lang="ts">
defineProps<{
  buttonValue: string
  buttonType: string
  class?: string
  width?: string
  color?: string
  background?: string
}>()

defineEmits(['click'])
</script>

<template>
  <input
    :class="class"
    class="button"
    role="button"
    :type="buttonType"
    :value="buttonValue"
    :style="{ width, color, background }"
    @click="$emit('click', $event)"
  />
</template>

<style scoped lang="scss">
@use './index.scss';
</style>
