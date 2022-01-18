/*
 * @Description: utils
 * @Autor: juest
 * @Date: 2021-12-20 13:50:38
 * @LastEditors: juest
 * @LastEditTime: 2022-01-14 10:24:59
 */
export function isExternal(path: string): boolean {
  return /^(https?:|mailto:|tel:)/.test(path);
}
