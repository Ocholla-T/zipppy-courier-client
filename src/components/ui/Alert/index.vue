<script setup lang="ts">
defineProps<{
  text: string
  isSuccess: boolean
}>()

defineEmits(['click'])
</script>

<template>
  <div class="alert flex flex-ai-c" :class="{ success: isSuccess }">
    <p class="alert__info">{{ text.replace(/['"]+/g, '') }}</p>
    <img
      class="alert__icon"
      src="../../../assets/images/close.svg"
      alt="close alert"
      @click="$emit('click')"
    />
  </div>
</template>

<style scoped lang="scss">
@use './styles';
</style>
