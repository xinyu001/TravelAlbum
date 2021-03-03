var app = getApp()
const url=app.globalData.url
const path="cloud://test1-2g8apckr01622f46.7465-test1-2g8apckr01622f46-1304983618"
Page({  
  data:{
    "albumlist":[],
    "ImageList":[
      {
        "imagePath":path + "/images/photos/location/shanghai.jpeg"
      }
      ,
      {
        "imagePath":path + "/images/photos/location/nanjing.jpeg"
      },
      {
        "imagePath":path + "/images/photos/location/beijing.jpeg"
      }
    ]
  },
  onLoad(){
    this.getsharealbum()
    this.getcode()
    // var that=this
    // setTimeout(function() {
    //   that.getuser()
    // }, 1000) 
    
  },
  onShow(){this.getsharealbum()},
  totest: function() {
    wx.navigateTo({
      url: '/pages/index/index'
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
var imagetype=code
//console.log(code)
        wx.cloud.init()
        wx.cloud.uploadFile({
        // 上传至云端的路径
          cloudPath:  "images/photos/"+app.globalData.userid+'/' + new Date().getTime() +"-"+ Math.floor(Math.random() * 1000)+imagetype,
          filePath: that.data.ImageTemPath, // 小程序临时文件路径
          success: res => {
            // 返回文件 ID
            console.log(res.fileID)
            that.setData({
              fileID:res.fileID
            })
          },
          fail: console.error
        })

      }
    })

  },
  openablum: function() {
    wx.navigateTo({
      url: '/pages/function/openalbum/openablum'
    })
  },
  tosearch:function(){
    wx.navigateTo({
      url: '/pages/function/search/search'
    })
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
        that.getuser()
      }
  })
  },
  getuser:function(){
    var that=this
    wx.request({
      url:url+'Get/User',
      method:'GET',
      data: {
        openid:that.data.openid
      },
      success(res){
        that.setData({
          user:res.data
        })
        app.globalData.user=that.data.user
       // app.globalData.user=that.data.user  //有问题
      //  console.log("全局变量userid:"+app.globalData.userid)
        //      console.log("全局变量user:"+app.globalData.user)
        console.log(res.data)
      }
    }) 
  },
  getsharealbum:function(){
    var that=this
    wx.request({
      url: url+'Get/ShareAlbum',
      success(res){
        console.log(res.data)
        that.setData({
          sharealbumlist:res.data
        })
      }
    })
  },
  openalbum:function(item){
    console.log(item.target.id)
    wx.navigateTo({
      url: '/pages/function/openalbum/openalbum?sharetag=true&albumid='+item.target.id
    })
  },
})  