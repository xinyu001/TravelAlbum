var app = getApp()
const url=app.globalData.url
Page({
  data:{
  },
  onLoad: function (options) {
    this.setData({
      ai:options.ai
    })
    this.getimagesbyai()
  },
  onShow:function(){
    this.getimagesbyai()
  },
  getimagesbyai:function () {
    var that=this
    wx.request({
      url:  url+'Get/ImagesByAI',
      method:'GET',
      data: {
        ai:that.data.ai,
        userid:app.globalData.user.userid
      },
      success(res){
        that.setData({
          imagelist:res.data
        })
        wx.setNavigationBarTitle({
          title: that.data.ai,
        })
        console.log(res.data)
      }
    }) 
  },
  openimage:function(item){
    console.log("imageid:"+item.target.id)
    wx.navigateTo({
      url: '/pages/function/openlocationimage/openlocationimage?imageid='+item.target.id
    })
  },
})