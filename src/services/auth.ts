import { AxiosResponse } from 'axios'
import moment, { Moment } from 'moment'

export class AuthService {
  constructor() {}

  static setLocalStorage(response: AxiosResponse): void {
    const expiresIn: Moment = moment().add(response.data.expiresIn)
    const jwtToken: string = response.data.token

    JSON.stringify(expiresIn.valueOf())
    localStorage.setItem('token', jwtToken)
    localStorage.setItem('expiresIn', JSON.stringify(expiresIn.valueOf()))
  }

  static getLocalStorage() {
    const jwtToken: string | null = localStorage.getItem('token')
    const expiresIn: string | null = localStorage.getItem('expiresIn')

    return {
      jwtToken,
      expiresIn,
    }
  }

  static isLoggedIn(): boolean {
    return moment().isBefore(this.getExpiration())
  }

  static isLoggedOut(): boolean {
    return !this.isLoggedIn()
  }

  static logout(): void {
    localStorage.removeItem('token')
    localStorage.removeItem('expiresIn')
  }

  static getExpiration(): Moment {
    const expires = JSON.parse(this.getLocalStorage().expiresIn as string)

    return moment(expires)
  }
}
