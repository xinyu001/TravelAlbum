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
       wx.cloud.init()
      this.setData({
        imageid:options.imageid,

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
  setimage:function(){
    wx.navigateTo({
      url: '/pages/function/setimage/setimage?imageid='+this.data.imageid,
    })
  },

  downloadimage:function(){
   var that=this
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
          })
        }
      }
    })
    wx.cloud.downloadFile({
      fileID:this.data.image.path,
      success:res=>{
        console.log("下载成功")
        that.saveimage(res.tempFilePath)
      }
    })
  },
  saveimage(imgurl){
    wx.saveImageToPhotosAlbum({
      filePath: imgurl,
    success(){
        console.log("保存成功")
        wx.showToast({
          title: '下载成功',
          icon: 'success',
          duration: 1000//持续的时间
        })
      },
      fail(){
        console.log("保存失败")
      }

    })
  }
})