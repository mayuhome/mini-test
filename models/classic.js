import {Http} from '../util/http';
export class ClassicModel extends Http{
   async getLatest(){
      return this.requst({
            url: 'classic/latest',
            success: (res) => {
                console.log('res:',res);
                return res
            }
        })
    }
}