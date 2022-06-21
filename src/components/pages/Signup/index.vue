<script setup lang="ts">
import CustomButton from '@components/ui/Button/index.vue'
import CustomInput from '@components/ui/Input/index.vue'
</script>

<template>
  <main class="flex flex-ai-c flex-jc-c">
    <form class="card flex flex-fd-c flex-ai-c flex-jc-c" method="post">
      <h1 class="card__title"><span>Zippy</span> Couriers</h1>
      <h2 class="card__subtitle">Create your account</h2>
      <div class="grid grid-ai-c card__input">
        <label for="email">Email:</label>
        <custom-input
          class="card__input-elem"
          input-id="email"
          placeholder="Enter your email"
          autocomplete="email"
          type="email"
        />
      </div>
      <div class="grid grid-ai-c card__input">
        <label for="password">Password:</label>
        <custom-input
          class="card__input-elem"
          input-id="password"
          placeholder="Enter your password"
          type="password"
        />
      </div>
      <div class="grid grid-ai-c card__input">
        <label for="password">Confirm Password:</label>
        <custom-input
          class="card__input-elem"
          input-id="confirmPassword"
          placeholder="Enter your password"
          type="password"
        />
      </div>
      <custom-button
        class="card__button"
        button-value="Register"
        button-type="submit"
        width="100%"
        color="#FFFFFF"
        background="#57CC99"
      />
    </form>
  </main>
</template>

<style scoped lang="scss">
@use './index';
</style>
