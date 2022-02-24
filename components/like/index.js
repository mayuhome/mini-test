// components/like/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        like: {
            type: Boolean,
            value: false,
            observer: function(){

            }
        },
        count: Number
    },

    /**
     * 组件的初始数据
     */
    data: {
        // count: 99,
        // like: true,
        yesSrc: 'images/like.png',
        noSrc: './images/like@dis.png'
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onLike: function(event){
            let like = !this.properties.like
            console.log(event);
            this.setData({
                like: like,
                count: like?this.properties.count+1:this.properties.count-1
            })
        }
    }
})
