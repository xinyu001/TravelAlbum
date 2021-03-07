var app = getApp()
const url=app.globalData.url
Page({
  data:{
  },
  onLoad: function (options) {
    this.setData({
      location:options.location
    })
    this.getimagesbylocation()
  },
  onShow:function(){
    this.getimagesbylocation()
  },
  getimagesbylocation:function () {
    var that=this
    wx.request({
      url:  url+'Get/ImagesByLocation',
      method:'GET',
      data: {
        location:that.data.location,
        userid:app.globalData.user.userid
      },
      success(res){
        that.setData({
          imagelist:res.data
        })
        wx.setNavigationBarTitle({
          title: that.data.location,
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