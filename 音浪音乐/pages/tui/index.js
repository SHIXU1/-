// pages/tui/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      list:[],
      dispaly:true,
      value:"",
      data:[]
  },
  change:function(e){
    this.setData({
      dispaly:false,
      value: e.detail.value
    })
    wx.request({
      url: 'https://api.apiopen.top/likePoetry?name='+this.data.value,
      success:(res)=>{
        this.setData({
          data:res.data.result
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://api.apiopen.top/getSongPoetry?page=1&count=20',
      success:(res)=>{
        this.setData({
          list: res.data.result
        })
        console.log(this.data.list)
      }
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