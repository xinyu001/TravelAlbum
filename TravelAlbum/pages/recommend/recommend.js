var app = getApp()
Page({  
  data:{
    "albumlist":[]
  },
  onLoad(){
    this.getcode()
    var that=this
    setTimeout(function() {
      that.getuser()
    }, 1000) 
    
  },
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
        ImageName:'s',
        
        })

    //     var content = 'http://home.com/goods/detail.html?id=845';
		// var rep1 = getRegExp('\?id=(.*)','i');
    // var code1 = content.match(rep1)[1];//取 ?id=后面所有字符串
    // console.log('?id= 后的内容为: '+code1);
        wx.cloud.init()
        wx.cloud.uploadFile({
          cloudPath: 'images/photos/'+app.globalData.userid+'/'+"时间"+".png", // 上传至云端的路径
          filePath: that.data.ImageTemPath, // 小程序临时文件路径
          success: res => {
            // 返回文件 ID
            console.log(res.fileID)
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
      url: 'http://localhost:8080/Get/OpenId',
      method:'GET',
      data: {
        code:this.data.code
      },
      success(res){
        that.setData({
          openid: res.data.openid
        })
        console.log("openid:"+res.data.openid)
      }
  })
  },
  getuser:function(){
    var that=this
    wx.request({
      url: 'http://localhost:8080/Get/User',
      method:'GET',
      data: {
        openid:that.data.openid
      },
      success(res){
        that.setData({
          user:res.data
        })
        app.globalData.userid=that.data.user.userid
       // app.globalData.user=that.data.user  //有问题
      //  console.log("全局变量userid:"+app.globalData.userid)
        //      console.log("全局变量user:"+app.globalData.user)
        console.log(res.data)
      }
    }) 
  }
})  