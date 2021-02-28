var app = getApp()
const url=app.globalData.url
Page({

  /**
   * 页面的初始数据
   */
  data: {
    albumtype: ['普通相册', '共享相册'],
    typename:'普通相册',
    // type:,
    // description:
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        albumid:options.albumid
      })
      this.getalbum()
      
  },

  updatealbum:function(){
    var that=this
    console.log('用户点击确定'+that.data.albumname)
    wx.request({
      url: url+'Set/UpdateAlbum',
      method:'GET',
      data:{
      albumid: that.data.albumid,
      albumname:that.data.albumname,
      description: that.data.description,
      albumtype: that.data.type,
      },
      success(){
        console.log('修改成功')
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
          album:res.data,
          albumname:res.data.albumname,
          description:res.data.description,
          type: res.data.albumtype
        })
        if(res.data.albumtype=='share'){
          that.setData({typename:'共享相册'})   
        }
        // else that.setData({type:'普通相册'})
        // console.log(res.data)
      }
    }) 
  },
  bindPickerChange:function(e){
 //   console.log(e)
    // this.setData({
    //   index: e.detail.value
    // })
    if(e.detail.value=='0'){
      this.setData({
      type: 'normal',
      typename:'普通相册'
    })
    }
    else this.setData({
      type: 'share',
      typename:'共享相册'
    })
  },
})