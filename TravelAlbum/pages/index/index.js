// index.js
// 获取应用实例
var app = getApp()
const url=app.globalData.url
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    code:"",
    openid:"",
    user:""

  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getcode:function(){
    var that=this;
    wx.login({
      success (res) {
        that.setData({
          code: res.code
        })
        console.log("code:"+that.data.code)
        that.getopenid()
        
      }
    })

  },
  getopenid:function(){
    var that=this
    wx.request({
      url: url+'Get/OpenId',
      method:'GET',
      data: {
        code:this.data.code
      },
      success(res){
        that.setData({
          openid: res.data.openid
        })
        console.log("openid:"+res.data.openid)
      }
  })
  },
  getuser:function(){
    var that=this
    wx.request({
      url: url+'Get/User',
      method:'GET',
      data: {
        openid:that.data.openid
      },
      success(res){
        that.setData({
          user:res.data
        })
        console.log(res.data)
      }
    }) 
  },
  getalbums:function () {
    var that=this
    wx.request({
      url: url+'Get/Albums',
      method:'GET',
      data: {
        userid:that.data.user.userid
      },
      success(res){
        that.setData({
          cloudablumlist:res.data
        })
        console.log(res.data)
      }
    }) 
  }

})
