import { config } from '../config.js'

const tips = {
    1: '抱歉，出现了一个错误',
    1005:'appkey无效，请前往www.7yue.pro申请',
    3000:'期刊不存在'
}
// # 解构
export class Http {
    request({url,data={},method='GET'}){
        return new Promise((resolve, reject)=>{
            this._request(url,resolve,reject,data, method)
        })
    }
    _request(url,resolve, reject, data={}, method='GET'){
        wx.request({
            url: config.apiBaseUrl + url,
            method:method,
            data:data,
            header:{
                'content-type':'application/json',
                'appkey': config.appKey
            },
            success:(res)=>{
                const code = res.statusCode.toString()
                if (code.startsWith('2')){
                    resolve(res.data)
                }
                else{
                    reject()
                    const error_code = res.data.error_code
                    this._show_error(error_code)
                }
            },
            fail:(err)=>{
                reject()
                this._show_error(1)
            }
        })

    }

    _show_error(error_code){
        if(!error_code){
            error_code = 1
        }
        const tip = tips[error_code]
        wx.showToast({
            title: tip?tip:tips[1], 
            icon:'none',
            duration:2000
        }) 
    }

}


















