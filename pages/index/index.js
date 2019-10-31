//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        num: 0,
        items: []
    },
    onLoad() {
        wx.request({
            url: 'https://locally.uieee.com/slides',
            header: {
                'content-type': 'application/json'
            },
            method: "GET",
            success: (res) => {
                console.log(res)
                // this.data.items = res.data
                /*
                this.setData两个功能：
                1.更新数据
                2.更新视图
                */
                this.setData({
                    items: res.data
                })
            }
        })
    }
})