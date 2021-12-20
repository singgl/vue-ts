import Cookies from 'js-cookie'

const token = 'token'

export function getToken(name = token) {
  return Cookies.get(name)
}
export function getStorageToken(name = token) {
  return localStorage.getItem(name)
}
export function setToken({ name = token, value, domain }) {
  return Cookies.set(name, value, { domain })
}
export function setStorageToken({ name = token, value }) {
  return localStorage.setItem(name, value)
}
export function removeToken(name = token) {
  return Cookies.remove(name)
}
export function removeStorageToken(name = token) {
  return localStorage.removeItem(name)
}
export function setCookie(name, value, expires, path = '/') {
  return Cookies.set(name, value, { expires, path })
}
export function getCache(name = '') {
  const cache = JSON.parse(getStorageToken('cache')) || {}
  return cache[name]
}
export function setCache({ name = '', value }) {
  const cache = JSON.parse(getStorageToken('cache')) || {}
  cache[name] = value
  return localStorage.setItem('cache', JSON.stringify(cache))
}
export function removeCache(name = '') {
  const cache = JSON.parse(getStorageToken('cache')) || {}
  delete cache[name]
  return localStorage.setItem('cache', JSON.stringify(cache))
}
export function removeCacheAll(name = 'cache') {
  return localStorage.removeItem(name)
}

