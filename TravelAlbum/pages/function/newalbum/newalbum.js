var app = getApp()
const url=app.globalData.url
Page({
  data:{
    albumtype: ['普通相册', '共享相册'],
    typename:'普通相册',
    type:'normal'
  },
  onLoad: function (options) {
    var that=this
    if(options.albumtype=='share'){
    that.setData({
      type:options.albumtype,
      typename:'共享相册'
    })}
    else{
      that.setData({
        type:options.albumtype,
        typename:'普通相册'
      })
    }
  },
  getvalue(e){
    console.log(e.detail.value)
    this.setData({
      value1: e.detail.value
    })
  },
  newalbum:function(event){
    var that=this
    wx.showModal({
      title: '提示',
      content: '确定新建相册？',
      success: function (res) {
        if (res.confirm) {//这里是点击了确定以后
          console.log('用户点击确定')
          wx.request({
            url: url+'Upload/Album',
            data:{
              userid:app.globalData.user.userid,
              albumname:that.data.value1,
              albumtype:that.data.type
            },
            success(){
              console.log("新建成功")
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