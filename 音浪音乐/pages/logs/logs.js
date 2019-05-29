
Page({
  data: {
    list:[],
    page:5

  },
  onLoad: function () {
    wx.request({
      url: 'https://api.apiopen.top/getJoke?page=1&count=' + this.data.page +'&type=video',
      success:(res)=>{
        this.setData({
          list:res.data.result
        })
        console.log(this.data.list)
      }
    })
  },
  onReachBottom: function () {
    wx.request({
      url: 'https://api.apiopen.top/getJoke?page=1&count=' + this.data.page +5 + '&type=video',
      success: (res) => {
        this.setData({
          list: res.data.result
        })
        console.log(this.data.list)
      }
    })
  },
})
