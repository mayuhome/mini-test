// pages/classic.js
// import { Http } from '../../util/http'
import { ClassicModel} from '../../models/classic';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        baseUrl: 'http://bl.talelin.com/v1'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // const http = new Http();
        let classic = new ClassicModel();
        classic.getLatest().then(res => {
            console.log('promise:', res);
        });
        // http.requst({
        //     url: '/classic/latest',
        //     success: res => {
        //         console.log('res:',res);
        //     }
        // });
        // console.log(this.data.baseUrl + '/classic/latest');
        // wx.request({
        //   url: this.data.baseUrl + '/classic/latest',
        //   header: {
        //       appkey: 'UhkhraKdvseYkHZG'
        //   },
        //   success: res => {
        //       console.log('res:',res);
        //   },
        // })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})