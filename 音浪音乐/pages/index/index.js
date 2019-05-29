//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    img: [{
      img: "http://129.28.177.240:3000/images/lun_03.jpg"
    }, {
        img: "http://129.28.177.240:3000/images/lun_03.jpg"
    }, {
        img: "http://129.28.177.240:3000/images/lun_03.jpg"
    }],
    dl: [{
      img: "http://129.28.177.240:3000/images/dl001_03.jpg",
      name: "分类"
    }, {
        img: "http://129.28.177.240:3000/images/dl_05.jpg",
      name: "歌手"
    }, {
        img: "http://129.28.177.240:3000/images/dl_07.jpg",
      name: "每日推荐"
    }, {
        img: "http://129.28.177.240:3000/images/dl_09.jpg",
      name: "排行榜"
    }],
    tdl: [{
      img: "http://129.28.177.240:3000/images/tdl_03.jpg",
      name: "AI设计师会做网页"
    }, {
        img: "http://129.28.177.240:3000/images/tdl_05.jpg",
      name: "生命科学"
    }, {
        img: "http://129.28.177.240:3000/images/tdl_03.jpg",
      name: "这个你猜"
    }, {
        img: "http://129.28.177.240:3000/images/tdl_05.jpg",
      name: "这个我不会"
    }, {
        img: "http://129.28.177.240:3000/images/tdl_03.jpg",
      name: "杜鹏杰傻不傻"
    }],
    tbook: [{
      img: "http://129.28.177.240:3000/images/tar_03.jpg",
      name: "《杜鹏杰传》",
      texte: "听西方最畅销的杜鹏杰传",
      imgs: "http://129.28.177.240:3000/images/timgs_06.jpg",
      size: "3003.1万",
      imgs2: "http://129.28.177.240:3000/images/timgs_03.jpg",
      ji: "82集"
    }, {
        img: "http://129.28.177.240:3000/images/tar_10.jpg",
      name: "《鬼谷子》",
      texte: "中国智慧第一书，一生必看",
        imgs: "http://129.28.177.240:3000/images/timgs_06.jpg",
      size: "2050.3万",
        imgs2: "http://129.28.177.240:3000/images/timgs_03.jpg",
      ji: "61集"
    }, {
        img: "http://129.28.177.240:3000/images/tar_12.jpg",
      name: "《成为高情商的人》",
      texte: "舒服做自己，融洽与别人相处",
        imgs: "http://129.28.177.240:3000/images/timgs_06.jpg",
      size: "729万",
        imgs2: "http://129.28.177.240:3000/images/timgs_03.jpg",
      ji: "124集"
    }],
    cai: [{
      img: "http://129.28.177.240:3000/images/cai_03.jpg",
      name: "失恋解药"
    }, {
        img: "http://129.28.177.240:3000/images/cai_05.jpg",
      name: "女生最简单"
    }, {
        img: "http://129.28.177.240:3000/images/cai_07.jpg",
      name: "古典经典乐"
    }, {
        img: "http://129.28.177.240:3000/images/cai_12.jpg",
      name: "校园青葱"
    }, {
        img: "http://129.28.177.240:3000/images/cai_13.jpg",
      name: "华宇经典"
    }, {
        img: "http://129.28.177.240:3000/images/cai_14.jpg",
      name: "民谣日记"
    }],
    dispaly:true
  },
  tankuang:function(){
    this.setData({
      dispaly:false
    })
  },
  paihang:function(e){
    let name = e.currentTarget.dataset.item
    this.data.dl.map((item,index)=>{
      if(name==3){
        wx.navigateTo({
          url: '/pages/pai/pai',
        })
      }
    })
    
  },
  yincang:function(){
    this.setData({
      dispaly: true
    })
  },
  soso:function(){
      wx.navigateTo({
        url: '/pages/soso/soso',
      })
  },
  //事件处理函数
  bindViewTap: function() {

  },
  onLoad: function() {

  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})