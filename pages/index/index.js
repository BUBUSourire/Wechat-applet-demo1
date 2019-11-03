//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        num: 0,
        banners: [],
        icons: [],
    },
    onLoad() {
        // banner
        wx.request({
            url: 'https://locally.uieee.com/slides',
            method: "GET",
            success: (res) => {
                this.setData({
                    banners: res.data
                })
            }
        })

        // 导航
        wx.request({
            url: 'https://locally.uieee.com/categories',
            method: "GET",
            success: (res) => {
                this.setData({
                    icons: res.data,
                })
            }
        })

        // 商铺信息
        wx.request({
            url: 'https://locally.uieee.com/categories/1/shops',
            header: {
                'content-type': 'application/json'
            },
            method: "GET",
            success:(res)=>{
                // console.log(res)
            }
        })
    }
})