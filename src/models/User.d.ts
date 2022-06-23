import { Ref } from 'vue'

export interface User {
  email: Ref<string>
  password: Ref<string>
  confirmPassword?: Ref<string>
}
