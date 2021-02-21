const path="cloud://test1-2g8apckr01622f46.7465-test1-2g8apckr01622f46-1304983618"
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
     
      url:'http://localhost:8080/Get/Images',
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
      url: 'http://localhost:8080/Get/Album',
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
   
})