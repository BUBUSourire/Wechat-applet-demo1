// pages/shopList/shopList.js
Page({
    data: {
        shopLists: [],
        pageIndex: 0,
        pageSize: 20,
        catId: 1,
        hasMore: true,
        hiddenEnd: true,
        hiddenLoad: false
    },

    //加载更多
    loadMore() {
        if (!this.data.hasMore && this.data.shopLists.length>0) {
            this.setData({
                hiddenEnd: false,
                hiddenLoad: true
            })
        }

        wx.request({
            data: {
                _limit: this.data.pageSize, //约束每页请求的数据
                _page: ++this.data.pageIndex
            },
            url: 'https://locally.uieee.com/categories/' + this.data.catId + '/shops',
            method: "GET",
            success: (res) => {
                var newList = this.data.shopLists.concat(res.data)
                var count = parseInt(res.header['X-Total-Count'])
                var flag = this.data.pageIndex * this.data.pageSize < count;
                this.setData({
                    shopLists: newList,
                    hasMore: flag,
                })
            }
        })
    },
    onLoad: function(options) {
        if (options.title) {
            wx.setNavigationBarTitle({
                title: options.title,
            })
        }

        this.setData({
            catId: options.cat,
         
        })
        this.loadMore()
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {
        this.setData({
            shopLists:[],
            pageIndex:0,
            hasMore:true
        })
        this.loadMore()
        wx.stopPullDownRefresh()
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {
        this.loadMore()
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})