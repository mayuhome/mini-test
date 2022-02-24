import {config} from '../config.js';

const tips = {
    1: '出错了~~',
    1005: 'appkey无效',
    3000: '期刊不存在'
}

export class Http{
    requst(params){
        // url, data, method
        if(!params.method){
            params.method = 'get'
        }
        wx.request({
          url: config.api_base_url + params.url,
          method: params.method,
          data: params.data,
          header: {
            'content-type': 'application/json',
            'appkey': config.appkey
          },
          success: res => {
            let code = res.statusCode.toString();
            if(code.startsWith('2')){
                console.log('params:',params);
                params.success(res.data)
            }else{
                let error_code = res.data.error_code;
                this._show_error(error_code);
            }
          },
          fail: err => {
            this._show_error(1);
          }
        })
    }

    _show_error(error_code){
        if(!error_code){
            error_code = 1;
        }
        wx.showToast({
          title: tips[error_code],
          icon: 'none',
          duration: 2000
        })
    }
}

// module.exports = {
//     Http
// }