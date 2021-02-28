var app = getApp()
const url=app.globalData.url
Page({
  data:{
  "imagelist":[]
  },
  onLoad: function (options) {
    this.setData({
      albumid:options.albumid
    })
    this.getalbum()
    var that=this
    wx.request({
     
      url: url+'Get/Images',
      method:'GET',
      data:{
        albumid:that.data.albumid
      },
      success(res){
        that.setData({
          imagelist:res.data
        })
        console.log(res.data)
      }
    })
  },
  getalbum:function () {
    var that=this
    wx.request({
      url:  url+'Get/Album',
      method:'GET',
      data: {
        albumid:that.data.albumid
      },
      success(res){
        that.setData({
          album:res.data
        })
        console.log(res.data)
      }
    }) 
  },
  newimage:function(){
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], 
      sourceType: ['album', 'camera'], 
      success: function (res) {
        console.log("返回的路径",res)
        that.setData({
        ImageTemPath: res.tempFilePaths[0],       
        })
 var code = that.data.ImageTemPath.match(/tmp\/(.*)/)[1];
var imagename=code
//console.log(code)
        wx.cloud.init()
        wx.cloud.uploadFile({
        // 上传至云端的路径
          cloudPath:  "images/photos/"+app.globalData.user.userid+'/' + new Date().getTime() +"-"+ Math.floor(Math.random() * 1000)+imagename,
          filePath: that.data.ImageTemPath, // 小程序临时文件路径
          success: res => {
            // 返回文件 ID
            console.log(res.fileID)
            that.setData({
              fileID:res.fileID,
              ImageName:imagename
            })
            wx.request({
              url:  url+'Upload/Image',
              method:'GET',
              data:{
                albumid:that.data.albumid,
                imagename:that.data.ImageName,
                path:that.data.fileID,
                ai:"ai测试"
              },
              success(){
                console.log("上传成功")
              }
            })
          },
          fail: console.error
        })

      }
    })

  },
  openimage:function(item){
    console.log("imageid:"+item.target.id)
    wx.navigateTo({
      url: '/pages/function/openimage/openimage?imageid='+item.target.id+'&albumid='+this.data.albumid
    })
  },
  deletealbum:function(){
    var that=this
    wx.showModal({
      title: '提示',
      content: '确定删除？',
      success: function (res) {
        if (res.confirm) {//这里是点击了确定以后
          console.log('用户点击确定')  
          wx.request({
            url:  url+'Set/DeleteAlbum',
            method:'GET',
            data: {
              albumid:that.data.albumid
            },
            success(res){
              console.log(res.data)
            }
          })
        } else {//这里是点击了取消以后
          console.log('用户点击取消')
        }}
    })
   
  },
  albumsetting:function(){
    wx.navigateTo({
      url: '/pages/function/albumsetting/albumsetting?albumid='+this.data.albumid,
    })
  }
   
})