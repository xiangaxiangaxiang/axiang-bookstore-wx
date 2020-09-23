import {config} from '../config.js'

const tips = {
  1: '抱歉，出现错误了。',
  10006: '验证过期'
}

export class Http {
  request(params) {
    if (!params.method) {
      params.method = 'GET'
    }
    wx.request({
      url: config.apiBaseUrl + params.url,
      data: params.data,
      header: {
        'content-type': 'application/json',
        'appkey': config.appKey
      },
      method: params.method,
      success: res => {
        const code = res.statusCode.toString()
        if (code.startsWith('2')) {
          params.success && params.success(res.data)
        } else {
          const errorCode = res.data.error_code
          this._showError(errorCode)
        }
      },
      fail: err => {
        this._showError(1)
      }
    })
  }

  _showError(errorCode) {
    if (!errorCode) {
      errorCode = 1
    }
    wx.showToast({
      title: tips[errorCode],
      icon: 'none',
      duration: 2000
    })
  }
}