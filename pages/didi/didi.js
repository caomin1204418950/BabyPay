// pages/didi/didi.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        item_bottom: 0,
        activeIndex: 0,
        longitude: '',
        latitude: '',
        markers: [],
        adress: '请输入您的位置',
        goal: '您要去哪儿',
        times: '现在出发'

    },

    into_page_user: function () {
        wx.navigateTo({
            url: '../didi_user/user',
        })
    },
    into_page_more: function () {
        wx.navigateTo({
            url: '../didi_more/more',
        })
    },
    chooselocation: function () {
        var that = this;
        wx.chooseLocation({


            success: function (res) {
                that.setData({
                    adress: res.name
                })
            },
        })

    },

    choosegoal: function () {
        var that = this;
        wx.chooseLocation({


            success: function (res) {
                that.setData({
                    goal: res.name
                })
                console.log(that.data.goal);
                if (that.data.adress == "请输入您的位置") {
                    that.setData({
                        goal: "您要去哪儿"
                    })
                    wx.showModal({
                        title: '提示',
                        content: '请先输入始发地',
                        success: function (res) {
                            if (res.confirm) {
                                console.log('用户点击确定')
                            } else {
                                console.log('用户点击取消')
                            }

                        }
                    })

                }

                if (that.data.goal != "您要去哪儿" && that.data.adress != "请输入您的位置") {
                    wx.navigateTo({
                        url: '../didi_pay/pay',
                    })
                }
            },


        })

    },
    changecolor: function (e) {

        this.setData({
            activeIndex: e.target.dataset.index
        })

        if (this.data.activeIndex != 1) {

            this.setData({
                item_bottom: 0
            })
        }

    },


    change_bottom_item: function (e) {

        this.setData({
            item_bottom: e.currentTarget.dataset.index
        })


    },
    changeTime: function (e) {

        this.setData({
            times: e.detail.value

        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        wx.getLocation({
            type: 'gcj02',
            success: function (res) {
                console.log(res);

                that.setData({

                    longitude: res.longitude,
                    latitude: res.latitude,
                    markers: [{
                        id: "1",
                        latitude: res.latitude,
                        longitude: res.longitude,
                        iconPath: "../../images/location.png",
                        title: "哪里"

                    }]
                })


                console.log(that.data.markers);
            },

        })

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