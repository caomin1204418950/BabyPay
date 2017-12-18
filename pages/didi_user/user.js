// pages/didi_user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      change_data:0,
      text:'',
      cleardata:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  tel_clear:function(){
      this.setData({
          change_data: 0,
          cleardata: 0,
          text: ''
      })
  },
  get_value:function(e){
   console.log(e.detail.value.length);
   if (e.detail.value.length!=0){
       this.setData({
           cleardata: 1
       })
   }else{
       this.setData({
           cleardata: 0
       })
   };
    
   if (e.detail.value.length < 11) {
       this.setData({
           change_data: 0
       })
   }
   if (e.detail.value.length == 11){
       this.setData({
           change_data: 1
       })
   }
   if (e.detail.value.length>11){
       this.setData({
           change_data: 0
       })
       wx.showModal({
           title: '提示',
           content: '请输入正确的手机号',
           success: function (res) {
               if (res.confirm) {
                   console.log('用户点击确定')
               } else {
                   console.log('用户点击取消')
               }

           }
       })
   }
  },
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