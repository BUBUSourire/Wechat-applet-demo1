//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        num: 0,
        banners: [],
        banner1:'http://ww1.sinaimg.cn/mw690/006ThXL5ly1fj7zx3w751j30u00dmgy3.jpg',
        banner2:'http://ww1.sinaimg.cn/mw690/006ThXL5ly1fj6ckx9tlwj30u00fqk8n.jpg',
        icons: [],
    },
    onLoad() {
        // banner
        wx.request({
            url: 'https://locally.uieee.com/slides',
            method: "GET",
            success: (res) => {
                console.log(res)
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
                console.log(res)
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
                console.log(res)
            }
        })
    }
})