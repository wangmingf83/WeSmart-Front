import Cookies from 'js-cookie'
const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token, { expires: window.lwConfig.COOKIEEXPIRES })
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

// import { getQueryValue } from './index'
// export async function authRedirect() {
//   let auth_code = getQueryValue('auth_code')
//   if (!auth_code) {
//     return false
//   }
//   try {
//     let { wxQrLogin } = await import('@/smart/api/login')
//     let { data } = await wxQrLogin(auth_code)
//     setToken(data.access_token)
//     history.pushState({}, 'page 2', window.lwConfig.BASE_URL)
//     this.$router.replace(window.lwConfig.BASE_URL)
//   } catch (error) {
//     console.log(error)
//   }
// }
