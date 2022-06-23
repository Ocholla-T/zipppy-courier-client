<script setup lang="ts">
import CustomInput from '@ui/Input/index.vue'
import CustomButton from '@ui/Button/index.vue'
import { User } from 'models/User'
import { ref } from 'vue'

const user: User = {
  email: ref(''),
  password: ref(''),
}
</script>

<template>
  <main class="login flex flex-ai-c flex-jc-c">
    <form class="card flex flex-fd-c flex-ai-c flex-jc-c">
      <h1 class="card__title"><span>Zippy</span> Couriers</h1>
      <h2 class="card__subtitle">Welcome back, &#128521;</h2>
      <div class="grid grid-ai-c card__input">
        <label for="email">Username</label>
        <custom-input
          class="card__input-elem"
          input-id="email"
          placeholder="Enter your email"
          autocomplete="email"
          type="email"
          v-model="user.email.value"
        />
      </div>
      <div class="grid grid-ai-c card__input">
        <label for="email">Password</label>
        <custom-input
          class="card__input-elem"
          input-id="password"
          placeholder="Enter your password"
          type="password"
          v-model="user.password.value"
        />
      </div>
      <custom-button
        class="card__button"
        button-value="Login"
        button-type="submit"
        width="100%"
        color="#FFFFFF"
        background="#57cc99"
      />
    </form>
  </main>
</template>

<style scoped lang="scss">
@use './index.scss';
</style>
