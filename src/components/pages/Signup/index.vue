<script setup lang="ts">
/*
 *-----------------------------------------------------------------------------
 *COMPONENTS
 *------------------------------------------------------------------------------
 */
import CustomButton from '@components/ui/Button/index.vue'
import CustomInput from '@components/ui/Input/index.vue'
import Alert from '@ui/Alert/index.vue'

/*
 *-----------------------------------------------------------------------------
 *DEPENDENCIES
 *------------------------------------------------------------------------------
 */
import { User } from 'models/User'
import { Ref, ref } from 'vue'
import { useRegister } from '@store/auth/register'
import { Router, useRouter } from 'vue-router'

const router: Router = useRouter()

const user: User = {
  email: ref(''),
  password: ref(''),
  confirmPassword: ref(''),
}
const errors: Ref<any[]> = ref([])
const isSuccess: Ref<boolean> = ref(true)
const isOpen: Ref<boolean> = ref(false)

const { registerUser } = useRegister()

async function register(): Promise<void> {
  try {
    await registerUser(user)
    /*
     *resets form input to empty string
     */
    user.email.value = user.password.value = (user.confirmPassword as Ref<string>).value = ''
    goToLoginPage()
  } catch (error: any) {
    errors.value.push(error.errors)
    isSuccess.value = error.success
    isOpen.value = true
  }
}

function goToLoginPage(): void {
  router.push('/auth/login')
}

function close(index: number): void {
  errors.value[0].splice(index, 1)
}
</script>

<template>
  <main class="flex flex-ai-c flex-jc-c">
    <form
      ref="form"
      class="card flex flex-fd-c flex-ai-c flex-jc-c"
      method="post"
      @submit.prevent="register"
    >
      <h1 class="card__title"><span>Zippy</span> Couriers</h1>
      <h2 class="card__subtitle">Create your account</h2>
      <div class="card__errors" v-if="errors" v-for="(error, index) in errors[0]" :key="index">
        <alert :text="error.message" :is-success="isSuccess" @click="close(index)" />
      </div>
      <div class="grid grid-ai-c card__input">
        <label for="email">Email:</label>
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
        <label for="password">Password:</label>
        <custom-input
          class="card__input-elem"
          input-id="password"
          placeholder="Enter your password"
          type="password"
          autocomplete="new-password"
          v-model="user.password.value"
        />
      </div>
      <div class="grid grid-ai-c card__input">
        <label for="password">Confirm Password:</label>
        <custom-input
          class="card__input-elem"
          input-id="confirmPassword"
          placeholder="Confirm your password"
          type="password"
          autocomplete="new-password"
          v-model="(user.confirmPassword as Ref<string>).value"
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
      <custom-button
        button-value="Already a user, sign in"
        button-type="button"
        width="100%"
        color="#57CC99"
        @click="goToLoginPage"
      />
    </form>
  </main>
</template>

<style scoped lang="scss">
@use './index';
</style>
