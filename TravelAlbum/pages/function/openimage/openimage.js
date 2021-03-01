var app = getApp()
const url=app.globalData.url
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        imageid:options.imageid,
        albumid:options.albumid
      })
      console.log(this.data.imageid)
      this.getimage()
  },
  getimage:function(){
    var that=this
    wx.request({
      url: url+'Get/Image',
      method:'GET',
      data: {
        imageid:that.data.imageid
      },
      success(res){
        that.setData({
          image:res.data
        })
        console.log(res.data)
      }
    }) 
  },

  onUnload: function () {

  },
  deleteimage:function(){
    var that=this
    wx.request({
      url: url+'Set/DeleteImage',
      method:'GET',
      data: {
        imageid:that.data.image.imageid
      },
      success(res){
        console.log(res.data)
        wx.navigateBack({
          delta: 0,
        })
      }
    })
  },
  doloadimage:function(){
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success () {
              wx.saveImageToPhotosAlbum({
                filePath: that.data.image.path,
                success(){
                  console.log("111")
                }
              })
            }
          })
        }
      }
    })
   
  },
  setimage:function(){
    wx.navigateTo({
      url: '/pages/function/setimage/setimage?imageid='+this.data.imageid,
    })
  },
  setcoverimage:function(){
    var that=this
    wx.request({
      url: url+"Set/CoverImage",
      method:'GET',
      data:{
        albumid:that.data.albumid,
        coverimagepath:that.data.image.path
      },
      success(){
        console.log('设置成功')
      }
    })
  }
})