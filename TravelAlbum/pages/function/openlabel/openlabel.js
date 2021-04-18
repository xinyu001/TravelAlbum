var app = getApp()
const url=app.globalData.url
Page({
  data:{
  },
  onLoad: function (options) {
    this.setData({
      label:options.label
    })
    this.getimagesbylabel()
  },
  onShow:function(){
    this.getimagesbylabel()
  },
  getimagesbylabel:function () {
    var that=this
    wx.request({
      url:  url+'Get/ImagesByLabel',
      method:'GET',
      data: {
        label:that.data.label,
        userid:app.globalData.user.userid
      },
      success(res){
        that.setData({
          imagelist:res.data
        })
        wx.setNavigationBarTitle({
          title: that.data.label,
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