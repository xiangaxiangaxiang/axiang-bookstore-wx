import { Http } from '../util/http.js'

export class ClassicModel extends Http {
  getLatest(sCallback) {
    this.request({
      url: '/classic/latest',
      success: res => {
        sCallback(res)
      }
    })
  }
}