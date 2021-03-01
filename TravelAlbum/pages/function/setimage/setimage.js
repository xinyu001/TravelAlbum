var app = getApp()
const url=app.globalData.url
Page({
  data: {
    ai:'',
    location:'',
    label:''
  },

  onLoad: function (options) {
      this.setData({
        imageid:options.imageid
      })
      this.getimage()
      
  },

  updateimage:function(){
    var that=this
    wx.request({
      url: url+'Set/UpdateImage',
      method:'GET',
      data:{
       imageid: that.data.imageid,
       ai:that.data.ai,
       label:that.data.label,
       location:that.data.location

      },
      success(){
        console.log('修改图片成功')
        wx.navigateBack({
          delta: 0,
        })
      }
    })

  },
  getimage:function () {
    var that=this
    wx.request({
      url:  url+'Get/Image',
      method:'GET',
      data: {
        imageid:that.data.imageid
      },
      success(res){
        that.setData({
          image:res.data,
          ai:res.data.ai,
          label:res.data.label,
          location:res.data.location
        })
      }
    }) 
  }
})