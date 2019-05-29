// pages/soso/soso.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    li: [{
      name: "华晨宇",
    }, {
      name: "杜鹏杰",
    }, {
      name: "赵少康",
    }, {
      name: "智障",
    }, {
      name: "伪装",
    }, {
      name: "卡卡",
    }, {
      name: "方法",
    }],
    dispaly:true,
    value:"",
    data:[],
    list:""
  },
  change:function(e){
     this.setData({
       dispaly:false
     })
      console.log(e.detail.value)
      wx.request({
        url: 'https://api.apiopen.top/searchMusic?name='+e.detail.value,
        success:(res)=>{
          this.setData({
            data: res.data.result
          })
          console.log(this.data.data)
        }
      })
  },
  click:function(e){
    this.setData({
      list: e.currentTarget.dataset.item
    })
    let data=JSON.stringify(this.data.list)
    wx.navigateTo({
      url: '/pages/bofang/bof'
    })
    wx.setStorage({
      key: 'name',
      data: data,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})