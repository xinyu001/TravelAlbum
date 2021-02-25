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
        imageid:options.imageid
      })
      console.log(this.data.imageid)
      this.getimage()
  },
  getimage:function(){
    var that=this
    wx.request({
      url: 'http://localhost:8080/Get/Image',
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  deleteimage:function(){
    var that=this
    wx.request({
      url: 'http://localhost:8080/Set/DeleteImage',
      method:'GET',
      data: {
        imageid:that.data.image.imageid
      },
      success(res){
        console.log(res.data)
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
   
  }
})