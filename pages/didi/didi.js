// pages/didi/didi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      activeIndex:0
  },

    into_page_user:function(){
    wx.navigateTo({
        url: '../didi_user/user',
    })
    },
    into_page_more:function(){
        wx.navigateTo({
            url: '../didi_more/more',
        })
    },

    changecolor: function(e){
    console.log(e);
    this.setData({
        activeIndex : e.target.dataset.index
    })
         

    console.log(this.data);
    },
   
    daijia:function(e){
        console.log(e);
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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