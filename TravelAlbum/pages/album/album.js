var app = getApp()
const url=app.globalData.url
// const path="cloud://test1-2g8apckr01622f46.7465-test1-2g8apckr01622f46-1304983618"
Page({
  data:{
    "albumlist":[]
  },
  onLoad(){
    this.getalbums()

  },
  onShow(){
    this.getalbums()
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
      url:  url+'Get/User',
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
        userid:app.globalData.user.userid
      },
      success(res){
        that.setData({
          albumlist:res.data
        })
        console.log(res.data)
      }
    }) 
  },
  openalbum:function(item){
    console.log(item.target.id)
    wx.navigateTo({
      url: '/pages/function/openalbum/openalbum?albumid='+item.target.id
    })
  },
  newalbum:function(){
    wx.navigateTo({
      url: '/pages/function/newalbum/newalbum'
    })
  }

})