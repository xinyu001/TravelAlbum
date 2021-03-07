var app = getApp()
const url=app.globalData.url
Page({
  data:{
  // "uploadimagelist":[
  // // {  
  // //   "imagename":"",
  // //   "type":"",
  // //   "ai":"",
  // //   "url":""
  // // }
  // ],

  },
  onLoad: function (options) {
    this.setData({
      albumid:options.albumid,
      sharetag:options.sharetag
      
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
    this.getbaidutaken()
  },
  onShow:function(){
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
        wx.setNavigationBarTitle({
          title: that.data.album.albumname,
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
     //   console.log("返回的路径",res)
        that.setData({ImageTemPath: res.tempFilePaths[0],})
       // var code = that.data.ImageTemPath.match(/tmp\/(.*)/)[1];
      //  var imagename=code
      wx.getImageInfo({
        src: that.data.ImageTemPath,
        success(res){
          that.setData({
            type:res.type,
            imagename:new Date().getTime() +"-"+ Math.floor(Math.random() * 1000)+'.'+res.type,
          })
        }
      })
        wx.cloud.init()
        wx.cloud.uploadFile({
          // cloudPath:  "images/photos/"+app.globalData.user.userid+'/' + new Date().getTime() +"-"+ Math.floor(Math.random() * 1000)+'.'+that.data.type,
          cloudPath:  "images/photos/"+app.globalData.user.userid+'/'+that.data.imagename,  
          filePath: that.data.ImageTemPath, // 小程序临时文件路径
          success: res => {
            // 返回文件 ID
            console.log(res.fileID)
            that.setData({
              fileID:res.fileID,
            })
            wx.getFileSystemManager().readFile({
              filePath: that.data.ImageTemPath,
              encoding:'base64',
              success: res=>{
                that.data.base64=res.data
                that.scanImageInfo()
              }
            })
            // wx.request({
            //   url:  url+'Upload/Image',
            //   method:'GET',
            //   data:{
            //     albumid:that.data.albumid,
            //     imagename:that.data.ImageName,
            //     path:that.data.fileID,
            //     ai:"ai测试"
            //   },
            //   success(){
            //     console.log("上传成功")
            //     that.onShow()
            //   }
            // })
          },
          fail: console.error
        })

      }
    })

  },
  openimage:function(item){
    console.log("imageid:"+item.target.id)
    wx.navigateTo({
      url: '/pages/function/openimage/openimage?sharetag='+this.data.sharetag+'&imageid='+item.target.id+'&albumid='+this.data.albumid
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
              wx.navigateBack({
                delta: 0,
              })
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
  },
  getbaidutaken:function(){
    const tokenurl='https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id='+app.globalData.ApiKey+'&client_secret='+app.globalData.SecretKey;
    var that=this;
    wx.request({
      url: tokenurl,
      method:'POST',
      dataType:'json',
      header:{
        'content-type':'application/json;'
      },
      success (res) {
        console.log(res.data);
        that.setData({
          baidutoken:res.data.access_token
        })
      },
      fail (res){console.log("失败",res.data);}
    })
  },
  // scanImageInfo: function(){
  //   var that=this;
  //   const detecturl="https://aip.baidubce.com/rest/2.0/image-classify/v2/advanced_general?access_token="+that.data.baidutoken;
  //   //显示加载页面
  //   // wx.showLoading({
  //   //   title: '加载中',
  //   // });
  //     wx.request({
  //       url: detecturl,
  //       data:{
  //         image:that.data.base64
  //       },
  //       method:"POST",
  //       dataType:'json',
  //       header:{
  //         'content-type': 'application/x-www-form-urlencoded' 
  //       },
  //       success(res){
  //         console.log('识别图像成功')
  //         //console.log(res.data.result[0].name)
  //         that.setData({
  //           resuledata :res.data,
  //           ai:res.data.result[0].keyword
  //         })
  //         wx.request({
  //           url:  url+'Upload/Image',
  //           method:'GET',
  //           data:{
  //             albumid:that.data.albumid,
  //             imagename:that.data.imagename,
  //             path:that.data.fileID,
  //             ai:that.data.ai
  //           },
  //           success(){
  //             console.log("上传成功")
  //             that.onShow()
  //           }
  //         })
          
  //       },
  //       complete:res=>{
  //         //隐藏加载页面
  //        // wx.hideLoading()
  //       }
    
  //     })
    
  // },
  newimages:function(){
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], 
      sourceType: ['album', 'camera'], 
      success: function (res){
        that.setData({
          ImageTemPath: res.tempFilePaths
        }) 
        wx.cloud.init()
        for(let i = 0 ; i <that.data.ImageTemPath.length ; i++){ 
        wx.getImageInfo({
          src: that.data.ImageTemPath[i],
          success(res){
            that.setData({   
            ['type['+ i +']']:res.type,
            ['imagename['+i+']']:new Date().getTime() +"-"+ Math.floor(Math.random() * 1000)+'.'+res.type
          })
          wx.cloud.uploadFile({
            cloudPath:  "images/photos/"+app.globalData.user.userid+'/'+that.data.imagename[i],  
            filePath: that.data.ImageTemPath[i], // 小程序临时文件路径
            success: res => {
              console.log(res.fileID)
              that.setData({
                ['fileID['+i+']']:res.fileID,
              })
              wx.getFileSystemManager().readFile({
                filePath: that.data.ImageTemPath[i],
                encoding:'base64',
                success: res=>{
                  that.setData({
                    ['base64['+i+']']:res.data,
                  })

                  const detecturl="https://aip.baidubce.com/rest/2.0/image-classify/v2/advanced_general?access_token="+that.data.baidutoken;
                    wx.request({
                      url: detecturl,
                      data:{
                        image:that.data.base64[i]
                      },
                      method:"POST",
                      dataType:'json',
                      header:{
                        'content-type': 'application/x-www-form-urlencoded' 
                      },
                      success(res){
                        console.log('识别图像成功')
                        console.log(res.data.result[0].name)
                        that.setData({
                          ['resuledata['+i+']']:res.data,
                          ['ai['+i+']']:res.data.result[0].keyword
                        })
                        wx.request({
                          url:  url+'Upload/Image',
                          method:'GET',
                          data:{
                            albumid:that.data.albumid,
                            imagename:that.data.imagename[i],
                            path:that.data.fileID[i],
                            ai:that.data.ai[i]
                          },
                          success(){
                            console.log("第"+i+"张上传成功")
                            that.onShow()
                          }
                        })
                      },
                  
                    })


          //        that.scanImageInfo()
                }
              })
  
            }
          })
  
          //底部括号
          }
        })
      }
      }
    })
   
},

})