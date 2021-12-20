import axios, { AxiosRequestConfig } from 'axios';
import { ElMessageBox, ElMessage  } from "element-plus";
// import store from '@/store'
import { getToken, getStorageToken } from "./auth.js";
import MD5 from 'crypto-js/md5';

// create an axios instance
const baseURL = process.env.VUE_APP_ENV === 'mock' ? `${process.env.VUE_APP_BASE_API}-${process.env.VUE_APP_ENV}` : process.env.VUE_APP_BASE_API

const service = axios.create({
  baseURL: baseURL, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 30000, // request timeout
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'spathv': getStorageToken('serveChange') || ''
  }
})
interface services {
  service: any
}
const consoleSegmentation = () => {
  console.info('%c' + '='.repeat(100), 'font-size:12px;color:blue;')
}
const setMd5Key = (config: AxiosRequestConfig<any>) => {
  const baseURL = config.baseURL || ''
  const url = config.url || ''
  const sign = !/^\/errormsg/.test(url)
  const locationUrl = location.href
  const data = config.data ? JSON.stringify(config.data) : ''
  const isList = config.data && config.data.pageSize
  const uniqueStr = `${locationUrl}|${baseURL}${url}|${data}`
  const uniqueUrl = config.uniqueId || `${locationUrl}|${baseURL}${url}`
  const uniqueStrMd5 = MD5(uniqueStr).toString()
  const uniqueUrlMd5 = MD5(uniqueUrl).toString()
  const uniqueKey = uniqueStrMd5 + '_' + uniqueUrlMd5
  if (!service.noRepeat[uniqueKey] && isList) {
    for (const i in service.noRepeat) {
      if (new RegExp(uniqueUrlMd5).test(i)) {
        service.noRepeat[i]('cancelReq')
        delete service.noRepeat[i]
      }
    }
  }
  return { uniqueKey, uniqueStr, sign }
}
const CancelToken = axios.CancelToken
const statusCode = {
  401: '认证失败,请重新登录',
  402: 'Token非法,请重新授权',
  405: 'Token已失效,请重新授权',
  406: '用户信息不存在,请重新登录',
  407: '已在其他地方登录或已下线,请重新登录'
}
service.confirm = null
service.noRepeat = {}
service.interceptors.request.use(
  config => {
    const hasToken = getToken('token')
    if (hasToken) {
      const token = getStorageToken('token')
      config.headers['Authorization'] = `Bearer ${token}`
    }
    const { uniqueKey, uniqueStr, sign } = setMd5Key(config)
    config.uniqueKey = uniqueKey
    config.cancelToken = new CancelToken((c) => {
      if (service.noRepeat[uniqueKey]) {
        const uniqueArr = uniqueStr.split('|')
        const str = `重复提交: \nurl:${uniqueArr[0]} \napi: ${uniqueArr[1]} \nparams: ${uniqueArr[2]}`
        consoleSegmentation()
        console.info('%c' + str, 'font-size:12px;color:#1890ff;')
        consoleSegmentation()
        c('重复提交')
      } else {
        if (sign) { service.noRepeat[uniqueKey] = c }
      }
    })

    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    const status = response.status
    const uniqueKey = response.config.uniqueKey
    Reflect.deleteProperty(service.noRepeat, uniqueKey)
    if (![200, undefined].includes(res.code) && !response.config.raw || status !== 200) {
      if (/^40[1,2,5,6,7]$/.test(res.code)) {
        // to re-login
        if (/\/userCenter\/sysUser\/currentUser\/info$/.test(response.config.url)) {
          store.dispatch('user/reAuth', res.code)
          service.confirm = true
        }
        if (!service.confirm) {
          service.confirm = ElMessageBox.confirm(statusCode[res.code], '提示', {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            service.confirm = null
            store.dispatch('user/reAuth', res.code)
          }).catch(action => {
            service.confirm = null
          })
        }
        return Promise.reject(new Error(res.code || 'Error'))
      } else if (/^40[3]$/.test(res.code)) {
        ElMessageBox.alert(`您无权限访问该页面/操作该内容, 请联系部门负责人授权.`, '提示', {
          confirmButtonText: '确定',
          callback: action => {
            location.href = '/'
          }
        })
      } else {
        ElMessage({
          message: res.message || 'Error',
          type: 'error',
          duration: 3 * 1000
        })
        return Promise.reject(new Error(res.message || 'Error'))
      }
    } else {
      if (response.config.responseType === 'arraybuffer') {
        return response
      }
      if (response.config.raw) {
        return response
      }
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    if (!/重复提交|cancelReq/.test(error.toString())) {
      ElMessage({
        message: error.message,
        type: 'error',
        duration: 3 * 1000
      })
      service.noRepeat = {}
    }
    return Promise.reject(error)
  }
)
export default service
