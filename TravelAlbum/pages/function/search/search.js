var app = getApp()
const url=app.globalData.url
Page({
  data:{
    key:'1'
  },
  search:function(){
    console.log("查询中")
    var that=this
    wx.request({
      url: url+'Get/Search',
      method:"GET",
      data:{
        userid:app.globalData.user.userid,
        ai:that.data.key,
        location:that.data.key,
        label:that.data.key
      },
      success(res){
        that.setData({
          imagelist:res.data
        })
        console.log(res.data)
      }
    })
  }
})